import type { Metadata } from "next";
import BlogPage from "../../components/pages/BlogPage";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Blog | Astrology Today",
  description: "Browse Astrology Today essays, articles, and long-form astrology writing.",
};

export default function BlogRoute() {
  return <BlogPage locale={defaultLocale} />;
}
