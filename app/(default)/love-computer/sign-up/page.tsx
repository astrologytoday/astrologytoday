import type { Metadata } from "next";
import LoveComputerSignupPage from "../../../../components/pages/LoveComputerSignupPage";
import { buildPageMetadata } from "../../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Love Computer Sign Up | Astrology Today",
  description: "Create an Astrology Today account to save Love Computer charts and notes.",
  pathname: "/love-computer/sign-up",
});

export default function LoveComputerSignupRoute() {
  return <LoveComputerSignupPage />;
}
