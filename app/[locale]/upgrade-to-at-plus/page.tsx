import type { Metadata } from "next";
import { notFound } from "next/navigation";
import UpgradeToAtPlusPage from "../../../components/pages/UpgradeToAtPlusPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { getUpgradeToAtPlusCopy } from "../../../lib/upgradeToAtPlusCopy";
import { buildPageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getUpgradeToAtPlusCopy(locale);

  return buildPageMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    pathname: "/upgrade-to-at-plus",
    locale,
  });
}

export default async function LocaleUpgradeToAtPlusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <UpgradeToAtPlusPage locale={locale} />;
}
