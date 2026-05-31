import { defaultLocale, type SupportedLocale } from "./i18n";

export type DownloadsPageCopy = {
  title: string;
  metaDescription: string;
  lockedLibrary: string;
  subscribersOnly: [string, string, string];
  lockedCopy: string;
  lifespaceCta: string;
};

const downloadsCopy: Record<SupportedLocale, DownloadsPageCopy> = {
  en: {
    title: "DOWNLOADS",
    metaDescription: "Download Astrology Today PDF reports and documents.",
    lockedLibrary: "Locked Library",
    subscribersOnly: ["For", "Subscribers", "Only"],
    lockedCopy: "Download access will unlock here once subscriber access is connected.",
    lifespaceCta: "DOWNLOAD LIFESPACE 1.0",
  },
  fr: {
    title: "TÉLÉCHARGEMENTS",
    metaDescription: "Téléchargez les rapports PDF et documents d'Astrology Today.",
    lockedLibrary: "Bibliothèque verrouillée",
    subscribersOnly: ["Pour", "Abonnés", "Seulement"],
    lockedCopy: "L'accès au téléchargement se débloquera ici dès que l'accès abonné sera connecté.",
    lifespaceCta: "TÉLÉCHARGER LIFESPACE 1.0",
  },
  it: {
    title: "DOWNLOAD",
    metaDescription: "Scarica i report PDF e i documenti di Astrology Today.",
    lockedLibrary: "Libreria bloccata",
    subscribersOnly: ["Per", "Abbonati", "Solo"],
    lockedCopy: "L'accesso ai download si sbloccherà qui una volta collegato l'accesso per gli abbonati.",
    lifespaceCta: "SCARICA LIFESPACE 1.0",
  },
  es: {
    title: "DESCARGAS",
    metaDescription: "Descarga los informes PDF y documentos de Astrology Today.",
    lockedLibrary: "Biblioteca bloqueada",
    subscribersOnly: ["Para", "Suscriptores", "Solo"],
    lockedCopy: "El acceso a las descargas se desbloqueará aquí una vez que el acceso de suscriptores esté conectado.",
    lifespaceCta: "DESCARGAR LIFESPACE 1.0",
  },
  hi: {
    title: "डाउनलोड्स",
    metaDescription: "Astrology Today की PDF रिपोर्टें और दस्तावेज़ डाउनलोड करें।",
    lockedLibrary: "लॉक्ड लाइब्रेरी",
    subscribersOnly: ["केवल", "सदस्यों", "के लिए"],
    lockedCopy: "जब सदस्य पहुँच जुड़ जाएगी, तब डाउनलोड एक्सेस यहाँ अनलॉक होगी।",
    lifespaceCta: "LIFESPACE 1.0 डाउनलोड करें",
  },
  ur: {
    title: "ڈاؤن لوڈز",
    metaDescription: "Astrology Today کی PDF رپورٹس اور دستاویزات ڈاؤن لوڈ کریں۔",
    lockedLibrary: "مقفل لائبریری",
    subscribersOnly: ["صرف", "سبسکرائبرز", "کے لیے"],
    lockedCopy: "جب سبسکرائبر رسائی منسلک ہو جائے گی تو ڈاؤن لوڈ رسائی یہاں کھل جائے گی۔",
    lifespaceCta: "LIFESPACE 1.0 ڈاؤن لوڈ کریں",
  },
  sa: {
    title: "अवतरणानि",
    metaDescription: "Astrology Today इत्यस्य PDF-प्रतिवेदनानि दस्तावेजांश्च अवतारयन्तु।",
    lockedLibrary: "निबद्ध-ग्रन्थागारः",
    subscribersOnly: ["केवलं", "सदस्येभ्यः", "एव"],
    lockedCopy: "यदा सदस्य-प्रवेशः संयोजितः भविष्यति तदा अवतरण-प्रवेशः अत्र उद्घाटितः भविष्यति।",
    lifespaceCta: "LIFESPACE 1.0 अवतारयन्तु",
  },
  pa: {
    title: "ਡਾਊਨਲੋਡਸ",
    metaDescription: "Astrology Today ਦੀਆਂ PDF ਰਿਪੋਰਟਾਂ ਅਤੇ ਦਸਤਾਵੇਜ਼ ਡਾਊਨਲੋਡ ਕਰੋ।",
    lockedLibrary: "ਲਾਕ ਲਾਇਬ੍ਰੇਰੀ",
    subscribersOnly: ["ਸਿਰਫ਼", "ਸਬਸਕ੍ਰਾਈਬਰਾਂ", "ਲਈ"],
    lockedCopy: "ਜਦੋਂ ਸਬਸਕ੍ਰਾਈਬਰ ਐਕਸੈੱਸ ਜੁੜ ਜਾਵੇਗੀ ਤਾਂ ਡਾਊਨਲੋਡ ਐਕਸੈੱਸ ਇੱਥੇ ਖੁੱਲੇਗੀ।",
    lifespaceCta: "LIFESPACE 1.0 ਡਾਊਨਲੋਡ ਕਰੋ",
  },
  zh: {
    title: "下载",
    metaDescription: "下载 Astrology Today 的 PDF 报告和文档。",
    lockedLibrary: "锁定资料库",
    subscribersOnly: ["仅供", "订阅者", "使用"],
    lockedCopy: "订阅权限连接后，下载访问将在这里解锁。",
    lifespaceCta: "下载 LIFESPACE 1.0",
  },
  ja: {
    title: "ダウンロード",
    metaDescription: "Astrology Today の PDF レポートと資料をダウンロードできます。",
    lockedLibrary: "ロックされたライブラリ",
    subscribersOnly: ["ご利用は", "購読者", "限定"],
    lockedCopy: "購読者アクセスが接続されると、ここでダウンロードが解放されます。",
    lifespaceCta: "LIFESPACE 1.0 をダウンロード",
  },
  yue: {
    title: "下載",
    metaDescription: "下載 Astrology Today 嘅 PDF 報告同文件。",
    lockedLibrary: "已鎖定資料庫",
    subscribersOnly: ["只限", "訂閱者", "使用"],
    lockedCopy: "當訂閱者權限接通之後，下載功能會喺呢度解鎖。",
    lifespaceCta: "下載 LIFESPACE 1.0",
  },
  ko: {
    title: "다운로드",
    metaDescription: "Astrology Today의 PDF 보고서와 문서를 다운로드하세요.",
    lockedLibrary: "잠금 라이브러리",
    subscribersOnly: ["구독자", "전용", "콘텐츠"],
    lockedCopy: "구독자 접근이 연결되면 다운로드 접근이 여기에서 열립니다.",
    lifespaceCta: "LIFESPACE 1.0 다운로드",
  },
};

export function getDownloadsCopy(locale: SupportedLocale): DownloadsPageCopy {
  return downloadsCopy[locale] ?? downloadsCopy[defaultLocale];
}
