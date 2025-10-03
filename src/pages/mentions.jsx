// src/pages/MentionsLegales.jsx
import React from "react";
import { Link } from "react-router-dom";
import ImageAccueil from "../components/ImageAccueil";
import mainImg from "../assets/images/23-modified.jpeg";

export default function MentionsLegales() {
  return (
    <div>
      <ImageAccueil src={mainImg} alt="Chateau Trigant" />

      <div className="flex flex-col items-center w-[90vw] mx-auto my-[var(--space-small)]">
        <h1 className="font-artemisia text-3xl md:text-4xl mb-6 text-center">
          Mentions Légales
        </h1>

        <p className="text-justify font-inter text-[0.9rem] md:text-[1rem] mb-6">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique, il est précisé aux
          utilisateurs du site <strong>Chateautrigant</strong> l'identité des
          différents intervenants dans le cadre de sa réalisation et de son
          suivi.
        </p>

        <section className="mb-6 w-full">
          <h2 className="font-artemisia text-2xl mb-2">Édition du site</h2>
          <p className="text-justify font-inter mb-2">
            Le présent site, accessible à l’URL{" "}
            <a
              href="https://chateautrigant.fr/"
              className="text-blue-600 underline"
            >
              https://chateautrigant.fr/
            </a>{" "}
            (le « Site »), est édité par : <strong>IN SYSTEM</strong>, société au capital de 15 245 euros,
            inscrite au R.C.S. de PARIS sous le numéro 393 387 097 R.C.S. Paris,
            dont le siège social est situé au 3 rue Brown-Séquard, 75015 Paris,
            représentée par Sophie BERIOT dûment habilitée.
          </p>
          <p className="font-inter">Numéro de TVA : FR36393387097</p>
        </section>

        <section className="mb-6 w-full">
          <h2 className="font-artemisia text-2xl mb-2">Hébergement</h2>
          <p className="text-justify font-inter">
            Le Site est hébergé par la société <strong>IN SYSTEM</strong>, situé
            3 rue Brown-Séquard, 75015 Paris, (contact téléphonique :
            +33 1 42 18 25 01).
          </p>
        </section>

        <section className="mb-6 w-full">
          <h2 className="font-artemisia text-2xl mb-2">
            Directeur de publication
          </h2>
          <p className="font-inter">Sophie BERIOT</p>
        </section>

        <section className="mb-6 w-full">
          <h2 className="font-artemisia text-2xl mb-2">Nous contacter</h2>
          <ul className="list-disc list-inside font-inter text-left">
            <li>Par téléphone : +33 1 42 18 25 01</li>
            <li>
              Par email :{" "}
              <a
                href="mailto:sofia.hazami@insystem.fr"
                className="text-blue-600 underline"
              >
                sofia.hazami@insystem.fr
              </a>
            </li>
            <li>Par courrier : 3 rue Brown-Séquard, 75015 Paris</li>
          </ul>
        </section>

        <section className="mb-6 w-full">
          <h2 className="font-artemisia text-2xl mb-2">Données personnelles</h2>
          <p className="text-justify font-inter">
            Le traitement de vos données à caractère personnel est régi par
            notre Charte du respect de la vie privée, disponible depuis la
            section "Charte de Protection des Données Personnelles",
            conformément au Règlement Général sur la Protection des Données
            2016/679 du 27 avril 2016 («RGPD»).
          </p>
        </section>

        <p className="mt-6 text-sm text-gray-500 font-inter">
          Génération des mentions légales par Legalstart.
        </p>
      </div>
    </div>
  );
}
