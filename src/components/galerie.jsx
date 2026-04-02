import PopUp from "./popup";
import { useState } from "react";

export default function Galerie({ images }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Tableau de toutes les images du carousel
  const imagesList = images.map((img) => img);

  return (
    <div className="grid gap-1.5 grid-cols-2 mx-1 mt-[var(--space-small)] lg:grid-cols-5">
      {images.map((img, index) => (
        <button
          key={index}
          className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-101"
          onClick={() => {
            setCurrentImageIndex(index);
            setShowPopUp(true);
          }}
        >
          <img
            src={img}
            alt={`Photo ${index + 1}`}
            className="w-full h-full object-cover cursor-pointer"
          />
        </button>
      ))}

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
