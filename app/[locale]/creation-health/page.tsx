import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CreationHealthPage from "../../../components/pages/CreationHealthPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    title: "Creation Health | Astrology Today",
    description:
      "Explore Creation Health, a revolutionary wellness community concept connected to the LIFESPACE model of recovery and brain optimization.",
    pathname: "/creation-health",
    locale,
    images: ["/creation-health-concept-art.png"],
  });
}

export default async function LocaleCreationHealthPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <CreationHealthPage locale={locale} />;
}
