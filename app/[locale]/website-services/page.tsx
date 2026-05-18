import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WebsiteServicesPage from "../../../components/pages/WebsiteServicesPage";
import { isSupportedLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Website Services | Astrology Today",
  description:
    "Like the website? Reach out to inquire about custom website design and development services.",
};

export default async function LocaleWebsiteServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <WebsiteServicesPage locale={locale} />;
}
