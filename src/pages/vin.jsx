import LoadingSpinner from "../components/LoadingSpinner";
import ImageAccueil from "../components/ImageAccueil";
import vignes_vueAerienne from "../assets/images/Photo_modif_vigne.png";
import vendange from "../assets/images/vendange.png";
import vigneDroite from "../assets/decorations/vigne-bordeaux-droite.png";
import vigneGauche from "../assets/decorations/vigne-bordeaux-gauche.png";
import vin_img from "../assets/images/Image_vin.png";
import { useState } from "react";
import PresentationPage from "../components/presentationPage";
import "../components/rectangleImage.scss";
import { Link } from "react-router-dom";
export default function Vin() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      {!imageLoaded && <LoadingSpinner />}
      <ImageAccueil
        src={vignes_vueAerienne}
        alt="Vin Trigant"
        h={`LE DOMAINE VITICOLE`}
        onImageLoaded={() => setImageLoaded(true)}
      />

      <div className="w-full items-center flex flex-col lg:flex-row lg:w-[90vw] lg:gap-x-15 mx-auto">
        <div className="relative inline-block mt-[var(--space-small)] md:w-[90vw] lg:mt-[var(--space-big-lg)]">
          <img
            className="block w-93 h-auto md:w-[95vw] rounded-lg"
            src={vendange}
            alt="Personnes vendangeant dans les vignes"
          />
        </div>
        <div className="flex flex-col items-center h-fit w-[90vw] md:w-[88vw]">
          <h1
            className="medium-title text-left w-full"
            style={{ paddingTop: "5vw", textAlign: "left", width: "100%" }}
          >
            Les vendanges
          </h1>
          <div className="lg:pt-10">
            <p className="medium-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ullamcorper bibendum nisi ac dapibus. Nam nec ipsum hendrerit
              blandit nulla eu, consectetur elit. Nam turpis urna, pulvinar non
              efficitur ac, egestas viverra justo. Fusce gravida, diam eget
              laoreet dictum, ex erat convallis tellus, id lacinia nunc urna
              eget ex. Praesent a massa pretium, maximus nibh ornare, finibus
            </p>
          </div>
          <div className="pt-10">
            <Link
              to={"/vignes"}
              className="self-center inline-flex px-5 py-2 font-bold text-green-accent bg-white border-2 border-green-accent rounded-lg lg:hover:bg-green-accent lg:hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md"
            >
              Découvrir nos cépages
            </Link>
          </div>
        </div>
      </div>
      <div
        className="mt-[var(--space-small)] lg:mt-[var(--space-big-lg)]
        lg:mb-[var(--space-small)] grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-[1fr_0.5fr_1fr]"
      >
        <img
          src={vigneGauche}
          alt="Décoration vignes couleur rouge bordeaux partant de la gauche de l'écran"
        />
        <div></div>
        <img
          src={vigneDroite}
          alt="Décoration vignes couleur rouge bordeaux partant de la droite de l'écran"
        />
      </div>
      <div className="w-full items-center flex flex-col lg:mb-[var(--space-big-lg)] lg:flex-row lg:w-[90vw] lg:gap-x-15 mx-auto">
        <div className="flex flex-col items-center h-fit w-[90vw] md:w-[88vw]">
          <h1
            className="medium-title text-left w-full"
            style={{ textAlign: "left", width: "100%" }}
          >
            Un terroir unique
          </h1>
          <div>
            <p className="medium-text">
              Avec son vignoble de 3,65 ha, composé de 50 % de
              Cabernet-Sauvignon et de 50 % de Merlot, le terroir du Château
              Trigant est reconnu comme l’un des meilleurs de l’appellation.
            </p>
          </div>
          <h1
            className="medium-title text-left w-full"
            style={{ textAlign: "left", width: "100%" }}
          >
            Un vin récompensé de nombreuses fois
          </h1>
          <div>
            <p className="medium-text">
              Distingué par de nombreuses médailles à l’occasion des plus grands
              salons internationaux (Paris, Lyon, Bordeaux et Bruxelles), le vin
              du Château Trigant a rejoint le célèbre Guide Hachette des Vins.
            </p>
          </div>
          <div className="pt-10">
            <Link
              to={"/millésimes"}
              className="self-center inline-flex px-5 py-2 font-bold text-green-accent bg-white border-2 border-green-accent rounded-lg lg:hover:bg-green-accent lg:hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md"
            >
              Découvrir nos millésimes
            </Link>
          </div>
        </div>
        <div className="max-lg:order-first relative inline-block mt-[var(--space-small)] md:w-[90vw] lg:mt-[var(--space-big-lg)]">
          <img
            className="block w-93 h-auto md:w-[95vw] rounded-lg"
            src={vin_img}
            alt="Bouteille de vin de Trigant exposée au premier plan"
          />
        </div>
      </div>
    </>
  );
}
