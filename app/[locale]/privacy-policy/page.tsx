import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrivacyPolicyPage from "../../../components/pages/PrivacyPolicyPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getPrivacyPolicyCopy } from "../../../lib/privacyPolicyCopy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getPrivacyPolicyCopy(locale);

  return buildPageMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    pathname: "/privacy-policy",
    locale,
  });
}

export default async function LocalePrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <PrivacyPolicyPage locale={locale} />;
}
