import type { Metadata } from "next";
import WebsiteServicesPage from "../../components/pages/WebsiteServicesPage";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Website Services | Astrology Today",
  description:
    "Like the website? Reach out to inquire about custom website design and development services.",
};

export default function WebsiteServicesRoute() {
  return <WebsiteServicesPage locale={defaultLocale} />;
}
