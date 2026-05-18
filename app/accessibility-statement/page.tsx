import AccessibilityStatementPage from "../../components/pages/AccessibilityStatementPage";
import { defaultLocale } from "../../lib/i18n";

export { metadata } from "../../components/pages/AccessibilityStatementPage";

export default function AccessibilityStatementRoute() {
  return <AccessibilityStatementPage locale={defaultLocale} />;
}
