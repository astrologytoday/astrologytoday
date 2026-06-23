"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SiteFooter from "../shared/SiteFooter";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { getHomeCopy } from "../../lib/copy";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getPricingCopy, type PricingPlanCopy } from "../../lib/pricingCopy";

type PlanId = "client" | "specialist" | "master";
type Plan = PricingPlanCopy & { id: PlanId };

const DIRECT_CHECKOUT_LINKS: Partial<Record<PlanId, string>> = {
  specialist: "https://square.link/u/xf8FVWTH",
  master: "https://square.link/u/zq8NPY6J",
};

const PRICING_CANVAS_SCALE = 0.71;
const PRICING_CANVAS_WIDTH = 1760;
const PRICING_CANVAS_OFFSET_X = 0;
const PRICING_CANVAS_OFFSET_Y = 16;

export default function PricingPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getHomeCopy(locale);
  const pricingCopy = getPricingCopy(locale);
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("client");

  const plans: Plan[] = [
    { id: "client", ...pricingCopy.plans.client },
    { id: "specialist", ...pricingCopy.plans.specialist },
    { id: "master", ...pricingCopy.plans.master },
  ];

  const sidebarLinks = [
    { label: copy.nav.home, href: withLocale(locale, "/") },
    { label: copy.nav.services, href: withLocale(locale, "/services") },
    { label: copy.nav.downloads, href: withLocale(locale, "/downloads") },
    { label: copy.nav.about, href: withLocale(locale, "/about") },
    { label: copy.nav.lifespace, href: "https://mylifespace.ca/portal" },
    { label: copy.nav.pricing, href: withLocale(locale, "/pricing"), active: true },
    { label: copy.nav.blog, href: withLocale(locale, "/blog") },
  ];

  return (
    <main className="pricing-page">
      <div className="pricing-orb pricing-orb-one" aria-hidden="true" />
      <div className="pricing-orb pricing-orb-two" aria-hidden="true" />
      <div className="pricing-orb pricing-orb-three" aria-hidden="true" />

      <ScaledPageCanvas
        className="pricing-page-canvas"
        designWidth={PRICING_CANVAS_WIDTH}
        offsetX={PRICING_CANVAS_OFFSET_X}
        offsetY={PRICING_CANVAS_OFFSET_Y}
        scale={PRICING_CANVAS_SCALE}
        viewportClassName="pricing-page-canvas-viewport"
      >
        <section className="pricing-shell">
          <div className="pricing-layout">
            <aside className="pricing-sidebar">
              <nav
                className="home-sidebar-nav pricing-sidebar-nav"
                aria-label="Site sections"
                style={{
                  transform: "translate(-184px, 24px) scale(1.04)",
                  transformOrigin: "top center",
                }}
              >
                {sidebarLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`home-sidebar-link${item.active ? " is-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            <div className="pricing-main">
              <img
                src="/astrologytoday-emblem.png"
                alt="Astrology Today emblem"
                className="pricing-page-emblem"
              />

              <header className="pricing-hero">
                <p className="pricing-kicker">{pricingCopy.kicker}</p>
                <h1>{pricingCopy.heroTitle}</h1>
                <p className="pricing-subtitle">
                  {pricingCopy.heroSubtitle}
                </p>
              </header>

              <section className="pricing-selector" aria-labelledby="pricing-selector-title">
                <h2 id="pricing-selector-title" className="pricing-selector-title">
                  {pricingCopy.selectorTitle}
                </h2>
                <div className="pricing-plan-grid" role="radiogroup" aria-label="Subscription plans">
                  {plans.map((plan) => {
                    const selected = selectedPlan === plan.id;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        className={`pricing-plan-card${selected ? " is-selected" : ""}`}
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        <div className="pricing-plan-surface">
                          <div className="pricing-plan-topbar">
                            <div className="pricing-plan-heading">
                              <p className="pricing-plan-level">{plan.level}</p>
                              <h3>{plan.title}</h3>
                            </div>
                            <span
                              className={`pricing-plan-indicator${selected ? " is-selected" : ""}`}
                              aria-hidden="true"
                            >
                              {selected ? "✓" : ""}
                            </span>
                          </div>

                          <div className="pricing-plan-body">
                            <p className="pricing-plan-price">{plan.price}</p>
                            <p className="pricing-plan-description">{plan.description}</p>

                            <div className="pricing-plan-divider" />

                            <p className="pricing-plan-includes-title">{pricingCopy.includesTitle}</p>
                            <ul className="pricing-plan-includes">
                              {plan.includes.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>

                            {plan.note ? <p className="pricing-plan-note">{plan.note}</p> : null}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pricing-legal">
                  {pricingCopy.legal}
                </div>

                <div className="pricing-next-wrap">
                  <button
                    type="button"
                    className="pricing-next-button"
                    onClick={() => {
                      if (selectedPlan === "client") {
                        router.push(withLocale(locale, "/pricing/client-questionnaire"));
                        return;
                      }

                      const directCheckoutUrl = DIRECT_CHECKOUT_LINKS[selectedPlan];
                      if (directCheckoutUrl) {
                        window.location.href = directCheckoutUrl;
                      }
                    }}
                  >
                    {pricingCopy.next}
                  </button>
                </div>
              </section>

            </div>
          </div>

          <SiteFooter locale={locale} currentPath="/pricing" className="site-section-footer" />
        </section>
      </ScaledPageCanvas>
    </main>
  );
}
