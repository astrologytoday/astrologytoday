"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

export default function UpgradeToAtPlusPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ideas, setIdeas] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "AstrologyToday+ Feature Request";
    const body = [
      "AstrologyToday+ interest form submission",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      "",
      "Requested additions:",
      ideas || "No feature ideas provided.",
    ].join("\n");

    window.location.href = `mailto:mariosbardella@protonmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="site-rules-page">
      <div className="site-rules-orbit site-rules-orbit-left" aria-hidden="true" />
      <div className="site-rules-orbit site-rules-orbit-right" aria-hidden="true" />

      <section className="site-rules-shell">
        <section className="site-rules-document at-plus-form-card">
          <div className="site-rules-intro">
            <h2 className="site-rules-legal-heading">AstrologyToday+ Interest Form</h2>
            <p>
              AstrologyToday+ is not yet available for public users. What additions to the
              program would you like to see included in this feature?
            </p>
            <p>
              Tell us what would make AstrologyToday+ feel genuinely valuable to you. Your
              response will open as a ready-to-send email addressed to Mario.
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
              <span>What additions would you like to see?</span>
              <textarea
                value={ideas}
                onChange={(event) => setIdeas(event.target.value)}
                placeholder="Ideas for premium reports, tools, reader features, app integrations, or anything else you'd want included in AstrologyToday+."
                rows={9}
                required
              />
            </label>

            <div className="at-plus-actions">
              <button type="submit" className="at-plus-submit">
                Send Feedback
              </button>
              <Link href={withLocale(locale, "/")} className="site-rules-home-link">
                Return to Astrology Today
              </Link>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
