"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLifespaceSupportCopy, type SupportTypeId } from "../../lib/lifespaceSupportCopy";

const LEGAL_CANVAS_SCALE = 0.71;
const LEGAL_CANVAS_WIDTH = 1760;
const LEGAL_CANVAS_OFFSET_X = 0;
const LEGAL_CANVAS_OFFSET_Y = 16;

const SUPPORT_TYPE_ORDER: SupportTypeId[] = ["bug", "account", "billing", "feature", "general"];

export default function LifespaceSupportPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getLifespaceSupportCopy(locale);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [supportType, setSupportType] = useState<SupportTypeId>("general");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${copy.subjectPrefix} - ${copy.supportTypeOptions[supportType]}`;
    const body = [
      copy.bodyHeader,
      "",
      `${copy.bodyLabels.name}: ${name || copy.bodyLabels.notProvided}`,
      `${copy.bodyLabels.email}: ${email || copy.bodyLabels.notProvided}`,
      `${copy.bodyLabels.supportType}: ${copy.supportTypeOptions[supportType]}`,
      "",
      `${copy.bodyLabels.message}:`,
      message || copy.bodyLabels.noMessage,
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
                <span>{copy.supportTypeLabel}</span>
                <select
                  value={supportType}
                  onChange={(event) => setSupportType(event.target.value as SupportTypeId)}
                >
                  {SUPPORT_TYPE_ORDER.map((option) => (
                    <option key={option} value={option}>
                      {copy.supportTypeOptions[option]}
                    </option>
                  ))}
                </select>
              </label>

              <label className="at-plus-field">
                <span>{copy.messageLabel}</span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={copy.messagePlaceholder}
                  rows={9}
                  required
                />
              </label>

              <div className="at-plus-actions">
                <button type="submit" className="at-plus-submit">
                  {copy.submitLabel}
                </button>
                <Link href="/lifespace" className="site-rules-home-link">
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
