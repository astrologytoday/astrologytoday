import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CreationHealthPage from "../../../components/pages/CreationHealthPage";
import { isSupportedLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Creation Health | Astrology Today",
  description:
    "Explore Creation Health, a revolutionary wellness community concept connected to the LIFESPACE model of recovery and brain optimization.",
};

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
