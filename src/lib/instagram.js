/**
 * src/lib/instagram.js
 *
 * Contrepartie CLIENT de `server/instagram.js`. N'a jamais accès au token :
 * elle interroge simplement la route /api/instagram, que nginx redirige
 * vers le petit serveur Express (voir nginx/nginx.conf).
 */

export async function getInstagramPosts(limit = 12) {
  try {
    const res = await fetch(`/api/instagram?limit=${limit}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
