import { useState } from "react";

export default function ImageAccueil({
  src,
  alt,
  className,
  h,
  p = "",
  onImageLoaded = null,
}) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageIsLoaded(true);
    if (onImageLoaded) {
      onImageLoaded();
    }
  };

  return (
    <div className={`relative bg-white w-full h-60 md:h-fit ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-60 md:h-fit object-cover lg:h-[100vh] transition-opacity duration-300 ${
          imageIsLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
      />
      <div className="absolute inset-0 bg-black/26"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white-text gap-5 pt-3.5">
        <p
          className="font-artemisia text-[1.05rem] md:text-4xl lg:text-5xl text-center leading-relaxed"
          style={{ whiteSpace: "pre" }}
        >
          {h}
        </p>
        <p className="text-[0.63rem] text-center font-inter font-light w-80">
          {p}
        </p>
      </div>
    </div>
  );
}
