import { defaultLocale, type SupportedLocale } from "./i18n";

type HomeCopy = {
  nav: {
    home: string;
    services: string;
    downloads: string;
    about: string;
    lifespace: string;
    pricing: string;
    blog: string;
  };
  hero: {
    title: string;
    lead: string;
    relationshipCalculator: string;
    bookSession: string;
  };
  login: {
    username: string;
    password: string;
    login: string;
    missingUsername: string;
  };
  lifespace: {
    eyebrow: string;
    title: string;
    bodyOne: string;
    bodyTwo: string;
    ready: string;
    readyItems: [string, string, string];
    close: string;
    download: string;
    previewEyebrow: string;
    previewTitle: string;
    previewBody: string;
    benefits: {
      dailyTitle: string;
      dailyBody: string;
      mealsTitle: string;
      mealsBody: string;
      financeTitle: string;
      financeBody: string;
    };
  };
  newsletter: {
    eyebrow: string;
    placeholder: string;
    join: string;
  };
  footer: {
    discover: string;
    legal: string;
    other: string;
    language: string;
    creationHealth: string;
    siteRules: string;
    advertise: string;
    support: string;
    terms: string;
    privacy: string;
    dmca: string;
    accessibility: string;
    upgrade: string;
    staff: string;
    services: string;
    credit: string;
  };
};

type LegalPageCopy = {
  kicker: string;
  title: string;
  summary: string;
  meta: [string, string][];
  sidebarLabel: string;
  introHeading?: string;
  introParagraphs?: string[];
  contactHeading: string;
  contactBody: string;
  returnHome: string;
};

