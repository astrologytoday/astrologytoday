import type { Metadata } from "next";
import UpgradeToAtPlusPage from "../../../components/pages/UpgradeToAtPlusPage";
import { defaultLocale } from "../../../lib/i18n";
import { getUpgradeToAtPlusCopy } from "../../../lib/upgradeToAtPlusCopy";
import { buildPageMetadata } from "../../../lib/seo";

const copy = getUpgradeToAtPlusCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  pathname: "/upgrade-to-at-plus",
});

export default function UpgradeToAtPlusRoute() {
  return <UpgradeToAtPlusPage locale={defaultLocale} />;
}
