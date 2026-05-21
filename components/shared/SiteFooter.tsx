"use client";

import Link from "next/link";
import { getHomeCopy } from "../../lib/copy";
import {
  defaultLocale,
  localeLabels,
  type SupportedLocale,
  withExplicitLocale,
  withLocale,
} from "../../lib/i18n";

const languageColumns = [
  [
    { code: "en", label: localeLabels.en },
    { code: "fr", label: localeLabels.fr },
    { code: "it", label: localeLabels.it },
    { code: "es", label: localeLabels.es },
  ],
  [
    { code: "hi", label: localeLabels.hi },
    { code: "ur", label: localeLabels.ur },
    { code: "sa", label: localeLabels.sa },
    { code: "pa", label: localeLabels.pa },
  ],
  [
    { code: "zh", label: localeLabels.zh },
    { code: "ja", label: localeLabels.ja },
    { code: "yue", label: localeLabels.yue },
    { code: "ko", label: localeLabels.ko },
  ],
] satisfies { code: SupportedLocale; label: string }[][];

export default function SiteFooter({
  locale = defaultLocale,
  currentPath = "/",
  className = "",
  footerSpacing = 52,
  logoTransform,
}: {
  locale?: SupportedLocale;
  currentPath?: string;
  className?: string;
  footerSpacing?: number;
  logoTransform?: {
    x: number;
    y: number;
    scale: number;
  };
}) {
  const copy = getHomeCopy(locale);
  const localizedHref = (href: string) => withLocale(locale, href);
  const footerColumns = [
    {
      heading: copy.footer.discover,
      items: [
        { label: copy.footer.creationHealth, href: "/creation-health" },
        { label: copy.footer.siteRules, href: "/site-rules" },
        {
          label: copy.footer.advertise,
          href: "mailto:mariosbardella@protonmail.com?subject=Advertising%20With%20Astrology%20Today",
        },
        {
          label: copy.footer.support,
          href: "mailto:mariosbardella@protonmail.com?subject=Support%20Inquiry",
        },
      ],
    },
    {
      heading: copy.footer.legal,
      items: [
        { label: copy.footer.terms, href: "/terms-of-service" },
        { label: copy.footer.privacy, href: "/privacy-policy" },
        { label: copy.footer.dmca, href: "/dmca" },
        { label: copy.footer.accessibility, href: "/accessibility-statement" },
      ],
    },
    {
      heading: copy.footer.other,
      items: [
        { label: copy.footer.upgrade, href: "/pricing" },
        { label: copy.footer.staff, href: "/meet-the-creator" },
        { label: copy.footer.services, href: "/services" },
      ],
    },
  ];

  return (
    <div className={`home-footer-meta ${className}`.trim()} style={{ marginTop: `${footerSpacing}px` }}>
      <footer className="home-footer-mega">
        <div className="home-footer-mega-logo">
          <img
            src="/astrologytoday-emblem.png"
            alt="AstrologyToday logo"
            className="home-footer-mega-logo-image"
            style={
              logoTransform
                ? {
                    transform: `translate(${logoTransform.x}px, ${logoTransform.y}px) scale(${logoTransform.scale})`,
                    transformOrigin: "top left",
                  }
                : undefined
            }
          />
        </div>
        {footerColumns.map((column) => (
          <div key={column.heading} className="home-footer-mega-column">
            <h3>{column.heading}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item.label}>
                    {item.disabled ? (
                      <span>{item.label}</span>
                    ) : item.href.startsWith("mailto:") ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <Link href={localizedHref(item.href)}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
        ))}
        <div className="home-footer-mega-column home-footer-mega-languages">
          <h3>{copy.footer.language}</h3>
          <div className="home-footer-language-grid">
            {languageColumns.map((column, index) => (
              <ul key={index}>
                {column.map((item) => (
                  <li key={item.code}>
                    <Link href={withExplicitLocale(item.code, currentPath)}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </footer>

      <p className="home-site-credit">
        © 2026 Astrology Today. {copy.footer.credit}{" "}
        <Link href={localizedHref("/website-services")} className="home-site-credit-link">
          LIFESPACE
        </Link>
      </p>
    </div>
  );
}
