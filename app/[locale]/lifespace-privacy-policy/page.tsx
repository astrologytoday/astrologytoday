import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LifespacePrivacyPolicyPage from "../../../components/pages/LifespacePrivacyPolicyPage";
import { isSupportedLocale, type SupportedLocale } from "../../../lib/i18n";
import { getLifespacePrivacyPolicyCopy } from "../../../lib/lifespacePrivacyPolicyCopy";
import { buildPageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getLifespacePrivacyPolicyCopy(locale);

  return buildPageMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    pathname: "/lifespace-privacy-policy",
    locale,
    images: ["/lifespace-app-icon.png"],
  });
}

export default async function LocaleLifespacePrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LifespacePrivacyPolicyPage locale={locale} />;
}
