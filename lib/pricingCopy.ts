import { defaultLocale, type SupportedLocale } from "./i18n";

export type PricingPlanCopy = {
  level: string;
  title: string;
  price: string;
  description: string;
  includes: string[];
  note?: string;
};

export type PricingPageCopy = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  heroTitle: string;
  heroSubtitle: string;
  selectorTitle: string;
  includesTitle: string;
  legal: string;
  next: string;
  plans: {
    client: PricingPlanCopy;
    specialist: PricingPlanCopy;
    master: PricingPlanCopy;
  };
};

const en: PricingPageCopy = {
  metaTitle: "Pricing | Astrology Today",
  metaDescription:
    "Choose an Astrology Today membership plan for self-help, counselling, or professional tools.",
  kicker: "Memberships",
  heroTitle: "Choose a plan",
  heroSubtitle:
    "AstrologyToday memberships are an alternative to traditional psychotherapy ranging from self-help to 1-on-1 counselling with trained astrologers and spiritually informed therapists.",
  selectorTitle: "Subscription Selector",
  includesTitle: "Includes",
  legal:
    "Memberships are billed monthly and may be cancelled at any time. AstrologyToday services are intended for personal growth, education, spiritual insight, and therapeutic support. AstrologyToday does not replace emergency medical care, crisis support, or legally required healthcare services. Some professional plans may require approval before full access activation.",
  next: "Next",
  plans: {
    client: {
      level: "Level 1",
      title: "Client Subscription",
      price: "$21.99/month",
      description: "For personal growth, therapeutic support, and self-help purposes.",
      includes: [
        "LIFESPACE Web App",
        "Monthly or bi-weekly counselling",
        "Personalized Astrological Report (1)",
        "Access to the Client Portal",
      ],
    },
    specialist: {
      level: "Level 2",
      title: "Specialist Subscription",
      price: "$39.99/month",
      description:
        "For astrologers and therapists using LIFESPACE with clients. This plan gives clients access to the LIFESPACE App while allowing the specialist to review client wellness analytics for the client side for pattern identification.",
      includes: [
        "LIFESPACE Web App",
        "LIFESPACE for Therapists",
        "Access to the Therapist Portal",
        "Easy and secure client payments",
      ],
      note: "*For Psychologists, Psychiatrists, or Therapists",
    },
    master: {
      level: "Level 3",
      title: "Master Subscription",
      price: "$59.99/month",
      description:
        "For advanced professionals and researchers who want full access to AstrologyToday’s therapeutic, astrological, and analytical tools.",
      includes: [
        "LIFESPACE Web App",
        "LIFESPACE for Therapists",
        "Astrology Weather+",
        "Relationship Calculator",
        "Access to the Therapist Portal",
        "Easy and secure client payments",
        "24/7 IT and customer support",
      ],
      note: "*For Astrologers or Researchers",
    },
  },
};

