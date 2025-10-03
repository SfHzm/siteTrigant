import ImageAccueil from "../components/ImageAccueil";
import mainImg from "../assets/images/pelouse.jpg";
import PresentationPage from "../components/presentationPage";
import Carousel from "../components/carousel";
import slides from "../data/slidesEspaces.json";
import formules from "../data/formulesMariage.json";
import Galerie from "../components/galerie";
import separateur from "../assets/decorations/separateur.png";

import pelouse from "../assets/images/galerieMariage/pelouse.jpg";
import toast from "../assets/images/galerieMariage/toast.jpg";
import maries from "../assets/images/galerieMariage/maries.jpg";
import cour_nuit from "../assets/images/galerieMariage/cour_nuit.png";
import tables from "../assets/images/galerieMariage/tables.jpg";
import room from "../assets/images/galerieMariage/room.jpg";
import dance from "../assets/images/galerieMariage/dance.jpg"
import bathroom from "../assets/images/galerieMariage/bathroom.jpg"

export default function Mariage() {
  const images = [pelouse, toast, maries, cour_nuit, tables, dance, room, bathroom];

  return (
    <div>
      <ImageAccueil
        src={mainImg}
        alt="Chateau Trigant"
        h="UN ECRIN DE VERDURE"
      />

      <PresentationPage page="home" />

      <div>
        <h1 className="title">Nos Espaces de Réception</h1>
        <Carousel slides={slides} />
      </div>

      <div className="mt-[var(--space-small)] md:[var(--space-small-md)]">
        <h1 className="title">Nos formules</h1>
        <Carousel slides={formules} />
      </div>

      <div className="items-center flex flex-col">
        <img
          src={separateur}
          alt="separateur"
          className="my-[var(--space-big)] w-80 md:w-[58vw] lg:w-[25vw] lg:my-[var(--space-big-lg)]"
        />
      </div>

      <div>
        <h1 className="title px-4">Le Domaine en Quelques Chiffres</h1>

        <div className="md:flex">
          <div className="border-2 border-accent-gold rounded-[20px] w-[90vw] mt-[var(--space-small)] mx-auto flex flex-col items-center md:w-[44vw] lg:w-[35vw]">
            <h2 className="mini-title other-title" style={{ paddingTop: "2vh" }}>
              Dans le Château
            </h2>
            <ul
              className="list-disc list-inside mini-text"
              style={{
                paddingTop: "2vh",
                width: "80%",
                margin: "0 auto",
                paddingBottom: "2vh",
              }}
            >
              <li>Salle de réception « l’Orangerie » de 225m2</li>
              <li>3 salons de 35m2</li>
              <li>Véranda/ un jardin d’hiver de 40m2</li>
              <li>Vestibule de 40m2</li>
            </ul>
          </div>

          <div className="border-2 border-accent-gold rounded-[20px] w-[90vw] mt-[var(--space-small)] mx-auto flex flex-col items-center md:w-[44vw] lg:w-[35vw]">
            <h2 className="mini-title other-title" style={{ paddingTop: "2vh" }}>
              À l'extérieur
            </h2>
            <ul
              className="list-disc list-inside mini-text" 
              style={{
                paddingTop: "2vh",
                width: "80%",
                margin: "0 auto",
                paddingBottom: "2vh",
              }}
            >
              <li>Propriété de 7 hectares</li>
              <li>Parc de 3,5 hectares</li>
              <li>Pelouse de 4000m2</li>
              <li>Cour intérieure arborée de 500m2</li>
              <li>Vignoble de 3,5 hectares</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-[var(--space-small)] lg:my-[var(--space-big-lg)]">
        <h1 className="title">Galerie Photos</h1>
        <Galerie images={images} />
      </div>
    </div>
  );
}
