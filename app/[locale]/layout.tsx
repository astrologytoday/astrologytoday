import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import RootDocument from "../../components/shared/RootDocument";
import { defaultLocale, isSupportedLocale, supportedLocales } from "../../lib/i18n";
import { rootMetadata } from "../../lib/rootMetadata";
import "../globals.css";

export const metadata = rootMetadata;

export function generateStaticParams() {
  return supportedLocales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale === defaultLocale) {
    notFound();
  }

  return <RootDocument lang={locale}>{children}</RootDocument>;
}
