import type { Metadata } from "next";
import DmcaPage from "../../../components/pages/DmcaPage";
import { defaultLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getDmcaCopy } from "../../../lib/dmcaCopy";

const dmcaCopy = getDmcaCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: dmcaCopy.metadataTitle,
  description: dmcaCopy.metadataDescription,
  pathname: "/dmca",
});

export default function DmcaRoute() {
  return <DmcaPage locale={defaultLocale} />;
}
