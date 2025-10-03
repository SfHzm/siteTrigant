import ImageAccueil from "../components/ImageAccueil";
import Timeline from "../components/timeline";
import mainImg from "../assets/images/entree_modified.png";
import frame from "../assets/decorations/frame.png";
import tableau1 from "../assets/images/tableau1.png";
import separateur from "../assets/decorations/separateur.png";
import tableau2 from "../assets/images/tableau2.png";
import tableau3 from "../assets/images/tableau3.png";

export default function Histoire() {
  const h = ["1860 ", "1989 ", "2021", "2025"];
  const p = [
    "Acquisition de la propriété par la famille Sèze",
    "Replantation de la vigne",
    "Conversion en agriculture biologique avec l’équipe Derenoncourt",
    "Fin de la restauration de l’intérieur de la chartreuse et développement de l’activité événementiel",
  ];

  return (
    <div className="w-full items-center flex flex-col">
      <ImageAccueil src={mainImg} alt="Chateau Trigant" h="NOTRE HISTOIRE" />

      <div className="w-full items-center flex flex-col lg:flex-row lg:w-[90vw] lg:gap-x-15">
        <div className="relative inline-block mt-[var(--space-small)] md:w-[90vw] lg:mt-[var(--space-big-lg)]">
          <img
            src={frame}
            alt="frame"
            className="block w-93 h-auto md:w-[95vw]"
          />
          <img
            src={tableau1}
            alt="Tableau 1"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[90%] md:w-[90vw]"
          />
        </div>

        <div className="flex flex-col items-center h-fit w-85 md:w-[88vw]">
          <h1
            className="medium-title text-left w-full"
            style={{ paddingTop: "5vw", textAlign: "left", width: "100%" }}
          >
            300 ans d'Histoire
          </h1>

          <div className="lg:pt-10">
            <p className="medium-text">
              Le domaine et son élégante chartreuse, construite au XVIIIe siècle
              par Philippe Trigant, avocat au parlement de Bordeaux, constituent
              un ensemble rare de la prestigieuse appellation Pessac-Léognan.
            </p>

            <p className="medium-text">
              En 1860, la propriété entre dans la famille Sèze, qui la conserve
              depuis plusieurs générations.
            </p>

            <p className="medium-text">
              Château Trigant est attaché à une histoire familiale hors du
              commun, foisonnant de corsaires, d’explorateurs et de navigateurs
              au long cours.
            </p>
          </div>
        </div>
      </div>

      <img
        src={separateur}
        alt="separateur"
        className="my-[var(--space-big)] w-80 md:w-[58vw] lg:w-[25vw] lg:my-[var(--space-big-lg)]"
      />

      <div className="md:flex md:justify-between md:w-[90vw] lg:mb-[var(--space-big-lg)] lg:items-center lg:justify-around lg:md-[100vw]">
        <Timeline h={h} p={p} />
        <div className="sm:block hidden md:w-[40vw] md:flex md:flex-col md:justify-between lg:w-fit">
          <img
            src={tableau2}
            alt="Tableau 2"
            className="rounded-[5px] shadow-[black_0px_4px_7px_-1px,black_-2px_1px_8px_-1px] lg:w-[25vw]"
          />
          <img
            src={tableau3}
            alt="Tableau 3"
            className="rounded-[20px] shadow-[black_0px_4px_7px_-1px,black_0px_1px_8px_-1px] lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}
