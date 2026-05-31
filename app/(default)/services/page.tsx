import type { Metadata } from "next";
import ServicesPage from "../../../components/pages/ServicesPage";
import { defaultLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getServicesCopy } from "../../../lib/servicesCopy";

const servicesCopy = getServicesCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: `${servicesCopy.hero.kicker} | Astrology Today`,
  description: servicesCopy.hero.lead,
  pathname: "/services",
});

export default function ServicesRoute() {
  return <ServicesPage locale={defaultLocale} />;
}
