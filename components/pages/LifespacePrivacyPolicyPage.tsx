import type { Metadata } from "next";
import Link from "next/link";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

type PolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    paragraphs: [
      "LIFESPACE may collect information that users provide directly within the app, including:",
      "LIFESPACE may also collect technical and usage-related information, including:",
      "If location-based features are enabled, LIFESPACE may use approximate location information to provide geographically relevant wellness feedback. Users can control location permissions through their device settings.",
    ],
    bullets: [
      "Username or profile name",
      "Age, gender, height, weight, smoking status, and alcohol intake",
      "Fitness goals",
      "Selected activities, creative outlets, inner work practices, and purpose preferences",
      "Daily LIFESPACE check-in responses",
      "Lifestyle survey responses",
      "Goals, planner entries, to-do list items, custom activities, custom creative outlets, or other user-entered information",
      "Wellness scores, module scores, analytics, and progress history",
      "Optional data the user chooses to share through app features",
      "App usage information",
      "Device information",
      "Crash logs",
      "Performance data",
      "Diagnostic information",
      "Analytics data used to improve app functionality and reliability",
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Information",
    bullets: [
      "Provide core app functionality",
      "Generate LIFESPACE scores, wellness reflections, and analytics",
      "Save user profile preferences",
      "Track wellness trends over time",
      "Personalize feedback based on user responses",
      "Support optional sharing features selected by the user",
      "Improve app performance, reliability, and user experience",
      "Troubleshoot technical issues",
      "Support future features, such as therapist-client sharing, web portal access, or subscription-based services",
    ],
  },
  {
    id: "health-and-wellness-information",
    title: "3. Health and Wellness Information",
    paragraphs: [
      "LIFESPACE is a wellness, lifestyle reflection, and habit-tracking app.",
      "LIFESPACE is not a medical device and does not provide medical advice, diagnosis, treatment, cure, or prevention of any disease, disorder, or mental health condition.",
      "Information provided by LIFESPACE is for educational, reflective, and wellness-support purposes only. Users should consult a qualified healthcare provider, mental health professional, or emergency service if they need medical, psychiatric, or crisis support.",
    ],
  },
  {
    id: "third-party-services",
    title: "4. Third-Party Services",
    paragraphs: [
      "LIFESPACE may use third-party services to support app functionality, analytics, diagnostics, storage, and performance monitoring.",
      "These services may include, but are not limited to:",
      "Third-party services may collect and process information according to their own privacy policies.",
      "LIFESPACE may include links to publicly available YouTube videos or other third-party content for educational or wellness-related purposes. LIFESPACE does not download, modify, rehost, or claim ownership of third-party YouTube content.",
    ],
    bullets: [
      "Firebase",
      "Google Firestore",
      "Google Analytics for Firebase",
      "Crash reporting or diagnostic tools",
      "YouTube links or embedded YouTube content",
      "Apple services, including App Store services, notifications, and in-app purchase systems if applicable",
    ],
  },
  {
    id: "data-storage",
    title: "5. Data Storage",
    paragraphs: [
      "Some user data may be stored locally on the user’s device.",
      "Some data may also be stored securely through third-party cloud services, such as Firebase or Firestore, when needed to provide app functionality, sync data, support analytics, or enable optional sharing features.",
      "While reasonable efforts are made to protect user information, no method of electronic storage or transmission over the internet is completely secure.",
    ],
  },
  {
    id: "data-sharing",
    title: "6. Data Sharing",
    paragraphs: [
      "LIFESPACE does not sell user personal information.",
      "User information may be shared only in the following situations:",
      "If future therapist-client sharing or web portal features are enabled, users will be given control over whether their information is shared.",
    ],
    bullets: [
      "When necessary to provide app functionality",
      "With third-party service providers that support the app",
      "When the user chooses to enable optional sharing features",
      "When required by law, regulation, legal process, or enforceable government request",
      "To protect the rights, safety, or security of users, the app, or others",
    ],
  },
  {
    id: "optional-sharing-features",
    title: "7. Optional Sharing Features",
    paragraphs: [
      "LIFESPACE may include or later introduce optional sharing features that allow users to share selected wellness data, analytics, scores, or progress information with a therapist, accountability partner, web portal, or related LIFESPACE service.",
      "These features are optional. Users are responsible for choosing whether to enable sharing and with whom they share their information.",
    ],
  },
  {
    id: "notifications",
    title: "8. Notifications",
    paragraphs: [
      "LIFESPACE may request permission to send notifications, such as daily reminders to complete a LIFESPACE check.",
      "Users can enable or disable notifications at any time through their device settings.",
    ],
  },
  {
    id: "location-information",
    title: "9. Location Information",
    paragraphs: [
      "LIFESPACE may request access to location information if location-based personalization is used.",
      "Location information may be used to provide geographically relevant wellness suggestions, such as light exposure guidance, environmental context, or local lifestyle feedback.",
      "Users can control location access through their device settings.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "10. Children’s Privacy",
    paragraphs: [
      "LIFESPACE is not intended for children under the age of 13.",
      "We do not knowingly collect personal information from children under 13. If we become aware that personal information from a child under 13 has been collected, we will take reasonable steps to delete that information.",
    ],
  },
  {
    id: "user-choices-and-controls",
    title: "11. User Choices and Controls",
    paragraphs: [
      "Users may control certain app permissions through their device settings, including:",
      "Users may also delete the app from their device at any time.",
      "If users have questions about their data or wish to request support regarding their information, they may contact us using the contact information below.",
    ],
    bullets: [
      "Location access",
      "Notification permissions",
      "Cellular data access",
      "App tracking permissions, where applicable",
    ],
  },
  {
    id: "data-retention",
    title: "12. Data Retention",
    paragraphs: [
      "LIFESPACE may retain user information for as long as needed to provide app functionality, maintain records, improve the app, comply with legal obligations, resolve disputes, or enforce agreements.",
      "Locally stored data may remain on the user’s device until the app is deleted or the data is manually reset through available app features.",
    ],
  },
  {
    id: "app-store-purchases-and-subscriptions",
    title: "13. App Store Purchases and Subscriptions",
    paragraphs: [
      "If LIFESPACE offers paid downloads, in-app purchases, or subscriptions, payment processing is handled by Apple through the App Store.",
      "LIFESPACE does not directly collect or store users’ full payment card information.",
    ],
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "14. Changes to This Privacy Policy",
    paragraphs: [
      "This Privacy Policy may be updated from time to time. Updates will be posted on this page with a revised effective date.",
      "Users are encouraged to review this Privacy Policy periodically.",
    ],
  },
  {
    id: "contact",
    title: "15. Contact",
    paragraphs: [
      "For questions about this Privacy Policy or LIFESPACE privacy practices, contact:",
      "Astrology Today | LIFESPACE",
      "Email: mariosbardella@protonmail.com",
      "Website: https://astrologytoday.ca",
    ],
  },
];

