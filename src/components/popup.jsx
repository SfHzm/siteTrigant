import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

function PopUp({
  showPopUp,
  closePopUp,
  images,
  currentImageIndex,
  setCurrentImageIndex,
}) {
  // 0 scroll quand popup
  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [showPopUp]);

  // Navigation au clavier
  useEffect(() => {
    if (!showPopUp) return;

    const hasMultipleImages = images?.length > 1;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && hasMultipleImages) {
        setCurrentImageIndex(
          (prev) => (prev - 1 + images.length) % images.length,
        );
      } else if (e.key === "ArrowRight" && hasMultipleImages) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "Escape") {
        closePopUp();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPopUp, images?.length, setCurrentImageIndex, closePopUp]);

  if (!showPopUp || !images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentImageIndex];
  const hasMultipleImages = images.length > 1;

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  console.log("PopUp rendered with currentImageIndex:", currentImageIndex);

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        onClick={closePopUp}
      ></div>

      {/* Contenu */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={currentImage}
            alt="fullscreen view"
            className="max-w-73 md:max-w-[80vw] lg:max-w-[90vw] max-h-[75vh] object-contain rounded-lg shadow-2xl"
          />

          <button
            onClick={closePopUp}
            className="fixed top-6 right-6 bg-accent-gold hover:bg-accent-gold/90 p-2 rounded-full transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer"
            aria-label="Fermer"
          >
            <X size={20} className="text-white" strokeWidth={2} />
          </button>

          {hasMultipleImages && (
            <>
              <button
                onClick={goToPrevious}
                className="fixed left-2 md:left-6 top-1/2 transform -translate-y-1/2 bg-accent-gold/90 hover:bg-accent-gold text-white p-2 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                aria-label="Image précédente"
              >
                <ChevronLeft size={20} strokeWidth={2} />
              </button>

              <button
                onClick={goToNext}
                className="fixed right-2 md:right-6 top-1/2 transform -translate-y-1/2 bg-accent-gold/90 hover:bg-accent-gold text-white p-2 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                aria-label="Image suivante"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>

              {/* Indicateur de position */}
              <div className="fixed bottom-2 lg:bottom-8  left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopUp;
