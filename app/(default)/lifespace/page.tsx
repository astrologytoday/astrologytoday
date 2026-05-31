import type { Metadata } from "next";
import LifeSpaceClientPage from "../../lifespace/LifeSpaceClientPage";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "LIFESPACE | Astrology Today",
  description:
    "Explore LIFESPACE, Astrology Today's evolving platform for holistic recovery, self-study, and brain optimization.",
  pathname: "/lifespace",
  images: ["/lifespace-app-icon.png"],
});

export default function LifeSpacePage() {
  return <LifeSpaceClientPage />;
}
