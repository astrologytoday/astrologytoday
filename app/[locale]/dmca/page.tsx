import { notFound } from "next/navigation";
import DmcaPage from "../../../components/pages/DmcaPage";
import { isSupportedLocale } from "../../../lib/i18n";

export default async function LocaleDmcaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <DmcaPage locale={locale} />;
}
