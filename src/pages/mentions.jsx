import { Link } from "react-router-dom";
import ImageAccueil from "../components/ImageAccueil";
import LoadingSpinner from "../components/LoadingSpinner";
import mainImg from "../assets/images/23-modified.jpg";
import { useState } from "react";

export default function MentionsLegales() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      {!imageLoaded && <LoadingSpinner />}
      <ImageAccueil
        src={mainImg}
        alt="Chateau Trigant"
        onImageLoaded={() => setImageLoaded(true)}
      />
      <div
        className="min-h-screen py-10 px-4"
        style={{ background: "#edefeb" }}
      >
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md px-16 py-14">
          <h1 className="text-4xl font-bold font-artemisia-bold text-gray-900 mb-6">
            Mentions Légales
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance dans l'économie numérique (LCEN), il est précisé
            aux utilisateurs du site{" "}
            <a
              href="https://chateautrigant.fr/"
              className="text-accent-gold hover:underline"
            >
              https://chateautrigant.fr/
            </a>{" "}
            (ci-après « le Site ») l'identité des différents intervenants dans
            le cadre de sa réalisation et de son suivi.
          </p>

          {/* Éditeur du site */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Éditeur du site
          </h2>
          <p className="text-gray-600 mb-2">Le présent site est édité par :</p>
          <div className="text-gray-600 mb-8 leading-6">
            <p className="font-bold text-gray-800">CHATEAU TRIGANT</p>
            <p>SAS au capital de 5 371 000 euros</p>
            <p>
              Immatriculée au Registre du Commerce et des Sociétés de Bordeaux
              sous le numéro 898 590 856 R.C.S.
            </p>
            <p>
              Siège social : 149 Avenue des Pyrénées, 33140 Villenave d'Ornon
            </p>
            <p>N° de TVA : FR87898590856</p>
            <p>Représentée par : Clément BERIOT</p>
          </div>

          {/* Développement & Hébergement */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Développement &amp; Hébergement
          </h2>
          <p className="text-gray-600 mb-2">
            Le Site est développé et hébergé par :
          </p>
          <div className="text-gray-600 mb-8 leading-6">
            <p className="font-bold text-gray-800">IN SYSTEM</p>
            <p>Société à responsabilité limitée au capital de 15 245 euros</p>
            <p>
              Immatriculée au Registre du Commerce et des Sociétés de Paris sous
              le numéro 393 387 097 R.C.S.
            </p>
            <p>Siège social : 3 rue Brown-Séquard, 75015 Paris</p>
            <p>N° de TVA : FR36393387097</p>
            <p>Représentée par : Sophie BERIOT</p>
            <p>Contact : +33 1 42 18 25 01</p>
          </div>

          {/* Directeur de publication */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Directeur de publication
          </h2>
          <p className="text-gray-600 mb-8">Sophie BERIOT</p>

          {/* Nous contacter */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Nous contacter
          </h2>
          <div className="text-gray-600 mb-8 leading-6">
            <p>
              Pour toute question ou demande d'information, l'utilisateur peut
              contacter l'éditeur du Site :
            </p>
            <p>
              - Par email :{" "}
              <a
                href="mailto:chateautrigant@gmail.com"
                className="text-accent-gold hover:underline"
              >
                chateautrigant@gmail.com
              </a>
            </p>
            <p>- Par téléphone : +33 6 98 00 90 92</p>
            <p>
              - Par courrier : 149 Avenue des Pyrénées, 33140 Villenave d'Ornon
            </p>
          </div>

          {/* Données personnelles */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Données personnelles
          </h2>
          <div className="text-gray-600 mb-8 leading-relaxed">
            <p>
              Le traitement des données à caractère personnel collectées sur le
              Site est effectué conformément au Règlement Général sur la
              Protection des Données (RGPD – règlement UE 2016/679 du 27 avril
              2016).
            </p>
            <p className="mt-2">
              Les modalités de collecte, d'utilisation et de protection des
              données personnelles sont détaillées dans la Politique de
              confidentialité, accessible depuis la section «
              <Link
                to={"/confidentialite"}
                className="text-accent-gold hover:underline"
              >
                Politique De Confidentialité
              </Link>
              » du Site.
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Propriété intellectuelle
          </h2>
          <div className="text-gray-600 mb-8 leading-relaxed">
            <p>
              L'ensemble des contenus présents sur le Site (textes, images,
              graphismes, logos, icônes, sons, logiciels, etc.) est protégé par
              le droit de la propriété intellectuelle et est la propriété
              exclusive de CHATEAU TRIGANT, sauf mentions contraires.
            </p>
            <p className="mt-2">
              Toute reproduction, représentation, modification, publication ou
              adaptation, totale ou partielle, des éléments du Site, quel que
              soit le moyen ou le procédé utilisé, est interdite sans
              l'autorisation écrite préalable de l'éditeur.
            </p>
          </div>

          {/* Responsabilité */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Responsabilité
          </h2>
          <div className="text-gray-600 mb-12 leading-relaxed">
            <p>
              L'éditeur s'efforce de fournir sur le Site des informations aussi
              précises que possible. Toutefois, il ne saurait être tenu
              responsable des omissions, inexactitudes ou carences dans la mise
              à jour des informations, qu'elles soient de son fait ou du fait
              des tiers partenaires.
            </p>
            <p className="mt-2">
              L'utilisateur reconnaît utiliser les informations disponibles sur
              le Site sous sa responsabilité exclusive.
            </p>
          </div>

          <p className="text-sm text-gray-400 italic">
            Dernière mise à jour : 02/04/2026
          </p>
        </div>
      </div>
    </div>
  );
}
