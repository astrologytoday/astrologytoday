import { notFound } from "next/navigation";
import LifeSpacePage from "../../lifespace/page";
import { isSupportedLocale } from "../../../lib/i18n";

export default async function LocaleLifeSpacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LifeSpacePage />;
}
