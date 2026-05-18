import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "../../../../components/pages/BlogPostPage";
import { blogPosts, getBlogPostBySlug } from "../../../../lib/blog";
import { isSupportedLocale, supportedLocales } from "../../../../lib/i18n";

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog | Astrology Today",
    };
  }

  return {
    title: `${post.title} | Astrology Today`,
    description: post.excerpt,
  };
}

export default async function LocaleBlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale) || !getBlogPostBySlug(slug)) {
    notFound();
  }

  return <BlogPostPage slug={slug} locale={locale} />;
}
