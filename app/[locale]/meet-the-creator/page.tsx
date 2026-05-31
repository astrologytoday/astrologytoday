import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MeetTheCreatorPage from "../../../components/pages/MeetTheCreatorPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { getMeetTheCreatorCopy } from "../../../lib/meetTheCreatorCopy";
import { buildPageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getMeetTheCreatorCopy(locale);

  return buildPageMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    pathname: "/meet-the-creator",
    locale,
    images: ["/mario-sbardella-photo.png"],
  });
}

export default async function LocaleMeetTheCreatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <MeetTheCreatorPage locale={locale} />;
}
