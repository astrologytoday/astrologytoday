import type { Metadata } from "next";
import SiteRulesPage from "../../../components/pages/SiteRulesPage";
import { defaultLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getSiteRulesCopy } from "../../../lib/siteRulesCopy";

const rulesCopy = getSiteRulesCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: rulesCopy.metadataTitle,
  description: rulesCopy.metadataDescription,
  pathname: "/site-rules",
});

export default function SiteRulesRoute() {
  return <SiteRulesPage locale={defaultLocale} />;
}
