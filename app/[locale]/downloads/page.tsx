import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DownloadsPage from "../../../components/pages/DownloadsPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getDownloadsCopy } from "../../../lib/downloadsCopy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getDownloadsCopy(locale);

  return buildPageMetadata({
    title: `${copy.title} | Astrology Today`,
    description: copy.metaDescription,
    pathname: "/downloads",
    locale,
  });
}

export default async function LocaleDownloadsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <DownloadsPage locale={locale} />;
}
