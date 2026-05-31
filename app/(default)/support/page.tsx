import type { Metadata } from "next";
import LifespaceSupportPage from "../../../components/pages/LifespaceSupportPage";
import { defaultLocale } from "../../../lib/i18n";
import { getLifespaceSupportCopy } from "../../../lib/lifespaceSupportCopy";
import { buildPageMetadata } from "../../../lib/seo";

const copy = getLifespaceSupportCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  pathname: "/support",
});

export default function SupportRoute() {
  return <LifespaceSupportPage locale={defaultLocale} />;
}
