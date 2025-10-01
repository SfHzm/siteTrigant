export default function ImageAccueil({ src, alt, className = "" }) {
  return (
    <div className={`relative w-full h-60 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-60 object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
}