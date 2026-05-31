import type { BlogPost } from "./blog";
import { defaultLocale, type SupportedLocale } from "./i18n";

type BlogSummaryOverride = {
  title?: string;
  subtitle?: string;
  publishedLabel?: string;
  readTime?: string;
  excerpt?: string;
};

type BlogSummaryLocaleMap = Record<string, BlogSummaryOverride>;

const byLocale: Record<SupportedLocale, BlogSummaryLocaleMap> = {
  en: {
    "history-of-medicinal-astrology": {
      title: "The History of Medicinal Astrology",
      subtitle: "Why Hippocrates Might Not Have Approved of Modern Medicine",
      publishedLabel: "Apr 2026",
      readTime: "8 min read",
      excerpt:
        "Why Hippocrates might not have approved of modern medicine, and how older physicians once used the zodiac as part of diagnosis, timing, and holistic care.",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "Trataka: The Ancient Spiritual Practice of Yogic Gazing",
      publishedLabel: "May 2026",
      readTime: "7 min read",
      excerpt:
        "An introduction to Trataka, the yogic practice of fixed-point gazing, with notes on breathing, nervous system regulation, and ways to practice at home.",
    },
  },
  fr: {
    "history-of-medicinal-astrology": {
      title: "L'histoire de l'astrologie médicinale",
      subtitle: "Pourquoi Hippocrate n'aurait peut-être pas approuvé la médecine moderne",
      publishedLabel: "avr. 2026",
      readTime: "8 min de lecture",
      excerpt:
        "Pourquoi Hippocrate n'aurait peut-être pas approuvé la médecine moderne, et comment les anciens médecins utilisaient autrefois le zodiaque pour le diagnostic, le timing et les soins holistiques.",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "Trataka : l'ancienne pratique spirituelle du regard yogique",
      publishedLabel: "mai 2026",
      readTime: "7 min de lecture",
      excerpt:
        "Une introduction au Trataka, la pratique yogique du regard fixe, avec des notes sur la respiration, la régulation du système nerveux et des façons de pratiquer chez soi.",
    },
  },
  it: {
    "history-of-medicinal-astrology": {
      title: "La storia dell'astrologia medica",
      subtitle: "Perché Ippocrate potrebbe non aver approvato la medicina moderna",
      publishedLabel: "apr 2026",
      readTime: "8 min di lettura",
      excerpt:
        "Perché Ippocrate potrebbe non aver approvato la medicina moderna e come i medici di un tempo usavano lo zodiaco nella diagnosi, nella tempistica e nella cura olistica.",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "Trataka: l'antica pratica spirituale dello sguardo yogico",
      publishedLabel: "mag 2026",
      readTime: "7 min di lettura",
      excerpt:
        "Un'introduzione al Trataka, la pratica yogica dello sguardo fisso, con note su respirazione, regolazione del sistema nervoso e modi per praticarlo a casa.",
    },
  },
  es: {
    "history-of-medicinal-astrology": {
      title: "La historia de la astrología medicinal",
      subtitle: "Por qué Hipócrates quizá no habría aprobado la medicina moderna",
      publishedLabel: "abr. 2026",
      readTime: "8 min de lectura",
      excerpt:
        "Por qué Hipócrates quizá no habría aprobado la medicina moderna, y cómo los médicos antiguos utilizaban el zodiaco como parte del diagnóstico, el momento y el cuidado holístico.",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "Trataka: la antigua práctica espiritual de la mirada yóguica",
      publishedLabel: "may. 2026",
      readTime: "7 min de lectura",
      excerpt:
        "Una introducción al Trataka, la práctica yóguica de la mirada fija, con notas sobre respiración, regulación del sistema nervioso y formas de practicar en casa.",
    },
  },
  hi: {
    "history-of-medicinal-astrology": {
      title: "चिकित्सीय ज्योतिष का इतिहास",
      subtitle: "क्यों हिप्पोक्रेटीस शायद आधुनिक चिकित्सा को स्वीकार न करते",
      publishedLabel: "अप्रैल 2026",
      readTime: "8 मिनट पढ़ें",
      excerpt:
        "क्यों हिप्पोक्रेटीस शायद आधुनिक चिकित्सा को स्वीकार न करते, और किस तरह पुराने चिकित्सक निदान, समय-निर्धारण और समग्र देखभाल के लिए राशि चक्र का उपयोग करते थे।",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "त्राटक: योगिक दृष्टि की प्राचीन आध्यात्मिक साधना",
      publishedLabel: "मई 2026",
      readTime: "7 मिनट पढ़ें",
      excerpt:
        "त्राटक का परिचय, स्थिर दृष्टि की योगिक साधना, जिसमें श्वास, तंत्रिका तंत्र के संतुलन और घर पर अभ्यास के तरीकों पर टिप्पणी है।",
    },
  },
  ur: {
    "history-of-medicinal-astrology": {
      title: "طبی نجوم کی تاریخ",
      subtitle: "کیوں بقراط شاید جدید طب سے متفق نہ ہوتے",
      publishedLabel: "اپریل 2026",
      readTime: "8 منٹ مطالعہ",
      excerpt:
        "کیوں بقراط شاید جدید طب سے متفق نہ ہوتے، اور کس طرح پرانے معالج کبھی تشخیص، وقت کے تعین اور ہمہ گیر دیکھ بھال کے لیے بروج کا استعمال کرتے تھے۔",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "تراتک: یوگی نگاہ کی قدیم روحانی مشق",
      publishedLabel: "مئی 2026",
      readTime: "7 منٹ مطالعہ",
      excerpt:
        "تراتک کا تعارف، ایک یوگی مشق جس میں نقطۂ نظر پر نظریں جمائی جاتی ہیں، ساتھ میں سانس، اعصابی نظام کی تنظیم اور گھر پر مشق کے طریقے شامل ہیں۔",
    },
  },
  sa: {
    "history-of-medicinal-astrology": {
      title: "वैद्यक-ज्योतिषस्य इतिहासः",
      subtitle: "कस्मात् हिप्पोक्रेटीस् आधुनिक-चिकित्सां न अनुमन्येत",
      publishedLabel: "अप्रैल् 2026",
      readTime: "८ निमेष-पठनम्",
      excerpt:
        "कस्मात् हिप्पोक्रेटीस् आधुनिक-चिकित्सां न अनुमन्येत, तथा कथं प्राचीन-वैद्याः निदान, समय-निर्णय, समग्र-चिकित्सायां च राशिचक्रस्य उपयोगं कुर्वन्ति स्म।",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "त्राटकम्: योग-दृष्टेः प्राचीन आध्यात्मिक साधना",
      publishedLabel: "मई 2026",
      readTime: "७ निमेष-पठनम्",
      excerpt:
        "त्राटकस्य परिचयः, स्थिर-दृष्टेः योगिक-साधना, श्वसनम्, स्नायुतन्त्र-नियमनम्, गृहे अभ्यासस्य उपायाश्च सह।",
    },
  },
  pa: {
    "history-of-medicinal-astrology": {
      title: "ਚਿਕਿਤਸਕ ਜੋਤਿਸ਼ ਦਾ ਇਤਿਹਾਸ",
      subtitle: "ਕਿਉਂ ਹਿਪੋਕ੍ਰੇਟਿਸ ਸ਼ਾਇਦ ਆਧੁਨਿਕ ਦਵਾਈ ਨੂੰ ਮੰਨਤਾ ਨਾ ਦਿੰਦਾ",
      publishedLabel: "ਅਪ੍ਰੈਲ 2026",
      readTime: "8 ਮਿੰਟ ਪੜ੍ਹੋ",
      excerpt:
        "ਕਿਉਂ ਹਿਪੋਕ੍ਰੇਟਿਸ ਸ਼ਾਇਦ ਆਧੁਨਿਕ ਦਵਾਈ ਨੂੰ ਮੰਨਤਾ ਨਾ ਦਿੰਦਾ, ਅਤੇ ਕਿਵੇਂ ਪੁਰਾਣੇ ਡਾਕਟਰ ਕਦੇ ਰਾਸ਼ੀ ਚੱਕਰ ਨੂੰ ਨਿਦਾਨ, ਸਮੇਂ ਅਤੇ ਸਮੂਹਿਕ ਦੇਖਭਾਲ ਦੇ ਹਿੱਸੇ ਵਜੋਂ ਵਰਤਦੇ ਸਨ।",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "ਤ੍ਰਾਟਕਾ: ਯੋਗਿਕ ਤੱਕਣ ਦੀ ਪ੍ਰਾਚੀਨ ਆਧਿਆਤਮਿਕ ਸਾਧਨਾ",
      publishedLabel: "ਮਈ 2026",
      readTime: "7 ਮਿੰਟ ਪੜ੍ਹੋ",
      excerpt:
        "ਤ੍ਰਾਟਕਾ ਦਾ ਪਰਿਚਯ, ਨਿਸ਼ਚਿਤ ਬਿੰਦੂ ਉੱਤੇ ਤੱਕਣ ਦੀ ਯੋਗਿਕ ਸਾਧਨਾ, ਜਿਸ ਵਿੱਚ ਸਾਹ, ਨਰਵਸ ਸਿਸਟਮ ਦੇ ਸੰਤੁਲਨ ਅਤੇ ਘਰ ਵਿੱਚ ਅਭਿਆਸ ਦੇ ਤਰੀਕੇ ਸ਼ਾਮਲ ਹਨ।",
    },
  },
  zh: {
    "history-of-medicinal-astrology": {
      title: "医疗占星术的历史",
      subtitle: "为什么希波克拉底或许不会赞同现代医学",
      publishedLabel: "2026年4月",
      readTime: "8 分钟阅读",
      excerpt:
        "为什么希波克拉底或许不会赞同现代医学，以及早期医生如何曾经把黄道十二宫用于诊断、时机判断与整体照护。",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "Trataka：古老的瑜伽凝视灵修实践",
      publishedLabel: "2026年5月",
      readTime: "7 分钟阅读",
      excerpt:
        "介绍 Trataka，这是一种固定凝视点的瑜伽练习，并附有关于呼吸、神经系统调节以及居家练习方式的说明。",
    },
  },
  ja: {
    "history-of-medicinal-astrology": {
      title: "医療占星術の歴史",
      subtitle: "ヒポクラテスが現代医学を認めなかったかもしれない理由",
      publishedLabel: "2026年4月",
      readTime: "8分で読めます",
      excerpt:
        "ヒポクラテスが現代医学を認めなかったかもしれない理由、そしてかつての医師たちが診断、タイミング、全体的なケアの一部として黄道帯を用いていた経緯について。",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "トラタカ：ヨーガ的凝視の古代スピリチュアル実践",
      publishedLabel: "2026年5月",
      readTime: "7分で読めます",
      excerpt:
        "トラタカの紹介。固定点を見つめるヨーガの実践であり、呼吸、神経系の調整、家庭での実践方法に関する補足付きです。",
    },
  },
  yue: {
    "history-of-medicinal-astrology": {
      title: "醫療占星術嘅歷史",
      subtitle: "點解希波克拉底可能唔會認同現代醫學",
      publishedLabel: "2026年4月",
      readTime: "8 分鐘閱讀",
      excerpt:
        "點解希波克拉底可能唔會認同現代醫學，以及以前嘅醫生點樣曾經將黃道十二宮用喺診斷、時機同整體照護之中。",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "Trataka：古老嘅瑜伽凝視靈修練習",
      publishedLabel: "2026年5月",
      readTime: "7 分鐘閱讀",
      excerpt:
        "介紹 Trataka，一種固定凝視點嘅瑜伽練習，並附上呼吸、神經系統調節同喺屋企練習嘅方法。",
    },
  },
  ko: {
    "history-of-medicinal-astrology": {
      title: "의료 점성술의 역사",
      subtitle: "히포크라테스가 현대 의학을 승인하지 않았을지도 모르는 이유",
      publishedLabel: "2026년 4월",
      readTime: "8분 읽기",
      excerpt:
        "히포크라테스가 현대 의학을 승인하지 않았을지도 모르는 이유와, 오래전 의사들이 진단, 시기 판단, 전인적 돌봄의 일부로 황도대를 사용했던 방식을 다룹니다.",
    },
    "trataka-ancient-spiritual-practice-of-yogic-gazing": {
      title: "트라타카: 요가적 응시의 고대 영적 수행",
      publishedLabel: "2026년 5월",
      readTime: "7분 읽기",
      excerpt:
        "트라타카 소개. 고정된 한 점을 바라보는 요가 수행으로, 호흡, 신경계 조절, 집에서 실천하는 방법에 대한 설명을 담고 있습니다.",
    },
  },
};

export function getLocalizedBlogSummary(post: BlogPost, locale: SupportedLocale) {
  const override = byLocale[locale]?.[post.slug] ?? byLocale[defaultLocale]?.[post.slug] ?? {};
  return {
    ...post,
    title: override.title ?? post.title,
    subtitle: override.subtitle ?? post.subtitle,
    publishedLabel: override.publishedLabel ?? post.publishedLabel,
    readTime: override.readTime ?? post.readTime,
    excerpt: override.excerpt ?? post.excerpt,
  };
}
