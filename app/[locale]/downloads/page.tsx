import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DownloadsPage from "../../../components/pages/DownloadsPage";
import { isSupportedLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Downloads | Astrology Today",
  description: "Download Astrology Today PDF reports and documents.",
};

export default async function LocaleDownloadsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <DownloadsPage locale={locale} />;
}
