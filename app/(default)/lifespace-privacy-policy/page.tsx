import type { Metadata } from "next";
import LifespacePrivacyPolicyPage from "../../../components/pages/LifespacePrivacyPolicyPage";
import { defaultLocale } from "../../../lib/i18n";
import { getLifespacePrivacyPolicyCopy } from "../../../lib/lifespacePrivacyPolicyCopy";
import { buildPageMetadata } from "../../../lib/seo";

const copy = getLifespacePrivacyPolicyCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  pathname: "/lifespace-privacy-policy",
  images: ["/lifespace-app-icon.png"],
});
export default function LifespacePrivacyPolicyRoute() {
  return <LifespacePrivacyPolicyPage locale={defaultLocale} />;
}
