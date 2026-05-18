import { notFound } from "next/navigation";
import PrivacyPolicyPage from "../../../components/pages/PrivacyPolicyPage";
import { isSupportedLocale } from "../../../lib/i18n";

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
