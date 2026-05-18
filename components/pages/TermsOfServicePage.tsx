import type { Metadata } from "next";
import Link from "next/link";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLegalCopy } from "../../lib/copy";

type TermsSection = {
  id: string;
  title: string;
  body: string[];
};

const termsTranslations: Partial<
  Record<
    SupportedLocale,
    {
      titles: string[];
    }
  >
> = {
  fr: {
    titles: [
      "1. Accès au service",
      "2. Vos obligations d'inscription",
      "3. Frais de service",
      "4. Résiliation / annulation / remboursements",
      "5. Restrictions d'utilisation",
      "6. Droits de propriété intellectuelle",
      "7. Contenu généré par l'utilisateur",
      "8. Exclusion de garanties",
      "9. Limitation de responsabilité",
      "10. Indemnisation",
      "11. Droit applicable et juridiction",
      "12. Contenu choquant",
      "13. Liens vers d'autres sites",
      "14. Politique de confidentialité de Creation Health",
      "15. Assistance clientèle",
      "16. Autres dispositions importantes",
      "17. Modifications",
    ],
  },
  it: {
    titles: [
      "1. Accesso al servizio",
      "2. Obblighi di registrazione",
      "3. Tariffe del servizio",
      "4. Risoluzione / cancellazione / rimborsi",
      "5. Restrizioni per l'utente",
      "6. Diritti di proprietà intellettuale",
      "7. Contenuti generati dagli utenti",
      "8. Esclusione di garanzie",
      "9. Limitazione di responsabilità",
      "10. Manleva",
      "11. Legge applicabile e giurisdizione",
      "12. Materiale offensivo",
      "13. Link ad altri siti",
      "14. Informativa sulla privacy di Creation Health",
      "15. Assistenza clienti",
      "16. Altre disposizioni importanti",
      "17. Modifiche",
    ],
  },
  es: {
    titles: [
      "1. Acceso al servicio",
      "2. Obligaciones de registro",
      "3. Tarifas del servicio",
      "4. Terminación / cancelación / reembolsos",
      "5. Restricciones del usuario",
      "6. Derechos de propiedad intelectual",
      "7. Contenido generado por el usuario",
      "8. Exclusión de garantías",
      "9. Limitación de responsabilidad",
      "10. Indemnización",
      "11. Ley aplicable y jurisdicción",
      "12. Material objetable",
      "13. Enlaces a otros sitios",
      "14. Política de privacidad de Creation Health",
      "15. Atención al cliente",
      "16. Otras disposiciones importantes",
      "17. Cambios o modificaciones",
    ],
  },
  hi: {
    titles: [
      "1. सेवा तक पहुँच",
      "2. पंजीकरण संबंधी दायित्व",
      "3. सेवा शुल्क",
      "4. समाप्ति / रद्दीकरण / धनवापसी",
      "5. उपयोगकर्ता प्रतिबंध",
      "6. बौद्धिक संपदा अधिकार",
      "7. उपयोगकर्ता-निर्मित सामग्री",
      "8. वारंटी का अस्वीकरण",
      "9. दायित्व की सीमा",
      "10. क्षतिपूर्ति",
      "11. लागू कानून और क्षेत्राधिकार",
      "12. आपत्तिजनक सामग्री",
      "13. अन्य साइटों के लिंक",
      "14. Creation Health गोपनीयता नीति",
      "15. ग्राहक सहायता",
      "16. अन्य महत्वपूर्ण प्रावधान",
      "17. परिवर्तन या संशोधन",
    ],
  },
  ur: {
    titles: [
      "1. سروس تک رسائی",
      "2. رجسٹریشن سے متعلق ذمہ داریاں",
      "3. سروس فیس",
      "4. خاتمہ / منسوخی / رقم کی واپسی",
      "5. صارف پابندیاں",
      "6. دانشورانہ املاک کے حقوق",
      "7. صارف کی تیار کردہ مواد",
      "8. ضمانتوں کا انکار",
      "9. ذمہ داری کی حد",
      "10. ازالہ",
      "11. قابل اطلاق قانون اور دائرہ اختیار",
      "12. قابلِ اعتراض مواد",
      "13. دیگر سائٹس کے روابط",
      "14. Creation Health پرائیویسی پالیسی",
      "15. کسٹمر سپورٹ",
      "16. دیگر اہم دفعات",
      "17. تبدیلیاں یا ترامیم",
    ],
  },
  zh: {
    titles: [
      "1. 服务访问",
      "2. 注册义务",
      "3. 服务费用",
      "4. 终止 / 取消 / 退款",
      "5. 用户限制",
      "6. 知识产权",
      "7. 用户生成内容",
      "8. 免责声明",
      "9. 责任限制",
      "10. 赔偿",
      "11. 适用法律与管辖",
      "12. 令人反感的内容",
      "13. 其他网站链接",
      "14. Creation Health 隐私政策",
      "15. 客户支持",
      "16. 其他重要条款",
      "17. 变更或修改",
    ],
  },
  ja: {
    titles: [
      "1. サービスへのアクセス",
      "2. 登録に関する義務",
      "3. サービス料金",
      "4. 終了 / 解約 / 返金",
      "5. 利用者の制限",
      "6. 知的財産権",
      "7. ユーザー生成コンテンツ",
      "8. 保証の否認",
      "9. 責任の制限",
      "10. 補償",
      "11. 準拠法および裁判管轄",
      "12. 不快なコンテンツ",
      "13. 外部サイトへのリンク",
      "14. Creation Health プライバシーポリシー",
      "15. カスタマーサポート",
      "16. その他の重要条項",
      "17. 変更または修正",
    ],
  },
  yue: {
    titles: [
      "1. 使用服務",
      "2. 註冊責任",
      "3. 服務費用",
      "4. 終止 / 取消 / 退款",
      "5. 用戶限制",
      "6. 知識產權",
      "7. 用戶生成內容",
      "8. 免責聲明",
      "9. 責任限制",
      "10. 彌償",
      "11. 適用法律及司法管轄",
      "12. 令人反感內容",
      "13. 其他網站連結",
      "14. Creation Health 私隱政策",
      "15. 客戶支援",
      "16. 其他重要條文",
      "17. 更改或修改",
    ],
  },
  ko: {
    titles: [
      "1. 서비스 접근",
      "2. 등록 의무",
      "3. 서비스 요금",
      "4. 종료 / 취소 / 환불",
      "5. 사용자 제한",
      "6. 지적 재산권",
      "7. 사용자 생성 콘텐츠",
      "8. 보증의 부인",
      "9. 책임의 제한",
      "10. 면책",
      "11. 준거법 및 관할",
      "12. 불쾌한 콘텐츠",
      "13. 외부 사이트 링크",
      "14. Creation Health 개인정보 처리방침",
      "15. 고객 지원",
      "16. 기타 중요한 조항",
      "17. 변경 또는 수정",
    ],
  },
};

