import { notFound } from "next/navigation";
import SiteRulesPage from "../../../components/pages/SiteRulesPage";
import { isSupportedLocale } from "../../../lib/i18n";

export default async function LocaleSiteRulesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <SiteRulesPage locale={locale} />;
}
