import { notFound } from "next/navigation";
import LifespacePrivacyPolicyPage from "../../../components/pages/LifespacePrivacyPolicyPage";
import { isSupportedLocale } from "../../../lib/i18n";

export { metadata } from "../../../components/pages/LifespacePrivacyPolicyPage";

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
