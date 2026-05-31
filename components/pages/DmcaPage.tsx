import Link from "next/link";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLegalCopy } from "../../lib/copy";
import { getDmcaCopy } from "../../lib/dmcaCopy";

const LEGAL_CANVAS_SCALE = 0.71;
const LEGAL_CANVAS_WIDTH = 1760;
const LEGAL_CANVAS_OFFSET_X = 0;
const LEGAL_CANVAS_OFFSET_Y = 16;

export default function DmcaPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getLegalCopy("dmca", locale);
  const dmcaCopy = getDmcaCopy(locale);

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
              <nav className="site-rules-toc" aria-label="DMCA sections">
                <a href="#policy">{dmcaCopy.toc[0]}</a>
                <a href="#notice">{dmcaCopy.toc[1]}</a>
                <a href="#counter">{dmcaCopy.toc[2]}</a>
              </nav>
            </aside>

            <article className="site-rules-document">
              <section id="policy" className="site-rules-intro">
                <h2 className="site-rules-legal-heading">{copy.introHeading}</h2>
                <p>{dmcaCopy.policy[0]}</p>
                <p>{dmcaCopy.policy[1]}</p>
              </section>

              <section id="notice" className="site-rules-section">
                <h2>{dmcaCopy.noticeHeading}</h2>
                <p>{dmcaCopy.noticeBody[0]}</p>
                <p>{dmcaCopy.noticeBody[1]}</p>
                <ol className="site-rules-list">
                  {dmcaCopy.infringementItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <p>{dmcaCopy.noticeClosing}</p>
              </section>

              <section id="counter" className="site-rules-section">
                <h2>{dmcaCopy.counterHeading}</h2>
                <p>{dmcaCopy.counterBody[0]}</p>
                <p>{dmcaCopy.counterBody[1]}</p>
                <ol className="site-rules-list">
                  {dmcaCopy.counterItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <p>
                  {dmcaCopy.counterClosing}{" "}
                  <a href="mailto:mariosbardella@protonmail.com">mariosbardella@protonmail.com</a>.
                </p>
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
