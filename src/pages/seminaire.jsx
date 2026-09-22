import ImageAccueil from "../components/ImageAccueil";
import Galerie from "../components/galerie";
import LogoList from "../components/logoList";
import chateau1 from "../assets/images/chateau1.png";

import { House } from "lucide-react";
import { MicVocal } from "lucide-react";
import { BedDouble } from "lucide-react";
import { Monitor } from "lucide-react";
import { Newspaper } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { Palette } from "lucide-react";
import { PersonStanding } from "lucide-react";
import { Utensils } from "lucide-react";
import { Bus } from "lucide-react";

import LoadingSpinner from "../components/LoadingSpinner";
import PresentationPage from "../components/presentationPage";
import tables from "../assets/images/galerieSeminaire/tables_jour.png";
import vignes from "../assets/images/galerieSeminaire/vignes_vueAerienne.png";
import cour from "../assets/images/galerieSeminaire/cour_jour.png";

import { useState } from "react";

export default function Seminaire() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const services = [
    "Coordination et gestion de l'évènement",
    "Design/Décors et branding personalisé",
    "Hébergement des participants",
    "Materiel audiovisuel & techniques",
    "Team building & activités",
    "Assistance logistique et transports",
    "Location de salles",
    "Webinaire",
    "Services de communication & support imprimés",
    "Pauses café et restauration professionnelle",
  ];
  const icons = [
    NotebookPen,
    Palette,
    BedDouble,
    MicVocal,
    PersonStanding,
    Bus,
    House,
    Monitor,
    Newspaper,
    Utensils,
  ];
  const images = [cour, tables, vignes];
  return (
    <>
      {!imageLoaded && <LoadingSpinner />}
      <ImageAccueil
        src={chateau1}
        alt="Salon Trigant"
        h={`EVENEMENTS PROFESSIONNELS`}
        onImageLoaded={() => setImageLoaded(true)}
      />
      <PresentationPage page="seminaire" />

      <div className="md:border-2 border-accent-gold rounded-[5px] md:w-[75vw] lg:w-[65vw] mt-[var(--space-small)] mx-auto flex flex-col items-center max-md:gap-y-[6vw]">
        <h2 className="mini-title other-title" style={{ paddingTop: "8vh" }}>
          SERVICES PROPOSÉS
        </h2>
        <LogoList texts={services} logos={icons} />
      </div>

      <div className="mt-[var(--space-small)] lg:mt-[var(--space-big-lg)] lg:mb-[var(--space-small)]">
        <h1 className="title">Galerie Photos</h1>
        <Galerie images={images} />
      </div>
    </>
  );
}
