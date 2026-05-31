import { defaultLocale, type SupportedLocale } from "./i18n";

type BlogArticlePageCopy = {
  backToBlog: string;
  zodiacReviewIntro: string;
  imagePairCaption: string;
};

const copyByLocale: Record<SupportedLocale, BlogArticlePageCopy> = {
  en: {
    backToBlog: "Back to Blog",
    zodiacReviewIntro: "Let’s review some of the ailments caused by astrological placements…",
    imagePairCaption:
      "‘Microcosmus Melothesia’ by B.A. Vierling and Dr. J.H. McLean’s Family Almanac (1874)",
  },
  fr: {
    backToBlog: "Retour au blog",
    zodiacReviewIntro:
      "Passons en revue quelques affections associées aux placements astrologiques…",
    imagePairCaption:
      "« Microcosmus Melothesia » par B.A. Vierling et Family Almanac du Dr J.H. McLean (1874)",
  },
  it: {
    backToBlog: "Torna al blog",
    zodiacReviewIntro:
      "Rivediamo alcuni dei disturbi associati ai diversi posizionamenti astrologici…",
    imagePairCaption:
      "“Microcosmus Melothesia” di B.A. Vierling e Family Almanac del Dr. J.H. McLean (1874)",
  },
  es: {
    backToBlog: "Volver al blog",
    zodiacReviewIntro:
      "Revisemos algunas de las afecciones asociadas a las posiciones astrológicas…",
    imagePairCaption:
      "« Microcosmus Melothesia » de B.A. Vierling y Family Almanac del Dr. J.H. McLean (1874)",
  },
  hi: {
    backToBlog: "ब्लॉग पर वापस जाएँ",
    zodiacReviewIntro: "आइए ज्योतिषीय स्थितियों से जुड़ी कुछ बीमारियों की समीक्षा करें…",
    imagePairCaption:
      "B.A. Vierling की ‘Microcosmus Melothesia’ और डॉ. J.H. McLean का Family Almanac (1874)",
  },
  ur: {
    backToBlog: "بلاگ پر واپس جائیں",
    zodiacReviewIntro: "آئیے نجومی جگہوں سے وابستہ کچھ عوارض کا جائزہ لیں…",
    imagePairCaption:
      "’Microcosmus Melothesia‘ از B.A. Vierling اور Dr. J.H. McLean’s Family Almanac (1874)",
  },
  sa: {
    backToBlog: "ब्लॉगं प्रति प्रत्यागच्छतु",
    zodiacReviewIntro: "आगच्छतु, ज्योतिषीय-स्थानैः सम्बद्धानां कतिपयानां व्याधीनां पुनरवलोकनं कुर्मः…",
    imagePairCaption:
      "B.A. Vierling कृतं ‘Microcosmus Melothesia’ तथा Dr. J.H. McLean’s Family Almanac (1874)",
  },
  pa: {
    backToBlog: "ਬਲੌਗ ਵੱਲ ਵਾਪਸ ਜਾਓ",
    zodiacReviewIntro: "ਆਓ ਜੋਤਿਸ਼ੀ ਸਥਿਤੀਆਂ ਨਾਲ ਜੁੜੀਆਂ ਕੁਝ ਬਿਮਾਰੀਆਂ ਦਾ ਜਾਇਜ਼ਾ ਲਈਏ…",
    imagePairCaption:
      "B.A. Vierling ਦੀ ‘Microcosmus Melothesia’ ਅਤੇ Dr. J.H. McLean’s Family Almanac (1874)",
  },
  zh: {
    backToBlog: "返回博客",
    zodiacReviewIntro: "让我们回顾一些与占星位置相关的病症……",
    imagePairCaption:
      "B.A. Vierling 的《Microcosmus Melothesia》与 J.H. McLean 医生的《Family Almanac》(1874)",
  },
  ja: {
    backToBlog: "ブログに戻る",
    zodiacReviewIntro: "占星術的な配置に関連するとされるいくつかの不調を見てみましょう……",
    imagePairCaption:
      "B.A. Vierling『Microcosmus Melothesia』および J.H. McLean 医師の Family Almanac（1874年）",
  },
  yue: {
    backToBlog: "返回網誌",
    zodiacReviewIntro: "我哋一齊睇下同占星位置有關嘅一啲病症……",
    imagePairCaption:
      "B.A. Vierling 嘅《Microcosmus Melothesia》同 J.H. McLean 醫生嘅 Family Almanac（1874）",
  },
  ko: {
    backToBlog: "블로그로 돌아가기",
    zodiacReviewIntro: "이제 점성학적 배치와 관련된 몇 가지 질환을 살펴봅시다…",
    imagePairCaption:
      "B.A. Vierling의 ‘Microcosmus Melothesia’와 J.H. McLean 박사의 Family Almanac (1874)",
  },
};

export function getBlogArticlePageCopy(locale: SupportedLocale): BlogArticlePageCopy {
  return copyByLocale[locale] ?? copyByLocale[defaultLocale];
}
