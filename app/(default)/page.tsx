import type { Metadata } from "next";
import HomePage from "../../components/pages/HomePage";
import { getHomeCopy } from "../../lib/copy";
import { defaultLocale } from "../../lib/i18n";
import { buildPageMetadata } from "../../lib/seo";

const homeCopy = getHomeCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: "Astrology Today",
  description: homeCopy.hero.lead,
  pathname: "/",
});

export default function HomePageRoute() {
  return <HomePage locale={defaultLocale} />;
}
