export const supportedLocales = [
  "en",
  "fr",
  "it",
  "es",
  "hi",
  "ur",
  "sa",
  "pa",
  "zh",
  "ja",
  "yue",
  "ko",
] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export const defaultLocale: SupportedLocale = "en";
export const LOCALE_PREFERENCE_KEY = "astrologytoday-locale";

export const localeLabels: Record<SupportedLocale, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  es: "Español",
  hi: "हिन्दी",
  ur: "اردو",
  sa: "संस्कृतम्",
  pa: "ਪੰਜਾਬੀ",
  zh: "中文",
  ja: "日本語",
  yue: "廣東話",
  ko: "한국어",
};

export function isSupportedLocale(value: string): value is SupportedLocale {
  return supportedLocales.includes(value as SupportedLocale);
}

export function withLocale(locale: SupportedLocale | undefined, href: string) {
  if (!locale || locale === defaultLocale) {
    return href;
  }

  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export function withExplicitLocale(locale: SupportedLocale, href: string) {
  if (locale === defaultLocale) {
    return href;
  }

  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}
