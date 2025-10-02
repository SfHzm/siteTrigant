export default function ImageAccueil({ src, alt, className, h, p = "" }) {
  return (
    <div className={`relative w-full h-60 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-60 object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white-text gap-5 pt-3.5">
        <h1 className="font-artemisia text-[1.4rem]">{h}</h1>
        <p className="text-[0.63rem] text-center font-inter font-light w-80">{p}</p>
      </div>
    </div>
  );
}