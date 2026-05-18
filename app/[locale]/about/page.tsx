import type { Metadata } from "next";
import AboutPage from "../../../components/pages/AboutPage";
import { defaultLocale, type SupportedLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "About | Astrology Today",
  description:
    "Learn what astroanalysis is and how Astrology Today uses astrology for clarity, relationships, and self-understanding.",
};

export default async function LocalizedAboutRoute({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  return <AboutPage locale={locale ?? defaultLocale} />;
}
