import type { Metadata } from "next";
import CreationHealthPage from "../../../components/pages/CreationHealthPage";
import { defaultLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Creation Health | Astrology Today",
  description:
    "Explore Creation Health, a revolutionary wellness community concept connected to the LIFESPACE model of recovery and brain optimization.",
  pathname: "/creation-health",
  images: ["/creation-health-concept-art.png"],
});

export default function CreationHealthRoute() {
  return <CreationHealthPage locale={defaultLocale} />;
}
