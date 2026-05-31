import Link from "next/link";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLegalCopy } from "../../lib/copy";
import { getPrivacyPolicyCopy } from "../../lib/privacyPolicyCopy";

const LEGAL_CANVAS_SCALE = 0.71;
const LEGAL_CANVAS_WIDTH = 1760;
const LEGAL_CANVAS_OFFSET_X = 0;
const LEGAL_CANVAS_OFFSET_Y = 16;

export default function PrivacyPolicyPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getLegalCopy("privacy", locale);
  const privacyCopy = getPrivacyPolicyCopy(locale);
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
            <nav className="site-rules-toc" aria-label="Privacy policy sections">
              <a href="#summary">{privacyCopy.summaryHeading}</a>
              {privacyCopy.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="site-rules-document">
            <div className="site-rules-intro">
              <h2 className="site-rules-legal-heading">{copy.introHeading}</h2>
              {copy.introParagraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <section id="summary" className="site-rules-section">
              <h2>{privacyCopy.summaryHeading}</h2>
              <ul className="site-rules-list">
                {privacyCopy.summaryPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>

            {privacyCopy.sections.map((section) => (
              <section key={section.id} id={section.id} className="site-rules-section">
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="site-rules-section site-rules-contact">
              <h2>{copy.contactHeading}</h2>
              <p>{copy.contactBody}</p>
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
