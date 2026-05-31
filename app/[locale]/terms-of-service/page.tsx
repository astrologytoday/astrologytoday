import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TermsOfServicePage from "../../../components/pages/TermsOfServicePage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getTermsOfServiceCopy } from "../../../lib/termsOfServiceCopy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getTermsOfServiceCopy(locale);

  return buildPageMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    pathname: "/terms-of-service",
    locale,
  });
}

export default async function LocaleTermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <TermsOfServicePage locale={locale} />;
}