const homeCopy: Record<SupportedLocale, HomeCopy> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      downloads: "Downloads",
      about: "About",
      lifespace: "LIFESPACE",
      pricing: "Pricing",
      blog: "Blog",
    },
    hero: {
      title: "Psychology-informed astrology for relationships, meditation, and daily life.",
      lead:
        "Explore philosophy and personal growth through our reports, tools, and insights designed to help you understand yourself more deeply. Our goal is to help you move through life with greater clarity, purpose, and positive energy.",
      relationshipCalculator: "Relationship Calculator",
      bookSession: "Book a Session",
    },
    login: {
      username: "Username",
      password: "Password",
      login: "Login",
      missingUsername: "No username found",
    },
    lifespace: {
      eyebrow: "Introducing LIFESPACE 1.0",
      title: "A panacea for psychological health.",
      bodyOne:
        "Each day you move through 9 core spaces of being. Some of these include: light, inner self, body, mind, environment, and connection with those around you. LIFESPACE is the mirror that asks simple questions and helps you understand yourself by catalyzing the process of self-actualization.",
      bodyTwo:
        "Our hope is that you will begin to see your energy flow where it was once forgotten.",
      ready: "IF YOU ARE READY TO...",
      readyItems: [
        "LIVE CONSCIOUSLY",
        "NOURISH YOUR MIND AND BODY",
        "BECOME A PART OF SOMETHING AMAZING",
      ],
      close:
        "Join the LIFESPACE Beta 1.0 and watch your life reorganize itself into something effortless, harmonized, and filled with peace.",
      download: "DOWNLOAD LIFESPACE 1.0",
      previewEyebrow: "App Preview",
      previewTitle: "Recognize patterns. Shape your life.",
      previewBody:
        "Map the rhythm of your behavior and perception with LIFESPACE and find your weak spots to maximize brain optimization.",
      benefits: {
        dailyTitle: "Daily Habit Tracking",
        dailyBody:
          "See weekly and monthly analytics on your habits relating to 9 core tenets of living.",
        mealsTitle: "Robust Meal System",
        mealsBody:
          "Create custom meal plans that specifically target the parts of the brain relevant to your needs.",
        financeTitle: "Financial Solutions",
        financeBody:
          "Budget your finances with the Weekly Tracker that shows you your spending and balance for all of your budget categories.",
      },
    },
    newsletter: {
      eyebrow: "Get the Astrological Report",
      placeholder: "Enter your email",
      join: "Join",
    },
    footer: {
      discover: "Discover",
      legal: "Legal",
      other: "Other",
      language: "Language",
      creationHealth: "Creation Health",
      siteRules: "Site Rules",
      advertise: "Advertise",
      support: "Support",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      dmca: "DMCA",
      accessibility: "Accessibility Statement",
      upgrade: "Upgrade to AT+",
      staff: "Articles Staff",
      services: "Services",
      credit: "Designed by",
    },
  },
  fr: {
    nav: { home: "Accueil", services: "Services", downloads: "Téléchargements", about: "À propos", lifespace: "LIFESPACE", pricing: "Tarifs", blog: "Blog" },
    hero: {
      title: "Une astrologie éclairée par la psychologie pour les relations, la méditation et la vie quotidienne.",
      lead:
        "Explorez la philosophie et l'évolution personnelle grâce à nos rapports, outils et analyses conçus pour vous aider à mieux vous comprendre. Notre objectif est de vous aider à avancer dans la vie avec plus de clarté, de sens et d'énergie positive.",
      relationshipCalculator: "Calculateur relationnel",
      bookSession: "Réserver une séance",
    },
    login: { username: "Nom d'utilisateur", password: "Mot de passe", login: "Connexion", missingUsername: "Aucun nom d'utilisateur trouvé" },
    lifespace: {
      eyebrow: "Découvrez LIFESPACE 1.0",
      title: "Une panacée pour la santé psychologique.",
      bodyOne:
        "Chaque jour, vous traversez 9 espaces fondamentaux de l'être. Parmi eux: la lumière, le moi intérieur, le corps, l'esprit, l'environnement et le lien avec les autres. LIFESPACE est le miroir qui pose des questions simples et vous aide à vous comprendre en catalysant le processus d'autoréalisation.",
      bodyTwo: "Nous espérons que vous commencerez à voir circuler votre énergie là où elle était autrefois oubliée.",
      ready: "SI VOUS ÊTES PRÊT À...",
      readyItems: ["VIVRE EN CONSCIENCE", "NOURRIR VOTRE ESPRIT ET VOTRE CORPS", "FAIRE PARTIE DE QUELQUE CHOSE D'EXTRAORDINAIRE"],
      close: "Rejoignez la bêta LIFESPACE 1.0 et regardez votre vie se réorganiser en quelque chose d'harmonieux, de fluide et de paisible.",
      download: "TÉLÉCHARGER LIFESPACE 1.0",
      previewEyebrow: "Aperçu de l'application",
      previewTitle: "Reconnaître les schémas. Façonner votre vie.",
      previewBody: "Cartographiez le rythme de votre comportement et de votre perception avec LIFESPACE et repérez vos points faibles pour optimiser votre cerveau.",
      benefits: {
        dailyTitle: "Suivi quotidien des habitudes",
        dailyBody: "Consultez des analyses hebdomadaires et mensuelles de vos habitudes liées à 9 piliers essentiels de la vie.",
        mealsTitle: "Système nutritionnel avancé",
        mealsBody: "Créez des plans de repas personnalisés qui ciblent précisément les zones du cerveau correspondant à vos besoins.",
        financeTitle: "Solutions financières",
        financeBody: "Gérez votre budget grâce au suivi hebdomadaire qui affiche vos dépenses et votre solde pour toutes vos catégories.",
      },
    },
    newsletter: { eyebrow: "Recevoir le rapport astrologique", placeholder: "Entrez votre e-mail", join: "Rejoindre" },
    footer: {
      discover: "Découvrir", legal: "Légal", other: "Autres", language: "Langue", creationHealth: "Creation Health", siteRules: "Règles du site", advertise: "Publicité", support: "Soutien", terms: "Conditions d'utilisation", privacy: "Politique de confidentialité", dmca: "DMCA", accessibility: "Déclaration d'accessibilité", upgrade: "Passer à AT+", staff: "Équipe éditoriale", services: "Services", credit: "Conçu par",
    },
  },
  it: {
    nav: { home: "Home", services: "Servizi", downloads: "Download", about: "Chi siamo", lifespace: "LIFESPACE", pricing: "Prezzi", blog: "Blog" },
    hero: {
      title: "Astrologia ispirata alla psicologia per relazioni, meditazione e vita quotidiana.",
      lead:
        "Esplora filosofia e crescita personale attraverso i nostri report, strumenti e approfondimenti pensati per aiutarti a comprenderti più a fondo. Il nostro obiettivo è aiutarti a vivere con maggiore chiarezza, scopo ed energia positiva.",
      relationshipCalculator: "Calcolatore relazionale",
      bookSession: "Prenota una sessione",
    },
    login: { username: "Nome utente", password: "Password", login: "Accedi", missingUsername: "Nessun nome utente trovato" },
    lifespace: {
      eyebrow: "Presentazione di LIFESPACE 1.0",
      title: "Una panacea per la salute psicologica.",
      bodyOne:
        "Ogni giorno attraversi 9 spazi fondamentali dell'essere. Alcuni di questi includono: luce, sé interiore, corpo, mente, ambiente e connessione con chi ti circonda. LIFESPACE è lo specchio che pone domande semplici e ti aiuta a comprenderti catalizzando il processo di autorealizzazione.",
      bodyTwo: "La nostra speranza è che tu possa iniziare a vedere scorrere la tua energia dove prima era dimenticata.",
      ready: "SE SEI PRONTO A...",
      readyItems: ["VIVERE CONSAPEVOLMENTE", "NUTRIRE MENTE E CORPO", "ENTRARE A FAR PARTE DI QUALCOSA DI STRAORDINARIO"],
      close: "Unisciti alla beta di LIFESPACE 1.0 e guarda la tua vita riorganizzarsi in qualcosa di armonioso, leggero e pieno di pace.",
      download: "SCARICA LIFESPACE 1.0",
      previewEyebrow: "Anteprima app",
      previewTitle: "Riconosci gli schemi. Plasma la tua vita.",
      previewBody: "Mappa il ritmo del tuo comportamento e della tua percezione con LIFESPACE e individua i tuoi punti deboli per massimizzare l'ottimizzazione cerebrale.",
      benefits: {
        dailyTitle: "Monitoraggio quotidiano delle abitudini",
        dailyBody: "Visualizza analisi settimanali e mensili delle tue abitudini relative a 9 principi fondamentali di vita.",
        mealsTitle: "Sistema alimentare avanzato",
        mealsBody: "Crea piani alimentari personalizzati che mirano in modo specifico alle aree del cervello rilevanti per le tue esigenze.",
        financeTitle: "Soluzioni finanziarie",
        financeBody: "Gestisci il tuo budget con il Weekly Tracker che mostra spese e saldo per tutte le categorie.",
      },
    },
    newsletter: { eyebrow: "Ricevi il rapporto astrologico", placeholder: "Inserisci la tua email", join: "Iscriviti" },
    footer: {
      discover: "Scopri", legal: "Legale", other: "Altro", language: "Lingua", creationHealth: "Creation Health", siteRules: "Regole del sito", advertise: "Pubblicità", support: "Supporto", terms: "Termini di servizio", privacy: "Informativa sulla privacy", dmca: "DMCA", accessibility: "Dichiarazione di accessibilità", upgrade: "Passa a AT+", staff: "Staff articoli", services: "Servizi", credit: "Progettato da",
    },
  },
  es: {
    nav: { home: "Inicio", services: "Servicios", downloads: "Descargas", about: "Acerca de", lifespace: "LIFESPACE", pricing: "Precios", blog: "Blog" },
    hero: {
      title: "Astrología informada por la psicología para relaciones, meditación y vida diaria.",
      lead:
        "Explora filosofía y crecimiento personal a través de nuestros informes, herramientas e ideas diseñados para ayudarte a comprenderte con mayor profundidad. Nuestro objetivo es ayudarte a avanzar por la vida con mayor claridad, propósito y energía positiva.",
      relationshipCalculator: "Calculadora de relaciones",
      bookSession: "Reservar una sesión",
    },
    login: { username: "Nombre de usuario", password: "Contraseña", login: "Iniciar sesión", missingUsername: "No se encontró el usuario" },
    lifespace: {
      eyebrow: "Presentamos LIFESPACE 1.0",
      title: "Una panacea para la salud psicológica.",
      bodyOne:
        "Cada día te mueves por 9 espacios esenciales del ser. Algunos de ellos incluyen: luz, yo interior, cuerpo, mente, entorno y conexión con quienes te rodean. LIFESPACE es el espejo que hace preguntas simples y te ayuda a comprenderte al catalizar el proceso de autorrealización.",
      bodyTwo: "Nuestra esperanza es que empieces a ver fluir tu energía allí donde antes estaba olvidada.",
      ready: "SI ESTÁS LISTO PARA...",
      readyItems: ["VIVIR CONSCIENTEMENTE", "NUTRIR TU MENTE Y TU CUERPO", "FORMAR PARTE DE ALGO INCREÍBLE"],
      close: "Únete a la beta de LIFESPACE 1.0 y observa cómo tu vida se reorganiza en algo armonioso, natural y lleno de paz.",
      download: "DESCARGAR LIFESPACE 1.0",
      previewEyebrow: "Vista previa de la app",
      previewTitle: "Reconoce patrones. Da forma a tu vida.",
      previewBody: "Mapea el ritmo de tu comportamiento y percepción con LIFESPACE y encuentra tus puntos débiles para maximizar la optimización cerebral.",
      benefits: {
        dailyTitle: "Seguimiento diario de hábitos",
        dailyBody: "Consulta análisis semanales y mensuales de tus hábitos relacionados con 9 pilares fundamentales de la vida.",
        mealsTitle: "Sistema nutricional robusto",
        mealsBody: "Crea planes de comida personalizados que apunten específicamente a las partes del cerebro relevantes para tus necesidades.",
        financeTitle: "Soluciones financieras",
        financeBody: "Organiza tus finanzas con el rastreador semanal que muestra tus gastos y saldo en todas tus categorías.",
      },
    },
    newsletter: { eyebrow: "Recibe el informe astrológico", placeholder: "Ingresa tu correo electrónico", join: "Unirse" },
    footer: {
      discover: "Descubrir", legal: "Legal", other: "Otros", language: "Idioma", creationHealth: "Creation Health", siteRules: "Reglas del sitio", advertise: "Publicidad", support: "Apoyo", terms: "Términos del servicio", privacy: "Política de privacidad", dmca: "DMCA", accessibility: "Declaración de accesibilidad", upgrade: "Actualizar a AT+", staff: "Equipo editorial", services: "Servicios", credit: "Diseñado por",
    },
  },
  hi: {
    nav: { home: "होम", services: "सेवाएं", downloads: "डाउनलोड", about: "परिचय", lifespace: "LIFESPACE", pricing: "मूल्य", blog: "ब्लॉग" },
    hero: {
      title: "रिश्तों, ध्यान और दैनिक जीवन के लिए मनोविज्ञान-आधारित ज्योतिष।",
      lead:
        "हमारी रिपोर्ट, टूल्स और अंतर्दृष्टियों के माध्यम से दर्शन और व्यक्तिगत विकास का अन्वेषण करें, जो आपको स्वयं को अधिक गहराई से समझने में मदद करने के लिए बनाए गए हैं। हमारा लक्ष्य है कि आप जीवन में अधिक स्पष्टता, उद्देश्य और सकारात्मक ऊर्जा के साथ आगे बढ़ें।",
      relationshipCalculator: "रिलेशनशिप कैलकुलेटर",
      bookSession: "सेशन बुक करें",
    },
    login: { username: "यूज़रनेम", password: "पासवर्ड", login: "लॉगिन", missingUsername: "यूज़रनेम नहीं मिला" },
    lifespace: {
      eyebrow: "LIFESPACE 1.0 प्रस्तुत है",
      title: "मनोवैज्ञानिक स्वास्थ्य के लिए एक रामबाण।",
      bodyOne:
        "हर दिन आप अस्तित्व के 9 मूल क्षेत्रों से गुजरते हैं। इनमें प्रकाश, आंतरिक स्व, शरीर, मन, वातावरण और आपके आसपास के लोगों से जुड़ाव शामिल हैं। LIFESPACE वह दर्पण है जो सरल प्रश्न पूछता है और आत्म-साक्षात्कार की प्रक्रिया को सक्रिय करके आपको स्वयं को समझने में मदद करता है।",
      bodyTwo: "हमारी आशा है कि आप वहाँ अपनी ऊर्जा का प्रवाह देखना शुरू करेंगे जहाँ वह पहले भुला दी गई थी।",
      ready: "यदि आप तैयार हैं...",
      readyItems: ["सचेत रूप से जीने के लिए", "अपने मन और शरीर को पोषण देने के लिए", "कुछ अद्भुत का हिस्सा बनने के लिए"],
      close: "LIFESPACE Beta 1.0 से जुड़ें और देखें कि आपका जीवन कैसे सहज, सामंजस्यपूर्ण और शांति से भरा रूप लेता है।",
      download: "LIFESPACE 1.0 डाउनलोड करें",
      previewEyebrow: "ऐप पूर्वावलोकन",
      previewTitle: "पैटर्न पहचानें। अपना जीवन आकार दें।",
      previewBody: "LIFESPACE के साथ अपने व्यवहार और धारणा की लय को मानचित्रित करें और मस्तिष्क अनुकूलन को अधिकतम करने के लिए अपनी कमजोर जगहों को पहचानें।",
      benefits: {
        dailyTitle: "दैनिक आदत ट्रैकिंग",
        dailyBody: "जीवन के 9 मूल सिद्धांतों से जुड़ी आपकी आदतों का साप्ताहिक और मासिक विश्लेषण देखें।",
        mealsTitle: "मजबूत मील सिस्टम",
        mealsBody: "ऐसे कस्टम मील प्लान बनाएं जो आपकी आवश्यकताओं से संबंधित मस्तिष्क के हिस्सों को विशेष रूप से लक्षित करें।",
        financeTitle: "वित्तीय समाधान",
        financeBody: "Weekly Tracker के साथ अपने खर्च और शेष राशि को सभी बजट श्रेणियों में देखें और प्रबंधित करें।",
      },
    },
    newsletter: { eyebrow: "ज्योतिषीय रिपोर्ट प्राप्त करें", placeholder: "अपना ईमेल दर्ज करें", join: "जुड़ें" },
    footer: {
      discover: "खोजें", legal: "कानूनी", other: "अन्य", language: "भाषा", creationHealth: "Creation Health", siteRules: "साइट नियम", advertise: "विज्ञापन", support: "सहायता", terms: "सेवा की शर्तें", privacy: "गोपनीयता नीति", dmca: "DMCA", accessibility: "सुगम्यता वक्तव्य", upgrade: "AT+ में अपग्रेड करें", staff: "लेख संपादकीय टीम", services: "सेवाएं", credit: "डिज़ाइन किया गया",
    },
  },
  ur: {
    nav: { home: "ہوم", services: "سروسز", downloads: "ڈاؤن لوڈز", about: "تعارف", lifespace: "LIFESPACE", pricing: "قیمت", blog: "بلاگ" },
    hero: {
      title: "تعلقات، مراقبہ اور روزمرہ زندگی کے لیے نفسیات سے رہنمائی لینے والی علمِ نجوم۔",
      lead:
        "ہماری رپورٹس، ٹولز اور بصیرتوں کے ذریعے فلسفہ اور ذاتی ارتقا دریافت کریں، جو آپ کو خود کو زیادہ گہرائی سے سمجھنے میں مدد دینے کے لیے بنائی گئی ہیں۔ ہمارا مقصد ہے کہ آپ زندگی میں زیادہ وضاحت، مقصد اور مثبت توانائی کے ساتھ آگے بڑھیں۔",
      relationshipCalculator: "رشتہ کیلکولیٹر",
      bookSession: "سیشن بک کریں",
    },
    login: { username: "صارف نام", password: "پاس ورڈ", login: "لاگ اِن", missingUsername: "صارف نام نہیں ملا" },
    lifespace: {
      eyebrow: "LIFESPACE 1.0 متعارف",
      title: "نفسیاتی صحت کے لیے ایک ہمہ گیر دوا۔",
      bodyOne:
        "ہر دن آپ وجود کے 9 بنیادی میدانوں سے گزرتے ہیں۔ ان میں روشنی، باطنی ذات، جسم، ذہن، ماحول اور اپنے آس پاس کے لوگوں سے تعلق شامل ہیں۔ LIFESPACE وہ آئینہ ہے جو سادہ سوالات پوچھتا ہے اور خود شناسی کے عمل کو متحرک کر کے آپ کو خود کو سمجھنے میں مدد دیتا ہے۔",
      bodyTwo: "ہماری امید ہے کہ آپ وہاں اپنی توانائی کا بہاؤ دیکھنا شروع کریں گے جہاں وہ پہلے بھلا دیا گیا تھا۔",
      ready: "اگر آپ تیار ہیں کہ...",
      readyItems: ["شعوری طور پر جئیں", "اپنے ذہن اور جسم کی پرورش کریں", "کسی حیرت انگیز چیز کا حصہ بنیں"],
      close: "LIFESPACE Beta 1.0 میں شامل ہوں اور دیکھیں کہ آپ کی زندگی کس طرح ہم آہنگ، پرسکون اور آسان صورت اختیار کرتی ہے۔",
      download: "LIFESPACE 1.0 ڈاؤن لوڈ کریں",
      previewEyebrow: "ایپ پیش منظر",
      previewTitle: "پیٹرن پہچانیں۔ اپنی زندگی کو شکل دیں۔",
      previewBody: "LIFESPACE کے ساتھ اپنے رویّے اور ادراک کی تال کو نقشہ بنائیں اور دماغی بہتری کے لیے اپنی کمزور جگہیں تلاش کریں۔",
      benefits: {
        dailyTitle: "روزانہ عادات کی ٹریکنگ",
        dailyBody: "زندگی کے 9 بنیادی اصولوں سے متعلق اپنی عادات کا ہفتہ وار اور ماہانہ تجزیہ دیکھیں۔",
        mealsTitle: "مضبوط میل سسٹم",
        mealsBody: "اپنی ضرورتوں کے مطابق دماغ کے متعلقہ حصوں کو نشانہ بنانے والے ذاتی نوعیت کے کھانے کے منصوبے بنائیں۔",
        financeTitle: "مالی حل",
        financeBody: "Weekly Tracker کے ساتھ اپنے تمام بجٹ زمروں میں اخراجات اور بیلنس دیکھ کر مالی منصوبہ بندی کریں۔",
      },
    },
    newsletter: { eyebrow: "نجومی رپورٹ حاصل کریں", placeholder: "اپنا ای میل درج کریں", join: "شامل ہوں" },
    footer: {
      discover: "دریافت", legal: "قانونی", other: "دیگر", language: "زبان", creationHealth: "Creation Health", siteRules: "سائٹ کے قواعد", advertise: "اشتہار", support: "سپورٹ", terms: "سروس کی شرائط", privacy: "پرائیویسی پالیسی", dmca: "DMCA", accessibility: "رسائی کا بیان", upgrade: "AT+ میں اپ گریڈ کریں", staff: "مضامین کا عملہ", services: "سروسز", credit: "ڈیزائن از",
    },
  },
  sa: {
    nav: { home: "मुखपृष्ठम्", services: "सेवाः", downloads: "अवतरणम्", about: "परिचयः", lifespace: "LIFESPACE", pricing: "मूल्यम्", blog: "लेखाः" },
    hero: {
      title: "सम्बन्धानां, ध्यानस्य, दैनिकजीवनस्य च कृते मनोवैज्ञानिकदृष्ट्या समर्थिता ज्योतिषविद्या।",
      lead:
        "अस्माकं प्रतिवेदनैः, उपकरणैः, दृष्टिभिश्च दर्शनं स्वविकासं च अन्विष्यत। एते भवन्तं स्वस्य गहनतया अवबोधने साहाय्यं कुर्वन्ति। अस्माकं लक्ष्यं भवतः जीवनयात्रायां अधिकया स्पष्टतया, प्रयोजनेन, शुभशक्त्या च सह गमनम्।",
      relationshipCalculator: "सम्बन्धगणकः",
      bookSession: "सत्रं आरक्षत",
    },
    login: { username: "उपयोक्तृनाम", password: "गुह्यशब्दः", login: "प्रवेशः", missingUsername: "उपयोक्तृनाम न लब्धम्" },
    lifespace: {
      eyebrow: "LIFESPACE 1.0 परिचीयते",
      title: "मानसिकस्वास्थ्यस्य सर्वरोगनाशिनी।",
      bodyOne:
        "प्रत्यहं भवन्तः सत्त्वस्य नव मूलप्रदेशान् अनुभवथ। तेषु प्रकाशः, अन्तरात्मा, शरीरम्, मनः, पर्यावरणम्, परैः सह सम्बन्धश्च अन्तर्भवति। LIFESPACE तत् दर्पणम् अस्ति यत् सरलप्रश्नान् पृच्छति आत्मसाक्षात्कारप्रक्रियायाः प्रेरणया च भवन्तं स्वस्य बोधने साहाय्यं करोति।",
      bodyTwo: "अस्माकं आशा अस्ति यत् भवन्तः तत्र स्वशक्तेः प्रवाहं द्रक्ष्यन्ति यत्र सा पूर्वम् उपेक्षिता आसीत्।",
      ready: "यदि भवन्तः सज्जाः स्युः...",
      readyItems: ["सचेतनतया जीवितुम्", "मनःशरीरयोः पोषणं कर्तुम्", "अद्भुतस्य कस्यचित् भागं भवितुम्"],
      close: "LIFESPACE Beta 1.0 मध्ये सहभागीभवतु, स्वजीवनं सुलभं, समन्वितं, शान्तिपूर्णं च भवति इति पश्यतु।",
      download: "LIFESPACE 1.0 अवतरतु",
      previewEyebrow: "अनुप्रयोगपूर्वावलोकनम्",
      previewTitle: "रूपरेखाः ज्ञातुम्। जीवनं आकारयितुम्।",
      previewBody: "LIFESPACE सह स्वव्यवहारस्य अनुभूतेश्च लयम् अंकयित्वा मस्तिष्कसामर्थ्यवृद्ध्यर्थं दुर्बलस्थानानि ज्ञायताम्।",
      benefits: {
        dailyTitle: "दैनिकाचरण-अनुसरणम्",
        dailyBody: "जीवनस्य नव मूलतत्त्वैः सम्बद्धानां स्वाभ्यासानां साप्ताहिकं मासिकं च विश्लेषणं पश्यन्तु।",
        mealsTitle: "सुदृढः भोजन-तन्त्रः",
        mealsBody: "भवतः आवश्यकतानुसारं मस्तिष्कस्य उपयुक्तभागान् लक्ष्यीकुर्वन्ति कस्टम् भोजन-योजनाः रचयन्तु।",
        financeTitle: "वित्तीयसमाधानानि",
        financeBody: "Weekly Tracker इत्यनेन सर्वेषु विभागेषु व्ययम् अवशिष्टं च दृष्ट्वा वित्तं व्यवस्थापयन्तु।",
      },
    },
    newsletter: { eyebrow: "ज्योतिषप्रतिवेदनं प्राप्नुत", placeholder: "स्वस्य ईमेल् लिखतु", join: "संबध्यताम्" },
    footer: {
      discover: "अन्वेषणम्", legal: "वैधानिकम्", other: "अन्यानि", language: "भाषा", creationHealth: "Creation Health", siteRules: "जालस्थान-नियमाः", advertise: "विज्ञापनम्", support: "समर्थनम्", terms: "सेवाशर्ताः", privacy: "गोपनीयता-नीतिः", dmca: "DMCA", accessibility: "सुलभता-वक्तव्यम्", upgrade: "AT+ प्रति उन्नीयताम्", staff: "लेख-सम्पादकमण्डली", services: "सेवाः", credit: "रचितम्",
    },
  },
  pa: {
    nav: { home: "ਮੁੱਖ ਪੰਨਾ", services: "ਸੇਵਾਵਾਂ", downloads: "ਡਾਊਨਲੋਡ", about: "ਬਾਰੇ", lifespace: "LIFESPACE", pricing: "ਕੀਮਤ", blog: "ਬਲੌਗ" },
    hero: {
      title: "ਰਿਸ਼ਤਿਆਂ, ਧਿਆਨ ਅਤੇ ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਲਈ ਮਨੋਵਿਗਿਆਨ-ਆਧਾਰਿਤ ਜੋਤਿਸ਼।",
      lead:
        "ਸਾਡੀਆਂ ਰਿਪੋਰਟਾਂ, ਟੂਲਾਂ ਅਤੇ ਵਿਚਾਰਾਂ ਰਾਹੀਂ ਦਰਸ਼ਨ ਅਤੇ ਨਿੱਜੀ ਵਿਕਾਸ ਦੀ ਖੋਜ ਕਰੋ, ਜੋ ਤੁਹਾਨੂੰ ਆਪਣੇ ਆਪ ਨੂੰ ਹੋਰ ਡੂੰਘਾਈ ਨਾਲ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਬਣਾਏ ਗਏ ਹਨ। ਸਾਡਾ ਲੱਖ ਹੈ ਕਿ ਤੁਸੀਂ ਜੀਵਨ ਵਿਚ ਹੋਰ ਸਪਸ਼ਟਤਾ, ਮਕਸਦ ਅਤੇ ਸਕਾਰਾਤਮਕ ਊਰਜਾ ਨਾਲ ਅੱਗੇ ਵਧੋ।",
      relationshipCalculator: "ਰਿਸ਼ਤਾ ਕੈਲਕੂਲੇਟਰ",
      bookSession: "ਸੈਸ਼ਨ ਬੁੱਕ ਕਰੋ",
    },
    login: { username: "ਯੂਜ਼ਰਨੇਮ", password: "ਪਾਸਵਰਡ", login: "ਲਾਗਇਨ", missingUsername: "ਯੂਜ਼ਰਨੇਮ ਨਹੀਂ ਮਿਲਿਆ" },
    lifespace: {
      eyebrow: "LIFESPACE 1.0 ਪੇਸ਼ ਹੈ",
      title: "ਮਾਨਸਿਕ ਸਿਹਤ ਲਈ ਇੱਕ ਸੰਪੂਰਨ ਸਹਾਰਾ।",
      bodyOne:
        "ਹਰ ਦਿਨ ਤੁਸੀਂ ਹੋਂਦ ਦੇ 9 ਮੁੱਖ ਖੇਤਰਾਂ ਵਿਚੋਂ ਲੰਘਦੇ ਹੋ। ਇਨ੍ਹਾਂ ਵਿੱਚ ਰੋਸ਼ਨੀ, ਅੰਦਰੂਨੀ ਆਪ, ਸਰੀਰ, ਮਨ, ਵਾਤਾਵਰਣ ਅਤੇ ਆਪਣੇ ਆਲੇ ਦੁਆਲੇ ਦੇ ਲੋਕਾਂ ਨਾਲ ਜੁੜਾਵ ਸ਼ਾਮਲ ਹਨ। LIFESPACE ਉਹ ਦਰਪਣ ਹੈ ਜੋ ਸਧੇ ਸਵਾਲ ਪੁੱਛਦਾ ਹੈ ਅਤੇ ਆਤਮ-ਅਸਲੀਅਤ ਦੀ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਜਾਗਰੂਕ ਕਰਕੇ ਤੁਹਾਨੂੰ ਆਪਣੇ ਆਪ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
      bodyTwo: "ਸਾਡੀ ਆਸ ਹੈ ਕਿ ਤੁਸੀਂ ਉੱਥੇ ਆਪਣੀ ਊਰਜਾ ਦਾ ਪ੍ਰਵਾਹ ਦੇਖਣਾ ਸ਼ੁਰੂ ਕਰੋਗੇ ਜਿੱਥੇ ਉਹ ਪਹਿਲਾਂ ਭੁੱਲਿਆ ਗਿਆ ਸੀ।",
      ready: "ਜੇ ਤੁਸੀਂ ਤਿਆਰ ਹੋ...",
      readyItems: ["ਜਾਗਰੂਕਤਾ ਨਾਲ ਜੀਉਣ ਲਈ", "ਆਪਣੇ ਮਨ ਅਤੇ ਸਰੀਰ ਨੂੰ ਪਾਲਣ ਲਈ", "ਕਿਸੇ ਅਦਭੁੱਤ ਚੀਜ਼ ਦਾ ਹਿੱਸਾ ਬਣਨ ਲਈ"],
      close: "LIFESPACE Beta 1.0 ਨਾਲ ਜੁੜੋ ਅਤੇ ਦੇਖੋ ਕਿ ਤੁਹਾਡੀ ਜ਼ਿੰਦਗੀ ਕਿਵੇਂ ਸੁਮੇਲਭਰੀ, ਆਸਾਨ ਅਤੇ ਸ਼ਾਂਤ ਬਣਦੀ ਹੈ।",
      download: "LIFESPACE 1.0 ਡਾਊਨਲੋਡ ਕਰੋ",
      previewEyebrow: "ਐਪ ਝਲਕ",
      previewTitle: "ਪੈਟਰਨ ਪਛਾਣੋ। ਆਪਣੀ ਜ਼ਿੰਦਗੀ ਗੜ੍ਹੋ।",
      previewBody: "LIFESPACE ਨਾਲ ਆਪਣੇ ਵਿਹਾਰ ਅਤੇ ਧਾਰਣਾ ਦੀ ਲੈ ਨੂੰ ਨਕਸ਼ੇਬੰਧ ਕਰੋ ਅਤੇ ਦਿਮਾਗੀ ਉਤਕ੍ਰਿਸ਼ਟਤਾ ਲਈ ਆਪਣੀਆਂ ਕਮਜ਼ੋਰ ਥਾਵਾਂ ਪਛਾਣੋ।",
      benefits: {
        dailyTitle: "ਰੋਜ਼ਾਨਾ ਆਦਤ ਟਰੈਕਿੰਗ",
        dailyBody: "ਜੀਵਨ ਦੇ 9 ਮੁੱਖ ਸਿਧਾਂਤਾਂ ਨਾਲ ਜੁੜੀਆਂ ਆਪਣੀਆਂ ਆਦਤਾਂ ਦੇ ਹਫਤਾਵਾਰੀ ਅਤੇ ਮਹੀਨਾਵਾਰੀ ਵਿਸ਼ਲੇਸ਼ਣ ਵੇਖੋ।",
        mealsTitle: "ਮਜ਼ਬੂਤ ਭੋਜਨ ਪ੍ਰਣਾਲੀ",
        mealsBody: "ਆਪਣੀਆਂ ਲੋੜਾਂ ਨਾਲ ਸੰਬੰਧਤ ਦਿਮਾਗ ਦੇ ਹਿੱਸਿਆਂ ਨੂੰ ਨਿਸ਼ਾਨਾ ਬਣਾਉਣ ਵਾਲੀਆਂ ਕਸਟਮ ਮੀਲ ਯੋਜਨਾਵਾਂ ਬਣਾਓ।",
        financeTitle: "ਵਿੱਤੀ ਹੱਲ",
        financeBody: "Weekly Tracker ਨਾਲ ਹਰ ਬਜਟ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਆਪਣਾ ਖਰਚ ਅਤੇ ਬਕਾਇਆ ਵੇਖ ਕੇ ਵਿੱਤ ਸੰਭਾਲੋ।",
      },
    },
    newsletter: { eyebrow: "ਜੋਤਿਸ਼ੀ ਰਿਪੋਰਟ ਪ੍ਰਾਪਤ ਕਰੋ", placeholder: "ਆਪਣਾ ਈਮੇਲ ਦਰਜ ਕਰੋ", join: "ਸ਼ਾਮਲ ਹੋਵੋ" },
    footer: {
      discover: "ਖੋਜੋ", legal: "ਕਾਨੂੰਨੀ", other: "ਹੋਰ", language: "ਭਾਸ਼ਾ", creationHealth: "Creation Health", siteRules: "ਸਾਈਟ ਨਿਯਮ", advertise: "ਵਿਗਿਆਪਨ", support: "ਸਹਾਇਤਾ", terms: "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ", privacy: "ਗੋਪਨੀਯਤਾ ਨੀਤੀ", dmca: "DMCA", accessibility: "ਪਹੁੰਚਯੋਗਤਾ ਬਿਆਨ", upgrade: "AT+ ਵਿੱਚ ਅੱਪਗ੍ਰੇਡ ਕਰੋ", staff: "ਲੇਖ ਸਟਾਫ", services: "ਸੇਵਾਵਾਂ", credit: "ਡਿਜ਼ਾਇਨ",
    },
  },
  zh: {
    nav: { home: "首页", services: "服务", downloads: "下载", about: "关于", lifespace: "LIFESPACE", pricing: "价格", blog: "博客" },
    hero: {
      title: "以心理学为基础的占星，用于关系、冥想与日常生活。",
      lead:
        "通过我们的报告、工具和洞见探索哲学与个人成长，帮助你更深入地理解自己。我们的目标是帮助你以更清晰的方向、更强的使命感和更积极的能量走过人生。",
      relationshipCalculator: "关系计算器",
      bookSession: "预约咨询",
    },
    login: { username: "用户名", password: "密码", login: "登录", missingUsername: "未找到用户名" },
    lifespace: {
      eyebrow: "LIFESPACE 1.0 登场",
      title: "心理健康的全方位良方。",
      bodyOne:
        "每天，你都会穿越存在的 9 个核心空间，其中包括：光、自我、身体、心智、环境以及与周围人的连接。LIFESPACE 就像一面镜子，提出简单的问题，通过催化自我实现的过程来帮助你理解自己。",
      bodyTwo: "我们希望你开始看见那股曾被忽略的能量重新流动。",
      ready: "如果你已经准备好……",
      readyItems: ["有意识地生活", "滋养你的身心", "成为美好事物的一部分"],
      close: "加入 LIFESPACE Beta 1.0，看着你的生活重新组织成一种轻盈、和谐而平静的状态。",
      download: "下载 LIFESPACE 1.0",
      previewEyebrow: "应用预览",
      previewTitle: "识别模式，塑造人生。",
      previewBody: "使用 LIFESPACE 绘制你的行为与感知节奏，找出弱点，最大化大脑优化。",
      benefits: {
        dailyTitle: "每日习惯追踪",
        dailyBody: "查看与你生活九大核心原则相关的习惯的每周和每月分析。",
        mealsTitle: "强大的饮食系统",
        mealsBody: "创建专门针对你需求相关脑区的个性化饮食方案。",
        financeTitle: "财务方案",
        financeBody: "使用 Weekly Tracker 查看所有预算类别的支出与余额，帮助你管理财务。",
      },
    },
    newsletter: { eyebrow: "获取占星报告", placeholder: "输入你的电子邮箱", join: "加入" },
    footer: {
      discover: "发现", legal: "法律", other: "其他", language: "语言", creationHealth: "Creation Health", siteRules: "网站规则", advertise: "广告合作", support: "支持", terms: "服务条款", privacy: "隐私政策", dmca: "DMCA", accessibility: "无障碍声明", upgrade: "升级到 AT+", staff: "文章团队", services: "服务", credit: "设计来自",
    },
  },
  ja: {
    nav: { home: "ホーム", services: "サービス", downloads: "ダウンロード", about: "概要", lifespace: "LIFESPACE", pricing: "料金", blog: "ブログ" },
    hero: {
      title: "人間関係、瞑想、日常生活のための心理学的視点を取り入れた占星術。",
      lead:
        "レポート、ツール、洞察を通して哲学と自己成長を探求し、より深く自分を理解できるようにします。私たちの目標は、より大きな明晰さ、目的意識、前向きなエネルギーとともに人生を進める手助けをすることです。",
      relationshipCalculator: "相性計算機",
      bookSession: "セッションを予約",
    },
    login: { username: "ユーザー名", password: "パスワード", login: "ログイン", missingUsername: "ユーザー名が見つかりません" },
    lifespace: {
      eyebrow: "LIFESPACE 1.0 のご紹介",
      title: "心の健康のための総合的な癒し。",
      bodyOne:
        "私たちは毎日、存在の9つの中核空間を通り抜けています。そこには光、内なる自己、身体、心、環境、周囲とのつながりが含まれます。LIFESPACE はシンプルな問いを投げかけ、自己実現のプロセスを促進することで自分自身を理解する手助けをする鏡です。",
      bodyTwo: "忘れられていた場所に、あなたのエネルギーの流れが再び見え始めることを願っています。",
      ready: "もしあなたが準備できているなら……",
      readyItems: ["意識的に生きる", "心と体を養う", "素晴らしいものの一部になる"],
      close: "LIFESPACE Beta 1.0 に参加し、人生が無理なく、調和し、平和に満ちたものへと再編されていくのを見守ってください。",
      download: "LIFESPACE 1.0 をダウンロード",
      previewEyebrow: "アプリプレビュー",
      previewTitle: "パターンを見抜き、人生を形づくる。",
      previewBody: "LIFESPACE で行動と知覚のリズムを可視化し、弱点を見つけて脳の最適化を高めましょう。",
      benefits: {
        dailyTitle: "毎日の習慣トラッキング",
        dailyBody: "人生の9つの核となる要素に関する習慣を、週次・月次の分析で確認できます。",
        mealsTitle: "充実した食事システム",
        mealsBody: "あなたのニーズに関わる脳の部位を意識したカスタム食事プランを作成できます。",
        financeTitle: "ファイナンスソリューション",
        financeBody: "Weekly Tracker で各予算カテゴリの支出と残高を確認し、家計を整えましょう。",
      },
    },
    newsletter: { eyebrow: "占星レポートを受け取る", placeholder: "メールアドレスを入力", join: "参加する" },
    footer: {
      discover: "見つける", legal: "法務", other: "その他", language: "言語", creationHealth: "Creation Health", siteRules: "サイトルール", advertise: "広告掲載", support: "サポート", terms: "利用規約", privacy: "プライバシーポリシー", dmca: "DMCA", accessibility: "アクセシビリティ声明", upgrade: "AT+ にアップグレード", staff: "記事スタッフ", services: "サービス", credit: "デザイン",
    },
  },
  yue: {
    nav: { home: "主頁", services: "服務", downloads: "下載", about: "關於", lifespace: "LIFESPACE", pricing: "收費", blog: "網誌" },
    hero: {
      title: "以心理學角度出發嘅占星內容，陪你處理關係、冥想同日常生活。",
      lead:
        "透過我哋嘅報告、工具同洞察探索哲學同個人成長，幫助你更深入了解自己。我哋希望你喺人生路上帶住更多清晰感、方向感同正面能量前行。",
      relationshipCalculator: "關係計算器",
      bookSession: "預約時段",
    },
    login: { username: "用戶名稱", password: "密碼", login: "登入", missingUsername: "搵唔到用戶名稱" },
    lifespace: {
      eyebrow: "LIFESPACE 1.0 登場",
      title: "照顧心理健康嘅全方位方案。",
      bodyOne:
        "每一日，你都會穿過存在嘅 9 個核心空間，包括光、內在自我、身體、心智、環境，同身邊人嘅連結。LIFESPACE 就好似一面鏡，透過簡單問題幫你認識自己，推動自我實現嘅過程。",
      bodyTwo: "我哋希望你會開始見到，曾經被遺忘嘅地方，其實仲有能量喺流動。",
      ready: "如果你已經準備好……",
      readyItems: ["有意識咁生活", "滋養你嘅身心", "成為一件美好事情嘅一部分"],
      close: "加入 LIFESPACE Beta 1.0，睇住你嘅生活慢慢重組成更和諧、更輕盈、更平靜嘅狀態。",
      download: "下載 LIFESPACE 1.0",
      previewEyebrow: "App 預覽",
      previewTitle: "認出模式，塑造人生。",
      previewBody: "用 LIFESPACE 記錄你嘅行為同感知節奏，搵出弱點位置，提升大腦優化效果。",
      benefits: {
        dailyTitle: "每日習慣追蹤",
        dailyBody: "查看同生活 9 大核心面向有關嘅習慣，每週同每月分析一目了然。",
        mealsTitle: "完善飲食系統",
        mealsBody: "建立針對你需要、並對應相關腦部區域嘅個人化飲食計劃。",
        financeTitle: "財務方案",
        financeBody: "用 Weekly Tracker 睇晒各個預算分類嘅支出同結餘，幫你整好財務。",
      },
    },
    newsletter: { eyebrow: "獲取占星報告", placeholder: "輸入你嘅電郵", join: "加入" },
    footer: {
      discover: "探索", legal: "法律", other: "其他", language: "語言", creationHealth: "Creation Health", siteRules: "網站規則", advertise: "廣告合作", support: "支持", terms: "服務條款", privacy: "私隱政策", dmca: "DMCA", accessibility: "無障礙聲明", upgrade: "升級至 AT+", staff: "文章團隊", services: "服務", credit: "設計來自",
    },
  },
  ko: {
    nav: { home: "홈", services: "서비스", downloads: "다운로드", about: "소개", lifespace: "LIFESPACE", pricing: "요금", blog: "블로그" },
    hero: {
      title: "관계, 명상, 일상을 위한 심리학 기반 점성학.",
      lead:
        "자기 이해를 더 깊게 돕기 위해 설계된 리포트, 도구, 인사이트를 통해 철학과 개인적 성장을 탐색해 보세요. 우리의 목표는 여러분이 더 큰 명확함, 목적의식, 긍정적인 에너지와 함께 삶을 살아가도록 돕는 것입니다.",
      relationshipCalculator: "관계 계산기",
      bookSession: "세션 예약",
    },
    login: { username: "사용자 이름", password: "비밀번호", login: "로그인", missingUsername: "사용자 이름을 찾을 수 없습니다" },
    lifespace: {
      eyebrow: "LIFESPACE 1.0 소개",
      title: "심리 건강을 위한 만능 해법.",
      bodyOne:
        "매일 우리는 존재의 9가지 핵심 공간을 지나갑니다. 여기에는 빛, 내면의 자아, 몸, 마음, 환경, 주변 사람들과의 연결이 포함됩니다. LIFESPACE는 단순한 질문을 던지며 자기실현의 과정을 촉진해 스스로를 이해하도록 돕는 거울입니다.",
      bodyTwo: "한때 잊혀졌던 곳에서 다시 에너지가 흐르는 모습을 보게 되기를 바랍니다.",
      ready: "당신이 준비되었다면...",
      readyItems: ["의식적으로 살아가기", "몸과 마음 돌보기", "놀라운 무언가의 일부 되기"],
      close: "LIFESPACE Beta 1.0에 참여하고 삶이 더 조화롭고 평화롭게 재정리되는 과정을 지켜보세요.",
      download: "LIFESPACE 1.0 다운로드",
      previewEyebrow: "앱 미리보기",
      previewTitle: "패턴을 인식하고 삶을 설계하세요.",
      previewBody: "LIFESPACE로 행동과 인식의 리듬을 추적하고 약점을 찾아 두뇌 최적화를 극대화하세요.",
      benefits: {
        dailyTitle: "일일 습관 추적",
        dailyBody: "삶의 9가지 핵심 원칙과 관련된 습관을 주간 및 월간 분석으로 확인하세요.",
        mealsTitle: "강력한 식단 시스템",
        mealsBody: "당신의 필요와 관련된 뇌 부위를 겨냥한 맞춤형 식단 계획을 만드세요.",
        financeTitle: "재정 솔루션",
        financeBody: "Weekly Tracker로 모든 예산 항목의 지출과 잔액을 확인하며 재정을 관리하세요.",
      },
    },
    newsletter: { eyebrow: "점성술 리포트 받기", placeholder: "이메일을 입력하세요", join: "참여하기" },
    footer: {
      discover: "둘러보기", legal: "법률", other: "기타", language: "언어", creationHealth: "Creation Health", siteRules: "사이트 규칙", advertise: "광고", support: "후원", terms: "서비스 약관", privacy: "개인정보 처리방침", dmca: "DMCA", accessibility: "접근성 안내", upgrade: "AT+로 업그레이드", staff: "기사 팀", services: "서비스", credit: "디자인",
    },
  },
};

