import type { Metadata } from "next";
import { notFound } from "next/navigation";
import UpgradeToAtPlusPage from "../../../components/pages/UpgradeToAtPlusPage";
import { isSupportedLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Upgrade to AT+ | Astrology Today",
  description: "Share what you want to see in AstrologyToday+.",
};

export default async function LocaleUpgradeToAtPlusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <UpgradeToAtPlusPage locale={locale} />;
}
