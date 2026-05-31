"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getUpgradeToAtPlusCopy } from "../../lib/upgradeToAtPlusCopy";

const LEGAL_CANVAS_SCALE = 0.71;
const LEGAL_CANVAS_WIDTH = 1760;
const LEGAL_CANVAS_OFFSET_X = 0;
const LEGAL_CANVAS_OFFSET_Y = 16;

export default function UpgradeToAtPlusPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getUpgradeToAtPlusCopy(locale);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ideas, setIdeas] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = copy.subject;
    const body = [
      copy.bodyHeader,
      "",
      `${copy.bodyLabels.name}: ${name || copy.bodyLabels.notProvided}`,
      `${copy.bodyLabels.email}: ${email || copy.bodyLabels.notProvided}`,
      "",
      `${copy.bodyLabels.ideas}:`,
      ideas || copy.bodyLabels.noIdeas,
    ].join("\n");

    window.location.href = `mailto:mariosbardella@protonmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
          <section className="site-rules-document at-plus-form-card">
            <div className="site-rules-intro">
              <h2 className="site-rules-legal-heading">{copy.heading}</h2>
              {copy.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <form className="at-plus-form" onSubmit={handleSubmit}>
              <label className="at-plus-field">
                <span>{copy.nameLabel}</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={copy.namePlaceholder}
                />
              </label>

              <label className="at-plus-field">
                <span>{copy.emailLabel}</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={copy.emailPlaceholder}
                />
              </label>

              <label className="at-plus-field">
                <span>{copy.ideasLabel}</span>
                <textarea
                  value={ideas}
                  onChange={(event) => setIdeas(event.target.value)}
                  placeholder={copy.ideasPlaceholder}
                  rows={9}
                  required
                />
              </label>

              <div className="at-plus-actions">
                <button type="submit" className="at-plus-submit">
                  {copy.submitLabel}
                </button>
                <Link href={withLocale(locale, "/")} className="site-rules-home-link">
                  {copy.returnLabel}
                </Link>
              </div>
            </form>
          </section>
        </section>
      </ScaledPageCanvas>
    </main>
  );
}
