export default function Galerie({ images }) {
  return (
    <div className="grid gap-2 grid-cols-2 mx-2 mt-[var(--space-small)]">
      {images.map((img, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img src={img} alt={`Photo ${index + 1}`} className="w-full h-full object-cover"/>
        </div>
      ))}
    </div>
  );
}
