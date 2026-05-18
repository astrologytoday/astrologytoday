import type { Metadata } from "next";
import ClientSubscriptionQuestionnairePage from "../../../components/pages/ClientSubscriptionQuestionnairePage";
import { defaultLocale } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Client Questionnaire | Astrology Today",
  description:
    "Client subscription intake questionnaire for Astrology Today memberships.",
};

export default function ClientQuestionnaireRoute() {
  return <ClientSubscriptionQuestionnairePage locale={defaultLocale} />;
}
