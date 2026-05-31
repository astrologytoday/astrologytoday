import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PricingPage from "../../../components/pages/PricingPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { getPricingCopy } from "../../../lib/pricingCopy";
import { buildPageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const pricingCopy = getPricingCopy(locale);

  return buildPageMetadata({
    title: pricingCopy.metaTitle,
    description: pricingCopy.metaDescription,
    pathname: "/pricing",
    locale,
  });
}

export default async function LocalePricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <PricingPage locale={locale} />;
}
