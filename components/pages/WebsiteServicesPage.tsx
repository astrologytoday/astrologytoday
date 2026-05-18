"use client";

import Link from "next/link";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

export default function WebsiteServicesPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  return (
    <main className="website-services-page">
      <div className="website-services-glow website-services-glow-one" aria-hidden="true" />
      <div className="website-services-glow website-services-glow-two" aria-hidden="true" />

      <section className="website-services-shell">
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
    </main>
  );
}