const legalCopy: Record<
  string,
  Record<SupportedLocale, LegalPageCopy>
> = {
  siteRules: {
    en: {
      kicker: "Astrology Today",
      title: "Site Rules",
      summary:
        "A guide to how Astrology Today publishes, protects, and holds space for reflective astrology content.",
      meta: [
        ["Effective", "April 11, 2026"],
        ["Applies To", "Readers, subscribers, contributors, and partners"],
      ],
      sidebarLabel: "In This Document",
      contactHeading: "10. Questions",
      contactBody:
        "For questions about these rules, partnership alignment, or reporting a concern, contact Astrology Today through the main site contact channels as they become available.",
      returnHome: "Return to Astrology Today",
    },
    fr: {
      kicker: "Astrology Today",
      title: "Règles du site",
      summary: "Un guide expliquant comment Astrology Today publie, protège et accueille un contenu astrologique réfléchi.",
      meta: [["Entrée en vigueur", "11 avril 2026"], ["S'applique à", "Lecteurs, abonnés, contributeurs et partenaires"]],
      sidebarLabel: "Dans ce document",
      contactHeading: "10. Questions",
      contactBody: "Pour toute question sur ces règles, l'alignement des partenariats ou le signalement d'un problème, contactez Astrology Today via les canaux de contact principaux du site.",
      returnHome: "Retour à Astrology Today",
    },
    it: {
      kicker: "Astrology Today",
      title: "Regole del sito",
      summary: "Una guida a come Astrology Today pubblica, protegge e custodisce contenuti astrologici riflessivi.",
      meta: [["Entrata in vigore", "11 aprile 2026"], ["Si applica a", "Lettori, iscritti, collaboratori e partner"]],
      sidebarLabel: "In questo documento",
      contactHeading: "10. Domande",
      contactBody: "Per domande su queste regole, sull'allineamento delle partnership o per segnalare un problema, contatta Astrology Today tramite i principali canali di contatto del sito.",
      returnHome: "Torna a Astrology Today",
    },
    es: {
      kicker: "Astrology Today",
      title: "Reglas del sitio",
      summary: "Una guía sobre cómo Astrology Today publica, protege y sostiene un espacio para contenido astrológico reflexivo.",
      meta: [["Vigente desde", "11 de abril de 2026"], ["Se aplica a", "Lectores, suscriptores, colaboradores y socios"]],
      sidebarLabel: "En este documento",
      contactHeading: "10. Preguntas",
      contactBody: "Si tienes preguntas sobre estas reglas, la alineación de asociaciones o deseas informar una inquietud, contacta a Astrology Today a través de los canales principales del sitio.",
      returnHome: "Volver a Astrology Today",
    },
    hi: {
      kicker: "Astrology Today",
      title: "साइट नियम",
      summary: "यह मार्गदर्शिका बताती है कि Astrology Today चिंतनशील ज्योतिषीय सामग्री को कैसे प्रकाशित, सुरक्षित और संरक्षित करता है।",
      meta: [["प्रभावी", "11 अप्रैल 2026"], ["लागू", "पाठक, सदस्य, योगदानकर्ता और साझेदार"]],
      sidebarLabel: "इस दस्तावेज़ में",
      contactHeading: "10. प्रश्न",
      contactBody: "इन नियमों, साझेदारी संरेखण या किसी चिंता की रिपोर्टिंग के बारे में प्रश्नों के लिए Astrology Today से साइट के मुख्य संपर्क माध्यमों द्वारा संपर्क करें।",
      returnHome: "Astrology Today पर लौटें",
    },
    ur: {
      kicker: "Astrology Today",
      title: "سائٹ کے قواعد",
      summary: "یہ رہنما بتاتا ہے کہ Astrology Today غوروفکر پر مبنی نجومی مواد کو کیسے شائع، محفوظ اور سنبھالتا ہے۔",
      meta: [["موثر", "11 اپریل 2026"], ["لاگو", "قارئین، سبسکرائبرز، معاونین اور شراکت دار"]],
      sidebarLabel: "اس دستاویز میں",
      contactHeading: "10. سوالات",
      contactBody: "ان قواعد، شراکت داری کی مطابقت یا کسی مسئلے کی رپورٹ کے لیے Astrology Today سے سائٹ کے مرکزی رابطہ ذرائع کے ذریعے رابطہ کریں۔",
      returnHome: "Astrology Today پر واپس جائیں",
    },
    sa: {
      kicker: "Astrology Today",
      title: "जालस्थान-नियमाः",
      summary: "अयं मार्गदर्शकः दर्शयति यत् Astrology Today विचारशीलज्योतिषविषयं कथं प्रकाशयति, रक्षति, धारयति च।",
      meta: [["प्रभावी", "11 अप्रैल 2026"], ["प्रयुज्यते", "पाठकाः, सदस्याः, योगदानकर्तारः, सहकार्यकर्तारश्च"]],
      sidebarLabel: "अस्मिन् दस्तावेजे",
      contactHeading: "10. प्रश्नाः",
      contactBody: "एतेषां नियमानां विषये, सहभागिसाम्यस्य विषये, अथवा चिन्तासूचनार्थं Astrology Today इत्यनेन सह मुख्यसंपर्कमार्गैः सम्पर्कं कुर्वन्तु।",
      returnHome: "Astrology Today प्रति प्रत्यागच्छतु",
    },
    pa: {
      kicker: "Astrology Today",
      title: "ਸਾਈਟ ਨਿਯਮ",
      summary: "ਇਹ ਮਾਰਗਦਰਸ਼ਿਕ ਦੱਸਦਾ ਹੈ ਕਿ Astrology Today ਵਿਚਾਰਸ਼ੀਲ ਜੋਤਿਸ਼ ਸਮੱਗਰੀ ਨੂੰ ਕਿਵੇਂ ਪ੍ਰਕਾਸ਼ਿਤ, ਸੁਰੱਖਿਅਤ ਅਤੇ ਸੰਭਾਲਦਾ ਹੈ।",
      meta: [["ਲਾਗੂ ਮਿਤੀ", "11 ਅਪ੍ਰੈਲ 2026"], ["ਲਾਗੂ", "ਪਾਠਕ, ਮੈਂਬਰ, ਯੋਗਦਾਨਕਰਤਾ ਅਤੇ ਭਾਗੀਦਾਰ"]],
      sidebarLabel: "ਇਸ ਦਸਤਾਵੇਜ਼ ਵਿੱਚ",
      contactHeading: "10. ਸਵਾਲ",
      contactBody: "ਇਨ੍ਹਾਂ ਨਿਯਮਾਂ, ਭਾਗੀਦਾਰੀ ਅਨੁਕੂਲਤਾ ਜਾਂ ਕਿਸੇ ਚਿੰਤਾ ਬਾਰੇ ਸਵਾਲਾਂ ਲਈ Astrology Today ਨਾਲ ਸਾਈਟ ਦੇ ਮੁੱਖ ਸੰਪਰਕ ਮਾਧਿਅਮਾਂ ਰਾਹੀਂ ਸੰਪਰਕ ਕਰੋ।",
      returnHome: "Astrology Today ਤੇ ਵਾਪਸ ਜਾਓ",
    },
    zh: {
      kicker: "Astrology Today",
      title: "网站规则",
      summary: "这是一份说明 Astrology Today 如何发布、保护并维护沉思型占星内容的指南。",
      meta: [["生效日期", "2026年4月11日"], ["适用对象", "读者、订阅者、投稿者与合作伙伴"]],
      sidebarLabel: "本文内容",
      contactHeading: "10. 问题",
      contactBody: "如对这些规则、合作适配或问题反馈有疑问，请通过网站主要联系方式联系 Astrology Today。",
      returnHome: "返回 Astrology Today",
    },
    ja: {
      kicker: "Astrology Today",
      title: "サイトルール",
      summary: "Astrology Today が思慮深い占星コンテンツをどのように公開し、守り、支えているかを示すガイドです。",
      meta: [["発効日", "2026年4月11日"], ["適用対象", "読者、購読者、寄稿者、提携先"]],
      sidebarLabel: "この文書について",
      contactHeading: "10. ご質問",
      contactBody: "これらのルール、提携方針、または懸念事項の報告については、サイトの主な連絡方法を通じて Astrology Today までご連絡ください。",
      returnHome: "Astrology Today に戻る",
    },
    yue: {
      kicker: "Astrology Today",
      title: "網站規則",
      summary: "呢份指南解釋 Astrology Today 點樣發佈、保護同承載有反思性嘅占星內容。",
      meta: [["生效日期", "2026年4月11日"], ["適用對象", "讀者、訂閱者、投稿者同合作夥伴"]],
      sidebarLabel: "本文件內容",
      contactHeading: "10. 問題",
      contactBody: "如果你對呢啲規則、合作配合，或者想回報問題，請透過網站主要聯絡方式搵 Astrology Today。",
      returnHome: "返回 Astrology Today",
    },
    ko: {
      kicker: "Astrology Today",
      title: "사이트 규칙",
      summary: "Astrology Today가 사려 깊은 점성술 콘텐츠를 어떻게 게시하고 보호하며 운영하는지에 대한 안내입니다.",
      meta: [["시행일", "2026년 4월 11일"], ["적용 대상", "독자, 구독자, 기여자 및 파트너"]],
      sidebarLabel: "이 문서에서",
      contactHeading: "10. 문의",
      contactBody: "이 규칙, 파트너십 적합성 또는 문제 제기에 관해 궁금한 점이 있으면 사이트의 주요 연락 채널을 통해 Astrology Today에 문의해 주세요.",
      returnHome: "Astrology Today로 돌아가기",
    },
  },
  terms: {
    en: {
      kicker: "Creation Health",
      title: "Terms Of Service",
      summary: "The legal terms governing Astrology Today, LIFESPACE, subscriptions, payments, user accounts, and related digital services under Creation Health.",
      meta: [["Effective", "April 11, 2026"], ["Applies To", "Website visitors, app users, registered users, subscribers, and customers"]],
      sidebarLabel: "In This Document",
      introHeading: "Creation Health Terms Of Service",
      introParagraphs: [
        'This Terms of Service Agreement is a legal and binding agreement between you and Creation Health, which governs your use of Astrology Today, LIFESPACE, related websites, apps, APIs, account systems, subscriptions, digital tools, content, products, materials, and services made available through them (collectively, the "Service"). Please read this Agreement carefully before using the Service.',
        "By registering for, using, purchasing, subscribing to, or otherwise accessing the Service, you consent to become a party to this Agreement and agree to be bound by these Terms of Service and our Privacy Policy.",
      ],
      contactHeading: "Last Updated",
      contactBody: "Last updated April 11, 2026.",
      returnHome: "Return to Astrology Today",
    },
    fr: {
      kicker: "Creation Health",
      title: "Conditions d'utilisation",
      summary: "Les conditions juridiques qui régissent Astrology Today, LIFESPACE, les abonnements, les paiements, les comptes utilisateurs et les services numériques associés sous Creation Health.",
      meta: [["Entrée en vigueur", "11 avril 2026"], ["S'applique à", "Visiteurs du site, utilisateurs d'app, utilisateurs inscrits, abonnés et clients"]],
      sidebarLabel: "Dans ce document",
      introHeading: "Conditions d'utilisation de Creation Health",
      introParagraphs: [
        "Le présent accord constitue un contrat légal et contraignant entre vous et Creation Health, régissant votre utilisation d'Astrology Today, de LIFESPACE et des services associés.",
        "En vous inscrivant, en utilisant, en achetant ou en accédant au Service, vous acceptez d'être lié par ces Conditions d'utilisation et notre Politique de confidentialité.",
      ],
      contactHeading: "Dernière mise à jour",
      contactBody: "Dernière mise à jour le 11 avril 2026.",
      returnHome: "Retour à Astrology Today",
    },
    it: {
      kicker: "Creation Health",
      title: "Termini di servizio",
      summary: "I termini legali che regolano Astrology Today, LIFESPACE, abbonamenti, pagamenti, account utente e servizi digitali correlati sotto Creation Health.",
      meta: [["Entrata in vigore", "11 aprile 2026"], ["Si applica a", "Visitatori del sito, utenti app, utenti registrati, abbonati e clienti"]],
      sidebarLabel: "In questo documento",
      introHeading: "Termini di servizio di Creation Health",
      introParagraphs: [
        "Il presente accordo costituisce un contratto legale e vincolante tra te e Creation Health e disciplina l'uso di Astrology Today, LIFESPACE e dei servizi correlati.",
        "Registrandoti, utilizzando, acquistando o accedendo al Servizio, accetti di essere vincolato da questi Termini di servizio e dalla nostra Informativa sulla privacy.",
      ],
      contactHeading: "Ultimo aggiornamento",
      contactBody: "Ultimo aggiornamento: 11 aprile 2026.",
      returnHome: "Torna a Astrology Today",
    },
    es: {
      kicker: "Creation Health",
      title: "Términos del servicio",
      summary: "Los términos legales que rigen Astrology Today, LIFESPACE, suscripciones, pagos, cuentas de usuario y servicios digitales relacionados bajo Creation Health.",
      meta: [["Vigente desde", "11 de abril de 2026"], ["Se aplica a", "Visitantes del sitio, usuarios de app, usuarios registrados, suscriptores y clientes"]],
      sidebarLabel: "En este documento",
      introHeading: "Términos del servicio de Creation Health",
      introParagraphs: [
        "Este acuerdo constituye un contrato legal y vinculante entre usted y Creation Health, y regula el uso de Astrology Today, LIFESPACE y servicios relacionados.",
        "Al registrarse, usar, comprar o acceder al Servicio, usted acepta quedar sujeto a estos Términos del servicio y a nuestra Política de privacidad.",
      ],
      contactHeading: "Última actualización",
      contactBody: "Última actualización: 11 de abril de 2026.",
      returnHome: "Volver a Astrology Today",
    },
    hi: {
      kicker: "Creation Health",
      title: "सेवा की शर्तें",
      summary: "Creation Health के अंतर्गत Astrology Today, LIFESPACE, सदस्यताओं, भुगतानों, उपयोगकर्ता खातों और संबंधित डिजिटल सेवाओं को नियंत्रित करने वाली कानूनी शर्तें।",
      meta: [["प्रभावी", "11 अप्रैल 2026"], ["लागू", "वेबसाइट आगंतुक, ऐप उपयोगकर्ता, पंजीकृत उपयोगकर्ता, सदस्य और ग्राहक"]],
      sidebarLabel: "इस दस्तावेज़ में",
      introHeading: "Creation Health सेवा की शर्तें",
      introParagraphs: [
        "यह समझौता आपके और Creation Health के बीच एक कानूनी और बाध्यकारी समझौता है, जो Astrology Today, LIFESPACE और संबंधित सेवाओं के उपयोग को नियंत्रित करता है।",
        "सेवा के लिए पंजीकरण, उपयोग, खरीद या पहुँच के माध्यम से आप इन शर्तों और हमारी गोपनीयता नीति से बंधे रहने के लिए सहमत होते हैं।",
      ],
      contactHeading: "अंतिम अद्यतन",
      contactBody: "अंतिम अद्यतन 11 अप्रैल 2026।",
      returnHome: "Astrology Today पर लौटें",
    },
    ur: {
      kicker: "Creation Health",
      title: "سروس کی شرائط",
      summary: "وہ قانونی شرائط جو Creation Health کے تحت Astrology Today، LIFESPACE، سبسکرپشنز، ادائیگیوں، صارف اکاؤنٹس اور متعلقہ ڈیجیٹل سروسز کو منظم کرتی ہیں۔",
      meta: [["موثر", "11 اپریل 2026"], ["لاگو", "ویب سائٹ وزیٹرز، ایپ صارفین، رجسٹرڈ صارفین، سبسکرائبرز اور صارفین"]],
      sidebarLabel: "اس دستاویز میں",
      introHeading: "Creation Health سروس کی شرائط",
      introParagraphs: [
        "یہ معاہدہ آپ اور Creation Health کے درمیان ایک قانونی اور پابند معاہدہ ہے جو Astrology Today، LIFESPACE اور متعلقہ سروسز کے استعمال کو منظم کرتا ہے۔",
        "سروس کے لیے رجسٹر، استعمال، خرید یا رسائی کے ذریعے آپ ان شرائط اور ہماری پرائیویسی پالیسی کے پابند ہونے پر رضامند ہوتے ہیں۔",
      ],
      contactHeading: "آخری تازہ کاری",
      contactBody: "آخری تازہ کاری 11 اپریل 2026۔",
      returnHome: "Astrology Today پر واپس جائیں",
    },
    sa: {
      kicker: "Creation Health",
      title: "सेवाशर्ताः",
      summary: "Creation Health इत्यस्य अधीनं Astrology Today, LIFESPACE, सदस्यता, भुगतानम्, उपयोक्तृखातानि, सम्बद्धाः डिजिटलसेवाः च याभिः नियन्त्र्यन्ते ताः वैधानिकशर्ताः।",
      meta: [["प्रभावी", "11 अप्रैल 2026"], ["प्रयुज्यते", "जालदर्शकाः, अनुप्रयोगोपयोक्तारः, पंजीकृतोपयोक्तारः, सदस्याः, ग्राहकाः"]],
      sidebarLabel: "अस्मिन् दस्तावेजे",
      introHeading: "Creation Health सेवाशर्ताः",
      introParagraphs: [
        "अयं करारः भवतः च Creation Health च मध्ये वैधानिकः बन्धनात्मकश्च करारः अस्ति, यः Astrology Today, LIFESPACE, सम्बद्धसेवानां च उपयोगं नियच्छति।",
        "सेवायाः पंजीकरणेन, उपयोगेन, क्रयणेन, अथवा प्रवेशेन च भवन्तः एताभिः शर्ताभिः गोपनीयतानीत्या च बध्यन्ते।",
      ],
      contactHeading: "अन्तिमपरिवर्तनम्",
      contactBody: "अन्तिमपरिवर्तनम् 11 अप्रैल 2026।",
      returnHome: "Astrology Today प्रति प्रत्यागच्छतु",
    },
    pa: {
      kicker: "Creation Health",
      title: "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
      summary: "Creation Health ਦੇ ਅਧੀਨ Astrology Today, LIFESPACE, ਮੈਂਬਰਸ਼ਿਪਾਂ, ਭੁਗਤਾਨਾਂ, ਯੂਜ਼ਰ ਖਾਤਿਆਂ ਅਤੇ ਸੰਬੰਧਤ ਡਿਜ਼ਿਟਲ ਸੇਵਾਵਾਂ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਨ ਵਾਲੀਆਂ ਕਾਨੂੰਨੀ ਸ਼ਰਤਾਂ।",
      meta: [["ਲਾਗੂ ਮਿਤੀ", "11 ਅਪ੍ਰੈਲ 2026"], ["ਲਾਗੂ", "ਵੈਬਸਾਈਟ ਵਿਜ਼ਟਰ, ਐਪ ਯੂਜ਼ਰ, ਰਜਿਸਟਰਡ ਯੂਜ਼ਰ, ਮੈਂਬਰ ਅਤੇ ਗਾਹਕ"]],
      sidebarLabel: "ਇਸ ਦਸਤਾਵੇਜ਼ ਵਿੱਚ",
      introHeading: "Creation Health ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
      introParagraphs: [
        "ਇਹ ਸਮਝੌਤਾ ਤੁਹਾਡੇ ਅਤੇ Creation Health ਵਿਚਕਾਰ ਇਕ ਕਾਨੂੰਨੀ ਅਤੇ ਬੰਨ੍ਹਨਕਾਰੀ ਸਮਝੌਤਾ ਹੈ ਜੋ Astrology Today, LIFESPACE ਅਤੇ ਸੰਬੰਧਤ ਸੇਵਾਵਾਂ ਦੇ ਉਪਯੋਗ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ।",
        "ਸੇਵਾ ਲਈ ਰਜਿਸਟਰ ਕਰਨ, ਵਰਤਣ, ਖਰੀਦਣ ਜਾਂ ਪਹੁੰਚ ਕਰਨ ਨਾਲ ਤੁਸੀਂ ਇਨ੍ਹਾਂ ਸ਼ਰਤਾਂ ਅਤੇ ਸਾਡੀ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਨਾਲ ਬੱਝਣ ਲਈ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ।",
      ],
      contactHeading: "ਆਖਰੀ ਅੱਪਡੇਟ",
      contactBody: "ਆਖਰੀ ਅੱਪਡੇਟ 11 ਅਪ੍ਰੈਲ 2026।",
      returnHome: "Astrology Today ਤੇ ਵਾਪਸ ਜਾਓ",
    },
    zh: {
      kicker: "Creation Health",
      title: "服务条款",
      summary: "适用于 Creation Health 旗下 Astrology Today、LIFESPACE、订阅、付款、用户账户及相关数字服务的法律条款。",
      meta: [["生效日期", "2026年4月11日"], ["适用对象", "网站访客、应用用户、注册用户、订阅者与客户"]],
      sidebarLabel: "本文内容",
      introHeading: "Creation Health 服务条款",
      introParagraphs: [
        "本协议是您与 Creation Health 之间具有法律约束力的协议，规范您对 Astrology Today、LIFESPACE 及相关服务的使用。",
        "当您注册、使用、购买或访问本服务时，即表示您同意受这些服务条款及我们的隐私政策约束。",
      ],
      contactHeading: "最后更新",
      contactBody: "最后更新于 2026年4月11日。",
      returnHome: "返回 Astrology Today",
    },
    ja: {
      kicker: "Creation Health",
      title: "利用規約",
      summary: "Creation Health のもとで提供される Astrology Today、LIFESPACE、サブスクリプション、支払い、ユーザーアカウント、および関連デジタルサービスを規定する法的条件です。",
      meta: [["発効日", "2026年4月11日"], ["適用対象", "サイト訪問者、アプリ利用者、登録ユーザー、購読者、顧客"]],
      sidebarLabel: "この文書について",
      introHeading: "Creation Health 利用規約",
      introParagraphs: [
        "本規約は、あなたと Creation Health の間の法的拘束力を持つ契約であり、Astrology Today、LIFESPACE、および関連サービスの利用を規定します。",
        "本サービスに登録、利用、購入、またはアクセスすることにより、あなたは本規約およびプライバシーポリシーに拘束されることに同意したものとみなされます。",
      ],
      contactHeading: "最終更新",
      contactBody: "最終更新日: 2026年4月11日。",
      returnHome: "Astrology Today に戻る",
    },
    yue: {
      kicker: "Creation Health",
      title: "服務條款",
      summary: "適用於 Creation Health 旗下 Astrology Today、LIFESPACE、訂閱、付款、用戶帳戶同相關數碼服務嘅法律條款。",
      meta: [["生效日期", "2026年4月11日"], ["適用對象", "網站訪客、App 用戶、已註冊用戶、訂閱者同客戶"]],
      sidebarLabel: "本文件內容",
      introHeading: "Creation Health 服務條款",
      introParagraphs: [
        "本協議係你同 Creation Health 之間具法律約束力嘅協議，規管你使用 Astrology Today、LIFESPACE 同相關服務。",
        "當你註冊、使用、購買或存取本服務，即表示你同意受本條款同我哋嘅私隱政策約束。",
      ],
      contactHeading: "最後更新",
      contactBody: "最後更新：2026年4月11日。",
      returnHome: "返回 Astrology Today",
    },
    ko: {
      kicker: "Creation Health",
      title: "서비스 약관",
      summary: "Creation Health 산하 Astrology Today, LIFESPACE, 구독, 결제, 사용자 계정 및 관련 디지털 서비스를 규율하는 법적 조건입니다.",
      meta: [["시행일", "2026년 4월 11일"], ["적용 대상", "웹사이트 방문자, 앱 사용자, 등록 사용자, 구독자 및 고객"]],
      sidebarLabel: "이 문서에서",
      introHeading: "Creation Health 서비스 약관",
      introParagraphs: [
        "본 약관은 귀하와 Creation Health 사이의 법적 구속력이 있는 계약으로, Astrology Today, LIFESPACE 및 관련 서비스의 이용을 규율합니다.",
        "서비스에 등록, 사용, 구매 또는 접근함으로써 귀하는 본 약관과 개인정보 처리방침에 구속되는 데 동의하게 됩니다.",
      ],
      contactHeading: "최종 업데이트",
      contactBody: "최종 업데이트: 2026년 4월 11일.",
      returnHome: "Astrology Today로 돌아가기",
    },
  },
  privacy: {
    en: {
      kicker: "Creation Health",
      title: "Privacy Policy Statement",
      summary: "How Creation Health collects, shares, uses, stores, and protects Personal Data across Astrology Today, LIFESPACE, subscriptions, payments, and related services.",
      meta: [["Effective", "April 11, 2026"], ["Applies To", "Website visitors, app users, subscribers, customers, and support inquiries"]],
      sidebarLabel: "In This Document",
      introHeading: "Creation Health Privacy Policy",
      introParagraphs: [
        "This Privacy Policy explains how we collect, share, and use any information that, alone or in combination with other information, relates to you, including Personal Data and other personally identifiable information, when you use Astrology Today, LIFESPACE, and related services made available by Creation Health.",
        "For the purposes of this Policy, Creation Health, including Astrology Today and LIFESPACE where applicable, acts as the data controller for the Personal Data that is collected through the Service and is responsible for ensuring that processing of Personal Data complies with applicable data protection law.",
      ],
      contactHeading: "How To Contact Us",
      contactBody: "If you have any questions, comments, complaints, or requests regarding this Privacy Policy or our handling of Personal Data, you may contact us through the contact methods made available by Astrology Today or related Creation Health pages.",
      returnHome: "Return to Astrology Today",
    },
    fr: {
      kicker: "Creation Health",
      title: "Déclaration de confidentialité",
      summary: "Comment Creation Health collecte, partage, utilise, stocke et protège les données personnelles dans Astrology Today, LIFESPACE, les abonnements, les paiements et les services associés.",
      meta: [["Entrée en vigueur", "11 avril 2026"], ["S'applique à", "Visiteurs du site, utilisateurs d'app, abonnés, clients et demandes d'assistance"]],
      sidebarLabel: "Dans ce document",
      introHeading: "Politique de confidentialité de Creation Health",
      introParagraphs: [
        "Cette politique explique comment nous collectons, partageons et utilisons les informations vous concernant lorsque vous utilisez Astrology Today, LIFESPACE et les services associés.",
        "Aux fins de cette politique, Creation Health agit comme responsable du traitement des données personnelles collectées via le Service.",
      ],
      contactHeading: "Comment nous contacter",
      contactBody: "Pour toute question, commentaire, plainte ou demande concernant cette politique ou notre traitement des données personnelles, vous pouvez nous contacter via les moyens proposés par Astrology Today ou les pages liées à Creation Health.",
      returnHome: "Retour à Astrology Today",
    },
    it: {
      kicker: "Creation Health",
      title: "Informativa sulla privacy",
      summary: "Come Creation Health raccoglie, condivide, utilizza, conserva e protegge i dati personali in Astrology Today, LIFESPACE, abbonamenti, pagamenti e servizi correlati.",
      meta: [["Entrata in vigore", "11 aprile 2026"], ["Si applica a", "Visitatori del sito, utenti app, abbonati, clienti e richieste di assistenza"]],
      sidebarLabel: "In questo documento",
      introHeading: "Informativa sulla privacy di Creation Health",
      introParagraphs: [
        "Questa informativa spiega come raccogliamo, condividiamo e utilizziamo le informazioni che ti riguardano quando usi Astrology Today, LIFESPACE e i servizi correlati.",
        "Ai fini di questa informativa, Creation Health agisce come titolare del trattamento dei dati personali raccolti tramite il Servizio.",
      ],
      contactHeading: "Come contattarci",
      contactBody: "Per domande, commenti, reclami o richieste relative a questa informativa o al trattamento dei dati personali, puoi contattarci tramite i metodi messi a disposizione da Astrology Today o dalle pagine collegate a Creation Health.",
      returnHome: "Torna a Astrology Today",
    },
    es: {
      kicker: "Creation Health",
      title: "Declaración de privacidad",
      summary: "Cómo Creation Health recopila, comparte, usa, almacena y protege los datos personales en Astrology Today, LIFESPACE, suscripciones, pagos y servicios relacionados.",
      meta: [["Vigente desde", "11 de abril de 2026"], ["Se aplica a", "Visitantes del sitio, usuarios de app, suscriptores, clientes y consultas de soporte"]],
      sidebarLabel: "En este documento",
      introHeading: "Política de privacidad de Creation Health",
      introParagraphs: [
        "Esta política explica cómo recopilamos, compartimos y usamos la información relacionada con usted cuando utiliza Astrology Today, LIFESPACE y servicios relacionados.",
        "A efectos de esta política, Creation Health actúa como responsable del tratamiento de los datos personales recopilados a través del Servicio.",
      ],
      contactHeading: "Cómo contactarnos",
      contactBody: "Si tiene preguntas, comentarios, quejas o solicitudes sobre esta política o nuestro tratamiento de datos personales, puede contactarnos mediante los métodos puestos a disposición por Astrology Today o páginas relacionadas con Creation Health.",
      returnHome: "Volver a Astrology Today",
    },
    hi: {
      kicker: "Creation Health",
      title: "गोपनीयता नीति वक्तव्य",
      summary: "Creation Health Astrology Today, LIFESPACE, सदस्यताओं, भुगतानों और संबंधित सेवाओं में व्यक्तिगत डेटा को कैसे एकत्र, साझा, उपयोग, संग्रहित और सुरक्षित करता है।",
      meta: [["प्रभावी", "11 अप्रैल 2026"], ["लागू", "वेबसाइट आगंतुक, ऐप उपयोगकर्ता, सदस्य, ग्राहक और सहायता अनुरोध"]],
      sidebarLabel: "इस दस्तावेज़ में",
      introHeading: "Creation Health गोपनीयता नीति",
      introParagraphs: [
        "यह नीति बताती है कि जब आप Astrology Today, LIFESPACE और संबंधित सेवाओं का उपयोग करते हैं तो हम आपके बारे में जानकारी कैसे एकत्र, साझा और उपयोग करते हैं।",
        "इस नीति के उद्देश्यों के लिए Creation Health सेवा के माध्यम से एकत्र व्यक्तिगत डेटा का नियंत्रक है।",
      ],
      contactHeading: "हमसे कैसे संपर्क करें",
      contactBody: "यदि इस नीति या व्यक्तिगत डेटा के हमारे प्रबंधन के बारे में आपके कोई प्रश्न, टिप्पणियाँ, शिकायतें या अनुरोध हों, तो Astrology Today या संबंधित Creation Health पृष्ठों पर उपलब्ध संपर्क माध्यमों से हमसे संपर्क करें।",
      returnHome: "Astrology Today पर लौटें",
    },
    ur: {
      kicker: "Creation Health",
      title: "پرائیویسی پالیسی بیان",
      summary: "Creation Health Astrology Today، LIFESPACE، سبسکرپشنز، ادائیگیوں اور متعلقہ سروسز میں ذاتی ڈیٹا کو کیسے جمع، شیئر، استعمال، محفوظ اور حفاظت کرتا ہے۔",
      meta: [["موثر", "11 اپریل 2026"], ["لاگو", "ویب سائٹ وزیٹرز، ایپ صارفین، سبسکرائبرز، صارفین اور سپورٹ کی درخواستیں"]],
      sidebarLabel: "اس دستاویز میں",
      introHeading: "Creation Health پرائیویسی پالیسی",
      introParagraphs: [
        "یہ پالیسی بتاتی ہے کہ جب آپ Astrology Today، LIFESPACE اور متعلقہ سروسز استعمال کرتے ہیں تو ہم آپ سے متعلق معلومات کیسے جمع، شیئر اور استعمال کرتے ہیں۔",
        "اس پالیسی کے مقاصد کے لیے Creation Health سروس کے ذریعے جمع کیے گئے ذاتی ڈیٹا کا کنٹرولر ہے۔",
      ],
      contactHeading: "ہم سے رابطہ کیسے کریں",
      contactBody: "اگر اس پالیسی یا ذاتی ڈیٹا کے ہمارے استعمال سے متعلق کوئی سوال، تبصرہ، شکایت یا درخواست ہو تو Astrology Today یا Creation Health کے متعلقہ صفحات کے رابطہ ذرائع کے ذریعے ہم سے رابطہ کریں۔",
      returnHome: "Astrology Today پر واپس جائیں",
    },
    sa: {
      kicker: "Creation Health",
      title: "गोपनीयता-नीतिवक्तव्यम्",
      summary: "Creation Health Astrology Today, LIFESPACE, सदस्यता, भुगतान, सम्बद्धसेवाः च मध्ये व्यक्तिगतदत्तांशं कथं संगृह्णाति, विभजति, उपयुङ्क्ते, स्थापयति, रक्षति च।",
      meta: [["प्रभावी", "11 अप्रैल 2026"], ["प्रयुज्यते", "जालदर्शकाः, अनुप्रयोगोपयोक्तारः, सदस्याः, ग्राहकाः, समर्थनयाचनाश्च"]],
      sidebarLabel: "अस्मिन् दस्तावेजे",
      introHeading: "Creation Health गोपनीयता-नीतिः",
      introParagraphs: [
        "अयं नीतिपत्रः वर्णयति यत् भवन्तः Astrology Today, LIFESPACE, सम्बद्धसेवाश्च उपयुञ्जानाः सन्ति चेत् वयं भवन्तं सम्बन्धितां सूचनां कथं संगृह्णीमः, विभजामः, उपयुञ्ज्महे च।",
        "अस्याः नीत्याः प्रयोजनार्थं Creation Health सेवामार्गेण संगृहीतस्य व्यक्तिगतदत्तांशस्य नियन्ता अस्ति।",
      ],
      contactHeading: "अस्माभिः सह कथं सम्पर्कः",
      contactBody: "अस्याः नीत्याः विषये, व्यक्तिगतदत्तांशव्यवहारस्य विषये वा प्रश्नाः, टिप्पणयः, अभियोगाः, याचनाः चेत् Astrology Today अथवा Creation Health सम्बद्धपृष्ठैः उपलब्धैः सम्पर्कमार्गैः अस्मान् सम्पृच्छन्तु।",
      returnHome: "Astrology Today प्रति प्रत्यागच्छतु",
    },
    pa: {
      kicker: "Creation Health",
      title: "ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਬਿਆਨ",
      summary: "Creation Health Astrology Today, LIFESPACE, ਮੈਂਬਰਸ਼ਿਪਾਂ, ਭੁਗਤਾਨਾਂ ਅਤੇ ਸੰਬੰਧਤ ਸੇਵਾਵਾਂ ਵਿੱਚ ਨਿੱਜੀ ਡਾਟਾ ਕਿਵੇਂ ਇਕੱਠਾ, ਸਾਂਝਾ, ਵਰਤਦਾ, ਸਟੋਰ ਅਤੇ ਸੁਰੱਖਿਅਤ ਕਰਦਾ ਹੈ।",
      meta: [["ਲਾਗੂ ਮਿਤੀ", "11 ਅਪ੍ਰੈਲ 2026"], ["ਲਾਗੂ", "ਵੈਬਸਾਈਟ ਵਿਜ਼ਟਰ, ਐਪ ਯੂਜ਼ਰ, ਮੈਂਬਰ, ਗਾਹਕ ਅਤੇ ਸਹਾਇਤਾ ਪੁੱਛਗਿੱਛ"]],
      sidebarLabel: "ਇਸ ਦਸਤਾਵੇਜ਼ ਵਿੱਚ",
      introHeading: "Creation Health ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
      introParagraphs: [
        "ਇਹ ਨੀਤੀ ਦੱਸਦੀ ਹੈ ਕਿ ਜਦੋਂ ਤੁਸੀਂ Astrology Today, LIFESPACE ਅਤੇ ਸੰਬੰਧਤ ਸੇਵਾਵਾਂ ਵਰਤਦੇ ਹੋ ਤਾਂ ਅਸੀਂ ਤੁਹਾਡੇ ਬਾਰੇ ਜਾਣਕਾਰੀ ਕਿਵੇਂ ਇਕੱਠੀ, ਸਾਂਝੀ ਅਤੇ ਵਰਤਦੇ ਹਾਂ।",
        "ਇਸ ਨੀਤੀ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ Creation Health ਸੇਵਾ ਰਾਹੀਂ ਇਕੱਠੇ ਕੀਤੇ ਨਿੱਜੀ ਡਾਟੇ ਦਾ ਨਿਯੰਤਰਕ ਹੈ।",
      ],
      contactHeading: "ਸਾਡੇ ਨਾਲ ਕਿਵੇਂ ਸੰਪਰਕ ਕਰੋ",
      contactBody: "ਜੇ ਇਸ ਨੀਤੀ ਜਾਂ ਨਿੱਜੀ ਡਾਟੇ ਦੇ ਸਾਡੇ ਪ੍ਰਬੰਧਨ ਬਾਰੇ ਤੁਹਾਡੇ ਕੋਈ ਸਵਾਲ, ਟਿੱਪਣੀਆਂ, ਸ਼ਿਕਾਇਤਾਂ ਜਾਂ ਬੇਨਤੀਆਂ ਹਨ, ਤਾਂ Astrology Today ਜਾਂ ਸੰਬੰਧਤ Creation Health ਪੰਨਿਆਂ ਉੱਤੇ ਉਪਲਬਧ ਸੰਪਰਕ ਮਾਧਿਅਮਾਂ ਰਾਹੀਂ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
      returnHome: "Astrology Today ਤੇ ਵਾਪਸ ਜਾਓ",
    },
    zh: {
      kicker: "Creation Health",
      title: "隐私政策声明",
      summary: "Creation Health 如何在 Astrology Today、LIFESPACE、订阅、付款及相关服务中收集、共享、使用、存储并保护个人数据。",
      meta: [["生效日期", "2026年4月11日"], ["适用对象", "网站访客、应用用户、订阅者、客户及支持请求"]],
      sidebarLabel: "本文内容",
      introHeading: "Creation Health 隐私政策",
      introParagraphs: [
        "本政策说明当您使用 Astrology Today、LIFESPACE 及相关服务时，我们如何收集、共享和使用与您有关的信息。",
        "就本政策而言，Creation Health 是通过本服务收集的个人数据的控制者。",
      ],
      contactHeading: "如何联系我们",
      contactBody: "如果您对本政策或我们处理个人数据的方式有任何疑问、意见、投诉或请求，可通过 Astrology Today 或相关 Creation Health 页面提供的联系方式与我们联系。",
      returnHome: "返回 Astrology Today",
    },
    ja: {
      kicker: "Creation Health",
      title: "プライバシーポリシー声明",
      summary: "Creation Health が Astrology Today、LIFESPACE、サブスクリプション、支払い、および関連サービスにおいて個人データをどのように収集・共有・利用・保管・保護するかを説明します。",
      meta: [["発効日", "2026年4月11日"], ["適用対象", "サイト訪問者、アプリ利用者、購読者、顧客、サポート問い合わせ"]],
      sidebarLabel: "この文書について",
      introHeading: "Creation Health プライバシーポリシー",
      introParagraphs: [
        "本ポリシーは、Astrology Today、LIFESPACE、および関連サービスを利用する際に、当社がどのように情報を収集・共有・利用するかを説明するものです。",
        "本ポリシーの目的上、Creation Health は本サービスを通じて収集される個人データの管理者として機能します。",
      ],
      contactHeading: "お問い合わせ方法",
      contactBody: "本ポリシーまたは個人データの取り扱いについてご質問、ご意見、苦情、ご要望がある場合は、Astrology Today または関連する Creation Health ページで案内されている方法でご連絡ください。",
      returnHome: "Astrology Today に戻る",
    },
    yue: {
      kicker: "Creation Health",
      title: "私隱政策聲明",
      summary: "Creation Health 點樣喺 Astrology Today、LIFESPACE、訂閱、付款同相關服務之中收集、分享、使用、儲存同保護個人資料。",
      meta: [["生效日期", "2026年4月11日"], ["適用對象", "網站訪客、App 用戶、訂閱者、客戶同支援查詢"]],
      sidebarLabel: "本文件內容",
      introHeading: "Creation Health 私隱政策",
      introParagraphs: [
        "本政策解釋當你使用 Astrology Today、LIFESPACE 同相關服務時，我哋點樣收集、分享同使用與你有關嘅資料。",
        "就本政策而言，Creation Health 係透過本服務收集個人資料嘅資料控制者。",
      ],
      contactHeading: "點樣聯絡我哋",
      contactBody: "如果你對本政策或我哋處理個人資料嘅方式有任何問題、意見、投訴或要求，可以透過 Astrology Today 或相關 Creation Health 頁面提供嘅聯絡方式搵我哋。",
      returnHome: "返回 Astrology Today",
    },
    ko: {
      kicker: "Creation Health",
      title: "개인정보 처리방침 안내",
      summary: "Creation Health가 Astrology Today, LIFESPACE, 구독, 결제 및 관련 서비스 전반에서 개인 데이터를 어떻게 수집, 공유, 사용, 저장 및 보호하는지 설명합니다.",
      meta: [["시행일", "2026년 4월 11일"], ["적용 대상", "웹사이트 방문자, 앱 사용자, 구독자, 고객 및 지원 문의"]],
      sidebarLabel: "이 문서에서",
      introHeading: "Creation Health 개인정보 처리방침",
      introParagraphs: [
        "본 정책은 귀하가 Astrology Today, LIFESPACE 및 관련 서비스를 사용할 때 당사가 귀하와 관련된 정보를 어떻게 수집, 공유 및 사용하는지 설명합니다.",
        "본 정책의 목적상 Creation Health는 서비스를 통해 수집되는 개인 데이터의 관리자로서 기능합니다.",
      ],
      contactHeading: "문의 방법",
      contactBody: "본 정책이나 개인 데이터 처리 방식에 대한 질문, 의견, 불만 또는 요청이 있는 경우 Astrology Today 또는 관련 Creation Health 페이지에 안내된 연락 방법을 통해 문의해 주세요.",
      returnHome: "Astrology Today로 돌아가기",
    },
  },
  dmca: {
    en: {
      kicker: "Creation Health",
      title: "DMCA / Copyright Policy",
      summary: "How Creation Health responds to copyright complaints and counter notifications relating to Astrology Today, LIFESPACE, and related services.",
      meta: [["Applies To", "Astrology Today, LIFESPACE, and related Creation Health services"], ["Contact", "mariosbardella@protonmail.com"]],
      sidebarLabel: "In This Document",
      introHeading: "Creation Health DMCA / Copyright Policy",
      contactHeading: "Return",
      contactBody: "",
      returnHome: "Return to Astrology Today",
    },
    fr: { kicker: "Creation Health", title: "Politique DMCA / droits d'auteur", summary: "Comment Creation Health répond aux plaintes de droits d'auteur et aux contre-notifications liées à Astrology Today, LIFESPACE et aux services associés.", meta: [["S'applique à", "Astrology Today, LIFESPACE et services Creation Health associés"], ["Contact", "mariosbardella@protonmail.com"]], sidebarLabel: "Dans ce document", introHeading: "Politique DMCA / droits d'auteur de Creation Health", contactHeading: "Retour", contactBody: "", returnHome: "Retour à Astrology Today" },
    it: { kicker: "Creation Health", title: "Politica DMCA / copyright", summary: "Come Creation Health risponde ai reclami di copyright e alle contro-notifiche relative ad Astrology Today, LIFESPACE e servizi correlati.", meta: [["Si applica a", "Astrology Today, LIFESPACE e servizi Creation Health correlati"], ["Contatto", "mariosbardella@protonmail.com"]], sidebarLabel: "In questo documento", introHeading: "Politica DMCA / copyright di Creation Health", contactHeading: "Ritorno", contactBody: "", returnHome: "Torna a Astrology Today" },
    es: { kicker: "Creation Health", title: "Política DMCA / copyright", summary: "Cómo Creation Health responde a reclamaciones de derechos de autor y contranotificaciones relacionadas con Astrology Today, LIFESPACE y servicios relacionados.", meta: [["Se aplica a", "Astrology Today, LIFESPACE y servicios relacionados de Creation Health"], ["Contacto", "mariosbardella@protonmail.com"]], sidebarLabel: "En este documento", introHeading: "Política DMCA / copyright de Creation Health", contactHeading: "Volver", contactBody: "", returnHome: "Volver a Astrology Today" },
    hi: { kicker: "Creation Health", title: "DMCA / कॉपीराइट नीति", summary: "Creation Health Astrology Today, LIFESPACE और संबंधित सेवाओं से जुड़ी कॉपीराइट शिकायतों और काउंटर नोटिस का कैसे जवाब देता है।", meta: [["लागू", "Astrology Today, LIFESPACE और संबंधित Creation Health सेवाएं"], ["संपर्क", "mariosbardella@protonmail.com"]], sidebarLabel: "इस दस्तावेज़ में", introHeading: "Creation Health DMCA / कॉपीराइट नीति", contactHeading: "वापसी", contactBody: "", returnHome: "Astrology Today पर लौटें" },
    ur: { kicker: "Creation Health", title: "DMCA / کاپی رائٹ پالیسی", summary: "Creation Health Astrology Today، LIFESPACE اور متعلقہ سروسز سے وابستہ کاپی رائٹ شکایات اور کاؤنٹر نوٹیفکیشنز کا کیسے جواب دیتا ہے۔", meta: [["لاگو", "Astrology Today، LIFESPACE اور متعلقہ Creation Health سروسز"], ["رابطہ", "mariosbardella@protonmail.com"]], sidebarLabel: "اس دستاویز میں", introHeading: "Creation Health DMCA / کاپی رائٹ پالیسی", contactHeading: "واپسی", contactBody: "", returnHome: "Astrology Today پر واپس جائیں" },
    sa: { kicker: "Creation Health", title: "DMCA / प्रतिलिप्यधिकारनीतिः", summary: "Creation Health Astrology Today, LIFESPACE, सम्बद्धसेवाश्च विषये प्रतिलिप्यधिकार-अभियोगानां प्रत्युत्तर-सूचनानां च कथं प्रतिस्पन्दति।", meta: [["प्रयुज्यते", "Astrology Today, LIFESPACE, सम्बद्धाः Creation Health सेवाः"], ["सम्पर्कः", "mariosbardella@protonmail.com"]], sidebarLabel: "अस्मिन् दस्तावेजे", introHeading: "Creation Health DMCA / प्रतिलिप्यधिकारनीतिः", contactHeading: "प्रत्यागमनम्", contactBody: "", returnHome: "Astrology Today प्रति प्रत्यागच्छतु" },
    pa: { kicker: "Creation Health", title: "DMCA / ਕਾਪੀਰਾਈਟ ਨੀਤੀ", summary: "Creation Health Astrology Today, LIFESPACE ਅਤੇ ਸੰਬੰਧਤ ਸੇਵਾਵਾਂ ਨਾਲ ਜੁੜੀਆਂ ਕਾਪੀਰਾਈਟ ਸ਼ਿਕਾਇਤਾਂ ਅਤੇ ਕਾਊਂਟਰ ਨੋਟਿਸਾਂ ਦਾ ਕਿਵੇਂ ਜਵਾਬ ਦਿੰਦਾ ਹੈ।", meta: [["ਲਾਗੂ", "Astrology Today, LIFESPACE ਅਤੇ ਸੰਬੰਧਤ Creation Health ਸੇਵਾਵਾਂ"], ["ਸੰਪਰਕ", "mariosbardella@protonmail.com"]], sidebarLabel: "ਇਸ ਦਸਤਾਵੇਜ਼ ਵਿੱਚ", introHeading: "Creation Health DMCA / ਕਾਪੀਰਾਈਟ ਨੀਤੀ", contactHeading: "ਵਾਪਸੀ", contactBody: "", returnHome: "Astrology Today ਤੇ ਵਾਪਸ ਜਾਓ" },
    zh: { kicker: "Creation Health", title: "DMCA / 版权政策", summary: "Creation Health 如何回应与 Astrology Today、LIFESPACE 及相关服务有关的版权投诉和反通知。", meta: [["适用对象", "Astrology Today、LIFESPACE 及相关 Creation Health 服务"], ["联系", "mariosbardella@protonmail.com"]], sidebarLabel: "本文内容", introHeading: "Creation Health DMCA / 版权政策", contactHeading: "返回", contactBody: "", returnHome: "返回 Astrology Today" },
    ja: { kicker: "Creation Health", title: "DMCA / 著作権ポリシー", summary: "Creation Health が Astrology Today、LIFESPACE、および関連サービスに関する著作権苦情や異議申し立てにどのように対応するかを説明します。", meta: [["適用対象", "Astrology Today、LIFESPACE、および関連する Creation Health サービス"], ["連絡先", "mariosbardella@protonmail.com"]], sidebarLabel: "この文書について", introHeading: "Creation Health DMCA / 著作権ポリシー", contactHeading: "戻る", contactBody: "", returnHome: "Astrology Today に戻る" },
    yue: { kicker: "Creation Health", title: "DMCA / 版權政策", summary: "Creation Health 點樣回應同 Astrology Today、LIFESPACE 同相關服務有關嘅版權投訴同反通知。", meta: [["適用對象", "Astrology Today、LIFESPACE 同相關 Creation Health 服務"], ["聯絡", "mariosbardella@protonmail.com"]], sidebarLabel: "本文件內容", introHeading: "Creation Health DMCA / 版權政策", contactHeading: "返回", contactBody: "", returnHome: "返回 Astrology Today" },
    ko: { kicker: "Creation Health", title: "DMCA / 저작권 정책", summary: "Creation Health가 Astrology Today, LIFESPACE 및 관련 서비스와 관련된 저작권 신고와 이의제기에 어떻게 대응하는지 설명합니다.", meta: [["적용 대상", "Astrology Today, LIFESPACE 및 관련 Creation Health 서비스"], ["연락처", "mariosbardella@protonmail.com"]], sidebarLabel: "이 문서에서", introHeading: "Creation Health DMCA / 저작권 정책", contactHeading: "돌아가기", contactBody: "", returnHome: "Astrology Today로 돌아가기" },
  },
  accessibility: {
    en: {
      kicker: "Creation Health",
      title: "Accessibility Statement",
      summary: "Creation Health's accessibility commitment for Astrology Today and our ongoing work to improve inclusive access across the site.",
      meta: [["Prepared", "April 11, 2026"], ["Last Review", "April 20, 2026"]],
      sidebarLabel: "In This Document",
      introHeading: "Accessibility Statement - Astrology Today",
      introParagraphs: [
        "Creation Health is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.",
      ],
      contactHeading: "Return",
      contactBody: "",
      returnHome: "Return to Astrology Today",
    },
    fr: { kicker: "Creation Health", title: "Déclaration d'accessibilité", summary: "L'engagement de Creation Health en matière d'accessibilité pour Astrology Today et notre travail continu pour améliorer l'accès inclusif sur le site.", meta: [["Préparé le", "11 avril 2026"], ["Dernière révision", "20 avril 2026"]], sidebarLabel: "Dans ce document", introHeading: "Déclaration d'accessibilité - Astrology Today", introParagraphs: ["Creation Health s'engage à garantir l'accessibilité numérique pour les personnes handicapées. Nous améliorons continuellement l'expérience utilisateur pour tous."], contactHeading: "Retour", contactBody: "", returnHome: "Retour à Astrology Today" },
    it: { kicker: "Creation Health", title: "Dichiarazione di accessibilità", summary: "L'impegno di Creation Health per l'accessibilità di Astrology Today e il nostro lavoro continuo per migliorare l'accesso inclusivo al sito.", meta: [["Preparato il", "11 aprile 2026"], ["Ultima revisione", "20 aprile 2026"]], sidebarLabel: "In questo documento", introHeading: "Dichiarazione di accessibilità - Astrology Today", introParagraphs: ["Creation Health si impegna a garantire l'accessibilità digitale alle persone con disabilità. Miglioriamo continuamente l'esperienza utente per tutti."], contactHeading: "Ritorno", contactBody: "", returnHome: "Torna a Astrology Today" },
    es: { kicker: "Creation Health", title: "Declaración de accesibilidad", summary: "El compromiso de Creation Health con la accesibilidad de Astrology Today y nuestro trabajo continuo para mejorar el acceso inclusivo en el sitio.", meta: [["Preparado el", "11 de abril de 2026"], ["Última revisión", "20 de abril de 2026"]], sidebarLabel: "En este documento", introHeading: "Declaración de accesibilidad - Astrology Today", introParagraphs: ["Creation Health se compromete a garantizar la accesibilidad digital para las personas con discapacidad. Seguimos mejorando la experiencia del usuario para todos."], contactHeading: "Volver", contactBody: "", returnHome: "Volver a Astrology Today" },
    hi: { kicker: "Creation Health", title: "सुगम्यता वक्तव्य", summary: "Astrology Today के लिए Creation Health की सुगम्यता प्रतिबद्धता और साइट पर समावेशी पहुँच बेहतर बनाने का हमारा सतत कार्य।", meta: [["तैयार", "11 अप्रैल 2026"], ["अंतिम समीक्षा", "20 अप्रैल 2026"]], sidebarLabel: "इस दस्तावेज़ में", introHeading: "सुगम्यता वक्तव्य - Astrology Today", introParagraphs: ["Creation Health दिव्यांगजनों के लिए डिजिटल सुगम्यता सुनिश्चित करने के लिए प्रतिबद्ध है। हम सभी के लिए उपयोगकर्ता अनुभव को लगातार बेहतर बना रहे हैं।"], contactHeading: "वापसी", contactBody: "", returnHome: "Astrology Today पर लौटें" },
    ur: { kicker: "Creation Health", title: "رسائی کا بیان", summary: "Astrology Today کے لیے Creation Health کی رسائی سے متعلق وابستگی اور سائٹ پر شمولیتی رسائی بہتر بنانے کی ہماری مسلسل کاوش۔", meta: [["تیار کیا گیا", "11 اپریل 2026"], ["آخری جائزہ", "20 اپریل 2026"]], sidebarLabel: "اس دستاویز میں", introHeading: "رسائی کا بیان - Astrology Today", introParagraphs: ["Creation Health معذور افراد کے لیے ڈیجیٹل رسائی یقینی بنانے کے لیے پُرعزم ہے۔ ہم سب کے لیے صارف تجربے کو مسلسل بہتر بنا رہے ہیں۔"], contactHeading: "واپسی", contactBody: "", returnHome: "Astrology Today پر واپس جائیں" },
    sa: { kicker: "Creation Health", title: "सुलभता-वक्तव्यम्", summary: "Astrology Today विषये Creation Health इत्यस्य सुलभतासंकल्पः, जालस्थले समावेशीप्रवेशस्य उन्नयनार्थं सततप्रयत्नश्च।", meta: [["प्रस्तुतम्", "11 अप्रैल 2026"], ["अन्तिमसमीक्षा", "20 अप्रैल 2026"]], sidebarLabel: "अस्मिन् दस्तावेजे", introHeading: "सुलभता-वक्तव्यम् - Astrology Today", introParagraphs: ["Creation Health दिव्याङ्गजनानां कृते डिजिटल-सुलभतां सुनिश्चितुं प्रतिबद्धम् अस्ति। वयं सर्वेषां कृते उपयोक्तृ-अनुभवं निरन्तरं सुधारयामः।"], contactHeading: "प्रत्यागमनम्", contactBody: "", returnHome: "Astrology Today प्रति प्रत्यागच्छतु" },
    pa: { kicker: "Creation Health", title: "ਪਹੁੰਚਯੋਗਤਾ ਬਿਆਨ", summary: "Astrology Today ਲਈ Creation Health ਦੀ ਪਹੁੰਚਯੋਗਤਾ ਵਚਨਬੱਧਤਾ ਅਤੇ ਸਾਈਟ ਉੱਤੇ ਸਮਾਵੇਸ਼ੀ ਪਹੁੰਚ ਸੁਧਾਰਨ ਲਈ ਸਾਡਾ ਲਗਾਤਾਰ ਕੰਮ।", meta: [["ਤਿਆਰ ਕੀਤਾ", "11 ਅਪ੍ਰੈਲ 2026"], ["ਆਖਰੀ ਸਮੀਖਿਆ", "20 ਅਪ੍ਰੈਲ 2026"]], sidebarLabel: "ਇਸ ਦਸਤਾਵੇਜ਼ ਵਿੱਚ", introHeading: "ਪਹੁੰਚਯੋਗਤਾ ਬਿਆਨ - Astrology Today", introParagraphs: ["Creation Health ਅਪਾਹਜ ਲੋਕਾਂ ਲਈ ਡਿਜ਼ਿਟਲ ਪਹੁੰਚਯੋਗਤਾ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਵਚਨਬੱਧ ਹੈ। ਅਸੀਂ ਸਭ ਲਈ ਯੂਜ਼ਰ ਅਨੁਭਵ ਲਗਾਤਾਰ ਬਿਹਤਰ ਕਰ ਰਹੇ ਹਾਂ।"], contactHeading: "ਵਾਪਸੀ", contactBody: "", returnHome: "Astrology Today ਤੇ ਵਾਪਸ ਜਾਓ" },
    zh: { kicker: "Creation Health", title: "无障碍声明", summary: "Creation Health 对 Astrology Today 的无障碍承诺，以及我们持续改进网站包容性访问体验的工作。", meta: [["编制日期", "2026年4月11日"], ["最后审查", "2026年4月20日"]], sidebarLabel: "本文内容", introHeading: "无障碍声明 - Astrology Today", introParagraphs: ["Creation Health 致力于确保残障人士能够获得数字无障碍体验。我们正在持续改进所有人的使用体验。"], contactHeading: "返回", contactBody: "", returnHome: "返回 Astrology Today" },
    ja: { kicker: "Creation Health", title: "アクセシビリティ声明", summary: "Astrology Today における Creation Health のアクセシビリティへの取り組みと、サイト全体の包括的なアクセス改善に向けた継続的な作業について。", meta: [["作成日", "2026年4月11日"], ["最終確認日", "2026年4月20日"]], sidebarLabel: "この文書について", introHeading: "アクセシビリティ声明 - Astrology Today", introParagraphs: ["Creation Health は、障害のある方々のためにデジタルアクセシビリティを確保することに取り組んでいます。すべての人にとっての利用体験を継続的に改善しています。"], contactHeading: "戻る", contactBody: "", returnHome: "Astrology Today に戻る" },
    yue: { kicker: "Creation Health", title: "無障礙聲明", summary: "Creation Health 對 Astrology Today 無障礙體驗嘅承諾，以及我哋持續改善網站包容性使用體驗嘅工作。", meta: [["編製日期", "2026年4月11日"], ["最後檢視", "2026年4月20日"]], sidebarLabel: "本文件內容", introHeading: "無障礙聲明 - Astrology Today", introParagraphs: ["Creation Health 致力確保殘障人士可以獲得數碼無障礙體驗。我哋會持續改善每一位用戶嘅體驗。"], contactHeading: "返回", contactBody: "", returnHome: "返回 Astrology Today" },
    ko: { kicker: "Creation Health", title: "접근성 안내문", summary: "Astrology Today를 위한 Creation Health의 접근성 약속과 사이트 전반의 포용적 접근 개선을 위한 지속적인 노력입니다.", meta: [["작성일", "2026년 4월 11일"], ["마지막 검토", "2026년 4월 20일"]], sidebarLabel: "이 문서에서", introHeading: "접근성 안내문 - Astrology Today", introParagraphs: ["Creation Health는 장애가 있는 사람들을 위한 디지털 접근성을 보장하기 위해 노력하고 있습니다. 모두를 위한 사용자 경험을 지속적으로 개선하고 있습니다."], contactHeading: "돌아가기", contactBody: "", returnHome: "Astrology Today로 돌아가기" },
  },
};

export function getHomeCopy(locale: SupportedLocale): HomeCopy {
  return homeCopy[locale] ?? homeCopy[defaultLocale];
}

export function getLegalCopy(
  page: "siteRules" | "terms" | "privacy" | "dmca" | "accessibility",
  locale: SupportedLocale,
): LegalPageCopy {
  return legalCopy[page][locale] ?? legalCopy[page][defaultLocale];
}
