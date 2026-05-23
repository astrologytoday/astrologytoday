import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import Script from "next/script";
import LocalePreferenceSync from "../components/shared/LocalePreferenceSync";
import { LOCALE_PREFERENCE_KEY, defaultLocale, supportedLocales } from "../lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astrology Today",
  description: "Love Computer",
  icons: {
    icon: "/astrologytoday-emblem.png",
    shortcut: "/astrologytoday-emblem.png",
    apple: "/astrologytoday-emblem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const adsenseClient = "ca-pub-1548886446795369";
  const adsenseSrc = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`;
  const localeBootstrap = `
    (function () {
      var supportedLocales = ${JSON.stringify(supportedLocales)};
      var defaultLocale = ${JSON.stringify(defaultLocale)};
      var storageKey = ${JSON.stringify(LOCALE_PREFERENCE_KEY)};
      var pathname = window.location.pathname;
      var search = window.location.search || "";
      var firstSegment = pathname.split("/")[1] || "";
      var localeFromPath = supportedLocales.indexOf(firstSegment) >= 0 ? firstSegment : null;

      if (localeFromPath) {
        try {
          window.localStorage.setItem(storageKey, localeFromPath);
        } catch (error) {}
        document.cookie = storageKey + "=" + localeFromPath + "; path=/; max-age=31536000; SameSite=Lax";
        return;
      }

      var storedLocale = null;
      try {
        storedLocale = window.localStorage.getItem(storageKey);
      } catch (error) {}

      if (!storedLocale || supportedLocales.indexOf(storedLocale) === -1 || storedLocale === defaultLocale) {
        return;
      }

      var targetPath = pathname === "/" ? "/" + storedLocale : "/" + storedLocale + pathname;
      var targetHref = targetPath + search;
      var currentHref = pathname + search;

      if (targetHref !== currentHref) {
        window.location.replace(targetHref);
      }
    })();
  `;

  return (
    <html lang="en">
      <body>
        <Script
          id="google-adsense-site-verification"
          async
          strategy="beforeInteractive"
          src={adsenseSrc}
          crossOrigin="anonymous"
        />
        <Script id="locale-preference-boot" strategy="beforeInteractive">
          {localeBootstrap}
        </Script>
        <Suspense fallback={null}>
          <LocalePreferenceSync />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
