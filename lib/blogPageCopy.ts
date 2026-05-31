import { defaultLocale, type SupportedLocale } from "./i18n";

export type BlogPageCopy = {
  metaTitle: string;
  metaDescription: string;
  pageTitle: string;
  intro: string;
  featuredLabel: string;
  morePosts: string;
  paginationAriaLabel: string;
};

const en: BlogPageCopy = {
  metaTitle: "Blog | Astrology Today",
  metaDescription: "Browse Astrology Today essays, articles, and long-form astrology writing.",
  pageTitle: "Blog",
  intro: "A gallery for essays, articles, research, and Astrology Today journals.",
  featuredLabel: "Featured Blog",
  morePosts: "More Posts",
  paginationAriaLabel: "Blog gallery pages",
};

const blogPageCopy: Record<SupportedLocale, BlogPageCopy> = {
  en,
  fr: {
    metaTitle: "Blog | Astrology Today",
    metaDescription: "Parcourez les essais, articles et écrits astrologiques d'Astrology Today.",
    pageTitle: "Blog",
    intro: "Une galerie d'essais, d'articles, de recherches et de journaux Astrology Today.",
    featuredLabel: "Blog en vedette",
    morePosts: "Plus d'articles",
    paginationAriaLabel: "Pages de la galerie du blog",
  },
  it: {
    metaTitle: "Blog | Astrology Today",
    metaDescription: "Sfoglia saggi, articoli e scritti astrologici di lungo formato di Astrology Today.",
    pageTitle: "Blog",
    intro: "Una galleria di saggi, articoli, ricerche e diari di Astrology Today.",
    featuredLabel: "Blog in evidenza",
    morePosts: "Altri articoli",
    paginationAriaLabel: "Pagine della galleria del blog",
  },
  es: {
    metaTitle: "Blog | Astrology Today",
    metaDescription: "Explora ensayos, artículos y textos astrológicos extensos de Astrology Today.",
    pageTitle: "Blog",
    intro: "Una galería de ensayos, artículos, investigación y diarios de Astrology Today.",
    featuredLabel: "Blog destacado",
    morePosts: "Más artículos",
    paginationAriaLabel: "Páginas de la galería del blog",
  },
  hi: {
    metaTitle: "ब्लॉग | Astrology Today",
    metaDescription: "Astrology Today के निबंध, लेख और विस्तृत ज्योतिषीय लेखन पढ़ें।",
    pageTitle: "ब्लॉग",
    intro: "निबंधों, लेखों, शोध और Astrology Today जर्नल्स की एक गैलरी।",
    featuredLabel: "विशेष ब्लॉग",
    morePosts: "और लेख",
    paginationAriaLabel: "ब्लॉग गैलरी पृष्ठ",
  },
  ur: {
    metaTitle: "بلاگ | Astrology Today",
    metaDescription: "Astrology Today کے مضامین، مقالے اور طویل نجومی تحریریں دیکھیں۔",
    pageTitle: "بلاگ",
    intro: "مضامین، مقالات، تحقیق اور Astrology Today جرنلز کی ایک گیلری۔",
    featuredLabel: "نمایاں بلاگ",
    morePosts: "مزید مضامین",
    paginationAriaLabel: "بلاگ گیلری صفحات",
  },
  sa: {
    metaTitle: "ब्लॉगः | Astrology Today",
    metaDescription: "Astrology Today इत्यस्य निबन्धान्, लेखान्, दीर्घ-ज्योतिष-लेखनं च अवलोकयतु।",
    pageTitle: "ब्लॉगः",
    intro: "निबन्धानां, लेखानां, अनुसन्धानस्य, Astrology Today पत्रिकाणां च एका दीर्घा।",
    featuredLabel: "प्रमुखः ब्लॉगः",
    morePosts: "अधिकाः लेखाः",
    paginationAriaLabel: "ब्लॉग-दीर्घा-पृष्ठानि",
  },
  pa: {
    metaTitle: "ਬਲੌਗ | Astrology Today",
    metaDescription: "Astrology Today ਦੇ ਲੇਖ, ਨਿਬੰਧ ਅਤੇ ਲੰਬੇ ਜੋਤਿਸ਼ੀ ਲੇਖਨ ਨੂੰ ਵੇਖੋ।",
    pageTitle: "ਬਲੌਗ",
    intro: "ਨਿਬੰਧਾਂ, ਲੇਖਾਂ, ਖੋਜ ਅਤੇ Astrology Today ਜਰਨਲਾਂ ਦੀ ਇੱਕ ਗੈਲਰੀ।",
    featuredLabel: "ਖਾਸ ਬਲੌਗ",
    morePosts: "ਹੋਰ ਲੇਖ",
    paginationAriaLabel: "ਬਲੌਗ ਗੈਲਰੀ ਸਫ਼ੇ",
  },
  zh: {
    metaTitle: "博客 | Astrology Today",
    metaDescription: "浏览 Astrology Today 的随笔、文章和长篇占星写作。",
    pageTitle: "博客",
    intro: "一处收录随笔、文章、研究与 Astrology Today 日志的画廊。",
    featuredLabel: "精选博客",
    morePosts: "更多文章",
    paginationAriaLabel: "博客画廊页面",
  },
  ja: {
    metaTitle: "ブログ | Astrology Today",
    metaDescription: "Astrology Today のエッセイ、記事、長文の占星術ライティングをご覧ください。",
    pageTitle: "ブログ",
    intro: "エッセイ、記事、研究、そして Astrology Today ジャーナルのギャラリーです。",
    featuredLabel: "注目のブログ",
    morePosts: "さらに読む",
    paginationAriaLabel: "ブログギャラリーのページ",
  },
  yue: {
    metaTitle: "網誌 | Astrology Today",
    metaDescription: "瀏覽 Astrology Today 嘅隨筆、文章同長篇占星寫作。",
    pageTitle: "網誌",
    intro: "一個收錄隨筆、文章、研究同 Astrology Today 日誌嘅畫廊。",
    featuredLabel: "精選網誌",
    morePosts: "更多文章",
    paginationAriaLabel: "網誌畫廊頁面",
  },
  ko: {
    metaTitle: "블로그 | Astrology Today",
    metaDescription: "Astrology Today의 에세이, 기사, 장문의 점성술 글을 살펴보세요.",
    pageTitle: "블로그",
    intro: "에세이, 기사, 연구, Astrology Today 저널을 모아 둔 갤러리입니다.",
    featuredLabel: "추천 블로그",
    morePosts: "더 많은 글",
    paginationAriaLabel: "블로그 갤러리 페이지",
  },
};

export function getBlogPageCopy(locale: SupportedLocale): BlogPageCopy {
  return blogPageCopy[locale] ?? blogPageCopy[defaultLocale];
}
