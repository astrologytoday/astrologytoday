import type { Metadata } from "next";
import Link from "next/link";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLifespacePrivacyPolicyCopy } from "../../lib/lifespacePrivacyPolicyCopy";

const LEGAL_CANVAS_SCALE = 0.71;
const LEGAL_CANVAS_WIDTH = 1760;
const LEGAL_CANVAS_OFFSET_X = 0;
const LEGAL_CANVAS_OFFSET_Y = 16;

const metadataCopy = getLifespacePrivacyPolicyCopy(defaultLocale);

export const metadata: Metadata = {
  title: metadataCopy.metadataTitle,
  description: metadataCopy.metadataDescription,
};

export default function LifespacePrivacyPolicyPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getLifespacePrivacyPolicyCopy(locale);

  return (
    <main className="site-rules-page">
      <div className="site-rules-orbit site-rules-orbit-left" aria-hidden="true" />
      <div className="site-rules-orbit site-rules-orbit-right" aria-hidden="true" />

      <ScaledPageCanvas
        className="site-rules-page-canvas"
        designWidth={LEGAL_CANVAS_WIDTH}
        offsetX={LEGAL_CANVAS_OFFSET_X}
        offsetY={LEGAL_CANVAS_OFFSET_Y}
        scale={LEGAL_CANVAS_SCALE}
        viewportClassName="site-rules-page-canvas-viewport"
      >
      <section className="site-rules-shell">
        <header className="site-rules-hero">
          <Link href={withLocale(locale, "/")} className="site-rules-brand" aria-label="Return to Astrology Today home">
            <img
              src="/lifespace-emblem.png"
              alt="LIFESPACE emblem"
              className="site-rules-brand-image"
            />
            <div className="site-rules-brand-copy">
              <span className="site-rules-kicker">{copy.kicker}</span>
              <h1>{copy.title}</h1>
              <p>{copy.heroDescription}</p>
            </div>
          </Link>

          <div className="site-rules-meta">
            <div>
              <span>{copy.effectiveDateLabel}</span>
              <strong>{copy.effectiveDateValue}</strong>
            </div>
            <div>
              <span>{copy.appliesToLabel}</span>
              <strong>{copy.appliesToValue}</strong>
            </div>
          </div>
        </header>

        <div className="site-rules-layout">
          <aside className="site-rules-sidebar">
            <p className="site-rules-sidebar-label">{copy.onThisPage}</p>
            <nav className="site-rules-toc" aria-label="LIFESPACE privacy policy sections">
              <a href="#overview">{copy.overviewHeading}</a>
              {copy.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="site-rules-document">
            <div id="overview" className="site-rules-intro">
              <h2 className="site-rules-legal-heading">{copy.overviewHeading}</h2>
              <p>{copy.overviewBody}</p>
            </div>

            {copy.sections.map((section) => (
              <section key={section.id} id={section.id} className="site-rules-section">
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph, index) => (
                  <p key={`${section.id}-p-${index}`}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="site-rules-list">
                    {section.bullets.map((bullet, index) => (
                      <li key={`${section.id}-b-${index}`}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="site-rules-section site-rules-contact">
              <h2>{copy.backHeading}</h2>
              <p>{copy.backBody}</p>
              <Link href={withLocale(locale, "/")} className="site-rules-home-link">
                {copy.backLinkLabel}
              </Link>
            </section>
          </article>
        </div>
      </section>
      </ScaledPageCanvas>
    </main>
  );
}
