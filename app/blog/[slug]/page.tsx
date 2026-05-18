import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "../../../components/pages/BlogPostPage";
import { blogPosts, getBlogPostBySlug } from "../../../lib/blog";
import { defaultLocale } from "../../../lib/i18n";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
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

export default async function BlogPostRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getBlogPostBySlug(slug)) {
    notFound();
  }

  return <BlogPostPage slug={slug} locale={defaultLocale} />;
}
