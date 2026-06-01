import type { MetadataRoute } from "next";
import { blogPosts } from "../lib/blog";
import { defaultLocale, supportedLocales, withExplicitLocale } from "../lib/i18n";
import { SITE_URL } from "../lib/seo";

const staticPaths = [
  "/",
  "/about",
  "/services",
  "/downloads",
  "/pricing",
  "/pricing/client-questionnaire",
  "/blog",
  "/site-rules",
  "/terms-of-service",
  "/privacy-policy",
  "/dmca",
  "/accessibility-statement",
  "/lifespace-privacy-policy",
  "/support",
  "/meet-the-creator",
  "/creation-health",
  "/website-services",
  "/upgrade-to-at-plus",
  "/love-computer",
  "/lifespace",
] as const;

type SitemapChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function toAbsoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}

function buildAlternates(pathname: string) {
  return {
    languages: Object.fromEntries(
      supportedLocales.map((locale) => [locale, toAbsoluteUrl(withExplicitLocale(locale, pathname))]),
    ),
  };
}

const nonDefaultLocales = supportedLocales.filter((locale) => locale !== defaultLocale);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((pathname) => [
    {
      url: toAbsoluteUrl(pathname),
      lastModified: now,
      changeFrequency: (pathname === "/" ? "weekly" : "monthly") as SitemapChangeFrequency,
      priority: pathname === "/" ? 1 : pathname === "/services" || pathname === "/pricing" || pathname === "/blog" ? 0.9 : 0.8,
      alternates: buildAlternates(pathname),
    },
    ...nonDefaultLocales.map((locale) => ({
      url: toAbsoluteUrl(withExplicitLocale(locale, pathname)),
      lastModified: now,
      changeFrequency: (pathname === "/" ? "weekly" : "monthly") as SitemapChangeFrequency,
      priority: pathname === "/" ? 0.95 : pathname === "/services" || pathname === "/pricing" || pathname === "/blog" ? 0.85 : 0.75,
      alternates: buildAlternates(pathname),
    })),
  ]);

  const blogEntries: MetadataRoute.Sitemap = blogPosts.flatMap((post) => {
    const pathname = `/blog/${post.slug}`;
    return [
      {
        url: toAbsoluteUrl(pathname),
        lastModified: now,
        changeFrequency: "monthly" as SitemapChangeFrequency,
        priority: 0.8,
        alternates: buildAlternates(pathname),
      },
      ...nonDefaultLocales.map((locale) => ({
        url: toAbsoluteUrl(withExplicitLocale(locale, pathname)),
        lastModified: now,
        changeFrequency: "monthly" as SitemapChangeFrequency,
        priority: 0.75,
        alternates: buildAlternates(pathname),
      })),
    ];
  });

  return [...staticEntries, ...blogEntries];
}
