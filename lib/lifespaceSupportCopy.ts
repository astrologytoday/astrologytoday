import { defaultLocale, type SupportedLocale } from "./i18n";

type SupportTypeId =
  | "bug"
  | "account"
  | "billing"
  | "feature"
  | "general";

type LifespaceSupportCopy = {
  metadataTitle: string;
  metadataDescription: string;
  heading: string;
  intro: string[];
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  supportTypeLabel: string;
  supportTypeOptions: Record<SupportTypeId, string>;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  returnLabel: string;
  subjectPrefix: string;
  bodyHeader: string;
  bodyLabels: {
    name: string;
    email: string;
    supportType: string;
    message: string;
    notProvided: string;
    noMessage: string;
  };
};

const english: LifespaceSupportCopy = {
  metadataTitle: "LIFESPACE Support | Astrology Today",
  metadataDescription: "Get support for the LIFESPACE app, account questions, billing issues, and bug reports.",
  heading: "LIFESPACE Support Form",
  intro: [
    "Use this form if you ran into a problem with the app, have a billing or account question, or just need help with something related to LIFESPACE.",
    "When you submit, your default email app will open a ready-to-send support message addressed to Mario.",
  ],
  nameLabel: "Name",
  namePlaceholder: "Your name",
  emailLabel: "Email",
  emailPlaceholder: "Your email",
  supportTypeLabel: "What do you need help with?",
  supportTypeOptions: {
    bug: "Bug Report",
    account: "Account Help",
    billing: "Billing Question",
    feature: "Feature Request",
    general: "General Support",
  },
  messageLabel: "Describe the issue or question",
  messagePlaceholder:
    "Tell us what happened, what you were trying to do, and anything else that would help us support you.",
  submitLabel: "Send Support Email",
  returnLabel: "Return to LIFESPACE",
  subjectPrefix: "LIFESPACE Support Form",
  bodyHeader: "LIFESPACE Support Form submission",
  bodyLabels: {
    name: "Name",
    email: "Email",
    supportType: "Support Type",
    message: "Message",
    notProvided: "Not provided",
    noMessage: "No message provided.",
  },
};

const byLocale: Partial<Record<SupportedLocale, LifespaceSupportCopy>> = {
  fr: {
    ...english,
    metadataTitle: "Support LIFESPACE | Astrology Today",
    metadataDescription:
      "Obtenez de l’aide pour l’application LIFESPACE, les questions de compte, la facturation et les signalements de bogues.",
    heading: "Formulaire d’assistance LIFESPACE",
    intro: [
      "Utilisez ce formulaire si vous avez rencontré un problème avec l’application, si vous avez une question de facturation ou de compte, ou si vous avez simplement besoin d’aide concernant LIFESPACE.",
      "Lorsque vous l’envoyez, votre application de messagerie par défaut ouvrira un message d’assistance prêt à être envoyé à Mario.",
    ],
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "E-mail",
    emailPlaceholder: "Votre e-mail",
    supportTypeLabel: "De quoi avez-vous besoin ?",
    supportTypeOptions: {
      bug: "Signalement de bogue",
      account: "Aide pour le compte",
      billing: "Question de facturation",
      feature: "Demande de fonctionnalité",
      general: "Assistance générale",
    },
    messageLabel: "Décrivez le problème ou la question",
    messagePlaceholder:
      "Expliquez ce qui s’est passé, ce que vous essayiez de faire et tout ce qui pourrait nous aider à vous assister.",
    submitLabel: "Envoyer l’e-mail d’assistance",
    returnLabel: "Retour à LIFESPACE",
    subjectPrefix: "Formulaire d’assistance LIFESPACE",
    bodyHeader: "Envoi du formulaire d’assistance LIFESPACE",
    bodyLabels: {
      name: "Nom",
      email: "E-mail",
      supportType: "Type d’assistance",
      message: "Message",
      notProvided: "Non fourni",
      noMessage: "Aucun message fourni.",
    },
  },
  it: {
    ...english,
    metadataTitle: "Supporto LIFESPACE | Astrology Today",
    metadataDescription:
      "Ottieni supporto per l’app LIFESPACE, domande sull’account, problemi di fatturazione e segnalazioni di bug.",
    heading: "Modulo di supporto LIFESPACE",
    intro: [
      "Usa questo modulo se hai riscontrato un problema con l’app, hai una domanda su fatturazione o account, oppure hai semplicemente bisogno di aiuto riguardo a LIFESPACE.",
      "Quando lo invii, l’app e-mail predefinita aprirà un messaggio di supporto pronto da inviare a Mario.",
    ],
    nameLabel: "Nome",
    namePlaceholder: "Il tuo nome",
    emailLabel: "Email",
    emailPlaceholder: "La tua email",
    supportTypeLabel: "Di cosa hai bisogno?",
    supportTypeOptions: {
      bug: "Segnalazione bug",
      account: "Aiuto account",
      billing: "Domanda di fatturazione",
      feature: "Richiesta funzionalità",
      general: "Supporto generale",
    },
    messageLabel: "Descrivi il problema o la domanda",
    messagePlaceholder:
      "Raccontaci cosa è successo, cosa stavi cercando di fare e qualsiasi altra informazione utile per aiutarti.",
    submitLabel: "Invia email di supporto",
    returnLabel: "Torna a LIFESPACE",
    subjectPrefix: "Modulo di supporto LIFESPACE",
    bodyHeader: "Invio del modulo di supporto LIFESPACE",
    bodyLabels: {
      name: "Nome",
      email: "Email",
      supportType: "Tipo di supporto",
      message: "Messaggio",
      notProvided: "Non fornito",
      noMessage: "Nessun messaggio fornito.",
    },
  },
  es: {
    ...english,
    metadataTitle: "Soporte de LIFESPACE | Astrology Today",
    metadataDescription:
      "Obtén ayuda para la aplicación LIFESPACE, preguntas sobre la cuenta, facturación y reportes de errores.",
    heading: "Formulario de soporte de LIFESPACE",
    intro: [
      "Usa este formulario si encontraste un problema con la aplicación, tienes una pregunta de facturación o cuenta, o simplemente necesitas ayuda con algo relacionado con LIFESPACE.",
      "Cuando lo envíes, tu aplicación de correo predeterminada abrirá un mensaje de soporte listo para enviar a Mario.",
    ],
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "Tu correo electrónico",
    supportTypeLabel: "¿Con qué necesitas ayuda?",
    supportTypeOptions: {
      bug: "Reporte de error",
      account: "Ayuda con la cuenta",
      billing: "Pregunta de facturación",
      feature: "Solicitud de función",
      general: "Soporte general",
    },
    messageLabel: "Describe el problema o la pregunta",
    messagePlaceholder:
      "Cuéntanos qué pasó, qué intentabas hacer y cualquier otro detalle que nos ayude a apoyarte.",
    submitLabel: "Enviar correo de soporte",
    returnLabel: "Volver a LIFESPACE",
    subjectPrefix: "Formulario de soporte de LIFESPACE",
    bodyHeader: "Envío del formulario de soporte de LIFESPACE",
    bodyLabels: {
      name: "Nombre",
      email: "Correo electrónico",
      supportType: "Tipo de soporte",
      message: "Mensaje",
      notProvided: "No proporcionado",
      noMessage: "No se proporcionó ningún mensaje.",
    },
  },
};

export type { SupportTypeId };

export function getLifespaceSupportCopy(locale: SupportedLocale = defaultLocale) {
  return byLocale[locale] ?? english;
}
