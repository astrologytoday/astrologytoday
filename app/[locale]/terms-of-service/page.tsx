import { notFound } from "next/navigation";
import TermsOfServicePage from "../../../components/pages/TermsOfServicePage";
import { isSupportedLocale } from "../../../lib/i18n";

export default async function LocaleTermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <TermsOfServicePage locale={locale} />;
}
