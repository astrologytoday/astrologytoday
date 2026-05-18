import type { Metadata } from "next";
import Link from "next/link";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLegalCopy } from "../../lib/copy";

type PolicySection = {
  id: string;
  title: string;
  body: string[];
};

const privacyTranslations: Partial<
  Record<
    SupportedLocale,
    {
      summaryHeading: string;
      summaryPoints: string[];
      titles: string[];
    }
  >
> = {
  fr: {
    summaryHeading: "Résumé",
    summaryPoints: [
      "Nous pouvons utiliser vos données personnelles pour vous fournir des services, notamment l'inscription au compte, les abonnements, les paiements, l'assistance et les communications de service.",
      "Nous pouvons utiliser les données personnelles pour améliorer Astrology Today et LIFESPACE, administrer l'analyse et le développement produit, et fournir du marketing lorsque la loi le permet.",
      "Nous pouvons partager vos données personnelles dans les circonstances décrites dans cette politique, notamment avec des sous-traitants, fournisseurs, prestataires, autorités légales et contreparties transactionnelles si nécessaire.",
      "Nous utilisons des mesures techniques, organisationnelles, physiques et administratives raisonnables pour protéger les données personnelles.",
    ],
    titles: [
      "Nos pratiques de confidentialité",
      "Principes de traitement",
      "Protection de vos données personnelles",
      "Vos contrôles de confidentialité",
      "Informations collectées automatiquement",
      "Données personnelles que vous nous fournissez",
      "Nos finalités d'utilisation de vos données",
      "Abonnements, paiements et assistance",
      "Marketing, analyses et amélioration du produit",
      "Forums, salons de discussion et espaces publics",
      "Partage et transfert de vos données personnelles",
      "Liens vers d'autres sites web",
      "Vos droits en matière de protection des données",
      "Enfants",
      "Modifications de cette politique de confidentialité",
    ],
  },
  it: {
    summaryHeading: "Sintesi",
    summaryPoints: [
      "Possiamo usare i tuoi dati personali per fornirti servizi, inclusi registrazione account, abbonamenti, pagamenti, supporto e comunicazioni di servizio.",
      "Possiamo usare i dati personali per migliorare Astrology Today e LIFESPACE, gestire analisi e sviluppo prodotto e inviare marketing dove consentito dalla legge.",
      "Possiamo condividere i tuoi dati personali nelle circostanze descritte in questa informativa, inclusi responsabili del trattamento, fornitori, prestatori di servizi, autorità legali e controparti di transazione quando necessario.",
      "Adottiamo misure tecniche, organizzative, fisiche e amministrative ragionevoli per proteggere i dati personali.",
    ],
    titles: [
      "Le nostre pratiche sulla privacy",
      "Principi di trattamento",
      "Protezione dei tuoi dati personali",
      "I tuoi controlli sulla privacy",
      "Informazioni raccolte automaticamente",
      "Dati personali che ci fornisci",
      "Le nostre finalità nell'uso dei tuoi dati personali",
      "Abbonamenti, pagamenti e supporto",
      "Marketing, analisi e miglioramento del prodotto",
      "Bacheche, chat e aree pubbliche",
      "Condivisione e trasferimento dei tuoi dati personali",
      "Link ad altri siti web",
      "I tuoi diritti in materia di protezione dei dati",
      "Minori",
      "Modifiche a questa informativa sulla privacy",
    ],
  },
  es: {
    summaryHeading: "Resumen",
    summaryPoints: [
      "Podemos usar sus datos personales para prestarle servicios, incluidos registro de cuenta, suscripciones, pagos, soporte y comunicaciones del servicio.",
      "Podemos usar datos personales para mejorar Astrology Today y LIFESPACE, administrar análisis y desarrollo de producto, y ofrecer marketing cuando la ley lo permita.",
      "Podemos compartir sus datos personales en las circunstancias descritas en esta política, incluso con procesadores, proveedores, prestadores de servicios, autoridades legales y contrapartes transaccionales cuando sea necesario.",
      "Utilizamos medidas técnicas, organizativas, físicas y administrativas razonables para proteger los datos personales.",
    ],
    titles: [
      "Nuestras prácticas de privacidad",
      "Principios de tratamiento",
      "Protección de sus datos personales",
      "Sus controles de privacidad",
      "Información que recopilamos automáticamente",
      "Datos personales que usted nos proporciona",
      "Nuestro propósito al usar sus datos personales",
      "Suscripciones, pagos y soporte",
      "Marketing, analítica y mejora del producto",
      "Foros, chats y áreas públicas",
      "Intercambio y transferencia de sus datos personales",
      "Enlaces a otros sitios web",
      "Sus derechos de protección de datos",
      "Niños",
      "Cambios en esta política de privacidad",
    ],
  },
  zh: {
    summaryHeading: "摘要",
    summaryPoints: [
      "我们可能会使用您的个人数据向您提供服务，包括账户注册、订阅、付款、支持以及服务通信。",
      "我们可能会使用个人数据改进 Astrology Today 和 LIFESPACE，管理分析与产品开发，并在法律允许的情况下进行营销。",
      "在本政策所述情况下，我们可能会共享您的个人数据，包括与处理方、供应商、服务提供商、法律机关及必要的交易对手共享。",
      "我们采取合理的技术、组织、物理和管理措施来保护个人数据。",
    ],
    titles: [
      "我们的隐私实践",
      "处理原则",
      "保护您的个人数据",
      "您的隐私控制",
      "我们自动收集的信息",
      "您向我们提供的个人数据",
      "我们使用您个人数据的目的",
      "订阅、付款与支持",
      "营销、分析与产品改进",
      "留言板、聊天室与公共区域",
      "您的个人数据共享与转移",
      "其他网站链接",
      "您的数据保护权利",
      "儿童",
      "本隐私政策的变更",
    ],
  },
  ja: {
    summaryHeading: "概要",
    summaryPoints: [
      "当社は、アカウント登録、サブスクリプション、支払い、サポート、サービス連絡などの提供のために個人データを利用することがあります。",
      "個人データは、Astrology Today と LIFESPACE の改善、分析や製品開発の管理、法令で認められる範囲でのマーケティングにも利用されることがあります。",
      "本ポリシーに記載された状況において、処理業者、ベンダー、サービス提供者、法執行機関、必要な取引相手と個人データを共有する場合があります。",
      "当社は個人データ保護のため、合理的な技術的、組織的、物理的、管理的措置を講じています。",
    ],
    titles: [
      "当社のプライバシー慣行",
      "処理の原則",
      "個人データの保護",
      "お客様のプライバシー管理",
      "自動的に収集される情報",
      "お客様が提供する個人データ",
      "個人データを利用する目的",
      "サブスクリプション、支払い、サポート",
      "マーケティング、分析、製品改善",
      "掲示板、チャットルーム、公開エリア",
      "個人データの共有と移転",
      "他のウェブサイトへのリンク",
      "お客様のデータ保護の権利",
      "子ども",
      "本プライバシーポリシーの変更",
    ],
  },
};

