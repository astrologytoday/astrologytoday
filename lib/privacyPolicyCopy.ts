import { defaultLocale, type SupportedLocale } from "./i18n";

export type PolicySection = {
  id: string;
  title: string;
  body: string[];
};

export type PrivacyPolicyCopy = {
  metadataTitle: string;
  metadataDescription: string;
  summaryHeading: string;
  summaryPoints: string[];
  sections: PolicySection[];
};

const englishSummaryHeading = "Summary";

const englishSummaryPoints = [
  "We may use your Personal Data to provide services to you, including account registration, subscriptions, payments, support, and service communications.",
  "We may use Personal Data to improve Astrology Today and LIFESPACE, to administer analytics and product development, and to deliver marketing where permitted by law.",
  "We may share your Personal Data in the circumstances described in this Policy, including with processors, vendors, service providers, legal authorities, and transaction counterparties where necessary.",
  "We use reasonable technical, organizational, physical, and administrative measures to protect Personal Data.",
];

const englishSections: PolicySection[] = [
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

const localizedSummaryAndTitles: Partial<
  Record<
    SupportedLocale,
    {
      summaryHeading: string;
      summaryPoints: string[];
      sectionTitles: string[];
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
    sectionTitles: [
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
    sectionTitles: [
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
    sectionTitles: [
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
    sectionTitles: [
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
    sectionTitles: [
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
  hi: {
    summaryHeading: "सारांश",
    summaryPoints: [
      "हम आपकी व्यक्तिगत जानकारी का उपयोग खाता पंजीकरण, सदस्यता, भुगतान, सहायता और सेवा-संबंधी संचार प्रदान करने के लिए कर सकते हैं।",
      "हम Astrology Today और LIFESPACE को बेहतर बनाने, विश्लेषण और उत्पाद विकास का प्रबंधन करने, तथा कानून द्वारा अनुमति मिलने पर विपणन के लिए व्यक्तिगत जानकारी का उपयोग कर सकते हैं।",
      "हम इस नीति में वर्णित परिस्थितियों में आपकी व्यक्तिगत जानकारी को प्रोसेसरों, विक्रेताओं, सेवा प्रदाताओं, कानूनी प्राधिकरणों और आवश्यक लेन-देन भागीदारों के साथ साझा कर सकते हैं।",
      "हम व्यक्तिगत जानकारी की सुरक्षा के लिए युक्तिसंगत तकनीकी, संगठनात्मक, भौतिक और प्रशासनिक उपाय अपनाते हैं।",
    ],
    sectionTitles: [
      "हमारी गोपनीयता प्रथाएँ",
      "प्रसंस्करण के सिद्धांत",
      "आपकी व्यक्तिगत जानकारी की सुरक्षा",
      "आपके गोपनीयता नियंत्रण",
      "हम स्वचालित रूप से जो जानकारी एकत्र करते हैं",
      "आप हमारे साथ जो व्यक्तिगत जानकारी साझा करते हैं",
      "आपकी व्यक्तिगत जानकारी के उपयोग का हमारा उद्देश्य",
      "सदस्यता, भुगतान और सहायता",
      "विपणन, विश्लेषण और उत्पाद सुधार",
      "संदेश बोर्ड, चैट रूम और सार्वजनिक क्षेत्र",
      "आपकी व्यक्तिगत जानकारी का साझा करना और स्थानांतरण",
      "अन्य वेबसाइटों के लिंक",
      "आपके डेटा संरक्षण अधिकार",
      "बच्चे",
      "इस गोपनीयता नीति में परिवर्तन",
    ],
  },
  ur: {
    summaryHeading: "خلاصہ",
    summaryPoints: [
      "ہم آپ کے ذاتی ڈیٹا کو اکاؤنٹ رجسٹریشن، سبسکرپشن، ادائیگی، سپورٹ اور سروس سے متعلقہ رابطوں کے لیے استعمال کر سکتے ہیں۔",
      "ہم Astrology Today اور LIFESPACE کو بہتر بنانے، تجزیات اور پروڈکٹ ڈیولپمنٹ کے انتظام، اور قانون کے مطابق مارکیٹنگ کے لیے ذاتی ڈیٹا استعمال کر سکتے ہیں۔",
      "ہم اس پالیسی میں بیان کردہ حالات میں آپ کا ذاتی ڈیٹا پروسیسرز، وینڈرز، سروس فراہم کنندگان، قانونی حکام اور ضروری لین دین کے شراکت داروں کے ساتھ شیئر کر سکتے ہیں۔",
      "ہم ذاتی ڈیٹا کے تحفظ کے لیے مناسب تکنیکی، تنظیمی، جسمانی اور انتظامی اقدامات استعمال کرتے ہیں۔",
    ],
    sectionTitles: [
      "ہماری پرائیویسی کی مشقیں",
      "پروسیسنگ کے اصول",
      "آپ کے ذاتی ڈیٹا کا تحفظ",
      "آپ کے پرائیویسی کنٹرولز",
      "وہ معلومات جو ہم خودکار طور پر جمع کرتے ہیں",
      "ذاتی ڈیٹا جو آپ ہمیں فراہم کرتے ہیں",
      "آپ کے ذاتی ڈیٹا کے استعمال کا ہمارا مقصد",
      "سبسکرپشنز، ادائیگیاں اور سپورٹ",
      "مارکیٹنگ، تجزیات اور پروڈکٹ میں بہتری",
      "میسج بورڈز، چیٹ رومز اور عوامی حصے",
      "آپ کے ذاتی ڈیٹا کا اشتراک اور منتقلی",
      "دیگر ویب سائٹس کے لنکس",
      "آپ کے ڈیٹا پروٹیکشن کے حقوق",
      "بچے",
      "اس پرائیویسی پالیسی میں تبدیلیاں",
    ],
  },
  sa: {
    summaryHeading: "सारांशः",
    summaryPoints: [
      "वयं भवतः व्यक्तिगत-दत्तांशान् खाता-पञ्जीकरणे, सदस्यतायाम्, भुगताने, साहाय्ये, सेवासम्बद्धसन्देशेषु च उपयोगयितुं शक्नुमः।",
      "वयं Astrology Today तथा LIFESPACE इत्येतयोः उन्नयनाय, विश्लेषण-व्यवस्थापनाय, उत्पाद-विकासाय, विधिना अनुमते च विपणनाय व्यक्तिगत-दत्तांशान् उपयोगयेम।",
      "अस्यां नीतौ वर्णितेषु प्रसङ्गेषु वयं व्यक्तिगत-दत्तांशान् संसाधकैः, विक्रेतृभिः, सेवाप्रदातृभिः, विधिक-अधिकृतैः, आवश्यक-व्यवहार-सहभागिभिश्च सह साझीकर्तुं शक्नुमः।",
      "व्यक्तिगत-दत्तांश-रक्षणार्थं वयं युक्तियुक्तानि तांत्रिक-साङ्गठनिक-भौतिक-प्रशासकीय-उपायान् स्वीकुर्मः।",
    ],
    sectionTitles: [
      "अस्माकं गोपनीयता-प्रथाः",
      "प्रक्रियाकरणस्य सिद्धान्ताः",
      "भवतः व्यक्तिगत-दत्तांशस्य संरक्षणम्",
      "भवतः गोपनीयता-नियन्त्रणानि",
      "स्वयमेव संगृहीता सूचना",
      "भवता अस्मभ्यं प्रदत्तं व्यक्तिगत-दत्तम्",
      "व्यक्तिगत-दत्तस्य उपयोगस्य अस्माकं प्रयोजनम्",
      "सदस्यता, भुगतान-व्यवस्था, साहाय्यं च",
      "विपणनम्, विश्लेषणम्, उत्पाद-सुधारश्च",
      "सन्देश-पटलानि, संवाद-कक्षाः, सार्वजनिक-क्षेत्राणि च",
      "भवतः व्यक्तिगत-दत्तस्य साझीकरणं स्थानान्तरणं च",
      "अन्य-जालपुटेषु संयोजकानि",
      "भवतः दत्त-संरक्षण-अधिकाराः",
      "बालकाः",
      "अस्यां गोपनीयता-नीतौ परिवर्तनानि",
    ],
  },
  pa: {
    summaryHeading: "ਸੰਖੇਪ",
    summaryPoints: [
      "ਅਸੀਂ ਤੁਹਾਡੇ ਨਿੱਜੀ ਡੇਟਾ ਦਾ ਇਸਤੇਮਾਲ ਖਾਤਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਸਬਸਕ੍ਰਿਪਸ਼ਨ, ਭੁਗਤਾਨ, ਸਹਾਇਤਾ ਅਤੇ ਸੇਵਾ-ਸਬੰਧੀ ਸੰਚਾਰ ਲਈ ਕਰ ਸਕਦੇ ਹਾਂ।",
      "ਅਸੀਂ Astrology Today ਅਤੇ LIFESPACE ਨੂੰ ਸੁਧਾਰਨ, ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਪ੍ਰੋਡਕਟ ਵਿਕਾਸ ਦਾ ਪ੍ਰਬੰਧ ਕਰਨ, ਅਤੇ ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਮਾਰਕੀਟਿੰਗ ਲਈ ਨਿੱਜੀ ਡੇਟਾ ਵਰਤ ਸਕਦੇ ਹਾਂ।",
      "ਅਸੀਂ ਇਸ ਨੀਤੀ ਵਿੱਚ ਦਰਸਾਈਆਂ ਹਾਲਤਾਂ ਵਿੱਚ ਤੁਹਾਡਾ ਨਿੱਜੀ ਡੇਟਾ ਪ੍ਰੋਸੈਸਰਾਂ, ਵਿਕਰੇਤਿਆਂ, ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ, ਕਾਨੂੰਨੀ ਅਧਿਕਾਰੀਆਂ ਅਤੇ ਲੋੜੀਂਦੇ ਲੈਣ-ਦੇਣ ਭਾਗੀਦਾਰਾਂ ਨਾਲ ਸਾਂਝਾ ਕਰ ਸਕਦੇ ਹਾਂ।",
      "ਅਸੀਂ ਨਿੱਜੀ ਡੇਟਾ ਦੀ ਰੱਖਿਆ ਲਈ ਵਾਜਬ ਤਕਨੀਕੀ, ਸੰਗਠਨਾਤਮਕ, ਭੌਤਿਕ ਅਤੇ ਪ੍ਰਸ਼ਾਸਕੀ ਉਪਾਅ ਵਰਤਦੇ ਹਾਂ।",
    ],
    sectionTitles: [
      "ਸਾਡੀਆਂ ਪਰਾਈਵੇਸੀ ਪ੍ਰਥਾਵਾਂ",
      "ਪ੍ਰਕਿਰਿਆ ਦੇ ਸਿਧਾਂਤ",
      "ਤੁਹਾਡੇ ਨਿੱਜੀ ਡੇਟਾ ਦੀ ਰੱਖਿਆ",
      "ਤੁਹਾਡੇ ਪਰਾਈਵੇਸੀ ਨਿਯੰਤਰਣ",
      "ਉਹ ਜਾਣਕਾਰੀ ਜੋ ਅਸੀਂ ਆਪਣੇ ਆਪ ਇਕੱਠੀ ਕਰਦੇ ਹਾਂ",
      "ਨਿੱਜੀ ਡੇਟਾ ਜੋ ਤੁਸੀਂ ਸਾਨੂੰ ਦਿੰਦੇ ਹੋ",
      "ਤੁਹਾਡੇ ਨਿੱਜੀ ਡੇਟਾ ਦੇ ਇਸਤੇਮਾਲ ਦਾ ਸਾਡਾ ਉਦੇਸ਼",
      "ਸਬਸਕ੍ਰਿਪਸ਼ਨ, ਭੁਗਤਾਨ ਅਤੇ ਸਹਾਇਤਾ",
      "ਮਾਰਕੀਟਿੰਗ, ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਪ੍ਰੋਡਕਟ ਸੁਧਾਰ",
      "ਮੇਸੇਜ ਬੋਰਡ, ਚੈਟ ਰੂਮ ਅਤੇ ਜਨਤਕ ਖੇਤਰ",
      "ਤੁਹਾਡੇ ਨਿੱਜੀ ਡੇਟਾ ਦੀ ਸਾਂਝ ਅਤੇ ਟਰਾਂਸਫਰ",
      "ਹੋਰ ਵੈਬਸਾਈਟਾਂ ਦੇ ਲਿੰਕ",
      "ਤੁਹਾਡੇ ਡੇਟਾ ਸੁਰੱਖਿਆ ਅਧਿਕਾਰ",
      "ਬੱਚੇ",
      "ਇਸ ਪਰਾਈਵੇਸੀ ਨੀਤੀ ਵਿੱਚ ਤਬਦੀਲੀਆਂ",
    ],
  },
  yue: {
    summaryHeading: "摘要",
    summaryPoints: [
      "我哋可能會使用你嘅個人資料去提供服務，包括帳戶註冊、訂閱、付款、支援同服務通訊。",
      "我哋可能會使用個人資料去改善 Astrology Today 同 LIFESPACE、管理分析同產品開發，以及喺法律容許下作市場推廣。",
      "喺本政策列明嘅情況下，我哋可能會同處理商、供應商、服務提供者、法律機關同有需要嘅交易對手分享你嘅個人資料。",
      "我哋會採取合理嘅技術、組織、實體同管理措施去保護個人資料。",
    ],
    sectionTitles: [
      "我哋嘅私隱做法",
      "處理原則",
      "保障你嘅個人資料",
      "你嘅私隱控制",
      "我哋自動收集嘅資料",
      "你提供畀我哋嘅個人資料",
      "我哋使用你個人資料嘅目的",
      "訂閱、付款同支援",
      "市場推廣、分析同產品改進",
      "留言板、聊天室同公開區域",
      "你嘅個人資料分享同轉移",
      "連去其他網站嘅連結",
      "你嘅資料保障權利",
      "兒童",
      "本私隱政策嘅更改",
    ],
  },
  ko: {
    summaryHeading: "요약",
    summaryPoints: [
      "당사는 계정 등록, 구독, 결제, 지원 및 서비스 관련 안내를 제공하기 위해 귀하의 개인정보를 사용할 수 있습니다.",
      "당사는 Astrology Today와 LIFESPACE를 개선하고, 분석 및 제품 개발을 관리하며, 법률이 허용하는 경우 마케팅을 수행하기 위해 개인정보를 사용할 수 있습니다.",
      "당사는 본 정책에 설명된 상황에서 처리업체, 공급업체, 서비스 제공업체, 법적 기관 및 필요한 거래 상대방과 귀하의 개인정보를 공유할 수 있습니다.",
      "당사는 개인정보를 보호하기 위해 합리적인 기술적, 조직적, 물리적, 관리적 조치를 사용합니다.",
    ],
    sectionTitles: [
      "당사의 개인정보 처리 관행",
      "처리 원칙",
      "귀하의 개인정보 보호",
      "귀하의 개인정보 제어",
      "당사가 자동으로 수집하는 정보",
      "귀하가 당사에 제공하는 개인정보",
      "당사가 개인정보를 사용하는 목적",
      "구독, 결제 및 지원",
      "마케팅, 분석 및 제품 개선",
      "게시판, 채팅방 및 공개 영역",
      "개인정보의 공유 및 이전",
      "다른 웹사이트 링크",
      "귀하의 데이터 보호 권리",
      "아동",
      "본 개인정보처리방침의 변경",
    ],
  },
};

const sectionBodyOverrides: Partial<Record<SupportedLocale, string[][]>> = {
  fr: [
    [
      "Nous respectons votre vie privée et nous engageons à protéger vos Données personnelles conformément à la législation applicable. Cet engagement s'inscrit dans notre volonté de vous tenir informé, de reconnaître vos droits en matière de confidentialité et d'expliquer comment les informations sont collectées, utilisées, partagées, stockées et protégées au sein des services de Creation Health.",
      "Aux fins de la présente Politique, Creation Health, y compris Astrology Today et LIFESPACE lorsqu'ils sont concernés, agit comme responsable du traitement des Données personnelles collectées via le Service et est chargée de veiller à ce que ce traitement respecte les lois applicables en matière de protection des données.",
    ],
    [
      "Nous traitons les Données personnelles conformément aux principes d'équité, de licéité, de limitation des finalités, de minimisation des données, d'exactitude et de sécurité. Nous cherchons à traiter les Données personnelles uniquement à des fins déterminées et légitimes, et uniquement dans la mesure pertinente et nécessaire à ces fins.",
      "Nous prenons également des mesures raisonnables pour maintenir les Données personnelles exactes, complètes et à jour, mais il vous appartient de nous informer de toute modification des informations que vous nous avez fournies.",
    ],
    [
      "Afin de nous prémunir contre tout accès non autorisé aux Données personnelles, les Données personnelles électroniques peuvent être conservées sur des systèmes protégés par des architectures réseau sécurisées, des contrôles d'accès, des pare-feux, des sauvegardes et d'autres mesures de sécurité conçues pour réduire les conséquences d'une perte, destruction ou corruption accidentelle.",
      "Nous mettons également en œuvre des garanties physiques et administratives raisonnables pour protéger les Données personnelles. Bien que nous déployions des efforts commercialement raisonnables, aucun système de sécurité n'est parfait, et nous ne garantissons ni la sécurité absolue ni n'assumons de responsabilité pour toute divulgation résultant d'erreurs de transmission, d'un accès non autorisé par des tiers ou d'actes échappant raisonnablement à notre contrôle.",
    ],
    [
      "Lorsque des paramètres de compte, de profil, de notification ou d'abonné sont disponibles, vous pouvez être en mesure d'accéder à certaines Données personnelles et préférences associées, de les télécharger, de les consulter, de les mettre à jour, de les corriger ou de les modifier directement via vos paramètres.",
      "Vous pouvez également être en mesure de contrôler certaines activités de traitement, telles que les communications marketing, certains choix liés aux cookies ou les préférences de notification, par le biais des paramètres et contrôles mis à disposition par le Service ou en nous contactant via les moyens indiqués ci-dessous.",
    ],
    [
      "Lorsque vous visitez notre Service, certaines informations techniques et non directement identifiantes peuvent être enregistrées automatiquement dans le cadre du fonctionnement normal des technologies Internet. Cela peut inclure le type de navigateur, le système d'exploitation, le type d'appareil, l'adresse IP, la langue, les informations de provenance, les événements d'utilisation et d'autres identifiants techniques nécessaires au fonctionnement du Service et à la qualité de l'expérience.",
      "Une partie de ces informations peut être collectée au moyen de cookies et de technologies de suivi similaires. Nous pouvons utiliser ou partager ces informations enregistrées automatiquement à des fins de sécurité, d'analyse, d'amélioration du produit, de statistiques globales, de réponse d'urgence lorsque cela est approprié, ou comme l'exige la loi.",
    ],
    [
      "Nous pouvons vous demander des informations personnellement identifiantes dans divers contextes, notamment lorsque vous remplissez un formulaire d'inscription, vous abonnez à une newsletter, créez un compte, achetez des produits ou services, contactez le support, répondez à un sondage, soumettez du contenu ou interagissez autrement avec Astrology Today, LIFESPACE ou les services connexes de Creation Health.",
      "Selon la fonctionnalité concernée, ces Données personnelles peuvent inclure votre nom, nom d'utilisateur, adresse e-mail, informations liées au paiement, données de facturation, préférences de compte, messages adressés au support, contenus soumis, réponses à des enquêtes ou toute autre information que vous choisissez de fournir.",
    ],
    [
      "Nous pouvons traiter vos Données personnelles afin de finaliser l'inscription au compte, de fournir l'accès à nos services, de traiter les paiements, d'exécuter les commandes, de gérer les abonnements, de fournir une assistance clientèle, de répondre aux demandes, d'envoyer des newsletters ou communications promotionnelles, d'améliorer nos produits et services, d'administrer des enquêtes, concours ou offres spéciales, et de nous conformer aux obligations légales.",
      "Selon l'activité, nos bases juridiques de traitement peuvent inclure la nécessité contractuelle, les intérêts légitimes, le consentement ou l'obligation légale. Lorsque nous n'avons plus de besoin commercial légitime continu ni d'obligation légale de conserver les Données personnelles, nous les supprimerons, les anonymiserons ou les isolerons de manière sécurisée, selon ce qui est approprié.",
    ],
    [
      "Si vous souscrivez à un abonnement payant ou achetez un produit ou service payant via Astrology Today, LIFESPACE ou d'autres offres de Creation Health, nous pouvons utiliser vos Données personnelles pour gérer votre abonnement, traiter les paiements, administrer la facturation, exécuter les achats, fournir des reçus et répondre aux besoins liés au service client.",
      "Les informations de paiement peuvent être traitées par nous ainsi que par des processeurs de paiement tiers, des prestataires de facturation, des opérateurs de plateformes applicatives ou des partenaires transactionnels impliqués dans l'opération. Nous n'utilisons pas les données de paiement à des fins promotionnelles non liées et nous ne les partageons que dans la mesure nécessaire à l'exécution et au support de la transaction.",
    ],
    [
      "Nous pouvons utiliser les Données personnelles et d'autres informations non directement identifiantes pour vous informer de produits, services, abonnements, fonctionnalités, newsletters et offres susceptibles de vous intéresser, sous réserve du droit applicable et de toute exigence de consentement. Vous avez toujours la possibilité de refuser les communications marketing non essentielles.",
      "Nous pouvons également collecter, stocker et analyser des données d'utilisation, de produit et d'événements techniques afin d'améliorer la qualité du service, de comprendre les intérêts des utilisateurs, de maintenir les performances, de produire des statistiques d'utilisation, de personnaliser l'expérience utilisateur et de développer de nouveaux produits et services.",
    ],
    [
      "Si le Service comprend des forums, salons de discussion, commentaires, profils publics ou autres fonctionnalités communautaires, vous êtes seul responsable du contenu que vous divulguez volontairement dans ces espaces. Les informations divulguées publiquement peuvent être lues, collectées et utilisées par d'autres utilisateurs et peuvent entraîner des communications non sollicitées.",
      "Nous nous réservons le droit de modérer les espaces publics et de restreindre ou de mettre fin à l'accès lorsque cela est nécessaire pour faire respecter nos règles, protéger les utilisateurs ou protéger le Service et ses droits.",
    ],
    [
      "Nous pouvons divulguer des Données personnelles à des sociétés affiliées, fournisseurs, prestataires de services, partenaires cloud et infrastructure, partenaires de paiement et de facturation, prestataires d'analyse, prestataires de support, auditeurs, conseillers juridiques et autres sous-traitants qui nous aident à exploiter Astrology Today, LIFESPACE et les services connexes de Creation Health.",
      "Nous pouvons également divulguer des Données personnelles aux autorités compétentes, régulateurs, tribunaux, contreparties transactionnelles dans le cadre d'une fusion ou d'un transfert d'activité, ou à d'autres tiers lorsque cette divulgation est exigée par la loi ou raisonnablement nécessaire pour établir, exercer ou défendre des droits en justice.",
    ],
    [
      "Le Service peut contenir des liens vers des sites web ou services exploités par des sociétés ou personnes extérieures à Creation Health. Vous ne devez pas supposer que les politiques ou pratiques de confidentialité de ces sites tiers sont identiques à celles que nous suivons.",
      "Les visiteurs de ces sites tiers devraient consulter leurs propres politiques et pratiques de confidentialité. Nous n'approuvons pas et ne sommes pas responsables du contenu, de la sécurité ou des pratiques de confidentialité de sites tiers qui ne sont pas sous notre contrôle.",
    ],
    [
      "Sous réserve du droit applicable, vous pouvez avoir le droit d'accéder à vos Données personnelles, de les corriger, mettre à jour, supprimer, restreindre, de vous opposer à leur traitement ou d'en demander la portabilité, ainsi que de retirer votre consentement lorsque le traitement est fondé sur celui-ci.",
      "Vous pouvez également avoir le droit de refuser les communications marketing et, lorsque cela s'applique, de déposer une plainte auprès d'une autorité de contrôle ou de régulation si vous estimez que vos Données personnelles ont été traitées de manière illégale.",
    ],
    [
      "Les enfants de moins de 13 ans ne sont pas autorisés à utiliser notre Service, sauf si la loi applicable le permet expressément. Si vous vous trouvez dans une juridiction imposant un âge plus élevé pour qu'un consentement au traitement des données soit valide, vous ne pouvez utiliser le Service que si vous avez dépassé cet âge ou si un consentement parental valable a été fourni lorsque cela est permis par la loi.",
      "Si vous êtes parent ou tuteur et pensez qu'un enfant nous a fourni des Données personnelles en violation de la présente Politique, veuillez nous contacter afin que nous puissions enquêter et prendre les mesures appropriées.",
    ],
    [
      "Nous nous réservons le droit de modifier ou d'amender cette Politique de confidentialité à tout moment en publiant la version révisée sur notre site web ou nos applications. En cas de changement ou d'ajout à la présente Politique, nous pouvons publier ces changements sur le site ou sous une autre forme raisonnable pour examen.",
      "Chaque version de la présente Politique sera identifiée par sa date d'entrée en vigueur. Votre utilisation continue du Service après la date d'effet de toute modification de cette Politique de confidentialité sera considérée comme votre accord avec les conditions modifiées, dans la mesure permise par la loi.",
    ],
  ],
  it: [
    [
      "Rispettiamo la tua privacy e ci impegniamo a proteggere i tuoi Dati personali nel rispetto della normativa applicabile. Questo impegno è coerente con il nostro desiderio di tenerti informato, riconoscere i tuoi diritti in materia di privacy e spiegare come le informazioni vengono raccolte, utilizzate, condivise, archiviate e protette nei servizi di Creation Health.",
      "Ai fini della presente Informativa, Creation Health, compresi Astrology Today e LIFESPACE ove applicabili, agisce come titolare del trattamento dei Dati personali raccolti tramite il Servizio ed è responsabile di garantire che tale trattamento sia conforme alla normativa applicabile in materia di protezione dei dati.",
    ],
    [
      "Trattiamo i Dati personali secondo principi di correttezza, liceità, limitazione delle finalità, minimizzazione dei dati, accuratezza e sicurezza. Cerchiamo di trattare i Dati personali solo per finalità specifiche e legittime e solo nella misura pertinente e necessaria rispetto a tali finalità.",
      "Adottiamo inoltre misure ragionevoli per mantenere i Dati personali accurati, completi e aggiornati, ma resta tua responsabilità informarci di eventuali cambiamenti nelle informazioni che ci hai fornito.",
    ],
    [
      "Per proteggerci da accessi non autorizzati ai Dati personali, i Dati personali elettronici possono essere conservati su sistemi protetti da architetture di rete sicure, controlli di accesso, firewall, backup e misure di sicurezza correlate progettate per ridurre le conseguenze di perdita, distruzione o corruzione accidentale.",
      "Impieghiamo inoltre garanzie fisiche e amministrative ragionevoli per proteggere i Dati personali. Sebbene utilizziamo sforzi commercialmente ragionevoli, nessun sistema di sicurezza è perfetto, e non possiamo né garantiamo una sicurezza assoluta né assumiamo responsabilità per divulgazioni dovute a errori di trasmissione, accessi non autorizzati di terzi o eventi al di fuori del nostro ragionevole controllo.",
    ],
    [
      "Laddove siano disponibili impostazioni di account, profilo, notifiche o abbonamento, potresti poter accedere, scaricare, consultare, aggiornare, correggere o modificare alcuni Dati personali e le preferenze correlate direttamente tramite le tue impostazioni.",
      "Potresti inoltre poter controllare alcune attività di trattamento, come le comunicazioni di marketing, determinate scelte relative ai cookie o le preferenze di notifica, attraverso le impostazioni e i controlli messi a disposizione dal Servizio o contattandoci tramite i metodi indicati di seguito.",
    ],
    [
      "Quando visiti il nostro Servizio, alcune informazioni tecniche e non direttamente identificative possono essere registrate automaticamente attraverso il normale funzionamento delle tecnologie Internet. Ciò può includere tipo di browser, sistema operativo, tipo di dispositivo, indirizzo IP, lingua, informazioni di provenienza, eventi di utilizzo e altri identificatori tecnici necessari per agevolare le nostre operazioni e mantenere un'esperienza efficiente.",
      "Parte di queste informazioni può essere raccolta utilizzando cookie e tecnologie di tracciamento simili. Possiamo utilizzare o condividere tali informazioni registrate automaticamente per finalità di sicurezza, analisi, miglioramento del prodotto, statistiche aggregate generali, risposta a emergenze quando opportuno o come altrimenti richiesto dalla legge.",
    ],
    [
      "Possiamo richiederti informazioni personali identificative in una varietà di contesti, ad esempio quando completi un modulo di registrazione, ti iscrivi a una newsletter, crei un account, acquisti prodotti o servizi, contatti il supporto, rispondi a un sondaggio, invii contenuti o interagisci in altro modo con Astrology Today, LIFESPACE o i servizi correlati di Creation Health.",
      "A seconda della funzionalità coinvolta, tali Dati personali possono includere il tuo nome, nome utente, indirizzo e-mail, informazioni relative al pagamento, dettagli di fatturazione, preferenze dell'account, messaggi di supporto, contenuti inviati, risposte a sondaggi o altre informazioni che scegli di fornire.",
    ],
    [
      "Possiamo trattare i tuoi Dati personali per completare la registrazione dell'account, fornire accesso ai nostri servizi, elaborare i pagamenti, evadere ordini, gestire abbonamenti, fornire assistenza clienti, rispondere a richieste, inviare newsletter o comunicazioni promozionali, migliorare i nostri prodotti e servizi, amministrare sondaggi, concorsi o offerte speciali e adempiere a obblighi di legge.",
      "A seconda dell'attività, le nostre basi giuridiche di trattamento possono includere necessità contrattuale, interessi legittimi, consenso o obbligo legale. Quando non avremo più un'esigenza commerciale legittima continuativa o un obbligo legale di conservare i Dati personali, li elimineremo, renderemo anonimi o li isoleremo in modo sicuro, a seconda dei casi.",
    ],
    [
      "Se sottoscrivi un abbonamento a pagamento o acquisti un prodotto o servizio a pagamento tramite Astrology Today, LIFESPACE o altre offerte di Creation Health, possiamo utilizzare i tuoi Dati personali per gestire il tuo abbonamento, elaborare i pagamenti, amministrare la fatturazione, completare gli acquisti, fornire ricevute e supportare le esigenze del servizio clienti.",
      "Le informazioni di pagamento possono essere trattate da noi e da processori di pagamento di terze parti, fornitori di fatturazione, gestori di piattaforme applicative o partner transazionali coinvolti nel completamento della transazione. Non utilizziamo i dati di pagamento per finalità promozionali non correlate e li condividiamo solo nella misura necessaria per operare e supportare la transazione.",
    ],
    [
      "Possiamo utilizzare i Dati personali e altre informazioni non direttamente identificative per aggiornarti su prodotti, servizi, abbonamenti, funzionalità, newsletter e offerte che potrebbero interessarti, nel rispetto della legge applicabile e di eventuali requisiti di consenso. Hai sempre la possibilità di rinunciare alle comunicazioni di marketing non essenziali.",
      "Possiamo inoltre raccogliere, conservare e analizzare dati di utilizzo, di prodotto e di eventi tecnici per migliorare la qualità del servizio, comprendere gli interessi degli utenti, mantenere le prestazioni, generare statistiche d'uso, personalizzare l'esperienza utente e sviluppare nuovi prodotti e servizi.",
    ],
    [
      "Se il Servizio include bacheche, chat room, commenti, profili pubblici o altre funzionalità di comunità, sei l'unico responsabile del contenuto che divulghi volontariamente in tali aree. Le informazioni divulgate pubblicamente possono essere lette, raccolte e utilizzate da altri utenti e possono causare comunicazioni indesiderate.",
      "Ci riserviamo il diritto di moderare le aree pubbliche e di limitare o terminare l'accesso laddove necessario per far rispettare le nostre regole, proteggere gli utenti o proteggere il Servizio e i suoi diritti.",
    ],
    [
      "Possiamo divulgare Dati personali a società affiliate, fornitori, prestatori di servizi, partner cloud e infrastrutturali, partner di pagamento e fatturazione, fornitori di analisi, fornitori di supporto, revisori, consulenti legali e altri responsabili del trattamento che ci assistono nella gestione di Astrology Today, LIFESPACE e dei servizi correlati di Creation Health.",
      "Possiamo inoltre divulgare Dati personali a organi competenti di polizia, autorità di regolamentazione, tribunali, controparti transazionali in relazione a una fusione o a un trasferimento d'impresa, o ad altri terzi laddove la divulgazione sia richiesta dalla legge o ragionevolmente necessaria per stabilire, esercitare o difendere diritti legali.",
    ],
    [
      "Il Servizio può contenere collegamenti a siti web o servizi gestiti da società o persone esterne a Creation Health. Non dovresti presumere che le politiche o pratiche di privacy di tali siti terzi siano le stesse seguite da noi.",
      "I visitatori di tali siti terzi dovrebbero fare riferimento alle rispettive politiche e pratiche sulla privacy. Non approviamo e non siamo responsabili del contenuto, della sicurezza o delle pratiche sulla privacy di siti terzi non sotto il nostro controllo.",
    ],
    [
      "Fatti salvi i diritti previsti dalla legge applicabile, potresti avere il diritto di accedere ai tuoi Dati personali, correggerli, aggiornarli, cancellarli, limitarne il trattamento, opporti, richiederne la portabilità e revocare il consenso laddove il trattamento sia basato su di esso.",
      "Potresti inoltre avere il diritto di rinunciare alle comunicazioni di marketing e, ove applicabile, di presentare reclamo a un'autorità di controllo o regolamentazione se ritieni che i tuoi Dati personali siano stati trattati illecitamente.",
    ],
    [
      "I minori di 13 anni non sono autorizzati a utilizzare il nostro Servizio salvo ove la legge applicabile lo consenta espressamente. Se ti trovi in una giurisdizione che prevede una soglia d'età più elevata per un consenso valido al trattamento dei dati, puoi utilizzare il Servizio solo se hai superato tale età o se è stato fornito un valido consenso genitoriale ove consentito dalla legge.",
      "Se sei un genitore o tutore e ritieni che un minore ci abbia fornito Dati personali in violazione della presente Informativa, ti preghiamo di contattarci affinché possiamo indagare e adottare i provvedimenti appropriati.",
    ],
    [
      "Ci riserviamo il diritto di modificare o emendare la presente Informativa sulla privacy in qualsiasi momento pubblicando la versione rivista sul nostro sito web o nelle nostre app. Se vi sono modifiche o aggiunte alla presente Informativa, possiamo pubblicarle sul sito o in un altro formato ragionevole per la consultazione.",
      "Ogni versione della presente Informativa sarà identificata dalla relativa data di efficacia. Il tuo uso continuato del Servizio dopo la data di efficacia di qualsiasi modifica alla presente Informativa sulla privacy sarà considerato come tuo consenso ai termini modificati nella misura consentita dalla legge.",
    ],
  ],
  es: [
    [
      "Respetamos su privacidad y estamos comprometidos con la protección de sus Datos personales en cumplimiento de la legislación aplicable. Este compromiso es coherente con nuestro deseo de mantenerle informado, reconocer sus derechos de privacidad y explicar cómo se recopila, utiliza, comparte, almacena y protege la información en los servicios de Creation Health.",
      "A efectos de esta Política, Creation Health, incluidos Astrology Today y LIFESPACE cuando corresponda, actúa como responsable del tratamiento de los Datos personales recopilados a través del Servicio y es responsable de garantizar que dicho tratamiento cumpla con la normativa aplicable de protección de datos.",
    ],
    [
      "Tratamos los Datos personales conforme a los principios de equidad, licitud, limitación de la finalidad, minimización de datos, exactitud y seguridad. Procuramos tratar los Datos personales solo para fines específicos y legítimos y solo en la medida pertinente y necesaria para dichos fines.",
      "También adoptamos medidas razonables para mantener los Datos personales exactos, completos y actualizados, pero sigue siendo su responsabilidad informarnos de cualquier cambio en la información que nos haya proporcionado.",
    ],
    [
      "Para protegernos contra el acceso no autorizado a los Datos personales, los Datos personales electrónicos pueden mantenerse en sistemas protegidos mediante arquitecturas de red seguras, controles de acceso, cortafuegos, copias de seguridad y medidas de seguridad relacionadas diseñadas para reducir las consecuencias de una pérdida, destrucción o corrupción accidental.",
      "También empleamos salvaguardas físicas y administrativas razonables para proteger los Datos personales. Aunque utilizamos esfuerzos comercialmente razonables, ningún sistema de seguridad es perfecto y no podemos ni garantizamos una seguridad absoluta ni asumimos responsabilidad por divulgaciones derivadas de errores de transmisión, acceso no autorizado de terceros o hechos fuera de nuestro control razonable.",
    ],
    [
      "Cuando estén disponibles configuraciones de cuenta, perfil, notificaciones o suscriptor, usted puede tener la posibilidad de acceder, descargar, revisar, actualizar, corregir o modificar determinados Datos personales y preferencias relacionadas directamente a través de su configuración.",
      "También puede tener la posibilidad de controlar determinadas actividades de tratamiento, como comunicaciones de marketing, ciertas elecciones relacionadas con cookies o preferencias de notificación, mediante la configuración y los controles puestos a disposición por el Servicio o poniéndose en contacto con nosotros a través de los medios indicados más abajo.",
    ],
    [
      "Cuando visita nuestro Servicio, cierta información técnica y no directamente identificativa puede registrarse automáticamente mediante el funcionamiento normal de las tecnologías de Internet. Esto puede incluir el tipo de navegador, el sistema operativo, el tipo de dispositivo, la dirección IP, el idioma, la información de referencia, los eventos de uso y otros identificadores técnicos necesarios para facilitar nuestras operaciones y mantener una experiencia eficiente.",
      "Parte de esta información puede recopilarse mediante cookies y tecnologías de seguimiento similares. Podemos utilizar o compartir dicha información registrada automáticamente con fines de seguridad, análisis, mejora del producto, estadísticas generales agregadas, respuesta a emergencias cuando corresponda o según lo exija la ley.",
    ],
    [
      "Podemos solicitarle información de identificación personal en diversos contextos, por ejemplo cuando completa un formulario de registro, se suscribe a un boletín, crea una cuenta, compra productos o servicios, contacta con soporte, responde a una encuesta, envía contenido o interactúa de cualquier otro modo con Astrology Today, LIFESPACE o servicios relacionados de Creation Health.",
      "Dependiendo de la función implicada, dichos Datos personales pueden incluir su nombre, nombre de usuario, dirección de correo electrónico, información relacionada con pagos, datos de facturación, preferencias de cuenta, mensajes enviados a soporte, contenido enviado, respuestas a encuestas u otra información que elija proporcionar.",
    ],
    [
      "Podemos tratar sus Datos personales para completar el registro de cuentas, proporcionar acceso a nuestros servicios, procesar pagos, cumplir pedidos, gestionar suscripciones, proporcionar atención al cliente, responder consultas, enviar boletines o comunicaciones promocionales, mejorar nuestros productos y servicios, administrar encuestas, concursos u ofertas especiales y cumplir obligaciones legales.",
      "Dependiendo de la actividad, nuestras bases jurídicas para el tratamiento pueden incluir necesidad contractual, intereses legítimos, consentimiento u obligación legal. Cuando ya no tengamos una necesidad empresarial legítima continua ni una obligación legal de conservar los Datos personales, los eliminaremos, anonimizaremos o aislaremos de forma segura según corresponda.",
    ],
    [
      "Si se suscribe de forma pagada o compra cualquier producto o servicio de pago a través de Astrology Today, LIFESPACE u otras ofertas relacionadas de Creation Health, podemos utilizar sus Datos personales para gestionar su suscripción, procesar pagos, administrar la facturación, tramitar compras, proporcionar recibos y atender necesidades del servicio al cliente.",
      "La información de pago puede ser tratada por nosotros y por procesadores de pago externos, proveedores de facturación, operadores de plataformas de aplicaciones o socios transaccionales implicados en la operación. No utilizamos los datos de pago para fines promocionales no relacionados y solo los compartimos en la medida necesaria para operar y respaldar la transacción.",
    ],
    [
      "Podemos utilizar Datos personales y otra información no directamente identificativa para informarle sobre productos, servicios, suscripciones, funciones, boletines y ofertas que puedan ser de su interés, con sujeción a la legislación aplicable y a cualquier requisito de consentimiento. Siempre tiene la opción de rechazar las comunicaciones de marketing no esenciales.",
      "También podemos recopilar, almacenar y analizar datos de uso, producto y eventos técnicos para mejorar la calidad del servicio, comprender los intereses de los usuarios, mantener el rendimiento, generar estadísticas de uso, personalizar la experiencia del usuario y desarrollar nuevos productos y servicios.",
    ],
    [
      "Si el Servicio incluye foros, salas de chat, comentarios, perfiles públicos u otras funciones comunitarias, usted es el único responsable del contenido que divulgue voluntariamente en dichas áreas. La información divulgada públicamente puede ser leída, recopilada y utilizada por otros usuarios y puede dar lugar a comunicaciones no solicitadas.",
      "Nos reservamos el derecho de moderar áreas públicas y de restringir o terminar el acceso cuando sea necesario para hacer cumplir nuestras normas, proteger a los usuarios o proteger el Servicio y sus derechos.",
    ],
    [
      "Podemos divulgar Datos personales a afiliadas, proveedores, prestadores de servicios, socios de nube e infraestructura, socios de facturación y pagos, proveedores de analítica, proveedores de soporte, auditores, asesores jurídicos y otros encargados del tratamiento que nos ayuden a operar Astrology Today, LIFESPACE y los servicios relacionados de Creation Health.",
      "También podemos divulgar Datos personales a organismos competentes de aplicación de la ley, reguladores, tribunales, contrapartes transaccionales en relación con una fusión o transferencia empresarial, u otros terceros cuando la divulgación sea exigida por la ley o razonablemente necesaria para establecer, ejercer o defender derechos legales.",
    ],
    [
      "El Servicio puede contener enlaces a sitios web o servicios operados por empresas o personas fuera de Creation Health. No debe suponer que las políticas o prácticas de privacidad de dichos sitios de terceros sean las mismas que las que seguimos nosotros.",
      "Los visitantes de dichos sitios de terceros deben consultar sus respectivas políticas y prácticas de privacidad. No respaldamos ni somos responsables del contenido, la seguridad o las prácticas de privacidad de sitios de terceros que no estén bajo nuestro control.",
    ],
    [
      "Con sujeción a la legislación aplicable, puede tener derecho a acceder, corregir, actualizar, eliminar, restringir, oponerse o solicitar la portabilidad de sus Datos personales, así como a retirar el consentimiento cuando el tratamiento se base en dicho consentimiento.",
      "También puede tener derecho a excluirse de las comunicaciones de marketing y, cuando corresponda, a presentar una reclamación ante una autoridad de control o reguladora si considera que sus Datos personales han sido tratados de manera ilícita.",
    ],
    [
      "No se permite que menores de 13 años utilicen nuestro Servicio salvo que la legislación aplicable lo permita expresamente. Si se encuentra en una jurisdicción con un umbral de edad más alto para un consentimiento válido al tratamiento de datos, solo podrá utilizar el Servicio si supera esa edad o si se ha proporcionado un consentimiento parental válido cuando la ley lo permita.",
      "Si es padre, madre o tutor y cree que un menor nos ha proporcionado Datos personales en violación de esta Política, póngase en contacto con nosotros para que podamos investigar y adoptar las medidas oportunas.",
    ],
    [
      "Nos reservamos el derecho de modificar o enmendar esta Política de privacidad en cualquier momento publicando la versión revisada en nuestro sitio web o aplicaciones. Si existen cambios o adiciones a esta Política, podemos publicar dichos cambios en el sitio o en otro formato razonable para su revisión.",
      "Cada versión de esta Política estará identificada por su fecha de entrada en vigor. Su uso continuado del Servicio después de la fecha de vigencia de cualquier modificación de esta Política de privacidad se considerará su aceptación de los términos modificados en la medida permitida por la ley.",
    ],
  ],
  zh: [
    ["我们尊重您的隐私，并承诺依照适用法律保护您的个人数据。本政策说明 Creation Health（包括 Astrology Today 与 LIFESPACE）如何收集、使用、共享、保存和保护通过本服务获得的信息，以及我们在适用数据保护法律下作为相关个人数据控制者所承担的责任。"],
    ["我们依据公平、合法、目的限制、数据最少化、准确性与安全性原则处理个人数据，并仅在特定、正当且必要的范围内使用这些数据；同时，我们会采取合理措施保持资料准确完整，但您也有责任及时告知我们您已提供信息的变更。"],
    ["为防止未经授权访问个人数据，电子个人数据可能存储于受安全网络架构、访问控制、防火墙、备份及相关措施保护的系统中；我们亦采用合理的实体与管理保障，但任何安全系统都并非绝对完美，因此无法保证绝对安全。"],
    ["当账户、个人资料、通知或订阅设置可用时，您通常可以在相关设置中访问、查看、下载、更新、更正或修改部分个人数据与偏好；您也可以通过服务提供的控制项或按照本政策所列方式联系我们，以管理营销通信、通知偏好及部分与 Cookie 相关的处理活动。"],
    ["当您访问本服务时，某些技术性及非直接识别性信息可能会因互联网技术的正常运行而被自动记录，例如浏览器类型、操作系统、设备类型、IP 地址、语言、来源信息和使用事件；这类信息可能通过 Cookie 或类似技术收集，并可用于安全、分析、产品改进、汇总统计、紧急响应或法律要求的用途。"],
    ["在注册账户、订阅通讯、购买产品或服务、联系支持、回答调查、提交内容或以其他方式与 Astrology Today、LIFESPACE 或 Creation Health 相关服务互动时，我们可能会请求您提供个人数据；这些数据可能包括姓名、用户名、电子邮箱、支付或账单信息、账户偏好、支持消息、提交内容及您自愿提供的其他信息。"],
    ["我们可能使用您的个人数据来完成账户注册、提供服务访问、处理付款、履行订单、管理订阅、提供客户支持、回复咨询、发送通讯或促销信息、改进产品与服务、管理调查或特别活动，以及履行法律义务；根据具体活动，处理依据可能包括合同必要性、合法利益、同意或法律义务。"],
    ["如果您通过 Astrology Today、LIFESPACE 或 Creation Health 的相关服务购买付费产品或订阅服务，我们可能会使用您的个人数据来管理订阅、处理付款、执行账单、完成订单、发送收据并提供客户支持；支付信息也可能由第三方支付处理商、账单提供商、应用平台或交易合作方在必要范围内处理。"],
    ["我们可能会使用个人数据及其他非直接识别信息，在适用法律允许且符合相关同意要求的情况下，向您发送您可能感兴趣的产品、服务、功能、订阅、通讯和优惠信息；同时，我们也可能分析使用数据和技术事件，以提升服务质量、了解用户兴趣、保持性能、生成统计数据并开发新产品与服务。"],
    ["如果本服务包含留言板、聊天室、评论区、公开个人资料或其他社区功能，您须自行对在这些区域自愿披露的内容负责，因为这些公开信息可能被其他用户读取、收集和使用，并可能导致您收到未经请求的联系；我们保留在必要时对公开区域进行管理、限制或终止访问的权利。"],
    ["我们可能会将个人数据披露给关联公司、供应商、服务提供商、云和基础设施合作方、支付和账单合作方、分析供应商、支持服务商、审计人员、法律顾问及其他帮助我们运营服务的处理方；在法律要求、保护合法权益或涉及合并、收购、业务转让等交易时，我们也可能向执法机构、监管机关、法院或交易对手披露相关数据。"],
    ["本服务可能包含链接至由 Creation Health 之外的公司或个人运营的网站或服务。对于这些第三方网站的内容、安全性或隐私做法，我们不予认可亦不承担责任，访问者应自行查阅其各自的隐私政策与相关条款。"],
    ["在适用法律允许的范围内，您可能享有访问、更正、更新、删除、限制处理、反对处理或请求数据可携权，以及在基于同意处理时撤回同意的权利；您也可能有权拒绝接收营销通信，并在认为个人数据被非法处理时向相关监管机构提出申诉。"],
    ["除非适用法律另有明确允许，13 岁以下儿童不得使用本服务；若您所在司法辖区对有效同意有更高年龄门槛，则您只有在达到该年龄，或法律允许时已获得有效父母或监护人同意的情况下方可使用本服务。若您认为儿童违反本政策向我们提供了个人数据，请联系我们，以便我们调查并采取适当措施。"],
    ["我们保留随时通过在网站或应用中发布修订版来修改本隐私政策的权利。每一版本都会标明生效日期；在修订生效后继续使用本服务，将在法律允许范围内被视为您接受更新后的条款。"],
  ],
  ja: [
    ["当社はお客様のプライバシーを尊重し、適用法令に従って個人データを保護することに努めています。本ポリシーは、Creation Health（必要に応じて Astrology Today および LIFESPACE を含みます）が本サービスを通じて収集した情報をどのように取得、利用、共有、保存、保護するか、また関連する個人データの管理者としてどのような責任を負うかを説明するものです。"],
    ["当社は、公正性、適法性、目的限定、データ最小化、正確性および安全性の原則に従って個人データを処理し、特定された正当な目的に必要な範囲でのみ利用するよう努めます。また、情報を正確かつ最新の状態に保つため合理的な措置を講じますが、お客様ご自身にも提供済み情報の変更を当社へ通知する責任があります。"],
    ["不正アクセスから個人データを保護するため、電子的な個人データは、安全なネットワーク構成、アクセス制御、ファイアウォール、バックアップその他の保護措置を備えたシステム上で管理される場合があります。もっとも、当社は合理的な努力を行うものの、完全無欠のセキュリティは存在せず、絶対的な安全を保証するものではありません。"],
    ["アカウント、プロフィール、通知、購読設定などの機能が提供されている場合、お客様はその設定を通じて一定の個人データや関連する希望事項を閲覧、更新、訂正、変更またはダウンロードできることがあります。また、マーケティング通知、Cookie に関連する選択、通知設定などの一部処理についても、サービス上の管理機能または本ポリシー記載の方法で当社に連絡することにより調整できます。"],
    ["本サービスを利用する際、ブラウザの種類、OS、端末種別、IP アドレス、言語、参照元情報、利用イベントなど、直接個人を特定しない技術情報がインターネット技術の通常の動作により自動的に記録されることがあります。これらの情報は Cookie や類似技術を用いて取得され、安全確保、分析、製品改善、統計作成、緊急対応または法令遵守のために利用される場合があります。"],
    ["アカウント登録、ニュースレター購読、商品・サービスの購入、サポートへの問い合わせ、アンケート回答、コンテンツ送信、または Astrology Today、LIFESPACE もしくは関連する Creation Health サービスとのその他のやり取りを行う際、当社は個人データの提供をお願いすることがあります。これには氏名、ユーザー名、メールアドレス、支払いまたは請求情報、アカウント設定、サポートメッセージ、投稿内容などが含まれ得ます。"],
    ["当社は、アカウント登録の完了、サービス提供、支払い処理、注文履行、購読管理、顧客サポート、問い合わせ対応、ニュースレターやプロモーション配信、製品・サービス改善、調査や特別企画の運営、法的義務の履行などのために個人データを利用することがあります。処理根拠は、契約上の必要性、正当な利益、同意、または法的義務である場合があります。"],
    ["Astrology Today、LIFESPACE または関連する Creation Health サービスを通じて有料商品や有料購読をご利用になる場合、当社は購読管理、支払い処理、請求管理、購入履行、領収書発行およびサポート提供のために個人データを利用することがあります。支払い情報は、必要に応じて第三者決済事業者、請求代行会社、アプリプラットフォーム運営者または取引パートナーによって処理されることがあります。"],
    ["当社は、適用法令および必要な同意要件に従い、お客様に関連性があると思われる商品、サービス、機能、購読、ニュースレター、オファーについてご案内するために個人データおよび非特定情報を利用する場合があります。また、利用状況や技術イベントのデータを分析し、サービス品質の向上、利用傾向の把握、パフォーマンス維持、統計作成、体験の最適化、新機能開発に役立てることがあります。"],
    ["本サービスに掲示板、チャットルーム、コメント、公開プロフィール、その他のコミュニティ機能が含まれる場合、そこでお客様が自発的に開示した内容についてはお客様ご自身が責任を負います。公開された情報は他の利用者に閲覧・収集・利用される可能性があり、望まない連絡につながることもあります。当社は、規則の執行、利用者保護、またはサービス保護のために、公開領域を管理しアクセスを制限または終了する権利を留保します。"],
    ["当社は、関連会社、ベンダー、サービス提供者、クラウドおよびインフラパートナー、決済・請求パートナー、分析事業者、サポート提供者、監査人、法律顧問その他サービス運営を支援する処理受託者に個人データを開示する場合があります。また、法令上必要な場合、法的権利の確立・行使・防御のため合理的に必要な場合、または合併・事業譲渡等の取引に関連する場合には、法執行機関、規制当局、裁判所、取引相手方に開示することがあります。"],
    ["本サービスには、Creation Health 以外の企業または個人が運営するウェブサイトやサービスへのリンクが含まれることがあります。これら第三者サイトのプライバシー慣行が当社と同一であるとは限らず、利用者はそれぞれのプライバシーポリシーを確認する必要があります。当社は、当社の管理外にある第三者サイトの内容、安全性、プライバシー慣行について責任を負いません。"],
    ["適用法令に従い、お客様はご自身の個人データへのアクセス、訂正、更新、削除、処理制限、処理への異議、データポータビリティの請求、ならびに同意に基づく処理についての同意撤回を求める権利を有する場合があります。また、マーケティング連絡の停止を選択する権利や、違法な取扱いがあったと考える場合に監督機関へ苦情を申し立てる権利を有する場合があります。"],
    ["適用法令で明示的に許可される場合を除き、13歳未満の児童は本サービスを利用できません。お住まいの法域で有効なデータ処理同意により高い年齢要件がある場合、その年齢に達しているか、法律上認められる範囲で有効な保護者同意がある場合にのみ利用できます。児童が本ポリシーに反して個人データを提供したとお考えの場合は、当社までご連絡ください。"],
    ["当社は、改訂版を当社ウェブサイトまたはアプリに掲載することにより、いつでも本プライバシーポリシーを変更または修正する権利を留保します。各版には発効日が記載され、変更後も本サービスの利用を継続した場合、法令で認められる範囲で改訂後の条件に同意したものとみなされます。"],
  ],
  hi: [
    ["हम आपकी गोपनीयता का सम्मान करते हैं और लागू कानून के अनुसार आपकी व्यक्तिगत जानकारी की रक्षा करने के लिए प्रतिबद्ध हैं। यह नीति बताती है कि Creation Health, तथा जहाँ लागू हो Astrology Today और LIFESPACE, सेवा के माध्यम से एकत्रित जानकारी को कैसे एकत्र, उपयोग, साझा, संग्रहीत और सुरक्षित करता है, और संबंधित व्यक्तिगत जानकारी के नियंत्रक के रूप में हमारी क्या भूमिका है।"],
    ["हम व्यक्तिगत जानकारी का प्रसंस्करण निष्पक्षता, वैधता, उद्देश्य-सीमा, डेटा-न्यूनतमकरण, शुद्धता और सुरक्षा के सिद्धांतों के अनुसार करते हैं। हम केवल विशिष्ट और वैध उद्देश्यों के लिए तथा उन्हीं सीमाओं तक डेटा का उपयोग करना चाहते हैं जो आवश्यक और प्रासंगिक हों; साथ ही हम यह अपेक्षा भी करते हैं कि आप हमें अपनी प्रदान की गई जानकारी में हुए परिवर्तनों के बारे में सूचित करें।"],
    ["अनधिकृत पहुँच से सुरक्षा के लिए इलेक्ट्रॉनिक व्यक्तिगत जानकारी सुरक्षित नेटवर्क संरचनाओं, एक्सेस नियंत्रणों, फ़ायरवॉल, बैकअप और संबंधित सुरक्षा उपायों से संरक्षित प्रणालियों पर रखी जा सकती है। हम युक्तिसंगत भौतिक और प्रशासनिक सुरक्षा भी अपनाते हैं, लेकिन कोई भी सुरक्षा प्रणाली पूर्ण नहीं होती और इसलिए हम पूर्ण सुरक्षा की गारंटी नहीं दे सकते।"],
    ["जहाँ खाता, प्रोफ़ाइल, सूचना या सदस्यता सेटिंग्स उपलब्ध होती हैं, वहाँ आप अपने कुछ व्यक्तिगत डेटा और संबंधित प्राथमिकताओं को सीधे देख, डाउनलोड, अपडेट, सही या संशोधित कर सकते हैं। आप विपणन संदेशों, कुछ कुकी-संबंधी विकल्पों या सूचना प्राथमिकताओं जैसी कुछ प्रसंस्करण गतिविधियों को सेवा में उपलब्ध नियंत्रणों या हमसे संपर्क करके भी नियंत्रित कर सकते हैं।"],
    ["जब आप हमारी सेवा का उपयोग करते हैं, तो कुछ तकनीकी और गैर-प्रत्यक्ष पहचान वाली जानकारी इंटरनेट तकनीकों के सामान्य संचालन के कारण स्वतः दर्ज हो सकती है, जैसे ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, डिवाइस प्रकार, IP पता, भाषा, रेफरल जानकारी और उपयोग घटनाएँ। यह जानकारी कुकीज़ और समान तकनीकों के माध्यम से एकत्र हो सकती है और सुरक्षा, विश्लेषण, उत्पाद सुधार, समेकित आँकड़ों या कानूनन आवश्यक उद्देश्यों के लिए उपयोग की जा सकती है।"],
    ["हम आपसे व्यक्तिगत पहचान योग्य जानकारी कई परिस्थितियों में मांग सकते हैं, जैसे खाता पंजीकरण, न्यूज़लेटर सदस्यता, उत्पाद या सेवा खरीद, सहायता से संपर्क, सर्वेक्षण का उत्तर, सामग्री जमा करना या Astrology Today, LIFESPACE या संबंधित Creation Health सेवाओं के साथ किसी अन्य प्रकार की सहभागिता। इस जानकारी में आपका नाम, उपयोगकर्ता नाम, ईमेल, भुगतान या बिलिंग विवरण, खाता प्राथमिकताएँ, सहायता संदेश और अन्य स्वैच्छिक रूप से साझा की गई जानकारी शामिल हो सकती है।"],
    ["हम आपकी व्यक्तिगत जानकारी का उपयोग खाता पंजीकरण पूरा करने, सेवाओं तक पहुँच प्रदान करने, भुगतानों को संसाधित करने, ऑर्डर पूरा करने, सदस्यता प्रबंधित करने, ग्राहक सहायता देने, प्रश्नों का उत्तर देने, प्रचार संदेश भेजने, उत्पादों और सेवाओं को बेहतर बनाने, सर्वेक्षण या विशेष प्रस्ताव चलाने तथा कानूनी दायित्वों को पूरा करने के लिए कर सकते हैं। प्रसंस्करण के कानूनी आधार में संविदात्मक आवश्यकता, वैध हित, सहमति या कानूनी दायित्व शामिल हो सकते हैं।"],
    ["यदि आप Astrology Today, LIFESPACE या Creation Health की संबंधित सेवाओं के माध्यम से कोई सशुल्क सदस्यता या सशुल्क उत्पाद लेते हैं, तो हम आपकी व्यक्तिगत जानकारी का उपयोग सदस्यता प्रबंधन, भुगतान संसाधन, बिलिंग, खरीद पूरी करने, रसीदें जारी करने और ग्राहक सहायता के लिए कर सकते हैं। भुगतान जानकारी आवश्यक सीमा तक तृतीय-पक्ष भुगतान प्रोसेसरों, बिलिंग प्रदाताओं, ऐप प्लेटफ़ॉर्म संचालकों या लेन-देन सहयोगियों द्वारा भी संसाधित की जा सकती है।"],
    ["हम आपकी रुचि के उत्पादों, सेवाओं, सुविधाओं, सदस्यताओं, न्यूज़लेटर्स और प्रस्तावों के बारे में सूचित करने के लिए, लागू कानून और सहमति आवश्यकताओं के अधीन, व्यक्तिगत जानकारी और अन्य गैर-प्रत्यक्ष पहचान वाली जानकारी का उपयोग कर सकते हैं। हम सेवा की गुणवत्ता सुधारने, उपयोगकर्ता रुचियों को समझने, प्रदर्शन बनाए रखने, आँकड़े तैयार करने और नई सेवाएँ विकसित करने के लिए उपयोग एवं तकनीकी डेटा का विश्लेषण भी कर सकते हैं।"],
    ["यदि सेवा में संदेश बोर्ड, चैट रूम, टिप्पणियाँ, सार्वजनिक प्रोफ़ाइल या अन्य सामुदायिक सुविधाएँ शामिल हैं, तो आप उन क्षेत्रों में स्वेच्छा से साझा की गई सामग्री के लिए स्वयं जिम्मेदार हैं। सार्वजनिक रूप से साझा की गई जानकारी अन्य उपयोगकर्ताओं द्वारा पढ़ी, एकत्रित और उपयोग की जा सकती है; आवश्यक होने पर हम नियम लागू करने, उपयोगकर्ताओं की रक्षा करने या सेवा की सुरक्षा हेतु ऐसे सार्वजनिक क्षेत्रों का संचालन या पहुँच प्रतिबंधित कर सकते हैं।"],
    ["हम व्यक्तिगत जानकारी को संबद्ध संस्थाओं, विक्रेताओं, सेवा प्रदाताओं, क्लाउड और अवसंरचना भागीदारों, भुगतान और बिलिंग भागीदारों, विश्लेषण प्रदाताओं, सहायता प्रदाताओं, ऑडिटरों, कानूनी सलाहकारों और अन्य प्रोसेसरों के साथ साझा कर सकते हैं जो Astrology Today, LIFESPACE और संबंधित सेवाओं के संचालन में हमारी सहायता करते हैं। कानूनी आवश्यकता, अधिकारों की रक्षा, या विलय/हस्तांतरण जैसी लेन-देन परिस्थितियों में हम इसे नियामक या अन्य संबंधित पक्षों के साथ भी साझा कर सकते हैं।"],
    ["सेवा में ऐसे वेबसाइटों या सेवाओं के लिंक हो सकते हैं जिन्हें Creation Health से बाहर की संस्थाएँ संचालित करती हैं। आपको यह मानकर नहीं चलना चाहिए कि उन तृतीय-पक्ष वेबसाइटों की गोपनीयता प्रथाएँ हमारी जैसी ही हैं; ऐसी वेबसाइटों पर जाने वाले उपयोगकर्ताओं को उनकी स्वयं की नीतियाँ देखनी चाहिए। हम अपने नियंत्रण से बाहर तृतीय-पक्ष सामग्री, सुरक्षा या गोपनीयता प्रथाओं के लिए जिम्मेदार नहीं हैं।"],
    ["लागू कानून के अधीन, आपको अपनी व्यक्तिगत जानकारी तक पहुँच, उसे सुधारने, अद्यतन करने, हटाने, सीमित करने, उसके प्रसंस्करण का विरोध करने, उसकी पोर्टेबिलिटी का अनुरोध करने तथा जहाँ प्रसंस्करण सहमति पर आधारित हो वहाँ सहमति वापस लेने का अधिकार हो सकता है। आपको गैर-आवश्यक विपणन संचार से बाहर निकलने और, जहाँ लागू हो, यह मानने पर शिकायत दर्ज करने का अधिकार भी हो सकता है कि आपकी जानकारी का अवैध रूप से प्रसंस्करण हुआ है।"],
    ["जब तक लागू कानून स्पष्ट रूप से अनुमति न दे, 13 वर्ष से कम आयु के बच्चों को हमारी सेवा का उपयोग करने की अनुमति नहीं है। यदि आपके अधिकार-क्षेत्र में वैध डेटा सहमति के लिए अधिक आयु सीमा लागू होती है, तो सेवा का उपयोग केवल तब किया जा सकता है जब वह आयु पूरी हो या कानून द्वारा अनुमति दिए जाने पर वैध अभिभावकीय सहमति प्राप्त हो। यदि आपको लगता है कि किसी बच्चे ने इस नीति का उल्लंघन करते हुए हमें व्यक्तिगत जानकारी दी है, तो कृपया हमसे संपर्क करें।"],
    ["हम अपनी वेबसाइट या ऐप पर संशोधित संस्करण प्रकाशित करके किसी भी समय इस गोपनीयता नीति को बदलने या संशोधित करने का अधिकार सुरक्षित रखते हैं। प्रत्येक संस्करण उसकी प्रभावी तिथि के साथ चिह्नित होगा, और उस तिथि के बाद सेवा का आपका निरंतर उपयोग, कानून द्वारा अनुमति प्राप्त सीमा तक, संशोधित शर्तों की स्वीकृति माना जाएगा।"],
  ],
  ur: [
    ["ہم آپ کی رازداری کا احترام کرتے ہیں اور قابلِ اطلاق قانون کے مطابق آپ کے ذاتی ڈیٹا کے تحفظ کے پابند ہیں۔ یہ پالیسی واضح کرتی ہے کہ Creation Health، اور جہاں مناسب ہو Astrology Today اور LIFESPACE، سروس کے ذریعے حاصل کی گئی معلومات کو کیسے جمع، استعمال، شیئر، محفوظ اور محفوظ رکھتا ہے، اور متعلقہ ذاتی ڈیٹا کے کنٹرولر کے طور پر ہماری کیا ذمہ داریاں ہیں۔"],
    ["ہم ذاتی ڈیٹا کو انصاف، قانونی حیثیت، مقصد کی تحدید، کم سے کم ڈیٹا، درستگی اور سیکیورٹی کے اصولوں کے مطابق پروسیس کرتے ہیں۔ ہم کوشش کرتے ہیں کہ ذاتی ڈیٹا صرف واضح اور جائز مقاصد کے لیے اور اتنی ہی حد تک استعمال ہو جتنی ان مقاصد کے لیے ضروری ہو، جبکہ آپ پر بھی یہ ذمہ داری عائد ہوتی ہے کہ آپ ہمیں اپنی فراہم کردہ معلومات میں تبدیلی سے آگاہ کریں۔"],
    ["غیر مجاز رسائی سے تحفظ کے لیے الیکٹرانک ذاتی ڈیٹا محفوظ نیٹ ورک آرکیٹیکچر، ایکسیس کنٹرولز، فائر والز، بیک اپس اور متعلقہ حفاظتی اقدامات سے محفوظ سسٹمز پر رکھا جا سکتا ہے۔ ہم مناسب جسمانی اور انتظامی حفاظتی تدابیر بھی اختیار کرتے ہیں، لیکن کوئی بھی سیکیورٹی نظام مکمل نہیں ہوتا، اس لیے ہم مکمل تحفظ کی ضمانت نہیں دے سکتے۔"],
    ["جہاں اکاؤنٹ، پروفائل، نوٹیفکیشن یا سبسکرائبر سیٹنگز دستیاب ہوں، آپ اپنے کچھ ذاتی ڈیٹا اور متعلقہ ترجیحات کو انہی سیٹنگز کے ذریعے دیکھ، ڈاؤن لوڈ، اپ ڈیٹ، درست یا تبدیل کر سکتے ہیں۔ آپ مارکیٹنگ پیغامات، بعض کوکی سے متعلق انتخاب اور نوٹیفکیشن ترجیحات جیسی سرگرمیوں کو بھی سروس میں فراہم کردہ کنٹرولز یا ہم سے رابطہ کر کے منظم کر سکتے ہیں۔"],
    ["جب آپ ہماری سروس استعمال کرتے ہیں تو بعض تکنیکی اور غیر براہِ راست شناختی معلومات انٹرنیٹ ٹیکنالوجی کے معمول کے عمل کے تحت خودکار طور پر ریکارڈ ہو سکتی ہیں، جیسے براؤزر کی قسم، آپریٹنگ سسٹم، ڈیوائس کی قسم، IP ایڈریس، زبان، ریفرل معلومات اور استعمال کے واقعات۔ یہ معلومات کوکیز اور مشابہ ٹریکنگ ٹیکنالوجی کے ذریعے اکٹھی ہو سکتی ہیں اور سیکیورٹی، تجزیات، پروڈکٹ میں بہتری، مجموعی اعداد و شمار یا قانونی ضروریات کے لیے استعمال کی جا سکتی ہیں۔"],
    ["ہم آپ سے مختلف حالات میں ذاتی طور پر شناختی معلومات طلب کر سکتے ہیں، مثلاً اکاؤنٹ رجسٹریشن، نیوز لیٹر سبسکرپشن، مصنوعات یا خدمات کی خریداری، سپورٹ سے رابطہ، سروے میں شرکت، مواد جمع کرانے یا Astrology Today، LIFESPACE یا Creation Health کی متعلقہ خدمات کے ساتھ دیگر تعاملات کے دوران۔ اس میں آپ کا نام، صارف نام، ای میل، ادائیگی یا بلنگ کی تفصیلات، اکاؤنٹ ترجیحات اور دیگر فراہم کردہ معلومات شامل ہو سکتی ہیں۔"],
    ["ہم آپ کے ذاتی ڈیٹا کو اکاؤنٹ رجسٹریشن مکمل کرنے، خدمات تک رسائی دینے، ادائیگیاں پروسیس کرنے، آرڈرز مکمل کرنے، سبسکرپشنز کا انتظام کرنے، کسٹمر سپورٹ فراہم کرنے، سوالات کے جواب دینے، پروموشنل پیغامات بھیجنے، مصنوعات اور خدمات کو بہتر بنانے، سروے یا خصوصی پیشکشوں کا انتظام کرنے اور قانونی ذمہ داریوں کو پورا کرنے کے لیے استعمال کر سکتے ہیں۔ اس پروسیسنگ کی قانونی بنیاد میں معاہداتی ضرورت، جائز مفاد، رضامندی یا قانونی ذمہ داری شامل ہو سکتی ہے۔"],
    ["اگر آپ Astrology Today، LIFESPACE یا Creation Health کی متعلقہ خدمات کے ذریعے کوئی بامعاوضہ سبسکرپشن یا ادا شدہ پروڈکٹ حاصل کرتے ہیں، تو ہم آپ کے ذاتی ڈیٹا کو سبسکرپشن مینجمنٹ، ادائیگیوں کی پروسیسنگ، بلنگ، خریداری مکمل کرنے، رسید فراہم کرنے اور کسٹمر سپورٹ کے لیے استعمال کر سکتے ہیں۔ ادائیگی کی معلومات ضرورت کی حد تک تیسرے فریق کے ادائیگی پروسیسرز، بلنگ فراہم کنندگان، ایپ پلیٹ فارم آپریٹرز یا لین دین کے شراکت داروں کے ذریعے بھی پروسیس کی جا سکتی ہے۔"],
    ["ہم آپ کے ذاتی ڈیٹا اور دیگر غیر براہِ راست شناختی معلومات کو قابلِ اطلاق قانون اور ضروری رضامندی کی شرائط کے تحت آپ کو مصنوعات، خدمات، فیچرز، سبسکرپشنز، نیوز لیٹرز اور پیشکشوں کے بارے میں آگاہ کرنے کے لیے استعمال کر سکتے ہیں۔ ہم استعمال، پروڈکٹ اور تکنیکی ڈیٹا کو بھی تجزیہ کے لیے محفوظ رکھ سکتے ہیں تاکہ سروس کے معیار، کارکردگی، صارف دلچسپی اور نئی مصنوعات کی ترقی کو بہتر بنایا جا سکے۔"],
    ["اگر سروس میں میسج بورڈز، چیٹ رومز، تبصرے، عوامی پروفائلز یا دیگر کمیونٹی فیچرز شامل ہوں، تو ان جگہوں پر آپ کی طرف سے رضاکارانہ طور پر ظاہر کیا گیا مواد آپ کی اپنی ذمہ داری ہے۔ عوامی طور پر ظاہر کی گئی معلومات دوسرے صارفین پڑھ، جمع اور استعمال کر سکتے ہیں، اور ہم قواعد کے نفاذ، صارفین کے تحفظ یا سروس کے دفاع کے لیے ایسے عوامی حصوں کو منظم یا محدود کرنے کا حق محفوظ رکھتے ہیں۔"],
    ["ہم ذاتی ڈیٹا کو وابستہ اداروں، وینڈرز، سروس فراہم کنندگان، کلاؤڈ اور انفراسٹرکچر پارٹنرز، ادائیگی اور بلنگ پارٹنرز، تجزیاتی فراہم کنندگان، سپورٹ فراہم کنندگان، آڈیٹرز، قانونی مشیروں اور دیگر پروسیسرز کے ساتھ شیئر کر سکتے ہیں جو Astrology Today، LIFESPACE اور Creation Health کی متعلقہ خدمات کے آپریشن میں ہماری مدد کرتے ہیں۔ ہم قانونی تقاضے، حقوق کے تحفظ، یا انضمام یا کاروباری منتقلی جیسے لین دین کے سلسلے میں بھی متعلقہ حکام یا فریقین کے ساتھ معلومات شیئر کر سکتے ہیں۔"],
    ["سروس میں ایسے ویب سائٹس یا خدمات کے لنکس شامل ہو سکتے ہیں جو Creation Health سے باہر کی کمپنیوں یا افراد کی ملکیت یا انتظام میں ہوں۔ آپ کو یہ فرض نہیں کرنا چاہیے کہ ان تیسرے فریق ویب سائٹس کی پرائیویسی پریکٹسز ہماری جیسی ہیں؛ ایسے مقامات کے زائرین کو ان کی اپنی پالیسیوں کا جائزہ لینا چاہیے۔ ہم اپنے کنٹرول سے باہر تیسرے فریق مواد، سیکیورٹی یا پرائیویسی پریکٹسز کی ذمہ داری قبول نہیں کرتے۔"],
    ["قابلِ اطلاق قانون کے تحت آپ کو اپنے ذاتی ڈیٹا تک رسائی، اس کی درستی، اپ ڈیٹ، حذف، پروسیسنگ پر پابندی، پروسیسنگ کی مخالفت، ڈیٹا پورٹیبلٹی کی درخواست اور جہاں پروسیسنگ رضامندی پر مبنی ہو وہاں رضامندی واپس لینے کا حق حاصل ہو سکتا ہے۔ آپ کو غیر ضروری مارکیٹنگ پیغامات سے دستبردار ہونے اور، جہاں موزوں ہو، متعلقہ ریگولیٹری اتھارٹی کے سامنے شکایت درج کرنے کا حق بھی حاصل ہو سکتا ہے۔"],
    ["جب تک قابلِ اطلاق قانون واضح طور پر اجازت نہ دے، 13 سال سے کم عمر بچوں کو ہماری سروس استعمال کرنے کی اجازت نہیں ہے۔ اگر آپ کے دائرۂ اختیار میں درست رضامندی کے لیے زیادہ عمر درکار ہو، تو سروس صرف اسی صورت استعمال کی جا سکتی ہے جب وہ عمر پوری ہو چکی ہو یا قانون کے مطابق درست والدین یا سرپرست کی رضامندی حاصل ہو۔ اگر آپ سمجھتے ہیں کہ کسی بچے نے اس پالیسی کی خلاف ورزی کرتے ہوئے ہمیں ذاتی ڈیٹا فراہم کیا ہے تو براہِ کرم ہم سے رابطہ کریں۔"],
    ["ہم اپنی ویب سائٹ یا ایپس پر نظرثانی شدہ ورژن شائع کر کے کسی بھی وقت اس پرائیویسی پالیسی میں ترمیم یا اضافہ کرنے کا حق محفوظ رکھتے ہیں۔ ہر ورژن کے ساتھ اس کی مؤثر تاریخ درج ہو گی، اور اس تاریخ کے بعد سروس کا مسلسل استعمال قانون کی اجازت کی حد تک تبدیل شدہ شرائط سے آپ کی رضامندی تصور کیا جائے گا۔"],
  ],
  sa: [
    ["वयं भवतः गोपनीयतां मानयामः तथा विधिसम्मतरीत्या व्यक्तिगत-दत्तांशानां संरक्षणे प्रतिबद्धाः स्मः। एषा नीतिः स्पष्टीकरोति यत् Creation Health, तथा आवश्यकतायां Astrology Today एवं LIFESPACE, सेवया संगृहीतं दत्तं कथं संगृह्णाति, उपयुङ्क्ते, साझीकरोति, सञ्चिनोति, रक्षति च, तथा व्यक्तिगत-दत्तनियन्त्रकत्वेन अस्माकं कर्तव्यं किम्।"],
    ["वयं व्यक्तिगत-दत्तांशान् न्यायेन, वैधतया, प्रयोजन-सीमया, न्यूनतमतया, यथार्थतया, सुरक्षा-नियमैश्च सह संसाधयामः। वयं केवलं निर्दिष्ट-वैध-प्रयोजनार्थं, तेषु प्रयोजनेषु आवश्यक-सीमान्तर्गतमेव, दत्तस्य उपयोगं कुर्मः; तथापि, भवान् अपि पूर्वं प्रदत्त-जानकारीपरिवर्तने अस्मान् सूचयितुं उत्तरदायी भवति।"],
    ["अनधिकृत-प्रवेश-निवारणाय वैयक्तिक-विद्युत्-दत्तांशाः सुरक्षित-जाल-विन्यासैः, प्रवेश-नियन्त्रणैः, अग्निवारक-व्यवस्थाभिः, सञ्चय-प्रतिलिपिभिः च संरक्षितेषु तन्त्रेषु स्थाप्यन्ते। वयं युक्तियुक्त-भौतिक-प्रशासकीय-रक्षणमपि गृह्णीमः; तथापि काचित् सुरक्षा-व्यवस्था सर्वथा निर्दोषा न भवति, अतः पूर्ण-सुरक्षाया आश्वासनं न दातुं शक्नुमः।"],
    ["यत्र खाता-रूपरेखा-सूचना-सदस्यता-नियन्त्रणानि उपलब्धानि भवन्ति, तत्र भवान् स्वस्य केचन व्यक्तिगत-दत्तांशान् सम्बन्धिताभिः रुचिभिश्च सह पश्यितुं, अद्यतनीकर्तुं, संशोधयितुं वा शक्नोति। विपणन-सन्देशाः, कुकी-विकल्पाः, सूचना-रुचयः इत्यादीनि अपि सेवा-नियन्त्रणैः अथवा अस्मान् सम्पर्क्य नियन्त्रयितुं शक्यन्ते।"],
    ["यदा भवान् अस्माकं सेवां उपयुङ्क्ते तदा कतिपयानि तांत्रिक-अप्रत्यक्ष-परिचायक-तथ्यानि स्वयमेव अभिलेख्यन्ते, यथा ब्राउजर-प्रकारः, संचालन-तन्त्रम्, उपकरण-प्रकारः, IP-सङ्ख्या, भाषा, आगमन-सूचना, उपयोग-घटनाश्च। एते दत्तांशाः कुकी-सदृश-प्रौद्योगिक्या संगृहीताः सन्तः सुरक्षा-विश्लेषण-उत्पाद-सुधार-सांख्यिकी-विध्यनुपालनार्थं च प्रयुज्यन्ते।"],
    ["वयं भवतः व्यक्तिगत-परिचायक-सूचनां विभिन्नेषु प्रसङ्गेषु याचामहे, यथा खाता-पञ्जीकरणे, समाचार-पत्र-सदस्यतायाम्, उत्पाद-सेवा-क्रये, साहाय्य-सम्पर्के, सर्वेक्षण-उत्तरदाने, विषय-प्रेषणे, अथवा Astrology Today, LIFESPACE, Creation Health इत्येषां सेवासु अन्य-संवादे। अस्मिन् दत्ते नाम, उपयोक्तृ-नाम, ईमेल, भुगतान-तथ्यं, बिल-विवराणि, खाता-रुचयः, साहाय्य-सन्देशाः इत्यादयः समावेशिताः स्युः।"],
    ["वयं व्यक्तिगत-दत्तांशान् खाता-पञ्जीकरण-समापनाय, सेवाप्रवेश-प्रदानाय, भुगतान-प्रक्रियायै, आदेश-सम्पादनाय, सदस्यता-व्यवस्थापनाय, ग्राहक-साहाय्याय, प्रश्नोत्तर-प्रदाने, प्रचार-सन्देश-प्रेषणाय, उत्पाद-सेवा-सुधाराय, सर्वेक्षण-विशेष-प्रस्ताव-व्यवस्थापनाय, विधि-कर्तव्य-पालनाय च उपयोगयामः। अस्य संसाधनस्य विधिक-आधारः संविदा-आवश्यकता, वैध-हितम्, सम्मतिः, विधि-बाध्यता वा भवेत्।"],
    ["यदि भवान् Astrology Today, LIFESPACE अथवा Creation Health सम्बन्धित-सेवया सशुल्क-सदस्यतां वा उत्पादं गृह्णाति, तर्हि वयं सदस्यता-व्यवस्थापन, भुगतान-प्रक्रिया, बिल-नियमन, क्रय-सम्पादन, रसीद्-प्रदान, ग्राहक-साहाय्ये च व्यक्तिगत-दत्तं उपयोगयेम। भुगतान-सूचनां तृतीय-पक्ष-भुगतान-प्रक्रियाकर्तारः, बिल-प्रदातारः, अनुप्रयोग-मञ्च-चालकाः, व्यवहार-सहभागिनः च आवश्यक-सीमायां संसाधयितुं शक्नुवन्ति।"],
    ["वयं व्यक्तिगत-दत्तांशान् तथा अन्य-अप्रत्यक्ष-परिचायक-सूचनां विधिसम्मत-सीमायां, आवश्यक-सम्मत्यनुसारं, उत्पाद-सेवा-विशेषता-सदस्यता-समाचार-पत्र-प्रस्तावादिषु भवन्तं सूचयितुं उपयोगयामः। वयं उपयोग-दत्त, उत्पाद-दत्त, तांत्रिक-घटनाः च विश्लेष्य सेवा-गुण-वृद्धिं, उपयोक्तृ-रुचि-बोधं, कार्य-निरन्तरतां, सांख्यिकी-निर्माणं, नूतन-सेवा-विकासं च साधयामः।"],
    ["यदि सेवायां सन्देश-पटलानि, संवाद-कक्षाः, टिप्पण्यः, सार्वजनिक-रूपरेखाः, अन्य-समुदाय-विशेषताश्च सन्ति, तर्हि तत्र स्वेच्छया प्रकाशित-विषयस्य उत्तरदायित्वं भवतः एव। सार्वजनिकतया प्रकाशितं दत्तं अन्यैः उपयोक्तृभिः पठितुं, संग्रहीतुं, उपयोगयितुं च शक्यते; अस्माभिः नियम-पालन, उपयोक्तृ-रक्षण, सेवा-रक्षा निमित्तं तादृश-क्षेत्राणां नियंत्रणं कर्तुं शक्यते।"],
    ["वयं व्यक्तिगत-दत्तांशान् सम्बन्धि-संस्थाभ्यः, विक्रेतृभ्यः, सेवाप्रदातृभ्यः, मेघ-संरचना-सहभागिभ्यः, भुगतान-बिल-सहयोगिभ्यः, विश्लेषण-प्रदातृभ्यः, साहाय्य-प्रदातृभ्यः, परीक्षकभ्यः, विधि-उपदेष्टृभ्यः, अन्य-संसाधकैश्च सह साझीकरोमः। वयं एतत् दत्तं विध्यपेक्षया, अधिकार-रक्षणाय, विलयन-व्यवहार-सन्दर्भे वा नियामक-न्यायालय-व्यवहार-पक्षेषु अपि प्रकाशयितुं शक्नुमः।"],
    ["सेवायां अन्य-संस्थाभिः सञ्चालित-जालपुट-संयोजकानि भवितुमर्हन्ति। तेषां तृतीय-पक्ष-स्थलानां गोपनीयता-प्रथाः अस्माकं सदृशाः स्युरिति न मननीयम्; तेषां दर्शकाः स्वीय-नीतयः स्वयं परीक्षेरन्। अस्माकं नियन्त्रणात् बहिः स्थितानां तृतीय-पक्ष-स्थलानां विषयवस्तु, सुरक्षा, गोपनीयता-प्रथा वा विषये वयं उत्तरदायित्वं न गृह्णीमः।"],
    ["विधिसम्मत-सीमान्तर्गतं भवतः व्यक्तिगत-दत्तस्य प्रवेश-अधिकारः, संशोधन-अधिकारः, अद्यतन-अधिकारः, लोप-अधिकारः, संसाधन-सीमांकन-अधिकारः, विरोध-अधिकारः, वहनीयता-अधिकारः, तथा सम्मत्याधारित-संसाधने सम्मति-प्रतिग्रहण-अधिकारश्च भवेत्। विपणन-सन्देशेभ्यः निवृत्तेः अधिकारः, तथा अवैध-संसाधन-सन्देहे नियामक-संस्थायां निवेदन-अधिकारोऽपि सम्भवति।"],
    ["विधिना स्पष्टतया अनुमते विना त्रयोदशवर्षात् न्यूनवयस्कानां सेवोपयोगो न अनुमन्यते। यदि भवतः अधिकार-प्रदेशे वैध-सम्मत्यर्थं उच्चतर-आयुः अपेक्ष्यते, तर्हि सा आयुः प्राप्ता भवेत् अथवा विधिसम्मत-पालक-सम्मतिः लब्धा भवेत्। यदि भवान् मन्यते यत् कश्चन बालकः अस्याः नीत्याः विरुद्धं व्यक्तिगत-दत्तं दत्तवान्, कृपया अस्मान् सम्पर्कयतु।"],
    ["वयं स्वजालपुटे, अनुप्रयोगेषु वा परिवर्तित-रूपं प्रकाशित्य, कदापि अस्यां गोपनीयता-नीत्यां संशोधनं कर्तुं अधिकारं रक्षामः। प्रत्येकं संस्करणं प्रभाव-तिथ्या सह निर्दिश्यते; तदनन्तरं सेवायाः निरन्तर-उपयोगः, विधिना अनुमते परिमाणे, परिवर्तित-शर्तानां स्वीकृतिरिति मन्यते।"],
  ],
  pa: [
    ["ਅਸੀਂ ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਦਾ ਆਦਰ ਕਰਦੇ ਹਾਂ ਅਤੇ ਲਾਗੂ ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਤੁਹਾਡੇ ਨਿੱਜੀ ਡੇਟਾ ਦੀ ਰੱਖਿਆ ਕਰਨ ਲਈ ਵਚਨਬੱਧ ਹਾਂ। ਇਹ ਨੀਤੀ ਸਮਝਾਉਂਦੀ ਹੈ ਕਿ Creation Health, ਅਤੇ ਜਿੱਥੇ ਲਾਗੂ ਹੋਵੇ Astrology Today ਅਤੇ LIFESPACE, ਸੇਵਾ ਰਾਹੀਂ ਇਕੱਠੀ ਕੀਤੀ ਜਾਣਕਾਰੀ ਨੂੰ ਕਿਵੇਂ ਇਕੱਠਾ, ਵਰਤ, ਸਾਂਝਾ, ਸੰਭਾਲ ਅਤੇ ਸੁਰੱਖਿਅਤ ਕਰਦਾ ਹੈ, ਅਤੇ ਸੰਬੰਧਤ ਨਿੱਜੀ ਡੇਟਾ ਦੇ ਨਿਯੰਤਰਕ ਵਜੋਂ ਸਾਡੀ ਕੀ ਭੂਮਿਕਾ ਹੈ।"],
    ["ਅਸੀਂ ਨਿੱਜੀ ਡੇਟਾ ਦੀ ਪ੍ਰਕਿਰਿਆ ਨਿਆਂਸੰਗਤਾ, ਕਾਨੂੰਨੀਤਾ, ਉਦੇਸ਼-ਸੀਮਾ, ਡੇਟਾ-ਘਟਾਓ, ਸ਼ੁੱਧਤਾ ਅਤੇ ਸੁਰੱਖਿਆ ਦੇ ਸਿਧਾਂਤਾਂ ਅਨੁਸਾਰ ਕਰਦੇ ਹਾਂ। ਅਸੀਂ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਾਂ ਕਿ ਨਿੱਜੀ ਡੇਟਾ ਸਿਰਫ਼ ਨਿਰਧਾਰਤ ਅਤੇ ਵਾਜਬ ਉਦੇਸ਼ਾਂ ਲਈ ਅਤੇ ਉਤਨੀ ਹੀ ਹੱਦ ਤੱਕ ਵਰਤਿਆ ਜਾਵੇ ਜਿੰਨੀ ਲੋੜੀਂਦੀ ਹੋਵੇ, ਅਤੇ ਤੁਸੀਂ ਸਾਨੂੰ ਆਪਣੀ ਦਿੱਤੀ ਜਾਣਕਾਰੀ ਵਿੱਚ ਬਦਲਾਵ ਬਾਰੇ ਜਾਣੂ ਕਰਵਾਉਣ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਰਹਿੰਦੇ ਹੋ।"],
    ["ਗੈਰ-ਅਧਿਕਾਰਿਤ ਪਹੁੰਚ ਤੋਂ ਬਚਾਅ ਲਈ ਇਲੈਕਟ੍ਰਾਨਿਕ ਨਿੱਜੀ ਡੇਟਾ ਸੁਰੱਖਿਅਤ ਨੈੱਟਵਰਕ ਢਾਂਚਿਆਂ, ਐਕਸੈੱਸ ਕੰਟਰੋਲਾਂ, ਫਾਇਰਵਾਲਾਂ, ਬੈਕਅੱਪਾਂ ਅਤੇ ਹੋਰ ਸੁਰੱਖਿਆ ਉਪਾਅ ਨਾਲ ਸੁਰੱਖਿਅਤ ਪ੍ਰਣਾਲੀਆਂ 'ਤੇ ਰੱਖਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਅਸੀਂ ਵਾਜਬ ਭੌਤਿਕ ਅਤੇ ਪ੍ਰਸ਼ਾਸਕੀ ਸੁਰੱਖਿਆ ਵੀ ਵਰਤਦੇ ਹਾਂ, ਪਰ ਕੋਈ ਵੀ ਸੁਰੱਖਿਆ ਪ੍ਰਣਾਲੀ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਿਖਰਪੂਰਣ ਨਹੀਂ ਹੁੰਦੀ, ਇਸ ਲਈ ਪੂਰੀ ਸੁਰੱਖਿਆ ਦੀ ਗਾਰੰਟੀ ਨਹੀਂ ਦਿੱਤੀ ਜਾ ਸਕਦੀ।"],
    ["ਜਿੱਥੇ ਖਾਤਾ, ਪ੍ਰੋਫ਼ਾਈਲ, ਨੋਟੀਫਿਕੇਸ਼ਨ ਜਾਂ ਸਬਸਕ੍ਰਾਈਬਰ ਸੈਟਿੰਗਾਂ ਉਪਲਬਧ ਹਨ, ਉੱਥੇ ਤੁਸੀਂ ਕੁਝ ਨਿੱਜੀ ਡੇਟਾ ਅਤੇ ਸੰਬੰਧਤ ਪਸੰਦਾਂ ਨੂੰ ਸਿੱਧੇ ਹੀ ਦੇਖ, ਡਾਊਨਲੋਡ, ਅੱਪਡੇਟ, ਠੀਕ ਜਾਂ ਸੋਧ ਸਕਦੇ ਹੋ। ਤੁਸੀਂ ਮਾਰਕੀਟਿੰਗ ਸੰਚਾਰ, ਕੁਝ ਕੁਕੀ-ਸੰਬੰਧੀ ਚੋਣਾਂ ਜਾਂ ਨੋਟੀਫਿਕੇਸ਼ਨ ਪਸੰਦਾਂ ਵਰਗੀਆਂ ਕੁਝ ਪ੍ਰਕਿਰਿਆਵਾਂ ਨੂੰ ਵੀ ਸੇਵਾ ਵਿੱਚ ਦਿੱਤੇ ਨਿਯੰਤਰਣਾਂ ਜਾਂ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਰਾਹੀਂ ਸੰਭਾਲ ਸਕਦੇ ਹੋ।"],
    ["ਜਦੋਂ ਤੁਸੀਂ ਸਾਡੀ ਸੇਵਾ ਵਰਤਦੇ ਹੋ, ਕੁਝ ਤਕਨੀਕੀ ਅਤੇ ਗੈਰ-ਸਿੱਧੀ ਪਹਿਚਾਣ ਵਾਲੀ ਜਾਣਕਾਰੀ ਇੰਟਰਨੈੱਟ ਤਕਨਾਲੋਜੀ ਦੇ ਆਮ ਚੱਲਣ ਕਾਰਨ ਆਪਣੇ ਆਪ ਦਰਜ ਹੋ ਸਕਦੀ ਹੈ, ਜਿਵੇਂ ਬਰਾਊਜ਼ਰ ਕਿਸਮ, ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ, ਡਿਵਾਈਸ ਕਿਸਮ, IP ਐਡਰੈੱਸ, ਭਾਸ਼ਾ, ਰੈਫ਼ਰਲ ਜਾਣਕਾਰੀ ਅਤੇ ਵਰਤੋਂ ਦੀਆਂ ਘਟਨਾਵਾਂ। ਇਹ ਜਾਣਕਾਰੀ ਕੁਕੀਜ਼ ਜਾਂ ਸਮਾਨ ਤਕਨਾਲੋਜੀ ਰਾਹੀਂ ਇਕੱਠੀ ਹੋ ਸਕਦੀ ਹੈ ਅਤੇ ਸੁਰੱਖਿਆ, ਵਿਸ਼ਲੇਸ਼ਣ, ਉਤਪਾਦ ਸੁਧਾਰ, ਕੁੱਲ ਅੰਕੜੇ ਜਾਂ ਕਾਨੂੰਨੀ ਲੋੜਾਂ ਲਈ ਵਰਤੀ ਜਾ ਸਕਦੀ ਹੈ।"],
    ["ਅਸੀਂ ਤੁਹਾਡੇ ਕੋਲੋਂ ਕਈ ਸੰਦਰਭਾਂ ਵਿੱਚ ਪਹਿਚਾਣਯੋਗ ਜਾਣਕਾਰੀ ਮੰਗ ਸਕਦੇ ਹਾਂ, ਜਿਵੇਂ ਖਾਤਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਨਿਊਜ਼ਲੇਟਰ ਸਬਸਕ੍ਰਿਪਸ਼ਨ, ਉਤਪਾਦ ਜਾਂ ਸੇਵਾ ਖਰੀਦ, ਸਹਾਇਤਾ ਨਾਲ ਸੰਪਰਕ, ਸਰਵੇਖਣ ਜਵਾਬ, ਸਮੱਗਰੀ ਜਮ੍ਹਾਂ ਕਰਵਾਉਣਾ ਜਾਂ Astrology Today, LIFESPACE ਜਾਂ Creation Health ਦੀਆਂ ਸੰਬੰਧਤ ਸੇਵਾਵਾਂ ਨਾਲ ਹੋਰ ਸੰਪਰਕ। ਇਸ ਵਿੱਚ ਤੁਹਾਡਾ ਨਾਮ, ਯੂਜ਼ਰਨੇਮ, ਈਮੇਲ, ਭੁਗਤਾਨ ਜਾਂ ਬਿਲਿੰਗ ਵੇਰਵੇ, ਖਾਤਾ ਪਸੰਦਾਂ ਅਤੇ ਹੋਰ ਸਾਂਝੀ ਕੀਤੀ ਜਾਣਕਾਰੀ ਸ਼ਾਮਲ ਹੋ ਸਕਦੀ ਹੈ।"],
    ["ਅਸੀਂ ਤੁਹਾਡੇ ਨਿੱਜੀ ਡੇਟਾ ਦਾ ਇਸਤੇਮਾਲ ਖਾਤਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪੂਰਾ ਕਰਨ, ਸੇਵਾਵਾਂ ਤੱਕ ਪਹੁੰਚ ਦੇਣ, ਭੁਗਤਾਨ ਪ੍ਰਕਿਰਿਆ ਕਰਨ, ਆਰਡਰ ਪੂਰੇ ਕਰਨ, ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਪ੍ਰਬੰਧਿਤ ਕਰਨ, ਗਾਹਕ ਸਹਾਇਤਾ ਦੇਣ, ਪੁੱਛਗਿੱਛ ਦਾ ਜਵਾਬ ਦੇਣ, ਪ੍ਰਚਾਰਕ ਸੁਨੇਹੇ ਭੇਜਣ, ਉਤਪਾਦਾਂ ਅਤੇ ਸੇਵਾਵਾਂ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨ, ਸਰਵੇਖਣ ਜਾਂ ਵਿਸ਼ੇਸ਼ ਪੇਸ਼ਕਸ਼ਾਂ ਚਲਾਉਣ ਅਤੇ ਕਾਨੂੰਨੀ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਪੂਰੀਆਂ ਕਰਨ ਲਈ ਕਰ ਸਕਦੇ ਹਾਂ। ਇਸ ਪ੍ਰਕਿਰਿਆ ਦਾ ਕਾਨੂੰਨੀ ਆਧਾਰ ਠੇਕੇ ਦੀ ਲੋੜ, ਵਾਜਬ ਹਿਤ, ਸਹਿਮਤੀ ਜਾਂ ਕਾਨੂੰਨੀ ਫਰਜ਼ ਹੋ ਸਕਦਾ ਹੈ।"],
    ["ਜੇ ਤੁਸੀਂ Astrology Today, LIFESPACE ਜਾਂ Creation Health ਦੀਆਂ ਸੰਬੰਧਤ ਸੇਵਾਵਾਂ ਰਾਹੀਂ ਕੋਈ ਭੁਗਤਾਨਯੋਗ ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਜਾਂ ਉਤਪਾਦ ਲੈਂਦੇ ਹੋ, ਤਾਂ ਅਸੀਂ ਤੁਹਾਡੇ ਨਿੱਜੀ ਡੇਟਾ ਨੂੰ ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਪ੍ਰਬੰਧਨ, ਭੁਗਤਾਨ ਪ੍ਰਕਿਰਿਆ, ਬਿਲਿੰਗ, ਖਰੀਦ ਪੂਰੀ ਕਰਨ, ਰਸੀਦ ਭੇਜਣ ਅਤੇ ਗਾਹਕ ਸਹਾਇਤਾ ਲਈ ਵਰਤ ਸਕਦੇ ਹਾਂ। ਭੁਗਤਾਨ ਜਾਣਕਾਰੀ ਲੋੜ ਅਨੁਸਾਰ ਤੀਸਰੇ ਪੱਖ ਦੇ ਭੁਗਤਾਨ ਪ੍ਰੋਸੈਸਰਾਂ, ਬਿਲਿੰਗ ਪ੍ਰਦਾਤਾਵਾਂ, ਐਪ ਪਲੇਟਫਾਰਮ ਓਪਰੇਟਰਾਂ ਜਾਂ ਲੈਣ-ਦੇਣ ਭਾਗੀਦਾਰਾਂ ਵੱਲੋਂ ਵੀ ਸੰਭਾਲੀ ਜਾ ਸਕਦੀ ਹੈ।"],
    ["ਅਸੀਂ ਤੁਹਾਡੀ ਦਿਲਚਸਪੀ ਵਾਲੇ ਉਤਪਾਦਾਂ, ਸੇਵਾਵਾਂ, ਫੀਚਰਾਂ, ਸਬਸਕ੍ਰਿਪਸ਼ਨਾਂ, ਨਿਊਜ਼ਲੇਟਰਾਂ ਅਤੇ ਪੇਸ਼ਕਸ਼ਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਦੇਣ ਲਈ, ਲਾਗੂ ਕਾਨੂੰਨ ਅਤੇ ਲੋੜੀਂਦੀ ਸਹਿਮਤੀ ਦੇ ਅਧੀਨ, ਨਿੱਜੀ ਅਤੇ ਗੈਰ-ਸਿੱਧੀ ਜਾਣਕਾਰੀ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹਾਂ। ਅਸੀਂ ਵਰਤੋਂ ਅਤੇ ਤਕਨੀਕੀ ਡੇਟਾ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਕੇ ਸੇਵਾ ਦੀ ਗੁਣਵੱਤਾ, ਕਾਰਗੁਜ਼ਾਰੀ, ਉਪਭੋਗਤਾ ਦਿਲਚਸਪੀਆਂ ਅਤੇ ਨਵੇਂ ਉਤਪਾਦ ਵਿਕਾਸ ਨੂੰ ਵੀ ਸੁਧਾਰ ਸਕਦੇ ਹਾਂ।"],
    ["ਜੇ ਸੇਵਾ ਵਿੱਚ ਮੇਸੇਜ ਬੋਰਡ, ਚੈਟ ਰੂਮ, ਟਿੱਪਣੀਆਂ, ਜਨਤਕ ਪ੍ਰੋਫ਼ਾਈਲ ਜਾਂ ਹੋਰ ਕਮਿਊਨਟੀ ਫੀਚਰ ਸ਼ਾਮਲ ਹਨ, ਤਾਂ ਉਨ੍ਹਾਂ ਥਾਵਾਂ 'ਤੇ ਤੁਸੀਂ ਜੋ ਵੀ ਸਮੱਗਰੀ ਆਪਣੀ ਇੱਛਾ ਨਾਲ ਸਾਂਝੀ ਕਰਦੇ ਹੋ, ਉਸ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਤੁਹਾਡੀ ਆਪਣੀ ਹੁੰਦੀ ਹੈ। ਜਨਤਕ ਤੌਰ 'ਤੇ ਸਾਂਝੀ ਕੀਤੀ ਜਾਣਕਾਰੀ ਹੋਰ ਵਰਤੋਂਕਾਰ ਪੜ੍ਹ, ਇਕੱਠੀ ਅਤੇ ਵਰਤ ਸਕਦੇ ਹਨ, ਅਤੇ ਲੋੜ ਪੈਣ 'ਤੇ ਅਸੀਂ ਜਨਤਕ ਖੇਤਰਾਂ ਦਾ ਪਰਬੰਧਨ ਜਾਂ ਪਹੁੰਚ ਸੀਮਿਤ ਕਰ ਸਕਦੇ ਹਾਂ।"],
    ["ਅਸੀਂ ਨਿੱਜੀ ਡੇਟਾ ਨੂੰ ਸੰਬੰਧਤ ਇਕਾਈਆਂ, ਵਿਕਰੇਤਿਆਂ, ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ, ਕਲਾਉਡ ਅਤੇ ਇਨਫਰਾਸਟ੍ਰਕਚਰ ਭਾਗੀਦਾਰਾਂ, ਭੁਗਤਾਨ ਅਤੇ ਬਿਲਿੰਗ ਭਾਗੀਦਾਰਾਂ, ਵਿਸ਼ਲੇਸ਼ਣ ਪ੍ਰਦਾਤਾਵਾਂ, ਸਹਾਇਤਾ ਪ੍ਰਦਾਤਾਵਾਂ, ਆਡੀਟਰਾਂ, ਕਾਨੂੰਨੀ ਸਲਾਹਕਾਰਾਂ ਅਤੇ ਹੋਰ ਪ੍ਰੋਸੈਸਰਾਂ ਨਾਲ ਸਾਂਝਾ ਕਰ ਸਕਦੇ ਹਾਂ ਜੋ Astrology Today, LIFESPACE ਅਤੇ Creation Health ਦੀਆਂ ਸੇਵਾਵਾਂ ਚਲਾਉਣ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰਦੇ ਹਨ। ਕਾਨੂੰਨੀ ਲੋੜਾਂ, ਅਧਿਕਾਰਾਂ ਦੀ ਰੱਖਿਆ ਜਾਂ ਵਿਲਯ/ਕਾਰੋਬਾਰੀ ਟਰਾਂਸਫਰ ਵਰਗੀਆਂ ਸਥਿਤੀਆਂ ਵਿੱਚ ਅਸੀਂ ਇਹ ਜਾਣਕਾਰੀ ਹੋਰ ਸੰਬੰਧਤ ਧਿਰਾਂ ਨਾਲ ਵੀ ਸਾਂਝੀ ਕਰ ਸਕਦੇ ਹਾਂ।"],
    ["ਸੇਵਾ ਵਿੱਚ ਉਹਨਾਂ ਵੈਬਸਾਈਟਾਂ ਜਾਂ ਸੇਵਾਵਾਂ ਦੇ ਲਿੰਕ ਹੋ ਸਕਦੇ ਹਨ ਜੋ Creation Health ਤੋਂ ਬਾਹਰ ਦੀਆਂ ਸੰਸਥਾਵਾਂ ਚਲਾਉਂਦੀਆਂ ਹਨ। ਤੁਹਾਨੂੰ ਇਹ ਨਹੀਂ ਮੰਨਣਾ ਚਾਹੀਦਾ ਕਿ ਉਹਨਾਂ ਤੀਸਰੇ ਪੱਖ ਦੀਆਂ ਵੈਬਸਾਈਟਾਂ ਦੀਆਂ ਪਰਾਈਵੇਸੀ ਪ੍ਰਥਾਵਾਂ ਸਾਡੀਆਂ ਵਰਗੀਆਂ ਹੀ ਹਨ; ਅਜਿਹੀਆਂ ਵੈਬਸਾਈਟਾਂ ਦੇ ਵਰਤੋਂਕਾਰਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੀਆਂ ਆਪਣੀਆਂ ਨੀਤੀਆਂ ਦੀ ਸਮੀਖਿਆ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ। ਅਸੀਂ ਆਪਣੇ ਨਿਯੰਤਰਣ ਤੋਂ ਬਾਹਰ ਤੀਸਰੇ ਪੱਖ ਦੀ ਸਮੱਗਰੀ, ਸੁਰੱਖਿਆ ਜਾਂ ਪਰਾਈਵੇਸੀ ਪ੍ਰਥਾਵਾਂ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।"],
    ["ਲਾਗੂ ਕਾਨੂੰਨ ਦੇ ਅਧੀਨ ਤੁਹਾਨੂੰ ਆਪਣੇ ਨਿੱਜੀ ਡੇਟਾ ਤੱਕ ਪਹੁੰਚ, ਉਸ ਦੀ ਸੋਧ, ਅੱਪਡੇਟ, ਮਿਟਾਉਣ, ਪ੍ਰਕਿਰਿਆ ਸੀਮਿਤ ਕਰਨ, ਉਸ ਦਾ ਵਿਰੋਧ ਕਰਨ, ਉਸ ਦੀ ਪੋਰਟੇਬਿਲਟੀ ਮੰਗਣ ਅਤੇ, ਜਿੱਥੇ ਪ੍ਰਕਿਰਿਆ ਸਹਿਮਤੀ 'ਤੇ ਅਧਾਰਿਤ ਹੋਵੇ, ਸਹਿਮਤੀ ਵਾਪਸ ਲੈਣ ਦਾ ਹੱਕ ਹੋ ਸਕਦਾ ਹੈ। ਤੁਹਾਨੂੰ ਗੈਰ-ਜ਼ਰੂਰੀ ਮਾਰਕੀਟਿੰਗ ਸੰਚਾਰ ਤੋਂ ਬਾਹਰ ਹੋਣ ਅਤੇ, ਜਿੱਥੇ ਉਚਿਤ ਹੋਵੇ, ਇਹ ਮੰਨਣ 'ਤੇ ਸ਼ਿਕਾਇਤ ਕਰਨ ਦਾ ਹੱਕ ਵੀ ਹੋ ਸਕਦਾ ਹੈ ਕਿ ਤੁਹਾਡੇ ਡੇਟਾ ਨਾਲ ਗਲਤ ਵਿਹਾਰ ਹੋਇਆ ਹੈ।"],
    ["ਜਦੋਂ ਤੱਕ ਲਾਗੂ ਕਾਨੂੰਨ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਇਜਾਜ਼ਤ ਨਾ ਦੇਵੇ, 13 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਨੂੰ ਸਾਡੀ ਸੇਵਾ ਵਰਤਣ ਦੀ ਆਗਿਆ ਨਹੀਂ ਹੈ। ਜੇ ਤੁਹਾਡੇ ਖੇਤਰ ਵਿੱਚ ਵੈਧ ਸਹਿਮਤੀ ਲਈ ਇਸ ਤੋਂ ਵੱਧ ਉਮਰ ਦੀ ਲੋੜ ਹੈ, ਤਾਂ ਸੇਵਾ ਸਿਰਫ਼ ਉਸ ਹਾਲਤ ਵਿੱਚ ਵਰਤੀ ਜਾ ਸਕਦੀ ਹੈ ਜਦੋਂ ਉਹ ਉਮਰ ਪੂਰੀ ਹੋ ਚੁੱਕੀ ਹੋਵੇ ਜਾਂ ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਵੈਧ ਮਾਪੇ ਜਾਂ ਸਰਪ੍ਰਸਤ ਦੀ ਸਹਿਮਤੀ ਮਿਲੀ ਹੋਵੇ। ਜੇ ਤੁਹਾਨੂੰ ਲੱਗਦਾ ਹੈ ਕਿ ਕਿਸੇ ਬੱਚੇ ਨੇ ਇਸ ਨੀਤੀ ਦੀ ਉਲੰਘਣਾ ਕਰਦੇ ਹੋਏ ਸਾਨੂੰ ਨਿੱਜੀ ਡੇਟਾ ਦਿੱਤਾ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"],
    ["ਅਸੀਂ ਆਪਣੀ ਵੈਬਸਾਈਟ ਜਾਂ ਐਪ 'ਤੇ ਸੋਧਿਆ ਹੋਇਆ ਸੰਸਕਰਣ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਕੇ ਕਿਸੇ ਵੀ ਵੇਲੇ ਇਸ ਪਰਾਈਵੇਸੀ ਨੀਤੀ ਵਿੱਚ ਤਬਦੀਲੀ ਜਾਂ ਸੋਧ ਕਰਨ ਦਾ ਹੱਕ ਰੱਖਦੇ ਹਾਂ। ਹਰ ਸੰਸਕਰਣ ਉਸ ਦੀ ਲਾਗੂ ਮਿਤੀ ਨਾਲ ਦਰਸਾਇਆ ਜਾਵੇਗਾ, ਅਤੇ ਉਸ ਮਿਤੀ ਤੋਂ ਬਾਅਦ ਸੇਵਾ ਦੀ ਤੁਹਾਡੀ ਲਗਾਤਾਰ ਵਰਤੋਂ, ਕਾਨੂੰਨ ਅਨੁਸਾਰ, ਸੋਧੀਆਂ ਸ਼ਰਤਾਂ ਦੀ ਸਵੀਕ੍ਰਿਤੀ ਮੰਨੀ ਜਾਵੇਗੀ।"],
  ],
  yue: [
    ["我哋尊重你嘅私隱，並承諾按照適用法律保護你嘅個人資料。呢份政策解釋 Creation Health，以及喺適用情況下 Astrology Today 同 LIFESPACE，點樣透過服務收集、使用、分享、保存同保障資料，以及我哋作為有關個人資料控制者所承擔嘅責任。"],
    ["我哋會按照公平、合法、目的限制、資料最少化、準確同安全嘅原則去處理個人資料，只會喺特定、正當同必要嘅範圍內使用資料；同時，你亦有責任喺你之前提供畀我哋嘅資料有變更時及時通知我哋。"],
    ["為咗防止未經授權存取個人資料，電子形式嘅個人資料可能會儲存在受安全網絡架構、存取控制、防火牆、備份同相關保安措施保護嘅系統內。我哋亦會採取合理嘅實體同行政保障，但任何保安系統都唔可能做到絕對完美，因此我哋唔能夠保證絕對安全。"],
    ["當帳戶、個人資料、通知或訂閱設定可用時，你通常可以透過相關設定去查看、下載、更新、更正或者修改部分個人資料同偏好。你亦可以透過服務提供嘅控制項或者按照本政策所列方式聯絡我哋，去管理市場推廣訊息、通知偏好同部分與 Cookie 有關嘅處理活動。"],
    ["當你使用我哋嘅服務時，某啲技術性同非直接識別資料可能會因互聯網技術嘅正常運作而自動被記錄，例如瀏覽器類型、作業系統、裝置類型、IP 位址、語言、來源資訊同使用事件。呢啲資料可能透過 Cookie 或類似技術收集，並可用作保安、分析、產品改進、整體統計或法律要求嘅用途。"],
    ["我哋可能會喺多種情況下要求你提供可識別身份嘅資料，例如註冊帳戶、訂閱通訊、購買產品或服務、聯絡支援、回覆調查、提交內容，或者以其他方式同 Astrology Today、LIFESPACE 或 Creation Health 相關服務互動。呢啲資料可能包括你嘅姓名、用戶名稱、電郵、付款或帳單資料、帳戶偏好同其他你自願提供嘅資訊。"],
    ["我哋可能會使用你嘅個人資料去完成帳戶註冊、提供服務存取、處理付款、履行訂單、管理訂閱、提供客戶支援、回覆查詢、發送推廣訊息、改善產品與服務、管理調查或特別優惠，以及履行法律責任。處理個人資料嘅法律依據可能包括合約需要、合法利益、同意或者法律義務。"],
    ["如果你透過 Astrology Today、LIFESPACE 或 Creation Health 嘅相關服務購買付費訂閱或付費產品，我哋可能會使用你嘅個人資料去管理訂閱、處理付款、執行帳單、完成交易、發出收據同提供客戶支援。付款資料亦可能喺有需要時由第三方支付處理商、帳單服務商、應用程式平台營運者或者交易夥伴處理。"],
    ["我哋可能會喺適用法律同所需同意要求之下，使用個人資料同其他非直接識別資料，通知你可能感興趣嘅產品、服務、功能、訂閱、通訊同優惠。我哋亦可能分析使用數據同技術事件，以提升服務質素、了解用戶興趣、維持效能、生成統計資料，同開發新產品與服務。"],
    ["如果服務包含留言板、聊天室、留言、公開個人檔案或其他社群功能，你需要自行負責你自願喺呢啲地方公開嘅內容。公開披露嘅資訊可能畀其他用戶閱讀、收集同使用，而我哋亦保留權利喺有需要時管理、限制或終止對公開區域嘅存取，以執行規則、保障用戶或保護服務。"],
    ["我哋可能會將個人資料披露畀關聯公司、供應商、服務提供者、雲端及基建夥伴、付款及帳單夥伴、分析供應商、支援服務商、審計人員、法律顧問以及其他協助我哋營運 Astrology Today、LIFESPACE 同 Creation Health 相關服務嘅處理方。喺法律要求、保障權利，或者合併、業務轉讓等交易情況下，我哋亦可能向相關機構或交易對手披露資料。"],
    ["服務可能包含連去由 Creation Health 以外公司或個人營運嘅網站或服務嘅連結。你唔應該假設呢啲第三方網站嘅私隱做法同我哋一樣；到訪者應該自行查閱佢哋各自嘅私隱政策。我哋唔會對我哋控制範圍以外嘅第三方內容、安全性或私隱做法承擔責任。"],
    ["喺適用法律之下，你可能有權要求查閱、更正、更新、刪除、限制處理、反對處理、要求資料可攜，或者喺處理建基於同意時撤回同意。你亦可能有權選擇唔接收非必要市場推廣訊息，並喺認為你嘅資料被非法處理時向相關監管機構提出投訴。"],
    ["除非適用法律明確容許，13歲以下兒童不得使用我哋嘅服務。如果你所在地區對有效資料同意有更高年齡要求，則只有喺達到該年齡，或者法律容許下已取得有效家長或監護人同意嘅情況下，先可以使用本服務。如果你認為有兒童違反本政策向我哋提供個人資料，請聯絡我哋。"],
    ["我哋保留權利，隨時透過喺網站或應用程式上發布修訂版本去修改本私隱政策。每個版本都會標示生效日期，而你喺該日期之後繼續使用本服務，喺法律容許範圍內，將被視為接受經修改嘅條款。"],
  ],
  ko: [
    ["당사는 귀하의 프라이버시를 존중하며, 적용 가능한 법률에 따라 귀하의 개인정보를 보호하기 위해 최선을 다합니다. 본 정책은 Creation Health와, 해당되는 경우 Astrology Today 및 LIFESPACE가 서비스 전반에서 개인정보를 어떻게 수집, 사용, 공유, 보관 및 보호하는지, 그리고 관련 개인정보의 통제자로서 어떤 책임을 지는지를 설명합니다."],
    ["당사는 공정성, 적법성, 목적 제한, 데이터 최소화, 정확성 및 보안의 원칙에 따라 개인정보를 처리합니다. 당사는 특정되고 정당한 목적을 위해 필요한 범위에서만 개인정보를 사용하려고 하며, 귀하 역시 당사에 제공한 정보에 변경이 생기면 이를 알려주실 책임이 있습니다."],
    ["무단 접근으로부터 개인정보를 보호하기 위해 전자적 개인정보는 안전한 네트워크 구조, 접근 통제, 방화벽, 백업 및 관련 보호 조치가 적용된 시스템에 보관될 수 있습니다. 당사는 합리적인 물리적·관리적 보호조치도 시행하지만, 어떤 보안 체계도 완전하지 않으므로 절대적인 보안을 보장할 수는 없습니다."],
    ["계정, 프로필, 알림 또는 구독 설정 기능이 제공되는 경우 귀하는 해당 설정을 통해 일부 개인정보와 관련 선호사항을 열람, 다운로드, 업데이트, 수정 또는 변경할 수 있습니다. 또한 서비스에서 제공되는 제어 기능이나 본 정책에 기재된 방법으로 당사에 연락하여 마케팅 수신, 일부 쿠키 관련 선택, 알림 환경설정 등을 조정할 수 있습니다."],
    ["귀하가 서비스를 이용할 때 브라우저 유형, 운영체제, 기기 유형, IP 주소, 언어, 유입 정보 및 이용 이벤트와 같은 기술적이고 직접 식별되지 않는 정보가 인터넷 기술의 일반적 작동에 따라 자동으로 기록될 수 있습니다. 이러한 정보는 쿠키 및 유사 기술을 통해 수집될 수 있으며, 보안, 분석, 제품 개선, 통계 작성 또는 법적 요구 사항을 위해 사용될 수 있습니다."],
    ["당사는 계정 등록, 뉴스레터 구독, 상품 또는 서비스 구매, 지원 문의, 설문 응답, 콘텐츠 제출 또는 Astrology Today, LIFESPACE 혹은 Creation Health 관련 서비스와의 기타 상호작용 시 귀하에게 개인정보 제공을 요청할 수 있습니다. 여기에는 이름, 사용자명, 이메일 주소, 결제 또는 청구 정보, 계정 환경설정 및 기타 자발적으로 제공한 정보가 포함될 수 있습니다."],
    ["당사는 계정 등록 완료, 서비스 제공, 결제 처리, 주문 이행, 구독 관리, 고객 지원, 문의 응답, 홍보 메시지 발송, 제품 및 서비스 개선, 설문 또는 특별 프로모션 운영, 법적 의무 이행을 위해 개인정보를 사용할 수 있습니다. 처리의 법적 근거에는 계약상 필요성, 정당한 이익, 동의 또는 법적 의무가 포함될 수 있습니다."],
    ["귀하가 Astrology Today, LIFESPACE 또는 Creation Health의 관련 서비스를 통해 유료 구독 또는 유료 상품을 구매하는 경우, 당사는 구독 관리, 결제 처리, 청구 운영, 구매 이행, 영수증 제공 및 고객 지원을 위해 개인정보를 사용할 수 있습니다. 결제 정보는 필요한 범위 내에서 제3자 결제 처리업체, 청구 제공업체, 앱 플랫폼 운영자 또는 거래 파트너에 의해 처리될 수 있습니다."],
    ["당사는 관련 법률과 필요한 동의 요건에 따라 귀하가 관심을 가질 수 있는 상품, 서비스, 기능, 구독, 뉴스레터 및 혜택을 안내하기 위해 개인정보와 기타 비식별 정보를 사용할 수 있습니다. 또한 당사는 서비스 품질 향상, 이용자 관심사 파악, 성능 유지, 통계 작성 및 신규 서비스 개발을 위해 사용 데이터와 기술 이벤트를 분석할 수 있습니다."],
    ["서비스에 게시판, 채팅방, 댓글, 공개 프로필 또는 기타 커뮤니티 기능이 포함되어 있는 경우, 귀하가 해당 공간에 자발적으로 공개하는 콘텐츠에 대한 책임은 귀하에게 있습니다. 공개적으로 게시된 정보는 다른 이용자에게 읽히고 수집·사용될 수 있으며, 당사는 규정 집행, 이용자 보호 또는 서비스 보호를 위해 공개 영역에 대한 접근을 관리하거나 제한할 권리를 보유합니다."],
    ["당사는 Astrology Today, LIFESPACE 및 Creation Health 관련 서비스의 운영을 지원하는 계열사, 공급업체, 서비스 제공자, 클라우드 및 인프라 파트너, 결제 및 청구 파트너, 분석 제공업체, 지원 제공업체, 감사인, 법률 고문 및 기타 처리업체와 개인정보를 공유할 수 있습니다. 또한 법적 요구, 권리 보호 또는 합병·사업 이전과 같은 거래 상황에서 관련 기관 또는 거래 상대방에게 정보를 공개할 수 있습니다."],
    ["서비스에는 Creation Health 외부의 회사나 개인이 운영하는 웹사이트 또는 서비스로 연결되는 링크가 포함될 수 있습니다. 그러한 제3자 웹사이트의 개인정보 처리 관행이 당사와 동일하다고 가정해서는 안 되며, 방문자는 각 사이트의 자체 정책을 확인해야 합니다. 당사는 당사의 통제 범위를 벗어난 제3자 콘텐츠, 보안 또는 개인정보 처리 관행에 대해 책임지지 않습니다."],
    ["적용 가능한 법률에 따라 귀하는 자신의 개인정보에 대한 접근, 정정, 업데이트, 삭제, 처리 제한, 처리 반대, 데이터 이동권 요청 및 동의에 기반한 처리의 경우 동의 철회를 요구할 권리를 가질 수 있습니다. 또한 비필수적인 마케팅 수신을 거부할 권리와, 개인정보가 위법하게 처리되었다고 판단되는 경우 관련 감독기관에 불만을 제기할 권리를 가질 수 있습니다."],
    ["적용 법률이 명시적으로 허용하지 않는 한, 13세 미만의 아동은 당사 서비스를 이용할 수 없습니다. 귀하의 관할 지역에서 유효한 데이터 동의를 위해 더 높은 연령 기준이 요구되는 경우, 해당 연령에 도달했거나 법이 허용하는 범위에서 유효한 부모 또는 보호자 동의를 받은 경우에만 서비스를 이용할 수 있습니다. 아동이 본 정책을 위반하여 당사에 개인정보를 제공했다고 생각되면 당사에 연락해 주시기 바랍니다."],
    ["당사는 웹사이트나 앱에 수정본을 게시함으로써 언제든지 본 개인정보처리방침을 변경하거나 수정할 권리를 보유합니다. 각 버전에는 시행일이 표시되며, 그 날짜 이후에도 서비스를 계속 이용하는 것은 법률이 허용하는 범위에서 변경된 조건에 동의한 것으로 간주됩니다."],
  ],
};

const metadataCopy: Record<
  SupportedLocale,
  { title: string; description: string }
> = {
  en: {
    title: "Privacy Policy | Astrology Today",
    description:
      "Creation Health privacy policy for Astrology Today, LIFESPACE, subscriptions, payments, and related services.",
  },
  fr: {
    title: "Politique de confidentialité | Astrology Today",
    description:
      "Politique de confidentialité de Creation Health pour Astrology Today, LIFESPACE, les abonnements, les paiements et les services connexes.",
  },
  it: {
    title: "Informativa sulla privacy | Astrology Today",
    description:
      "Informativa sulla privacy di Creation Health per Astrology Today, LIFESPACE, abbonamenti, pagamenti e servizi correlati.",
  },
  es: {
    title: "Política de privacidad | Astrology Today",
    description:
      "Política de privacidad de Creation Health para Astrology Today, LIFESPACE, suscripciones, pagos y servicios relacionados.",
  },
  hi: {
    title: "गोपनीयता नीति | Astrology Today",
    description:
      "Astrology Today, LIFESPACE, सदस्यताओं, भुगतानों और संबंधित सेवाओं के लिए Creation Health की गोपनीयता नीति।",
  },
  ur: {
    title: "پرائیویسی پالیسی | Astrology Today",
    description:
      "Astrology Today، LIFESPACE، سبسکرپشنز، ادائیگیوں اور متعلقہ خدمات کے لیے Creation Health کی پرائیویسی پالیسی۔",
  },
  sa: {
    title: "गोपनीयता-नीतिः | Astrology Today",
    description:
      "Astrology Today, LIFESPACE, सदस्यता, भुगतान-व्यवस्था, सम्बद्ध-सेवाः च विषये Creation Health इत्यस्य गोपनीयता-नीतिः।",
  },
  pa: {
    title: "ਪਰਾਈਵੇਸੀ ਨੀਤੀ | Astrology Today",
    description:
      "Astrology Today, LIFESPACE, ਸਬਸਕ੍ਰਿਪਸ਼ਨ, ਭੁਗਤਾਨ ਅਤੇ ਸੰਬੰਧਿਤ ਸੇਵਾਵਾਂ ਲਈ Creation Health ਦੀ ਪਰਾਈਵੇਸੀ ਨੀਤੀ।",
  },
  zh: {
    title: "隐私政策 | Astrology Today",
    description:
      "适用于 Astrology Today、LIFESPACE、订阅、付款及相关服务的 Creation Health 隐私政策。",
  },
  ja: {
    title: "プライバシーポリシー | Astrology Today",
    description:
      "Astrology Today、LIFESPACE、購読、支払い、関連サービスに関する Creation Health のプライバシーポリシー。",
  },
  yue: {
    title: "私隱政策 | Astrology Today",
    description:
      "適用於 Astrology Today、LIFESPACE、訂閱、付款同相關服務嘅 Creation Health 私隱政策。",
  },
  ko: {
    title: "개인정보 처리방침 | Astrology Today",
    description:
      "Astrology Today, LIFESPACE, 구독, 결제 및 관련 서비스에 적용되는 Creation Health의 개인정보 처리방침.",
  },
};

const supportedLocales = Object.keys(metadataCopy) as SupportedLocale[];

const privacyPolicyCopy = supportedLocales.reduce<Record<SupportedLocale, PrivacyPolicyCopy>>(
  (acc, locale) => {
    const localized = localizedSummaryAndTitles[locale];
    const overrideBodies = sectionBodyOverrides[locale];
    const sections = englishSections.map((section, index) => ({
      ...section,
      title: localized?.sectionTitles[index] ?? section.title,
      body: overrideBodies?.[index] ?? section.body,
    }));

    acc[locale] = {
      metadataTitle: metadataCopy[locale].title,
      metadataDescription: metadataCopy[locale].description,
      summaryHeading: localized?.summaryHeading ?? englishSummaryHeading,
      summaryPoints: localized?.summaryPoints ?? englishSummaryPoints,
      sections,
    };
    return acc;
  },
  {} as Record<SupportedLocale, PrivacyPolicyCopy>,
);

export function getPrivacyPolicyCopy(locale: SupportedLocale): PrivacyPolicyCopy {
  return privacyPolicyCopy[locale] ?? privacyPolicyCopy[defaultLocale];
}
