import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LifespaceSupportPage from "../../../components/pages/LifespaceSupportPage";
import { isSupportedLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "LIFESPACE Support | Astrology Today",
  description: "Get support for the LIFESPACE app, account questions, billing issues, and bug reports.",
};

export default async function LocaleSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LifespaceSupportPage locale={locale} />;
}