const sections: TermsSection[] = [
  {
    id: "access",
    title: "1. Access To The Service",
    body: [
      "You may use the Service only if you can legally form a binding contract with Creation Health, and only in compliance with these Terms and all applicable laws. When you create an account for Astrology Today, LIFESPACE, or any related service, you must provide accurate and complete information. Use of the Service by anyone under the age of 13 is not allowed, and where local law requires a higher age for valid consent to data processing, you may use the Service only if you satisfy that requirement or valid parental consent has been provided where permitted by law.",
      "Subject to the limitations described in this Agreement, you are granted a limited right to access the text, files, images, video, audio, software, digital tools, written materials, wellness content, astrology content, and other materials made available through the Service. In order to use the Service, you must obtain internet access and pay any service fees associated with such access, and you must provide any equipment necessary to connect to and use the Service.",
    ],
  },
  {
    id: "registration",
    title: "2. Your Registration Obligations",
    body: [
      "You agree to provide true, accurate, current, and complete information about yourself as prompted by the registration process, and to promptly update that information when it changes. You further consent and authorize us to verify your registration data as reasonably required for your access to and use of the Service.",
      "You are solely responsible for maintaining the confidentiality of your account credentials and for any charges, damages, liabilities, or losses arising from your failure to do so. You agree not to permit any other person to use your account credentials, and you agree to notify us immediately of any unauthorized use of your account or any other breach of security known to you.",
    ],
  },
  {
    id: "fees",
    title: "3. Service Fees",
    body: [
      "By registering for any paid portion of the Service, you agree to pay the fees designated for the subscription or service level you select. Additional charges may include purchases you make, service upgrades you request, taxes, payment processing fees where applicable, or other charges disclosed at the time of purchase.",
      "Unless otherwise stated, subscriptions renew automatically at the applicable rate until cancelled by you or terminated by us. Monthly, quarterly, semiannual, annual, or other recurring plans may renew at the end of each subscription period, and you are responsible for managing cancellation before the applicable renewal date if you do not want the Service to continue. All fees and charges are nonrefundable except where required by law or expressly stated by us in writing.",
      "If you register for a trial period, you may be required to provide a payment method when signing up. Unless you cancel before the end of the trial period, your subscription may convert automatically into a paid plan at the rate and billing cycle presented during signup. Payment must be made through a payment method accepted by us or by the relevant platform operator, and your agreement with your card issuer, Apple, Google, or any other payment provider governs your use of that payment method.",
      "We reserve the right to change our fees and billing methods at any time, including by adding supplemental fees or separate charges for content, products, services, subscriptions, or features made available through Creation Health, Astrology Today, or LIFESPACE. Your continued use of the Service after the effective date of any fee change constitutes your acceptance of that change.",
    ],
  },
  {
    id: "termination",
    title: "4. Termination / Cancellation / Refunds",
    body: [
      "You may cancel your account or subscription through the account portal, subscription settings, app store controls, or other cancellation method made available for the Service you purchased. If you cancel your subscription, access to paid features may continue only until the end of the paid subscription term unless otherwise required by law or expressly stated by us.",
      "Except as required by law, we do not provide refunds for partially used subscription periods, and cancellation is your sole right and exclusive remedy if you are dissatisfied with the Service. We may restrict, suspend, or terminate your access to the Service immediately and without notice if you violate, breach, or fail to comply with this Agreement.",
    ],
  },
  {
    id: "restrictions",
    title: "5. User Restrictions",
    body: [
      "You may not use the Service to upload, distribute, transmit, communicate, publish, link to, or otherwise make available any material that is unlawful, defamatory, obscene, threatening, hateful, discriminatory, abusive, fraudulent, invasive of privacy, or otherwise objectionable, or that infringes the intellectual property or other rights of any person or entity.",
      "You may not attempt to disrupt, impair, reverse engineer, scrape, interfere with, overload, or otherwise compromise the Service or any account, host, server, processor, network, or related system. You are prohibited from violating or attempting to violate the security of the Service, including probing vulnerabilities, bypassing authentication, transmitting malicious code, or collecting personal information about others without proper authority.",
    ],
  },
  {
    id: "ip",
    title: "6. Intellectual Property Rights",
    body: [
      "The Service, including its design, layout, branding, logos, software, code, graphics, original writing, compiled content, and all related intellectual property, is owned by or licensed to Creation Health, Astrology Today, LIFESPACE, or their licensors and is protected by copyright, trademark, and other intellectual property laws.",
      "Except as expressly permitted by this Agreement, you may not copy, reproduce, republish, distribute, display, modify, create derivative works from, decompile, reverse engineer, sell, license, rent, lease, exploit, or otherwise use any part of the Service or its content for commercial or unauthorized purposes. We reserve all rights not expressly granted in this Agreement.",
      "If you believe that material available on the Service infringes your copyright or other intellectual property rights, you may notify us using the contact methods made available by Creation Health, and we may investigate and take action as appropriate.",
    ],
  },
  {
    id: "ugc",
    title: "7. User Generated Content",
    body: [
      "The Service may, but is not required to, offer features that permit registered users to post, submit, display, upload, or otherwise make available content, including comments, reviews, writing, images, videos, ideas, feedback, wellness material, astrology observations, or other user-submitted content. If you use such features, you do so at your own risk and remain solely responsible for the content you submit.",
      "By posting user-generated content on or through the Service, you grant Creation Health a non-exclusive, worldwide, royalty-free, sublicensable license to use, host, store, reproduce, modify, adapt, publish, display, distribute, and otherwise make that content available on or in connection with the Service and related promotional channels. We reserve the right, but not the obligation, to monitor, edit, remove, or refuse to publish user-generated content at any time in our sole discretion.",
    ],
  },
  {
    id: "warranties",
    title: "8. Disclaimer Of Warranties",
    body: [
      "You expressly agree that use of and access to the Service is at your sole risk. The Service is provided on an \"as is\" and an \"as available\" basis. To the maximum extent permitted by law, we disclaim all representations and warranties, express, implied, statutory, or otherwise, including any implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, or arising by course of dealing or usage of trade.",
      "We do not warrant that any material, content, products, services, subscriptions, wellness guidance, astrology content, or digital tools available through the Service are accurate, complete, reliable, timely, secure, uninterrupted, or free from errors, viruses, or other harmful components. Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.",
    ],
  },
  {
    id: "liability",
    title: "9. Limitation Of Liability",
    body: [
      "To the maximum extent permitted by law, Creation Health, Astrology Today, LIFESPACE, and their respective affiliates, operators, collaborators, licensors, and service providers shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenues, data, goodwill, use, or other intangible losses arising from or relating to your access to, use of, or inability to use the Service.",
      "In no event shall our aggregate liability for all claims relating to the Service exceed one hundred U.S. dollars (US $100.00) or the amount you paid us for the specific paid Service giving rise to the claim during the twelve months preceding the event giving rise to liability, whichever is greater. If you are a consumer in a jurisdiction that does not permit certain limitations of liability, some of the foregoing limitations may not apply to you.",
    ],
  },
  {
    id: "indemnity",
    title: "10. Indemnity",
    body: [
      "You agree to defend, indemnify, and hold harmless Creation Health, Astrology Today, LIFESPACE, and their respective affiliates, officers, directors, employees, contractors, licensors, and service providers from and against any losses, liabilities, claims, damages, costs, and expenses, including reasonable attorneys' fees, arising out of or related to your breach of this Agreement, your misuse of the Service, your user-generated content, or the use of the Service by any person using your account credentials.",
      "We reserve the right, at our own expense and on notice to you, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you.",
    ],
  },
  {
    id: "law",
    title: "11. Choice Of Law And Consent To Jurisdiction",
    body: [
      "These Terms shall be governed by the laws applicable to the operator of Creation Health and Astrology Today, without regard to conflict of law principles. If you are not a consumer in a jurisdiction that provides otherwise, the exclusive place of jurisdiction for disputes arising from or in connection with this Agreement shall be the courts designated by the operator of the Service.",
      "If you are a consumer in a jurisdiction that grants you non-waivable local rights or forum protections, nothing in these Terms is intended to deprive you of those protections.",
    ],
  },
  {
    id: "objectionable",
    title: "12. Objectionable Material",
    body: [
      "You understand that by using the Service, you may encounter content that may be deemed offensive, indecent, inaccurate, controversial, or otherwise objectionable. You agree to use the Service at your sole risk, and we shall have no liability to you for content that may be found objectionable to you.",
      "Content descriptions, labels, or classifications are provided for convenience only, and we do not guarantee their completeness or accuracy.",
    ],
  },
  {
    id: "links",
    title: "13. Links To Other Sites",
    body: [
      "The Service may contain hyperlinks and pointers to websites, services, platforms, or resources maintained by third parties. If you use those links, you may leave the Service and your browser or device may be redirected to external resources.",
      "Those third-party sites may have their own terms, privacy practices, content standards, or billing policies. We are not responsible for the legality, accuracy, quality, authenticity, availability, content, products, services, or practices of any other site or service, and you access them at your own risk.",
    ],
  },
  {
    id: "privacy",
    title: "14. Creation Health Privacy Policy",
    body: [
      "Creation Health takes your privacy seriously and operates under the policies and principles set forth in its Privacy Policy, which contains important information and disclosures relating to the collection and use of your Personal Data in connection with your use of the Service.",
      "By using the Service, you acknowledge that you have reviewed or have had the opportunity to review our Privacy Policy.",
    ],
  },
  {
    id: "support",
    title: "15. Customer Support",
    body: [
      "If you need assistance with your account, subscription, purchase, or access to the Service, you may contact customer support through the support methods made available by Astrology Today, LIFESPACE, or related Creation Health pages. We may utilize the services of third parties in providing customer support.",
      "The disclaimers of warranties and limitations of liability set forth in this Agreement expressly apply to your use of customer support services as well.",
    ],
  },
  {
    id: "other",
    title: "16. Other Important Provisions",
    body: [
      "You may not assign or transfer this Agreement or any rights granted under it without our prior written consent. We may assign this Agreement without restriction in connection with a corporate reorganization, merger, acquisition, sale of assets, or other business transaction.",
      "No failure or delay by us in enforcing any provision of this Agreement shall operate as a waiver of that or any other right. If any provision of this Agreement is held invalid or unenforceable, the remaining provisions shall remain in full force and effect. This Agreement, together with our Privacy Policy and any other rules or policies expressly incorporated by reference, constitutes the entire agreement between you and us with respect to the Service.",
    ],
  },
  {
    id: "changes",
    title: "17. Changes Or Modifications",
    body: [
      "We reserve the right to add, delete, change, or modify parts of these Terms at our sole discretion and at any time without notice or liability to you. If we do so, we will post the updated Terms on this page and indicate the effective date.",
      "It is your responsibility to review this Agreement from time to time to remain aware of any additions, revisions, or modifications. Your continued use of the Service after any update becomes effective constitutes your acceptance of the revised Terms.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Terms of Service | Astrology Today",
  description: "Creation Health Terms of Service for Astrology Today, LIFESPACE, subscriptions, payments, and related services.",
};

export default function TermsOfServicePage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getLegalCopy("terms", locale);
  const localized = termsTranslations[locale];
  const renderedSections = localized
    ? sections.map((section, index) => ({
        ...section,
        title: localized.titles[index] ?? section.title,
      }))
    : sections;
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
            <nav className="site-rules-toc" aria-label="Terms of service sections">
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
