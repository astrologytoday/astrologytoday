import type { Metadata } from "next";
import LoveComputerPage from "../../../components/pages/LoveComputerPage";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Love Computer | Astrology Today",
  description:
    "Explore the Love Computer for astrology-based relationship insights, compatibility patterns, and symbolic synastry analysis.",
  pathname: "/love-computer",
});

export default function LoveComputerRoute() {
  return <LoveComputerPage />;
}
