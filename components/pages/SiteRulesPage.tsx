import type { Metadata } from "next";
import Link from "next/link";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLegalCopy } from "../../lib/copy";

const LEGAL_CANVAS_SCALE = 0.71;
const LEGAL_CANVAS_WIDTH = 1760;
const LEGAL_CANVAS_OFFSET_X = 0;
const LEGAL_CANVAS_OFFSET_Y = 16;

type RuleSection = {
  id: string;
  title: string;
  body: string[];
};

const siteRulesTranslations: Partial<
  Record<
    SupportedLocale,
    {
      intro: string;
      titles: string[];
    }
  >
> = {
  fr: {
    intro:
      "Ces règles décrivent le ton, les limites et les standards qui façonnent Astrology Today. Elles visent à protéger l'expérience des lecteurs, à soutenir l'intégrité éditoriale et à maintenir notre travail astrologique clair, ancré et beau.",
    titles: [
      "1. Objectif d'Astrology Today",
      "2. Utilisation respectueuse et conduite communautaire",
      "3. Standards éditoriaux",
      "4. Limites en matière de bien-être et de conseils",
      "5. Contributions des utilisateurs et contenus partagés",
      "6. Droit d'auteur, crédits et usage loyal",
      "7. Publicité, partenariats et promotions",
      "8. Confidentialité, comptes et sécurité",
      "9. Application et mises à jour",
    ],
  },
  it: {
    intro:
      "Queste regole descrivono il tono, i limiti e gli standard che definiscono Astrology Today. Hanno lo scopo di proteggere l'esperienza del lettore, sostenere l'integrità editoriale e mantenere il nostro lavoro astrologico chiaro, radicato e curato.",
    titles: [
      "1. Scopo di Astrology Today",
      "2. Uso rispettoso e condotta della comunità",
      "3. Standard editoriali",
      "4. Limiti relativi a benessere e consigli",
      "5. Contributi degli utenti e materiali condivisi",
      "6. Copyright, crediti e fair use",
      "7. Pubblicità, partnership e promozioni",
      "8. Privacy, account e sicurezza",
      "9. Applicazione e aggiornamenti",
    ],
  },
  es: {
    intro:
      "Estas reglas describen el tono, los límites y los estándares que dan forma a Astrology Today. Están destinadas a proteger la experiencia del lector, respaldar la integridad editorial y mantener nuestro trabajo astrológico claro, centrado y bello.",
    titles: [
      "1. Propósito de Astrology Today",
      "2. Uso respetuoso y conducta comunitaria",
      "3. Estándares editoriales",
      "4. Límites sobre bienestar y asesoramiento",
      "5. Envíos de usuarios y material compartido",
      "6. Copyright, créditos y uso legítimo",
      "7. Publicidad, alianzas y promociones",
      "8. Privacidad, cuentas y seguridad",
      "9. Aplicación y actualizaciones",
    ],
  },
  hi: {
    intro:
      "ये नियम Astrology Today के स्वर, सीमाओं और मानकों का वर्णन करते हैं। इनका उद्देश्य पाठक अनुभव की रक्षा करना, संपादकीय अखंडता का समर्थन करना और हमारे ज्योतिषीय कार्य को स्पष्ट, स्थिर और सुंदर बनाए रखना है।",
    titles: [
      "1. Astrology Today का उद्देश्य",
      "2. सम्मानजनक उपयोग और सामुदायिक आचरण",
      "3. संपादकीय मानक",
      "4. वेलनेस और सलाह की सीमाएं",
      "5. उपयोगकर्ता प्रस्तुतियाँ और साझा सामग्री",
      "6. कॉपीराइट, श्रेय और उचित उपयोग",
      "7. विज्ञापन, साझेदारियाँ और प्रचार",
      "8. गोपनीयता, खाते और सुरक्षा",
      "9. प्रवर्तन और अद्यतन",
    ],
  },
  ur: {
    intro:
      "یہ قواعد Astrology Today کے لہجے، حدود اور معیار کی وضاحت کرتے ہیں۔ ان کا مقصد قاری کے تجربے کی حفاظت، ادارتی دیانت کی حمایت، اور ہمارے نجومی کام کو واضح، زمین سے جڑا اور خوبصورت رکھنا ہے۔",
    titles: [
      "1. Astrology Today کا مقصد",
      "2. بااحترام استعمال اور کمیونٹی طرزِ عمل",
      "3. اداراتی معیار",
      "4. فلاح و مشورے کی حدود",
      "5. صارف کی جمع کرائی گئی اور مشترکہ مواد",
      "6. کاپی رائٹ، کریڈٹس اور منصفانہ استعمال",
      "7. اشتہارات، شراکت داریاں اور پروموشنز",
      "8. پرائیویسی، اکاؤنٹس اور سیکیورٹی",
      "9. نفاذ اور اپ ڈیٹس",
    ],
  },
  sa: {
    intro:
      "एते नियमाः Astrology Today इत्यस्य स्वरं, मर्यादाः, मानकांश्च वर्णयन्ति। एतेषां उद्देश्यः पाठक-अनुभवस्य रक्षणम्, सम्पादकीय-निष्ठायाः समर्थनम्, ज्योतिषकार्यस्य स्पष्टं, स्थितं, रमणीयं च रक्षणम् अस्ति।",
    titles: [
      "1. Astrology Today इत्यस्य प्रयोजनम्",
      "2. मान्य-उपयोगः समुदायाचारश्च",
      "3. सम्पादकीय-मानकाः",
      "4. स्वास्थ्य-उपदेशयोः सीमाः",
      "5. उपयोक्तृ-प्रस्तुतयः साझीकृत-सामग्री च",
      "6. प्रतिलिप्यधिकारः, श्रेयः, न्याय्य-उपयोगश्च",
      "7. विज्ञापनानि, सहभागिताः, प्रचाराश्च",
      "8. गोपनीयता, खातानि, सुरक्षा च",
      "9. प्रवर्तनम् अद्यतनानि च",
    ],
  },
  pa: {
    intro:
      "ਇਹ ਨਿਯਮ Astrology Today ਦੀ ਟੋਨ, ਹੱਦਾਂ ਅਤੇ ਮਾਪਦੰਡਾਂ ਦਾ ਵਰਣਨ ਕਰਦੇ ਹਨ। ਇਹ ਪਾਠਕ ਅਨੁਭਵ ਦੀ ਰੱਖਿਆ ਕਰਨ, ਸੰਪਾਦਕੀ ਇਮਾਨਦਾਰੀ ਦਾ ਸਮਰਥਨ ਕਰਨ ਅਤੇ ਸਾਡੇ ਜੋਤਿਸ਼ੀ ਕੰਮ ਨੂੰ ਸਪਸ਼ਟ, ਸੰਤੁਲਿਤ ਅਤੇ ਸੁੰਦਰ ਰੱਖਣ ਲਈ ਬਣਾਏ ਗਏ ਹਨ।",
    titles: [
      "1. Astrology Today ਦਾ ਉਦੇਸ਼",
      "2. ਆਦਰਭਰਿਆ ਵਰਤਾਉ ਅਤੇ ਕਮਿਊਨਟੀ ਆਚਰਨ",
      "3. ਸੰਪਾਦਕੀ ਮਾਪਦੰਡ",
      "4. ਵੈੱਲਨੈੱਸ ਅਤੇ ਸਲਾਹ ਦੀਆਂ ਸੀਮਾਵਾਂ",
      "5. ਯੂਜ਼ਰ ਸਬਮਿਸ਼ਨ ਅਤੇ ਸਾਂਝੀ ਸਮੱਗਰੀ",
      "6. ਕਾਪੀਰਾਈਟ, ਕਰੈਡਿਟ ਅਤੇ ਨਿਆਂਯੋਗ ਵਰਤੋਂ",
      "7. ਵਿਗਿਆਪਨ, ਭਾਗੀਦਾਰੀਆਂ ਅਤੇ ਪ੍ਰਮੋਸ਼ਨ",
      "8. ਗੋਪਨੀਯਤਾ, ਖਾਤੇ ਅਤੇ ਸੁਰੱਖਿਆ",
      "9. ਲਾਗੂਕਰਨ ਅਤੇ ਅੱਪਡੇਟ",
    ],
  },
  zh: {
    intro:
      "这些规则描述了塑造 Astrology Today 的语气、边界和标准。它们旨在保护读者体验、支持编辑完整性，并让我们的占星工作保持清晰、 grounded 且具有美感。",
    titles: [
      "1. Astrology Today 的宗旨",
      "2. 尊重性的使用与社区行为",
      "3. 编辑标准",
      "4. 健康与建议边界",
      "5. 用户投稿与共享材料",
      "6. 版权、署名与合理使用",
      "7. 广告、合作与推广",
      "8. 隐私、账户与安全",
      "9. 执行与更新",
    ],
  },
  ja: {
    intro:
      "これらのルールは、Astrology Today を形づくるトーン、境界、基準を示しています。読者体験を守り、編集上の誠実さを支え、私たちの占星術の仕事を明快で地に足のついた美しいものに保つためのものです。",
    titles: [
      "1. Astrology Today の目的",
      "2. 敬意ある利用とコミュニティ行動",
      "3. 編集基準",
      "4. ウェルネスと助言の境界",
      "5. ユーザー投稿と共有資料",
      "6. 著作権、クレジット、公正利用",
      "7. 広告、提携、プロモーション",
      "8. プライバシー、アカウント、セキュリティ",
      "9. 執行と更新",
    ],
  },
  yue: {
    intro:
      "呢套規則講清楚 Astrology Today 嘅語氣、界線同標準。目的係保障讀者體驗、維護編輯完整性，同令我哋嘅占星內容保持清晰、踏實同有美感。",
    titles: [
      "1. Astrology Today 嘅宗旨",
      "2. 尊重式使用同社群行為",
      "3. 編輯標準",
      "4. 身心健康同建議界線",
      "5. 用戶投稿同共享內容",
      "6. 版權、署名同合理使用",
      "7. 廣告、合作同推廣",
      "8. 私隱、帳戶同安全",
      "9. 執行同更新",
    ],
  },
  ko: {
    intro:
      "이 규칙은 Astrology Today를 형성하는 어조, 경계, 기준을 설명합니다. 독자 경험을 보호하고 편집적 진정성을 지키며 우리의 점성술 작업을 명확하고 단단하며 아름답게 유지하기 위한 것입니다.",
    titles: [
      "1. Astrology Today의 목적",
      "2. 존중하는 사용과 커뮤니티 행동",
      "3. 편집 기준",
      "4. 웰니스와 조언의 경계",
      "5. 사용자 제출물과 공유 자료",
      "6. 저작권, 크레딧, 공정 이용",
      "7. 광고, 파트너십, 프로모션",
      "8. 개인정보, 계정 및 보안",
      "9. 집행 및 업데이트",
    ],
  },
};

