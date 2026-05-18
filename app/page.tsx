import HomePage from "../components/pages/HomePage";
import { defaultLocale } from "../lib/i18n";

export default function HomePageRoute() {
  return <HomePage locale={defaultLocale} />;
}
