import type { Metadata } from "next";
import Link from "next/link";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLegalCopy } from "../../lib/copy";

const accessibilityTranslations: Partial<
  Record<
    SupportedLocale,
    {
      toc: string[];
      statusHeading: string;
      statusBody: string[];
      contentHeading: string;
      contentLead: string;
      preparationHeading: string;
      preparationBody: string[];
      feedbackHeading: string;
      feedbackBody: string[];
      feedbackResponse: string;
      enforcementHeading: string;
      enforcementBody: string;
    }
  >
> = {
  fr: {
    toc: ["Déclaration d'accessibilité", "État de conformité", "Contenu non accessible", "Préparation de cette déclaration", "Commentaires et coordonnées", "Procédure d'application"],
    statusHeading: "État de conformité",
    statusBody: [
      "Ce site est partiellement conforme à la norme d'accessibilité EN 301 549, qui intègre les WCAG 2.1 niveau AA.",
      "La non-conformité signifie que certaines parties du contenu peuvent ne pas répondre pleinement aux exigences d'accessibilité.",
    ],
    contentHeading: "Contenu non accessible",
    contentLead: "Le contenu ci-dessous n'est pas accessible pour les raisons suivantes.",
    preparationHeading: "Préparation de cette déclaration",
    preparationBody: [
      "Cette déclaration a été préparée le 11 avril 2026. La méthode utilisée repose sur une auto-évaluation fondée sur les critères WCAG 2.1 AA.",
      "Date de dernière révision: 20 avril 2026.",
    ],
    feedbackHeading: "Commentaires et coordonnées",
    feedbackBody: ["Nous accueillons vos commentaires sur l'accessibilité d'Astrology Today.", "Si vous rencontrez des obstacles d'accessibilité, veuillez nous le signaler:"],
    feedbackResponse: "Nous visons à répondre aux retours sur l'accessibilité sous 5 à 10 jours ouvrables.",
    enforcementHeading: "Procédure d'application",
    enforcementBody: "Si vous n'êtes pas satisfait de notre réponse, vous pouvez contacter l'organisme national compétent:",
  },
  es: {
    toc: ["Declaración de accesibilidad", "Estado de cumplimiento", "Contenido no accesible", "Preparación de esta declaración", "Comentarios e información de contacto", "Procedimiento de cumplimiento"],
    statusHeading: "Estado de cumplimiento",
    statusBody: [
      "Este sitio web es parcialmente conforme con la norma EN 301 549, que incorpora las WCAG 2.1 nivel AA.",
      "La falta de cumplimiento significa que algunas partes del contenido pueden no cumplir plenamente los requisitos de accesibilidad.",
    ],
    contentHeading: "Contenido no accesible",
    contentLead: "El contenido que figura a continuación no es accesible por las siguientes razones.",
    preparationHeading: "Preparación de esta declaración",
    preparationBody: [
      "Esta declaración fue preparada el 11 de abril de 2026. El método utilizado fue una autoevaluación basada en los criterios WCAG 2.1 AA.",
      "Fecha de última revisión: 20 de abril de 2026.",
    ],
    feedbackHeading: "Comentarios e información de contacto",
    feedbackBody: ["Agradecemos sus comentarios sobre la accesibilidad de Astrology Today.", "Si encuentra barreras de accesibilidad, por favor infórmenos:"],
    feedbackResponse: "Nuestro objetivo es responder a los comentarios sobre accesibilidad en un plazo de 5 a 10 días hábiles.",
    enforcementHeading: "Procedimiento de cumplimiento",
    enforcementBody: "Si no está satisfecho con nuestra respuesta, puede contactar al organismo nacional competente:",
  },
  zh: {
    toc: ["无障碍声明", "合规状态", "不可访问内容", "本声明的编制", "反馈与联系方式", "执行程序"],
    statusHeading: "合规状态",
    statusBody: [
      "本网站部分符合 EN 301 549 无障碍标准，该标准纳入了 WCAG 2.1 AA 级要求。",
      "部分不合规意味着某些内容可能尚未完全满足无障碍要求。",
    ],
    contentHeading: "不可访问内容",
    contentLead: "以下内容因下列原因而不可访问。",
    preparationHeading: "本声明的编制",
    preparationBody: [
      "本声明编制于 2026年4月11日。采用的方法为基于 WCAG 2.1 AA 成功标准的自我评估。",
      "最后审查日期：2026年4月20日。",
    ],
    feedbackHeading: "反馈与联系方式",
    feedbackBody: ["欢迎您就 Astrology Today 的无障碍体验向我们提供反馈。", "如果您遇到任何无障碍障碍，请告知我们："],
    feedbackResponse: "我们目标是在 5 到 10 个工作日内回复无障碍反馈。",
    enforcementHeading: "执行程序",
    enforcementBody: "如果您对我们的回复不满意，可以联系相应的国家执行机构：",
  },
  ja: {
    toc: ["アクセシビリティ声明", "準拠状況", "アクセスできないコンテンツ", "本声明の作成", "フィードバックと連絡先", "執行手続き"],
    statusHeading: "準拠状況",
    statusBody: [
      "本ウェブサイトは EN 301 549 アクセシビリティ基準に部分的に準拠しており、WCAG 2.1 レベル AA を含みます。",
      "非準拠とは、一部のコンテンツがアクセシビリティ要件を完全には満たしていない可能性があることを意味します。",
    ],
    contentHeading: "アクセスできないコンテンツ",
    contentLead: "以下のコンテンツは次の理由によりアクセシブルではありません。",
    preparationHeading: "本声明の作成",
    preparationBody: [
      "本声明は 2026年4月11日に作成されました。作成方法は WCAG 2.1 AA 達成基準に基づく自己評価です。",
      "最終確認日: 2026年4月20日。",
    ],
    feedbackHeading: "フィードバックと連絡先",
    feedbackBody: ["Astrology Today のアクセシビリティに関するご意見を歓迎します。", "アクセシビリティ上の障壁に遭遇した場合はお知らせください。"],
    feedbackResponse: "アクセシビリティに関するご意見には 5〜10 営業日以内の対応を目指します。",
    enforcementHeading: "執行手続き",
    enforcementBody: "当社の対応にご満足いただけない場合は、担当の国家執行機関に連絡できます:",
  },
};

