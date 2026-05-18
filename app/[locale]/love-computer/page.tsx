import { notFound } from "next/navigation";
import LoveComputerPage from "../../love-computer/page";
import { isSupportedLocale } from "../../../lib/i18n";

export default async function LocaleLoveComputerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LoveComputerPage />;
}
