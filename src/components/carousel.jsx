import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import PopUp from "./popup";

export default function Carousel({ slides }) {
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);
  const isClickScrolling = useRef(false);
  const [current, setCurrent] = useState(0);
  const [numVisible, setNumVisible] = useState(1);
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Tableau de toutes les images du carousel
  const imagesList = slides.map(slide => slide.image);

  const length = slides.length;

  // Détecte le nombre de slides visibles selon la taille d'écran
  useEffect(() => {
    const updateNumVisible = () => {
      if (window.innerWidth >= 1024) {
        setNumVisible(3);
      } else if (window.innerWidth >= 768) {
        setNumVisible(2);
      } else {
        setNumVisible(1);
      }
    };
    updateNumVisible();
    window.addEventListener("resize", updateNumVisible);
    return () => window.removeEventListener("resize", updateNumVisible);
  }, []);

  // Nombre de boutons pour slides “glissants”
  const numButtons = Math.max(length - numVisible + 1, 1);

  // Met à jour le slide courant en fonction du scroll
  const scrollTimeoutRef = useRef(null);
  const handleScroll = () => {
    if (!carouselRef.current) return;
    // bloque recalcul pendant l’animation déclenchée par un clic
    if (isClickScrolling.current) return;

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      const children = Array.from(carouselRef.current.children);
      const scrollLeft = carouselRef.current.scrollLeft;

      const index = children.findIndex((child) => {
        const left = child.offsetLeft;
        return scrollLeft + 1 >= left && scrollLeft < left + child.offsetWidth;
      });

      if (index !== -1) setCurrent(index);
    }, 100);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Auto-scroll toutes les 10s ou 5s
  useEffect(() => {
    const interval = window.innerWidth >= 768 ? 5000 : 10000;

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (!carouselRef.current) return;

      const next = current + 1 >= numButtons ? 0 : current + 1;
      const slideEl = carouselRef.current.children[next];

      if (slideEl) {
        carouselRef.current.scrollTo({
          left: slideEl.offsetLeft,
          behavior: "smooth",
        });
      }
      setCurrent(next);
    }, interval);

    return () => clearTimeout(timeoutRef.current);
  }, [current, numButtons]);

  // Clique sur point
  const goToSlide = (buttonIndex) => {
    resetTimeout();
    isClickScrolling.current = true;

    const slideEl = carouselRef.current.children[buttonIndex];
    if (slideEl) {
      carouselRef.current.scrollTo({
        left: slideEl.offsetLeft,
        behavior: "smooth",
      });
    }

    setCurrent(buttonIndex);

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <div className="relative">
      <div
        className="carousel flex w-full mt-[var(--space-small)] overflow-x-auto scroll-smooth"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative flex flex-col items-center w-full md:w-1/2 lg:w-1/3"
          >
            {/* Image */}
            {slide.variant === "shadowTLeft" ? (
              <button
                onClick={() => {
                  setCurrentImageIndex(index);
                  setShowPopUp(true);
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-70 h-40 mt-[13px] shadow-[-28px_-28px_0px_-15px_var(--color-accent-gold)] ml-[14px] cursor-pointer"
                />
              </button>
            ) : slide.variant === "gold-barTop" ? (
              <button
                onClick={() => {
                  setCurrentImageIndex(index);
                  setShowPopUp(true);
                }}
                className="relative inline-block mt-[13px] hover:opacity-90 transition-opacity"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-70 h-40 block cursor-pointer"
                />
                <div
                  className="absolute w-76 h-1/2 left-1/2 transform -translate-x-1/2 top-[-13px] bg-accent-gold"
                  style={{ zIndex: -12 }}
                ></div>
              </button>
            ) : slide.variant === "shadowTRight" ? (
              <button
                onClick={() => {
                  setCurrentImageIndex(index);
                  setShowPopUp(true);
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-70 h-40 mt-[13px] shadow-[28px_-28px_0px_-15px_var(--color-accent-gold)] mr-[14px] cursor-pointer"
                />
              </button>
            ) : slide.variant === "shadowLeft" ? (
              <button
                onClick={() => {
                  setCurrentImageIndex(index);
                  setShowPopUp(true);
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-70 h-40 shadow-[-28px_28px_0px_-15px_var(--color-accent-gold)] ml-[14px] mb-[13px] cursor-pointer"
                />
              </button>
            ) : slide.variant === "gold-bar" ? (
              <button
                onClick={() => {
                  setCurrentImageIndex(index);
                  setShowPopUp(true);
                }}
                className="relative inline-block mb-[13px] hover:opacity-90 transition-opacity"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-70 h-40 block cursor-pointer"
                />
                <div
                  className="absolute w-76 h-1/2 left-1/2 transform -translate-x-1/2 bottom-[-13px] bg-accent-gold"
                  style={{ zIndex: -12 }}
                ></div>
              </button>
            ) : slide.variant === "shadowRight" ? (
              <button
                onClick={() => {
                  setCurrentImageIndex(index);
                  setShowPopUp(true);
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-70 h-40 shadow-[28px_28px_0px_-15px_var(--color-accent-gold)] mr-[14px] mb-[13px] cursor-pointer"
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  setCurrentImageIndex(index);
                  setShowPopUp(true);
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-70 h-40 cursor-pointer" 
                />
              </button>
            )}

            {/* Texte */}
            <div className="w-[85vw] flex flex-col justify-center items-center mb-[8vh] md:w-80 md:mb-[7.5vh]">
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
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
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

      {/* PopUp pour les images */}
      <PopUp 
        showPopUp={showPopUp} 
        closePopUp={() => setShowPopUp(false)}
        images={imagesList}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
}
