import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AccessibilityStatementPage from "../../../components/pages/AccessibilityStatementPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getAccessibilityStatementCopy } from "../../../lib/accessibilityStatementCopy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getAccessibilityStatementCopy(locale);

  return buildPageMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    pathname: "/accessibility-statement",
    locale,
  });
}

export default async function LocaleAccessibilityStatementPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <AccessibilityStatementPage locale={locale} />;
}
