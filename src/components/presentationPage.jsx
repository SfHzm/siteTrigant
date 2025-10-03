import presentationTexts from "../data/presentationTexts.json";

export default function PresentationPage({ page }) {
  const presentation = presentationTexts.find((item) => item.page === page);

  if (!presentation) {
    return <p>Contenu non trouvé pour cette page.</p>;
  }

  return (
    <div className="text-center w-[90vw] flex flex-col justify-center items-center my-[var(--space-small)] mx-auto md:mb-[var(--space-small-md)] lg:my-[var(--space-small-lg)]">
      <h1 className="font-abhaya-bold text-title text-2xl text-[1.4rem] md:text-3xl">
        {presentation.title}
      </h1>
      <p className="font-inter text-text mt-[2vh] text-[1rem] md:text-lg">{presentation.text}</p>
    </div>
  );
}
