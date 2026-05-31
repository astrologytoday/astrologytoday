import type { Metadata } from "next";
import PrivacyPolicyPage from "../../../components/pages/PrivacyPolicyPage";
import { defaultLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getPrivacyPolicyCopy } from "../../../lib/privacyPolicyCopy";

const privacyCopy = getPrivacyPolicyCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: privacyCopy.metadataTitle,
  description: privacyCopy.metadataDescription,
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicyPage locale={defaultLocale} />;
}