export const metadata: Metadata = {
  title: "LIFESPACE Privacy Policy | Astrology Today",
  description:
    "Read the LIFESPACE app privacy policy covering collected information, storage, sharing, notifications, location use, and wellness-related disclosures.",
};

export default function LifespacePrivacyPolicyPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  return (
    <main className="site-rules-page">
      <div className="site-rules-orbit site-rules-orbit-left" aria-hidden="true" />
      <div className="site-rules-orbit site-rules-orbit-right" aria-hidden="true" />

      <section className="site-rules-shell">
        <header className="site-rules-hero">
          <Link href={withLocale(locale, "/")} className="site-rules-brand" aria-label="Return to Astrology Today home">
            <img
              src="/lifespace-emblem.png"
              alt="LIFESPACE emblem"
              className="site-rules-brand-image"
            />
            <div className="site-rules-brand-copy">
              <span className="site-rules-kicker">LIFESPACE APP</span>
              <h1>LIFESPACE Privacy Policy</h1>
              <p>
                LIFESPACE is a wellness and lifestyle tracking app designed to help users reflect on daily habits
                across nine core areas of life: Light, Inner Work, Fitness, Eating, Sensory Health, Purpose,
                Activity, Community, and Expression.
              </p>
            </div>
          </Link>

          <div className="site-rules-meta">
            <div>
              <span>Effective Date</span>
              <strong>May 11, 2026</strong>
            </div>
            <div>
              <span>Applies To</span>
              <strong>LIFESPACE App</strong>
            </div>
          </div>
        </header>

        <div className="site-rules-layout">
          <aside className="site-rules-sidebar">
            <p className="site-rules-sidebar-label">On this page</p>
            <nav className="site-rules-toc" aria-label="LIFESPACE privacy policy sections">
              <a href="#overview">Overview</a>
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="site-rules-document">
            <div id="overview" className="site-rules-intro">
              <h2 className="site-rules-legal-heading">Overview</h2>
              <p>
                This Privacy Policy explains what information LIFESPACE may collect, how that information may be
                used, and the choices users have regarding their data.
              </p>
            </div>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="site-rules-section">
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="site-rules-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="site-rules-section site-rules-contact">
              <h2>Back to Astrology Today</h2>
              <p>
                You can return to the main site or continue browsing other legal and informational pages from the
                homepage.
              </p>
              <Link href={withLocale(locale, "/")} className="site-rules-home-link">
                ← Back to Astrology Today
              </Link>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
