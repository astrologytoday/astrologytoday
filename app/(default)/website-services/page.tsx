import type { Metadata } from "next";
import WebsiteServicesPage from "../../../components/pages/WebsiteServicesPage";
import { defaultLocale } from "../../../lib/i18n";
import { getWebsiteServicesCopy } from "../../../lib/websiteServicesCopy";
import { buildPageMetadata } from "../../../lib/seo";

const copy = getWebsiteServicesCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  pathname: "/website-services",
});

export default function WebsiteServicesRoute() {
  return <WebsiteServicesPage locale={defaultLocale} />;
}
