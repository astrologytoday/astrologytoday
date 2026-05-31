import type { Metadata } from "next";
import BlogPage from "../../../components/pages/BlogPage";
import { defaultLocale } from "../../../lib/i18n";
import { getBlogPageCopy } from "../../../lib/blogPageCopy";
import { buildPageMetadata } from "../../../lib/seo";

const blogCopy = getBlogPageCopy(defaultLocale);
export const metadata: Metadata = buildPageMetadata({
  title: blogCopy.metaTitle,
  description: blogCopy.metaDescription,
  pathname: "/blog",
  images: ["/june-2026-issue.png"],
});

export default function BlogRoute() {
  return <BlogPage locale={defaultLocale} />;
}
