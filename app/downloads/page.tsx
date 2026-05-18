import type { Metadata } from "next";
import DownloadsPage from "../../components/pages/DownloadsPage";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Downloads | Astrology Today",
  description: "Download Astrology Today PDF reports and documents.",
};

export default function DownloadsRoute() {
  return <DownloadsPage locale={defaultLocale} />;
}
