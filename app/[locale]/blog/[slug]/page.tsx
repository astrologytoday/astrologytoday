import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "../../../../components/pages/BlogPostPage";
import { blogPosts } from "../../../../lib/blog";
import { getLocalizedBlogPost } from "../../../../lib/blogPostContentCopy";
import { defaultLocale, isSupportedLocale, supportedLocales, type SupportedLocale } from "../../../../lib/i18n";
import { buildArticleMetadata } from "../../../../lib/seo";

export function generateStaticParams() {
  return supportedLocales.filter((locale) => locale !== defaultLocale).flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const routeLocale = isSupportedLocale(locale) ? (locale as SupportedLocale) : undefined;
  const post = routeLocale ? getLocalizedBlogPost(slug, routeLocale) : null;

  if (!post) {
    return {
      title: "Blog | Astrology Today",
    };
  }

  return buildArticleMetadata({
    title: `${post.title} | Astrology Today`,
    description: post.excerpt,
    pathname: `/blog/${slug}`,
    locale: routeLocale,
    images: [post.coverImage],
    authors: ["Mario Sbardella"],
    publishedTime: post.publishedTime,
    modifiedTime: post.modifiedTime,
    section: post.section,
    tags: post.keywords,
    keywords: post.keywords,
  });
}

export default async function LocaleBlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale) || !getLocalizedBlogPost(slug, locale)) {
    notFound();
  }

  return <BlogPostPage slug={slug} locale={locale} />;
}
