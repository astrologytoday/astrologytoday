import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MeetTheCreatorPage from "../../../components/pages/MeetTheCreatorPage";
import { isSupportedLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Meet the Creator | Astrology Today",
  description:
    "Learn more about Mario Sbardella, the creator behind Astrology Today, LIFESPACE, and Creation Health.",
};

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
