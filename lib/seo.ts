import type { Metadata } from "next";
import { defaultLocale, supportedLocales, type SupportedLocale, withExplicitLocale } from "./i18n";

export const SITE_URL = "https://www.astrologytoday.ca";
export const DEFAULT_SOCIAL_IMAGE = "/astrologytoday-logo.png";

const hrefLangMap: Record<SupportedLocale, string> = {
  en: "en",
  fr: "fr",
  it: "it",
  es: "es",
  hi: "hi",
  ur: "ur",
  sa: "sa",
  pa: "pa",
  zh: "zh",
  ja: "ja",
  yue: "yue",
  ko: "ko",
};

const openGraphLocaleMap: Record<SupportedLocale, string> = {
  en: "en_US",
  fr: "fr_FR",
  it: "it_IT",
  es: "es_ES",
  hi: "hi_IN",
  ur: "ur_PK",
  sa: "sa_IN",
  pa: "pa_IN",
  zh: "zh_CN",
  ja: "ja_JP",
  yue: "zh_HK",
  ko: "ko_KR",
};

export function buildCanonicalUrl(pathname: string) {
  return new URL(pathname, SITE_URL);
}

export function buildLocaleAlternates(pathname: string, canonicalLocale?: SupportedLocale) {
  const normalizedPath = pathname === "" ? "/" : pathname;
  const languages = Object.fromEntries(
    supportedLocales.map((locale) => [
      hrefLangMap[locale],
      new URL(withExplicitLocale(locale, normalizedPath), SITE_URL).toString(),
    ]),
  );
  const canonicalPath = canonicalLocale
    ? withExplicitLocale(canonicalLocale, normalizedPath)
    : normalizedPath;

  return {
    canonical: buildCanonicalUrl(canonicalPath),
    languages: {
      ...languages,
      "x-default": new URL(normalizedPath, SITE_URL).toString(),
    },
  };
}

export function inferLocaleFromPathname(pathname: string) {
  const firstSegment = pathname.split("/")[1] || "";
  return supportedLocales.includes(firstSegment as SupportedLocale)
    ? (firstSegment as SupportedLocale)
    : defaultLocale;
}

function toAbsoluteImage(image: string) {
  return new URL(image, SITE_URL).toString();
}

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  locale?: SupportedLocale;
  images?: string[];
};

export function buildPageMetadata({
  title,
  description,
  pathname,
  locale,
  images,
}: BuildPageMetadataOptions): Metadata {
  const canonicalLocale = locale ?? defaultLocale;
  const canonicalPath = locale ? withExplicitLocale(locale, pathname) : pathname;
  const socialImages = (images && images.length > 0 ? images : [DEFAULT_SOCIAL_IMAGE]).map(toAbsoluteImage);

  return {
    title,
    description,
    alternates: buildLocaleAlternates(pathname, locale),
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(canonicalPath),
      siteName: "Astrology Today",
      type: "website",
      locale: openGraphLocaleMap[canonicalLocale],
      images: socialImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: socialImages,
    },
  };
}

type BuildArticleMetadataOptions = BuildPageMetadataOptions & {
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  keywords?: string[];
};

export function buildArticleMetadata({
  title,
  description,
  pathname,
  locale,
  images,
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  keywords,
}: BuildArticleMetadataOptions): Metadata {
  const canonicalLocale = locale ?? defaultLocale;
  const canonicalPath = locale ? withExplicitLocale(locale, pathname) : pathname;
  const socialImages = (images && images.length > 0 ? images : [DEFAULT_SOCIAL_IMAGE]).map(toAbsoluteImage);

  return {
    title,
    description,
    keywords,
    category: section,
    alternates: buildLocaleAlternates(pathname, locale),
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(canonicalPath),
      siteName: "Astrology Today",
      type: "article",
      locale: openGraphLocaleMap[canonicalLocale],
      images: socialImages,
      publishedTime,
      modifiedTime,
      authors,
      section,
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: socialImages,
    },
  };
}
