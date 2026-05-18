import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPage from "../../../components/pages/BlogPage";
import { isSupportedLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Blog | Astrology Today",
  description: "Browse Astrology Today essays, articles, and long-form astrology writing.",
};

export default async function LocaleBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <BlogPage locale={locale} />;
}
