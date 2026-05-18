import type { Metadata } from "next";
import AboutPage from "../../components/pages/AboutPage";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "About | Astrology Today",
  description:
    "Learn what astroanalysis is and how Astrology Today uses astrology for clarity, relationships, and self-understanding.",
};

export default function AboutRoute() {
  return <AboutPage locale={defaultLocale} />;
}
