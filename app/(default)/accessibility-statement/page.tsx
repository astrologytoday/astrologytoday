import type { Metadata } from "next";
import AccessibilityStatementPage from "../../../components/pages/AccessibilityStatementPage";
import { defaultLocale } from "../../../lib/i18n";
import { buildPageMetadata } from "../../../lib/seo";
import { getAccessibilityStatementCopy } from "../../../lib/accessibilityStatementCopy";

const accessibilityCopy = getAccessibilityStatementCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: accessibilityCopy.metadataTitle,
  description: accessibilityCopy.metadataDescription,
  pathname: "/accessibility-statement",
});

export default function AccessibilityStatementRoute() {
  return <AccessibilityStatementPage locale={defaultLocale} />;
}
