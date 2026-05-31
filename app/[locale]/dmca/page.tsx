import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DmcaPage from "../../../components/pages/DmcaPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getDmcaCopy } from "../../../lib/dmcaCopy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getDmcaCopy(locale);

  return buildPageMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    pathname: "/dmca",
    locale,
  });
}

export default async function LocaleDmcaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <DmcaPage locale={locale} />;
}
