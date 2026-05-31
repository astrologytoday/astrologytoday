import type { Metadata } from "next";
import AboutPage from "../../../components/pages/AboutPage";
import { defaultLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getAboutCopy } from "../../../lib/aboutCopy";

const aboutCopy = getAboutCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: "About | Astrology Today",
  description: aboutCopy.intro[0],
  pathname: "/about",
});

export default function AboutRoute() {
  return <AboutPage locale={defaultLocale} />;
}
