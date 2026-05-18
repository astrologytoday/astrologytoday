import type { Metadata } from "next";
import Link from "next/link";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getLegalCopy } from "../../lib/copy";

const dmcaTranslations: Partial<
  Record<
    SupportedLocale,
    {
      toc: [string, string, string];
      policy: string[];
      noticeHeading: string;
      noticeBody: string[];
      noticeClosing: string;
      counterHeading: string;
      counterBody: string[];
      counterClosing: string;
    }
  >
> = {
  fr: {
    toc: ["Politique DMCA", "Notification d'infraction", "Contre-notification"],
    policy: [
      "Nous répondons aux notifications d'infraction présumée conformes au DMCA et aux autres lois applicables en matière de propriété intellectuelle.",
      "Si nous prenons de telles mesures, nous tenterons de bonne foi de contacter la personne ayant transmis le contenu afin qu'elle puisse présenter une contre-notification conformément aux sections 512(g)(2) et (3) du DMCA.",
    ],
    noticeHeading: "Notification d'infraction",
    noticeBody: [
      "Si vous êtes titulaire d'un droit d'auteur ou agent autorisé et pensez qu'un utilisateur d'Astrology Today, de LIFESPACE ou d'un autre service lié à Creation Health a enfreint vos droits, vous pouvez soumettre une notification.",
      "Pour déposer une notification, vous devez envoyer un écrit par e-mail contenant les éléments indiqués ci-dessous. Si vous déclarez à tort qu'un contenu enfreint vos droits, vous pouvez être responsable de dommages et frais juridiques.",
    ],
    noticeClosing: "Si vous ne respectez pas toutes les exigences ci-dessus, votre notification DMCA peut être considérée comme invalide.",
    counterHeading: "Contre-notification",
    counterBody: [
      "Conformément aux sections 512(g)(2) et (3) du DMCA, un abonné peut déposer une contre-notification.",
      "Si vous affirmez à tort qu'un contenu n'est pas contrefaisant, vous pouvez être responsable de dommages et frais juridiques.",
    ],
    counterClosing: "Les contre-notifications doivent également être envoyées à",
  },
  it: {
    toc: ["Politica DMCA", "Notifica di violazione", "Contro-notifica"],
    policy: [
      "Rispondiamo alle segnalazioni di presunta violazione conformi al DMCA e alle altre leggi applicabili in materia di proprietà intellettuale.",
      "Se adottiamo tali misure, tenteremo in buona fede di contattare la persona che ha trasmesso il contenuto affinché possa presentare una contro-notifica ai sensi delle sezioni 512(g)(2) e (3) del DMCA.",
    ],
    noticeHeading: "Notifica di violazione",
    noticeBody: [
      "Se sei titolare di copyright o agente autorizzato e ritieni che un utente di Astrology Today, LIFESPACE o di un altro servizio Creation Health abbia violato i tuoi diritti, puoi inviare una notifica.",
      "Per inviare una notifica, devi fornire una comunicazione scritta via e-mail contenente gli elementi indicati di seguito. Una falsa dichiarazione può esporti a danni e spese legali.",
    ],
    noticeClosing: "Se non rispetti tutti i requisiti sopra indicati, la tua notifica DMCA potrebbe non essere valida.",
    counterHeading: "Contro-notifica",
    counterBody: [
      "Ai sensi delle sezioni 512(g)(2) e (3) del DMCA, un abbonato può presentare una contro-notifica.",
      "Se dichiari erroneamente che un contenuto non viola i diritti altrui, potresti essere responsabile di danni e spese legali.",
    ],
    counterClosing: "Le contro-notifiche devono essere inviate anche a",
  },
  es: {
    toc: ["Política DMCA", "Notificación de infracción", "Contranotificación"],
    policy: [
      "Respondemos a notificaciones de presunta infracción que cumplan con la DMCA y otras leyes aplicables de propiedad intelectual.",
      "Si tomamos dichas medidas, intentaremos de buena fe contactar a la persona que transmitió el contenido para que pueda presentar una contranotificación conforme a las secciones 512(g)(2) y (3) de la DMCA.",
    ],
    noticeHeading: "Notificación de infracción",
    noticeBody: [
      "Si usted es titular de derechos de autor o agente autorizado y cree que un usuario de Astrology Today, LIFESPACE u otro servicio de Creation Health ha infringido sus derechos, puede enviar una notificación.",
      "Para presentar una notificación, debe enviar una comunicación escrita por correo electrónico con los elementos indicados abajo. Una representación errónea puede dar lugar a daños y honorarios legales.",
    ],
    noticeClosing: "Si no cumple con todos los requisitos anteriores, su notificación DMCA puede no ser válida.",
    counterHeading: "Contranotificación",
    counterBody: [
      "Conforme a las secciones 512(g)(2) y (3) de la DMCA, un suscriptor puede presentar una contranotificación.",
      "Si usted declara erróneamente que un contenido no infringe derechos de terceros, podría ser responsable de daños y gastos legales.",
    ],
    counterClosing: "Las contranotificaciones también deben enviarse a",
  },
  zh: {
    toc: ["DMCA 政策", "侵权通知", "反通知"],
    policy: [
      "我们会回应符合 DMCA 及其他适用知识产权法律要求的侵权通知。",
      "如果我们采取相关措施，我们会尽最大诚信尝试联系传送该内容的人，以便其根据 DMCA 第 512(g)(2) 和 (3) 条提交反通知。",
    ],
    noticeHeading: "侵权通知",
    noticeBody: [
      "如果您是版权所有人或其授权代理，并认为 Astrology Today、LIFESPACE 或其他 Creation Health 服务的用户侵犯了您的版权，您可以提交通知。",
      "要提交通知，您必须通过电子邮件发送书面说明并包含下列项目。如您对侵权情况作出重大失实陈述，可能需要承担损害赔偿和法律费用。",
    ],
    noticeClosing: "如果您未满足以上所有要求，您的 DMCA 通知可能被视为无效。",
    counterHeading: "反通知",
    counterBody: [
      "根据 DMCA 第 512(g)(2) 和 (3) 条，订阅者可以提交反通知。",
      "如果您错误声称相关内容并未侵权，您可能需要承担损害赔偿和法律费用。",
    ],
    counterClosing: "反通知也应发送至",
  },
  ja: {
    toc: ["DMCA ポリシー", "侵害通知", "異議申立て通知"],
    policy: [
      "当社は、DMCA および適用される知的財産法に準拠した侵害申立てに対応します。",
      "そのような措置を講じる場合、DMCA 第512(g)(2)および(3)に基づき、コンテンツ送信者が異議申立て通知を提出できるよう誠実に連絡を試みます。",
    ],
    noticeHeading: "侵害通知",
    noticeBody: [
      "あなたが著作権者または正式な代理人であり、Astrology Today、LIFESPACE、または他の Creation Health サービスの利用者があなたの権利を侵害していると考える場合は、通知を提出できます。",
      "通知を行うには、以下の項目を含む書面をメールで送付する必要があります。侵害であると重大な虚偽申告をした場合、損害賠償や弁護士費用の責任を負うことがあります。",
    ],
    noticeClosing: "上記の要件をすべて満たさない場合、DMCA 通知は無効と判断されることがあります。",
    counterHeading: "異議申立て通知",
    counterBody: [
      "DMCA 第512(g)(2)および(3)に基づき、登録者は異議申立て通知を提出することができます。",
      "その内容が非侵害であると重大な虚偽申告をした場合、損害賠償や弁護士費用の責任を負うことがあります。",
    ],
    counterClosing: "異議申立て通知の送付先:",
  },
};

