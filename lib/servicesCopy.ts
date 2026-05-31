import { defaultLocale, type SupportedLocale } from "./i18n";

export type ServicesSectionCopy = {
  label: string;
  title: string;
  quote?: string;
  paragraphs: string[];
  bullets: string[];
  cta: string;
};

export type ServicesPageCopy = {
  hero: {
    kicker: string;
    title: string;
    lead: string;
  };
  sections: {
    couples: ServicesSectionCopy;
    singles: ServicesSectionCopy;
    reports: ServicesSectionCopy;
    peerSupport: ServicesSectionCopy;
  };
};

const servicesCopy: Record<SupportedLocale, ServicesPageCopy> = {
  en: {
    hero: {
      kicker: "Services",
      title: "Support for relationships, families, and deeper self-understanding.",
      lead:
        "These services are designed to help individuals better understand the deeper emotional, psychological, and relational forces shaping their interactions.",
    },
    sections: {
      couples: {
        label: "Couples & Family Services",
        title: "Relationship & Family Counseling",
        paragraphs: [
          "Relationships fail due to communication breakdown, emotional distance, and difficulty understanding one another's needs. This work focuses on bringing greater clarity to the relationship dynamic as a whole.",
          "By understanding one another better, the door to more compassion, better communication, and more grounded solutions can be opened.",
          "Family counseling focuses on the larger emotional system of the family and the roles each person plays within it. Many family conflicts are shaped by long-standing patterns, unspoken expectations, unresolved wounds, and differences in personality, values, or identity.",
        ],
        bullets: [
          "Explore how you are perceiving one another versus who you really are",
          "Identify aggression cycles and gain insight into each other's emotional worlds",
          "Trace insecurities and uncover the deeper reasons behind gut-level reactions",
          "Solve long-standing problems and unresolved wounds caused by differences in personality, values, or identity",
        ],
        cta: "Learn More",
      },
      singles: {
        label: "Singles Services",
        title: "Introspection Therapy",
        quote: "\"Gnothi Seauton\" is an Ancient Proverb that means: Know Yourself.",
        paragraphs: [
          "Introspection Therapy is a deep self-exploration process focused on identity, unseen inner conflicts, emotional patterns, and personal growth. This is meant to help you better understand who you are, how you relate to others, as well as other life aspects such as:",
          "Sessions may explore the ego, the mind, the heart, personal values, philosophy of life, and the ongoing tension between one's higher nature and shadow.",
          "This service also includes career counseling and support for unrequited love, helping clients gain clarity around purpose, direction, relationship patterns, and how to live your best life.",
        ],
        bullets: [
          "Discover what drives you",
          "Improve your coping style",
          "Explore how you seek wealth",
          "Explore your love and attraction style",
        ],
        cta: "Learn More",
      },
      reports: {
        label: "Couples & Singles Services",
        title: "Astrological Reports",
        paragraphs: [
          "Each report is a personalized, in-depth astrological analysis designed to give you clear insight into yourself, your relationships, and your life direction.",
          "These reports are written in a direct, readable style and focus on real patterns such as...",
          "Each report is detailed, structured, and have full astrological calculations included for each of your seven planets and interactions.",
        ],
        bullets: [
          "Personality insights",
          "Love and relationship dynamics",
          "Career direction and growth mindset",
          "Social life and communication",
          "Or any other theme you want explored",
        ],
        cta: "Learn More",
      },
      peerSupport: {
        label: "Singles Services",
        title: "1-on-1 Peer Support",
        paragraphs: [
          "1-on-1 Peer Support is a more practical, structured, and supportive service designed to help clients stay grounded, motivated, and accountable in daily life.",
          "This service is ideal for individuals who benefit from regular encouragement, routine-building, and consistent support as they work toward personal goals.",
          "Personal life coaching involves...",
          "This service is especially helpful for clients who are trying to build momentum, improve discipline, stay emotionally on track, or move through difficult periods with steady support and structure.",
        ],
        bullets: [
          "Daily planning, goal setting, and morning calls",
          "30-minute bi-weekly coaching calls",
          "LIFESPACE app monitoring for brain optimization",
          "Monthly personalized astrological reports",
        ],
        cta: "Learn More",
      },
    },
  },
  fr: {
    hero: {
      kicker: "Services",
      title: "Un accompagnement pour les relations, les familles et une compréhension plus profonde de soi.",
      lead:
        "Ces services sont conçus pour aider chacun à mieux comprendre les forces émotionnelles, psychologiques et relationnelles plus profondes qui façonnent ses interactions.",
    },
    sections: {
      couples: {
        label: "Services pour couples et familles",
        title: "Counseling relationnel et familial",
        paragraphs: [
          "Les relations se fragilisent à cause des ruptures de communication, de la distance émotionnelle et de la difficulté à comprendre les besoins de l'autre. Ce travail vise à apporter une plus grande clarté à la dynamique relationnelle dans son ensemble.",
          "En apprenant à mieux vous comprendre, vous pouvez ouvrir la porte à davantage de compassion, à une meilleure communication et à des solutions plus enracinées.",
          "Le counseling familial s'intéresse au système émotionnel plus large de la famille et au rôle que chaque personne y joue. De nombreux conflits familiaux sont façonnés par des schémas anciens, des attentes implicites, des blessures non résolues et des différences de personnalité, de valeurs ou d'identité.",
        ],
        bullets: [
          "Explorer la manière dont vous vous percevez l'un l'autre par rapport à qui vous êtes réellement",
          "Identifier les cycles d'agressivité et mieux comprendre le monde émotionnel de chacun",
          "Retracer les insécurités et découvrir les raisons profondes des réactions instinctives",
          "Résoudre des problèmes anciens et des blessures non résolues liés à la personnalité, aux valeurs ou à l'identité",
        ],
        cta: "En savoir plus",
      },
      singles: {
        label: "Services pour célibataires",
        title: "Thérapie d'introspection",
        quote: "\"Gnothi Seauton\" est un proverbe antique qui signifie : connais-toi toi-même.",
        paragraphs: [
          "La thérapie d'introspection est un processus profond d'exploration de soi centré sur l'identité, les conflits intérieurs invisibles, les schémas émotionnels et la croissance personnelle. Elle vise à vous aider à mieux comprendre qui vous êtes, comment vous vous reliez aux autres, ainsi que d'autres aspects de la vie tels que :",
          "Les séances peuvent explorer l'ego, l'esprit, le cœur, les valeurs personnelles, la philosophie de vie et la tension constante entre la nature supérieure et l'ombre.",
          "Ce service comprend également un accompagnement de carrière et un soutien face à l'amour non réciproque, afin d'aider les clients à clarifier leur sens, leur direction, leurs schémas relationnels et la manière de vivre leur meilleure vie.",
        ],
        bullets: [
          "Découvrir ce qui vous anime",
          "Améliorer votre manière de faire face",
          "Explorer votre rapport à la richesse",
          "Explorer votre style amoureux et d'attraction",
        ],
        cta: "En savoir plus",
      },
      reports: {
        label: "Services pour couples et célibataires",
        title: "Rapports astrologiques",
        paragraphs: [
          "Chaque rapport est une analyse astrologique personnalisée et approfondie conçue pour vous offrir une vision claire de vous-même, de vos relations et de votre direction de vie.",
          "Ces rapports sont rédigés dans un style direct et accessible et se concentrent sur des schémas réels tels que...",
          "Chaque rapport est détaillé, structuré et comprend les calculs astrologiques complets pour chacune de vos sept planètes et de leurs interactions.",
        ],
        bullets: [
          "Aperçus de la personnalité",
          "Dynamiques amoureuses et relationnelles",
          "Orientation professionnelle et état d'esprit de croissance",
          "Vie sociale et communication",
          "Ou tout autre thème que vous souhaitez explorer",
        ],
        cta: "En savoir plus",
      },
      peerSupport: {
        label: "Services pour célibataires",
        title: "Soutien par les pairs en individuel",
        paragraphs: [
          "Le soutien par les pairs en individuel est un service plus pratique, structuré et soutenant, conçu pour aider les clients à rester ancrés, motivés et responsables dans leur vie quotidienne.",
          "Ce service convient parfaitement aux personnes qui bénéficient d'encouragements réguliers, de la construction d'une routine et d'un soutien constant dans la poursuite de leurs objectifs personnels.",
          "Le coaching de vie personnel comprend...",
          "Ce service est particulièrement utile pour les clients qui cherchent à prendre de l'élan, à améliorer leur discipline, à rester émotionnellement alignés ou à traverser des périodes difficiles avec un soutien stable et structuré.",
        ],
        bullets: [
          "Planification quotidienne, définition d'objectifs et appels matinaux",
          "Appels de coaching bihebdomadaires de 30 minutes",
          "Suivi de l'application LIFESPACE pour l'optimisation du cerveau",
          "Rapports astrologiques personnalisés mensuels",
        ],
        cta: "En savoir plus",
      },
    },
  },
  it: {
    hero: {
      kicker: "Servizi",
      title: "Supporto per relazioni, famiglie e una comprensione più profonda di sé.",
      lead:
        "Questi servizi sono pensati per aiutare le persone a comprendere meglio le forze emotive, psicologiche e relazionali più profonde che plasmano le loro interazioni.",
    },
    sections: {
      couples: {
        label: "Servizi per coppie e famiglie",
        title: "Consulenza relazionale e familiare",
        paragraphs: [
          "Le relazioni si spezzano a causa di problemi di comunicazione, distanza emotiva e difficoltà nel comprendere i bisogni reciproci. Questo lavoro si concentra nel portare maggiore chiarezza alla dinamica relazionale nel suo insieme.",
          "Comprendendovi meglio, si può aprire la porta a più compassione, a una comunicazione migliore e a soluzioni più solide.",
          "La consulenza familiare si concentra sul sistema emotivo più ampio della famiglia e sui ruoli che ciascuno ricopre al suo interno. Molti conflitti familiari sono plasmati da schemi di lunga data, aspettative non dette, ferite irrisolte e differenze di personalità, valori o identità.",
        ],
        bullets: [
          "Esplorare come vi percepite a vicenda rispetto a chi siete davvero",
          "Identificare i cicli di aggressività e comprendere meglio il mondo emotivo dell'altro",
          "Rintracciare le insicurezze e scoprire le ragioni profonde delle reazioni istintive",
          "Risolvere problemi di lunga data e ferite irrisolte legate a personalità, valori o identità",
        ],
        cta: "Scopri di più",
      },
      singles: {
        label: "Servizi per single",
        title: "Terapia introspettiva",
        quote: "\"Gnothi Seauton\" è un antico proverbio che significa: conosci te stesso.",
        paragraphs: [
          "La Terapia Introspettiva è un profondo processo di esplorazione di sé incentrato su identità, conflitti interiori invisibili, schemi emotivi e crescita personale. Ha lo scopo di aiutarti a comprendere meglio chi sei, come ti relazioni agli altri e altri aspetti della vita come:",
          "Le sessioni possono esplorare l'ego, la mente, il cuore, i valori personali, la filosofia di vita e la tensione continua tra la natura superiore e l'ombra.",
          "Questo servizio comprende anche orientamento professionale e supporto per l'amore non corrisposto, aiutando i clienti a fare chiarezza su scopo, direzione, schemi relazionali e su come vivere la propria vita migliore.",
        ],
        bullets: [
          "Scoprire cosa ti muove",
          "Migliorare il tuo stile di coping",
          "Esplorare il tuo rapporto con la ricchezza",
          "Esplorare il tuo stile amoroso e di attrazione",
        ],
        cta: "Scopri di più",
      },
      reports: {
        label: "Servizi per coppie e single",
        title: "Report astrologici",
        paragraphs: [
          "Ogni report è un'analisi astrologica personalizzata e approfondita pensata per offrirti una visione chiara di te stesso, delle tue relazioni e della direzione della tua vita.",
          "Questi report sono scritti con uno stile diretto e leggibile e si concentrano su schemi reali come...",
          "Ogni report è dettagliato, strutturato e include i calcoli astrologici completi per ciascuno dei tuoi sette pianeti e delle loro interazioni.",
        ],
        bullets: [
          "Approfondimenti sulla personalità",
          "Dinamiche amorose e relazionali",
          "Direzione professionale e mentalità di crescita",
          "Vita sociale e comunicazione",
          "Oppure qualsiasi altro tema tu voglia esplorare",
        ],
        cta: "Scopri di più",
      },
      peerSupport: {
        label: "Servizi per single",
        title: "Supporto tra pari 1 a 1",
        paragraphs: [
          "Il Supporto tra Pari 1 a 1 è un servizio più pratico, strutturato e di sostegno, progettato per aiutare i clienti a rimanere centrati, motivati e responsabili nella vita quotidiana.",
          "Questo servizio è ideale per le persone che traggono beneficio da incoraggiamento regolare, costruzione di routine e supporto costante mentre lavorano verso obiettivi personali.",
          "Il life coaching personale comprende...",
          "Questo servizio è particolarmente utile per i clienti che stanno cercando di creare slancio, migliorare la disciplina, restare emotivamente in carreggiata o attraversare periodi difficili con sostegno e struttura costanti.",
        ],
        bullets: [
          "Pianificazione quotidiana, definizione degli obiettivi e chiamate mattutine",
          "Sessioni di coaching quindicinali di 30 minuti",
          "Monitoraggio dell'app LIFESPACE per l'ottimizzazione del cervello",
          "Report astrologici personalizzati mensili",
        ],
        cta: "Scopri di più",
      },
    },
  },
  es: {
    hero: {
      kicker: "Servicios",
      title: "Apoyo para relaciones, familias y una comprensión más profunda de uno mismo.",
      lead:
        "Estos servicios están diseñados para ayudar a las personas a comprender mejor las fuerzas emocionales, psicológicas y relacionales más profundas que moldean sus interacciones.",
    },
    sections: {
      couples: {
        label: "Servicios para parejas y familias",
        title: "Consejería relacional y familiar",
        paragraphs: [
          "Las relaciones fracasan por rupturas en la comunicación, distancia emocional y dificultad para comprender las necesidades del otro. Este trabajo se centra en aportar mayor claridad a la dinámica relacional en su conjunto.",
          "Al comprenderse mejor, puede abrirse la puerta a más compasión, mejor comunicación y soluciones más sólidas.",
          "La consejería familiar se centra en el sistema emocional más amplio de la familia y en los roles que cada persona desempeña dentro de él. Muchos conflictos familiares están moldeados por patrones de larga data, expectativas no expresadas, heridas no resueltas y diferencias de personalidad, valores o identidad.",
        ],
        bullets: [
          "Explorar cómo se perciben mutuamente frente a quiénes son realmente",
          "Identificar ciclos de agresión y comprender mejor el mundo emocional del otro",
          "Rastrear inseguridades y descubrir las razones más profundas detrás de las reacciones instintivas",
          "Resolver problemas de larga data y heridas no resueltas causadas por diferencias de personalidad, valores o identidad",
        ],
        cta: "Más información",
      },
      singles: {
        label: "Servicios para solteros",
        title: "Terapia de introspección",
        quote: "\"Gnothi Seauton\" es un proverbio antiguo que significa: conócete a ti mismo.",
        paragraphs: [
          "La Terapia de Introspección es un proceso profundo de autoexploración centrado en la identidad, los conflictos internos invisibles, los patrones emocionales y el crecimiento personal. Está pensada para ayudarte a comprender mejor quién eres, cómo te relacionas con los demás y otros aspectos de la vida como:",
          "Las sesiones pueden explorar el ego, la mente, el corazón, los valores personales, la filosofía de vida y la tensión continua entre la naturaleza superior y la sombra.",
          "Este servicio también incluye orientación profesional y apoyo para el amor no correspondido, ayudando a los clientes a ganar claridad en torno al propósito, la dirección, los patrones de relación y cómo vivir su mejor vida.",
        ],
        bullets: [
          "Descubrir qué te impulsa",
          "Mejorar tu estilo de afrontamiento",
          "Explorar cómo buscas la riqueza",
          "Explorar tu estilo de amor y atracción",
        ],
        cta: "Más información",
      },
      reports: {
        label: "Servicios para parejas y solteros",
        title: "Informes astrológicos",
        paragraphs: [
          "Cada informe es un análisis astrológico personalizado y profundo diseñado para darte una visión clara de ti mismo, tus relaciones y la dirección de tu vida.",
          "Estos informes están escritos en un estilo directo y legible y se centran en patrones reales como...",
          "Cada informe es detallado, estructurado e incluye cálculos astrológicos completos para cada uno de tus siete planetas y sus interacciones.",
        ],
        bullets: [
          "Perspectivas de personalidad",
          "Dinámicas amorosas y relacionales",
          "Dirección profesional y mentalidad de crecimiento",
          "Vida social y comunicación",
          "O cualquier otro tema que quieras explorar",
        ],
        cta: "Más información",
      },
      peerSupport: {
        label: "Servicios para solteros",
        title: "Apoyo entre pares 1 a 1",
        paragraphs: [
          "El apoyo entre pares 1 a 1 es un servicio más práctico, estructurado y de apoyo diseñado para ayudar a los clientes a mantenerse centrados, motivados y responsables en la vida diaria.",
          "Este servicio es ideal para personas que se benefician de aliento regular, construcción de rutinas y apoyo constante mientras trabajan hacia metas personales.",
          "El coaching de vida personal incluye...",
          "Este servicio es especialmente útil para los clientes que están tratando de generar impulso, mejorar la disciplina, mantenerse emocionalmente en curso o atravesar períodos difíciles con apoyo y estructura constantes.",
        ],
        bullets: [
          "Planificación diaria, fijación de objetivos y llamadas matutinas",
          "Llamadas de coaching quincenales de 30 minutos",
          "Monitoreo de la app LIFESPACE para optimización cerebral",
          "Informes astrológicos personalizados mensuales",
        ],
        cta: "Más información",
      },
    },
  },
  hi: {
    hero: {
      kicker: "सेवाएँ",
      title: "रिश्तों, परिवारों और स्वयं की गहरी समझ के लिए सहयोग।",
      lead:
        "ये सेवाएँ लोगों को उन गहरी भावनात्मक, मनोवैज्ञानिक और संबंधपरक शक्तियों को बेहतर समझने में मदद करने के लिए बनाई गई हैं जो उनकी पारस्परिक क्रियाओं को आकार देती हैं।",
    },
    sections: {
      couples: {
        label: "युगल और परिवार सेवाएँ",
        title: "संबंध और परिवार परामर्श",
        paragraphs: [
          "रिश्ते संवाद टूटने, भावनात्मक दूरी और एक-दूसरे की ज़रूरतों को समझने में कठिनाई के कारण विफल होते हैं। यह कार्य पूरे संबंधगत ढाँचे में अधिक स्पष्टता लाने पर केंद्रित है।",
          "जब आप एक-दूसरे को बेहतर समझते हैं, तो अधिक करुणा, बेहतर संवाद और अधिक स्थिर समाधान के द्वार खुलते हैं।",
          "परिवार परामर्श परिवार की व्यापक भावनात्मक प्रणाली और उसमें प्रत्येक व्यक्ति की भूमिका पर केंद्रित है। कई पारिवारिक संघर्ष पुराने पैटर्न, अनकही अपेक्षाओं, अनसुलझे घावों और व्यक्तित्व, मूल्यों या पहचान के अंतर से बनते हैं।",
        ],
        bullets: [
          "यह देखना कि आप एक-दूसरे को कैसे देखते हैं बनाम आप वास्तव में कौन हैं",
          "आक्रामकता के चक्रों की पहचान करना और एक-दूसरे की भावनात्मक दुनिया को समझना",
          "असुरक्षाओं का पता लगाना और सहज प्रतिक्रियाओं के गहरे कारणों को समझना",
          "व्यक्तित्व, मूल्यों या पहचान के अंतर से जुड़े लंबे समय से चले आ रहे मुद्दों और घावों को सुलझाना",
        ],
        cta: "और जानें",
      },
      singles: {
        label: "एकल व्यक्तियों के लिए सेवाएँ",
        title: "अंतर्दृष्टि थेरेपी",
        quote: "\"Gnothi Seauton\" एक प्राचीन कहावत है जिसका अर्थ है: स्वयं को जानो।",
        paragraphs: [
          "अंतर्दृष्टि थेरेपी आत्म-अन्वेषण की एक गहरी प्रक्रिया है जो पहचान, अदृश्य आंतरिक संघर्षों, भावनात्मक पैटर्न और व्यक्तिगत विकास पर केंद्रित है। इसका उद्देश्य आपको यह समझने में मदद करना है कि आप कौन हैं, आप दूसरों से कैसे जुड़ते हैं, और जीवन के अन्य पहलू जैसे:",
          "सत्रों में अहं, मन, हृदय, व्यक्तिगत मूल्य, जीवन-दर्शन और उच्चतर स्वभाव तथा छाया के बीच चलने वाले तनाव की पड़ताल की जा सकती है।",
          "इस सेवा में करियर परामर्श और एकतरफ़ा प्रेम के लिए सहयोग भी शामिल है, ताकि ग्राहक उद्देश्य, दिशा, संबंध पैटर्न और अपना सर्वश्रेष्ठ जीवन कैसे जियें इस पर स्पष्टता पा सकें।",
        ],
        bullets: [
          "यह जानना कि आपको क्या प्रेरित करता है",
          "अपने सामना करने के तरीके को बेहतर बनाना",
          "धन की ओर आपके रुझान को समझना",
          "अपने प्रेम और आकर्षण शैली को समझना",
        ],
        cta: "और जानें",
      },
      reports: {
        label: "युगल और एकल सेवाएँ",
        title: "ज्योतिषीय रिपोर्टें",
        paragraphs: [
          "हर रिपोर्ट एक व्यक्तिगत, गहन ज्योतिषीय विश्लेषण है जो आपको स्वयं, आपके संबंधों और जीवन की दिशा के बारे में स्पष्ट अंतर्दृष्टि देने के लिए तैयार किया गया है।",
          "ये रिपोर्टें सीधे, पढ़ने में आसान शैली में लिखी जाती हैं और वास्तविक पैटर्न पर ध्यान देती हैं जैसे...",
          "हर रिपोर्ट विस्तृत, संरचित होती है और आपके सात ग्रहों तथा उनकी पारस्परिक क्रियाओं के लिए पूर्ण ज्योतिषीय गणनाएँ शामिल करती है।",
        ],
        bullets: [
          "व्यक्तित्व संबंधी अंतर्दृष्टियाँ",
          "प्रेम और संबंधों की गतिशीलता",
          "कैरियर दिशा और विकासशील मानसिकता",
          "सामाजिक जीवन और संवाद",
          "या कोई और विषय जिसे आप जानना चाहते हों",
        ],
        cta: "और जानें",
      },
      peerSupport: {
        label: "एकल व्यक्तियों के लिए सेवाएँ",
        title: "1-पर-1 साथी समर्थन",
        paragraphs: [
          "1-पर-1 साथी समर्थन एक अधिक व्यावहारिक, संरचित और सहायक सेवा है जो ग्राहकों को दैनिक जीवन में स्थिर, प्रेरित और जवाबदेह बनाए रखने में मदद करती है।",
          "यह सेवा उन लोगों के लिए आदर्श है जिन्हें व्यक्तिगत लक्ष्यों की ओर काम करते समय नियमित प्रोत्साहन, दिनचर्या-निर्माण और निरंतर सहयोग से लाभ मिलता है।",
          "व्यक्तिगत जीवन कोचिंग में शामिल है...",
          "यह सेवा विशेष रूप से उन ग्राहकों के लिए उपयोगी है जो गति बनाना चाहते हैं, अनुशासन सुधारना चाहते हैं, भावनात्मक रूप से संतुलित रहना चाहते हैं या कठिन समय से स्थिर सहयोग और संरचना के साथ गुजरना चाहते हैं।",
        ],
        bullets: [
          "दैनिक योजना, लक्ष्य निर्धारण और सुबह की कॉल",
          "30 मिनट की द्वि-साप्ताहिक कोचिंग कॉल",
          "मस्तिष्क अनुकूलन के लिए LIFESPACE ऐप मॉनिटरिंग",
          "मासिक व्यक्तिगत ज्योतिषीय रिपोर्टें",
        ],
        cta: "और जानें",
      },
    },
  },
  ur: {
    hero: {
      kicker: "خدمات",
      title: "رشتوں، خاندانوں اور اپنی ذات کی گہری سمجھ کے لیے معاونت۔",
      lead:
        "یہ خدمات لوگوں کو ان گہری جذباتی، نفسیاتی اور تعلقاتی قوتوں کو بہتر طور پر سمجھنے میں مدد دینے کے لیے بنائی گئی ہیں جو ان کے باہمی تعلقات کو شکل دیتی ہیں۔",
    },
    sections: {
      couples: {
        label: "جوڑوں اور خاندانوں کے لیے خدمات",
        title: "تعلقات اور خاندانی رہنمائی",
        paragraphs: [
          "رشتے رابطے کے ٹوٹنے، جذباتی فاصلے اور ایک دوسرے کی ضروریات کو سمجھنے میں دشواری کی وجہ سے کمزور پڑتے ہیں۔ یہ کام مجموعی تعلقاتی کیفیت میں زیادہ وضاحت لانے پر مرکوز ہے۔",
          "جب آپ ایک دوسرے کو بہتر طور پر سمجھتے ہیں تو زیادہ ہمدردی، بہتر گفتگو اور زیادہ مضبوط حل کے دروازے کھلتے ہیں۔",
          "خاندانی رہنمائی خاندان کے وسیع جذباتی نظام اور اس میں ہر فرد کے کردار پر توجہ دیتی ہے۔ بہت سے خاندانی تنازعات پرانے نمونوں، غیر کہی توقعات، حل نہ ہونے والے زخموں اور شخصیت، اقدار یا شناخت کے فرق سے تشکیل پاتے ہیں۔",
        ],
        bullets: [
          "یہ دیکھنا کہ آپ ایک دوسرے کو کیسے دیکھتے ہیں اور حقیقت میں آپ کون ہیں",
          "جارحیت کے چکروں کی نشاندہی کرنا اور ایک دوسرے کی جذباتی دنیا کو سمجھنا",
          "عدم تحفظات کا سراغ لگانا اور فوری ردِعمل کے گہرے اسباب جاننا",
          "شخصیت، اقدار یا شناخت کے فرق سے پیدا ہونے والے پرانے مسائل اور زخموں کو حل کرنا",
        ],
        cta: "مزید جانیں",
      },
      singles: {
        label: "اکیلے افراد کے لیے خدمات",
        title: "خود شناسی تھراپی",
        quote: "\"Gnothi Seauton\" ایک قدیم قول ہے جس کا مطلب ہے: خود کو جانو۔",
        paragraphs: [
          "خود شناسی تھراپی ایک گہرا خود دریافت کا عمل ہے جو شناخت، پوشیدہ اندرونی کشمکش، جذباتی نمونوں اور ذاتی نشوونما پر مرکوز ہے۔ اس کا مقصد آپ کو یہ بہتر طور پر سمجھنے میں مدد دینا ہے کہ آپ کون ہیں، دوسروں سے کیسے جڑتے ہیں، اور زندگی کے دوسرے پہلو جیسے:",
          "نشستوں میں انا، ذہن، دل، ذاتی اقدار، فلسفۂ حیات، اور اپنی اعلیٰ فطرت اور سایہ کے درمیان جاری کشمکش کا جائزہ لیا جا سکتا ہے۔",
          "اس خدمت میں کیریئر رہنمائی اور یکطرفہ محبت کے لیے معاونت بھی شامل ہے تاکہ مؤکل مقصد، سمت، تعلقاتی نمونوں اور اپنی بہترین زندگی جینے کے طریقے کے بارے میں وضاحت حاصل کر سکیں۔",
        ],
        bullets: [
          "یہ جاننا کہ آپ کو کیا چلاتا ہے",
          "اپنے مقابلہ کرنے کے انداز کو بہتر بنانا",
          "یہ سمجھنا کہ آپ دولت کو کیسے تلاش کرتے ہیں",
          "اپنے محبت اور کشش کے انداز کو سمجھنا",
        ],
        cta: "مزید جانیں",
      },
      reports: {
        label: "جوڑوں اور اکیلے افراد کے لیے خدمات",
        title: "نجومی رپورٹس",
        paragraphs: [
          "ہر رپورٹ ایک ذاتی اور گہرائی پر مبنی نجومی تجزیہ ہے جو آپ کو اپنی ذات، اپنے رشتوں اور زندگی کی سمت کے بارے میں واضح بصیرت دینے کے لیے تیار کیا گیا ہے۔",
          "یہ رپورٹس ایک سیدھے اور قابلِ فہم انداز میں لکھی جاتی ہیں اور حقیقی نمونوں پر توجہ دیتی ہیں جیسے...",
          "ہر رپورٹ مفصل، منظم ہوتی ہے اور آپ کے ساتوں سیاروں اور ان کے باہمی اثرات کے مکمل نجومی حسابات شامل کرتی ہے۔",
        ],
        bullets: [
          "شخصیت سے متعلق بصیرت",
          "محبت اور تعلقات کی حرکیات",
          "کیریئر کی سمت اور ترقی پسند ذہنیت",
          "سماجی زندگی اور رابطہ",
          "یا کوئی اور موضوع جسے آپ دریافت کرنا چاہیں",
        ],
        cta: "مزید جانیں",
      },
      peerSupport: {
        label: "اکیلے افراد کے لیے خدمات",
        title: "ون آن ون پیئر سپورٹ",
        paragraphs: [
          "ون آن ون پیئر سپورٹ ایک زیادہ عملی، منظم اور سہارا دینے والی خدمت ہے جو مؤکلوں کو روزمرہ زندگی میں باوقار، متحرک اور جواب دہ رکھنے کے لیے بنائی گئی ہے۔",
          "یہ خدمت ان افراد کے لیے مثالی ہے جو ذاتی اہداف کی طرف کام کرتے ہوئے باقاعدہ حوصلہ افزائی، معمول سازی اور مستقل تعاون سے فائدہ اٹھاتے ہیں۔",
          "ذاتی لائف کوچنگ میں شامل ہے...",
          "یہ خدمت خاص طور پر ان مؤکلوں کے لیے مفید ہے جو رفتار پیدا کرنا، نظم و ضبط بہتر کرنا، جذباتی طور پر متوازن رہنا یا مشکل ادوار کو مستقل حمایت اور ڈھانچے کے ساتھ عبور کرنا چاہتے ہیں۔",
        ],
        bullets: [
          "روزانہ منصوبہ بندی، ہدف سازی اور صبح کی کالز",
          "30 منٹ کی دو ہفتہ وار کوچنگ کالز",
          "دماغی بہتری کے لیے LIFESPACE ایپ مانیٹرنگ",
          "ماہانہ ذاتی نجومی رپورٹس",
        ],
        cta: "مزید جانیں",
      },
    },
  },
  sa: {
    hero: {
      kicker: "सेवाः",
      title: "सम्बन्धेषु, कुलजीवने, आत्मबोधे च गभीरसहाय्यम्।",
      lead:
        "एताः सेवाः जनान् तेषां पारस्परिकव्यवहारेषु कार्यरताः गभीराः भावनात्मकाः, मानसशास्त्रीयाः, सम्बन्धात्मकाश्च शक्तयः अवगन्तुं सहायन्ति।",
    },
    sections: {
      couples: {
        label: "दम्पती-परिवार-सेवाः",
        title: "सम्बन्ध-परिवार-परामर्शः",
        paragraphs: [
          "सम्बन्धाः संप्रेषणभङ्गात्, भावनात्मकदूरतया, अन्योन्यावश्यकतानां बोधदौर्बल्याच्च क्षीयन्ते। अयं प्रयासः समग्रसम्बन्धगतिशीलतायामधिकस्पष्टतां जनयितुं प्रवर्तते।",
          "यदा भवन्तः परस्परं सम्यगवगच्छन्ति तदा अधिककरुणा, उत्तमसंवादः, स्थिरतरा समाधानश्च सम्भवन्ति।",
          "परिवारपरामर्शः परिवारस्य विस्तीर्णे भावनात्मकतन्त्रे तथा तत्र प्रत्येकस्य भूमिकायां केन्द्रितः भवति। अनेके कुलविवादाः पुरातनरूपरेखाभिः, अनुक्तापेक्षाभिः, अनिर्वृत्तव्रणैः, व्यक्तित्व-मूल्य-पहचानभेदैश्च निर्मीयन्ते।",
        ],
        bullets: [
          "युवां परस्परं कथं पश्यथः, वास्तवतः कः असि इति च अन्वेष्टुम्",
          "आक्रोशचक्राणि ज्ञातुं तथा परस्परस्य भावलोकं गन्तुम्",
          "असुरक्षाणां मूलं ज्ञातुं तथा सहजप्रतिक्रियाणां गूढकारणानि उद्घाटयितुम्",
          "व्यक्तित्व-मूल्य-पहचानभेदजनितान् दीर्घकालिकान् समस्याः व्रणांश्च समाधातुम्",
        ],
        cta: "अधिकं जानातु",
      },
      singles: {
        label: "एकाकिसेवाः",
        title: "अन्तर्मुख-चिकित्सा",
        quote: "\"Gnothi Seauton\" इति प्राचीनसूक्तिः, यस्य अर्थः अस्ति: आत्मानं जानिहि।",
        paragraphs: [
          "अन्तर्मुख-चिकित्सा नाम गभीरः स्व-अन्वेषण-प्रक्रियः, यः परिचयम्, अदृश्य-अन्तर्द्वन्द्वानि, भावनारूपरेखाः, व्यक्तिगत-विकासं च विषयीकुरुते। अस्य लक्ष्यं भवतः स्वस्वरूपं, परेषां प्रति सम्बन्धरूपं, जीवनस्य अन्ये पक्षाश्च अवगन्तुं सहाय्यम्।",
          "अधिवेशनानि अहंकारम्, मनः, हृदयम्, स्वमूल्यानि, जीवनदर्शनम्, उच्चस्वभावस्य छायायाश्च मध्ये प्रवर्तमानं तनावं परीक्षितुं शक्नुवन्ति।",
          "अस्यां सेवायां व्यवसायपरामर्शः, अनुत्तरितप्रेम्णः समर्थनं च अन्तर्भवतः, येन जनाः प्रयोजनं, दिशा, सम्बन्धरूपरेखाः, उत्तमजीवनमार्गं च स्पष्टतया ज्ञातुं शक्नुवन्ति।",
        ],
        bullets: [
          "भवतः प्रेरकशक्तिं ज्ञातुम्",
          "स्वस्य समन्वय-शैलीं सुधारयितुम्",
          "सम्पदन्वेषणे स्वभावं ज्ञातुम्",
          "प्रेमाकर्षणयोः शैलीम् अन्वेष्टुम्",
        ],
        cta: "अधिकं जानातु",
      },
      reports: {
        label: "दम्पती-एकाकि-सेवाः",
        title: "ज्योतिष-प्रतिवेदनानि",
        paragraphs: [
          "प्रत्येकं प्रतिवेदनं व्यक्तिगतं गभीरं च ज्योतिषविश्लेषणं यत् आत्मनि, सम्बन्धेषु, जीवनदिशायां च स्पष्टदृष्टिं दातुं रच्यते।",
          "एतानि प्रतिवेदनानि सरलपाठ्यशैलीया लिखितानि भवन्ति, वास्तविकरूपरेखासु केन्द्रितानि च यथा...",
          "प्रत्येकं प्रतिवेदनं विस्तृतं, सुव्यवस्थितं, भवतः सप्तग्रहाणां तेषां परस्परसम्बन्धानां च पूर्णगणनाभिः सहितं भवति।",
        ],
        bullets: [
          "व्यक्तित्वदृष्टयः",
          "प्रेम-सम्बन्ध-गतिशीलता",
          "व्यवसायदिशा तथा विकासमानदृष्टिः",
          "सामाजिकजीवनं संवादश्च",
          "अथवा अन्यः कश्चन विषयः यं भवान् अन्वेष्टुमिच्छति",
        ],
        cta: "अधिकं जानातु",
      },
      peerSupport: {
        label: "एकाकिसेवाः",
        title: "एक-एक-पारस्परिक-सहाय्यम्",
        paragraphs: [
          "एक-एक-पारस्परिक-सहाय्यम् अधिकं व्यावहारिकं, सुव्यवस्थितं, समर्थकं च सेवा-रूपम्, यत् जनान् दैनन्दिनजीवने स्थिरान्, प्रेरितान्, उत्तरदायिनश्च स्थापयितुं निर्मितम्।",
          "एषा सेवा तेषां कृते उपयुक्ता ये नियमितोत्साहेन, दिनचर्यानिर्माणेन, सततसहाय्येन च स्वलक्ष्येषु प्रगतिं कुर्वन्ति।",
          "व्यक्तिगत-जीवन-मार्गदर्शनं अन्तर्भवति...",
          "एषा सेवा विशेषतया तेषां कृते उपयोगिनी ये वेगं निर्मातुम्, अनुशासनं वर्धयितुम्, भावनात्मकसम्यक्तां रक्षितुम्, वा कठिनकालान् स्थिरसमर्थनेन संरचनया च अतिक्रमितुम् इच्छन्ति।",
        ],
        bullets: [
          "दैनिक-योजना, लक्ष्यनिर्धारणं, प्रातःकालिक-संवादाश्च",
          "त्रिंशन्मिनिटीयाः द्विसाप्ताहिकाः मार्गदर्शन-सम्वादाः",
          "मस्तिष्कोपयुक्ततायै LIFESPACE-अनुप्रयोग-निगराणी",
          "मासिक-व्यक्तिगत-ज्योतिष-प्रतिवेदनानि",
        ],
        cta: "अधिकं जानातु",
      },
    },
  },
  pa: {
    hero: {
      kicker: "ਸੇਵਾਵਾਂ",
      title: "ਰਿਸ਼ਤਿਆਂ, ਪਰਿਵਾਰਾਂ ਅਤੇ ਆਪਣੇ ਆਪ ਨੂੰ ਹੋਰ ਡੂੰਘਾਈ ਨਾਲ ਸਮਝਣ ਲਈ ਸਹਾਇਤਾ।",
      lead:
        "ਇਹ ਸੇਵਾਵਾਂ ਲੋਕਾਂ ਨੂੰ ਉਹਨਾਂ ਡੂੰਘੀਆਂ ਭਾਵਨਾਤਮਕ, ਮਨੋਵਿਗਿਆਨਕ ਅਤੇ ਰਿਸ਼ਤਾਤਮਕ ਤਾਕਤਾਂ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਬਣਾਈਆਂ ਗਈਆਂ ਹਨ ਜੋ ਉਹਨਾਂ ਦੀਆਂ ਪਰਸਪਰ ਕ੍ਰਿਆਵਾਂ ਨੂੰ ਆਕਾਰ ਦਿੰਦੀਆਂ ਹਨ।",
    },
    sections: {
      couples: {
        label: "ਜੋੜਿਆਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਲਈ ਸੇਵਾਵਾਂ",
        title: "ਰਿਸ਼ਤਾ ਅਤੇ ਪਰਿਵਾਰ ਕਾਊਂਸਲਿੰਗ",
        paragraphs: [
          "ਰਿਸ਼ਤੇ ਸੰਚਾਰ ਦੇ ਟੁੱਟਣ, ਭਾਵਨਾਤਮਕ ਦੂਰੀ ਅਤੇ ਇੱਕ ਦੂਜੇ ਦੀਆਂ ਲੋੜਾਂ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮੁਸ਼ਕਲ ਕਾਰਨ ਕਮਜ਼ੋਰ ਹੋ ਜਾਂਦੇ ਹਨ। ਇਹ ਕੰਮ ਪੂਰੇ ਰਿਸ਼ਤੇ ਦੀ ਗਤੀਵਿਧੀ ਵਿੱਚ ਵਧੇਰੇ ਸਪਸ਼ਟਤਾ ਲਿਆਉਣ 'ਤੇ ਕੇਂਦ੍ਰਿਤ ਹੈ।",
          "ਜਦੋਂ ਤੁਸੀਂ ਇੱਕ ਦੂਜੇ ਨੂੰ ਵਧੀਆ ਤਰੀਕੇ ਨਾਲ ਸਮਝਦੇ ਹੋ, ਤਾਂ ਹੋਰ ਦਇਆ, ਵਧੀਆ ਸੰਚਾਰ ਅਤੇ ਹੋਰ ਧਰਾਤਲੀ ਹੱਲਾਂ ਦੇ ਦਰਵਾਜ਼ੇ ਖੁਲ ਸਕਦੇ ਹਨ।",
          "ਪਰਿਵਾਰ ਕਾਊਂਸਲਿੰਗ ਪਰਿਵਾਰ ਦੇ ਵੱਡੇ ਭਾਵਨਾਤਮਕ ਤੰਤ੍ਰ ਅਤੇ ਉਸ ਵਿੱਚ ਹਰ ਵਿਅਕਤੀ ਦੇ ਭੂਮਿਕਾ 'ਤੇ ਕੇਂਦ੍ਰਿਤ ਹੁੰਦੀ ਹੈ। ਬਹੁਤ ਸਾਰੇ ਪਰਿਵਾਰਕ ਟਕਰਾਅ ਪੁਰਾਣੇ ਪੈਟਰਨਾਂ, ਨਾ ਕਹੀਆਂ ਉਮੀਦਾਂ, ਅਣਸੁੱਲਝੇ ਜ਼ਖਮਾਂ ਅਤੇ ਵਿਅਕਤਿਤਵ, ਮੁੱਲਾਂ ਜਾਂ ਪਹਿਚਾਣ ਦੇ ਫਰਕ ਨਾਲ ਬਣਦੇ ਹਨ।",
        ],
        bullets: [
          "ਇਹ ਵੇਖਣਾ ਕਿ ਤੁਸੀਂ ਇੱਕ ਦੂਜੇ ਨੂੰ ਕਿਵੇਂ ਵੇਖਦੇ ਹੋ ਬਨਾਮ ਤੁਸੀਂ ਅਸਲ ਵਿੱਚ ਕੌਣ ਹੋ",
          "ਅਗਰੈਸ਼ਨ ਦੇ ਚੱਕਰਾਂ ਦੀ ਪਛਾਣ ਕਰਨਾ ਅਤੇ ਇੱਕ ਦੂਜੇ ਦੀ ਭਾਵਨਾਤਮਕ ਦੁਨੀਆ ਨੂੰ ਸਮਝਣਾ",
          "ਅਸੁਰੱਖਿਆਵਾਂ ਦਾ ਪਤਾ ਲਗਾਉਣਾ ਅਤੇ ਤੁਰੰਤ ਪ੍ਰਤੀਕਿਰਿਆਵਾਂ ਦੇ ਡੂੰਘੇ ਕਾਰਣ ਸਮਝਣਾ",
          "ਵਿਅਕਤਿਤਵ, ਮੁੱਲਾਂ ਜਾਂ ਪਹਿਚਾਣ ਦੇ ਫਰਕ ਤੋਂ ਬਣੇ ਲੰਬੇ ਸਮੇਂ ਵਾਲੇ ਮੁੱਦੇ ਅਤੇ ਜ਼ਖਮ ਸੁਲਝਾਉਣਾ",
        ],
        cta: "ਹੋਰ ਜਾਣੋ",
      },
      singles: {
        label: "ਇਕੱਲਿਆਂ ਲਈ ਸੇਵਾਵਾਂ",
        title: "ਆਤਮ-ਅਵਲੋਕਨ ਥੈਰੇਪੀ",
        quote: "\"Gnothi Seauton\" ਇੱਕ ਪ੍ਰਾਚੀਨ ਕਹਾਵਤ ਹੈ ਜਿਸਦਾ ਅਰਥ ਹੈ: ਆਪਣੇ ਆਪ ਨੂੰ ਜਾਣੋ।",
        paragraphs: [
          "ਆਤਮ-ਅਵਲੋਕਨ ਥੈਰੇਪੀ ਆਪਣੀ ਪਛਾਣ, ਅਦਿੱਖ ਅੰਦਰੂਨੀ ਟਕਰਾਅ, ਭਾਵਨਾਤਮਕ ਪੈਟਰਨ ਅਤੇ ਨਿੱਜੀ ਵਿਕਾਸ 'ਤੇ ਕੇਂਦ੍ਰਿਤ ਇਕ ਡੂੰਘੀ ਖੁਦ-ਖੋਜ ਪ੍ਰਕਿਰਿਆ ਹੈ। ਇਸਦਾ ਮਕਸਦ ਤੁਹਾਨੂੰ ਇਹ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਨਾ ਹੈ ਕਿ ਤੁਸੀਂ ਕੌਣ ਹੋ, ਤੁਸੀਂ ਹੋਰਨਾਂ ਨਾਲ ਕਿਵੇਂ ਜੁੜਦੇ ਹੋ, ਅਤੇ ਜੀਵਨ ਦੇ ਹੋਰ ਪੱਖ ਜਿਵੇਂ:",
          "ਸੈਸ਼ਨਾਂ ਵਿੱਚ ਅਹੰਕਾਰ, ਮਨ, ਦਿਲ, ਨਿੱਜੀ ਮੁੱਲ, ਜੀਵਨ-ਦਰਸ਼ਨ ਅਤੇ ਆਪਣੀ ਉੱਚੀ ਪ੍ਰਕਿਰਤੀ ਅਤੇ ਛਾਂ ਵਿਚਲੀ ਲਗਾਤਾਰ ਖਿੱਚ ਦੀ ਪੜਤਾਲ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ।",
          "ਇਸ ਸੇਵਾ ਵਿੱਚ ਕਰੀਅਰ ਕਾਊਂਸਲਿੰਗ ਅਤੇ ਇਕ-ਤਰਫ਼ਾ ਪਿਆਰ ਲਈ ਸਹਾਇਤਾ ਵੀ ਸ਼ਾਮਲ ਹੈ, ਜਿਸ ਨਾਲ ਕਲਾਇੰਟ ਉਦੇਸ਼, ਦਿਸ਼ਾ, ਰਿਸ਼ਤਾ ਪੈਟਰਨ ਅਤੇ ਆਪਣੀ ਸਭ ਤੋਂ ਵਧੀਆ ਜ਼ਿੰਦਗੀ ਕਿਵੇਂ ਜੀਣੀ ਹੈ, ਇਸ ਬਾਰੇ ਸਪਸ਼ਟਤਾ ਲੱਭ ਸਕਦੇ ਹਨ।",
        ],
        bullets: [
          "ਇਹ ਜਾਣਨਾ ਕਿ ਤੁਹਾਨੂੰ ਕੀ ਚਲਾਂਦਾ ਹੈ",
          "ਆਪਣੇ ਨਿਭਾਉਣ ਦੇ ਢੰਗ ਨੂੰ ਸੁਧਾਰਨਾ",
          "ਇਹ ਸਮਝਣਾ ਕਿ ਤੁਸੀਂ ਧਨ ਨੂੰ ਕਿਵੇਂ ਲੱਭਦੇ ਹੋ",
          "ਆਪਣੇ ਪਿਆਰ ਅਤੇ ਆਕਰਸ਼ਣ ਦੇ ਅੰਦਾਜ਼ ਨੂੰ ਸਮਝਣਾ",
        ],
        cta: "ਹੋਰ ਜਾਣੋ",
      },
      reports: {
        label: "ਜੋੜਿਆਂ ਅਤੇ ਇਕੱਲਿਆਂ ਲਈ ਸੇਵਾਵਾਂ",
        title: "ਜੋਤਿਸ਼ੀ ਰਿਪੋਰਟਾਂ",
        paragraphs: [
          "ਹਰ ਰਿਪੋਰਟ ਇੱਕ ਨਿੱਜੀ, ਡੂੰਘੀ ਜੋਤਿਸ਼ੀ ਵਿਸ਼ਲੇਸ਼ਣ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਆਪਣੇ ਆਪ, ਆਪਣੇ ਰਿਸ਼ਤਿਆਂ ਅਤੇ ਜੀਵਨ ਦੀ ਦਿਸ਼ਾ ਬਾਰੇ ਸਪਸ਼ਟ ਸਮਝ ਦੇਣ ਲਈ ਬਣਾਈ ਜਾਂਦੀ ਹੈ।",
          "ਇਹ ਰਿਪੋਰਟਾਂ ਸਿੱਧੇ, ਆਸਾਨ-ਪੜ੍ਹਨ ਵਾਲੇ ਅੰਦਾਜ਼ ਵਿੱਚ ਲਿਖੀਆਂ ਜਾਂਦੀਆਂ ਹਨ ਅਤੇ ਅਸਲ ਪੈਟਰਨਾਂ 'ਤੇ ਧਿਆਨ ਦੇੰਦੀਆਂ ਹਨ ਜਿਵੇਂ ਕਿ...",
          "ਹਰ ਰਿਪੋਰਟ ਵਿਸਥਾਰਪੂਰਵਕ, ਸੰਰਚਿਤ ਹੁੰਦੀ ਹੈ ਅਤੇ ਤੁਹਾਡੇ ਸੱਤ ਗ੍ਰਹਿਆਂ ਅਤੇ ਉਹਨਾਂ ਦੀਆਂ ਪਰਸਪਰ ਕ੍ਰਿਆਵਾਂ ਲਈ ਪੂਰੀ ਜੋਤਿਸ਼ੀ ਗਣਨਾ ਸ਼ਾਮਲ ਕਰਦੀ ਹੈ।",
        ],
        bullets: [
          "ਵਿਅਕਤਿਤਵ ਸੰਬੰਧੀ ਅੰਦਰੂਨੀ ਝਲਕਾਂ",
          "ਪਿਆਰ ਅਤੇ ਰਿਸ਼ਤਾ ਗਤੀਵਿਧੀਆਂ",
          "ਕਰੀਅਰ ਦੀ ਦਿਸ਼ਾ ਅਤੇ ਵਿਕਾਸਮਾਨ ਸੋਚ",
          "ਸਮਾਜਿਕ ਜੀਵਨ ਅਤੇ ਸੰਚਾਰ",
          "ਜਾਂ ਹੋਰ ਕੋਈ ਵੀ ਥੀਮ ਜਿਸਦੀ ਤੁਸੀਂ ਖੋਜ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ",
        ],
        cta: "ਹੋਰ ਜਾਣੋ",
      },
      peerSupport: {
        label: "ਇਕੱਲਿਆਂ ਲਈ ਸੇਵਾਵਾਂ",
        title: "1-ਤੋਂ-1 ਪੀਅਰ ਸਹਾਇਤਾ",
        paragraphs: [
          "1-ਤੋਂ-1 ਪੀਅਰ ਸਹਾਇਤਾ ਇੱਕ ਹੋਰ ਵਿਆਵਹਾਰਿਕ, ਸੰਰਚਿਤ ਅਤੇ ਸਹਾਇਕ ਸੇਵਾ ਹੈ ਜੋ ਕਲਾਇੰਟਾਂ ਨੂੰ ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਸਥਿਰ, ਪ੍ਰੇਰਿਤ ਅਤੇ ਜ਼ਿੰਮੇਵਾਰ ਰਹਿਣ ਵਿੱਚ ਮਦਦ ਦੇਣ ਲਈ ਬਣਾਈ ਗਈ ਹੈ।",
          "ਇਹ ਸੇਵਾ ਉਹਨਾਂ ਲਈ ਆਦਰਸ਼ ਹੈ ਜੋ ਨਿੱਜੀ ਲਕਸ਼ਾਂ ਵੱਲ ਕੰਮ ਕਰਦੇ ਸਮੇਂ ਨਿਯਮਿਤ ਉਤਸ਼ਾਹ, ਰੁਟੀਨ ਬਣਾਉਣ ਅਤੇ ਲਗਾਤਾਰ ਸਹਾਇਤਾ ਤੋਂ ਲਾਭ ਲੈਂਦੇ ਹਨ।",
          "ਨਿੱਜੀ ਲਾਈਫ ਕੋਚਿੰਗ ਵਿੱਚ ਸ਼ਾਮਲ ਹੈ...",
          "ਇਹ ਸੇਵਾ ਖਾਸ ਤੌਰ 'ਤੇ ਉਹਨਾਂ ਕਲਾਇੰਟਾਂ ਲਈ ਮਦਦਗਾਰ ਹੈ ਜੋ ਗਤੀ ਬਣਾਉਣਾ, ਅਨੁਸ਼ਾਸਨ ਸੁਧਾਰਨਾ, ਭਾਵਨਾਤਮਕ ਤੌਰ 'ਤੇ ਟਰੈਕ 'ਤੇ ਰਹਿਣਾ ਜਾਂ ਔਖੇ ਸਮੇਂ ਨੂੰ ਢਾਂਚੇ ਅਤੇ ਸਥਿਰ ਸਹਾਇਤਾ ਨਾਲ ਪਾਰ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹਨ।",
        ],
        bullets: [
          "ਰੋਜ਼ਾਨਾ ਯੋਜਨਾ, ਲਕਸ਼ ਨਿਰਧਾਰਣ ਅਤੇ ਸਵੇਰ ਦੀਆਂ ਕਾਲਾਂ",
          "30 ਮਿੰਟ ਦੀਆਂ ਦੋ-ਹਫ਼ਤਾਵਾਰੀ ਕੋਚਿੰਗ ਕਾਲਾਂ",
          "ਦਿਮਾਗੀ ਸੁਧਾਰ ਲਈ LIFESPACE ਐਪ ਮਾਨੀਟਰਿੰਗ",
          "ਮਾਸਿਕ ਨਿੱਜੀ ਜੋਤਿਸ਼ੀ ਰਿਪੋਰਟਾਂ",
        ],
        cta: "ਹੋਰ ਜਾਣੋ",
      },
    },
  },
  zh: {
    hero: {
      kicker: "服务",
      title: "为关系、家庭与更深层次的自我理解提供支持。",
      lead:
        "这些服务旨在帮助人们更好地理解塑造其互动方式的深层情感、心理和关系力量。",
    },
    sections: {
      couples: {
        label: "伴侣与家庭服务",
        title: "关系与家庭咨询",
        paragraphs: [
          "关系会因为沟通破裂、情感疏离以及难以理解彼此需求而受损。这项工作专注于为整体关系动态带来更清晰的认识。",
          "当你们更好地理解彼此时，就能开启更多同理心、更好的沟通以及更稳固的解决方式。",
          "家庭咨询关注家庭更大的情感系统，以及每个人在其中扮演的角色。许多家庭冲突都受到长期模式、未言明的期待、未愈合的创伤，以及人格、价值观或身份差异的影响。",
        ],
        bullets: [
          "探索你们如何看待彼此，以及你们真实的样子",
          "识别攻击性循环，并更好理解彼此的情感世界",
          "追踪不安全感，并揭示本能反应背后的深层原因",
          "解决由人格、价值观或身份差异造成的长期问题与旧伤",
        ],
        cta: "了解更多",
      },
      singles: {
        label: "单身服务",
        title: "内省疗法",
        quote: "\"Gnothi Seauton\" 是一句古老箴言，意思是：认识你自己。",
        paragraphs: [
          "内省疗法是一种深度自我探索过程，聚焦于身份认同、看不见的内在冲突、情绪模式和个人成长。它旨在帮助你更好地理解自己是谁、你如何与他人相处，以及生活中的其他方面，例如：",
          "课程可能会探索自我、心智、内心、个人价值观、人生哲学，以及更高本性与阴影之间持续存在的张力。",
          "这项服务还包括职业辅导和对单恋的支持，帮助来访者更清楚地理解目标、方向、关系模式，以及如何活出最好的人生。",
        ],
        bullets: [
          "发现真正驱动你的力量",
          "改善你的应对方式",
          "探索你如何追求财富",
          "探索你的爱与吸引风格",
        ],
        cta: "了解更多",
      },
      reports: {
        label: "伴侣与单身服务",
        title: "占星报告",
        paragraphs: [
          "每份报告都是一份个性化、深入的占星分析，旨在为你提供关于自己、关系以及人生方向的清晰洞见。",
          "这些报告以直接、易读的风格写成，聚焦于真实存在的模式，例如……",
          "每份报告都内容详尽、结构清晰，并包含你七颗行星及其相互作用的完整占星计算。",
        ],
        bullets: [
          "人格洞见",
          "爱情与关系动态",
          "职业方向与成长型思维",
          "社交生活与沟通",
          "或你希望探索的任何其他主题",
        ],
        cta: "了解更多",
      },
      peerSupport: {
        label: "单身服务",
        title: "一对一同伴支持",
        paragraphs: [
          "一对一同伴支持是一项更实际、更有结构、也更具支持性的服务，旨在帮助来访者在日常生活中保持稳定、动力与责任感。",
          "这项服务非常适合那些在追求个人目标时，受益于规律鼓励、建立日常节奏和持续支持的人。",
          "个人生活辅导包括……",
          "这项服务对那些希望建立势头、增强自律、保持情绪稳定，或在困难时期获得持续支持与结构的人尤其有帮助。",
        ],
        bullets: [
          "每日规划、目标设定与晨间通话",
          "每两周一次的30分钟辅导通话",
          "用于大脑优化的 LIFESPACE 应用监测",
          "每月个性化占星报告",
        ],
        cta: "了解更多",
      },
    },
  },
  ja: {
    hero: {
      kicker: "サービス",
      title: "人間関係、家族、そしてより深い自己理解のためのサポート。",
      lead:
        "これらのサービスは、人との関わりを形づくっている感情的・心理的・関係的な深層の力を、より深く理解できるように設計されています。",
    },
    sections: {
      couples: {
        label: "カップルと家族向けサービス",
        title: "関係性と家族のカウンセリング",
        paragraphs: [
          "関係は、コミュニケーションの断絶、感情的距離、そしてお互いのニーズを理解する難しさによって壊れていきます。この支援は、関係全体のダイナミクスにより大きな明晰さをもたらすことに焦点を当てています。",
          "お互いをよりよく理解することで、より多くの思いやり、より良い対話、そしてより現実的な解決策への扉が開かれます。",
          "家族カウンセリングは、家族という大きな感情システムと、その中で各人が果たしている役割に焦点を当てます。多くの家族間の対立は、長年のパターン、言葉にされない期待、未解決の傷、そして性格・価値観・アイデンティティの違いによって形づくられています。",
        ],
        bullets: [
          "相手をどう見ているかと、本当の相手像との違いを探る",
          "攻撃性の循環を見つけ、お互いの感情世界を理解する",
          "不安の根をたどり、本能的反応の深い理由を明らかにする",
          "性格・価値観・アイデンティティの違いによる長年の問題や傷を解決する",
        ],
        cta: "詳しく見る",
      },
      singles: {
        label: "シングル向けサービス",
        title: "内省セラピー",
        quote: "\"Gnothi Seauton\" は「汝自身を知れ」を意味する古代の格言です。",
        paragraphs: [
          "内省セラピーは、自己同一性、見えない内的葛藤、感情パターン、個人的成長に焦点を当てた深い自己探求のプロセスです。自分が何者であるか、他者とどう関わるか、そして次のような人生の側面をよりよく理解するためのものです。",
          "セッションでは、自我、心、感情、個人的価値観、人生哲学、そして高次の自己と影のあいだにある継続的な緊張を探ることがあります。",
          "このサービスには、キャリアカウンセリングや片思いへのサポートも含まれており、目的、方向性、関係パターン、そして最善の人生をどう生きるかについての明晰さを得る手助けをします。",
        ],
        bullets: [
          "自分を突き動かすものを知る",
          "対処スタイルを改善する",
          "富をどう求めるかを探る",
          "愛と魅力のスタイルを探る",
        ],
        cta: "詳しく見る",
      },
      reports: {
        label: "カップルとシングル向けサービス",
        title: "占星術レポート",
        paragraphs: [
          "各レポートは、あなた自身、あなたの関係、そして人生の方向性について明確な洞察を与えるよう設計された、個別の詳細な占星術分析です。",
          "これらのレポートは直接的で読みやすい文体で書かれ、次のような現実のパターンに焦点を当てています……",
          "各レポートは詳細で体系的であり、あなたの7つの惑星とその相互作用に関する完全な占星術計算が含まれています。",
        ],
        bullets: [
          "性格に関する洞察",
          "愛と関係のダイナミクス",
          "キャリアの方向性と成長志向",
          "社会生活とコミュニケーション",
          "または、あなたが探求したいその他のテーマ",
        ],
        cta: "詳しく見る",
      },
      peerSupport: {
        label: "シングル向けサービス",
        title: "1対1ピアサポート",
        paragraphs: [
          "1対1ピアサポートは、日常生活の中でクライアントが安定し、意欲を保ち、責任感を持ち続けられるように設計された、より実践的で構造的、そして支援的なサービスです。",
          "このサービスは、個人的目標に向かう中で、定期的な励まし、ルーティンづくり、継続的な支えから恩恵を受ける人に最適です。",
          "パーソナルライフコーチングには次のようなものが含まれます……",
          "このサービスは、勢いをつけたい人、規律を高めたい人、感情的に軌道を保ちたい人、あるいは困難な時期を安定した支えと構造の中で乗り越えたい人に特に役立ちます。",
        ],
        bullets: [
          "日々の計画、目標設定、朝の通話",
          "隔週30分のコーチング通話",
          "脳最適化のためのLIFESPACEアプリ監視",
          "毎月の個別占星術レポート",
        ],
        cta: "詳しく見る",
      },
    },
  },
  yue: {
    hero: {
      kicker: "服務",
      title: "為關係、家庭同更深層自我理解而設嘅支援。",
      lead:
        "呢啲服務係為咗幫人更好理解塑造佢哋互動方式嘅深層情感、心理同關係力量而設。",
    },
    sections: {
      couples: {
        label: "伴侶同家庭服務",
        title: "關係同家庭輔導",
        paragraphs: [
          "關係好多時會因為溝通失效、情感疏離，同埋難以理解對方需要而出現問題。呢項工作集中喺為整體關係動態帶來更清晰嘅理解。",
          "當你哋更了解彼此，就可以打開更多同理心、更好溝通，同埋更穩陣嘅解決方法。",
          "家庭輔導會聚焦喺家庭更大嘅情感系統，同埋每個人喺其中扮演嘅角色。好多家庭衝突都受到長期模式、冇講出口嘅期望、未癒合嘅傷口，同埋人格、價值觀或身份差異影響。",
        ],
        bullets: [
          "探索你哋點樣睇對方，同對方真實係點樣之間嘅差距",
          "識別攻擊性循環，理解彼此嘅情感世界",
          "追溯不安全感，同揭示本能反應背後更深層原因",
          "處理由人格、價值觀或身份差異引起嘅長期問題同舊傷",
        ],
        cta: "了解更多",
      },
      singles: {
        label: "單身服務",
        title: "內省治療",
        quote: "\"Gnothi Seauton\" 係一句古老格言，意思係：認識你自己。",
        paragraphs: [
          "內省治療係一個深度自我探索過程，聚焦喺身份、隱藏嘅內在衝突、情緒模式同個人成長。目的係幫你更了解自己係邊個、你點樣同人建立關係，仲有生活上其他方面，例如：",
          "療程可以探索自我、思想、內心、個人價值觀、人生哲學，以及高我同陰影之間持續存在嘅拉扯。",
          "呢項服務亦包括職業輔導同失戀／單戀支持，幫助客人更清晰咁理解人生方向、關係模式，同埋點樣活出最好嘅自己。",
        ],
        bullets: [
          "發現真正推動你嘅力量",
          "改善你應對壓力嘅方式",
          "探索你點樣追求財富",
          "探索你嘅愛情同吸引風格",
        ],
        cta: "了解更多",
      },
      reports: {
        label: "伴侶同單身服務",
        title: "占星報告",
        paragraphs: [
          "每份報告都係一份個人化、深入嘅占星分析，目的是俾你更清楚了解自己、你嘅關係，同人生方向。",
          "呢啲報告用直接、易讀嘅風格寫成，並聚焦喺真實存在嘅模式，例如……",
          "每份報告都詳細、有結構，並包含你七顆行星及其互動嘅完整占星計算。",
        ],
        bullets: [
          "人格洞察",
          "愛情同關係動態",
          "職業方向同成長型思維",
          "社交生活同溝通",
          "或者任何你想探索嘅主題",
        ],
        cta: "了解更多",
      },
      peerSupport: {
        label: "單身服務",
        title: "一對一同儕支援",
        paragraphs: [
          "一對一同儕支援係一項更實際、更有結構同更具支持性嘅服務，目的是幫助客人喺日常生活中保持穩定、有動力同有責任感。",
          "呢項服務特別適合嗰啲喺追求個人目標時，受益於定期鼓勵、建立日常節奏同持續支援嘅人。",
          "個人生活教練包括……",
          "呢項服務尤其適合想建立動力、提升自律、保持情緒穩定，或者喺困難時期得到持續支援同結構嘅客人。",
        ],
        bullets: [
          "每日規劃、目標設定同晨間通話",
          "每兩星期一次30分鐘教練通話",
          "用於大腦優化嘅 LIFESPACE 應用監測",
          "每月個人化占星報告",
        ],
        cta: "了解更多",
      },
    },
  },
  ko: {
    hero: {
      kicker: "서비스",
      title: "관계, 가족, 그리고 더 깊은 자기 이해를 위한 지원.",
      lead:
        "이 서비스들은 사람들의 상호작용을 형성하는 더 깊은 감정적, 심리적, 관계적 힘을 더 잘 이해하도록 돕기 위해 설계되었습니다.",
    },
    sections: {
      couples: {
        label: "커플 및 가족 서비스",
        title: "관계 및 가족 상담",
        paragraphs: [
          "관계는 소통의 단절, 정서적 거리감, 서로의 필요를 이해하기 어려움 때문에 무너집니다. 이 작업은 관계 전체의 역동성에 더 큰 명료함을 가져오는 데 초점을 맞춥니다.",
          "서로를 더 잘 이해하게 되면 더 많은 연민, 더 나은 소통, 더 현실적인 해결책으로 가는 문이 열릴 수 있습니다.",
          "가족 상담은 가족이라는 더 큰 정서적 체계와 그 안에서 각 사람이 맡는 역할에 집중합니다. 많은 가족 갈등은 오래된 패턴, 말해지지 않은 기대, 해결되지 않은 상처, 그리고 성격·가치관·정체성의 차이에 의해 형성됩니다.",
        ],
        bullets: [
          "서로를 어떻게 보고 있는지와 실제 모습 사이를 탐색하기",
          "공격성의 순환을 파악하고 서로의 감정 세계를 이해하기",
          "불안의 뿌리를 추적하고 즉각적 반응 뒤의 깊은 이유를 밝히기",
          "성격, 가치관, 정체성의 차이로 생긴 오랜 문제와 상처 해결하기",
        ],
        cta: "자세히 보기",
      },
      singles: {
        label: "싱글 서비스",
        title: "내면 성찰 치료",
        quote: "\"Gnothi Seauton\"은 '너 자신을 알라'는 뜻의 고대 격언입니다.",
        paragraphs: [
          "내면 성찰 치료는 정체성, 보이지 않는 내적 갈등, 감정 패턴, 개인적 성장에 초점을 둔 깊은 자기 탐색 과정입니다. 이는 자신이 누구인지, 타인과 어떻게 관계 맺는지, 그리고 다음과 같은 삶의 측면을 더 잘 이해하도록 돕기 위한 것입니다.",
          "세션에서는 자아, 정신, 마음, 개인적 가치관, 삶의 철학, 그리고 더 높은 본성과 그림자 사이의 지속적인 긴장을 탐색할 수 있습니다.",
          "이 서비스에는 진로 상담과 짝사랑에 대한 지원도 포함되어 있어, 내담자들이 목적, 방향성, 관계 패턴, 그리고 최고의 삶을 사는 방법에 대해 더 분명히 이해하도록 돕습니다.",
        ],
        bullets: [
          "무엇이 나를 움직이는지 발견하기",
          "대처 방식을 개선하기",
          "부를 추구하는 방식을 탐색하기",
          "사랑과 끌림의 스타일을 탐색하기",
        ],
        cta: "자세히 보기",
      },
      reports: {
        label: "커플 및 싱글 서비스",
        title: "점성술 보고서",
        paragraphs: [
          "각 보고서는 자신, 관계, 삶의 방향에 대한 명확한 통찰을 제공하도록 설계된 맞춤형 심층 점성술 분석입니다.",
          "이 보고서들은 직접적이고 읽기 쉬운 스타일로 쓰이며, 다음과 같은 실제 패턴에 초점을 둡니다...",
          "각 보고서는 상세하고 구조적이며, 당신의 일곱 행성과 그 상호작용에 대한 완전한 점성술 계산을 포함합니다.",
        ],
        bullets: [
          "성격에 대한 통찰",
          "사랑과 관계의 역동성",
          "진로 방향과 성장형 사고방식",
          "사회생활과 의사소통",
          "또는 당신이 탐구하고 싶은 다른 어떤 주제든",
        ],
        cta: "자세히 보기",
      },
      peerSupport: {
        label: "싱글 서비스",
        title: "1:1 동료 지원",
        paragraphs: [
          "1:1 동료 지원은 내담자가 일상생활에서 중심을 잡고, 동기를 유지하며, 책임감을 갖도록 돕기 위해 설계된 보다 실용적이고 구조적이며 지지적인 서비스입니다.",
          "이 서비스는 개인 목표를 향해 나아가는 동안 정기적인 격려, 루틴 형성, 지속적인 지원의 혜택을 받는 사람들에게 이상적입니다.",
          "개인 라이프 코칭에는 다음이 포함됩니다...",
          "이 서비스는 추진력을 만들고, 규율을 강화하고, 감정적으로 궤도를 유지하거나, 어려운 시기를 안정적인 지원과 구조 속에서 지나가고자 하는 내담자에게 특히 도움이 됩니다.",
        ],
        bullets: [
          "일일 계획, 목표 설정, 아침 통화",
          "30분 격주 코칭 통화",
          "두뇌 최적화를 위한 LIFESPACE 앱 모니터링",
          "월간 맞춤형 점성술 보고서",
        ],
        cta: "자세히 보기",
      },
    },
  },
};

export function getServicesCopy(locale: SupportedLocale): ServicesPageCopy {
  return servicesCopy[locale] ?? servicesCopy[defaultLocale];
}
