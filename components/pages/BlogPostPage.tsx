import { notFound } from "next/navigation";
import type { BlogPost } from "../../lib/blog";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLocalizedBlogPost } from "../../lib/blogPostContentCopy";
import { SITE_URL } from "../../lib/seo";
import BlogPostPageClient from "./BlogPostPageClient";

function stringifyJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function BlogPostPage({
  slug,
  locale = defaultLocale,
}: {
  slug: string;
  locale?: SupportedLocale;
}) {
  const post = getLocalizedBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  const routePath = withLocale(locale, `/blog/${slug}`);
  const canonicalUrl = new URL(routePath, SITE_URL).toString();
  const logoUrl = new URL("/astrologytoday-logo.png", SITE_URL).toString();
  const imageUrl = new URL(post.coverImage, SITE_URL).toString();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.publishedTime ?? undefined,
    dateModified: post.modifiedTime ?? post.publishedTime ?? undefined,
    author: [
      {
        "@type": "Person",
        name: "Mario Sbardella",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Astrology Today",
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    inLanguage: locale,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: new URL(withLocale(locale, "/"), SITE_URL).toString(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: new URL(withLocale(locale, "/blog"), SITE_URL).toString(),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }}
      />
      <BlogPostPageClient post={post as BlogPost} locale={locale} />
    </>
  );
}
