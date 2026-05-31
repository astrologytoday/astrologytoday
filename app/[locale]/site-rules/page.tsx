import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteRulesPage from "../../../components/pages/SiteRulesPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getSiteRulesCopy } from "../../../lib/siteRulesCopy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getSiteRulesCopy(locale);

  return buildPageMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    pathname: "/site-rules",
    locale,
  });
}

export default async function LocaleSiteRulesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <SiteRulesPage locale={locale} />;
}
