import DmcaPage from "../../components/pages/DmcaPage";
import { defaultLocale } from "../../lib/i18n";

export { metadata } from "../../components/pages/DmcaPage";

export default function DmcaRoute() {
  return <DmcaPage locale={defaultLocale} />;
}
