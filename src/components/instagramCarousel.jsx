/**
 * src/components/instagramCarousel.js
 * 
 * Carrousel horizontal au swipe sur mobile (scroll natif + snap CSS, les
 * cartes voisines dépassent sur les bords pour inviter à faire défiler) ;
 */

import { useRef, useState } from "react";
import {
  IconBrandInstagram,
  IconHeart,
  IconMessageCircle,
} from "@tabler/icons-react";

/**
 * Composant de carrousel Instagram. Il est utilisé par InstagramFeed, qui lui fournit les posts à afficher. 
 * Le carrousel est horizontal, avec un scroll natif et un snap CSS pour que les cartes s'alignent au centre. 
 * Sur mobile, seule la légende du post centré est visible, tandis que celles des voisins s'estompent. 
 * Un stepper de points permet de naviguer entre les posts.
 *
 * @prop {Array} posts - Les posts Instagram à afficher dans le carrousel.
 * @prop {string} instagramUrl - L'URL du compte Instagram, utilisée pour les liens vers les posts.
 * @prop {Object} labels - Les labels pour les éléments du carrousel (likes, commentaires, etc.).
 */
export function InstagramCarousel({ posts = [], instagramUrl, labels }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    const card =
      track?.children[Math.max(0, Math.min(posts.length - 1, index))];
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2,
      behavior: "smooth",
    });
  };

  // Index actif (stepper + estompage des légendes sur mobile) = carte dont
  // le centre est le plus proche du centre visible ; aux extrémités du
  // scroll, on force la première / dernière carte.
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft <= 4) return setActive(0);
    if (track.scrollLeft >= maxScroll - 4) return setActive(posts.length - 1);
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;
    Array.from(track.children).forEach((el, i) => {
      const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <div className="relative mt-10">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="relative -mx-4 flex snap-x snap-mandatory scrollbar-none gap-3 overflow-x-auto px-[11vw] pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 sm:overflow-visible sm:p-0 lg:grid-cols-6 [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post, i) => (
          <figure
            key={post.image}
            className="group w-[78vw] shrink-0 snap-center sm:w-auto"
          >
            <a
              href={post.permalink ?? instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-square overflow-hidden bg-accent-gold/20"
            >
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-accent-content/0 transition-colors duration-300 group-hover:bg-accent-content/50">
                <IconBrandInstagram
                  className="size-8 text-accent-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </span>
            </a>
            {/* Sur mobile, seule la légende du post centré est visible ;
                celles des voisins qui dépassent s'estompent. */}
            <figcaption
              className={`mt-3 transition-opacity duration-300 sm:opacity-100 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="line-clamp-2 font-inter text-sm leading-relaxed whitespace-pre-line text-accent-content/80">
                {post.caption}
              </p>
              <p className="mt-2 flex items-center gap-4 font-inter text-xs text-accent-content/60">
                <time dateTime={post.timestamp}>{post.dateLabel}</time>
                {post.likeCount !== undefined && (
                  <span className="inline-flex items-center gap-1">
                    <IconHeart className="size-3.5" aria-hidden />
                    <span className="sr-only">{labels.likes} : </span>
                    {post.likeCount}
                  </span>
                )}
                {post.commentsCount !== undefined && (
                  <span className="inline-flex items-center gap-1">
                    <IconMessageCircle className="size-3.5" aria-hidden />
                    <span className="sr-only">{labels.comments} : </span>
                    {post.commentsCount}
                  </span>
                )}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Stepper mobile : points seuls, masqué dès que la grille prend le
          relais. Il pilote le scroll, qui reste natif (swipe compris). */}
      <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
        {posts.map((post, i) => (
          <button
            key={post.image}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`${labels.goTo} ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            className={
              i === active
                ? "h-2 w-6 rounded-full bg-accent-gold transition-all duration-300"
                : "size-2 rounded-full bg-accent-content/20 transition-all duration-300 hover:bg-accent-content/40"
            }
          />
        ))}
      </div>
    </div>
  );
}
