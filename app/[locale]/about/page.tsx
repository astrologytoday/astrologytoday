import type { Metadata } from "next";
import AboutPage from "../../../components/pages/AboutPage";
import { defaultLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getAboutCopy } from "../../../lib/aboutCopy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getAboutCopy(locale);

  return buildPageMetadata({
    title: "About | Astrology Today",
    description: copy.intro[0],
    pathname: "/about",
    locale,
  });
}

export default async function LocalizedAboutRoute({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  return <AboutPage locale={locale ?? defaultLocale} />;
}
