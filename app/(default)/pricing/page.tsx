import type { Metadata } from "next";
import PricingPage from "../../../components/pages/PricingPage";
import { defaultLocale } from "../../../lib/i18n";
import { getPricingCopy } from "../../../lib/pricingCopy";
import { buildPageMetadata } from "../../../lib/seo";

const pricingCopy = getPricingCopy(defaultLocale);
export const metadata: Metadata = {
  ...buildPageMetadata({
    title: pricingCopy.metaTitle,
    description: pricingCopy.metaDescription,
    pathname: "/pricing",
  }),
};

export default function PricingRoute() {
  return <PricingPage locale={defaultLocale} />;
}
