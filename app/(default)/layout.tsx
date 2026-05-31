import type { ReactNode } from "react";
import RootDocument from "../../components/shared/RootDocument";
import { rootMetadata } from "../../lib/rootMetadata";
import "../globals.css";

export const metadata = rootMetadata;

export default function DefaultLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
