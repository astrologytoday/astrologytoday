import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "../../components/pages/HomePage";
import { getHomeCopy } from "../../lib/copy";
import { isSupportedLocale, type SupportedLocale } from "../../lib/i18n";
import { buildPageMetadata } from "../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getHomeCopy(locale);

  return buildPageMetadata({
    title: "Astrology Today",
    description: copy.hero.lead,
    pathname: "/",
    locale,
  });
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
