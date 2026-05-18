import PrivacyPolicyPage from "../../components/pages/PrivacyPolicyPage";
import { defaultLocale } from "../../lib/i18n";

export { metadata } from "../../components/pages/PrivacyPolicyPage";

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicyPage locale={defaultLocale} />;
}
