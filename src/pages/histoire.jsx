import ImageAccueil from "../components/ImageAccueil";
import Timeline from "../components/timeline";
import mainImg from "../assets/images/entree_modified.png";
import frame from "../assets/decorations/frame.png";
import tableau1 from "../assets/images/tableau1.png";
import separateur from "../assets/decorations/separateur.png";
import tableau2 from "../assets/images/tableau2.png";

export default function Histoire() {
  const h = ["1860 ", "1989 ", "2021", "2025"];
  const p = [
    "Acquisition de la propriété par la famille Sèze",
    "Replantation de la vigne",
    "Conversion en agriculture biologique avec l’équipe Derenoncourt",
    "Fin de la restauration de l’intérieur de la chartreuse et développement de l’activité événementiel",
  ];

  return (
    <div>
      <ImageAccueil src={mainImg} alt="Chateau Trigant" h="NOTRE HISTOIRE" />

      <div className="w-full items-center flex flex-col">
        <div className="relative inline-block mt-[var(--space-small)]">
          <img src={frame} alt="frame" className="block w-93 h-auto" />
          <img
            src={tableau1}
            alt="Tableau 1"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[90%]"
          />
        </div>

        <div className="flex flex-col items-center h-fit w-85">
          <h1
            className="mini-title text-left w-full"
            style={{ paddingTop: "5vw", textAlign: "left", width: "100%" }}
          >
            300 ans d'Histoire
          </h1>
          <p className="mini-text">
            Le domaine et son élégante chartreuse, construite au XVIIIe siècle
            par Philippe Trigant, avocat au parlement de Bordeaux, constituent
            un ensemble rare de la prestigieuse appellation Pessac-Léognan.
          </p>

          <p className="mini-text">
            En 1860, la propriété entre dans la famille Sèze, qui la conserve
            depuis plusieurs générations.
          </p>

          <p className="mini-text">
            Château Trigant est attaché à une histoire familiale hors du commun,
            foisonnant de corsaires, d’explorateurs et de navigateurs au long
            cours.
          </p>
        </div>

        <img
          src={separateur}
          alt="separateur"
          className="my-[var(--space-big)] w-80"
        />

        <div>
          <Timeline h={h} p={p} />
          <div className="sm:block hidden">
            <img src={tableau2} alt="Tableau 2" />
          </div>
        </div>
      </div>
    </div>
  );
}
