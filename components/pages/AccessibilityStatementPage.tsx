import Link from "next/link";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLegalCopy } from "../../lib/copy";
import { getAccessibilityStatementCopy } from "../../lib/accessibilityStatementCopy";

const LEGAL_CANVAS_SCALE = 0.71;
const LEGAL_CANVAS_WIDTH = 1760;
const LEGAL_CANVAS_OFFSET_X = 0;
const LEGAL_CANVAS_OFFSET_Y = 16;

export default function AccessibilityStatementPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getLegalCopy("accessibility", locale);
  const accessibilityCopy = getAccessibilityStatementCopy(locale);
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
              src="/astrologytoday-emblem.png"
              alt="Astrology Today emblem"
              className="site-rules-brand-image"
            />
            <div className="site-rules-brand-copy">
              <span className="site-rules-kicker">{copy.kicker}</span>
              <h1>{copy.title}</h1>
              <p>{copy.summary}</p>
            </div>
          </Link>

          <div className="site-rules-meta">
            {copy.meta.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </header>

        <div className="site-rules-layout">
            <aside className="site-rules-sidebar">
              <p className="site-rules-sidebar-label">{copy.sidebarLabel}</p>
              <nav className="site-rules-toc" aria-label="Accessibility sections">
              <a href="#commitment">{accessibilityCopy.toc[0]}</a>
              <a href="#status">{accessibilityCopy.toc[1]}</a>
              <a href="#non-accessible">{accessibilityCopy.toc[2]}</a>
              <a href="#preparation">{accessibilityCopy.toc[3]}</a>
              <a href="#feedback">{accessibilityCopy.toc[4]}</a>
              <a href="#enforcement">{accessibilityCopy.toc[5]}</a>
              </nav>
            </aside>

          <article className="site-rules-document">
            <section id="commitment" className="site-rules-intro">
              <h2 className="site-rules-legal-heading">{copy.introHeading}</h2>
              {copy.introParagraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section id="status" className="site-rules-section">
              <h2>{accessibilityCopy.statusHeading}</h2>
              <p>{accessibilityCopy.statusBody[0]}</p>
              <p>{accessibilityCopy.statusBody[1]}</p>
            </section>

            <section id="non-accessible" className="site-rules-section">
              <h2>{accessibilityCopy.contentHeading}</h2>
              <p>{accessibilityCopy.contentLead}</p>
              <ul className="site-rules-list">
                {accessibilityCopy.nonAccessibleItems.map((item, index) => (
                  <li key={`${index}-${item}`}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="preparation" className="site-rules-section">
              <h2>{accessibilityCopy.preparationHeading}</h2>
              <p>{accessibilityCopy.preparationBody[0]}</p>
              <p>{accessibilityCopy.preparationBody[1]}</p>
            </section>

            <section id="feedback" className="site-rules-section">
              <h2>{accessibilityCopy.feedbackHeading}</h2>
              <p>{accessibilityCopy.feedbackBody[0]}</p>
              <p>{accessibilityCopy.feedbackBody[1]}</p>
              <ul className="site-rules-list">
                <li>
                  Email:{" "}
                  <a href="mailto:mariosbardella@protonmail.com">mariosbardella@protonmail.com</a>
                </li>
                <li>
                  Contact form:{" "}
                  <a href="https://help.astrologytoday.ca/en/" target="_blank" rel="noreferrer">
                    https://help.astrologytoday.ca/en/
                  </a>
                </li>
              </ul>
              <p>{accessibilityCopy.feedbackResponse}</p>
            </section>

            <section id="enforcement" className="site-rules-section site-rules-contact">
              <h2>{accessibilityCopy.enforcementHeading}</h2>
              <p>{accessibilityCopy.enforcementBody}</p>
              <ul className="site-rules-list">
                <li>U.S. Department of Justice, Civil Rights Division</li>
                <li>
                  Website:{" "}
                  <a href="https://www.ada.gov" target="_blank" rel="noreferrer">
                    https://www.ada.gov
                  </a>
                </li>
                <li>Phone: 1-800-514-0301 (Voice)</li>
                <li>TTY: 1-833-610-1264</li>
                <li>
                  Email: <a href="mailto:ada.gov@usdoj.gov">ada.gov@usdoj.gov</a>
                </li>
              </ul>
              <Link href={withLocale(locale, "/")} className="site-rules-home-link">
                {copy.returnHome}
              </Link>
            </section>
          </article>
        </div>
      </section>
      </ScaledPageCanvas>
    </main>
  );
}