const infringementItems = [
  "Identify in sufficient detail the copyrighted work that you believe has been infringed upon.",
  "Identify the material that you claim is infringing the copyrighted work listed above or which you claim is the subject of infringing activity. You must identify each separate item of allegedly infringing material.",
  "Provide information reasonably sufficient to permit Creation Health to locate the material.",
  "Provide information reasonably sufficient to permit Creation Health to contact you, including your email address, telephone number, and mailing address.",
  "Provide information, if possible, sufficient to permit Creation Health to notify the user who allegedly submitted or transmitted the material.",
  'Include the following statement: "I have a good faith belief that use of the copyrighted materials in the manner complained of is not authorized by the copyright owner, its agent, or the law."',
  'Include the following statement: "I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed."',
  "Sign the written notice.",
  'Send the notice by email to mariosbardella@protonmail.com with the subject line "DMCA Complaint."',
];

const counterItems = [
  "Identify the name of the Astrology Today, LIFESPACE, or Creation Health content with respect to which access has been blocked, disabled, or removed.",
  "Provide your name, address, telephone number, email address, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or New York, New York, USA if your address is outside the United States, and that you will accept service of process from the person who provided the original infringement notification or that person's agent.",
  'Include the following statement: "I swear, under penalty of perjury, that I have a good faith belief that the material identified above was removed, blocked, or disabled as a result of a mistake or misidentification."',
  "Sign the written counter notification.",
];

