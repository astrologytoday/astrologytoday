import type { Metadata } from "next";
import MeetTheCreatorPage from "../../components/pages/MeetTheCreatorPage";
import { defaultLocale } from "../../lib/i18n";

export const metadata: Metadata = {
  title: "Meet the Creator | Astrology Today",
  description:
    "Learn more about Mario Sbardella, the creator behind Astrology Today, LIFESPACE, and Creation Health.",
};

export default function MeetTheCreatorRoute() {
  return <MeetTheCreatorPage locale={defaultLocale} />;
}
