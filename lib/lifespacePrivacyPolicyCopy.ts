import { defaultLocale, type SupportedLocale } from "./i18n";

export type LifespacePolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LifespacePrivacyPolicyCopy = {
  metadataTitle: string;
  metadataDescription: string;
  kicker: string;
  title: string;
  heroDescription: string;
  effectiveDateLabel: string;
  effectiveDateValue: string;
  appliesToLabel: string;
  appliesToValue: string;
  onThisPage: string;
  overviewHeading: string;
  overviewBody: string;
  backHeading: string;
  backBody: string;
  backLinkLabel: string;
  sections: LifespacePolicySection[];
};

const englishSections: LifespacePolicySection[] = [
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
      "LIFESPACE is not intended for children under the age of 16.",
      "We do not knowingly collect personal information from children under 16. If we become aware that personal information from a child under 16 has been collected, we will take reasonable steps to delete that information.",
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

const metadataCopy: Record<SupportedLocale, { title: string; description: string }> = {
  en: {
    title: "LIFESPACE Privacy Policy | Astrology Today",
    description:
      "Read the LIFESPACE app privacy policy covering collected information, storage, sharing, notifications, location use, and wellness-related disclosures.",
  },
  fr: {
    title: "Politique de confidentialité LIFESPACE | Astrology Today",
    description:
      "Consultez la politique de confidentialité de l’application LIFESPACE concernant les données collectées, le stockage, le partage, les notifications, la localisation et les informations liées au bien-être.",
  },
  it: {
    title: "Informativa sulla privacy di LIFESPACE | Astrology Today",
    description:
      "Leggi l’informativa sulla privacy dell’app LIFESPACE relativa ai dati raccolti, alla conservazione, alla condivisione, alle notifiche, alla posizione e alle informazioni sul benessere.",
  },
  es: {
    title: "Política de privacidad de LIFESPACE | Astrology Today",
    description:
      "Consulta la política de privacidad de la app LIFESPACE sobre información recopilada, almacenamiento, intercambio, notificaciones, ubicación y divulgaciones relacionadas con el bienestar.",
  },
  hi: {
    title: "LIFESPACE गोपनीयता नीति | Astrology Today",
    description:
      "LIFESPACE ऐप की गोपनीयता नीति पढ़ें, जिसमें एकत्रित जानकारी, संग्रहण, साझा करना, सूचनाएँ, स्थान उपयोग और वेलनेस से जुड़ी जानकारी शामिल है।",
  },
  ur: {
    title: "LIFESPACE پرائیویسی پالیسی | Astrology Today",
    description:
      "LIFESPACE ایپ کی پرائیویسی پالیسی پڑھیں جس میں جمع کی جانے والی معلومات، ذخیرہ، شیئرنگ، نوٹیفکیشنز، لوکیشن کے استعمال اور فلاحی انکشافات شامل ہیں۔",
  },
  sa: {
    title: "LIFESPACE गोपनीयता-नीतिः | Astrology Today",
    description:
      "LIFESPACE अनुप्रयोगस्य गोपनीयता-नीतिं पठतु, यत्र संगृहीत-दत्तम्, भण्डारणम्, साझीकरणम्, सूचनाः, स्थान-उपयोगः, आरोग्य-संबद्ध-विवरणानि च सन्ति।",
  },
  pa: {
    title: "LIFESPACE ਪਰਾਈਵੇਸੀ ਨੀਤੀ | Astrology Today",
    description:
      "LIFESPACE ਐਪ ਦੀ ਪਰਾਈਵੇਸੀ ਨੀਤੀ ਪੜ੍ਹੋ, ਜਿਸ ਵਿੱਚ ਇਕੱਠੀ ਕੀਤੀ ਜਾਣਕਾਰੀ, ਸਟੋਰੇਜ, ਸਾਂਝਾ ਕਰਨ, ਨੋਟੀਫਿਕੇਸ਼ਨ, ਲੋਕੇਸ਼ਨ ਦੀ ਵਰਤੋਂ ਅਤੇ ਵੈੱਲਨੈੱਸ ਨਾਲ ਸੰਬੰਧਿਤ ਖੁਲਾਸੇ ਸ਼ਾਮਲ ਹਨ।",
  },
  zh: {
    title: "LIFESPACE 隐私政策 | Astrology Today",
    description:
      "阅读 LIFESPACE 应用隐私政策，了解收集的信息、存储、共享、通知、位置使用及与健康支持相关的说明。",
  },
  ja: {
    title: "LIFESPACE プライバシーポリシー | Astrology Today",
    description:
      "収集情報、保存、共有、通知、位置情報の使用、ウェルネス関連の開示事項を含む LIFESPACE アプリのプライバシーポリシーをご覧ください。",
  },
  yue: {
    title: "LIFESPACE 私隱政策 | Astrology Today",
    description:
      "閱讀 LIFESPACE 應用程式私隱政策，了解所收集資料、儲存、分享、通知、位置使用，以及與健康支援有關嘅說明。",
  },
  ko: {
    title: "LIFESPACE 개인정보 처리방침 | Astrology Today",
    description:
      "수집 정보, 저장, 공유, 알림, 위치 사용 및 웰니스 관련 고지를 포함한 LIFESPACE 앱의 개인정보 처리방침을 확인하세요.",
  },
};

const localizedPageChrome: Partial<
  Record<
    SupportedLocale,
    Omit<LifespacePrivacyPolicyCopy, "metadataTitle" | "metadataDescription" | "sections">
      & { sectionTitles: string[] }
  >
> = {
  fr: {
    kicker: "APPLICATION LIFESPACE",
    title: "Politique de confidentialité LIFESPACE",
    heroDescription:
      "LIFESPACE est une application de bien-être et de suivi du mode de vie conçue pour aider les utilisateurs à réfléchir à leurs habitudes quotidiennes dans neuf domaines fondamentaux de la vie : la lumière, le travail intérieur, la forme physique, l’alimentation, la santé sensorielle, le sens, l’activité, la communauté et l’expression.",
    effectiveDateLabel: "Date d’effet",
    effectiveDateValue: "11 mai 2026",
    appliesToLabel: "S’applique à",
    appliesToValue: "Application LIFESPACE",
    onThisPage: "Sur cette page",
    overviewHeading: "Aperçu",
    overviewBody:
      "Cette politique de confidentialité explique quelles informations LIFESPACE peut collecter, comment ces informations peuvent être utilisées et quels choix les utilisateurs ont concernant leurs données.",
    backHeading: "Retour à Astrology Today",
    backBody:
      "Vous pouvez revenir au site principal ou continuer à consulter d’autres pages juridiques et informatives depuis la page d’accueil.",
    backLinkLabel: "← Retour à Astrology Today",
    sectionTitles: [
      "1. Informations que nous collectons",
      "2. Comment nous utilisons les informations",
      "3. Informations de santé et de bien-être",
      "4. Services tiers",
      "5. Stockage des données",
      "6. Partage des données",
      "7. Fonctions de partage optionnelles",
      "8. Notifications",
      "9. Informations de localisation",
      "10. Confidentialité des enfants",
      "11. Choix et contrôles de l’utilisateur",
      "12. Conservation des données",
      "13. Achats et abonnements via l’App Store",
      "14. Modifications de cette politique de confidentialité",
      "15. Contact",
    ],
  },
  it: {
    kicker: "APP LIFESPACE",
    title: "Informativa sulla privacy di LIFESPACE",
    heroDescription:
      "LIFESPACE è un’app per il benessere e il monitoraggio dello stile di vita pensata per aiutare gli utenti a riflettere sulle abitudini quotidiane in nove aree fondamentali della vita: luce, lavoro interiore, fitness, alimentazione, salute sensoriale, scopo, attività, comunità ed espressione.",
    effectiveDateLabel: "Data di efficacia",
    effectiveDateValue: "11 maggio 2026",
    appliesToLabel: "Si applica a",
    appliesToValue: "App LIFESPACE",
    onThisPage: "In questa pagina",
    overviewHeading: "Panoramica",
    overviewBody:
      "Questa informativa sulla privacy spiega quali informazioni LIFESPACE può raccogliere, come tali informazioni possono essere utilizzate e quali scelte hanno gli utenti in merito ai propri dati.",
    backHeading: "Torna ad Astrology Today",
    backBody:
      "Puoi tornare al sito principale o continuare a consultare altre pagine legali e informative dalla home page.",
    backLinkLabel: "← Torna ad Astrology Today",
    sectionTitles: [
      "1. Informazioni che raccogliamo",
      "2. Come utilizziamo le informazioni",
      "3. Informazioni su salute e benessere",
      "4. Servizi di terze parti",
      "5. Conservazione dei dati",
      "6. Condivisione dei dati",
      "7. Funzionalità di condivisione opzionali",
      "8. Notifiche",
      "9. Informazioni sulla posizione",
      "10. Privacy dei minori",
      "11. Scelte e controlli dell’utente",
      "12. Conservazione dei dati",
      "13. Acquisti e abbonamenti tramite App Store",
      "14. Modifiche alla presente informativa sulla privacy",
      "15. Contatti",
    ],
  },
  es: {
    kicker: "APP LIFESPACE",
    title: "Política de privacidad de LIFESPACE",
    heroDescription:
      "LIFESPACE es una app de bienestar y seguimiento del estilo de vida diseñada para ayudar a los usuarios a reflexionar sobre sus hábitos diarios en nueve áreas centrales de la vida: luz, trabajo interior, ejercicio, alimentación, salud sensorial, propósito, actividad, comunidad y expresión.",
    effectiveDateLabel: "Fecha de entrada en vigor",
    effectiveDateValue: "11 de mayo de 2026",
    appliesToLabel: "Se aplica a",
    appliesToValue: "App LIFESPACE",
    onThisPage: "En esta página",
    overviewHeading: "Resumen",
    overviewBody:
      "Esta política de privacidad explica qué información puede recopilar LIFESPACE, cómo puede utilizarse esa información y qué opciones tienen los usuarios con respecto a sus datos.",
    backHeading: "Volver a Astrology Today",
    backBody:
      "Puede volver al sitio principal o seguir consultando otras páginas legales e informativas desde la página de inicio.",
    backLinkLabel: "← Volver a Astrology Today",
    sectionTitles: [
      "1. Información que recopilamos",
      "2. Cómo utilizamos la información",
      "3. Información sobre salud y bienestar",
      "4. Servicios de terceros",
      "5. Almacenamiento de datos",
      "6. Intercambio de datos",
      "7. Funciones opcionales de intercambio",
      "8. Notificaciones",
      "9. Información de ubicación",
      "10. Privacidad de menores",
      "11. Opciones y controles del usuario",
      "12. Conservación de datos",
      "13. Compras y suscripciones en App Store",
      "14. Cambios en esta política de privacidad",
      "15. Contacto",
    ],
  },
  hi: {
    kicker: "LIFESPACE ऐप",
    title: "LIFESPACE गोपनीयता नीति",
    heroDescription:
      "LIFESPACE एक वेलनेस और जीवनशैली-ट्रैकिंग ऐप है, जिसे उपयोगकर्ताओं को जीवन के नौ मुख्य क्षेत्रों—प्रकाश, आंतरिक कार्य, फिटनेस, भोजन, संवेदी स्वास्थ्य, उद्देश्य, गतिविधि, समुदाय और अभिव्यक्ति—में दैनिक आदतों पर विचार करने में सहायता देने के लिए बनाया गया है।",
    effectiveDateLabel: "प्रभावी तिथि",
    effectiveDateValue: "11 मई 2026",
    appliesToLabel: "लागू होता है",
    appliesToValue: "LIFESPACE ऐप",
    onThisPage: "इस पृष्ठ पर",
    overviewHeading: "अवलोकन",
    overviewBody:
      "यह गोपनीयता नीति बताती है कि LIFESPACE कौन-सी जानकारी एकत्र कर सकता है, उस जानकारी का उपयोग कैसे किया जा सकता है, और उपयोगकर्ताओं के पास अपने डेटा के संबंध में कौन-कौन से विकल्प हैं।",
    backHeading: "Astrology Today पर वापस जाएँ",
    backBody: "आप मुख्य साइट पर वापस जा सकते हैं या होमपेज से अन्य कानूनी और सूचनात्मक पृष्ठ देखना जारी रख सकते हैं।",
    backLinkLabel: "← Astrology Today पर वापस जाएँ",
    sectionTitles: englishSections.map((section) => section.title),
  },
  ur: {
    kicker: "LIFESPACE ایپ",
    title: "LIFESPACE پرائیویسی پالیسی",
    heroDescription:
      "LIFESPACE ایک فلاحی اور طرزِ زندگی ٹریکنگ ایپ ہے، جو صارفین کو زندگی کے نو بنیادی شعبوں—روشنی، اندرونی کام، فٹنس، خوراک، حسی صحت، مقصد، سرگرمی، کمیونٹی اور اظہار—میں روزمرہ عادات پر غور کرنے میں مدد دینے کے لیے بنائی گئی ہے۔",
    effectiveDateLabel: "موثر تاریخ",
    effectiveDateValue: "11 مئی 2026",
    appliesToLabel: "لاگو ہوتا ہے",
    appliesToValue: "LIFESPACE ایپ",
    onThisPage: "اس صفحے پر",
    overviewHeading: "جائزہ",
    overviewBody:
      "یہ پرائیویسی پالیسی واضح کرتی ہے کہ LIFESPACE کون سی معلومات جمع کر سکتا ہے، ان معلومات کا استعمال کیسے ہو سکتا ہے، اور صارفین کو اپنے ڈیٹا کے بارے میں کون سے اختیارات حاصل ہیں۔",
    backHeading: "Astrology Today پر واپس جائیں",
    backBody: "آپ مرکزی سائٹ پر واپس جا سکتے ہیں یا ہوم پیج سے دیگر قانونی اور معلوماتی صفحات دیکھنا جاری رکھ سکتے ہیں۔",
    backLinkLabel: "← Astrology Today پر واپس جائیں",
    sectionTitles: englishSections.map((section) => section.title),
  },
  sa: {
    kicker: "LIFESPACE अनुप्रयोगः",
    title: "LIFESPACE गोपनीयता-नीतिः",
    heroDescription:
      "LIFESPACE इति आरोग्य-जीवनशैली-अनुसरण-अनुप्रयोगः अस्ति, यः प्रकाशः, अन्तरङ्ग-कार्यं, स्वास्थ्याभ्यासः, आहारः, इन्द्रिय-स्वास्थ्यं, प्रयोजनम्, क्रिया, समुदायः, अभिव्यक्तिः इत्येषु नवसु प्रमुखेषु जीवन-क्षेत्रेषु दैनिक-अभ्यासेषु मननाय उपयोगिनः सहाययति।",
    effectiveDateLabel: "प्रभाव-तिथिः",
    effectiveDateValue: "11 मई 2026",
    appliesToLabel: "अस्यां कृते",
    appliesToValue: "LIFESPACE अनुप्रयोगः",
    onThisPage: "अस्मिन् पृष्ठे",
    overviewHeading: "अवलोकनम्",
    overviewBody:
      "अयं गोपनीयता-नीतिः व्याख्यायति यत् LIFESPACE किं प्रकारेण दत्तं संगृह्णाति, तत् कथं प्रयुज्यते, तथा उपयोगिभ्यः स्वदत्तस्य विषये के विकल्पाः सन्ति।",
    backHeading: "Astrology Today प्रति प्रत्यागच्छतु",
    backBody: "भवान् मुख्य-जालपुटं प्रत्यागन्तुं शक्नोति अथवा गृह-पृष्ठात् अन्यान् विधिक-सूचनात्मक-पृष्ठान् पश्यितुं शक्नोति।",
    backLinkLabel: "← Astrology Today प्रति प्रत्यागच्छतु",
    sectionTitles: englishSections.map((section) => section.title),
  },
  pa: {
    kicker: "LIFESPACE ਐਪ",
    title: "LIFESPACE ਪਰਾਈਵੇਸੀ ਨੀਤੀ",
    heroDescription:
      "LIFESPACE ਇੱਕ ਵੈੱਲਨੈੱਸ ਅਤੇ ਜੀਵਨਸ਼ੈਲੀ-ਟਰੈਕਿੰਗ ਐਪ ਹੈ, ਜੋ ਵਰਤੋਂਕਾਰਾਂ ਨੂੰ ਜੀਵਨ ਦੇ ਨੌਂ ਮੁੱਖ ਖੇਤਰਾਂ—ਰੋਸ਼ਨੀ, ਅੰਦਰੂਨੀ ਕੰਮ, ਫਿਟਨੈੱਸ, ਖੁਰਾਕ, ਸੰਵੇਦਨਾਤਮਕ ਸਿਹਤ, ਉਦੇਸ਼, ਗਤੀਵਿਧੀ, ਕਮਿਊਨਟੀ ਅਤੇ ਅਭਿਵੈਕਤੀ—ਵਿੱਚ ਰੋਜ਼ਾਨਾ ਆਦਤਾਂ ‘ਤੇ ਮਨਨ ਕਰਨ ਵਿੱਚ ਮਦਦ ਦੇਣ ਲਈ ਬਣਾਈ ਗਈ ਹੈ।",
    effectiveDateLabel: "ਲਾਗੂ ਮਿਤੀ",
    effectiveDateValue: "11 ਮਈ 2026",
    appliesToLabel: "ਲਾਗੂ ਹੁੰਦੀ ਹੈ",
    appliesToValue: "LIFESPACE ਐਪ",
    onThisPage: "ਇਸ ਪੰਨੇ ‘ਤੇ",
    overviewHeading: "ਸੰਖੇਪ",
    overviewBody:
      "ਇਹ ਪਰਾਈਵੇਸੀ ਨੀਤੀ ਸਮਝਾਉਂਦੀ ਹੈ ਕਿ LIFESPACE ਕਿਹੜੀ ਜਾਣਕਾਰੀ ਇਕੱਠੀ ਕਰ ਸਕਦਾ ਹੈ, ਉਸ ਦਾ ਕਿਵੇਂ ਇਸਤੇਮਾਲ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ, ਅਤੇ ਵਰਤੋਂਕਾਰਾਂ ਕੋਲ ਆਪਣੇ ਡੇਟਾ ਸਬੰਧੀ ਕਿਹੜੇ ਵਿਕਲਪ ਹਨ।",
    backHeading: "Astrology Today ‘ਤੇ ਵਾਪਸ ਜਾਓ",
    backBody: "ਤੁਸੀਂ ਮੁੱਖ ਸਾਈਟ ‘ਤੇ ਵਾਪਸ ਜਾ ਸਕਦੇ ਹੋ ਜਾਂ ਹੋਮਪੇਜ ਤੋਂ ਹੋਰ ਕਾਨੂੰਨੀ ਅਤੇ ਜਾਣਕਾਰੀ ਵਾਲੇ ਪੰਨੇ ਵੇਖਣਾ ਜਾਰੀ ਰੱਖ ਸਕਦੇ ਹੋ।",
    backLinkLabel: "← Astrology Today ‘ਤੇ ਵਾਪਸ ਜਾਓ",
    sectionTitles: englishSections.map((section) => section.title),
  },
  zh: {
    kicker: "LIFESPACE 应用",
    title: "LIFESPACE 隐私政策",
    heroDescription:
      "LIFESPACE 是一款健康与生活方式追踪应用，旨在帮助用户围绕生活中的九个核心领域——光照、内在工作、健身、饮食、感官健康、目标、活动、社区和表达——反思日常习惯。",
    effectiveDateLabel: "生效日期",
    effectiveDateValue: "2026年5月11日",
    appliesToLabel: "适用于",
    appliesToValue: "LIFESPACE 应用",
    onThisPage: "本页内容",
    overviewHeading: "概览",
    overviewBody:
      "本隐私政策说明 LIFESPACE 可能收集哪些信息、这些信息可能如何被使用，以及用户对自身数据拥有哪些选择权。",
    backHeading: "返回 Astrology Today",
    backBody: "您可以返回主站点，或继续从首页浏览其他法律与信息页面。",
    backLinkLabel: "← 返回 Astrology Today",
    sectionTitles: englishSections.map((section) => section.title),
  },
  ja: {
    kicker: "LIFESPACE アプリ",
    title: "LIFESPACE プライバシーポリシー",
    heroDescription:
      "LIFESPACE は、光、内面の取り組み、フィットネス、食事、感覚的健康、目的、活動、コミュニティ、表現という人生の9つの中核分野にわたる日々の習慣を振り返るための、ウェルネスおよびライフスタイル追跡アプリです。",
    effectiveDateLabel: "発効日",
    effectiveDateValue: "2026年5月11日",
    appliesToLabel: "適用対象",
    appliesToValue: "LIFESPACE アプリ",
    onThisPage: "このページ内",
    overviewHeading: "概要",
    overviewBody:
      "本プライバシーポリシーは、LIFESPACE がどのような情報を収集し、その情報をどのように利用する可能性があるか、また利用者が自身のデータについてどのような選択肢を持つかを説明するものです。",
    backHeading: "Astrology Today に戻る",
    backBody: "メインサイトに戻るか、ホームページから他の法的・案内ページを引き続き閲覧できます。",
    backLinkLabel: "← Astrology Today に戻る",
    sectionTitles: englishSections.map((section) => section.title),
  },
  yue: {
    kicker: "LIFESPACE 應用程式",
    title: "LIFESPACE 私隱政策",
    heroDescription:
      "LIFESPACE 係一個健康同生活方式追蹤應用程式，旨在幫助用戶圍繞人生九個核心範疇——光照、內在工作、健身、飲食、感官健康、目標、活動、社群同表達——反思每日習慣。",
    effectiveDateLabel: "生效日期",
    effectiveDateValue: "2026年5月11日",
    appliesToLabel: "適用於",
    appliesToValue: "LIFESPACE 應用程式",
    onThisPage: "本頁內容",
    overviewHeading: "概覽",
    overviewBody:
      "本私隱政策講解 LIFESPACE 可能收集咩資料、點樣使用該等資料，以及用戶對自己資料擁有咩選擇權。",
    backHeading: "返回 Astrology Today",
    backBody: "你可以返回主網站，或者繼續喺首頁瀏覽其他法律同資訊頁面。",
    backLinkLabel: "← 返回 Astrology Today",
    sectionTitles: englishSections.map((section) => section.title),
  },
  ko: {
    kicker: "LIFESPACE 앱",
    title: "LIFESPACE 개인정보 처리방침",
    heroDescription:
      "LIFESPACE는 빛, 내면 작업, 피트니스, 식사, 감각 건강, 목적, 활동, 공동체, 표현이라는 삶의 아홉 가지 핵심 영역에 걸친 일상 습관을 돌아볼 수 있도록 돕는 웰니스 및 라이프스타일 추적 앱입니다.",
    effectiveDateLabel: "시행일",
    effectiveDateValue: "2026년 5월 11일",
    appliesToLabel: "적용 대상",
    appliesToValue: "LIFESPACE 앱",
    onThisPage: "이 페이지에서",
    overviewHeading: "개요",
    overviewBody:
      "본 개인정보 처리방침은 LIFESPACE가 어떤 정보를 수집할 수 있는지, 그 정보가 어떻게 사용될 수 있는지, 그리고 이용자가 자신의 데이터에 대해 어떤 선택권을 갖는지를 설명합니다.",
    backHeading: "Astrology Today로 돌아가기",
    backBody: "메인 사이트로 돌아가거나 홈페이지에서 다른 법률 및 안내 페이지를 계속 살펴볼 수 있습니다.",
    backLinkLabel: "← Astrology Today로 돌아가기",
    sectionTitles: englishSections.map((section) => section.title),
  },
};

const sectionBodyOverrides: Partial<Record<SupportedLocale, Omit<LifespacePolicySection, "id">[]>> = {
  fr: englishSections.map((section) => ({ ...section })),
  it: englishSections.map((section) => ({ ...section })),
  es: englishSections.map((section) => ({ ...section })),
};

sectionBodyOverrides.fr![0] = {
  title: "1. Informations que nous collectons",
  paragraphs: [
    "LIFESPACE peut collecter des informations fournies directement par les utilisateurs dans l’application, notamment :",
    "LIFESPACE peut également collecter des informations techniques et liées à l’usage, notamment :",
    "Si des fonctionnalités basées sur la localisation sont activées, LIFESPACE peut utiliser des informations de localisation approximative afin de fournir des retours de bien-être pertinents selon la zone géographique. Les utilisateurs peuvent gérer les autorisations de localisation dans les réglages de leur appareil.",
  ],
  bullets: [
    "Nom d’utilisateur ou nom de profil",
    "Âge, genre, taille, poids, statut tabagique et consommation d’alcool",
    "Objectifs de forme physique",
    "Activités sélectionnées, moyens d’expression créative, pratiques de travail intérieur et préférences de sens",
    "Réponses quotidiennes aux vérifications LIFESPACE",
    "Réponses aux enquêtes sur le mode de vie",
    "Objectifs, éléments du planificateur, tâches, activités personnalisées, moyens créatifs personnalisés ou autres informations saisies par l’utilisateur",
    "Scores de bien-être, scores de modules, analyses et historique des progrès",
    "Données facultatives que l’utilisateur choisit de partager via les fonctionnalités de l’application",
    "Informations d’utilisation de l’application",
    "Informations sur l’appareil",
    "Journaux de plantage",
    "Données de performance",
    "Informations de diagnostic",
    "Données analytiques utilisées pour améliorer le fonctionnement et la fiabilité de l’application",
  ],
};
sectionBodyOverrides.fr![1] = {
  title: "2. Comment nous utilisons les informations",
  bullets: [
    "Fournir les fonctionnalités essentielles de l’application",
    "Générer des scores LIFESPACE, des réflexions de bien-être et des analyses",
    "Enregistrer les préférences du profil utilisateur",
    "Suivre l’évolution du bien-être au fil du temps",
    "Personnaliser les retours en fonction des réponses de l’utilisateur",
    "Prendre en charge les fonctions de partage facultatives activées par l’utilisateur",
    "Améliorer les performances, la fiabilité et l’expérience utilisateur",
    "Résoudre les problèmes techniques",
    "Préparer de futures fonctionnalités, comme le partage thérapeute-client, l’accès à un portail web ou des services sur abonnement",
  ],
};
sectionBodyOverrides.fr![2] = {
  title: "3. Informations de santé et de bien-être",
  paragraphs: [
    "LIFESPACE est une application de bien-être, de réflexion sur le mode de vie et de suivi des habitudes.",
    "LIFESPACE n’est pas un dispositif médical et ne fournit aucun avis médical, diagnostic, traitement, guérison ni prévention d’une maladie, d’un trouble ou d’un état de santé mentale.",
    "Les informations fournies par LIFESPACE sont destinées uniquement à des fins éducatives, réflexives et de soutien au bien-être. Les utilisateurs doivent consulter un professionnel de santé qualifié, un spécialiste de la santé mentale ou un service d’urgence s’ils ont besoin d’un soutien médical, psychiatrique ou de crise.",
  ],
};
sectionBodyOverrides.fr![3] = {
  title: "4. Services tiers",
  paragraphs: [
    "LIFESPACE peut utiliser des services tiers pour soutenir les fonctionnalités de l’application, les analyses, les diagnostics, le stockage et le suivi des performances.",
    "Ces services peuvent inclure, sans s’y limiter :",
    "Les services tiers peuvent collecter et traiter des informations conformément à leurs propres politiques de confidentialité.",
    "LIFESPACE peut inclure des liens vers des vidéos YouTube publiques ou d’autres contenus tiers à des fins éducatives ou liées au bien-être. LIFESPACE ne télécharge pas, ne modifie pas, ne réhéberge pas et ne revendique pas la propriété du contenu YouTube tiers.",
  ],
  bullets: ["Firebase", "Google Firestore", "Google Analytics pour Firebase", "Outils de signalement des plantages ou de diagnostic", "Liens YouTube ou contenus YouTube intégrés", "Services Apple, y compris les services App Store, notifications et systèmes d’achat intégré, le cas échéant"],
};
sectionBodyOverrides.fr![4] = {
  title: "5. Stockage des données",
  paragraphs: [
    "Certaines données utilisateur peuvent être stockées localement sur l’appareil de l’utilisateur.",
    "Certaines données peuvent également être stockées de manière sécurisée via des services cloud tiers, tels que Firebase ou Firestore, lorsque cela est nécessaire pour assurer le fonctionnement de l’application, la synchronisation des données, le support analytique ou les fonctionnalités de partage facultatives.",
    "Bien que des efforts raisonnables soient faits pour protéger les informations des utilisateurs, aucune méthode de stockage électronique ni de transmission sur Internet n’est totalement sécurisée.",
  ],
};
sectionBodyOverrides.fr![5] = {
  title: "6. Partage des données",
  paragraphs: [
    "LIFESPACE ne vend pas les informations personnelles des utilisateurs.",
    "Les informations des utilisateurs ne peuvent être partagées que dans les situations suivantes :",
    "Si, à l’avenir, des fonctions de partage thérapeute-client ou de portail web sont activées, les utilisateurs garderont le contrôle sur le partage de leurs informations.",
  ],
  bullets: ["Lorsque cela est nécessaire pour fournir les fonctionnalités de l’application", "Avec des prestataires tiers qui soutiennent l’application", "Lorsque l’utilisateur choisit d’activer des fonctions de partage facultatives", "Lorsque la loi, un règlement, une procédure légale ou une demande gouvernementale exécutoire l’exigent", "Pour protéger les droits, la sécurité ou l’intégrité des utilisateurs, de l’application ou d’autrui"],
};
sectionBodyOverrides.fr![6] = {
  title: "7. Fonctions de partage optionnelles",
  paragraphs: [
    "LIFESPACE peut inclure ou introduire plus tard des fonctions de partage facultatives permettant aux utilisateurs de partager certaines données de bien-être, analyses, scores ou informations de progression avec un thérapeute, un partenaire de responsabilité, un portail web ou un service LIFESPACE connexe.",
    "Ces fonctions sont facultatives. Les utilisateurs sont responsables du choix d’activer ou non le partage et de la personne avec laquelle ils partagent leurs informations.",
  ],
};
sectionBodyOverrides.fr![7] = {
  title: "8. Notifications",
  paragraphs: [
    "LIFESPACE peut demander l’autorisation d’envoyer des notifications, par exemple des rappels quotidiens pour effectuer une vérification LIFESPACE.",
    "Les utilisateurs peuvent activer ou désactiver les notifications à tout moment dans les réglages de leur appareil.",
  ],
};
sectionBodyOverrides.fr![8] = {
  title: "9. Informations de localisation",
  paragraphs: [
    "LIFESPACE peut demander l’accès à la localisation si une personnalisation basée sur la position est utilisée.",
    "Les informations de localisation peuvent être utilisées pour fournir des suggestions de bien-être adaptées à la zone géographique, comme des conseils d’exposition à la lumière, du contexte environnemental ou des retours liés au mode de vie local.",
    "Les utilisateurs peuvent contrôler l’accès à la localisation via les réglages de leur appareil.",
  ],
};
sectionBodyOverrides.fr![9] = {
  title: "10. Confidentialité des enfants",
  paragraphs: [
    "LIFESPACE n’est pas destiné aux enfants de moins de 16 ans.",
    "Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants de moins de 16 ans. Si nous apprenons que des informations personnelles concernant un enfant de moins de 16 ans ont été collectées, nous prendrons des mesures raisonnables pour les supprimer.",
  ],
};
sectionBodyOverrides.fr![10] = {
  title: "11. Choix et contrôles de l’utilisateur",
  paragraphs: [
    "Les utilisateurs peuvent gérer certaines autorisations de l’application via les réglages de leur appareil, notamment :",
    "Les utilisateurs peuvent également supprimer l’application de leur appareil à tout moment.",
    "Si les utilisateurs ont des questions au sujet de leurs données ou souhaitent demander de l’aide concernant leurs informations, ils peuvent nous contacter en utilisant les coordonnées ci-dessous.",
  ],
  bullets: ["Accès à la localisation", "Autorisations de notification", "Accès aux données cellulaires", "Autorisations de suivi de l’application, le cas échéant"],
};
sectionBodyOverrides.fr![11] = {
  title: "12. Conservation des données",
  paragraphs: [
    "LIFESPACE peut conserver les informations utilisateur aussi longtemps que nécessaire pour fournir les fonctionnalités de l’application, tenir des dossiers, améliorer l’application, respecter des obligations légales, résoudre des litiges ou faire appliquer des accords.",
    "Les données stockées localement peuvent rester sur l’appareil de l’utilisateur jusqu’à la suppression de l’application ou jusqu’à ce que les données soient réinitialisées manuellement par les fonctions disponibles dans l’application.",
  ],
};
sectionBodyOverrides.fr![12] = {
  title: "13. Achats et abonnements via l’App Store",
  paragraphs: [
    "Si LIFESPACE propose des téléchargements payants, achats intégrés ou abonnements, le traitement des paiements est assuré par Apple via l’App Store.",
    "LIFESPACE ne collecte ni ne stocke directement les informations complètes de carte de paiement des utilisateurs.",
  ],
};
sectionBodyOverrides.fr![13] = {
  title: "14. Modifications de cette politique de confidentialité",
  paragraphs: [
    "Cette politique de confidentialité peut être mise à jour de temps à autre. Les mises à jour seront publiées sur cette page avec une date d’effet révisée.",
    "Les utilisateurs sont encouragés à consulter régulièrement cette politique de confidentialité.",
  ],
};
sectionBodyOverrides.fr![14] = {
  title: "15. Contact",
  paragraphs: [
    "Pour toute question concernant cette politique de confidentialité ou les pratiques de confidentialité de LIFESPACE, contactez :",
    "Astrology Today | LIFESPACE",
    "E-mail : mariosbardella@protonmail.com",
    "Site web : https://astrologytoday.ca",
  ],
};

sectionBodyOverrides.it![0] = {
  title: "1. Informazioni che raccogliamo",
  paragraphs: [
    "LIFESPACE può raccogliere informazioni fornite direttamente dagli utenti all’interno dell’app, tra cui:",
    "LIFESPACE può inoltre raccogliere informazioni tecniche e legate all’utilizzo, tra cui:",
    "Se vengono abilitate funzioni basate sulla posizione, LIFESPACE può utilizzare informazioni di localizzazione approssimativa per fornire riscontri di benessere pertinenti al contesto geografico. Gli utenti possono gestire i permessi di localizzazione tramite le impostazioni del dispositivo.",
  ],
  bullets: [
    "Nome utente o nome del profilo",
    "Età, genere, altezza, peso, stato di fumatore e consumo di alcol",
    "Obiettivi fitness",
    "Attività selezionate, canali creativi, pratiche di lavoro interiore e preferenze di scopo",
    "Risposte ai check-in quotidiani di LIFESPACE",
    "Risposte ai questionari sullo stile di vita",
    "Obiettivi, voci del planner, elementi della lista di cose da fare, attività personalizzate, canali creativi personalizzati o altre informazioni inserite dall’utente",
    "Punteggi di benessere, punteggi dei moduli, analisi e storico dei progressi",
    "Dati facoltativi che l’utente sceglie di condividere tramite le funzioni dell’app",
    "Informazioni sull’utilizzo dell’app",
    "Informazioni sul dispositivo",
    "Registri di crash",
    "Dati sulle prestazioni",
    "Informazioni diagnostiche",
    "Dati analitici utilizzati per migliorare funzionalità e affidabilità dell’app",
  ],
};
sectionBodyOverrides.it![1] = {
  title: "2. Come utilizziamo le informazioni",
  bullets: [
    "Fornire le funzioni principali dell’app",
    "Generare punteggi LIFESPACE, riflessioni sul benessere e analisi",
    "Salvare le preferenze del profilo utente",
    "Monitorare le tendenze del benessere nel tempo",
    "Personalizzare i riscontri in base alle risposte dell’utente",
    "Supportare le funzioni di condivisione opzionali scelte dall’utente",
    "Migliorare prestazioni, affidabilità ed esperienza utente",
    "Risolvere problemi tecnici",
    "Supportare funzioni future, come condivisione terapeuta-cliente, accesso a portali web o servizi in abbonamento",
  ],
};
sectionBodyOverrides.it![2] = {
  title: "3. Informazioni su salute e benessere",
  paragraphs: [
    "LIFESPACE è un’app per il benessere, la riflessione sullo stile di vita e il monitoraggio delle abitudini.",
    "LIFESPACE non è un dispositivo medico e non fornisce consulenza medica, diagnosi, trattamento, cura o prevenzione di malattie, disturbi o condizioni di salute mentale.",
    "Le informazioni fornite da LIFESPACE hanno esclusivamente finalità educative, riflessive e di supporto al benessere. Gli utenti dovrebbero consultare un professionista sanitario qualificato, uno specialista della salute mentale o un servizio di emergenza se necessitano di supporto medico, psichiatrico o di crisi.",
  ],
};
sectionBodyOverrides.it![3] = {
  title: "4. Servizi di terze parti",
  paragraphs: [
    "LIFESPACE può utilizzare servizi di terze parti per supportare funzionalità dell’app, analisi, diagnostica, archiviazione e monitoraggio delle prestazioni.",
    "Questi servizi possono includere, a titolo esemplificativo ma non esaustivo:",
    "I servizi di terze parti possono raccogliere e trattare informazioni in conformità alle proprie informative sulla privacy.",
    "LIFESPACE può includere collegamenti a video YouTube pubblici o ad altri contenuti di terze parti per finalità educative o legate al benessere. LIFESPACE non scarica, modifica, ri-ospita né rivendica la proprietà di contenuti YouTube di terzi.",
  ],
  bullets: ["Firebase", "Google Firestore", "Google Analytics per Firebase", "Strumenti di segnalazione crash o diagnostica", "Link YouTube o contenuti YouTube incorporati", "Servizi Apple, inclusi servizi App Store, notifiche e sistemi di acquisto in-app ove applicabili"],
};
sectionBodyOverrides.it![4] = {
  title: "5. Conservazione dei dati",
  paragraphs: [
    "Alcuni dati utente possono essere archiviati localmente sul dispositivo dell’utente.",
    "Altri dati possono essere archiviati in modo sicuro tramite servizi cloud di terze parti, come Firebase o Firestore, quando necessario per fornire funzionalità dell’app, sincronizzare i dati, supportare l’analisi o abilitare funzioni di condivisione opzionali.",
    "Sebbene vengano adottati sforzi ragionevoli per proteggere le informazioni degli utenti, nessun metodo di archiviazione elettronica o trasmissione via Internet è completamente sicuro.",
  ],
};
sectionBodyOverrides.it![5] = {
  title: "6. Condivisione dei dati",
  paragraphs: [
    "LIFESPACE non vende le informazioni personali degli utenti.",
    "Le informazioni degli utenti possono essere condivise solo nelle seguenti situazioni:",
    "Se in futuro verranno abilitate funzioni di condivisione terapeuta-cliente o portali web, gli utenti avranno il controllo sulla scelta di condividere o meno le proprie informazioni.",
  ],
  bullets: ["Quando necessario per fornire le funzionalità dell’app", "Con fornitori di servizi di terze parti che supportano l’app", "Quando l’utente sceglie di attivare funzioni di condivisione opzionali", "Quando richiesto da legge, regolamento, procedura legale o richiesta governativa esecutiva", "Per proteggere i diritti, la sicurezza o la protezione degli utenti, dell’app o di altri soggetti"],
};
sectionBodyOverrides.it![6] = {
  title: "7. Funzionalità di condivisione opzionali",
  paragraphs: [
    "LIFESPACE può includere o introdurre in futuro funzionalità di condivisione opzionali che consentono agli utenti di condividere dati selezionati sul benessere, analisi, punteggi o informazioni sui progressi con un terapeuta, un partner di responsabilità, un portale web o un servizio LIFESPACE correlato.",
    "Queste funzionalità sono opzionali. Gli utenti sono responsabili della scelta se abilitare la condivisione e con chi condividere le proprie informazioni.",
  ],
};
sectionBodyOverrides.it![7] = {
  title: "8. Notifiche",
  paragraphs: [
    "LIFESPACE può richiedere l’autorizzazione a inviare notifiche, come promemoria giornalieri per completare un controllo LIFESPACE.",
    "Gli utenti possono attivare o disattivare le notifiche in qualsiasi momento tramite le impostazioni del proprio dispositivo.",
  ],
};
sectionBodyOverrides.it![8] = {
  title: "9. Informazioni sulla posizione",
  paragraphs: [
    "LIFESPACE può richiedere l’accesso alle informazioni sulla posizione se viene utilizzata una personalizzazione basata sulla localizzazione.",
    "Le informazioni sulla posizione possono essere utilizzate per fornire suggerimenti di benessere rilevanti a livello geografico, come indicazioni sull’esposizione alla luce, contesto ambientale o feedback sullo stile di vita locale.",
    "Gli utenti possono controllare l’accesso alla posizione tramite le impostazioni del proprio dispositivo.",
  ],
};
sectionBodyOverrides.it![9] = {
  title: "10. Privacy dei minori",
  paragraphs: [
    "LIFESPACE non è destinato ai minori di 16 anni.",
    "Non raccogliamo consapevolmente informazioni personali di minori di 16 anni. Se veniamo a conoscenza del fatto che sono state raccolte informazioni personali di un minore di 16 anni, adotteremo misure ragionevoli per eliminarle.",
  ],
};
sectionBodyOverrides.it![10] = {
  title: "11. Scelte e controlli dell’utente",
  paragraphs: [
    "Gli utenti possono controllare alcuni permessi dell’app tramite le impostazioni del proprio dispositivo, inclusi:",
    "Gli utenti possono inoltre eliminare l’app dal proprio dispositivo in qualsiasi momento.",
    "Se gli utenti hanno domande sui propri dati o desiderano richiedere supporto in merito alle loro informazioni, possono contattarci tramite le informazioni di contatto riportate di seguito.",
  ],
  bullets: ["Accesso alla posizione", "Permessi per le notifiche", "Accesso ai dati cellulari", "Permessi di tracciamento dell’app, ove applicabili"],
};
sectionBodyOverrides.it![11] = {
  title: "12. Conservazione dei dati",
  paragraphs: [
    "LIFESPACE può conservare le informazioni degli utenti per il tempo necessario a fornire le funzionalità dell’app, mantenere registrazioni, migliorare l’app, rispettare obblighi legali, risolvere controversie o far valere accordi.",
    "I dati memorizzati localmente possono restare sul dispositivo dell’utente fino alla cancellazione dell’app o al ripristino manuale dei dati tramite le funzioni disponibili nell’app.",
  ],
};
sectionBodyOverrides.it![12] = {
  title: "13. Acquisti e abbonamenti tramite App Store",
  paragraphs: [
    "Se LIFESPACE offre download a pagamento, acquisti in-app o abbonamenti, l’elaborazione dei pagamenti viene gestita da Apple tramite l’App Store.",
    "LIFESPACE non raccoglie né conserva direttamente i dati completi della carta di pagamento degli utenti.",
  ],
};
sectionBodyOverrides.it![13] = {
  title: "14. Modifiche alla presente informativa sulla privacy",
  paragraphs: [
    "La presente informativa sulla privacy può essere aggiornata di tanto in tanto. Gli aggiornamenti saranno pubblicati su questa pagina con una data di efficacia rivista.",
    "Gli utenti sono incoraggiati a consultare periodicamente questa informativa sulla privacy.",
  ],
};
sectionBodyOverrides.it![14] = {
  title: "15. Contatti",
  paragraphs: [
    "Per domande sulla presente informativa sulla privacy o sulle pratiche di privacy di LIFESPACE, contattare:",
    "Astrology Today | LIFESPACE",
    "Email: mariosbardella@protonmail.com",
    "Sito web: https://astrologytoday.ca",
  ],
};

sectionBodyOverrides.es![0] = {
  title: "1. Información que recopilamos",
  paragraphs: [
    "LIFESPACE puede recopilar información que los usuarios proporcionan directamente dentro de la app, incluida:",
    "LIFESPACE también puede recopilar información técnica y relacionada con el uso, incluida:",
    "Si se habilitan funciones basadas en la ubicación, LIFESPACE puede utilizar información de ubicación aproximada para ofrecer retroalimentación de bienestar relevante según el contexto geográfico. Los usuarios pueden controlar los permisos de ubicación desde la configuración de su dispositivo.",
  ],
  bullets: [
    "Nombre de usuario o nombre de perfil",
    "Edad, género, altura, peso, condición de fumador e ingesta de alcohol",
    "Objetivos de acondicionamiento físico",
    "Actividades seleccionadas, salidas creativas, prácticas de trabajo interior y preferencias de propósito",
    "Respuestas a los registros diarios de LIFESPACE",
    "Respuestas a encuestas de estilo de vida",
    "Metas, entradas del planificador, elementos de lista de tareas, actividades personalizadas, salidas creativas personalizadas u otra información ingresada por el usuario",
    "Puntuaciones de bienestar, puntuaciones de módulos, analítica e historial de progreso",
    "Datos opcionales que el usuario decida compartir mediante funciones de la app",
    "Información de uso de la app",
    "Información del dispositivo",
    "Registros de fallos",
    "Datos de rendimiento",
    "Información de diagnóstico",
    "Datos analíticos utilizados para mejorar la funcionalidad y la fiabilidad de la app",
  ],
};
sectionBodyOverrides.es![1] = {
  title: "2. Cómo utilizamos la información",
  bullets: [
    "Proporcionar la funcionalidad principal de la app",
    "Generar puntuaciones de LIFESPACE, reflexiones de bienestar y analítica",
    "Guardar preferencias del perfil del usuario",
    "Hacer seguimiento de tendencias de bienestar a lo largo del tiempo",
    "Personalizar comentarios en función de las respuestas del usuario",
    "Respaldar funciones opcionales de compartición seleccionadas por el usuario",
    "Mejorar el rendimiento, la fiabilidad y la experiencia del usuario",
    "Solucionar problemas técnicos",
    "Respaldar funciones futuras, como el intercambio terapeuta-cliente, acceso a portal web o servicios por suscripción",
  ],
};
sectionBodyOverrides.es![2] = {
  title: "3. Información sobre salud y bienestar",
  paragraphs: [
    "LIFESPACE es una app de bienestar, reflexión sobre el estilo de vida y seguimiento de hábitos.",
    "LIFESPACE no es un dispositivo médico y no proporciona consejo médico, diagnóstico, tratamiento, cura ni prevención de ninguna enfermedad, trastorno o condición de salud mental.",
    "La información proporcionada por LIFESPACE tiene únicamente fines educativos, reflexivos y de apoyo al bienestar. Los usuarios deben consultar a un profesional sanitario calificado, a un especialista en salud mental o a un servicio de emergencia si necesitan apoyo médico, psiquiátrico o en crisis.",
  ],
};
sectionBodyOverrides.es![3] = {
  title: "4. Servicios de terceros",
  paragraphs: [
    "LIFESPACE puede utilizar servicios de terceros para respaldar la funcionalidad de la app, la analítica, los diagnósticos, el almacenamiento y la supervisión del rendimiento.",
    "Estos servicios pueden incluir, entre otros:",
    "Los servicios de terceros pueden recopilar y procesar información conforme a sus propias políticas de privacidad.",
    "LIFESPACE puede incluir enlaces a videos públicos de YouTube u otro contenido de terceros con fines educativos o relacionados con el bienestar. LIFESPACE no descarga, modifica, vuelve a alojar ni reclama propiedad sobre contenido de YouTube de terceros.",
  ],
  bullets: ["Firebase", "Google Firestore", "Google Analytics para Firebase", "Herramientas de diagnóstico o reporte de fallos", "Enlaces de YouTube o contenido incrustado de YouTube", "Servicios de Apple, incluidos servicios de App Store, notificaciones y sistemas de compra dentro de la app cuando corresponda"],
};
sectionBodyOverrides.es![4] = {
  title: "5. Almacenamiento de datos",
  paragraphs: [
    "Algunos datos del usuario pueden almacenarse localmente en el dispositivo del usuario.",
    "Algunos datos también pueden almacenarse de forma segura mediante servicios en la nube de terceros, como Firebase o Firestore, cuando sea necesario para proporcionar funcionalidad de la app, sincronizar datos, respaldar analítica o habilitar funciones opcionales de compartición.",
    "Aunque se hacen esfuerzos razonables para proteger la información del usuario, ningún método de almacenamiento electrónico o transmisión por Internet es completamente seguro.",
  ],
};
sectionBodyOverrides.es![5] = {
  title: "6. Intercambio de datos",
  paragraphs: [
    "LIFESPACE no vende información personal de los usuarios.",
    "La información del usuario solo puede compartirse en las siguientes situaciones:",
    "Si en el futuro se habilitan funciones de intercambio terapeuta-cliente o de portal web, los usuarios tendrán control sobre si comparten o no su información.",
  ],
  bullets: ["Cuando sea necesario para proporcionar la funcionalidad de la app", "Con proveedores de servicios de terceros que respaldan la app", "Cuando el usuario decida habilitar funciones opcionales de compartición", "Cuando lo exija la ley, regulación, proceso legal o solicitud gubernamental ejecutable", "Para proteger los derechos, la seguridad o la protección de los usuarios, de la app o de terceros"],
};
sectionBodyOverrides.es![6] = {
  title: "7. Funciones opcionales de intercambio",
  paragraphs: [
    "LIFESPACE puede incluir o introducir más adelante funciones opcionales de intercambio que permitan a los usuarios compartir determinados datos de bienestar, analítica, puntuaciones o información de progreso con un terapeuta, una persona de apoyo, un portal web o un servicio relacionado de LIFESPACE.",
    "Estas funciones son opcionales. Los usuarios son responsables de decidir si habilitan el intercambio y con quién comparten su información.",
  ],
};
sectionBodyOverrides.es![7] = {
  title: "8. Notificaciones",
  paragraphs: [
    "LIFESPACE puede solicitar permiso para enviar notificaciones, como recordatorios diarios para completar un registro de LIFESPACE.",
    "Los usuarios pueden activar o desactivar las notificaciones en cualquier momento desde la configuración de su dispositivo.",
  ],
};
sectionBodyOverrides.es![8] = {
  title: "9. Información de ubicación",
  paragraphs: [
    "LIFESPACE puede solicitar acceso a la ubicación si se utiliza personalización basada en la localización.",
    "La información de ubicación puede utilizarse para ofrecer sugerencias de bienestar relevantes según la zona geográfica, como orientación sobre exposición a la luz, contexto ambiental o comentarios sobre estilo de vida local.",
    "Los usuarios pueden controlar el acceso a la ubicación desde la configuración de su dispositivo.",
  ],
};
sectionBodyOverrides.es![9] = {
  title: "10. Privacidad de menores",
  paragraphs: [
    "LIFESPACE no está destinada a menores de 16 años.",
    "No recopilamos intencionalmente información personal de menores de 16 años. Si tomamos conocimiento de que se ha recopilado información personal de un menor de 16 años, tomaremos medidas razonables para eliminarla.",
  ],
};
sectionBodyOverrides.es![10] = {
  title: "11. Opciones y controles del usuario",
  paragraphs: [
    "Los usuarios pueden controlar ciertos permisos de la app desde la configuración de su dispositivo, incluidos:",
    "Los usuarios también pueden eliminar la app de su dispositivo en cualquier momento.",
    "Si los usuarios tienen preguntas sobre sus datos o desean solicitar asistencia respecto de su información, pueden contactarnos utilizando la información de contacto que figura a continuación.",
  ],
  bullets: ["Acceso a la ubicación", "Permisos de notificación", "Acceso a datos móviles", "Permisos de seguimiento de la app, cuando corresponda"],
};
sectionBodyOverrides.es![11] = {
  title: "12. Conservación de datos",
  paragraphs: [
    "LIFESPACE puede conservar la información del usuario durante el tiempo necesario para proporcionar funcionalidad de la app, mantener registros, mejorar la app, cumplir obligaciones legales, resolver disputas o hacer cumplir acuerdos.",
    "Los datos almacenados localmente pueden permanecer en el dispositivo del usuario hasta que la app sea eliminada o los datos se restablezcan manualmente mediante las funciones disponibles en la app.",
  ],
};
sectionBodyOverrides.es![12] = {
  title: "13. Compras y suscripciones en App Store",
  paragraphs: [
    "Si LIFESPACE ofrece descargas de pago, compras dentro de la app o suscripciones, el procesamiento de pagos es gestionado por Apple a través de App Store.",
    "LIFESPACE no recopila ni almacena directamente la información completa de la tarjeta de pago de los usuarios.",
  ],
};
sectionBodyOverrides.es![13] = {
  title: "14. Cambios en esta política de privacidad",
  paragraphs: [
    "Esta política de privacidad puede actualizarse periódicamente. Las actualizaciones se publicarán en esta página con una fecha de vigencia revisada.",
    "Se recomienda a los usuarios revisar periódicamente esta política de privacidad.",
  ],
};
sectionBodyOverrides.es![14] = {
  title: "15. Contacto",
  paragraphs: [
    "Para preguntas sobre esta política de privacidad o las prácticas de privacidad de LIFESPACE, contacte con:",
    "Astrology Today | LIFESPACE",
    "Correo electrónico: mariosbardella@protonmail.com",
    "Sitio web: https://astrologytoday.ca",
  ],
};

sectionBodyOverrides.hi = [
  {
    title: englishSections[0].title,
    paragraphs: [
      "LIFESPACE ऐप के भीतर उपयोगकर्ताओं द्वारा सीधे दी गई जानकारी एकत्र कर सकता है, और तकनीकी तथा उपयोग-संबंधी जानकारी भी एकत्र कर सकता है। यदि स्थान-आधारित सुविधाएँ सक्षम हों, तो ऐप प्रासंगिक वेलनेस प्रतिक्रिया देने के लिए अनुमानित स्थान जानकारी का उपयोग कर सकता है।",
    ],
    bullets: [
      "उपयोगकर्ता नाम या प्रोफ़ाइल नाम",
      "आयु, लिंग, ऊँचाई, वजन, धूम्रपान स्थिति और शराब सेवन",
      "फ़िटनेस लक्ष्य",
      "चयनित गतिविधियाँ, रचनात्मक माध्यम, आंतरिक कार्य अभ्यास और उद्देश्य संबंधी प्राथमिकताएँ",
      "दैनिक LIFESPACE चेक-इन प्रतिक्रियाएँ",
      "जीवनशैली सर्वेक्षण प्रतिक्रियाएँ",
      "लक्ष्य, प्लानर प्रविष्टियाँ, टू-डू सूची आइटम, कस्टम गतिविधियाँ, कस्टम रचनात्मक माध्यम या अन्य उपयोगकर्ता-प्रविष्ट जानकारी",
      "वेलनेस स्कोर, मॉड्यूल स्कोर, विश्लेषण और प्रगति इतिहास",
      "ऐप सुविधाओं के माध्यम से उपयोगकर्ता द्वारा साझा किया गया वैकल्पिक डेटा",
      "ऐप उपयोग जानकारी",
      "डिवाइस जानकारी",
      "क्रैश लॉग",
      "प्रदर्शन डेटा",
      "डायग्नोस्टिक जानकारी",
      "ऐप की कार्यक्षमता और विश्वसनीयता सुधारने हेतु विश्लेषणात्मक डेटा",
    ],
  },
  {
    title: englishSections[1].title,
    bullets: [
      "ऐप की मुख्य कार्यक्षमता प्रदान करना",
      "LIFESPACE स्कोर, वेलनेस चिंतन और विश्लेषण उत्पन्न करना",
      "उपयोगकर्ता प्रोफ़ाइल प्राथमिकताएँ सहेजना",
      "समय के साथ वेलनेस रुझानों को ट्रैक करना",
      "उपयोगकर्ता प्रतिक्रियाओं के आधार पर फीडबैक को वैयक्तिक बनाना",
      "उपयोगकर्ता द्वारा चुनी गई वैकल्पिक शेयरिंग सुविधाओं का समर्थन करना",
      "ऐप प्रदर्शन, विश्वसनीयता और उपयोगकर्ता अनुभव सुधारना",
      "तकनीकी समस्याओं का समाधान करना",
      "भविष्य की सुविधाओं का समर्थन करना, जैसे therapist-client sharing, web portal access या subscription-based services",
    ],
  },
  {
    title: englishSections[2].title,
    paragraphs: [
      "LIFESPACE एक वेलनेस, जीवनशैली-चिंतन और आदत-ट्रैकिंग ऐप है। यह कोई चिकित्सा उपकरण नहीं है और न ही चिकित्सा सलाह, निदान, उपचार, रोग-निवारण या मानसिक स्वास्थ्य स्थिति के लिए चिकित्सकीय सहायता प्रदान करता है। यहाँ दी गई जानकारी केवल शैक्षिक, चिंतनशील और वेलनेस-सहायता उद्देश्यों के लिए है।",
    ],
  },
  {
    title: englishSections[3].title,
    paragraphs: [
      "LIFESPACE ऐप की कार्यक्षमता, विश्लेषण, डायग्नोस्टिक्स, स्टोरेज और प्रदर्शन मॉनिटरिंग के लिए तृतीय-पक्ष सेवाओं का उपयोग कर सकता है। ऐसे तृतीय-पक्ष प्रदाता अपनी स्वयं की गोपनीयता नीतियों के अनुसार डेटा संसाधित कर सकते हैं, और ऐप सार्वजनिक YouTube लिंक या अन्य तृतीय-पक्ष सामग्री का संदर्भ भी दे सकता है।",
    ],
    bullets: [
      "Firebase",
      "Google Firestore",
      "Google Analytics for Firebase",
      "क्रैश रिपोर्टिंग या डायग्नोस्टिक टूल्स",
      "YouTube लिंक या एम्बेडेड YouTube सामग्री",
      "Apple सेवाएँ, जिनमें App Store सेवाएँ, सूचनाएँ और लागू होने पर in-app purchase systems शामिल हैं",
    ],
  },
  {
    title: englishSections[4].title,
    paragraphs: [
      "कुछ उपयोगकर्ता डेटा डिवाइस पर स्थानीय रूप से संग्रहीत हो सकता है। कुछ डेटा Firebase या Firestore जैसी तृतीय-पक्ष क्लाउड सेवाओं के माध्यम से सुरक्षित रूप से संग्रहीत किया जा सकता है जब ऐप की कार्यक्षमता, डेटा सिंक, विश्लेषण या वैकल्पिक शेयरिंग सुविधाओं के लिए इसकी आवश्यकता हो।",
      "यद्यपि उपयोगकर्ता जानकारी की सुरक्षा के लिए युक्तिसंगत प्रयास किए जाते हैं, इंटरनेट पर इलेक्ट्रॉनिक संग्रहण या प्रसारण का कोई भी तरीका पूर्णतः सुरक्षित नहीं है।",
    ],
  },
  {
    title: englishSections[5].title,
    paragraphs: [
      "LIFESPACE उपयोगकर्ताओं की व्यक्तिगत जानकारी नहीं बेचता। जानकारी केवल ऐप चलाने, तृतीय-पक्ष सेवा प्रदाताओं की सहायता, उपयोगकर्ता द्वारा चुनी गई वैकल्पिक शेयरिंग, कानूनी आवश्यकताओं या सुरक्षा कारणों से साझा की जा सकती है।",
      "यदि भविष्य में therapist-client sharing या web portal सुविधाएँ सक्षम की जाती हैं, तो उपयोगकर्ताओं को अपने डेटा साझा करने पर नियंत्रण दिया जाएगा।",
    ],
    bullets: [
      "जब ऐप की कार्यक्षमता प्रदान करने के लिए आवश्यक हो",
      "ऐप को समर्थन देने वाले तृतीय-पक्ष सेवा प्रदाताओं के साथ",
      "जब उपयोगकर्ता वैकल्पिक शेयरिंग सुविधाएँ सक्षम करना चुने",
      "जब कानून, विनियमन, कानूनी प्रक्रिया या लागू सरकारी अनुरोध इसकी मांग करे",
      "उपयोगकर्ताओं, ऐप या अन्य लोगों के अधिकार, सुरक्षा या संरक्षण के लिए",
    ],
  },
  {
    title: englishSections[6].title,
    paragraphs: [
      "LIFESPACE अभी या भविष्य में ऐसी वैकल्पिक शेयरिंग सुविधाएँ दे सकता है जिनसे उपयोगकर्ता चुने हुए वेलनेस डेटा, स्कोर, विश्लेषण या प्रगति जानकारी किसी therapist, accountability partner, web portal या संबंधित LIFESPACE सेवा के साथ साझा कर सकें। यह सुविधाएँ वैकल्पिक हैं, और साझा करने का निर्णय उपयोगकर्ता का होगा।",
    ],
  },
  {
    title: englishSections[7].title,
    paragraphs: [
      "LIFESPACE दैनिक चेक-इन अनुस्मारक जैसी सूचनाएँ भेजने की अनुमति माँग सकता है। उपयोगकर्ता अपने डिवाइस सेटिंग्स के माध्यम से किसी भी समय सूचनाएँ सक्षम या अक्षम कर सकते हैं।",
    ],
  },
  {
    title: englishSections[8].title,
    paragraphs: [
      "यदि स्थान-आधारित वैयक्तिकरण उपयोग में हो, तो LIFESPACE स्थान जानकारी की अनुमति माँग सकता है। यह जानकारी प्रकाश-संपर्क मार्गदर्शन, पर्यावरणीय संदर्भ या स्थानीय जीवनशैली सुझाव जैसे भौगोलिक रूप से प्रासंगिक वेलनेस फीडबैक देने के लिए उपयोग की जा सकती है।",
    ],
  },
  {
    title: englishSections[9].title,
    paragraphs: [
      "LIFESPACE 16 वर्ष से कम आयु के बच्चों के लिए अभिप्रेत नहीं है। हम जानबूझकर 16 वर्ष से कम आयु के बच्चों की व्यक्तिगत जानकारी एकत्र नहीं करते, और यदि ऐसा डेटा एकत्र हो जाने की जानकारी मिलती है तो उसे हटाने के लिए युक्तिसंगत कदम उठाए जाएँगे।",
    ],
  },
  {
    title: englishSections[10].title,
    paragraphs: [
      "उपयोगकर्ता अपने डिवाइस सेटिंग्स के माध्यम से कुछ ऐप अनुमतियों को नियंत्रित कर सकते हैं और किसी भी समय ऐप को हटा सकते हैं। यदि उपयोगकर्ताओं को अपने डेटा के बारे में प्रश्न हों या वे सहायता चाहते हों, तो वे नीचे दिए गए संपर्क विवरणों का उपयोग कर सकते हैं।",
    ],
    bullets: [
      "स्थान पहुँच",
      "सूचना अनुमतियाँ",
      "सेलुलर डेटा पहुँच",
      "जहाँ लागू हो, ऐप ट्रैकिंग अनुमतियाँ",
    ],
  },
  {
    title: englishSections[11].title,
    paragraphs: [
      "LIFESPACE उपयोगकर्ता जानकारी को उतनी अवधि तक सुरक्षित रख सकता है जितनी ऐप की कार्यक्षमता प्रदान करने, रिकॉर्ड बनाए रखने, ऐप सुधारने, कानूनी दायित्व पूरा करने, विवाद सुलझाने या समझौतों को लागू करने के लिए आवश्यक हो। डिवाइस पर स्थानीय रूप से संग्रहीत डेटा ऐप हटाने या ऐप सुविधाओं के माध्यम से मैन्युअल रीसेट होने तक बना रह सकता है।",
    ],
  },
  {
    title: englishSections[12].title,
    paragraphs: [
      "यदि LIFESPACE भुगतान-आधारित डाउनलोड, in-app purchases या subscriptions प्रदान करता है, तो भुगतान प्रसंस्करण Apple द्वारा App Store के माध्यम से संभाला जाएगा। LIFESPACE उपयोगकर्ताओं की पूर्ण भुगतान कार्ड जानकारी सीधे एकत्र या संग्रहीत नहीं करता।",
    ],
  },
  {
    title: englishSections[13].title,
    paragraphs: [
      "यह गोपनीयता नीति समय-समय पर अपडेट की जा सकती है। अपडेट इस पृष्ठ पर संशोधित प्रभावी तिथि के साथ प्रकाशित किए जाएँगे, और उपयोगकर्ताओं को समय-समय पर इस नीति की समीक्षा करने के लिए प्रोत्साहित किया जाता है।",
    ],
  },
  {
    title: englishSections[14].title,
    paragraphs: [
      "यदि इस गोपनीयता नीति या LIFESPACE की गोपनीयता प्रथाओं के बारे में कोई प्रश्न हों, तो संपर्क करें: Astrology Today | LIFESPACE, Email: mariosbardella@protonmail.com, Website: https://astrologytoday.ca",
    ],
  },
];

sectionBodyOverrides.ur = [
  {
    title: englishSections[0].title,
    paragraphs: [
      "LIFESPACE ایپ کے اندر صارفین کی جانب سے براہِ راست فراہم کردہ معلومات جمع کر سکتا ہے، اور تکنیکی و استعمال سے متعلق معلومات بھی اکٹھی کر سکتا ہے۔ اگر مقام پر مبنی فیچرز فعال ہوں تو ایپ جغرافیائی طور پر متعلقہ فلاحی فیڈبیک دینے کے لیے اندازاً لوکیشن معلومات استعمال کر سکتی ہے۔",
    ],
    bullets: [
      "یوزرنیم یا پروفائل نام",
      "عمر، جنس، قد، وزن، تمباکو نوشی کی حالت، اور شراب کا استعمال",
      "فٹنس اہداف",
      "منتخب سرگرمیاں، تخلیقی ذرائع، اندرونی کام کی مشقیں، اور مقصد سے متعلق ترجیحات",
      "روزانہ LIFESPACE چیک اِن جوابات",
      "طرزِ زندگی سروے کے جوابات",
      "اہداف، پلانر اندراجات، ٹو-ڈو فہرست آئٹمز، کسٹم سرگرمیاں، کسٹم تخلیقی ذرائع یا دیگر صارف کی درج کردہ معلومات",
      "فلاحی اسکورز، ماڈیول اسکورز، اینالیٹکس، اور پیش رفت کی تاریخ",
      "اختیاری ڈیٹا جو صارف ایپ فیچرز کے ذریعے شیئر کرنا منتخب کرے",
      "ایپ کے استعمال کی معلومات",
      "ڈیوائس معلومات",
      "کریش لاگز",
      "کارکردگی کا ڈیٹا",
      "تشخیصی معلومات",
      "ایپ کی فعالیت اور بھروسا بہتر بنانے کے لیے استعمال ہونے والا اینالیٹکس ڈیٹا",
    ],
  },
  {
    title: englishSections[1].title,
    bullets: [
      "ایپ کی بنیادی فعالیت فراہم کرنا",
      "LIFESPACE اسکورز، فلاحی عکاسی، اور اینالیٹکس تیار کرنا",
      "صارف پروفائل ترجیحات محفوظ کرنا",
      "وقت کے ساتھ فلاحی رجحانات کو ٹریک کرنا",
      "صارف کے جوابات کی بنیاد پر فیڈبیک کو ذاتی بنانا",
      "صارف کے منتخب کردہ اختیاری شیئرنگ فیچرز کی معاونت کرنا",
      "ایپ کی کارکردگی، بھروسا اور صارف کے تجربے کو بہتر بنانا",
      "تکنیکی مسائل حل کرنا",
      "مستقبل کے فیچرز کی معاونت کرنا، جیسے therapist-client sharing، web portal access، یا subscription-based services",
    ],
  },
  {
    title: englishSections[2].title,
    paragraphs: [
      "LIFESPACE ایک فلاحی، طرزِ زندگی عکاسی، اور عادات ٹریک کرنے والی ایپ ہے۔ یہ کوئی طبی آلہ نہیں ہے اور نہ ہی طبی مشورہ، تشخیص، علاج، شفا یا کسی بیماری، عارضے یا ذہنی صحت کی کیفیت کی روک تھام فراہم کرتی ہے۔ اس میں دی گئی معلومات صرف تعلیمی، عکاسانہ اور فلاحی معاونت کے مقاصد کے لیے ہیں۔",
    ],
  },
  {
    title: englishSections[3].title,
    paragraphs: [
      "LIFESPACE ایپ کی فعالیت، اینالیٹکس، تشخیص، اسٹوریج اور کارکردگی مانیٹرنگ کی معاونت کے لیے تیسرے فریق کی خدمات استعمال کر سکتا ہے۔ یہ خدمات اپنی اپنی پرائیویسی پالیسیوں کے مطابق معلومات پروسیس کر سکتی ہیں، اور ایپ تعلیمی یا فلاحی مقاصد کے لیے عوامی YouTube لنکس یا دیگر تیسرے فریق مواد بھی شامل کر سکتی ہے۔",
    ],
    bullets: [
      "Firebase",
      "Google Firestore",
      "Google Analytics for Firebase",
      "کریش رپورٹنگ یا تشخیصی ٹولز",
      "YouTube لنکس یا ایمبیڈڈ YouTube مواد",
      "Apple سروسز، بشمول App Store سروسز، نوٹیفکیشنز، اور جہاں لاگو ہو in-app purchase systems",
    ],
  },
  {
    title: englishSections[4].title,
    paragraphs: [
      "کچھ صارف ڈیٹا مقامی طور پر صارف کے ڈیوائس پر محفوظ ہو سکتا ہے۔ کچھ ڈیٹا Firebase یا Firestore جیسی تیسرے فریق کلاؤڈ سروسز کے ذریعے محفوظ کیا جا سکتا ہے جب ایپ کی فعالیت، ڈیٹا ہم آہنگی، اینالیٹکس یا اختیاری شیئرنگ فیچرز کے لیے ضرورت ہو۔",
      "اگرچہ معلومات کے تحفظ کے لیے معقول کوششیں کی جاتی ہیں، انٹرنیٹ پر کسی بھی الیکٹرانک ذخیرے یا ترسیل کا کوئی طریقہ مکمل طور پر محفوظ نہیں ہوتا۔",
    ],
  },
  {
    title: englishSections[5].title,
    paragraphs: [
      "LIFESPACE صارف کی ذاتی معلومات فروخت نہیں کرتا۔ معلومات صرف ایپ کی فعالیت فراہم کرنے، معاون تیسرے فریق سروس فراہم کنندگان، صارف کی منتخب کردہ اختیاری شیئرنگ، قانونی تقاضوں، یا حقوق اور حفاظت کے تحفظ کے لیے شیئر کی جا سکتی ہیں۔",
      "اگر مستقبل میں therapist-client sharing یا web portal فیچرز فعال کیے جاتے ہیں، تو صارفین کو اپنے ڈیٹا کی شیئرنگ پر کنٹرول دیا جائے گا۔",
    ],
    bullets: [
      "جب ایپ کی فعالیت فراہم کرنے کے لیے ضروری ہو",
      "ان تیسرے فریق سروس فراہم کنندگان کے ساتھ جو ایپ کی معاونت کرتے ہیں",
      "جب صارف اختیاری شیئرنگ فیچرز فعال کرنا منتخب کرے",
      "جب قانون، ضابطہ، قانونی عمل، یا قابلِ نفاذ حکومتی درخواست اس کا تقاضا کرے",
      "صارفین، ایپ، یا دیگر افراد کے حقوق، حفاظت، یا سیکیورٹی کے تحفظ کے لیے",
    ],
  },
  {
    title: englishSections[6].title,
    paragraphs: [
      "LIFESPACE اس وقت یا مستقبل میں اختیاری شیئرنگ فیچرز شامل کر سکتا ہے جن کے ذریعے صارف منتخب فلاحی ڈیٹا، اسکورز، اینالیٹکس، یا پیش رفت کی معلومات کسی therapist، accountability partner، web portal، یا متعلقہ LIFESPACE سروس کے ساتھ شیئر کر سکے۔ یہ فیچرز اختیاری ہیں، اور شیئرنگ فعال کرنا یا نہ کرنا مکمل طور پر صارف کا انتخاب ہے۔",
    ],
  },
  {
    title: englishSections[7].title,
    paragraphs: [
      "LIFESPACE روزانہ چیک مکمل کرنے کی یاد دہانی جیسی نوٹیفکیشنز بھیجنے کی اجازت طلب کر سکتا ہے۔ صارفین اپنے ڈیوائس سیٹنگز کے ذریعے کسی بھی وقت نوٹیفکیشنز فعال یا غیر فعال کر سکتے ہیں۔",
    ],
  },
  {
    title: englishSections[8].title,
    paragraphs: [
      "اگر مقام پر مبنی ذاتی نوعیت کا استعمال ہو تو LIFESPACE لوکیشن معلومات تک رسائی مانگ سکتا ہے۔ لوکیشن معلومات روشنی سے متعلق رہنمائی، ماحولیاتی تناظر، یا مقامی طرزِ زندگی فیڈبیک جیسی جغرافیائی طور پر متعلقہ فلاحی تجاویز دینے کے لیے استعمال کی جا سکتی ہیں۔",
    ],
  },
  {
    title: englishSections[9].title,
    paragraphs: [
      "LIFESPACE 16 سال سے کم عمر بچوں کے لیے نہیں بنایا گیا۔ ہم جان بوجھ کر 16 سال سے کم عمر بچوں کی ذاتی معلومات جمع نہیں کرتے، اور اگر ہمیں ایسے ڈیٹا کے جمع ہونے کا علم ہو تو ہم اسے حذف کرنے کے لیے معقول اقدامات کریں گے۔",
    ],
  },
  {
    title: englishSections[10].title,
    paragraphs: [
      "صارفین اپنے ڈیوائس سیٹنگز کے ذریعے بعض ایپ پرمیشنز کو کنٹرول کر سکتے ہیں اور کسی بھی وقت ایپ حذف کر سکتے ہیں۔ اگر صارفین کو اپنے ڈیٹا کے بارے میں سوالات ہوں یا وہ مدد چاہیں، تو وہ نیچے دی گئی رابطہ معلومات استعمال کر سکتے ہیں۔",
    ],
    bullets: ["لوکیشن رسائی", "نوٹیفکیشن پرمیشنز", "سیلولر ڈیٹا رسائی", "جہاں لاگو ہو، ایپ ٹریکنگ پرمیشنز"],
  },
  {
    title: englishSections[11].title,
    paragraphs: [
      "LIFESPACE صارف کی معلومات کو اتنی مدت تک محفوظ رکھ سکتا ہے جتنی ایپ کی فعالیت، ریکارڈ برقرار رکھنے، ایپ کو بہتر بنانے، قانونی ذمہ داریوں کی تکمیل، تنازعات کے حل، یا معاہدوں کے نفاذ کے لیے درکار ہو۔ مقامی طور پر محفوظ ڈیٹا ایپ حذف ہونے یا دستی طور پر ری سیٹ ہونے تک ڈیوائس پر رہ سکتا ہے۔",
    ],
  },
  {
    title: englishSections[12].title,
    paragraphs: [
      "اگر LIFESPACE بامعاوضہ ڈاؤن لوڈز، in-app purchases، یا subscriptions فراہم کرتا ہے، تو ادائیگیوں کی پروسیسنگ Apple کے ذریعے App Store میں کی جاتی ہے۔ LIFESPACE صارفین کے مکمل ادائیگی کارڈ کی معلومات براہِ راست جمع یا محفوظ نہیں کرتا۔",
    ],
  },
  {
    title: englishSections[13].title,
    paragraphs: [
      "یہ پرائیویسی پالیسی وقتاً فوقتاً اپ ڈیٹ کی جا سکتی ہے۔ اپ ڈیٹس اسی صفحے پر نئی مؤثر تاریخ کے ساتھ شائع کی جائیں گی، اور صارفین کو وقتاً فوقتاً اس پالیسی کا جائزہ لینے کی ترغیب دی جاتی ہے۔",
    ],
  },
  {
    title: englishSections[14].title,
    paragraphs: [
      "اس پرائیویسی پالیسی یا LIFESPACE کی پرائیویسی مشقوں کے بارے میں سوالات کے لیے رابطہ کریں: Astrology Today | LIFESPACE, Email: mariosbardella@protonmail.com, Website: https://astrologytoday.ca",
    ],
  },
];

sectionBodyOverrides.sa = [
  { title: englishSections[0].title, paragraphs: ["LIFESPACE अनुप्रयोगः उपयोगिभिः प्रत्यक्षतया दत्तां सूचनां संगृह्णाति, तथा तांत्रिक-उपयोग-संबद्ध-सूचनामपि संगृह्णाति। यदि स्थानाधारित-विशेषताः सक्रियाः स्युः, तर्हि एषः भौगोलिकरूपेण उपयुक्तं आरोग्य-प्रतिक्रियां दातुं सामीप्य-स्थान-सूचनां उपयोगयितुं शक्नोति।"], bullets: ["उपयोक्तृ-नाम वा रूपरेखा-नाम", "वयः, लिङ्गम्, उन्नतिः, भारः, धूम्रपान-स्थिति:, मद्य-सेवनम्", "स्वास्थ्याभ्यास-लक्ष्याणि", "चयनित-क्रियाः, सृजनात्मक-मार्गाः, आन्तरिक-कार्य-अभ्यासाः, प्रयोजन-रुचयः", "दैनिक-LIFESPACE-चेक-इन्-प्रत्युत्तराणि", "जीवनशैली-सर्वेक्षण-प्रत्युत्तराणि", "लक्ष्याणि, योजना-प्रविष्टयः, कार्य-सूची-पदार्थाः, कस्टम-क्रियाः, कस्टम-सृजनात्मक-मार्गाः, अन्यानि उपयोगिदत्त-सूचनानि", "आरोग्याङ्काः, मॉड्यूल-अङ्काः, विश्लेषणम्, प्रगति-इतिहासः", "उपयोगिना ऐच्छिकतया साझीकृतं दत्तम्", "अनुप्रयोग-उपयोग-सूचना", "उपकरण-सूचना", "क्रैश-लेखाः", "कार्यक्षमता-दत्तम्", "निदान-सूचना", "अनुप्रयोग-विश्वसनीयता-सुधारार्थं विश्लेषण-दत्तम्"] },
  { title: englishSections[1].title, bullets: ["अनुप्रयोगस्य मूल-कार्यप्रणाली-प्रदानम्", "LIFESPACE-अङ्कानां, आरोग्य-चिन्तनस्य, विश्लेषणस्य च निर्माणम्", "उपयोक्तृ-रूपरेखा-रुचीनां संरक्षणम्", "कालान्तरं आरोग्य-प्रवृत्तीनां निरीक्षणम्", "उपयोक्तृ-प्रत्युत्तराधारेण प्रतिक्रियायाः व्यक्तिगतीकरणम्", "उपयोक्त्रा चयनित-ऐच्छिक-साझीकरण-विशेषतानां समर्थनम्", "अनुप्रयोग-कार्यक्षमता-विश्वसनीयता-उपयोक्तृ-अनुभवस्य सुधारः", "तांत्रिक-दोष-निवारणम्", "भविष्य-विशेषतानां समर्थनम्, यथा therapist-client sharing, web portal access, subscription-based services"] },
  { title: englishSections[2].title, paragraphs: ["LIFESPACE इति आरोग्य-जीवनशैली-चिन्तन-अभ्यास-अनुसरण-अनुप्रयोगः अस्ति। एषः न चिकित्सकीय-उपकरणम्, न च चिकित्सा-परामर्शं, निदानम्, उपचारम्, रोग-निवारणं वा मानसिक-स्वास्थ्य-समर्थनं प्रत्यक्षतया प्रददाति। अत्र प्रदत्ता सूचना केवलं शैक्षिक-चिन्तनात्मक-आरोग्य-सहायक-प्रयोजनार्थं अस्ति।"] },
  { title: englishSections[3].title, paragraphs: ["LIFESPACE तृतीय-पक्ष-सेवानां उपयोगं कर्तुं शक्नोति येन अनुप्रयोग-कार्यप्रणाली, विश्लेषणम्, निदानम्, भण्डारणम्, कार्य-निरीक्षणं च समर्थ्यते। एताः सेवाः स्वीय-गोपनीयता-नीतिभिः अनुसारं सूचनां संसाधयन्ति, तथा अनुप्रयोगः सार्वजनिक-YouTube-संयोजकान् अन्य-तृतीय-पक्ष-विषयवस्तुं वा द्रष्टुं शक्नोति।"], bullets: ["Firebase", "Google Firestore", "Google Analytics for Firebase", "क्रैश-रिपोर्टिंग-निदान-उपकरणानि", "YouTube-संयोजकानि अथवा अन्तर्निर्मित-YouTube-विषयवस्तु", "Apple-सेवाः, यत्र App Store-सेवाः, सूचनाः, तथा आवश्यके in-app purchase systems"] },
  { title: englishSections[4].title, paragraphs: ["केचन उपयोक्तृ-दत्तांशाः उपकरणे स्थानीयतया सञ्चिताः भवितुं शक्नुवन्ति। अन्ये दत्तांशाः Firebase अथवा Firestore इत्यादि तृतीय-पक्ष-मेघ-सेवाभिः सुरक्षिततया सञ्चीयन्ते यदि अनुप्रयोग-कार्यप्रणाली, दत्त-साम्यीकरणम्, विश्लेषण-समर्थनम्, ऐच्छिक-साझीकरण-विशेषताः वा आवश्यकाः स्युः।", "यद्यपि रक्षणार्थं युक्तियुक्त-प्रयत्नाः क्रियन्ते, तथापि जालमार्गेण दत्त-सञ्चयनं वा प्रेषणं पूर्णतया सुरक्षितं न भवति।"] },
  { title: englishSections[5].title, paragraphs: ["LIFESPACE उपयोगिनां व्यक्तिगत-सूचनां न विक्रीणाति। एषा सूचना केवलं अनुप्रयोग-कार्यप्रणाली-प्रदानाय, सहायक-तृतीय-पक्ष-सेवकानां साहाय्याय, उपयोगिना चयनित-ऐच्छिक-साझीकरणाय, विधि-आवश्यकताभ्यः, अथवा अधिकार-सुरक्षा-रक्षणार्थं साझीकर्तुं शक्यते।", "यदि भविष्ये therapist-client sharing अथवा web portal-विशेषताः सक्रियाः स्युः, तर्हि उपयोगिभ्यः स्वसूचनासाझीकरणे नियन्त्रणं दास्यते।"], bullets: ["अनुप्रयोग-कार्यप्रणाली-प्रदानाय आवश्यके", "अनुप्रयोगं समर्थयन्ति तृतीय-पक्ष-सेवाप्रदातृभिः सह", "यदा उपयोगी ऐच्छिक-साझीकरण-विशेषताः सक्रियीकर्तुं व्रणीते", "यदा विधिः, विनियमः, न्याय-प्रक्रिया, अथवा सरकारी-अनुरोधः अपेक्षते", "उपयोगिनां, अनुप्रयोगस्य, अन्येषां वा अधिकार-सुरक्षा-रक्षणार्थम्"] },
  { title: englishSections[6].title, paragraphs: ["LIFESPACE अधुना वा भविष्ये ऐच्छिक-साझीकरण-विशेषताः स्थापयितुं शक्नोति येन उपयोगी चयनित-आरोग्य-दत्तांशान्, अङ्कान्, विश्लेषणम्, प्रगति-सूचनां च therapist, accountability partner, web portal, वा सम्बन्धित-LIFESPACE-सेवया सह साझीकर्तुं शक्नोति। एताः विशेषताः ऐच्छिकाः सन्ति, तथा साझीकरणं कर्तुं वा न कर्तुं उपयोगिनः एव निर्णयः।"] },
  { title: englishSections[7].title, paragraphs: ["LIFESPACE दैनिक-स्मारक-सूचनादीन् प्रेषयितुं अनुमतिं याचितुं शक्नोति। उपयोगिनः स्वीय-उपकरण-नियन्त्रणेषु सूचनाः कदापि सक्रियीकर्तुं निष्क्रियीकर्तुं वा शक्नुवन्ति।"] },
  { title: englishSections[8].title, paragraphs: ["यदि स्थानाधारित-व्यक्तिगतीकरणं प्रयुज्यते, तर्हि LIFESPACE स्थान-सूचनायाः प्रवेशं याचते। एषा सूचना प्रकाश-उपदेशः, पर्यावरण-सन्दर्भः, स्थानीय-जीवनशैली-प्रतिक्रिया इत्यादिषु भौगोलिक-आरोग्य-सूचनार्थं उपयुज्यते।"] },
  { title: englishSections[9].title, paragraphs: ["LIFESPACE षोडशवर्षात् न्यूनवयसाम् बालकानां कृते न निर्मितः। वयं जानाति चेत् यत् षोडशवर्षात् न्यूनवयस्कस्य व्यक्तिगत-सूचना संगृहीता, तर्हि तस्याः लोपनार्थं युक्तियुक्त-उपायाः स्वीकर्तव्याः।"] },
  { title: englishSections[10].title, paragraphs: ["उपयोगिनः उपकरण-नियन्त्रणद्वारा काश्चन अनुप्रयोग-अनुमतयः नियन्त्रयितुं शक्नुवन्ति तथा कदापि अनुप्रयोगं अपासयितुं शक्नुवन्ति। यदि स्वदत्तस्य विषये प्रश्नाः स्युः अथवा सहाय्यं वाञ्छन्ति, तर्हि अधोलिखित-संपर्क-विवरणानि उपयोगयितुं शक्यन्ते।"], bullets: ["स्थान-प्रवेशः", "सूचना-अनुमतयः", "सेल्युलर-दत्त-प्रवेशः", "आवश्यकतायाम् app tracking अनुमतयः"] },
  { title: englishSections[11].title, paragraphs: ["LIFESPACE उपयोगि-सूचनां तावत्कालं धारयितुं शक्नोति यावत् अनुप्रयोग-कार्यप्रणाली, अभिलेख-रक्षणम्, अनुप्रयोग-सुधारः, विधि-बाध्यता-पालनम्, विवाद-निरसनम्, संधि-प्रवर्तनं वा आवश्यकं भवति। स्थानीयतया सञ्चितं दत्तम् अनुप्रयोग-लोपनं वा हस्तचालित-पुनर्स्थापनं पर्यन्तं उपकरणे स्थितं भवेत्।"] },
  { title: englishSections[12].title, paragraphs: ["यदि LIFESPACE मूल्येन डाउनलोड्, in-app purchases, अथवा subscriptions ददाति, तर्हि भुगतान-प्रक्रिया Apple इत्यनेन App Store मार्गेण क्रियते। LIFESPACE उपयोगिनां पूर्ण-भुगतान-कार्ड-सूचनां प्रत्यक्षतया न संगृह्णाति न च सञ्चिनोति।"] },
  { title: englishSections[13].title, paragraphs: ["अयं गोपनीयता-नीतिः समये समये अद्यतनं क्रियते। अद्यतनानि अस्मिन् पृष्ठे संशोधित-प्रभाव-तिथ्या सह प्रकाशितानि भविष्यन्ति, तथा उपयोगिभ्यः एतत् समये समये परीक्षितुं प्रोत्साहनं दत्तम्।"] },
  { title: englishSections[14].title, paragraphs: ["अस्य गोपनीयता-नीतेः अथवा LIFESPACE-गोपनीयता-प्रथायाः विषये प्रश्नाः चेत् सम्पर्कयतु: Astrology Today | LIFESPACE, Email: mariosbardella@protonmail.com, Website: https://astrologytoday.ca"] },
];

sectionBodyOverrides.pa = [
  { title: englishSections[0].title, paragraphs: ["LIFESPACE ਐਪ ਅੰਦਰ ਵਰਤੋਂਕਾਰਾਂ ਵੱਲੋਂ ਸਿੱਧੇ ਦਿੱਤੀ ਜਾਣਕਾਰੀ ਇਕੱਠੀ ਕਰ ਸਕਦਾ ਹੈ ਅਤੇ ਤਕਨੀਕੀ ਤੇ ਵਰਤੋਂ-ਸੰਬੰਧੀ ਜਾਣਕਾਰੀ ਵੀ ਇਕੱਠੀ ਕਰ ਸਕਦਾ ਹੈ। ਜੇ ਲੋਕੇਸ਼ਨ-ਅਧਾਰਤ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਚਾਲੂ ਹੋਣ, ਤਾਂ ਐਪ ਜ਼ਿਲ੍ਹਾ-ਸੰਬੰਧੀ ਵੈੱਲਨੈੱਸ ਫੀਡਬੈਕ ਦੇਣ ਲਈ ਅੰਦਾਜ਼ਨ ਸਥਾਨ ਜਾਣਕਾਰੀ ਵਰਤ ਸਕਦਾ ਹੈ।"], bullets: ["ਯੂਜ਼ਰਨੇਮ ਜਾਂ ਪ੍ਰੋਫ਼ਾਈਲ ਨਾਮ", "ਉਮਰ, ਲਿੰਗ, ਕੱਦ, ਵਜ਼ਨ, ਧੂਮਰਪਾਨ ਸਥਿਤੀ ਅਤੇ ਸ਼ਰਾਬ ਸੇਵਨ", "ਫਿਟਨੈੱਸ ਲਕਸ਼", "ਚੁਣੀਆਂ ਗਈਆਂ ਗਤੀਵਿਧੀਆਂ, ਰਚਨਾਤਮਕ ਮਾਧਿਅਮ, ਅੰਦਰੂਨੀ ਕੰਮ ਦੀਆਂ ਅਭਿਆਸਾਂ ਅਤੇ ਉਦੇਸ਼ ਸੰਬੰਧੀ ਪਸੰਦਾਂ", "ਰੋਜ਼ਾਨਾ LIFESPACE ਚੈਕ-ਇਨ ਜਵਾਬ", "ਜੀਵਨਸ਼ੈਲੀ ਸਰਵੇਖਣ ਜਵਾਬ", "ਲਕਸ਼, ਪਲਾਨਰ ਐਂਟਰੀਆਂ, ਟੂ-ਡੂ ਲਿਸਟ ਆਈਟਮ, ਕਸਟਮ ਗਤੀਵਿਧੀਆਂ, ਕਸਟਮ ਰਚਨਾਤਮਕ ਮਾਧਿਅਮ ਜਾਂ ਹੋਰ ਵਰਤੋਂਕਾਰ-ਦਿੱਤੀ ਜਾਣਕਾਰੀ", "ਵੈੱਲਨੈੱਸ ਸਕੋਰ, ਮੋਡੀਊਲ ਸਕੋਰ, ਐਨਾਲਿਟਿਕਸ ਅਤੇ ਪ੍ਰਗਤੀ ਇਤਿਹਾਸ", "ਐਪ ਫੀਚਰਾਂ ਰਾਹੀਂ ਵਰਤੋਂਕਾਰ ਵੱਲੋਂ ਸਾਂਝਾ ਕੀਤਾ ਗਿਆ ਚੋਣਵਾਂ ਡੇਟਾ", "ਐਪ ਵਰਤੋਂ ਜਾਣਕਾਰੀ", "ਡਿਵਾਈਸ ਜਾਣਕਾਰੀ", "ਕ੍ਰੈਸ਼ ਲੌਗ", "ਕਾਰਗੁਜ਼ਾਰੀ ਡੇਟਾ", "ਡਾਇਗਨੌਸਟਿਕ ਜਾਣਕਾਰੀ", "ਐਪ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਅਤੇ ਭਰੋਸੇਯੋਗਤਾ ਸੁਧਾਰਣ ਲਈ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ ਐਨਾਲਿਟਿਕਸ ਡੇਟਾ"] },
  { title: englishSections[1].title, bullets: ["ਐਪ ਦੀ ਮੁੱਖ ਕਾਰਗੁਜ਼ਾਰੀ ਪ੍ਰਦਾਨ ਕਰਨਾ", "LIFESPACE ਸਕੋਰ, ਵੈੱਲਨੈੱਸ ਮਨਨ ਅਤੇ ਐਨਾਲਿਟਿਕਸ ਤਿਆਰ ਕਰਨਾ", "ਵਰਤੋਂਕਾਰ ਪ੍ਰੋਫ਼ਾਈਲ ਪਸੰਦਾਂ ਸੰਭਾਲਣਾ", "ਸਮੇਂ ਦੇ ਨਾਲ ਵੈੱਲਨੈੱਸ ਰੁਝਾਨਾਂ ਨੂੰ ਟਰੈਕ ਕਰਨਾ", "ਵਰਤੋਂਕਾਰ ਦੇ ਜਵਾਬਾਂ ਦੇ ਆਧਾਰ 'ਤੇ ਫੀਡਬੈਕ ਨੂੰ ਵਿਅਕਤੀਗਤ ਬਣਾਉਣਾ", "ਵਰਤੋਂਕਾਰ ਵੱਲੋਂ ਚੁਣੀਆਂ ਗਈਆਂ ਚੋਣਵਾਂ ਸਾਂਝਾ ਕਰਨ ਵਾਲੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦਾ ਸਮਰਥਨ ਕਰਨਾ", "ਐਪ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ, ਭਰੋਸੇਯੋਗਤਾ ਅਤੇ ਵਰਤੋਂਕਾਰ ਅਨੁਭਵ ਸੁਧਾਰਨਾ", "ਤਕਨੀਕੀ ਸਮੱਸਿਆਵਾਂ ਦੂਰ ਕਰਨਾ", "ਭਵਿੱਖ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦਾ ਸਮਰਥਨ ਕਰਨਾ, ਜਿਵੇਂ therapist-client sharing, web portal access, ਜਾਂ subscription-based services"] },
  { title: englishSections[2].title, paragraphs: ["LIFESPACE ਇੱਕ ਵੈੱਲਨੈੱਸ, ਜੀਵਨਸ਼ੈਲੀ-ਮਨਨ ਅਤੇ ਆਦਤ-ਟਰੈਕਿੰਗ ਐਪ ਹੈ। ਇਹ ਕੋਈ ਮੈਡੀਕਲ ਡਿਵਾਈਸ ਨਹੀਂ ਹੈ ਅਤੇ ਨਾ ਹੀ ਮੈਡੀਕਲ ਸਲਾਹ, ਨਿਦਾਨ, ਇਲਾਜ, ਚੰਗਿਆਈ ਜਾਂ ਕਿਸੇ ਬਿਮਾਰੀ, ਵਿਘਟਨ ਜਾਂ ਮਾਨਸਿਕ ਸਿਹਤ ਸਥਿਤੀ ਦੀ ਰੋਕਥਾਮ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਇੱਥੇ ਦਿੱਤੀ ਜਾਣਕਾਰੀ ਸਿਰਫ਼ ਸਿੱਖਿਆਤਮਕ, ਮਨਨਾਤਮਕ ਅਤੇ ਵੈੱਲਨੈੱਸ-ਸਹਾਇਕ ਮਕਸਦਾਂ ਲਈ ਹੈ।"] },
  { title: englishSections[3].title, paragraphs: ["LIFESPACE ਐਪ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ, ਐਨਾਲਿਟਿਕਸ, ਡਾਇਗਨੌਸਟਿਕਸ, ਸਟੋਰੇਜ ਅਤੇ ਪਰਫਾਰਮੈਂਸ ਮਾਨੀਟਰਿੰਗ ਨੂੰ ਸਮਰਥਨ ਦੇਣ ਲਈ ਤੀਜੇ ਪੱਖ ਦੀਆਂ ਸੇਵਾਵਾਂ ਵਰਤ ਸਕਦਾ ਹੈ। ਇਹ ਸੇਵਾਵਾਂ ਆਪਣੀਆਂ ਆਪਣੀਆਂ ਪਰਾਈਵੇਸੀ ਨੀਤੀਆਂ ਅਨੁਸਾਰ ਡੇਟਾ ਪ੍ਰੋਸੈਸ ਕਰ ਸਕਦੀਆਂ ਹਨ ਅਤੇ ਐਪ ਜਨਤਕ YouTube ਲਿੰਕਾਂ ਜਾਂ ਹੋਰ ਤੀਜੇ ਪੱਖ ਦੀ ਸਮੱਗਰੀ ਦਾ ਹਵਾਲਾ ਵੀ ਦੇ ਸਕਦੀ ਹੈ।"], bullets: ["Firebase", "Google Firestore", "Google Analytics for Firebase", "ਕ੍ਰੈਸ਼ ਰਿਪੋਰਟਿੰਗ ਜਾਂ ਡਾਇਗਨੌਸਟਿਕ ਟੂਲ", "YouTube ਲਿੰਕ ਜਾਂ ਐਂਬੈਡਿਡ YouTube ਸਮੱਗਰੀ", "Apple ਸੇਵਾਵਾਂ, ਜਿਸ ਵਿੱਚ App Store ਸੇਵਾਵਾਂ, ਨੋਟੀਫਿਕੇਸ਼ਨ ਅਤੇ ਜਿੱਥੇ ਲਾਗੂ ਹੋਵੇ in-app purchase systems"] },
  { title: englishSections[4].title, paragraphs: ["ਕੁਝ ਵਰਤੋਂਕਾਰ ਡੇਟਾ ਡਿਵਾਈਸ 'ਤੇ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਸੰਭਾਲਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਕੁਝ ਡੇਟਾ Firebase ਜਾਂ Firestore ਵਰਗੀਆਂ ਤੀਜੇ ਪੱਖ ਦੀਆਂ ਕਲਾਉਡ ਸੇਵਾਵਾਂ ਰਾਹੀਂ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਸਾਂਭਿਆ ਜਾ ਸਕਦਾ ਹੈ ਜਦੋਂ ਐਪ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ, ਡੇਟਾ ਸਿੰਕ, ਐਨਾਲਿਟਿਕਸ ਜਾਂ ਚੋਣਵਾਂ ਸਾਂਝਾ ਕਰਨ ਵਾਲੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਲਈ ਇਹ ਲੋੜੀਂਦਾ ਹੋਵੇ।", "ਭਾਵੇਂ ਵਰਤੋਂਕਾਰ ਜਾਣਕਾਰੀ ਦੀ ਰੱਖਿਆ ਲਈ ਵਾਜਬ ਯਤਨ ਕੀਤੇ ਜਾਂਦੇ ਹਨ, ਇੰਟਰਨੈੱਟ ਰਾਹੀਂ ਇਲੈਕਟ੍ਰਾਨਿਕ ਸਟੋਰੇਜ ਜਾਂ ਟ੍ਰਾਂਸਮਿਸ਼ਨ ਦਾ ਕੋਈ ਵੀ ਤਰੀਕਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੁਰੱਖਿਅਤ ਨਹੀਂ ਹੁੰਦਾ।"] },
  { title: englishSections[5].title, paragraphs: ["LIFESPACE ਵਰਤੋਂਕਾਰਾਂ ਦੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਨਹੀਂ ਵੇਚਦਾ। ਜਾਣਕਾਰੀ ਸਿਰਫ਼ ਐਪ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ, ਸਹਾਇਕ ਤੀਜੇ ਪੱਖ ਦੇ ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ, ਵਰਤੋਂਕਾਰ ਵੱਲੋਂ ਚੁਣੀ ਸਾਂਝੇਦਾਰੀ, ਕਾਨੂੰਨੀ ਲੋੜਾਂ ਜਾਂ ਹੱਕਾਂ ਅਤੇ ਸੁਰੱਖਿਆ ਦੀ ਰੱਖਿਆ ਲਈ ਸਾਂਝੀ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ।", "ਜੇ ਭਵਿੱਖ ਵਿੱਚ therapist-client sharing ਜਾਂ web portal ਫੀਚਰ ਚਾਲੂ ਕੀਤੇ ਜਾਂਦੇ ਹਨ, ਤਾਂ ਵਰਤੋਂਕਾਰਾਂ ਨੂੰ ਆਪਣੇ ਡੇਟਾ ਦੀ ਸਾਂਝੇਦਾਰੀ 'ਤੇ ਕੰਟਰੋਲ ਦਿੱਤਾ ਜਾਵੇਗਾ।"], bullets: ["ਜਦੋਂ ਐਪ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਲਈ ਲੋੜੀਂਦਾ ਹੋਵੇ", "ਐਪ ਦਾ ਸਮਰਥਨ ਕਰਨ ਵਾਲੇ ਤੀਜੇ ਪੱਖ ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ ਨਾਲ", "ਜਦੋਂ ਵਰਤੋਂਕਾਰ ਚੋਣਵਾਂ ਸਾਂਝਾ ਕਰਨ ਵਾਲੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਚਾਲੂ ਕਰੇ", "ਜਦੋਂ ਕਾਨੂੰਨ, ਨਿਯਮ, ਕਾਨੂੰਨੀ ਪ੍ਰਕਿਰਿਆ ਜਾਂ ਲਾਗੂ ਸਰਕਾਰੀ ਬੇਨਤੀ ਇਸ ਦੀ ਮੰਗ ਕਰੇ", "ਵਰਤੋਂਕਾਰਾਂ, ਐਪ ਜਾਂ ਹੋਰਾਂ ਦੇ ਹੱਕਾਂ, ਸੁਰੱਖਿਆ ਜਾਂ ਸੁਰੱਖਿਅਤਤਾ ਦੀ ਰੱਖਿਆ ਲਈ"] },
  { title: englishSections[6].title, paragraphs: ["LIFESPACE ਹੁਣ ਜਾਂ ਭਵਿੱਖ ਵਿੱਚ ਚੋਣਵਾਂ ਸਾਂਝਾ ਕਰਨ ਵਾਲੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰ ਸਕਦਾ ਹੈ, ਜਿਨ੍ਹਾਂ ਰਾਹੀਂ ਵਰਤੋਂਕਾਰ ਚੁਣਿਆ ਹੋਇਆ ਵੈੱਲਨੈੱਸ ਡੇਟਾ, ਸਕੋਰ, ਐਨਾਲਿਟਿਕਸ ਜਾਂ ਪ੍ਰਗਤੀ ਜਾਣਕਾਰੀ ਕਿਸੇ therapist, accountability partner, web portal ਜਾਂ ਸੰਬੰਧਿਤ LIFESPACE ਸੇਵਾ ਨਾਲ ਸਾਂਝੀ ਕਰ ਸਕਦੇ ਹਨ। ਇਹ ਫੀਚਰ ਚੋਣਵਾਂ ਹਨ ਅਤੇ ਸਾਂਝਾ ਕਰਨਾ ਜਾਂ ਨਾ ਕਰਨਾ ਵਰਤੋਂਕਾਰ ਦੇ ਆਪਣੇ ਫੈਸਲੇ 'ਤੇ ਨਿਰਭਰ ਕਰੇਗਾ।"] },
  { title: englishSections[7].title, paragraphs: ["LIFESPACE ਰੋਜ਼ਾਨਾ ਚੈਕ ਪੂਰਾ ਕਰਨ ਦੀ ਯਾਦ ਦਿਹਾਨੀ ਵਰਗੀਆਂ ਨੋਟੀਫਿਕੇਸ਼ਨ ਭੇਜਣ ਦੀ ਇਜਾਜ਼ਤ ਮੰਗ ਸਕਦਾ ਹੈ। ਵਰਤੋਂਕਾਰ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੇ ਡਿਵਾਈਸ ਦੀਆਂ ਸੈਟਿੰਗਾਂ ਰਾਹੀਂ ਨੋਟੀਫਿਕੇਸ਼ਨ ਚਾਲੂ ਜਾਂ ਬੰਦ ਕਰ ਸਕਦੇ ਹਨ।"] },
  { title: englishSections[8].title, paragraphs: ["ਜੇ ਲੋਕੇਸ਼ਨ-ਅਧਾਰਤ ਵਿਅਕਤੀਗਤਕਰਨ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ LIFESPACE ਸਥਾਨ ਜਾਣਕਾਰੀ ਦੀ ਪਹੁੰਚ ਮੰਗ ਸਕਦਾ ਹੈ। ਇਹ ਜਾਣਕਾਰੀ ਰੋਸ਼ਨੀ ਪ੍ਰਾਪਤੀ ਸਲਾਹ, ਵਾਤਾਵਰਣਕ ਸੰਦਰਭ ਜਾਂ ਸਥਾਨਕ ਜੀਵਨਸ਼ੈਲੀ ਫੀਡਬੈਕ ਵਰਗੇ ਭੌਗੋਲਿਕ ਤੌਰ 'ਤੇ ਪ੍ਰਸੰਗਿਕ ਵੈੱਲਨੈੱਸ ਸੁਝਾਅ ਦੇਣ ਲਈ ਵਰਤੀ ਜਾ ਸਕਦੀ ਹੈ।"] },
  { title: englishSections[9].title, paragraphs: ["LIFESPACE 16 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਲਈ ਨਹੀਂ ਬਣਾਇਆ ਗਿਆ। ਅਸੀਂ ਜਾਣ-ਬੁੱਝ ਕੇ 16 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਦੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਇਕੱਠੀ ਨਹੀਂ ਕਰਦੇ, ਅਤੇ ਜੇ ਸਾਨੂੰ ਪਤਾ ਲੱਗੇ ਕਿ ਐਸਾ ਡੇਟਾ ਇਕੱਠਾ ਕੀਤਾ ਗਿਆ ਹੈ, ਤਾਂ ਅਸੀਂ ਉਸ ਨੂੰ ਮਿਟਾਉਣ ਲਈ ਵਾਜਬ ਕਦਮ ਚੁੱਕਾਂਗੇ।"] },
  { title: englishSections[10].title, paragraphs: ["ਵਰਤੋਂਕਾਰ ਆਪਣੇ ਡਿਵਾਈਸ ਸੈਟਿੰਗਾਂ ਰਾਹੀਂ ਕੁਝ ਐਪ ਪਰਮਿਸ਼ਨਾਂ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰ ਸਕਦੇ ਹਨ ਅਤੇ ਕਿਸੇ ਵੀ ਸਮੇਂ ਐਪ ਨੂੰ ਮਿਟਾ ਸਕਦੇ ਹਨ। ਜੇ ਵਰਤੋਂਕਾਰਾਂ ਨੂੰ ਆਪਣੇ ਡੇਟਾ ਬਾਰੇ ਸਵਾਲ ਹੋਣ ਜਾਂ ਸਹਾਇਤਾ ਦੀ ਲੋੜ ਹੋਵੇ, ਤਾਂ ਉਹ ਹੇਠਾਂ ਦਿੱਤੀ ਸੰਪਰਕ ਜਾਣਕਾਰੀ ਵਰਤ ਸਕਦੇ ਹਨ।"], bullets: ["ਸਥਾਨ ਪਹੁੰਚ", "ਨੋਟੀਫਿਕੇਸ਼ਨ ਪਰਮਿਸ਼ਨ", "ਸੈੱਲੁਲਰ ਡੇਟਾ ਪਹੁੰਚ", "ਜਿੱਥੇ ਲਾਗੂ ਹੋਵੇ, ਐਪ ਟਰੈਕਿੰਗ ਪਰਮਿਸ਼ਨ"] },
  { title: englishSections[11].title, paragraphs: ["LIFESPACE ਵਰਤੋਂਕਾਰ ਜਾਣਕਾਰੀ ਨੂੰ ਉਤਨੀ ਦੇਰ ਤੱਕ ਰੱਖ ਸਕਦਾ ਹੈ ਜਿੰਨੀ ਐਪ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ, ਰਿਕਾਰਡ ਸੰਭਾਲਣ, ਐਪ ਸੁਧਾਰ, ਕਾਨੂੰਨੀ ਫਰਜ਼, ਵਿਵਾਦ ਹੱਲ ਜਾਂ ਸਮਝੌਤਿਆਂ ਦੇ ਲਾਗੂਕਰਨ ਲਈ ਲੋੜੀਂਦੀ ਹੋਵੇ। ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਸੰਭਾਲਿਆ ਡੇਟਾ ਐਪ ਮਿਟਾਏ ਜਾਣ ਜਾਂ ਮੈਨੁਅਲ ਰੀਸੈਟ ਹੋਣ ਤੱਕ ਡਿਵਾਈਸ 'ਤੇ ਰਹਿ ਸਕਦਾ ਹੈ।"] },
  { title: englishSections[12].title, paragraphs: ["ਜੇ LIFESPACE ਭੁਗਤਾਨਯੋਗ ਡਾਊਨਲੋਡ, in-app purchases ਜਾਂ subscriptions ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ, ਤਾਂ ਭੁਗਤਾਨ ਪ੍ਰਕਿਰਿਆ Apple ਵੱਲੋਂ App Store ਰਾਹੀਂ ਸੰਭਾਲੀ ਜਾਂਦੀ ਹੈ। LIFESPACE ਵਰਤੋਂਕਾਰਾਂ ਦੀ ਪੂਰੀ ਭੁਗਤਾਨ ਕਾਰਡ ਜਾਣਕਾਰੀ ਸਿੱਧੇ ਤੌਰ 'ਤੇ ਇਕੱਠੀ ਜਾਂ ਸੰਭਾਲਦਾ ਨਹੀਂ।"] },
  { title: englishSections[13].title, paragraphs: ["ਇਹ ਪਰਾਈਵੇਸੀ ਨੀਤੀ ਸਮੇਂ-ਸਮੇਂ ਤੇ ਅਪਡੇਟ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ। ਅਪਡੇਟ ਇਸੇ ਪੰਨੇ 'ਤੇ ਸੋਧੀ ਗਈ ਲਾਗੂ ਮਿਤੀ ਨਾਲ ਪ੍ਰਕਾਸ਼ਿਤ ਕੀਤੇ ਜਾਣਗੇ, ਅਤੇ ਵਰਤੋਂਕਾਰਾਂ ਨੂੰ ਇਹ ਨੀਤੀ ਸਮੇਂ-ਸਮੇਂ ਤੇ ਸਮੀਖਿਆ ਕਰਨ ਲਈ ਉਤਸ਼ਾਹਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।"] },
  { title: englishSections[14].title, paragraphs: ["ਇਸ ਪਰਾਈਵੇਸੀ ਨੀਤੀ ਜਾਂ LIFESPACE ਦੀਆਂ ਪਰਾਈਵੇਸੀ ਪ੍ਰਥਾਵਾਂ ਬਾਰੇ ਸਵਾਲਾਂ ਲਈ ਸੰਪਰਕ ਕਰੋ: Astrology Today | LIFESPACE, Email: mariosbardella@protonmail.com, Website: https://astrologytoday.ca"] },
];

sectionBodyOverrides.zh = [
  { title: englishSections[0].title, paragraphs: ["LIFESPACE 可能收集用户在应用内直接提供的信息，也可能收集技术性与使用相关的信息。如果启用了基于位置的功能，应用可能使用大致位置信息来提供与地理环境相关的健康反馈。"], bullets: ["用户名或个人资料名称", "年龄、性别、身高、体重、吸烟状态和饮酒情况", "健身目标", "已选择的活动、创意表达方式、内在工作练习和目标偏好", "每日 LIFESPACE 签到回应", "生活方式问卷回应", "目标、计划条目、待办事项、自定义活动、自定义创意方式或其他用户输入的信息", "健康分数、模块分数、分析数据和进度历史", "用户选择通过应用功能分享的可选数据", "应用使用信息", "设备信息", "崩溃日志", "性能数据", "诊断信息", "用于改进应用功能与可靠性的分析数据"] },
  { title: englishSections[1].title, bullets: ["提供应用核心功能", "生成 LIFESPACE 分数、健康反思和分析", "保存用户资料偏好", "长期追踪健康趋势", "根据用户回应个性化反馈", "支持用户选择启用的可选分享功能", "改进应用性能、可靠性和用户体验", "排查技术问题", "支持未来功能，例如 therapist-client sharing、web portal access 或 subscription-based services"] },
  { title: englishSections[2].title, paragraphs: ["LIFESPACE 是一款健康、生活方式反思和习惯追踪应用。它不是医疗设备，也不提供医疗建议、诊断、治疗、治愈或疾病、障碍或心理健康问题的预防。应用提供的信息仅用于教育、反思和健康支持目的。"] },
  { title: englishSections[3].title, paragraphs: ["LIFESPACE 可能使用第三方服务来支持应用功能、分析、诊断、存储和性能监测。这些服务可能根据其自身隐私政策处理数据，应用也可能包含公共 YouTube 链接或其他第三方内容。"], bullets: ["Firebase", "Google Firestore", "Google Analytics for Firebase", "崩溃报告或诊断工具", "YouTube 链接或嵌入式 YouTube 内容", "Apple 服务，包括 App Store 服务、通知，以及在适用情况下的 in-app purchase systems"] },
  { title: englishSections[4].title, paragraphs: ["部分用户数据可能存储在用户设备本地。某些数据在为应用功能、数据同步、分析支持或可选分享功能所必需时，也可能通过 Firebase 或 Firestore 等第三方云服务安全存储。", "虽然我们会采取合理措施保护用户信息，但互联网上的电子存储或传输方式都无法保证绝对安全。"] },
  { title: englishSections[5].title, paragraphs: ["LIFESPACE 不会出售用户个人信息。用户信息仅会在提供应用功能、第三方服务支持、用户选择的可选分享、法律要求或保护权利与安全等情况下共享。", "如果未来启用 therapist-client sharing 或 web portal 功能，用户将对其信息是否共享拥有控制权。"], bullets: ["在提供应用功能所必需时", "与支持应用运行的第三方服务提供商共享", "当用户选择启用可选分享功能时", "当法律、法规、法律程序或可执行的政府请求要求时", "为保护用户、应用或他人的权利、安全或保障时"] },
  { title: englishSections[6].title, paragraphs: ["LIFESPACE 现在或将来可能提供可选分享功能，使用户能够与 therapist、accountability partner、web portal 或相关 LIFESPACE 服务分享所选健康数据、分数、分析或进度信息。该类功能是可选的，是否启用由用户自行决定。"] },
  { title: englishSections[7].title, paragraphs: ["LIFESPACE 可能请求发送通知的权限，例如每日完成签到的提醒。用户可以随时通过设备设置启用或禁用通知。"] },
  { title: englishSections[8].title, paragraphs: ["如果应用使用基于位置的个性化功能，LIFESPACE 可能请求访问位置信息。位置信息可用于提供与地理环境相关的健康建议，例如光照指导、环境背景或本地生活方式反馈。"] },
  { title: englishSections[9].title, paragraphs: ["LIFESPACE 不适用于 16 岁以下儿童。我们不会故意收集 16 岁以下儿童的个人信息；如果我们意识到此类信息已被收集，我们将采取合理措施予以删除。"] },
  { title: englishSections[10].title, paragraphs: ["用户可以通过设备设置控制某些应用权限，也可以随时从设备中删除应用。如果用户对自身数据有疑问或希望获得相关支持，可以使用下方联系方式与我们联系。"], bullets: ["位置访问权限", "通知权限", "蜂窝数据访问权限", "在适用情况下的应用追踪权限"] },
  { title: englishSections[11].title, paragraphs: ["LIFESPACE 可能在提供应用功能、保存记录、改进应用、遵守法律义务、解决争议或执行协议所需的期间内保留用户信息。本地存储的数据可能会一直保留在设备中，直到应用被删除或数据通过应用功能手动重置。"] },
  { title: englishSections[12].title, paragraphs: ["如果 LIFESPACE 提供付费下载、in-app purchases 或 subscriptions，付款处理将由 Apple 通过 App Store 完成。LIFESPACE 不会直接收集或存储用户完整的支付卡信息。"] },
  { title: englishSections[13].title, paragraphs: ["本隐私政策可能会不时更新。更新内容将发布在本页面并附上修订后的生效日期，我们建议用户定期查看本政策。"] },
  { title: englishSections[14].title, paragraphs: ["如对本隐私政策或 LIFESPACE 的隐私实践有任何疑问，请联系：Astrology Today | LIFESPACE，Email: mariosbardella@protonmail.com，Website: https://astrologytoday.ca"] },
];

sectionBodyOverrides.ja = [
  { title: englishSections[0].title, paragraphs: ["LIFESPACE は、ユーザーがアプリ内で直接提供する情報を収集する場合があり、技術情報や利用関連情報も収集することがあります。位置ベース機能が有効な場合、地理的に関連するウェルネス・フィードバックを提供するために概算位置情報を使用することがあります。"], bullets: ["ユーザー名またはプロフィール名", "年齢、性別、身長、体重、喫煙状況、飲酒状況", "フィットネス目標", "選択された活動、創造的な表現手段、内面的ワークの実践、目的に関する好み", "毎日の LIFESPACE チェックイン回答", "ライフスタイル調査への回答", "目標、プランナー項目、To-Do 項目、カスタム活動、カスタム創作手段、その他ユーザーが入力した情報", "ウェルネススコア、モジュールスコア、分析、進捗履歴", "アプリ機能を通じてユーザーが共有を選択した任意データ", "アプリ利用情報", "端末情報", "クラッシュログ", "パフォーマンスデータ", "診断情報", "アプリ機能と信頼性向上のための分析データ"] },
  { title: englishSections[1].title, bullets: ["アプリの中核機能を提供すること", "LIFESPACE スコア、ウェルネス振り返り、分析を生成すること", "ユーザープロフィール設定を保存すること", "時間の経過に伴うウェルネス傾向を追跡すること", "ユーザー回答に基づきフィードバックを個別化すること", "ユーザーが選択した任意の共有機能を支援すること", "アプリの性能、信頼性、ユーザー体験を改善すること", "技術的問題を解決すること", "therapist-client sharing、web portal access、subscription-based services などの将来機能を支援すること"] },
  { title: englishSections[2].title, paragraphs: ["LIFESPACE は、ウェルネス、ライフスタイルの振り返り、習慣追跡のためのアプリです。医療機器ではなく、医療助言、診断、治療、治癒、疾患・障害・精神状態の予防を提供するものではありません。アプリ内情報は教育、振り返り、ウェルネス支援のみを目的としています。"] },
  { title: englishSections[3].title, paragraphs: ["LIFESPACE は、アプリ機能、分析、診断、保存、パフォーマンス監視を支えるために第三者サービスを利用することがあります。これらのサービスは各自のプライバシーポリシーに従ってデータを処理する場合があり、アプリには公開 YouTube リンクや他の第三者コンテンツが含まれることもあります。"], bullets: ["Firebase", "Google Firestore", "Google Analytics for Firebase", "クラッシュ報告または診断ツール", "YouTube リンクまたは埋め込み YouTube コンテンツ", "App Store サービス、通知、および適用される場合の in-app purchase systems を含む Apple サービス"] },
  { title: englishSections[4].title, paragraphs: ["一部のユーザーデータはユーザー端末にローカル保存される場合があります。アプリ機能、データ同期、分析支援、任意共有機能に必要な場合、一部データは Firebase や Firestore などの第三者クラウドサービスを通じて安全に保存されることがあります。", "ユーザー情報保護のため合理的な努力を行いますが、インターネット上の電子保存や送信方法に絶対的な安全性はありません。"] },
  { title: englishSections[5].title, paragraphs: ["LIFESPACE はユーザーの個人情報を販売しません。ユーザー情報は、アプリ機能の提供、第三者サービス支援、ユーザーが選択した任意共有、法的要求、または権利と安全の保護のためにのみ共有されることがあります。", "将来 therapist-client sharing や web portal 機能が有効になる場合、ユーザーは自分の情報共有について管理できます。"], bullets: ["アプリ機能の提供に必要な場合", "アプリを支援する第三者サービス提供者と共有する場合", "ユーザーが任意共有機能を有効にすることを選んだ場合", "法律、規制、法的手続き、または執行可能な政府要請により必要な場合", "ユーザー、アプリ、または他者の権利、安全、保護のため"] },
  { title: englishSections[6].title, paragraphs: ["LIFESPACE は現在または将来、ユーザーが選択したウェルネスデータ、スコア、分析、進捗情報を therapist、accountability partner、web portal、または関連 LIFESPACE サービスと共有できる任意機能を提供する場合があります。これらの機能は任意であり、有効化するかどうかはユーザー自身が決定します。"] },
  { title: englishSections[7].title, paragraphs: ["LIFESPACE は、毎日のチェック完了リマインダーなどの通知送信許可を求める場合があります。ユーザーは端末設定を通じていつでも通知を有効または無効にできます。"] },
  { title: englishSections[8].title, paragraphs: ["位置情報に基づく個別化機能を使用する場合、LIFESPACE は位置情報へのアクセスを要求することがあります。位置情報は、光への曝露ガイダンス、環境的文脈、地域のライフスタイルに関するフィードバックなど、地理的に関連したウェルネス提案を提供するために使用されることがあります。"] },
  { title: englishSections[9].title, paragraphs: ["LIFESPACE は 16 歳未満の子どもを対象としていません。当社は 16 歳未満の子どもの個人情報を意図的に収集せず、そのような情報が収集されたことを把握した場合には削除のため合理的措置を講じます。"] },
  { title: englishSections[10].title, paragraphs: ["ユーザーは端末設定を通じて一部のアプリ権限を管理でき、いつでもアプリを削除できます。データについて質問がある場合や支援を求めたい場合は、下記の連絡先を利用できます。"], bullets: ["位置情報アクセス", "通知権限", "モバイルデータアクセス", "適用される場合のアプリ追跡権限"] },
  { title: englishSections[11].title, paragraphs: ["LIFESPACE は、アプリ機能の提供、記録維持、アプリ改善、法的義務の履行、紛争解決、契約執行に必要な期間、ユーザー情報を保持する場合があります。ローカル保存データは、アプリ削除または手動リセットが行われるまで端末上に残ることがあります。"] },
  { title: englishSections[12].title, paragraphs: ["LIFESPACE が有料ダウンロード、in-app purchases、subscriptions を提供する場合、支払い処理は Apple が App Store を通じて行います。LIFESPACE はユーザーの完全な支払いカード情報を直接収集または保存しません。"] },
  { title: englishSections[13].title, paragraphs: ["本プライバシーポリシーは随時更新されることがあります。更新は改訂された発効日とともに本ページに掲載され、ユーザーには定期的な確認が推奨されます。"] },
  { title: englishSections[14].title, paragraphs: ["本プライバシーポリシーまたは LIFESPACE のプライバシー慣行に関するご質問は、Astrology Today | LIFESPACE、Email: mariosbardella@protonmail.com、Website: https://astrologytoday.ca までご連絡ください。"] },
];

sectionBodyOverrides.yue = [
  { title: englishSections[0].title, paragraphs: ["LIFESPACE 可能會收集用戶喺應用程式內直接提供嘅資料，亦可能收集技術同使用相關資料。如果啟用咗位置功能，應用程式可能會利用大概位置資料去提供與所在地區相關嘅健康回饋。"], bullets: ["用戶名稱或個人檔案名稱", "年齡、性別、身高、體重、吸煙狀況同飲酒情況", "健身目標", "已選活動、創意表達方式、內在工作練習同目的偏好", "每日 LIFESPACE check-in 回應", "生活方式問卷回應", "目標、計劃項目、待辦事項、自訂活動、自訂創作方式或其他用戶輸入資料", "健康分數、模組分數、分析資料同進度記錄", "用戶選擇透過應用程式功能分享嘅可選資料", "應用程式使用資料", "裝置資料", "當機記錄", "效能資料", "診斷資料", "用作改善應用程式功能同可靠性嘅分析資料"] },
  { title: englishSections[1].title, bullets: ["提供應用程式核心功能", "產生 LIFESPACE 分數、健康反思同分析", "保存用戶個人檔案偏好", "隨時間追蹤健康趨勢", "根據用戶回應個人化回饋", "支援用戶選擇啟用嘅可選分享功能", "改善應用程式效能、可靠性同用戶體驗", "排解技術問題", "支援未來功能，例如 therapist-client sharing、web portal access 或 subscription-based services"] },
  { title: englishSections[2].title, paragraphs: ["LIFESPACE 係一個健康、生活方式反思同習慣追蹤應用程式。佢唔係醫療裝置，亦唔提供醫療建議、診斷、治療、康復或疾病、障礙或精神健康狀況嘅預防。應用程式提供嘅資訊只作教育、反思同健康支援用途。"] },
  { title: englishSections[3].title, paragraphs: ["LIFESPACE 可能會使用第三方服務去支援應用程式功能、分析、診斷、儲存同效能監測。呢啲服務可能會根據佢哋自己嘅私隱政策處理資料，而應用程式亦可能包含公開 YouTube 連結或其他第三方內容。"], bullets: ["Firebase", "Google Firestore", "Google Analytics for Firebase", "崩潰回報或診斷工具", "YouTube 連結或內嵌 YouTube 內容", "Apple 服務，包括 App Store 服務、通知，以及適用情況下嘅 in-app purchase systems"] },
  { title: englishSections[4].title, paragraphs: ["部分用戶資料可能會儲存在裝置本地。當應用程式功能、資料同步、分析支援或可選分享功能需要時，部分資料亦可能會透過 Firebase 或 Firestore 等第三方雲端服務安全儲存。", "雖然我哋會採取合理措施保護用戶資料，但互聯網上任何電子儲存或傳輸方式都唔可能絕對安全。"] },
  { title: englishSections[5].title, paragraphs: ["LIFESPACE 唔會出售用戶個人資料。資料只會喺提供應用程式功能、第三方服務支援、用戶選擇嘅可選分享、法律要求，或者保障權利同安全等情況下共享。", "如果將來啟用 therapist-client sharing 或 web portal 功能，用戶會對自己資料是否分享擁有控制權。"], bullets: ["當提供應用程式功能所必需時", "與支援應用程式嘅第三方服務提供者共享", "當用戶選擇啟用可選分享功能時", "當法律、法規、法律程序或可執行政府要求需要時", "為保障用戶、應用程式或其他人士嘅權利、安全或保障時"] },
  { title: englishSections[6].title, paragraphs: ["LIFESPACE 而家或將來可能提供可選分享功能，令用戶可以將所選健康資料、分數、分析或進度資訊分享畀 therapist、accountability partner、web portal 或相關 LIFESPACE 服務。呢啲功能屬於可選，是否啟用由用戶自行決定。"] },
  { title: englishSections[7].title, paragraphs: ["LIFESPACE 可能會要求發送通知嘅權限，例如每日完成 check-in 嘅提醒。用戶可以隨時透過裝置設定開啟或關閉通知。"] },
  { title: englishSections[8].title, paragraphs: ["如果應用程式使用位置個人化功能，LIFESPACE 可能會要求存取位置資料。位置資料可用於提供與地區相關嘅健康建議，例如光照指引、環境背景或本地生活方式回饋。"] },
  { title: englishSections[9].title, paragraphs: ["LIFESPACE 並非為 16 歲以下兒童而設。我哋唔會明知而收集 16 歲以下兒童嘅個人資料；如果得知已收集該類資料，我哋會採取合理步驟刪除。"] },
  { title: englishSections[10].title, paragraphs: ["用戶可以透過裝置設定控制部分應用程式權限，亦可以隨時刪除應用程式。如果對資料有疑問或需要支援，可以使用以下聯絡資料聯絡我哋。"], bullets: ["位置存取", "通知權限", "流動數據存取", "適用情況下嘅應用程式追蹤權限"] },
  { title: englishSections[11].title, paragraphs: ["LIFESPACE 可在提供應用程式功能、保存記錄、改善應用程式、遵守法律義務、解決爭議或執行協議所需期間內保留用戶資料。本地儲存資料可能會一直留喺裝置入面，直到應用程式被刪除或透過功能手動重設。"] },
  { title: englishSections[12].title, paragraphs: ["如果 LIFESPACE 提供付費下載、in-app purchases 或 subscriptions，付款處理會由 Apple 透過 App Store 完成。LIFESPACE 唔會直接收集或儲存用戶完整付款卡資料。"] },
  { title: englishSections[13].title, paragraphs: ["本私隱政策可能會不時更新。更新內容會喺本頁連同修訂後嘅生效日期發布，而用戶亦應定期查閱本政策。"] },
  { title: englishSections[14].title, paragraphs: ["如對本私隱政策或 LIFESPACE 私隱做法有疑問，請聯絡：Astrology Today | LIFESPACE，Email: mariosbardella@protonmail.com，Website: https://astrologytoday.ca"] },
];

sectionBodyOverrides.ko = [
  { title: englishSections[0].title, paragraphs: ["LIFESPACE는 사용자가 앱 내에서 직접 제공하는 정보를 수집할 수 있으며, 기술적 및 사용 관련 정보도 수집할 수 있습니다. 위치 기반 기능이 활성화된 경우, 앱은 지역적으로 관련 있는 웰니스 피드백을 제공하기 위해 대략적인 위치 정보를 사용할 수 있습니다."], bullets: ["사용자 이름 또는 프로필 이름", "연령, 성별, 키, 체중, 흡연 상태 및 음주 여부", "피트니스 목표", "선택한 활동, 창의적 표현 방식, 내면 작업 실천, 목적 선호", "일일 LIFESPACE 체크인 응답", "생활 방식 설문 응답", "목표, 플래너 항목, 할 일 목록, 사용자 지정 활동, 사용자 지정 창의적 표현 또는 기타 사용자가 입력한 정보", "웰니스 점수, 모듈 점수, 분석 및 진행 기록", "앱 기능을 통해 사용자가 공유하기로 선택한 선택적 데이터", "앱 사용 정보", "기기 정보", "충돌 로그", "성능 데이터", "진단 정보", "앱 기능과 신뢰성을 개선하기 위한 분석 데이터"] },
  { title: englishSections[1].title, bullets: ["앱의 핵심 기능 제공", "LIFESPACE 점수, 웰니스 성찰 및 분석 생성", "사용자 프로필 환경설정 저장", "시간에 따른 웰니스 추세 추적", "사용자 응답에 따른 피드백 개인화", "사용자가 선택한 선택적 공유 기능 지원", "앱 성능, 신뢰성 및 사용자 경험 개선", "기술적 문제 해결", "therapist-client sharing, web portal access 또는 subscription-based services와 같은 향후 기능 지원"] },
  { title: englishSections[2].title, paragraphs: ["LIFESPACE는 웰니스, 라이프스타일 성찰 및 습관 추적을 위한 앱입니다. 의료기기가 아니며, 의료 조언, 진단, 치료, 치유, 질병·장애·정신건강 상태의 예방을 제공하지 않습니다. 앱이 제공하는 정보는 교육적·성찰적·웰니스 지원 목적에 한해 제공됩니다."] },
  { title: englishSections[3].title, paragraphs: ["LIFESPACE는 앱 기능, 분석, 진단, 저장 및 성능 모니터링을 지원하기 위해 제3자 서비스를 사용할 수 있습니다. 이러한 서비스는 자체 개인정보 처리방침에 따라 정보를 처리할 수 있으며, 앱은 공개 YouTube 링크 또는 기타 제3자 콘텐츠를 포함할 수도 있습니다."], bullets: ["Firebase", "Google Firestore", "Google Analytics for Firebase", "충돌 보고 또는 진단 도구", "YouTube 링크 또는 임베드된 YouTube 콘텐츠", "적용되는 경우 App Store 서비스, 알림 및 in-app purchase systems를 포함한 Apple 서비스"] },
  { title: englishSections[4].title, paragraphs: ["일부 사용자 데이터는 사용자 기기에 로컬로 저장될 수 있습니다. 앱 기능, 데이터 동기화, 분석 지원 또는 선택적 공유 기능에 필요할 경우 일부 데이터는 Firebase 또는 Firestore 같은 제3자 클라우드 서비스를 통해 안전하게 저장될 수 있습니다.", "사용자 정보 보호를 위해 합리적인 노력을 기울이지만, 인터넷상의 전자 저장 또는 전송 방식은 완전한 보안을 보장할 수 없습니다."] },
  { title: englishSections[5].title, paragraphs: ["LIFESPACE는 사용자의 개인정보를 판매하지 않습니다. 정보는 앱 기능 제공, 제3자 서비스 지원, 사용자가 선택한 공유, 법적 요구, 권리 및 안전 보호 등 제한된 경우에만 공유될 수 있습니다.", "향후 therapist-client sharing 또는 web portal 기능이 활성화될 경우, 사용자는 자신의 정보 공유 여부를 통제할 수 있습니다."], bullets: ["앱 기능 제공에 필요한 경우", "앱을 지원하는 제3자 서비스 제공업체와의 공유", "사용자가 선택적 공유 기능을 활성화한 경우", "법률, 규정, 법적 절차 또는 집행 가능한 정부 요청에 의해 요구되는 경우", "사용자, 앱 또는 다른 사람의 권리, 안전 또는 보안을 보호하기 위한 경우"] },
  { title: englishSections[6].title, paragraphs: ["LIFESPACE는 현재 또는 향후 사용자가 선택한 웰니스 데이터, 점수, 분석 또는 진행 정보를 therapist, accountability partner, web portal 또는 관련 LIFESPACE 서비스와 공유할 수 있는 선택적 공유 기능을 제공할 수 있습니다. 이러한 기능은 선택 사항이며, 활성화 여부는 사용자가 결정합니다."] },
  { title: englishSections[7].title, paragraphs: ["LIFESPACE는 일일 체크 완료 알림과 같은 통지를 보내기 위한 권한을 요청할 수 있습니다. 사용자는 기기 설정을 통해 언제든지 알림을 켜거나 끌 수 있습니다."] },
  { title: englishSections[8].title, paragraphs: ["앱이 위치 기반 개인화를 사용하는 경우, LIFESPACE는 위치 정보 접근 권한을 요청할 수 있습니다. 위치 정보는 광노출 안내, 환경 맥락 또는 지역 생활 방식 피드백과 같이 지리적으로 관련된 웰니스 제안을 제공하는 데 사용될 수 있습니다."] },
  { title: englishSections[9].title, paragraphs: ["LIFESPACE는 16세 미만 아동을 대상으로 하지 않습니다. 당사는 16세 미만 아동의 개인정보를 고의로 수집하지 않으며, 그러한 정보가 수집되었음을 알게 되면 이를 삭제하기 위한 합리적인 조치를 취합니다."] },
  { title: englishSections[10].title, paragraphs: ["사용자는 기기 설정을 통해 일부 앱 권한을 관리할 수 있으며 언제든지 앱을 삭제할 수 있습니다. 데이터에 관한 질문이 있거나 지원을 원할 경우 아래의 연락처 정보를 통해 문의할 수 있습니다."], bullets: ["위치 접근", "알림 권한", "셀룰러 데이터 접근", "적용되는 경우 앱 추적 권한"] },
  { title: englishSections[11].title, paragraphs: ["LIFESPACE는 앱 기능 제공, 기록 유지, 앱 개선, 법적 의무 준수, 분쟁 해결 또는 계약 집행에 필요한 기간 동안 사용자 정보를 보관할 수 있습니다. 로컬 저장 데이터는 앱이 삭제되거나 기능을 통해 수동 재설정될 때까지 기기에 남아 있을 수 있습니다."] },
  { title: englishSections[12].title, paragraphs: ["LIFESPACE가 유료 다운로드, in-app purchases 또는 subscriptions를 제공하는 경우, 결제 처리는 Apple이 App Store를 통해 수행합니다. LIFESPACE는 사용자의 전체 결제 카드 정보를 직접 수집하거나 저장하지 않습니다."] },
  { title: englishSections[13].title, paragraphs: ["본 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 업데이트는 수정된 시행일과 함께 이 페이지에 게시되며, 사용자는 본 정책을 주기적으로 검토할 것을 권장받습니다."] },
  { title: englishSections[14].title, paragraphs: ["본 개인정보 처리방침 또는 LIFESPACE의 개인정보 처리 관행에 관한 문의는 다음으로 연락해 주십시오: Astrology Today | LIFESPACE, Email: mariosbardella@protonmail.com, Website: https://astrologytoday.ca"] },
];

const supportedLocales = Object.keys(metadataCopy) as SupportedLocale[];

const copy = supportedLocales.reduce<Record<SupportedLocale, LifespacePrivacyPolicyCopy>>(
  (acc, locale) => {
    const chrome = localizedPageChrome[locale];
    const overrideSections = sectionBodyOverrides[locale];
    const sections = englishSections.map((section, index) => ({
      ...section,
      title: chrome?.sectionTitles[index] ?? overrideSections?.[index]?.title ?? section.title,
      paragraphs: overrideSections?.[index]?.paragraphs ?? section.paragraphs,
      bullets: overrideSections?.[index]?.bullets ?? section.bullets,
    }));

    acc[locale] = {
      metadataTitle: metadataCopy[locale].title,
      metadataDescription: metadataCopy[locale].description,
      kicker: chrome?.kicker ?? "LIFESPACE APP",
      title: chrome?.title ?? "LIFESPACE Privacy Policy",
      heroDescription:
        chrome?.heroDescription ??
        "LIFESPACE is a wellness and lifestyle tracking app designed to help users reflect on daily habits across nine core areas of life: Light, Inner Work, Fitness, Eating, Sensory Health, Purpose, Activity, Community, and Expression.",
      effectiveDateLabel: chrome?.effectiveDateLabel ?? "Effective Date",
      effectiveDateValue: chrome?.effectiveDateValue ?? "May 11, 2026",
      appliesToLabel: chrome?.appliesToLabel ?? "Applies To",
      appliesToValue: chrome?.appliesToValue ?? "LIFESPACE App",
      onThisPage: chrome?.onThisPage ?? "On this page",
      overviewHeading: chrome?.overviewHeading ?? "Overview",
      overviewBody:
        chrome?.overviewBody ??
        "This Privacy Policy explains what information LIFESPACE may collect, how that information may be used, and the choices users have regarding their data.",
      backHeading: chrome?.backHeading ?? "Back to Astrology Today",
      backBody:
        chrome?.backBody ??
        "You can return to the main site or continue browsing other legal and informational pages from the homepage.",
      backLinkLabel: chrome?.backLinkLabel ?? "← Back to Astrology Today",
      sections,
    };
    return acc;
  },
  {} as Record<SupportedLocale, LifespacePrivacyPolicyCopy>,
);

export function getLifespacePrivacyPolicyCopy(locale: SupportedLocale): LifespacePrivacyPolicyCopy {
  return copy[locale] ?? copy[defaultLocale];
}
