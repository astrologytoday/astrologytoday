import type { Metadata } from "next";
import UpgradeToAtPlusPage from "../../components/pages/UpgradeToAtPlusPage";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Upgrade to AT+ | Astrology Today",
  description: "Share what you want to see in AstrologyToday+.",
};

export default function UpgradeToAtPlusRoute() {
  return <UpgradeToAtPlusPage locale={defaultLocale} />;
}
