import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesPage from "../../../components/pages/ServicesPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getServicesCopy } from "../../../lib/servicesCopy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getServicesCopy(locale);

  return buildPageMetadata({
    title: `${copy.hero.kicker} | Astrology Today`,
    description: copy.hero.lead,
    pathname: "/services",
    locale,
  });
}

export default async function LocaleServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <ServicesPage locale={locale} />;
}
