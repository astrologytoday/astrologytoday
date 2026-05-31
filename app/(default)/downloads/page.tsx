import type { Metadata } from "next";
import DownloadsPage from "../../../components/pages/DownloadsPage";
import { defaultLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getDownloadsCopy } from "../../../lib/downloadsCopy";

const downloadsCopy = getDownloadsCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: `${downloadsCopy.title} | Astrology Today`,
  description: downloadsCopy.metaDescription,
  pathname: "/downloads",
});

export default function DownloadsRoute() {
  return <DownloadsPage locale={defaultLocale} />;
}
