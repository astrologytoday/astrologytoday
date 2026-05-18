import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import LocalePreferenceSync from "../components/shared/LocalePreferenceSync";
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
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <LocalePreferenceSync />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
