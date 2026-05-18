import SiteRulesPage from "../../components/pages/SiteRulesPage";
import { defaultLocale } from "../../lib/i18n";

export { metadata } from "../../components/pages/SiteRulesPage";

export default function SiteRulesRoute() {
  return <SiteRulesPage locale={defaultLocale} />;
}
