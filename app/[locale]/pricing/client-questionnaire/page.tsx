import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientSubscriptionQuestionnairePage from "../../../../components/pages/ClientSubscriptionQuestionnairePage";
import { isSupportedLocale, type SupportedLocale } from "../../../../lib/i18n";
import { getClientQuestionnaireCopy } from "../../../../lib/clientQuestionnaireCopy";
import { buildPageMetadata } from "../../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const questionnaireCopy = getClientQuestionnaireCopy(locale);

  return buildPageMetadata({
    title: questionnaireCopy.metaTitle,
    description: questionnaireCopy.metaDescription,
    pathname: "/pricing/client-questionnaire",
    locale,
  });
}

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
