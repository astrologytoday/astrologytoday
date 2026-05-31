import type { Metadata } from "next";
import ClientSubscriptionQuestionnairePage from "../../../../components/pages/ClientSubscriptionQuestionnairePage";
import { defaultLocale } from "../../../../lib/i18n";
import { getClientQuestionnaireCopy } from "../../../../lib/clientQuestionnaireCopy";
import { buildPageMetadata } from "../../../../lib/seo";

const questionnaireCopy = getClientQuestionnaireCopy(defaultLocale);
export const metadata: Metadata = {
  ...buildPageMetadata({
    title: questionnaireCopy.metaTitle,
    description: questionnaireCopy.metaDescription,
    pathname: "/pricing/client-questionnaire",
  }),
};

export default function ClientQuestionnaireRoute() {
  return <ClientSubscriptionQuestionnairePage locale={defaultLocale} />;
}
