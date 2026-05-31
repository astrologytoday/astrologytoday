import type { Metadata } from "next";
import { SITE_URL } from "./seo";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Astrology Today",
  description:
    "Astrology Today offers astrology-informed guidance, relationship insight, wellness tools, and long-form reflections for everyday life.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
