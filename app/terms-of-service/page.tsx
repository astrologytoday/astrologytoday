import TermsOfServicePage from "../../components/pages/TermsOfServicePage";
import { defaultLocale } from "../../lib/i18n";

export { metadata } from "../../components/pages/TermsOfServicePage";

export default function TermsOfServiceRoute() {
  return <TermsOfServicePage locale={defaultLocale} />;
}
