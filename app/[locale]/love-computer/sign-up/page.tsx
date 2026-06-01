import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LoveComputerSignupPage from "../../../../components/pages/LoveComputerSignupPage";
import { isSupportedLocale, type SupportedLocale } from "../../../../lib/i18n";
import { buildPageMetadata } from "../../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    title: "Love Computer Sign Up | Astrology Today",
    description: "Create an Astrology Today account to save Love Computer charts and notes.",
    pathname: "/love-computer/sign-up",
    locale,
  });
}

export default async function LocaleLoveComputerSignupPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LoveComputerSignupPage />;
}
