import type { Metadata } from "next";
import MeetTheCreatorPage from "../../../components/pages/MeetTheCreatorPage";
import { defaultLocale } from "../../../lib/i18n";
import { getMeetTheCreatorCopy } from "../../../lib/meetTheCreatorCopy";
import { buildPageMetadata } from "../../../lib/seo";

const copy = getMeetTheCreatorCopy(defaultLocale);

export const metadata: Metadata = buildPageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  pathname: "/meet-the-creator",
  images: ["/mario-sbardella-photo.png"],
});

export default function MeetTheCreatorRoute() {
  return <MeetTheCreatorPage locale={defaultLocale} />;
}
