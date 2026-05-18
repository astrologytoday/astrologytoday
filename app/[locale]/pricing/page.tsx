import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PricingPage from "../../../components/pages/PricingPage";
import { isSupportedLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Pricing | Astrology Today",
  description:
    "Choose an Astrology Today membership plan for self-help, counselling, or professional tools.",
};

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