const pricingCopy: Record<SupportedLocale, PricingPageCopy> = {
  en,
  fr: {
    metaTitle: "Tarifs | Astrology Today",
    metaDescription:
      "Choisissez un abonnement Astrology Today pour l'entraide, l'accompagnement ou les outils professionnels.",
    kicker: "Abonnements",
    heroTitle: "Choisissez un plan",
    heroSubtitle:
      "Les abonnements AstrologyToday offrent une alternative à la psychothérapie traditionnelle, allant de l'entraide à l'accompagnement individuel avec des astrologues formés et des thérapeutes spirituellement informés.",
    selectorTitle: "Sélecteur d'abonnement",
    includesTitle: "Comprend",
    legal:
      "Les abonnements sont facturés mensuellement et peuvent être annulés à tout moment. Les services d'AstrologyToday sont destinés à la croissance personnelle, à l'éducation, à l'introspection spirituelle et au soutien thérapeutique. AstrologyToday ne remplace pas les soins médicaux d'urgence, les services de crise ou les soins de santé légalement requis. Certains plans professionnels peuvent nécessiter une approbation avant l'activation complète de l'accès.",
    next: "Suivant",
    plans: {
      client: {
        level: "Niveau 1",
        title: "Abonnement client",
        price: "$21.99/mois",
        description: "Pour la croissance personnelle, le soutien thérapeutique et l'entraide.",
        includes: [
          "Application web LIFESPACE",
          "Conseils mensuels ou bimensuels",
          "Rapport astrologique personnalisé (1)",
          "Accès au portail client",
        ],
      },
      specialist: {
        level: "Niveau 2",
        title: "Abonnement spécialiste",
        price: "$39.99/mois",
        description:
          "Pour les astrologues et thérapeutes qui utilisent LIFESPACE avec leurs clients. Ce plan donne aux clients accès à l'application LIFESPACE tout en permettant au spécialiste d'examiner les analyses de bien-être du côté client pour identifier des schémas.",
        includes: [
          "Application web LIFESPACE",
          "LIFESPACE pour thérapeutes",
          "Accès au portail thérapeute",
          "Paiements clients simples et sécurisés",
        ],
        note: "*Pour psychologues, psychiatres ou thérapeutes",
      },
      master: {
        level: "Niveau 3",
        title: "Abonnement maître",
        price: "$59.99/mois",
        description:
          "Pour les professionnels avancés et les chercheurs qui souhaitent un accès complet aux outils thérapeutiques, astrologiques et analytiques d'AstrologyToday.",
        includes: [
          "Application web LIFESPACE",
          "LIFESPACE pour thérapeutes",
          "Astrology Weather+",
          "Calculateur relationnel",
          "Accès au portail thérapeute",
          "Paiements clients simples et sécurisés",
          "Support informatique et client 24h/24 et 7j/7",
        ],
        note: "*Pour astrologues ou chercheurs",
      },
    },
  },
  it: {
    metaTitle: "Prezzi | Astrology Today",
    metaDescription:
      "Scegli un abbonamento Astrology Today per auto-aiuto, consulenza o strumenti professionali.",
    kicker: "Abbonamenti",
    heroTitle: "Scegli un piano",
    heroSubtitle:
      "Gli abbonamenti AstrologyToday sono un'alternativa alla psicoterapia tradizionale, dall'auto-aiuto al counselling individuale con astrologi formati e terapeuti spiritualmente informati.",
    selectorTitle: "Selettore abbonamento",
    includesTitle: "Include",
    legal:
      "Gli abbonamenti vengono fatturati mensilmente e possono essere annullati in qualsiasi momento. I servizi di AstrologyToday sono destinati alla crescita personale, all'educazione, all'intuizione spirituale e al supporto terapeutico. AstrologyToday non sostituisce le cure mediche d'emergenza, il supporto in caso di crisi o i servizi sanitari richiesti dalla legge. Alcuni piani professionali possono richiedere approvazione prima dell'attivazione completa dell'accesso.",
    next: "Avanti",
    plans: {
      client: {
        level: "Livello 1",
        title: "Abbonamento cliente",
        price: "$21.99/mese",
        description: "Per crescita personale, supporto terapeutico e finalità di auto-aiuto.",
        includes: [
          "App web LIFESPACE",
          "Counselling mensile o bisettimanale",
          "Report astrologico personalizzato (1)",
          "Accesso al portale cliente",
        ],
      },
      specialist: {
        level: "Livello 2",
        title: "Abbonamento specialista",
        price: "$39.99/mese",
        description:
          "Per astrologi e terapeuti che usano LIFESPACE con i clienti. Questo piano offre ai clienti accesso all'app LIFESPACE e consente allo specialista di esaminare le analisi del benessere del lato cliente per identificare schemi ricorrenti.",
        includes: [
          "App web LIFESPACE",
          "LIFESPACE per terapeuti",
          "Accesso al portale terapeuta",
          "Pagamenti cliente facili e sicuri",
        ],
        note: "*Per psicologi, psichiatri o terapeuti",
      },
      master: {
        level: "Livello 3",
        title: "Abbonamento master",
        price: "$59.99/mese",
        description:
          "Per professionisti avanzati e ricercatori che desiderano accesso completo agli strumenti terapeutici, astrologici e analitici di AstrologyToday.",
        includes: [
          "App web LIFESPACE",
          "LIFESPACE per terapeuti",
          "Astrology Weather+",
          "Calcolatore relazionale",
          "Accesso al portale terapeuta",
          "Pagamenti cliente facili e sicuri",
          "Supporto IT e clienti 24/7",
        ],
        note: "*Per astrologi o ricercatori",
      },
    },
  },
  es: {
    metaTitle: "Precios | Astrology Today",
    metaDescription:
      "Elige un plan de membresía de Astrology Today para autoayuda, acompañamiento o herramientas profesionales.",
    kicker: "Membresías",
    heroTitle: "Elige un plan",
    heroSubtitle:
      "Las membresías de AstrologyToday son una alternativa a la psicoterapia tradicional, desde la autoayuda hasta la orientación individual con astrólogos formados y terapeutas con enfoque espiritual.",
    selectorTitle: "Selector de suscripción",
    includesTitle: "Incluye",
    legal:
      "Las membresías se facturan mensualmente y pueden cancelarse en cualquier momento. Los servicios de AstrologyToday están destinados al crecimiento personal, la educación, la comprensión espiritual y el apoyo terapéutico. AstrologyToday no sustituye la atención médica de emergencia, el apoyo en crisis ni los servicios sanitarios exigidos por la ley. Algunos planes profesionales pueden requerir aprobación antes de la activación total del acceso.",
    next: "Siguiente",
    plans: {
      client: {
        level: "Nivel 1",
        title: "Suscripción para clientes",
        price: "$21.99/mes",
        description: "Para crecimiento personal, apoyo terapéutico y autoayuda.",
        includes: [
          "Aplicación web LIFESPACE",
          "Orientación mensual o quincenal",
          "Informe astrológico personalizado (1)",
          "Acceso al portal del cliente",
        ],
      },
      specialist: {
        level: "Nivel 2",
        title: "Suscripción especialista",
        price: "$39.99/mes",
        description:
          "Para astrólogos y terapeutas que utilizan LIFESPACE con clientes. Este plan da a los clientes acceso a la app LIFESPACE y permite al especialista revisar las analíticas de bienestar del lado del cliente para identificar patrones.",
        includes: [
          "Aplicación web LIFESPACE",
          "LIFESPACE para terapeutas",
          "Acceso al portal del terapeuta",
          "Pagos de clientes fáciles y seguros",
        ],
        note: "*Para psicólogos, psiquiatras o terapeutas",
      },
      master: {
        level: "Nivel 3",
        title: "Suscripción master",
        price: "$59.99/mes",
        description:
          "Para profesionales avanzados e investigadores que desean acceso completo a las herramientas terapéuticas, astrológicas y analíticas de AstrologyToday.",
        includes: [
          "Aplicación web LIFESPACE",
          "LIFESPACE para terapeutas",
          "Astrology Weather+",
          "Calculadora de relaciones",
          "Acceso al portal del terapeuta",
          "Pagos de clientes fáciles y seguros",
          "Soporte técnico y al cliente 24/7",
        ],
        note: "*Para astrólogos o investigadores",
      },
    },
  },
  hi: {
    metaTitle: "मूल्य | Astrology Today",
    metaDescription: "स्व-सहायता, परामर्श या पेशेवर उपकरणों के लिए Astrology Today सदस्यता योजना चुनें।",
    kicker: "सदस्यताएँ",
    heroTitle: "एक योजना चुनें",
    heroSubtitle:
      "AstrologyToday सदस्यताएँ पारंपरिक मनोचिकित्सा का एक विकल्प हैं, जो स्व-सहायता से लेकर प्रशिक्षित ज्योतिषियों और आध्यात्मिक रूप से सजग चिकित्सकों के साथ 1-पर-1 परामर्श तक जाती हैं।",
    selectorTitle: "सदस्यता चयनक",
    includesTitle: "शामिल है",
    legal:
      "सदस्यताओं का बिल मासिक रूप से किया जाता है और उन्हें कभी भी रद्द किया जा सकता है। AstrologyToday सेवाएँ व्यक्तिगत विकास, शिक्षा, आध्यात्मिक अंतर्दृष्टि और चिकित्सीय समर्थन के लिए हैं। AstrologyToday आपातकालीन चिकित्सा देखभाल, संकट सहायता या कानूनन आवश्यक स्वास्थ्य सेवाओं का विकल्प नहीं है। कुछ पेशेवर योजनाओं के लिए पूर्ण पहुँच सक्रिय होने से पहले स्वीकृति आवश्यक हो सकती है।",
    next: "आगे",
    plans: {
      client: {
        level: "स्तर 1",
        title: "क्लाइंट सदस्यता",
        price: "$21.99/माह",
        description: "व्यक्तिगत विकास, चिकित्सीय समर्थन और स्व-सहायता उद्देश्यों के लिए।",
        includes: [
          "LIFESPACE वेब ऐप",
          "मासिक या द्वि-साप्ताहिक परामर्श",
          "व्यक्तिगत ज्योतिषीय रिपोर्ट (1)",
          "क्लाइंट पोर्टल तक पहुँच",
        ],
      },
      specialist: {
        level: "स्तर 2",
        title: "विशेषज्ञ सदस्यता",
        price: "$39.99/माह",
        description:
          "उन ज्योतिषियों और चिकित्सकों के लिए जो ग्राहकों के साथ LIFESPACE का उपयोग करते हैं। यह योजना ग्राहकों को LIFESPACE ऐप तक पहुँच देती है और विशेषज्ञ को पैटर्न पहचान के लिए क्लाइंट-साइड वेलनेस एनालिटिक्स देखने देती है।",
        includes: [
          "LIFESPACE वेब ऐप",
          "चिकित्सकों के लिए LIFESPACE",
          "थेरेपिस्ट पोर्टल तक पहुँच",
          "आसान और सुरक्षित क्लाइंट भुगतान",
        ],
        note: "*मनोवैज्ञानिकों, मनोचिकित्सकों या चिकित्सकों के लिए",
      },
      master: {
        level: "स्तर 3",
        title: "मास्टर सदस्यता",
        price: "$59.99/माह",
        description:
          "उन्नत पेशेवरों और शोधकर्ताओं के लिए जो AstrologyToday के चिकित्सीय, ज्योतिषीय और विश्लेषणात्मक उपकरणों तक पूर्ण पहुँच चाहते हैं।",
        includes: [
          "LIFESPACE वेब ऐप",
          "चिकित्सकों के लिए LIFESPACE",
          "Astrology Weather+",
          "रिलेशनशिप कैलकुलेटर",
          "थेरेपिस्ट पोर्टल तक पहुँच",
          "आसान और सुरक्षित क्लाइंट भुगतान",
          "24/7 आईटी और ग्राहक सहायता",
        ],
        note: "*ज्योतिषियों या शोधकर्ताओं के लिए",
      },
    },
  },
  ur: {
    metaTitle: "قیمت | Astrology Today",
    metaDescription: "خود مدد، مشاورت یا پیشہ ورانہ ٹولز کے لیے Astrology Today کی رکنیت کا منصوبہ منتخب کریں۔",
    kicker: "رکنیتیں",
    heroTitle: "ایک منصوبہ منتخب کریں",
    heroSubtitle:
      "AstrologyToday کی رکنیتیں روایتی نفسیاتی علاج کا ایک متبادل ہیں، جو خود مدد سے لے کر تربیت یافتہ نجومیوں اور روحانی طور پر باخبر معالجین کے ساتھ ون آن ون مشاورت تک جاتی ہیں۔",
    selectorTitle: "رکنیت منتخب کریں",
    includesTitle: "شامل ہے",
    legal:
      "رکنیتوں کا بل ماہانہ لیا جاتا ہے اور انہیں کسی بھی وقت منسوخ کیا جا سکتا ہے۔ AstrologyToday کی خدمات ذاتی نشوونما، تعلیم، روحانی بصیرت اور علاجی معاونت کے لیے ہیں۔ AstrologyToday ہنگامی طبی نگہداشت، بحران معاونت، یا قانونی طور پر مطلوب صحت خدمات کا متبادل نہیں ہے۔ کچھ پیشہ ورانہ منصوبوں کے لیے مکمل رسائی فعال ہونے سے پہلے منظوری درکار ہو سکتی ہے۔",
    next: "اگلا",
    plans: {
      client: {
        level: "سطح 1",
        title: "کلائنٹ سبسکرپشن",
        price: "$21.99/ماہ",
        description: "ذاتی نشوونما، علاجی معاونت، اور خود مدد کے مقاصد کے لیے۔",
        includes: [
          "LIFESPACE ویب ایپ",
          "ماہانہ یا دو ہفتہ وار مشاورت",
          "ذاتی نوعیت کی نجومی رپورٹ (1)",
          "کلائنٹ پورٹل تک رسائی",
        ],
      },
      specialist: {
        level: "سطح 2",
        title: "اسپیشلسٹ سبسکرپشن",
        price: "$39.99/ماہ",
        description:
          "ان نجومیوں اور معالجین کے لیے جو کلائنٹس کے ساتھ LIFESPACE استعمال کرتے ہیں۔ یہ منصوبہ کلائنٹس کو LIFESPACE ایپ تک رسائی دیتا ہے جبکہ اسپیشلسٹ کو پیٹرن شناخت کے لیے کلائنٹ سائیڈ ویلنَس اینالیٹکس کا جائزہ لینے دیتا ہے۔",
        includes: [
          "LIFESPACE ویب ایپ",
          "معالجین کے لیے LIFESPACE",
          "تھراپسٹ پورٹل تک رسائی",
          "آسان اور محفوظ کلائنٹ ادائیگیاں",
        ],
        note: "*ماہرین نفسیات، ماہرین امراض نفسی یا معالجین کے لیے",
      },
      master: {
        level: "سطح 3",
        title: "ماسٹر سبسکرپشن",
        price: "$59.99/ماہ",
        description:
          "اعلیٰ درجے کے پیشہ ور افراد اور محققین کے لیے جو AstrologyToday کے علاجی، نجومی اور تجزیاتی ٹولز تک مکمل رسائی چاہتے ہیں۔",
        includes: [
          "LIFESPACE ویب ایپ",
          "معالجین کے لیے LIFESPACE",
          "Astrology Weather+",
          "رشتہ کیلکولیٹر",
          "تھراپسٹ پورٹل تک رسائی",
          "آسان اور محفوظ کلائنٹ ادائیگیاں",
          "24/7 آئی ٹی اور کسٹمر سپورٹ",
        ],
        note: "*نجومیوں یا محققین کے لیے",
      },
    },
  },
  sa: {
    metaTitle: "मूल्यम् | Astrology Today",
    metaDescription: "स्वसहाय्याय, परामर्शाय, वा व्यावसायिक-उपकरणेभ्यः Astrology Today सदस्यता-योजना वरणीयताम्।",
    kicker: "सदस्यताः",
    heroTitle: "योजनां वरणीयताम्",
    heroSubtitle:
      "AstrologyToday सदस्यताः पारम्परिक-मनश्चिकित्सायाः विकल्पः सन्ति, याः स्वसहाय्यात् आरभ्य प्रशिक्षित-ज्योतिषिभिः आध्यात्मिकरूपेण सूचितैः चिकित्सकैश्च सह एक-एक-परामर्शपर्यन्तं गच्छन्ति।",
    selectorTitle: "सदस्यता-चयनकः",
    includesTitle: "अन्तर्भवति",
    legal:
      "सदस्यतानां मासिकं शुल्कं गृह्यते तथा च कदापि निरस्तुं शक्यते। AstrologyToday सेवाः व्यक्तिगत-विकासाय, शिक्षायै, आध्यात्मिक-अन्तर्दृष्टये, चिकित्सकीय-सहाय्याय च सन्ति। AstrologyToday आपत्कालीन-चिकित्सां, संकट-सहाय्यं, वा विधिसम्मत-आरोग्यसेवाः न प्रतिस्थापयति। केचन व्यावसायिक-योजनाः पूर्ण-प्रवेश-सक्रियीकरणात् पूर्वं अनुमोदनं याचन्ते।",
    next: "अनन्तरम्",
    plans: {
      client: {
        level: "स्तरः 1",
        title: "ग्राहक-सदस्यता",
        price: "$21.99/मासः",
        description: "व्यक्तिगत-विकासाय, चिकित्सकीय-सहाय्याय, स्वसहाय्य-प्रयोजनाय च।",
        includes: [
          "LIFESPACE जाल-अनुप्रयोगः",
          "मासिकं वा द्विसाप्ताहिकं परामर्शः",
          "व्यक्तिगत-ज्योतिष-प्रतिवेदनम् (1)",
          "ग्राहक-पोर्टल-प्रवेशः",
        ],
      },
      specialist: {
        level: "स्तरः 2",
        title: "विशेषज्ञ-सदस्यता",
        price: "$39.99/मासः",
        description:
          "तेषां ज्योतिषिणां चिकित्सकानां च कृते ये LIFESPACE ग्राहकैः सह उपयुञ्जते। एषा योजना ग्राहकान् LIFESPACE अनुप्रयोग-प्रवेशं ददाति तथा विशेषज्ञं प्रतिरूप-परिचयार्थं ग्राहक-पक्ष-स्वास्थ्य-विश्लेषणं परीक्षितुं शक्नोति।",
        includes: [
          "LIFESPACE जाल-अनुप्रयोगः",
          "चिकित्सकेभ्यः LIFESPACE",
          "चिकित्सक-पोर्टल-प्रवेशः",
          "सुलभाः सुरक्षिताश्च ग्राहक-भुगतानाः",
        ],
        note: "*मनोवैज्ञानिकानां, मनोरोगचिकित्सकानां, वा चिकित्सकानां कृते",
      },
      master: {
        level: "स्तरः 3",
        title: "मास्टर-सदस्यता",
        price: "$59.99/मासः",
        description:
          "उन्नत-व्यावसायिकानां शोधकानां च कृते ये AstrologyToday चिकित्सकीय-ज्योतिषीय-विश्लेषणात्मक-उपकरणेषु पूर्ण-प्रवेशं इच्छन्ति।",
        includes: [
          "LIFESPACE जाल-अनुप्रयोगः",
          "चिकित्सकेभ्यः LIFESPACE",
          "Astrology Weather+",
          "सम्बन्ध-गणकः",
          "चिकित्सक-पोर्टल-प्रवेशः",
          "सुलभाः सुरक्षिताश्च ग्राहक-भुगतानाः",
          "24/7 IT तथा ग्राहक-सहाय्यम्",
        ],
        note: "*ज्योतिषिभ्यः वा शोधकेभ्यः",
      },
    },
  },
  pa: {
    metaTitle: "ਕੀਮਤ | Astrology Today",
    metaDescription: "ਸਵੈ-ਸਹਾਇਤਾ, ਕਾਉਂਸਲਿੰਗ ਜਾਂ ਪੇਸ਼ੇਵਰ ਸਾਧਨਾਂ ਲਈ Astrology Today ਦੀ ਮੈਂਬਰਸ਼ਿਪ ਯੋਜਨਾ ਚੁਣੋ।",
    kicker: "ਮੈਂਬਰਸ਼ਿਪਾਂ",
    heroTitle: "ਇੱਕ ਯੋਜਨਾ ਚੁਣੋ",
    heroSubtitle:
      "AstrologyToday ਮੈਂਬਰਸ਼ਿਪਾਂ ਪਰੰਪਰਾਗਤ ਮਨੋਚਿਕਿਤਸਾ ਦਾ ਇੱਕ ਵਿਕਲਪ ਹਨ, ਜੋ ਸਵੈ-ਸਹਾਇਤਾ ਤੋਂ ਲੈ ਕੇ ਪ੍ਰਸ਼ਿਕਸ਼ਿਤ ਜੋਤਿਸ਼ੀਆਂ ਅਤੇ ਆਧਿਆਤਮਿਕ ਤੌਰ 'ਤੇ ਸਚੇਤ ਥੈਰਾਪਿਸਟਾਂ ਨਾਲ 1-ਉੱਤੇ-1 ਕਾਉਂਸਲਿੰਗ ਤੱਕ ਜਾਂਦੀਆਂ ਹਨ।",
    selectorTitle: "ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਚੋਣਕਾਰ",
    includesTitle: "ਸ਼ਾਮਲ ਹੈ",
    legal:
      "ਮੈਂਬਰਸ਼ਿਪਾਂ ਦਾ ਬਿੱਲ ਮਾਸਿਕ ਆਧਾਰ 'ਤੇ ਬਣਦਾ ਹੈ ਅਤੇ ਉਹ ਕਿਸੇ ਵੀ ਵੇਲੇ ਰੱਦ ਕੀਤੀਆਂ ਜਾ ਸਕਦੀਆਂ ਹਨ। AstrologyToday ਦੀਆਂ ਸੇਵਾਵਾਂ ਵਿਅਕਤੀਗਤ ਵਿਕਾਸ, ਸਿੱਖਿਆ, ਆਧਿਆਤਮਿਕ ਅੰਦਰੂਨੀ ਸਮਝ ਅਤੇ ਥੈਰਾਪਿਊਟਿਕ ਸਹਾਇਤਾ ਲਈ ਹਨ। AstrologyToday ਐਮਰਜੈਂਸੀ ਮੈਡੀਕਲ ਦੇਖਭਾਲ, ਸੰਕਟ ਸਹਾਇਤਾ ਜਾਂ ਕਾਨੂੰਨੀ ਤੌਰ 'ਤੇ ਲਾਜ਼ਮੀ ਸਿਹਤ ਸੇਵਾਵਾਂ ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ। ਕੁਝ ਪੇਸ਼ੇਵਰ ਯੋਜਨਾਵਾਂ ਨੂੰ ਪੂਰੀ ਪਹੁੰਚ ਚਾਲੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਮਨਜ਼ੂਰੀ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ।",
    next: "ਅੱਗੇ",
    plans: {
      client: {
        level: "ਪੱਧਰ 1",
        title: "ਕਲਾਇੰਟ ਸਬਸਕ੍ਰਿਪਸ਼ਨ",
        price: "$21.99/ਮਹੀਨਾ",
        description: "ਵਿਅਕਤੀਗਤ ਵਿਕਾਸ, ਥੈਰਾਪਿਊਟਿਕ ਸਹਾਇਤਾ ਅਤੇ ਸਵੈ-ਸਹਾਇਤਾ ਦੇ ਮਕਸਦਾਂ ਲਈ।",
        includes: [
          "LIFESPACE ਵੈਬ ਐਪ",
          "ਮਾਸਿਕ ਜਾਂ ਦੋ-ਹਫ਼ਤਾਵਾਰੀ ਕਾਉਂਸਲਿੰਗ",
          "ਵਿਅਕਤੀਗਤ ਜੋਤਿਸ਼ੀ ਰਿਪੋਰਟ (1)",
          "ਕਲਾਇੰਟ ਪੋਰਟਲ ਤੱਕ ਪਹੁੰਚ",
        ],
      },
      specialist: {
        level: "ਪੱਧਰ 2",
        title: "ਸਪੈਸ਼ਲਿਸਟ ਸਬਸਕ੍ਰਿਪਸ਼ਨ",
        price: "$39.99/ਮਹੀਨਾ",
        description:
          "ਉਹਨਾਂ ਜੋਤਿਸ਼ੀਆਂ ਅਤੇ ਥੈਰਾਪਿਸਟਾਂ ਲਈ ਜੋ ਗ੍ਰਾਹਕਾਂ ਨਾਲ LIFESPACE ਵਰਤਦੇ ਹਨ। ਇਹ ਯੋਜਨਾ ਗ੍ਰਾਹਕਾਂ ਨੂੰ LIFESPACE ਐਪ ਤੱਕ ਪਹੁੰਚ ਦਿੰਦੀ ਹੈ ਅਤੇ ਸਪੈਸ਼ਲਿਸਟ ਨੂੰ ਪੈਟਰਨ ਪਛਾਣ ਲਈ ਕਲਾਇੰਟ-ਸਾਈਡ ਵੈੱਲਨੈਸ ਐਨਾਲਿਟਿਕਸ ਦੀ ਸਮੀਖਿਆ ਕਰਨ ਦੀ ਆਗਿਆ ਦਿੰਦੀ ਹੈ।",
        includes: [
          "LIFESPACE ਵੈਬ ਐਪ",
          "ਥੈਰਾਪਿਸਟਾਂ ਲਈ LIFESPACE",
          "ਥੈਰਾਪਿਸਟ ਪੋਰਟਲ ਤੱਕ ਪਹੁੰਚ",
          "ਆਸਾਨ ਅਤੇ ਸੁਰੱਖਿਅਤ ਕਲਾਇੰਟ ਭੁਗਤਾਨ",
        ],
        note: "*ਮਨੋਵਿਗਿਆਨੀਆਂ, ਮਨੋਚਿਕਿਤਸਕਾਂ ਜਾਂ ਥੈਰਾਪਿਸਟਾਂ ਲਈ",
      },
      master: {
        level: "ਪੱਧਰ 3",
        title: "ਮਾਸਟਰ ਸਬਸਕ੍ਰਿਪਸ਼ਨ",
        price: "$59.99/ਮਹੀਨਾ",
        description:
          "ਉੱਚ ਪੱਧਰੀ ਪੇਸ਼ੇਵਰਾਂ ਅਤੇ ਖੋਜਕਾਰਾਂ ਲਈ ਜੋ AstrologyToday ਦੇ ਥੈਰਾਪਿਊਟਿਕ, ਜੋਤਿਸ਼ੀ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣਾਤਮਕ ਸਾਧਨਾਂ ਤੱਕ ਪੂਰੀ ਪਹੁੰਚ ਚਾਹੁੰਦੇ ਹਨ।",
        includes: [
          "LIFESPACE ਵੈਬ ਐਪ",
          "ਥੈਰਾਪਿਸਟਾਂ ਲਈ LIFESPACE",
          "Astrology Weather+",
          "ਰਿਸ਼ਤਾ ਕੈਲਕੂਲੇਟਰ",
          "ਥੈਰਾਪਿਸਟ ਪੋਰਟਲ ਤੱਕ ਪਹੁੰਚ",
          "ਆਸਾਨ ਅਤੇ ਸੁਰੱਖਿਅਤ ਕਲਾਇੰਟ ਭੁਗਤਾਨ",
          "24/7 IT ਅਤੇ ਗ੍ਰਾਹਕ ਸਹਾਇਤਾ",
        ],
        note: "*ਜੋਤਿਸ਼ੀਆਂ ਜਾਂ ਖੋਜਕਾਰਾਂ ਲਈ",
      },
    },
  },
  zh: {
    metaTitle: "价格 | Astrology Today",
    metaDescription: "为自助、辅导或专业工具选择 Astrology Today 会员计划。",
    kicker: "会员计划",
    heroTitle: "选择一个方案",
    heroSubtitle:
      "AstrologyToday 会员是传统心理治疗之外的另一种选择，从自助支持到与受过训练的占星师和具有灵性视角的治疗师进行一对一辅导。",
    selectorTitle: "订阅选择器",
    includesTitle: "包含内容",
    legal:
      "会员按月计费，可随时取消。AstrologyToday 服务旨在提供个人成长、教育、灵性洞见和治疗性支持。AstrologyToday 不能替代紧急医疗、危机干预或法律要求的医疗服务。某些专业方案在完全开通之前可能需要审批。",
    next: "下一步",
    plans: {
      client: {
        level: "级别 1",
        title: "客户订阅",
        price: "$21.99/月",
        description: "适用于个人成长、治疗支持和自助用途。",
        includes: [
          "LIFESPACE 网页应用",
          "每月或每两周一次辅导",
          "个性化占星报告 (1)",
          "客户门户访问权限",
        ],
      },
      specialist: {
        level: "级别 2",
        title: "专家订阅",
        price: "$39.99/月",
        description:
          "适用于与客户一起使用 LIFESPACE 的占星师和治疗师。该方案让客户可使用 LIFESPACE 应用，同时让专家查看客户端健康分析以识别模式。",
        includes: [
          "LIFESPACE 网页应用",
          "面向治疗师的 LIFESPACE",
          "治疗师门户访问权限",
          "简便且安全的客户付款",
        ],
        note: "*适用于心理学家、精神科医生或治疗师",
      },
      master: {
        level: "级别 3",
        title: "大师订阅",
        price: "$59.99/月",
        description:
          "适用于希望完整使用 AstrologyToday 治疗、占星和分析工具的高级专业人士与研究人员。",
        includes: [
          "LIFESPACE 网页应用",
          "面向治疗师的 LIFESPACE",
          "Astrology Weather+",
          "关系计算器",
          "治疗师门户访问权限",
          "简便且安全的客户付款",
          "全天候 IT 与客户支持",
        ],
        note: "*适用于占星师或研究人员",
      },
    },
  },
  ja: {
    metaTitle: "料金 | Astrology Today",
    metaDescription: "セルフヘルプ、カウンセリング、または専門ツール向けに Astrology Today の会員プランを選択してください。",
    kicker: "メンバーシップ",
    heroTitle: "プランを選ぶ",
    heroSubtitle:
      "AstrologyToday のメンバーシップは、セルフヘルプから、訓練を受けた占星家やスピリチュアルな理解を持つセラピストによる1対1カウンセリングまで、従来の心理療法に代わる選択肢です。",
    selectorTitle: "サブスクリプション選択",
    includesTitle: "含まれるもの",
    legal:
      "メンバーシップは毎月請求され、いつでも解約できます。AstrologyToday のサービスは、個人の成長、教育、スピリチュアルな洞察、および治療的サポートを目的としています。AstrologyToday は、緊急医療、危機支援、または法的に必要とされる医療サービスの代替ではありません。専門向けプランの一部は、完全なアクセス有効化の前に承認が必要な場合があります。",
    next: "次へ",
    plans: {
      client: {
        level: "レベル 1",
        title: "クライアント向けサブスクリプション",
        price: "$21.99/月",
        description: "個人の成長、治療的サポート、セルフヘルプのため。",
        includes: [
          "LIFESPACE Web アプリ",
          "毎月または隔週のカウンセリング",
          "パーソナライズされた占星術レポート (1)",
          "クライアントポータルへのアクセス",
        ],
      },
      specialist: {
        level: "レベル 2",
        title: "スペシャリスト向けサブスクリプション",
        price: "$39.99/月",
        description:
          "クライアントとともに LIFESPACE を使用する占星家やセラピスト向け。このプランではクライアントが LIFESPACE アプリを利用でき、専門家はパターン識別のためにクライアント側のウェルネス分析を確認できます。",
        includes: [
          "LIFESPACE Web アプリ",
          "セラピスト向け LIFESPACE",
          "セラピストポータルへのアクセス",
          "簡単で安全なクライアント決済",
        ],
        note: "*心理学者、精神科医、またはセラピスト向け",
      },
      master: {
        level: "レベル 3",
        title: "マスター向けサブスクリプション",
        price: "$59.99/月",
        description:
          "AstrologyToday の治療的・占星術的・分析的ツールへの完全なアクセスを求める上級専門家や研究者向け。",
        includes: [
          "LIFESPACE Web アプリ",
          "セラピスト向け LIFESPACE",
          "Astrology Weather+",
          "リレーションシップ計算機",
          "セラピストポータルへのアクセス",
          "簡単で安全なクライアント決済",
          "24時間365日のITおよびカスタマーサポート",
        ],
        note: "*占星家または研究者向け",
      },
    },
  },
  yue: {
    metaTitle: "收費 | Astrology Today",
    metaDescription: "為自助、輔導或專業工具選擇 Astrology Today 會員計劃。",
    kicker: "會員計劃",
    heroTitle: "選擇一個方案",
    heroSubtitle:
      "AstrologyToday 會員係傳統心理治療之外嘅另一種選擇，從自助到由受過訓練嘅占星師同具靈性視角嘅治療師提供一對一輔導。",
    selectorTitle: "訂閱選擇器",
    includesTitle: "包括",
    legal:
      "會員按月收費，可隨時取消。AstrologyToday 服務旨在提供個人成長、教育、靈性洞見同治療性支援。AstrologyToday 並唔取代緊急醫療、危機支援或法律規定嘅醫療服務。部分專業計劃可能需要先獲批准先可以完全啟用。",
    next: "下一步",
    plans: {
      client: {
        level: "等級 1",
        title: "客戶訂閱",
        price: "$21.99/月",
        description: "適合個人成長、治療支援同自助用途。",
        includes: [
          "LIFESPACE 網頁應用程式",
          "每月或每兩週一次輔導",
          "個人化占星報告 (1)",
          "客戶入口權限",
        ],
      },
      specialist: {
        level: "等級 2",
        title: "專家訂閱",
        price: "$39.99/月",
        description:
          "適合同客戶一齊使用 LIFESPACE 嘅占星師同治療師。呢個計劃畀客戶使用 LIFESPACE 應用程式，同時畀專家查看客戶端健康分析以識別模式。",
        includes: [
          "LIFESPACE 網頁應用程式",
          "治療師版 LIFESPACE",
          "治療師入口權限",
          "簡單安全嘅客戶付款",
        ],
        note: "*適合心理學家、精神科醫生或治療師",
      },
      master: {
        level: "等級 3",
        title: "大師訂閱",
        price: "$59.99/月",
        description:
          "適合想全面使用 AstrologyToday 治療、占星同分析工具嘅高階專業人士同研究人員。",
        includes: [
          "LIFESPACE 網頁應用程式",
          "治療師版 LIFESPACE",
          "Astrology Weather+",
          "關係計算器",
          "治療師入口權限",
          "簡單安全嘅客戶付款",
          "24/7 IT 同客戶支援",
        ],
        note: "*適合占星師或研究人員",
      },
    },
  },
  ko: {
    metaTitle: "요금 | Astrology Today",
    metaDescription: "자기 돌봄, 상담 또는 전문 도구를 위한 Astrology Today 멤버십 플랜을 선택하세요.",
    kicker: "멤버십",
    heroTitle: "플랜 선택",
    heroSubtitle:
      "AstrologyToday 멤버십은 전통적인 심리치료의 대안으로, 자기 돌봄부터 훈련된 점성가와 영적으로 통찰력 있는 치료사와의 1:1 상담까지 이어집니다.",
    selectorTitle: "구독 선택기",
    includesTitle: "포함 사항",
    legal:
      "멤버십은 매월 청구되며 언제든지 취소할 수 있습니다. AstrologyToday 서비스는 개인 성장, 교육, 영적 통찰, 치료적 지원을 위한 것입니다. AstrologyToday는 응급 의료, 위기 지원 또는 법적으로 요구되는 의료 서비스를 대체하지 않습니다. 일부 전문 플랜은 전체 접근 활성화 전에 승인이 필요할 수 있습니다.",
    next: "다음",
    plans: {
      client: {
        level: "레벨 1",
        title: "클라이언트 구독",
        price: "$21.99/월",
        description: "개인 성장, 치료적 지원 및 자기 돌봄 목적을 위한 플랜입니다.",
        includes: [
          "LIFESPACE 웹 앱",
          "월간 또는 격주 상담",
          "맞춤형 점성 보고서 (1)",
          "클라이언트 포털 접근",
        ],
      },
      specialist: {
        level: "레벨 2",
        title: "전문가 구독",
        price: "$39.99/월",
        description:
          "고객과 함께 LIFESPACE를 사용하는 점성가와 치료사를 위한 플랜입니다. 이 플랜은 고객에게 LIFESPACE 앱 접근을 제공하고, 전문가가 패턴 식별을 위해 고객 측 웰니스 분석을 검토할 수 있게 합니다.",
        includes: [
          "LIFESPACE 웹 앱",
          "치료사용 LIFESPACE",
          "치료사 포털 접근",
          "쉽고 안전한 고객 결제",
        ],
        note: "*심리학자, 정신과 의사 또는 치료사 대상",
      },
      master: {
        level: "레벨 3",
        title: "마스터 구독",
        price: "$59.99/월",
        description:
          "AstrologyToday의 치료, 점성술 및 분석 도구 전체에 접근하려는 고급 전문가와 연구자를 위한 플랜입니다.",
        includes: [
          "LIFESPACE 웹 앱",
          "치료사용 LIFESPACE",
          "Astrology Weather+",
          "관계 계산기",
          "치료사 포털 접근",
          "쉽고 안전한 고객 결제",
          "24/7 IT 및 고객 지원",
        ],
        note: "*점성가 또는 연구자 대상",
      },
    },
  },
};

export function getPricingCopy(locale: SupportedLocale): PricingPageCopy {
  return pricingCopy[locale] ?? pricingCopy[defaultLocale];
}
