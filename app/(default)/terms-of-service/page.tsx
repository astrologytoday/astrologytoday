import type { Metadata } from "next";
import TermsOfServicePage from "../../../components/pages/TermsOfServicePage";
import { defaultLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getTermsOfServiceCopy } from "../../../lib/termsOfServiceCopy";

const termsCopy = getTermsOfServiceCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: termsCopy.metadataTitle,
  description: termsCopy.metadataDescription,
  pathname: "/terms-of-service",
});

export default function TermsOfServiceRoute() {
  return <TermsOfServicePage locale={defaultLocale} />;
}
