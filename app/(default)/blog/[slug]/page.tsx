import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "../../../../components/pages/BlogPostPage";
import { blogPosts } from "../../../../lib/blog";
import { defaultLocale } from "../../../../lib/i18n";
import { getLocalizedBlogPost } from "../../../../lib/blogPostContentCopy";
import { buildArticleMetadata } from "../../../../lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getLocalizedBlogPost(slug, defaultLocale);

  if (!post) {
    return {
      title: "Blog | Astrology Today",
    };
  }

  return buildArticleMetadata({
    title: `${post.title} | Astrology Today`,
    description: post.excerpt,
    pathname: `/blog/${slug}`,
    images: [post.coverImage],
    authors: ["Mario Sbardella"],
    publishedTime: post.publishedTime,
    modifiedTime: post.modifiedTime,
    section: post.section,
    tags: post.keywords,
    keywords: post.keywords,
  });
}

export default async function BlogPostRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getLocalizedBlogPost(slug, defaultLocale)) {
    notFound();
  }

  return <BlogPostPage slug={slug} locale={defaultLocale} />;
}
