import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientSubscriptionQuestionnairePage from "../../../../components/pages/ClientSubscriptionQuestionnairePage";
import { isSupportedLocale } from "../../../../lib/i18n";

export const metadata: Metadata = {
  title: "Client Questionnaire | Astrology Today",
  description:
    "Client subscription intake questionnaire for Astrology Today memberships.",
};

export default async function LocaleClientQuestionnaireRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <ClientSubscriptionQuestionnairePage locale={locale} />;
}
