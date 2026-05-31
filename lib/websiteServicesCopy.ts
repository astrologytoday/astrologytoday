import { defaultLocale, type SupportedLocale } from "./i18n";

type WebsiteServicesCopy = {
  metadataTitle: string;
  metadataDescription: string;
  lineOne: string;
  lineTwo: string;
  primaryLabel: string;
  secondaryLabel: string;
};

const english: WebsiteServicesCopy = {
  metadataTitle: "Website Services | Astrology Today",
  metadataDescription: "Like the website? Reach out to inquire about custom website design and development services.",
  lineOne: "Like the website?",
  lineTwo: "Email us and we can build one for you!",
  primaryLabel: "Inquire Now",
  secondaryLabel: "Back to Astrology Today",
};

const byLocale: Partial<Record<SupportedLocale, WebsiteServicesCopy>> = {
  fr: {
    metadataTitle: "Services de sites web | Astrology Today",
    metadataDescription:
      "Vous aimez le site ? Contactez-nous pour demander des services personnalisés de conception et de développement web.",
    lineOne: "Vous aimez le site ?",
    lineTwo: "Écrivez-nous et nous pouvons en créer un pour vous !",
    primaryLabel: "Faire une demande",
    secondaryLabel: "Retour à Astrology Today",
  },
  it: {
    metadataTitle: "Servizi web | Astrology Today",
    metadataDescription:
      "Ti piace il sito? Contattaci per richiedere servizi personalizzati di progettazione e sviluppo web.",
    lineOne: "Ti piace il sito?",
    lineTwo: "Scrivici e possiamo crearne uno per te!",
    primaryLabel: "Richiedi ora",
    secondaryLabel: "Torna ad Astrology Today",
  },
  es: {
    metadataTitle: "Servicios web | Astrology Today",
    metadataDescription:
      "¿Te gusta el sitio? Contáctanos para solicitar servicios personalizados de diseño y desarrollo web.",
    lineOne: "¿Te gusta el sitio?",
    lineTwo: "Escríbenos y podemos crear uno para ti.",
    primaryLabel: "Consultar ahora",
    secondaryLabel: "Volver a Astrology Today",
  },
};

export function getWebsiteServicesCopy(locale: SupportedLocale = defaultLocale) {
  return byLocale[locale] ?? english;
}
