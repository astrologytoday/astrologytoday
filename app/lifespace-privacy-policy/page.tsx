import LifespacePrivacyPolicyPage from "../../components/pages/LifespacePrivacyPolicyPage";
import { defaultLocale } from "../../lib/i18n";

export { metadata } from "../../components/pages/LifespacePrivacyPolicyPage";

export default function LifespacePrivacyPolicyRoute() {
  return <LifespacePrivacyPolicyPage locale={defaultLocale} />;
}
