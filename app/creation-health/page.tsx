import type { Metadata } from "next";
import CreationHealthPage from "../../components/pages/CreationHealthPage";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Creation Health | Astrology Today",
  description:
    "Explore Creation Health, a revolutionary wellness community concept connected to the LIFESPACE model of recovery and brain optimization.",
};

export default function CreationHealthRoute() {
  return <CreationHealthPage locale={defaultLocale} />;
}
