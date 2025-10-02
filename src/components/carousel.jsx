import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Carousel({ slides }) {
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);
  const isClickScrolling = useRef(false);
  const [current, setCurrent] = useState(0);
  const [numVisible, setNumVisible] = useState(1);

  const length = slides.length;

  // Détecte le nombre de slides visibles selon la taille d'écran
  useEffect(() => {
    const updateNumVisible = () => {
      setNumVisible(window.innerWidth >= 768 ? 2 : 1); // md = 768px
    };
    updateNumVisible();
    window.addEventListener("resize", updateNumVisible);
    return () => window.removeEventListener("resize", updateNumVisible);
  }, []);

  const numButtons = Math.ceil(length / numVisible);

  // Met à jour le slide courant en fonction du scroll
  const handleScroll = () => {
    if (!carouselRef.current || isClickScrolling.current) return;

    const children = Array.from(carouselRef.current.children);
    const scrollLeft = carouselRef.current.scrollLeft;

    const index = children.findIndex((child) => {
      const left = child.offsetLeft;
      return scrollLeft + 1 >= left && scrollLeft < left + child.offsetWidth;
    });

    if (index !== -1) setCurrent(Math.floor(index / numVisible));
  };

  // Reset timer
  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Auto-scroll toutes les 10s
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (!carouselRef.current) return;
      const next = current + 1 >= numButtons ? 0 : current + 1;
      const slideIndex = next * numVisible;
      const nextSlideEl = carouselRef.current.children[slideIndex];
      if (nextSlideEl) {
        carouselRef.current.scrollTo({
          left: nextSlideEl.offsetLeft,
          behavior: "smooth",
        });
      }
      setCurrent(next);
    }, 10000);

    return () => clearTimeout(timeoutRef.current);
  }, [current, numButtons, numVisible]);

  // Clique sur point
  const goToSlide = (buttonIndex) => {
    resetTimeout();
    isClickScrolling.current = true;

    const slideIndex = buttonIndex * numVisible;
    const slideEl = carouselRef.current.children[slideIndex];
    if (slideEl) {
      carouselRef.current.scrollTo({
        left: slideEl.offsetLeft,
        behavior: "smooth",
      });
    }
    setCurrent(buttonIndex);

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 500);
  };

  return (
    <div className="relative">
      <div
        className="carousel flex w-full gap-x-4 mt-[var(--space-small)] overflow-x-auto scroll-smooth"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative flex flex-col items-center w-full md:w-1/2"
          >
            {/* Image */}
            {slide.variant === "shadowTLeft" ? (
              <img
                src={slide.image}
                alt={slide.title}
                className="w-70 h-40 mt-[13px] shadow-[-28px_-28px_0px_-15px_var(--color-accent-gold)] ml-[14px]"
              />
            ) : slide.variant === "gold-barTop" ? (
              <div className="relative inline-block mt-[13px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-70 h-40 block"
                />
                <div
                  className="absolute w-76 h-1/2 left-1/2 transform -translate-x-1/2 top-[-13px] bg-accent-gold"
                  style={{ zIndex: -12 }}
                ></div>
              </div>
            ) : slide.variant === "shadowTRight" ? (
              <img
                src={slide.image}
                alt={slide.title}
                className="w-70 h-40 mt-[13px] shadow-[28px_-28px_0px_-15px_var(--color-accent-gold)] ml-[14px]"
              />
            ) : slide.variant === "shadowLeft" ? (
              <img
                src={slide.image}
                alt={slide.title}
                className="w-70 h-40 shadow-[-28px_28px_0px_-15px_var(--color-accent-gold)] ml-[14px] mb-[13px]"
              />
            ) : slide.variant === "gold-bar" ? (
              <div className="relative inline-block mb-[13px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-70 h-40 block"
                />
                <div
                  className="absolute w-76 h-1/2 left-1/2 transform -translate-x-1/2 bottom-[-13px] bg-accent-gold"
                  style={{ zIndex: -12 }}
                ></div>
              </div>
            ) : slide.variant === "shadowRight" ? (
              <img
                src={slide.image}
                alt={slide.title}
                className="w-70 h-40 shadow-[28px_28px_0px_-15px_var(--color-accent-gold)] ml-[14px] mb-[13px]"
              />
            ) : (
              <img src={slide.image} alt={slide.title} className="w-70 h-40" />
            )}

            {/* Texte */}
            <div className="w-80 flex flex-col justify-center items-center mb-[8vh] md:mb-[7.5vh]">
              <h2 className="mini-title">{slide.title}</h2>
              {slide.soustitle && (
                <p className="sousTitle">{slide.soustitle}</p>
              )}
              <div className="mini-text" style={{ whiteSpace: "pre-line" }}>
                <ReactMarkdown>{slide.text}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Points de navigation */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: numButtons }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full md:w-2.5 md:h-2.5 ${
              index === current ? "bg-accent-gold" : "bg-title"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