export const metadata: Metadata = {
  title: "DMCA / Copyright Policy | Astrology Today",
  description: "Creation Health DMCA and copyright policy for Astrology Today, LIFESPACE, and related services.",
};

export default function DmcaPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getLegalCopy("dmca", locale);
  const localized = dmcaTranslations[locale];
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
            <nav className="site-rules-toc" aria-label="DMCA sections">
              <a href="#policy">{localized?.toc[0] ?? "DMCA Policy"}</a>
              <a href="#notice">{localized?.toc[1] ?? "Infringement Notification"}</a>
              <a href="#counter">{localized?.toc[2] ?? "Counter Notification"}</a>
            </nav>
          </aside>

          <article className="site-rules-document">
            <section id="policy" className="site-rules-intro">
              <h2 className="site-rules-legal-heading">{copy.introHeading}</h2>
              <p>{localized?.policy[0] ?? 'It is our policy to respond to notices of alleged infringement that comply with the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws. Responses may include removing material claimed to be the subject of infringing activity on Astrology Today, LIFESPACE, or related Creation Health services and/or terminating a user&apos;s account.'}</p>
              <p>{localized?.policy[1] ?? "If we take such measures, we will make a good-faith attempt to contact the sender who transmitted the content so that he or she may make a counter notification pursuant to sections 512(g)(2) and (3) of the DMCA. It is our policy to document all notices of alleged infringement on which we act. As with all legal notices, a copy of the notice may be sent to one or more third parties who may make it available to the public."}</p>
            </section>

            <section id="notice" className="site-rules-section">
              <h2>{localized?.noticeHeading ?? "Infringement Notification"}</h2>
              <p>{localized?.noticeBody[0] ?? "If you are a copyright owner or an authorized agent thereof and believe that any user of Astrology Today, LIFESPACE, or another related Creation Health service has infringed upon your copyrights, you may submit a notification pursuant to the DMCA by filing a notice of infringement with our designated contact."}</p>
              <p>{localized?.noticeBody[1] ?? "To file a notice of infringement, you must provide a written communication by email that sets forth the items specified below. Please note that you may be liable for damages, including costs and attorneys&apos; fees, if you materially misrepresent that content or activity is infringing your copyrights. If you are uncertain whether material available online infringes your rights, you should first contact an attorney."}</p>
              <ol className="site-rules-list">
                {infringementItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <p>{localized?.noticeClosing ?? "You acknowledge that if you fail to comply with all of the requirements set forth above, your DMCA notice may not be valid."}</p>
            </section>

            <section id="counter" className="site-rules-section">
              <h2>{localized?.counterHeading ?? "Counter Notification"}</h2>
              <p>{localized?.counterBody[0] ?? "Pursuant to sections 512(g)(2) and (3) of the DMCA, a subscriber may make a counter notification. To file a counter notification with us, you must provide a written communication by email that sets forth the items specified below."}</p>
              <p>{localized?.counterBody[1] ?? "Please note that you may be liable for damages, including costs and attorneys&apos; fees, if you materially misrepresent that the content is not infringing the copyrights of others. If you are not sure whether certain material infringes the copyrights of others, you should first contact an attorney."}</p>
              <ol className="site-rules-list">
                {counterItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <p>
                {localized?.counterClosing ?? "Counter notifications should also be sent to"}{" "}
                <a href="mailto:mariosbardella@protonmail.com">mariosbardella@protonmail.com</a>.
              </p>
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