const nonAccessibleItems = [
  "Elements must meet minimum color contrast ratio AA - Issue will be fixed by Q1 2026.",
  "All page content should be contained by landmarks - Issue will be fixed by Q1 2026.",
  "Links must have discernible text - Issue will be fixed by Q1 2026.",
  "<li> elements must be contained in a <ul> or <ol> - Issue will be fixed by Q1 2026.",
  "ARIA dialog and alert dialog nodes should have an accessible name - Issue will be fixed by Q1 2026.",
  "All page content should be contained by landmarks - Issue will be fixed by Q1 2026.",
];

export const metadata: Metadata = {
  title: "Accessibility Statement | Astrology Today",
  description: "Creation Health accessibility statement for Astrology Today and related digital services.",
};

export default function AccessibilityStatementPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getLegalCopy("accessibility", locale);
  const localized = accessibilityTranslations[locale];
  return (
    <main className="site-rules-page">
      <div className="site-rules-orbit site-rules-orbit-left" aria-hidden="true" />
      <div className="site-rules-orbit site-rules-orbit-right" aria-hidden="true" />

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
              <a href="#commitment">{localized?.toc[0] ?? "Accessibility Statement"}</a>
              <a href="#status">{localized?.toc[1] ?? "Compliance Status"}</a>
              <a href="#non-accessible">{localized?.toc[2] ?? "Non-accessible Content"}</a>
              <a href="#preparation">{localized?.toc[3] ?? "Preparation Of This Statement"}</a>
              <a href="#feedback">{localized?.toc[4] ?? "Feedback And Contact Information"}</a>
              <a href="#enforcement">{localized?.toc[5] ?? "Enforcement Procedure"}</a>
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
              <h2>{localized?.statusHeading ?? "Compliance Status"}</h2>
              <p>{localized?.statusBody[0] ?? "This website is partially compliant with the EN 301 549 accessibility standard, which incorporates the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA."}</p>
              <p>{localized?.statusBody[1] ?? "Non-compliance means that some parts of the content may not fully meet accessibility requirements."}</p>
            </section>

            <section id="non-accessible" className="site-rules-section">
              <h2>{localized?.contentHeading ?? "Non-accessible Content"}</h2>
              <p>{localized?.contentLead ?? "The content listed below is non-accessible for the following reasons."}</p>
              <ul className="site-rules-list">
                {nonAccessibleItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="preparation" className="site-rules-section">
              <h2>{localized?.preparationHeading ?? "Preparation Of This Accessibility Statement"}</h2>
              <p>{localized?.preparationBody[0] ?? "This statement was prepared on April 11, 2026. The method used to prepare the statement: self-assessment based on the WCAG 2.1 AA success criteria."}</p>
              <p>{localized?.preparationBody[1] ?? "Last review date: April 20, 2026."}</p>
            </section>

            <section id="feedback" className="site-rules-section">
              <h2>{localized?.feedbackHeading ?? "Feedback And Contact Information"}</h2>
              <p>{localized?.feedbackBody[0] ?? "We welcome your feedback on the accessibility of Astrology Today."}</p>
              <p>{localized?.feedbackBody[1] ?? "If you encounter any accessibility barriers, please let us know:"}</p>
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
              <p>{localized?.feedbackResponse ?? "We aim to respond to accessibility feedback within 5-10 business days."}</p>
            </section>

            <section id="enforcement" className="site-rules-section site-rules-contact">
              <h2>{localized?.enforcementHeading ?? "Enforcement Procedure"}</h2>
              <p>{localized?.enforcementBody ?? "If you are not satisfied with our response to your feedback, you can contact the responsible national enforcement body:"}</p>
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
    </main>
  );
}
