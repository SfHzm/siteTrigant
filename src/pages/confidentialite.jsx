import { Link } from "react-router-dom";
import ImageAccueil from "../components/ImageAccueil";
import LoadingSpinner from "../components/LoadingSpinner";
import mainImg from "../assets/images/23-modified.jpg";
import { useState } from "react";

export default function confidentialite() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-artemisia-bold">
            Politique de confidentialité
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed text-justify">
            La présente politique de confidentialité a pour objectif d'informer
            les utilisateurs du site{" "}
            <a
              href="https://chateautrigant.fr/"
              className="text-accent-gold hover:underline"
            >
              https://chateautrigant.fr/
            </a>{" "}
            (ci-après « le Site ») de la manière dont leurs données personnelles
            sont collectées, utilisées et protégées, conformément au Règlement
            Général sur la Protection des Données (RGPD – règlement UE 2016/679)
            et à la législation française en vigueur.
          </p>

          {/* Responsable du traitement */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Responsable du traitement
          </h2>
          <p className="text-gray-600 mb-2">
            Les données personnelles collectées sur le Site sont traitées sous
            la responsabilité de :
          </p>
          <div className="text-gray-600 mb-4 leading-6">
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
          <div className="text-gray-600 mb-8 leading-6">
            <p>
              Pour toute question relative au traitement des données
              personnelles, vous pouvez contacter :
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

          {/* Données personnelles collectées */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Données personnelles collectées
          </h2>
          <p className="text-gray-600 mb-3">
            Le Site peut collecter des données personnelles via les moyens
            suivants :
          </p>

          <p className="font-bold text-gray-800 mb-2">
            A) Formulaire de contact
          </p>
          <p className="text-gray-600 mb-3 leading-relaxed">
            Un formulaire de contact est mis à disposition des utilisateurs et
            utilise le service tiers <strong>Formspree</strong> pour la
            transmission des messages.
          </p>
          <div className="text-gray-600 mb-3 leading-6">
            <p>
              Dans ce cadre, les données susceptibles d'être collectées sont :
            </p>
            <p>- Nom et prénom (le cas échéant)</p>
            <p>- Adresse email</p>
            <p>- Contenu du message</p>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Ces données sont strictement nécessaires au traitement des demandes
            des utilisateurs.
          </p>

          <p className="font-bold text-gray-800 mb-2">
            B) Navigation sur le Site
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Le Site ne collecte pas de données personnelles à des fins de
            profilage ou de suivi commercial sans le consentement explicite de
            l'utilisateur.
          </p>

          {/* Finalités du traitement */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Finalités du traitement
          </h2>
          <div className="text-gray-600 mb-4 leading-6">
            <p>
              Les données personnelles collectées sont utilisées uniquement pour
              les finalités suivantes :
            </p>
            <p>- Répondre aux demandes envoyées via le formulaire de contact</p>
            <p>- Assurer le suivi des échanges avec les utilisateurs</p>
            <p>- Garantir le bon fonctionnement et la sécurité du Site</p>
          </div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Aucune donnée n'est utilisée à des fins commerciales ou
            publicitaires.
          </p>

          {/* Base légale */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Base légale du traitement
          </h2>
          <div className="text-gray-600 mb-8 leading-6">
            <p>Le traitement des données personnelles repose sur :</p>
            <p>
              - Le <strong>consentement de l'utilisateur</strong>, lorsqu'il
              remplit et envoie le formulaire de contact
            </p>
            <p>
              - L'<strong>intérêt légitime</strong> du responsable du traitement
              à répondre aux demandes reçues
            </p>
          </div>

          {/* Destinataires */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Destinataires des données
          </h2>
          <p className="text-gray-600 mb-3 leading-relaxed">
            Les données personnelles sont destinées exclusivement à CHATEAU
            TRIGANT.
          </p>
          <p className="text-gray-600 mb-3 leading-relaxed text-justify">
            Dans le cadre du formulaire de contact, les données transitent par
            le service <strong>Formspree</strong>, qui agit en tant que
            sous-traitant au sens du RGPD. Formspree s'engage à respecter la
            réglementation applicable en matière de protection des données.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Aucune donnée personnelle n'est vendue, échangée ou cédée à des
            tiers.
          </p>

          {/* Durée de conservation */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Durée de conservation des données
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-justify">
            Les données personnelles issues du formulaire de contact sont
            conservées uniquement pendant la durée nécessaire au traitement de
            la demande, puis archivées ou supprimées dans un délai maximal de{" "}
            <strong>3 ans</strong> après le dernier échange, sauf obligation
            légale contraire.
          </p>

          {/* Sécurité */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Sécurité des données
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-justify">
            CHATEAU TRIGANT met en œuvre des mesures techniques et
            organisationnelles appropriées afin de garantir la sécurité,
            l'intégrité et la confidentialité des données personnelles, et
            d'empêcher tout accès non autorisé, perte ou divulgation.
          </p>

          {/* Droits des utilisateurs */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Droits des utilisateurs
          </h2>
          <div className="text-gray-600 mb-3 leading-6">
            <p>
              Conformément au RGPD, les utilisateurs disposent des droits
              suivants sur leurs données personnelles :
            </p>
            <p>- Droit d'accès</p>
            <p>- Droit de rectification</p>
            <p>- Droit à l'effacement</p>
            <p>- Droit à la limitation du traitement</p>
            <p>- Droit d'opposition</p>
            <p>- Droit à la portabilité des données</p>
          </div>
          <p className="text-gray-600 mb-8 leading-relaxed text-justify">
            Pour exercer ces droits, l'utilisateur peut adresser une demande par
            email à{" "}
            <a
              href="mailto:chateautrigant@gmail.com"
              className="text-accent-gold hover:underline"
            >
              chateautrigant@gmail.com
            </a>
            , en joignant un justificatif d'identité si nécessaire. En cas de
            désaccord persistant, l'utilisateur peut introduire une réclamation
            auprès de la CNIL (
            <a
              href="https://www.cnil.fr"
              className="text-accent-gold hover:underline"
            >
              www.cnil.fr
            </a>
            ).
          </p>

          {/* Cookies */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Cookies
          </h2>
          <p className="text-gray-600 mb-3 leading-relaxed">
            Le Site n'utilise pas de cookies de suivi ou de cookies
            publicitaires.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-justify">
            Si des cookies techniques sont utilisés, ils sont strictement
            nécessaires au bon fonctionnement du Site et ne nécessitent pas le
            consentement préalable de l'utilisateur.
          </p>

          {/* Modification */}
          <h2 className="text-2xl text-gray-800 mb-3 font-artemisia">
            Modification de la politique de confidentialité
          </h2>
          <p className="text-gray-600 mb-12 leading-relaxed text-justify">
            La présente politique de confidentialité peut être modifiée à tout
            moment afin de rester conforme aux évolutions légales,
            réglementaires ou techniques. La version en vigueur est celle
            publiée sur le Site à la date de consultation.
          </p>

          <p className="text-sm text-gray-400 italic">
            Dernière mise à jour : 02/04/2026
          </p>
        </div>
      </div>
    </div>
  );
}
