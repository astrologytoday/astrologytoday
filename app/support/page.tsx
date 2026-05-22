import type { Metadata } from "next";
import LifespaceSupportPage from "../../components/pages/LifespaceSupportPage";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "LIFESPACE Support | Astrology Today",
  description: "Get support for the LIFESPACE app, account questions, billing issues, and bug reports.",
};

export default function SupportRoute() {
  return <LifespaceSupportPage locale={defaultLocale} />;
}
