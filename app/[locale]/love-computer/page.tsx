import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LoveComputerPage from "../../../components/pages/LoveComputerPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    title: "Love Computer | Astrology Today",
    description:
      "Explore the Love Computer for astrology-based relationship insights, compatibility patterns, and symbolic synastry analysis.",
    pathname: "/love-computer",
    locale,
  });
}

export default async function LocaleLoveComputerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LoveComputerPage />;
}
