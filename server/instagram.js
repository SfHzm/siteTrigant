/**
 * server/instagram.js
 * 
 * Contrepartie SERVEUR de `src/lib/instagram.js`. Elle interroge l'API Meta
 * pour récupérer les posts Instagram, en cachant le token côté serveur et en
 * mettant en cache les résultats pour ne pas surcharger l'API. Le front ne
 * parle jamais directement à l'API Meta : il appelle toujours /api/instagram
 * (voir server/index.js).
 */

const INSTAGRAM_API = "https://graph.instagram.com";

// Champs du nœud « IG Media » (couverts par instagram_business_basic).
const MEDIA_FIELDS =
  "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count";

// Token courant : celui de l'environnement au démarrage, remplacé en mémoire
// si un rafraîchissement en renvoie un nouveau.
let token = process.env.INSTAGRAM_ACCESS_TOKEN;
let lastRefreshAt = 0;
const REFRESH_INTERVAL_MS = 24 * 60 * 60 * 1000;

// Cache mémoire d'une heure (équivalent du `revalidate: 3600` qu'on avait
// côté Next.js, mais fait à la main puisqu'on n'est plus dans Next.js).
let cache = null; // { posts, expiresAt }
const CACHE_TTL_MS = 60 * 60 * 1000;

async function refreshTokenIfDue() {
  if (!token || Date.now() - lastRefreshAt < REFRESH_INTERVAL_MS) return;
  lastRefreshAt = Date.now();
  try {
    const res = await fetch(
      `${INSTAGRAM_API}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`,
      { cache: "no-store" },
    );
    if (!res.ok) return;
    const data = await res.json();
    if (data.access_token) token = data.access_token;
  } catch {
    // Échec sans gravité : nouvel essai dans 24 h, le token vit 60 jours.
  }
}

export async function getInstagramPosts(limit = 12) {
  if (!token) return null;
  if (cache && cache.expiresAt > Date.now()) return cache.posts.slice(0, limit);

  void refreshTokenIfDue();

  try {
    const res = await fetch(
      `${INSTAGRAM_API}/me/media?fields=${MEDIA_FIELDS}&limit=${limit}&access_token=${token}`,
    );
    if (!res.ok) {
      console.error(
        `Instagram : /me/media a répondu ${res.status} — ${await res.text()}`,
      );
      return null;
    }
    const { data } = await res.json();
    if (!data?.length) return null;

    const posts = data
      .map((media) => ({
        id: media.id,
        // Les vidéos n'ont pas de media_url affichable en <img> : on prend
        // leur vignette. Pour les albums, media_url est la première photo.
        image:
          (media.media_type === "VIDEO"
            ? media.thumbnail_url
            : media.media_url) ?? "",
        caption: media.caption ?? "",
        permalink: media.permalink,
        timestamp: media.timestamp,
        likeCount: media.like_count,
        commentsCount: media.comments_count,
      }))
      .filter((post) => post.image)
      .slice(0, limit);

    cache = { posts, expiresAt: Date.now() + CACHE_TTL_MS };
    return posts;
  } catch (error) {
    console.error("Instagram : récupération du flux impossible", error);
    return null;
  }
}
