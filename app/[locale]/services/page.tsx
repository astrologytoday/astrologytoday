import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesPage from "../../../components/pages/ServicesPage";
import { isSupportedLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Services | Astrology Today",
  description:
    "Counseling, introspection therapy, and peer support services for couples, families, and singles.",
};

export default async function LocaleServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <ServicesPage locale={locale} />;
}
