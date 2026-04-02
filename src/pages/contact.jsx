import mainImg from "../assets/images/23-modified.jpg";
import ImageAccueil from "../components/ImageAccueil";
import LoadingSpinner from "../components/LoadingSpinner";
import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";

export default function Contact() {
  // Votre ID de formulaire Formspree
  const [state, handleSubmit, reset] = useForm("mldpoldj");

  // Nouvel état pour gérer l'affichage du message de succès
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // État pour forcer la réinitialisation visuelle des champs (si nécessaire)
  const [key, setKey] = useState(0);

  // État pour gérer le chargement de l'image
  const [imageLoaded, setImageLoaded] = useState(false);

  // Utiliser useEffect pour gérer l'état du succès et la réinitialisation
  useEffect(() => {
    let timeoutId;

    if (state.succeeded) {
      // 1. Affiche le message immédiatement
      setShowSuccessMessage(true);

      // 2. Réinitialise le formulaire (Formspree) pour autoriser un nouvel envoi
      reset();

      // 3. Définit un délai pour vider visuellement les champs (Key) et masquer le message
      // On masque le message après 5 secondes (5000ms) et on vide les champs
      timeoutId = setTimeout(() => {
        setKey((prevKey) => prevKey + 1);
        setShowSuccessMessage(false);
      }, 5000);
    }

    // Fonction de nettoyage pour annuler le timeout si le composant est démonté
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [state.succeeded, reset]); // Déclenche l'effet seulement quand l'état d'envoi change

  // Styles communs pour les champs de formulaire
  const inputStyle =
    "w-full p-3 border-2 rounded-xs border-accent-content font-normal font-inter text-base text-gray-700 focus:outline-none focus:border-accent-gold transition duration-300";
  const textareaStyle =
    "w-full p-3 border-2 rounded-xs border-accent-content font-normal font-inter text-base text-gray-700 h-32 resize-none focus:outline-none focus:border-accent-gold transition duration-300";

  return (
    <div>
      {!imageLoaded && <LoadingSpinner />}
      <ImageAccueil
        src={mainImg}
        alt="Image Contact"
        onImageLoaded={() => setImageLoaded(true)}
      />

      <div className="flex justify-center items-center mt-[var(--space-big)] mb-[var(--space-big)] lg:mt-[var(--space-big-lg)] lg:mb-[var(--space-big-lg)]">
        <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] p-5 md:p-10 bg-base-100 shadow-xl rounded-lg">
          <h1 className="title text-center mb-10">Formulaire de Demande</h1>

          {/* 🔑 La clé force la réinitialisation visuelle des inputs. */}
          <form onSubmit={handleSubmit} className="space-y-6" key={key}>
            {/* Champ Nom */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium font-artemisia text-gray-700 mb-2"
              >
                Nom Complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={inputStyle}
                disabled={state.submitting}
              />
            </div>

            {/* Champ Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium font-artemisia text-gray-700 mb-2"
              >
                Adresse E-mail
              </label>
              <input
                type="email"
                id="email"
                name="_replyto"
                required
                className={inputStyle}
                disabled={state.submitting}
              />
            </div>

            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium font-artemisia text-gray-700 mb-2"
              >
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                required
                className={inputStyle}
                disabled={state.submitting}
              />
            </div>

            {/* Champ Sujet */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium font-artemisia text-gray-700 mb-2"
              >
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className={inputStyle}
                disabled={state.submitting}
              />
            </div>

            {/* Champ Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium font-artemisia text-gray-700 mb-2"
              >
                Votre Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={textareaStyle}
                disabled={state.submitting}
              />
            </div>

            {/* Bouton d'envoi */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="btn w-full shadow-no sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl border-1 rounded-xs border-accent-content text-accent-content font-normal font-artemisia text-sm p-4 md:p-6 hover:bg-accent-gold hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting
                  ? "Envoi en cours..."
                  : "Envoyer le Message →"}
              </button>
            </div>

            {/* Messages de retour */}
            {(showSuccessMessage ||
              (state.errors && state.errors.length > 0)) && (
              <div
                className={`text-center p-3 rounded-md ${
                  showSuccessMessage
                    ? "bg-green-100 border border-green-400"
                    : "bg-red-100 border border-red-400"
                }`}
              >
                <p
                  className={`text-sm font-inter ${
                    showSuccessMessage ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {showSuccessMessage
                    ? "✅ Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt."
                    : "❌ **Erreur :** Une erreur s'est produite lors de l'envoi. Veuillez réessayer."}
                </p>
              </div>
            )}

            <p className="text-center text-xs text-gray-500 mt-4">
              Votre demande sera transmise à l'équipe.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
