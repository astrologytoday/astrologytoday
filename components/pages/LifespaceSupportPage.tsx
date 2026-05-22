"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

const LEGAL_CANVAS_SCALE = 0.71;
const LEGAL_CANVAS_WIDTH = 1760;
const LEGAL_CANVAS_OFFSET_X = 0;
const LEGAL_CANVAS_OFFSET_Y = 16;

const SUPPORT_TYPES = [
  "Bug Report",
  "Account Help",
  "Billing Question",
  "Feature Request",
  "General Support",
] as const;

export default function LifespaceSupportPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [supportType, setSupportType] = useState<(typeof SUPPORT_TYPES)[number]>("General Support");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `LIFESPACE Support Form - ${supportType}`;
    const body = [
      "LIFESPACE Support Form submission",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Support Type: ${supportType}`,
      "",
      "Message:",
      message || "No message provided.",
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
              <h2 className="site-rules-legal-heading">LIFESPACE Support Form</h2>
              <p>
                Use this form if you ran into a problem with the app, have a billing or account
                question, or just need help with something related to LIFESPACE.
              </p>
              <p>
                When you submit, your default email app will open a ready-to-send support message
                addressed to Mario.
              </p>
            </div>

            <form className="at-plus-form" onSubmit={handleSubmit}>
              <label className="at-plus-field">
                <span>Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                />
              </label>

              <label className="at-plus-field">
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email"
                />
              </label>

              <label className="at-plus-field">
                <span>What do you need help with?</span>
                <select
                  value={supportType}
                  onChange={(event) => setSupportType(event.target.value as (typeof SUPPORT_TYPES)[number])}
                >
                  {SUPPORT_TYPES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="at-plus-field">
                <span>Describe the issue or question</span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us what happened, what you were trying to do, and anything else that would help us support you."
                  rows={9}
                  required
                />
              </label>

              <div className="at-plus-actions">
                <button type="submit" className="at-plus-submit">
                  Send Support Email
                </button>
                <Link href={withLocale(locale, "/lifespace")} className="site-rules-home-link">
                  Return to LIFESPACE
                </Link>
              </div>
            </form>
          </section>
        </section>
      </ScaledPageCanvas>
    </main>
  );
}
