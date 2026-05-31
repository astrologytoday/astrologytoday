import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPage from "../../../components/pages/BlogPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { getBlogPageCopy } from "../../../lib/blogPageCopy";
import { buildPageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const blogCopy = getBlogPageCopy(locale);

  return buildPageMetadata({
    title: blogCopy.metaTitle,
    description: blogCopy.metaDescription,
    pathname: "/blog",
    locale,
    images: ["/june-2026-issue.png"],
  });
}

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