const summaryPoints = [
  "We may use your Personal Data to provide services to you, including account registration, subscriptions, payments, support, and service communications.",
  "We may use Personal Data to improve Astrology Today and LIFESPACE, to administer analytics and product development, and to deliver marketing where permitted by law.",
  "We may share your Personal Data in the circumstances described in this Policy, including with processors, vendors, service providers, legal authorities, and transaction counterparties where necessary.",
  "We use reasonable technical, organizational, physical, and administrative measures to protect Personal Data.",
];

const sections: PolicySection[] = [
  {
    id: "practices",
    title: "Our Privacy Practices",
    body: [
      "We respect your privacy and are committed to protecting your Personal Data in compliance with applicable legislation. This commitment is consistent with our desire to keep you informed, recognize your privacy rights, and explain how information is collected, used, shared, stored, and protected across Creation Health services.",
      "For the purposes of this Policy, Creation Health, including Astrology Today and LIFESPACE where applicable, acts as the controller of the Personal Data collected through the Service and is responsible for ensuring that such processing complies with applicable data protection law.",
    ],
  },
  {
    id: "principles",
    title: "Principles Of Processing",
    body: [
      "We process Personal Data in accordance with principles of fairness, lawfulness, purpose limitation, data minimization, accuracy, and security. We seek to process Personal Data only for specified and legitimate purposes and only to the extent relevant and necessary for those purposes.",
      "We also take reasonable steps to keep Personal Data accurate, complete, and up to date, but you remain responsible for informing us of changes to information you have provided to us.",
    ],
  },
  {
    id: "security",
    title: "Safeguarding Your Personal Data",
    body: [
      "To safeguard against unauthorized access to Personal Data, electronic Personal Data may be maintained on systems protected by secure network architectures, access controls, firewalls, backups, and related security measures designed to reduce the consequences of accidental loss, destruction, or corruption.",
      "We also employ reasonable physical and administrative safeguards to protect Personal Data. While we use commercially reasonable efforts, no security system is perfect, and we cannot and do not guarantee absolute security or assume liability for disclosure due to transmission errors, unauthorized third-party access, or acts beyond our reasonable control.",
    ],
  },
  {
    id: "controls",
    title: "Your Privacy Controls",
    body: [
      "Where account, profile, notification, or subscriber settings are available, you may be able to access, download, review, update, correct, or modify certain Personal Data and related preferences directly through your settings.",
      "You may also be able to control certain processing activities, such as marketing communications, cookie-related choices, or notification preferences, through the settings and controls made available by the Service or by contacting us using the methods listed below.",
    ],
  },
  {
    id: "automatic",
    title: "Information We Gather Automatically",
    body: [
      "When you visit our Service, certain non-personally identifying and technical information may be recorded automatically by the standard operation of internet technologies. This may include browser type, operating system, device type, IP address, language, referral information, usage events, and other technical identifiers needed to facilitate our operations and maintain an efficient experience.",
      "Some of this information may be collected using cookies and similar tracking technology. We may use or share such automatically recorded information for security purposes, analytics, product improvement, general aggregate statistics, emergency response where appropriate, or as otherwise required by law.",
    ],
  },
  {
    id: "provided",
    title: "Personal Data You Provide To Us",
    body: [
      "We may request personally identifying information from you in a variety of contexts, including when you complete a registration form, subscribe to a newsletter, create an account, purchase products or services, contact support, respond to a survey, submit content, or otherwise interact with Astrology Today, LIFESPACE, or related Creation Health services.",
      "Depending on the feature involved, such Personal Data may include your name, username, email address, payment-related information, billing details, account preferences, support messages, submitted content, survey responses, or other information you choose to provide.",
    ],
  },
  {
    id: "purposes",
    title: "Our Purpose For Using Your Personal Data",
    body: [
      "We may process your Personal Data to complete account registration, provide access to our services, process payments, fulfill orders, manage subscriptions, provide customer support, respond to queries, send newsletters or promotional communications, improve our products and services, administer surveys, contests, or special offers, and comply with legal obligations.",
      "Depending on the activity, our legal grounds for processing may include contractual necessity, legitimate interests, consent, or legal obligation. Where we no longer have an ongoing legitimate business need or legal obligation to retain Personal Data, we will delete, anonymize, or securely isolate it as appropriate.",
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions, Payments, And Support",
    body: [
      "If you subscribe on a paid basis or purchase any paid product or service through Astrology Today, LIFESPACE, or related Creation Health offerings, we may use your Personal Data to manage your subscription, process payments, administer billing, fulfill purchases, provide receipts, and support customer service needs.",
      "Payment information may be processed by us and by third-party payment processors, billing providers, app platform operators, or transaction partners involved in completing the transaction. We do not use payment data for unrelated promotional purposes and share it only as necessary to operate and support the transaction.",
    ],
  },
  {
    id: "marketing",
    title: "Marketing, Analytics, And Product Improvement",
    body: [
      "We may use Personal Data and other non-personally identifying information to update you about products, services, subscriptions, features, newsletters, and offers that may be of interest to you, subject to applicable law and any consent requirements. You always have the option to opt out of non-essential marketing communications.",
      "We may also collect, store, and analyze usage, product, and technical event data to improve service quality, understand user interests, maintain performance, generate usage statistics, personalize user experience, and develop new products and services.",
    ],
  },
  {
    id: "community",
    title: "Message Boards, Chat Rooms, And Public Areas",
    body: [
      "If the Service includes message boards, chat rooms, comments, public profiles, or other community features, you are solely responsible for the content you voluntarily disclose in those areas. Information disclosed publicly may be read, collected, and used by other users and may result in unsolicited communications.",
      "We reserve the right to moderate public areas and to restrict or terminate access where necessary to enforce our rules, protect users, or protect the Service and its rights.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing And Transfer Of Your Personal Data",
    body: [
      "We may disclose Personal Data to affiliates, vendors, service providers, cloud and infrastructure partners, billing and payment partners, analytics providers, support vendors, auditors, legal advisers, and other processors who assist us in operating Astrology Today, LIFESPACE, and related Creation Health services.",
      "We may also disclose Personal Data to competent law enforcement bodies, regulators, courts, transaction counterparties in connection with a merger or business transfer, or other third parties where disclosure is required by law or reasonably necessary to establish, exercise, or defend legal rights.",
    ],
  },
  {
    id: "links",
    title: "Links To Other Websites",
    body: [
      "The Service may contain links to websites or services operated by companies or persons outside Creation Health. You should not assume that the privacy policies or practices of such third-party websites are the same as those followed by us.",
      "Visitors to any such third-party websites should refer to their respective privacy policies and practices. We do not endorse and are not responsible for the content, security, or privacy practices of third-party websites not under our control.",
    ],
  },
  {
    id: "rights",
    title: "Your Data Protection Rights",
    body: [
      "Subject to applicable law, you may have the right to access, correct, update, delete, restrict, object to, or request portability of your Personal Data, and to withdraw consent where processing is based on consent.",
      "You may also have the right to opt out of marketing communications and, where applicable, to complain to a supervisory or regulatory authority if you believe your Personal Data has been processed unlawfully.",
    ],
  },
  {
    id: "children",
    title: "Children",
    body: [
      "Children under 13 are not allowed to use our Service unless applicable law expressly permits otherwise. If you are based in a jurisdiction with a higher age threshold for valid consent to data processing, you may use the Service only if you are over that age or if valid parental consent has been provided where permitted by law.",
      "If you are a parent or guardian and believe that a child has provided Personal Data to us in violation of this Policy, please contact us so that we can investigate and take appropriate steps.",
    ],
  },
  {
    id: "changes",
    title: "Changes In This Privacy Policy",
    body: [
      "We reserve the right to modify or amend this Privacy Policy at any time by posting the revised version on our website or apps. If there are changes or additions to this Policy, we may post those changes on the site or in another reasonable format for review.",
      "Each version of this Policy will be identified by its effective date. Your continued use of the Service after the effective date of any modification to this Privacy Policy will be deemed your agreement to the changed terms to the extent permitted by law.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | Astrology Today",
  description: "Creation Health privacy policy for Astrology Today, LIFESPACE, subscriptions, payments, and related services.",
};

export default function PrivacyPolicyPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getLegalCopy("privacy", locale);
  const localized = privacyTranslations[locale];
  const renderedSections = localized
    ? sections.map((section, index) => ({
        ...section,
        title: localized.titles[index] ?? section.title,
      }))
    : sections;
  const renderedSummaryPoints = localized?.summaryPoints ?? summaryPoints;
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
            <nav className="site-rules-toc" aria-label="Privacy policy sections">
              <a href="#summary">{localized?.summaryHeading ?? "Summary"}</a>
              {renderedSections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="site-rules-document">
            <div className="site-rules-intro">
              <h2 className="site-rules-legal-heading">{copy.introHeading}</h2>
              {copy.introParagraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <section id="summary" className="site-rules-section">
              <h2>{localized?.summaryHeading ?? "Summary"}</h2>
              <ul className="site-rules-list">
                {renderedSummaryPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>

            {renderedSections.map((section) => (
              <section key={section.id} id={section.id} className="site-rules-section">
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="site-rules-section site-rules-contact">
              <h2>{copy.contactHeading}</h2>
              <p>{copy.contactBody}</p>
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
