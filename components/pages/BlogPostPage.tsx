import { notFound } from "next/navigation";
import type { BlogPost } from "../../lib/blog";
import { getBlogPostBySlug } from "../../lib/blog";
import { defaultLocale, type SupportedLocale } from "../../lib/i18n";
import BlogPostPageClient from "./BlogPostPageClient";

export default function BlogPostPage({
  slug,
  locale = defaultLocale,
}: {
  slug: string;
  locale?: SupportedLocale;
}) {
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPageClient post={post as BlogPost} locale={locale} />;
}