const sections: RuleSection[] = [
  {
    id: "purpose",
    title: "1. Purpose Of Astrology Today",
    body: [
      "Astrology Today is a publication and discovery platform for astrology, symbolism, cycles, and thoughtful self-reflection. We publish forecasts, articles, visual features, and educational content designed to help readers explore astrological ideas with curiosity, imagination, and care.",
      "The site exists to make astrology feel beautiful, accessible, and well-considered. Everything on the platform should support that goal: clarity over confusion, reflection over fear, and thoughtful interpretation over sensationalism.",
    ],
  },
  {
    id: "community",
    title: "2. Respectful Use And Community Conduct",
    body: [
      "Visitors, subscribers, collaborators, and community members must use the site in a respectful way. Harassment, hate speech, intimidation, impersonation, spam, fraudulent activity, or attempts to disrupt the experience for others are not permitted.",
      "If Astrology Today introduces public comments, submissions, profiles, or interactive tools, we may moderate, limit, or remove content that undermines a welcoming environment or conflicts with the spirit of the platform.",
    ],
  },
  {
    id: "editorial",
    title: "3. Editorial Standards",
    body: [
      "We aim to present astrology as a reflective practice, creative language, and interpretive framework. Our articles and forecasts should be written in good faith, avoid manipulative claims, and clearly distinguish between symbolic interpretation, opinion, and factual information.",
      "Astrology Today may revise, update, or remove material at any time to improve clarity, accuracy, tone, or alignment with the brand. Featured writers and contributors are expected to follow the same standard.",
    ],
  },
  {
    id: "wellness",
    title: "4. Wellness And Advice Boundaries",
    body: [
      "Astrology Today does not provide medical, legal, mental health, tax, or financial advice. Our content is intended for educational, editorial, and inspirational purposes only.",
      "Readers should use independent judgment and seek qualified professionals when making serious personal, health, legal, or financial decisions. Content that encourages dependency, fear, or absolute certainty about life outcomes is outside the spirit of this site.",
    ],
  },
  {
    id: "submissions",
    title: "5. User Submissions And Shared Material",
    body: [
      "If you submit text, artwork, testimonials, charts, or other materials to Astrology Today, you confirm that you have the right to share them and that doing so does not violate another person's rights, privacy, or intellectual property.",
      "By submitting material for publication or feature consideration, you allow Astrology Today to review, edit, format, and publish that material in connection with the site, newsletter, and related promotional channels unless a different written agreement applies.",
    ],
  },
  {
    id: "copyright",
    title: "6. Copyright, Credits, And Fair Use",
    body: [
      "Astrology Today branding, design elements, original writing, visuals, and compiled site content are protected by applicable intellectual property laws. You may not copy, republish, scrape, sell, or redistribute substantial portions of the site without permission.",
      "Short quotations with clear credit may be acceptable where lawful and fair. If you believe material on the site infringes your rights, you may contact us with enough detail for us to investigate and respond appropriately.",
    ],
  },
  {
    id: "commercial",
    title: "7. Advertising, Partnerships, And Promotions",
    body: [
      "Sponsored content, paid placements, affiliate relationships, and partnerships must fit the tone and values of Astrology Today. We reserve the right to refuse promotions that feel misleading, low-integrity, exploitative, or out of alignment with the reader experience.",
      "Commercial partners may not imply endorsement beyond what is explicitly stated. Any promotional material should be clearly identified and presented in a way that respects reader trust.",
    ],
  },
  {
    id: "privacy",
    title: "8. Privacy, Accounts, And Security",
    body: [
      "Where accounts, forms, or newsletter signups are offered, users are expected to provide accurate information and keep their access details secure. Attempts to gain unauthorized access, probe vulnerabilities, or misuse collected data are strictly prohibited.",
      "Astrology Today may store and process limited information needed to operate the site, communicate with subscribers, and improve the experience. Separate privacy terms may provide additional detail as those systems expand.",
    ],
  },
  {
    id: "enforcement",
    title: "9. Enforcement And Updates",
    body: [
      "We may suspend access, remove content, restrict features, or take other reasonable action when these rules are violated or when necessary to protect the site, our readers, or our collaborators.",
      "These Site Rules may change over time as Astrology Today evolves. Continued use of the site after updates means you accept the current version posted here.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Site Rules | Astrology Today",
  description: "Astrology Today's site rules, editorial boundaries, and community standards.",
};

export default function SiteRulesPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getLegalCopy("siteRules", locale);
  const localizedRules = siteRulesTranslations[locale];
  const renderedSections = localizedRules
    ? sections.map((section, index) => ({
        ...section,
        title: localizedRules.titles[index] ?? section.title,
      }))
    : sections;
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
            <nav className="site-rules-toc" aria-label="Site rules sections">
              {renderedSections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="site-rules-document">
            <div className="site-rules-intro">
              <p>{localizedRules?.intro ?? "These rules describe the tone, boundaries, and standards that shape Astrology Today. They are intended to protect the reader experience, support editorial integrity, and keep our astrology work clear, grounded, and beautiful."}</p>
            </div>

            {renderedSections.map((section) => (
              <section key={section.id} id={section.id} className="site-rules-section">
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section id="contact" className="site-rules-section site-rules-contact">
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
