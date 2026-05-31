import { defaultLocale, type SupportedLocale } from "./i18n";

type UpgradeToAtPlusCopy = {
  metadataTitle: string;
  metadataDescription: string;
  heading: string;
  intro: string[];
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  ideasLabel: string;
  ideasPlaceholder: string;
  submitLabel: string;
  returnLabel: string;
  subject: string;
  bodyHeader: string;
  bodyLabels: {
    name: string;
    email: string;
    ideas: string;
    notProvided: string;
    noIdeas: string;
  };
};

const english: UpgradeToAtPlusCopy = {
  metadataTitle: "Upgrade to AT+ | Astrology Today",
  metadataDescription: "Share what you want to see in AstrologyToday+.",
  heading: "AstrologyToday+ Interest Form",
  intro: [
    "AstrologyToday+ is not yet available for public users. What additions to the program would you like to see included in this feature?",
    "Tell us what would make AstrologyToday+ feel genuinely valuable to you. Your response will open as a ready-to-send email addressed to Mario.",
  ],
  nameLabel: "Name",
  namePlaceholder: "Your name",
  emailLabel: "Email",
  emailPlaceholder: "Your email",
  ideasLabel: "What additions would you like to see?",
  ideasPlaceholder:
    "Ideas for premium reports, tools, reader features, app integrations, or anything else you'd want included in AstrologyToday+.",
  submitLabel: "Send Feedback",
  returnLabel: "Return to Astrology Today",
  subject: "AstrologyToday+ Feature Request",
  bodyHeader: "AstrologyToday+ interest form submission",
  bodyLabels: {
    name: "Name",
    email: "Email",
    ideas: "Requested additions",
    notProvided: "Not provided",
    noIdeas: "No feature ideas provided.",
  },
};

const byLocale: Partial<Record<SupportedLocale, UpgradeToAtPlusCopy>> = {
  fr: {
    ...english,
    metadataTitle: "Passer à AT+ | Astrology Today",
    metadataDescription: "Partagez ce que vous aimeriez voir dans AstrologyToday+.",
    heading: "Formulaire d’intérêt AstrologyToday+",
    intro: [
      "AstrologyToday+ n’est pas encore disponible pour les utilisateurs publics. Quelles additions aimeriez-vous voir incluses dans cette fonctionnalité ?",
      "Dites-nous ce qui rendrait AstrologyToday+ réellement précieux pour vous. Votre réponse s’ouvrira comme un e-mail prêt à être envoyé à Mario.",
    ],
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "E-mail",
    emailPlaceholder: "Votre e-mail",
    ideasLabel: "Quelles additions aimeriez-vous voir ?",
    ideasPlaceholder:
      "Idées pour des rapports premium, des outils, des fonctions pour les lecteurs, des intégrations d’applications ou toute autre chose que vous voudriez inclure dans AstrologyToday+.",
    submitLabel: "Envoyer vos idées",
    returnLabel: "Retour à Astrology Today",
    subject: "Demande de fonctionnalité AstrologyToday+",
    bodyHeader: "Envoi du formulaire d’intérêt AstrologyToday+",
    bodyLabels: {
      name: "Nom",
      email: "E-mail",
      ideas: "Ajouts demandés",
      notProvided: "Non fourni",
      noIdeas: "Aucune idée de fonctionnalité fournie.",
    },
  },
  it: {
    ...english,
    metadataTitle: "Passa ad AT+ | Astrology Today",
    metadataDescription: "Condividi ciò che vorresti vedere in AstrologyToday+.",
    heading: "Modulo di interesse AstrologyToday+",
    intro: [
      "AstrologyToday+ non è ancora disponibile per il pubblico. Quali aggiunte vorresti vedere incluse in questa funzione?",
      "Raccontaci cosa renderebbe AstrologyToday+ davvero prezioso per te. La tua risposta si aprirà come un’email pronta da inviare a Mario.",
    ],
    nameLabel: "Nome",
    namePlaceholder: "Il tuo nome",
    emailLabel: "Email",
    emailPlaceholder: "La tua email",
    ideasLabel: "Quali aggiunte vorresti vedere?",
    ideasPlaceholder:
      "Idee per report premium, strumenti, funzioni per i lettori, integrazioni con app o qualsiasi altra cosa che vorresti includere in AstrologyToday+.",
    submitLabel: "Invia feedback",
    returnLabel: "Torna ad Astrology Today",
    subject: "Richiesta funzionalità AstrologyToday+",
    bodyHeader: "Invio del modulo di interesse AstrologyToday+",
    bodyLabels: {
      name: "Nome",
      email: "Email",
      ideas: "Aggiunte richieste",
      notProvided: "Non fornito",
      noIdeas: "Nessuna idea fornita.",
    },
  },
  es: {
    ...english,
    metadataTitle: "Actualizar a AT+ | Astrology Today",
    metadataDescription: "Comparte lo que te gustaría ver en AstrologyToday+.",
    heading: "Formulario de interés de AstrologyToday+",
    intro: [
      "AstrologyToday+ todavía no está disponible para el público. ¿Qué añadidos te gustaría ver incluidos en esta función?",
      "Cuéntanos qué haría que AstrologyToday+ resultara realmente valioso para ti. Tu respuesta se abrirá como un correo listo para enviar a Mario.",
    ],
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "Tu correo electrónico",
    ideasLabel: "¿Qué añadidos te gustaría ver?",
    ideasPlaceholder:
      "Ideas para informes premium, herramientas, funciones para lectores, integraciones con aplicaciones o cualquier otra cosa que te gustaría incluir en AstrologyToday+.",
    submitLabel: "Enviar comentarios",
    returnLabel: "Volver a Astrology Today",
    subject: "Solicitud de función de AstrologyToday+",
    bodyHeader: "Envío del formulario de interés de AstrologyToday+",
    bodyLabels: {
      name: "Nombre",
      email: "Correo electrónico",
      ideas: "Añadidos solicitados",
      notProvided: "No proporcionado",
      noIdeas: "No se proporcionaron ideas de funciones.",
    },
  },
};

export function getUpgradeToAtPlusCopy(locale: SupportedLocale = defaultLocale) {
  return byLocale[locale] ?? english;
}
