import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LifeSpacePage from "../../(default)/lifespace/page";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    title: "LIFESPACE | Astrology Today",
    description:
      "Explore LIFESPACE, Astrology Today's evolving platform for holistic recovery, self-study, and brain optimization.",
    pathname: "/lifespace",
    locale,
    images: ["/lifespace-app-icon.png"],
  });
}

export default async function LocaleLifeSpacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LifeSpacePage />;
}
