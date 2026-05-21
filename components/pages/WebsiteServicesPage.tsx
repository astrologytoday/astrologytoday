"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";

const WEBSITE_SERVICES_CANVAS_SCALE = 0.7455;
const WEBSITE_SERVICES_CANVAS_WIDTH = 1760;
const WEBSITE_SERVICES_CANVAS_OFFSET_X = 0;
const WEBSITE_SERVICES_CANVAS_OFFSET_Y = 0;

export default function WebsiteServicesPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  return (
    <main className="website-services-page">
      <div className="website-services-glow website-services-glow-one" aria-hidden="true" />
      <div className="website-services-glow website-services-glow-two" aria-hidden="true" />

      <ScaledPageCanvas
        className="website-services-page-canvas"
        designWidth={WEBSITE_SERVICES_CANVAS_WIDTH}
        offsetX={WEBSITE_SERVICES_CANVAS_OFFSET_X}
        offsetY={WEBSITE_SERVICES_CANVAS_OFFSET_Y}
        scale={WEBSITE_SERVICES_CANVAS_SCALE}
        viewportClassName="website-services-page-canvas-viewport"
      >
        <section
          className="website-services-shell"
          style={
            {
              ["--website-services-scale" as string]: `${WEBSITE_SERVICES_CANVAS_SCALE}`,
            } as CSSProperties
          }
        >
          <div className="website-services-content">
            <h1>
              <span>Like the website?</span>
              <span>Email us and we can build one for you!</span>
            </h1>

            <div className="website-services-actions">
              <a
                href="mailto:mariosbardella@protonmail.com?subject=Website%20Building%20Inquiry"
                className="website-services-primary"
              >
                Inquire Now
              </a>
              <Link href={withLocale(locale, "/")} className="website-services-secondary">
                Back to Astrology Today
              </Link>
            </div>
          </div>
        </section>
      </ScaledPageCanvas>
    </main>
  );
}
