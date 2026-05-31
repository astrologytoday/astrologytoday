import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LifespaceSupportPage from "../../../components/pages/LifespaceSupportPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { getLifespaceSupportCopy } from "../../../lib/lifespaceSupportCopy";
import { buildPageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getLifespaceSupportCopy(locale);

  return buildPageMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    pathname: "/support",
    locale,
  });
}

export default async function LocaleSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LifespaceSupportPage locale={locale} />;
}
