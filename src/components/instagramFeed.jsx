/**
 * src/components/instagramFeed.jsx
 *
 * Contrepartie CLIENT de `server/instagram.js`. Elle interroge le serveur
 * Express pour récupérer les posts Instagram, en passant par la route /api/instagram
 * (nginx redirige vers le serveur Express, qui interroge l'API Meta). Le front ne
 * parle jamais directement à l'API Meta : il appelle toujours /api/instagram.
 */

import { useEffect, useState } from "react";
import { IconBrandInstagram } from "@tabler/icons-react";

import { getInstagramPosts } from "../lib/instagram";
import { InstagramCarousel } from "./instagramCarousel";

const dateFormat = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
});

export function InstagramFeed({ instagramUrl, limit = 8, labels = {} }) {
  const title = labels.title ?? "La vie à Trigant";
  const cta = labels.cta ?? "Suivre";
  const likesLabel = labels.likes ?? "J'aime";
  const commentsLabel = labels.comments ?? "Commentaires";
  const goTo = labels.goTo ?? "Aller au post";

  const handle =
    "@" + (instagramUrl.split("/").filter(Boolean).pop() ?? "instagram");

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let cancelled = false;

    getInstagramPosts(limit).then((apiPosts) => {
      if (cancelled) return;
      setPosts(
        apiPosts
          ? apiPosts.map((post) => ({
              ...post,
              alt: post.caption || handle,
              dateLabel: dateFormat.format(new Date(post.timestamp)),
            }))
          : null,
      );
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  if (!posts) return null;

  return (
    <section
      aria-labelledby="instagram-title"
      className="w-full flex justify-center mt-[var(--space-big)] md:mt-[var(--space-big-md)] lg:mt-33"
    >
      <div className="w-[90vw] lg:w-[80vw]">
        <header className="md:flex md:items-end md:justify-between md:gap-6">
          <div>
            <h1
              id="instagram-title"
              className="title font-artemisia text-accent-content pb-4!"
            >
              {title}
            </h1>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-inter text-sm tracking-[0.08em] text-accent-content/70 transition-colors hover:text-accent-content"
            >
              {handle}
            </a>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn shadow-no mt-5 inline-flex items-center justify-center gap-2 rounded-full! border-0 bg-accent-gold p-4 font-artemisia text-sm font-normal whitespace-nowrap text-accent-content md:mt-0 md:shrink-0"
          >
            <IconBrandInstagram className="size-5" aria-hidden />
            {cta}
          </a>
        </header>

        <InstagramCarousel
          posts={posts ?? null}
          instagramUrl={instagramUrl}
          labels={{
            likes: likesLabel,
            comments: commentsLabel,
            goTo,
          }}
        />
      </div>
    </section>
  );
}
