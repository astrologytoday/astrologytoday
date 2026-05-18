import { notFound } from "next/navigation";
import AccessibilityStatementPage from "../../../components/pages/AccessibilityStatementPage";
import { isSupportedLocale } from "../../../lib/i18n";

export default async function LocaleAccessibilityStatementPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <AccessibilityStatementPage locale={locale} />;
}
