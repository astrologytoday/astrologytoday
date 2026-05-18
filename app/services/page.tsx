import type { Metadata } from "next";
import ServicesPage from "../../components/pages/ServicesPage";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Services | Astrology Today",
  description:
    "Counseling, introspection therapy, and peer support services for couples, families, and singles.",
};

export default function ServicesRoute() {
  return <ServicesPage locale={defaultLocale} />;
}
