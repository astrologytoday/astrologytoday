import type { Metadata } from "next";
import PricingPage from "../../components/pages/PricingPage";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Pricing | Astrology Today",
  description:
    "Choose an Astrology Today membership plan for self-help, counselling, or professional tools.",
};

export default function PricingRoute() {
  return <PricingPage locale={defaultLocale} />;
}
