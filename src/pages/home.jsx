import mainImg from "../assets/images/23-modified.jpeg";
import vigne_gauche from "../assets/decorations/vigne_gauche_rotate.png";
import vigne_droite from "../assets/decorations/vigne_droite_rotate.png";
import jardin_nuit from "../assets/images/jardin_nuit_mariage.jpeg";

import ImageAccueil from "../components/ImageAccueil";
import Carousel from "../components/carousel";
import slides from "../data/slidesEspaces.json";
import { Link } from "react-router-dom";
import PresentationPage from "../components/presentationPage";

export default function Home() {
  return (
    <div>
      <ImageAccueil src={mainImg} alt="Chateau Trigant" />

      <PresentationPage page="home" />

      <div>
        <h1 className="title">Nos Espaces de Réception</h1>
        <Carousel slides={slides} />
      </div>

      <div className="flex justify-between items-center mt-[var(--space-big)] md:mt-[var(--space-big-md)]">
        <img src={vigne_gauche} alt="" className="w-40 md:w-[40vw]" />
        <img src={vigne_droite} alt="" className="w-40 md:w-[40vw]" />
      </div>

      <div className="w-full flex justify-center items-center mt-[var(--space-big)]">
        <div className="flex flex-col items-center w-[90vw] py-[2.5vw] h-fit bg-accent-gold md:relative md:w-[95vw] md:py-[1.7vw]">
          <img src={jardin_nuit} alt="" className="w-[85vw] md:w-[92vw]" />
          <div className="md:absolute md:w-[87.5vw] md:h-[36vh] md:border-2 md:border-accent-gold md:top-1/2 md:-translate-y-1/2"></div>
          <div
            className="w-[90vw] h-2/5 px-[2.5vw] pt-2 md:absolute md:bg-accent-gold md:h-58 md:w-[50vw] md:top-1/2 md:-translate-y-1/2 md:right-0"
            style={{ zIndex: 12 }}
          >
            <h1 className="font-artemisia text-accent-content md:text-[1.3rem]">
              Célébrez Votre Union
            </h1>
            <p className="h-fit text-justify text-[0.75rem] font-inter text-accent-content mt-2.5 w-[82vw] md:w-fit md:mt-3.5 md:pr-[3vw] md:text-[0.9rem]">
              Célébrez le mariage de vos rêves dans un lieu d’exception. <br />{" "}
              A la tombée de la nuit, le parc s’illumine pour des soirées
              féériques. Ce cadre enchanteur émerveillera vos invités.
            </p>
            <Link
              to="/mariage"
              className="btn btn-xs shadow-no sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl border-1 rounded-xs border-accent-content text-accent-content font-normal font-abhaya text-sm float-right mt-5 p-4 md:mr-[3vw]"
            >
              En savoir +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
