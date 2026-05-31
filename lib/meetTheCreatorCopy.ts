import { defaultLocale, type SupportedLocale } from "./i18n";

type BookCopy = {
  title: string;
  description: string;
};

export type MeetTheCreatorCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  pageTitle: string;
  intro: string;
  fusionTitle: string;
  fusionBody: string;
  fusionSecond: string;
  innovationsTitle: string;
  innovationsBody: string;
  innovationsFollow: string;
  creationVisionTitle: string;
  creationVisionBody: string;
  conceptImageAlt: string;
  conceptCaption: string;
  creationFeaturesLead: string;
  creationHealthFeatures: string[];
  authorTitle: string;
  authorLead: string;
  upcomingBooks: BookCopy[];
  professionalBackgroundTitle: string;
  professionalBackgroundBody: string[];
  workWithMarioTitle: string;
  workWithMarioBody: string[];
  servicesLead: string;
  services: string[];
  locationLabel: string;
  locationValue: string;
  bookSessionLabel: [string, string, string];
  backToAstrologyToday: string;
  lightboxClose: string;
  lightboxAlt: string;
  lightboxCaption: string;
};

const en: MeetTheCreatorCopy = {
  metaTitle: "Meet the Creator | Astrology Today",
  metaDescription:
    "Learn more about Mario Sbardella, the creator behind Astrology Today, LIFESPACE, and Creation Health.",
  eyebrow: "Astrology Today",
  pageTitle: "Meet the Creator",
  intro:
    "Mario Sbardella is a Toronto-based holistic mental health practitioner, writer, and astrologer dedicated to a visionary reform of the psychiatric landscape. His practice is built upon a compassionate, non-pathologizing, and soul-centered approach that seeks to move beyond mere symptom suppression toward the full restoration of the person: body, mind, and spirit.",
  fusionTitle: "A Fusion of Science and Spirit",
  fusionBody:
    "Mario's therapeutic philosophy bridges the gap between modern neuroscience and ancient spiritual wisdom. By combining traditional psychotherapy with lenses such as astrology, yoga, and meditation, he helps clients gain profound clarity into their behaviors and relationship patterns.",
  fusionSecond:
    "He was first awakened to spirituality following a formative experience which began a personal relationship with Jesus Christ, whom he views as a central figure in spiritual purification and personal development.",
  innovationsTitle: "Innovations in Wellness",
  innovationsBody:
    "This brand of psychology integrates signature wellness models designed to support recovery from complex conditions, including anxiety, bipolar disorder, ADHD, and schizophrenia. Through lifestyle transformation and integrative therapy, patients come to realize their full potential and become able to reintegrate into society.",
  innovationsFollow:
    "In addition to LIFESPACE, Mario developed the Relationship Rorschach Test™, a specialized tool for therapists to help couples explore unconscious emotions and gain deeper insights into their shared dynamics.",
  creationVisionTitle: "Creation Health: A Visionary Wellness Community",
  creationVisionBody:
    "Mario's plan culminates in the establishment of Creation Health, a revolutionary healing arts and spirituality brand. This visionary wellness community concept is designed to replace traditional psychiatric in-patient programs with a self-sufficient operational model.",
  conceptImageAlt: "Concept art for the Creation Health wellness community",
  conceptCaption:
    "Creation Health Mockup: An outdoor psychiatric inpatient/outpatient program",
  creationFeaturesLead: "The Creation Health facility is envisioned as a space featuring:",
  creationHealthFeatures: [
    "Psychotherapy and skill-building centers.",
    "Gardens, meditation areas, and fitness facilities.",
    "Occupational therapy through community contribution (e.g., landscaping and cooking).",
    "A research center for professionals to study the efficacy of holistic, non-drug-based recovery models.",
  ],
  authorTitle: "Author & Researcher",
  authorLead:
    "As an independent researcher and a Top 1,000 writer on Medium, Mario's work emphasizes medical autonomy and the limitations of forced medicalization. His upcoming books include:",
  upcomingBooks: [
    {
      title: "The Neurotransmitter Food Bible",
      description:
        "A nutritional guide for the treatment of various psychological disorders that explores the critical link between diet and mental health.",
    },
    {
      title: "We Don't Hear Voices, We Are the Voices",
      description:
        "A non-fiction exploration of schizophrenia recovery, including over 100+ interviews that detail the harrowing experiences of those who suffered under psychiatric malpractice.",
    },
    {
      title: "LIFESPACE: Theory and Methods",
      description:
        "Scientific methods for brain optimization, neuroplasticity, and sustainable mental restoration through soul-centered care and holistic lifestyle transformation.",
    },
    {
      title: "Spiritual Psychometrics",
      description:
        "A comprehensive guide which provides tools for understanding behavioral patterns through the lens of astrology, as well as qualitative and quantitative psychometric frameworks.",
    },
  ],
  professionalBackgroundTitle: "Professional Background",
  professionalBackgroundBody: [
    "Mario holds a Bachelor of Arts (Honours) in Psychology from the University of Ottawa and is currently pursuing an MSc in Psychology. His diverse experience ranges from running a successful landscaping business, GardenStyle, which he utilized as a form of occupational therapy for clients, to providing psychospiritual counseling in faith-based and digital peer-support environments.",
    "In 2016, he began a YouTube channel dedicated to spirituality-focused documentaries that have amassed millions of views across his body of online work. He has also won two prizes for his writing and been listed in the Top 500 Writers on Medium.com for his articles on NASA and SpaceX.",
  ],
  workWithMarioTitle: "Work With Mario",
  workWithMarioBody: [
    "Sessions are judgment-free, gender-inclusive, and trauma-aware. Whether you are seeking clarity in your career, your relationships, or your personal wellness journey, Mario offers a safe space to explore your path naturally.",
  ],
  servicesLead: "Services include:",
  services: [
    "Detailed astrological readings and counseling",
    "Relationship and compatibility insights",
    "Career direction guidance",
    "Personalized life coaching and practical wellness plans",
  ],
  locationLabel: "Location:",
  locationValue: "Available online via Zoom or in-person in Toronto, Ontario.",
  bookSessionLabel: ["Book", "a", "Session"],
  backToAstrologyToday: "Back to Astrology Today",
  lightboxClose: "Close",
  lightboxAlt: "Creation Health concept image enlarged",
  lightboxCaption:
    "Creation Health Mockup: An outdoor psychiatric inpatient/outpatient program",
};

const meetTheCreatorCopy: Partial<Record<SupportedLocale, MeetTheCreatorCopy>> = {
  en,
  fr: {
    ...en,
    pageTitle: "Rencontrer le créateur",
    metaTitle: "Rencontrer le créateur | Astrology Today",
    metaDescription:
      "Découvrez Mario Sbardella, le créateur d'Astrology Today, de LIFESPACE et de Creation Health.",
    intro:
      "Mario Sbardella est un praticien torontois en santé mentale holistique, écrivain et astrologue, engagé dans une réforme visionnaire du paysage psychiatrique. Sa pratique repose sur une approche compatissante, non pathologisante et centrée sur l'âme, qui cherche à aller au-delà de la simple suppression des symptômes pour viser la restauration complète de la personne : corps, esprit et dimension spirituelle.",
    fusionTitle: "Une fusion de science et d'esprit",
    fusionBody:
      "La philosophie thérapeutique de Mario comble l'écart entre les neurosciences modernes et la sagesse spirituelle ancienne. En combinant la psychothérapie traditionnelle avec des approches comme l'astrologie, le yoga et la méditation, il aide ses clients à mieux comprendre leurs comportements et leurs schémas relationnels.",
    fusionSecond:
      "Il s'est d'abord éveillé à la spiritualité à la suite d'une expérience formatrice qui a inauguré une relation personnelle avec Jésus-Christ, qu'il considère comme une figure centrale de la purification spirituelle et du développement personnel.",
    innovationsTitle: "Innovations en mieux-être",
    innovationsBody:
      "Cette approche psychologique intègre des modèles de mieux-être distinctifs conçus pour soutenir le rétablissement face à des conditions complexes, notamment l'anxiété, le trouble bipolaire, le TDAH et la schizophrénie. Grâce à la transformation du mode de vie et à une thérapie intégrative, les patients peuvent réaliser leur plein potentiel et réintégrer la société.",
    innovationsFollow:
      "En plus de LIFESPACE, Mario a développé le Relationship Rorschach Test™, un outil spécialisé qui aide les thérapeutes de couple à explorer les émotions inconscientes et à approfondir la compréhension des dynamiques partagées.",
    creationVisionTitle: "Creation Health : une communauté visionnaire de mieux-être",
    creationVisionBody:
      "Le projet de Mario culmine dans la création de Creation Health, une marque révolutionnaire dédiée aux arts de la guérison et à la spiritualité. Ce concept de communauté visionnaire de mieux-être est conçu pour remplacer les programmes psychiatriques d'hospitalisation traditionnels par un modèle autonome et autosuffisant.",
    conceptImageAlt: "Illustration conceptuelle de la communauté de mieux-être Creation Health",
    conceptCaption:
      "Maquette de Creation Health : un programme psychiatrique extérieur avec services en interne et en consultation externe",
    creationFeaturesLead:
      "L'établissement Creation Health est imaginé comme un espace comprenant :",
    creationHealthFeatures: [
      "Des centres de psychothérapie et de développement des compétences.",
      "Des jardins, des espaces de méditation et des installations d'entraînement.",
      "De l'ergothérapie par la contribution communautaire (par ex. aménagement paysager et cuisine).",
      "Un centre de recherche permettant aux professionnels d'étudier l'efficacité des modèles holistiques de rétablissement sans médicaments.",
    ],
    authorTitle: "Auteur et chercheur",
    authorLead:
      "En tant que chercheur indépendant et auteur figurant parmi les meilleurs sur Medium, le travail de Mario met l'accent sur l'autonomie médicale et les limites de la médicalisation forcée. Ses ouvrages à venir comprennent :",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "Un guide nutritionnel pour le traitement de divers troubles psychologiques, explorant le lien essentiel entre l'alimentation et la santé mentale." },
      { title: "We Don't Hear Voices, We Are the Voices", description: "Une enquête documentaire sur le rétablissement de la schizophrénie, incluant plus de 100 entretiens décrivant les expériences éprouvantes de personnes ayant souffert de maltraitance psychiatrique." },
      { title: "LIFESPACE: Theory and Methods", description: "Des méthodes scientifiques d'optimisation cérébrale, de neuroplasticité et de restauration mentale durable par des soins holistiques centrés sur l'âme." },
      { title: "Spiritual Psychometrics", description: "Un guide complet offrant des outils pour comprendre les schémas comportementaux à travers le prisme de l'astrologie ainsi que des cadres psychométriques qualitatifs et quantitatifs." },
    ],
    professionalBackgroundTitle: "Parcours professionnel",
    professionalBackgroundBody: [
      "Mario est titulaire d'un baccalauréat spécialisé en psychologie de l'Université d'Ottawa et poursuit actuellement une maîtrise en psychologie. Son expérience variée va de la gestion de son entreprise d'aménagement paysager, GardenStyle, qu'il utilisait comme forme d'ergothérapie pour ses clients, au counseling psychospirituel dans des milieux confessionnels et des espaces d'entraide numériques.",
      "En 2016, il a lancé une chaîne YouTube consacrée à des documentaires spirituels qui ont cumulé des millions de vues dans l'ensemble de son travail en ligne. Il a aussi remporté deux prix pour son écriture et figuré parmi les 500 meilleurs auteurs de Medium.com pour ses articles sur la NASA et SpaceX.",
    ],
    workWithMarioTitle: "Travailler avec Mario",
    workWithMarioBody: [
      "Les séances sont sans jugement, inclusives de genre et attentives aux traumatismes. Que vous cherchiez de la clarté dans votre carrière, vos relations ou votre parcours personnel de mieux-être, Mario offre un espace sûr pour explorer votre chemin de manière naturelle.",
    ],
    servicesLead: "Les services comprennent :",
    services: [
      "Lectures astrologiques détaillées et accompagnement",
      "Éclairage relationnel et compatibilité",
      "Orientation de carrière",
      "Coaching de vie personnalisé et plans de mieux-être pratiques",
    ],
    locationLabel: "Lieu :",
    locationValue: "Disponible en ligne via Zoom ou en personne à Toronto, Ontario.",
    bookSessionLabel: ["Réserver", "une", "séance"],
    backToAstrologyToday: "Retour à Astrology Today",
    lightboxClose: "Fermer",
    lightboxAlt: "Image agrandie du concept Creation Health",
    lightboxCaption:
      "Maquette de Creation Health : un programme psychiatrique extérieur avec services en interne et en consultation externe",
  },
  it: {
    ...en,
    pageTitle: "Incontra il creatore",
    metaTitle: "Incontra il creatore | Astrology Today",
    metaDescription:
      "Scopri Mario Sbardella, il creatore di Astrology Today, LIFESPACE e Creation Health.",
    eyebrow: "Astrology Today",
    intro:
      "Mario Sbardella è un professionista di Toronto nel campo della salute mentale olistica, scrittore e astrologo, impegnato in una riforma visionaria del panorama psichiatrico. La sua pratica si fonda su un approccio compassionevole, non patologizzante e centrato sull'anima, che mira ad andare oltre la semplice soppressione dei sintomi verso il pieno ripristino della persona: corpo, mente e spirito.",
    fusionTitle: "Una fusione di scienza e spirito",
    fusionBody:
      "La filosofia terapeutica di Mario colma il divario tra le neuroscienze moderne e l'antica saggezza spirituale. Combinando la psicoterapia tradizionale con strumenti come astrologia, yoga e meditazione, aiuta i clienti a comprendere con maggiore profondità i propri comportamenti e schemi relazionali.",
    fusionSecond:
      "Il suo risveglio spirituale è iniziato dopo un'esperienza formativa che ha dato avvio a un rapporto personale con Gesù Cristo, che considera una figura centrale nella purificazione spirituale e nello sviluppo personale.",
    innovationsTitle: "Innovazioni nel benessere",
    innovationsBody:
      "Questo approccio psicologico integra modelli distintivi di benessere pensati per sostenere il recupero da condizioni complesse, tra cui ansia, disturbo bipolare, ADHD e schizofrenia. Attraverso la trasformazione dello stile di vita e la terapia integrativa, i pazienti possono realizzare il proprio potenziale e reintegrarsi nella società.",
    innovationsFollow:
      "Oltre a LIFESPACE, Mario ha sviluppato il Relationship Rorschach Test™, uno strumento specializzato che aiuta i terapeuti di coppia a esplorare emozioni inconsce e a comprendere più a fondo le dinamiche condivise.",
    creationVisionTitle: "Creation Health: una comunità visionaria per il benessere",
    creationVisionBody:
      "Il progetto di Mario culmina nella creazione di Creation Health, un marchio rivoluzionario dedicato alle arti della guarigione e alla spiritualità. Questo concetto di comunità visionaria per il benessere è pensato per sostituire i tradizionali programmi psichiatrici di ricovero con un modello autosufficiente.",
    conceptImageAlt: "Concept art della comunità di benessere Creation Health",
    conceptCaption:
      "Mockup di Creation Health: un programma psichiatrico all'aperto per pazienti interni ed esterni",
    creationFeaturesLead: "La struttura Creation Health è immaginata come uno spazio con:",
    creationHealthFeatures: [
      "Centri di psicoterapia e sviluppo delle competenze.",
      "Giardini, aree di meditazione e strutture per il fitness.",
      "Terapia occupazionale attraverso il contributo alla comunità (ad esempio paesaggistica e cucina).",
      "Un centro di ricerca in cui i professionisti possano studiare l'efficacia di modelli di recupero olistici e non farmacologici.",
    ],
    authorTitle: "Autore e ricercatore",
    authorLead:
      "Come ricercatore indipendente e autore di punta su Medium, il lavoro di Mario sottolinea l'autonomia medica e i limiti della medicalizzazione forzata. Tra i suoi libri in preparazione figurano:",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "Una guida nutrizionale per il trattamento di diversi disturbi psicologici che esplora il legame fondamentale tra alimentazione e salute mentale." },
      { title: "We Don't Hear Voices, We Are the Voices", description: "Un'esplorazione narrativa del recupero dalla schizofrenia, con oltre 100 interviste che raccontano le dure esperienze vissute da chi ha sofferto a causa di malpractice psichiatrica." },
      { title: "LIFESPACE: Theory and Methods", description: "Metodi scientifici per l'ottimizzazione cerebrale, la neuroplasticità e un ripristino mentale sostenibile attraverso cure olistiche centrate sull'anima." },
      { title: "Spiritual Psychometrics", description: "Una guida completa che offre strumenti per comprendere i modelli comportamentali attraverso il prisma dell'astrologia e attraverso quadri psicometrici qualitativi e quantitativi." },
    ],
    professionalBackgroundTitle: "Percorso professionale",
    professionalBackgroundBody: [
      "Mario ha conseguito una laurea con lode in Psicologia presso l'Università di Ottawa e sta attualmente proseguendo con un MSc in Psicologia. La sua esperienza spazia dalla gestione di un'attività di successo nel landscaping, GardenStyle, usata anche come forma di terapia occupazionale per i clienti, al counseling psicospirituale in contesti di fede e di supporto digitale tra pari.",
      "Nel 2016 ha avviato un canale YouTube dedicato a documentari sulla spiritualità che hanno accumulato milioni di visualizzazioni nel complesso del suo lavoro online. Ha inoltre vinto due premi per la scrittura ed è stato inserito tra i Top 500 Writers di Medium.com per i suoi articoli su NASA e SpaceX.",
    ],
    workWithMarioTitle: "Lavora con Mario",
    workWithMarioBody: [
      "Le sessioni sono prive di giudizio, inclusive rispetto al genere e attente al trauma. Che tu stia cercando chiarezza nella carriera, nelle relazioni o nel tuo percorso di benessere, Mario offre uno spazio sicuro per esplorare la tua strada in modo naturale.",
    ],
    servicesLead: "I servizi includono:",
    services: [
      "Letture astrologiche dettagliate e counseling",
      "Approfondimenti su relazioni e compatibilità",
      "Orientamento professionale",
      "Life coaching personalizzato e piani pratici di benessere",
    ],
    locationLabel: "Sede:",
    locationValue: "Disponibile online via Zoom oppure di persona a Toronto, Ontario.",
    bookSessionLabel: ["Prenota", "una", "Sessione"],
    backToAstrologyToday: "Torna a Astrology Today",
    lightboxClose: "Chiudi",
    lightboxAlt: "Immagine ingrandita del concept di Creation Health",
    lightboxCaption:
      "Mockup di Creation Health: un programma psichiatrico all'aperto per pazienti interni ed esterni",
  },
  es: {
    ...en,
    pageTitle: "Conoce al creador",
    metaTitle: "Conoce al creador | Astrology Today",
    metaDescription:
      "Descubre a Mario Sbardella, el creador de Astrology Today, LIFESPACE y Creation Health.",
    intro:
      "Mario Sbardella es un profesional de salud mental holística, escritor y astrólogo radicado en Toronto, dedicado a una reforma visionaria del panorama psiquiátrico. Su práctica se basa en un enfoque compasivo, no patologizante y centrado en el alma, que busca ir más allá de la mera supresión de síntomas hacia la restauración integral de la persona: cuerpo, mente y espíritu.",
    fusionTitle: "Una fusión de ciencia y espíritu",
    fusionBody:
      "La filosofía terapéutica de Mario tiende un puente entre la neurociencia moderna y la antigua sabiduría espiritual. Al combinar la psicoterapia tradicional con perspectivas como la astrología, el yoga y la meditación, ayuda a sus clientes a obtener una comprensión más profunda de sus conductas y patrones relacionales.",
    fusionSecond:
      "Su despertar espiritual comenzó tras una experiencia formativa que inició una relación personal con Jesucristo, a quien considera una figura central en la purificación espiritual y el desarrollo personal.",
    innovationsTitle: "Innovaciones en el bienestar",
    innovationsBody:
      "Esta línea psicológica integra modelos distintivos de bienestar diseñados para apoyar la recuperación de condiciones complejas, como ansiedad, trastorno bipolar, TDAH y esquizofrenia. A través de la transformación del estilo de vida y la terapia integradora, los pacientes pueden desarrollar su pleno potencial y reintegrarse en la sociedad.",
    innovationsFollow:
      "Además de LIFESPACE, Mario desarrolló el Relationship Rorschach Test™, una herramienta especializada que ayuda a terapeutas de pareja a explorar emociones inconscientes y comprender con mayor profundidad sus dinámicas compartidas.",
    creationVisionTitle: "Creation Health: una comunidad visionaria de bienestar",
    creationVisionBody:
      "El plan de Mario culmina en la creación de Creation Health, una marca revolucionaria de artes sanadoras y espiritualidad. Este concepto de comunidad visionaria de bienestar está diseñado para reemplazar los programas psiquiátricos tradicionales de internación por un modelo autosuficiente.",
    conceptImageAlt: "Arte conceptual de la comunidad de bienestar Creation Health",
    conceptCaption:
      "Maqueta de Creation Health: un programa psiquiátrico al aire libre para atención interna y ambulatoria",
    creationFeaturesLead: "La instalación de Creation Health está concebida como un espacio con:",
    creationHealthFeatures: [
      "Centros de psicoterapia y desarrollo de habilidades.",
      "Jardines, áreas de meditación e instalaciones de ejercicio.",
      "Terapia ocupacional mediante la contribución comunitaria (por ejemplo, jardinería y cocina).",
      "Un centro de investigación para que profesionales estudien la eficacia de modelos de recuperación holísticos y no farmacológicos.",
    ],
    authorTitle: "Autor e investigador",
    authorLead:
      "Como investigador independiente y uno de los principales escritores en Medium, el trabajo de Mario pone énfasis en la autonomía médica y en las limitaciones de la medicalización forzada. Entre sus próximos libros se encuentran:",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "Una guía nutricional para el tratamiento de diversos trastornos psicológicos que explora el vínculo crítico entre la alimentación y la salud mental." },
      { title: "We Don't Hear Voices, We Are the Voices", description: "Una exploración de no ficción sobre la recuperación de la esquizofrenia, con más de 100 entrevistas que detallan las experiencias durísimas de personas que sufrieron malas prácticas psiquiátricas." },
      { title: "LIFESPACE: Theory and Methods", description: "Métodos científicos para la optimización cerebral, la neuroplasticidad y la restauración mental sostenible mediante una atención holística centrada en el alma." },
      { title: "Spiritual Psychometrics", description: "Una guía integral que ofrece herramientas para comprender patrones de conducta a través del prisma de la astrología, así como marcos psicométricos cualitativos y cuantitativos." },
    ],
    professionalBackgroundTitle: "Trayectoria profesional",
    professionalBackgroundBody: [
      "Mario posee una Licenciatura con Honores en Psicología por la Universidad de Ottawa y actualmente cursa una Maestría en Psicología. Su experiencia diversa abarca desde dirigir un exitoso negocio de paisajismo, GardenStyle, que utilizó como forma de terapia ocupacional para clientes, hasta ofrecer acompañamiento psicoespiritual en entornos religiosos y de apoyo digital entre pares.",
      "En 2016 comenzó un canal de YouTube dedicado a documentales con enfoque espiritual que han acumulado millones de visualizaciones a lo largo de su trabajo en línea. También ha ganado dos premios por su escritura y fue incluido entre los 500 mejores escritores de Medium.com por sus artículos sobre NASA y SpaceX.",
    ],
    workWithMarioTitle: "Trabaja con Mario",
    workWithMarioBody: [
      "Las sesiones están libres de juicio, son inclusivas en términos de género y sensibles al trauma. Ya sea que busques claridad en tu carrera, en tus relaciones o en tu camino de bienestar personal, Mario ofrece un espacio seguro para explorar tu trayectoria de manera natural.",
    ],
    servicesLead: "Los servicios incluyen:",
    services: [
      "Lecturas astrológicas detalladas y acompañamiento",
      "Perspectivas sobre relaciones y compatibilidad",
      "Orientación profesional",
      "Coaching de vida personalizado y planes prácticos de bienestar",
    ],
    locationLabel: "Ubicación:",
    locationValue: "Disponible en línea por Zoom o en persona en Toronto, Ontario.",
    bookSessionLabel: ["Reserva", "una", "Sesión"],
    backToAstrologyToday: "Volver a Astrology Today",
    lightboxClose: "Cerrar",
    lightboxAlt: "Imagen ampliada del concepto Creation Health",
    lightboxCaption:
      "Maqueta de Creation Health: un programa psiquiátrico al aire libre para atención interna y ambulatoria",
  },
  hi: {
    ...en,
    pageTitle: "निर्माता से मिलें",
    metaTitle: "निर्माता से मिलें | Astrology Today",
    metaDescription:
      "Mario Sbardella के बारे में जानें, जो Astrology Today, LIFESPACE और Creation Health के निर्माता हैं।",
    intro:
      "Mario Sbardella टोरंटो स्थित समग्र मानसिक स्वास्थ्य साधक, लेखक और ज्योतिषी हैं, जो मनोचिकित्सा जगत में दूरदर्शी सुधार के लिए समर्पित हैं। उनका कार्य करुणामय, गैर-रोगीकरणकारी और आत्मा-केंद्रित दृष्टिकोण पर आधारित है, जिसका उद्देश्य केवल लक्षण-दमन से आगे बढ़कर व्यक्ति के शरीर, मन और आत्मा की संपूर्ण पुनर्स्थापना करना है।",
    fusionTitle: "विज्ञान और आत्मा का संगम",
    fusionBody:
      "Mario का उपचार-दर्शन आधुनिक न्यूरोसाइंस और प्राचीन आध्यात्मिक ज्ञान के बीच पुल बनाता है। पारंपरिक मनोचिकित्सा को ज्योतिष, योग और ध्यान जैसी दृष्टियों के साथ जोड़कर वे लोगों को अपने व्यवहार और संबंध-पैटर्न को गहराई से समझने में सहायता करते हैं।",
    fusionSecond:
      "उनका आध्यात्मिक जागरण एक गहन अनुभव से शुरू हुआ, जिसने यीशु मसीह के साथ उनके व्यक्तिगत संबंध की शुरुआत की। वे यीशु को आध्यात्मिक शुद्धिकरण और व्यक्तिगत विकास की केंद्रीय आकृति मानते हैं।",
    innovationsTitle: "वेलनेस में नवाचार",
    innovationsBody:
      "यह मनोवैज्ञानिक दृष्टिकोण ऐसे विशिष्ट वेलनेस मॉडलों को समाहित करता है जो चिंता, बाइपोलर डिसऑर्डर, ADHD और स्किज़ोफ्रेनिया जैसी जटिल स्थितियों से उबरने में सहायता के लिए बनाए गए हैं। जीवनशैली परिवर्तन और समेकित चिकित्सा के माध्यम से लोग अपनी पूर्ण क्षमता को पहचानते हैं और समाज में पुनः सक्रिय हो पाते हैं।",
    innovationsFollow:
      "LIFESPACE के अतिरिक्त, Mario ने Relationship Rorschach Test™ विकसित किया, जो दंपत्ति-चिकित्सकों के लिए एक विशेष उपकरण है और साझा संबंध-गतियों की गहरी समझ के लिए अवचेतन भावनाओं की खोज में मदद करता है।",
    creationVisionTitle: "Creation Health: एक दूरदर्शी वेलनेस समुदाय",
    creationVisionBody:
      "Mario की योजना Creation Health की स्थापना में पूर्ण होती है, जो उपचार-कला और आध्यात्मिकता पर आधारित एक क्रांतिकारी ब्रांड है। यह दूरदर्शी वेलनेस समुदाय पारंपरिक मनोचिकित्सीय इन-पेशेंट कार्यक्रमों की जगह एक आत्मनिर्भर मॉडल प्रस्तुत करता है।",
    conceptImageAlt: "Creation Health वेलनेस समुदाय की अवधारणा-चित्र",
    conceptCaption:
      "Creation Health मॉकअप: बाहरी मनोचिकित्सीय इन-पेशेंट/आउट-पेशेंट कार्यक्रम",
    creationFeaturesLead: "Creation Health सुविधा की परिकल्पना ऐसे स्थान के रूप में की गई है जिसमें हों:",
    creationHealthFeatures: [
      "मनोचिकित्सा और कौशल-विकास केंद्र।",
      "उद्यान, ध्यान-स्थल और फिटनेस सुविधाएँ।",
      "सामुदायिक योगदान के माध्यम से व्यावसायिक चिकित्सा (जैसे लैंडस्केपिंग और पाक-कला)।",
      "ऐसा शोध केंद्र जहाँ विशेषज्ञ समग्र, गैर-दवा-आधारित पुनर्प्राप्ति मॉडलों की प्रभावशीलता का अध्ययन कर सकें।",
    ],
    authorTitle: "लेखक और शोधकर्ता",
    authorLead:
      "स्वतंत्र शोधकर्ता और Medium पर शीर्ष लेखकों में से एक के रूप में, Mario का कार्य चिकित्सा स्वायत्तता और जबरन चिकित्साकरण की सीमाओं पर बल देता है। उनकी आगामी पुस्तकें हैं:",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "विभिन्न मनोवैज्ञानिक विकारों के उपचार के लिए एक पोषण-मार्गदर्शिका, जो आहार और मानसिक स्वास्थ्य के महत्वपूर्ण संबंध को समझाती है।" },
      { title: "We Don't Hear Voices, We Are the Voices", description: "स्किज़ोफ्रेनिया से उबरने की एक गैर-कथात्मक पड़ताल, जिसमें 100 से अधिक साक्षात्कार शामिल हैं और मनोचिकित्सीय दुरुपयोग झेलने वालों के अनुभवों का विवरण है।" },
      { title: "LIFESPACE: Theory and Methods", description: "मस्तिष्क अनुकूलन, न्यूरोप्लास्टिसिटी और आत्मा-केंद्रित समग्र देखभाल के माध्यम से स्थायी मानसिक पुनर्स्थापना की वैज्ञानिक विधियाँ।" },
      { title: "Spiritual Psychometrics", description: "एक व्यापक मार्गदर्शिका जो ज्योतिष के दृष्टिकोण से व्यवहार-पैटर्न समझने और गुणात्मक व मात्रात्मक मनोमितीय ढाँचों के लिए उपकरण प्रदान करती है।" },
    ],
    professionalBackgroundTitle: "व्यावसायिक पृष्ठभूमि",
    professionalBackgroundBody: [
      "Mario ने University of Ottawa से मनोविज्ञान में ऑनर्स के साथ Bachelor of Arts प्राप्त किया है और वर्तमान में मनोविज्ञान में MSc कर रहे हैं। उनका विविध अनुभव सफल लैंडस्केपिंग व्यवसाय GardenStyle चलाने से लेकर, जिसे उन्होंने ग्राहकों के लिए occupational therapy के रूप में भी उपयोग किया, और आस्था-आधारित तथा डिजिटल peer-support परिवेशों में मनो-आध्यात्मिक परामर्श देने तक फैला है।",
      "2016 में उन्होंने आध्यात्मिक विषयों पर केंद्रित एक YouTube चैनल शुरू किया, जिसके कार्यों ने सामूहिक रूप से लाखों दर्शक प्राप्त किए। उन्होंने लेखन के लिए दो पुरस्कार भी जीते हैं और NASA तथा SpaceX पर अपने लेखों के लिए Medium.com के Top 500 Writers में शामिल हुए हैं।",
    ],
    workWithMarioTitle: "Mario के साथ कार्य करें",
    workWithMarioBody: [
      "सत्र बिना निर्णय के, जेंडर-समावेशी और ट्रॉमा-संवेदनशील होते हैं। चाहे आप अपने करियर, संबंधों या व्यक्तिगत वेलनेस यात्रा में स्पष्टता खोज रहे हों, Mario आपके मार्ग की स्वाभाविक खोज के लिए सुरक्षित स्थान प्रदान करते हैं।",
    ],
    servicesLead: "सेवाओं में शामिल हैं:",
    services: [
      "विस्तृत ज्योतिषीय रीडिंग और परामर्श",
      "संबंध और अनुकूलता पर अंतर्दृष्टि",
      "करियर दिशा-निर्देशन",
      "व्यक्तिगत जीवन-कोचिंग और व्यावहारिक वेलनेस योजनाएँ",
    ],
    locationLabel: "स्थान:",
    locationValue: "Zoom के माध्यम से ऑनलाइन या Toronto, Ontario में प्रत्यक्ष उपलब्ध।",
    bookSessionLabel: ["सत्र", "बुक", "करें"],
    backToAstrologyToday: "Astrology Today पर वापस जाएँ",
    lightboxClose: "बंद करें",
    lightboxAlt: "Creation Health अवधारणा-चित्र का बड़ा रूप",
    lightboxCaption:
      "Creation Health मॉकअप: बाहरी मनोचिकित्सीय इन-पेशेंट/आउट-पेशेंट कार्यक्रम",
  },
  ur: {
    ...en,
    pageTitle: "تخلیق کار سے ملیں",
    metaTitle: "تخلیق کار سے ملیں | Astrology Today",
    metaDescription:
      "Mario Sbardella کے بارے میں جانیں، جو Astrology Today، LIFESPACE اور Creation Health کے تخلیق کار ہیں۔",
    intro:
      "Mario Sbardella ٹورنٹو میں مقیم ایک جامع ذہنی صحت کے معالج، مصنف اور نجومی ہیں، جو نفسیاتی نظام میں ایک بصیرت افروز اصلاح کے لیے وقف ہیں۔ ان کا طریقۂ کار ہمدرد، غیر مرضیاتی اور روح پر مرکوز ہے، جس کا مقصد صرف علامات کو دبانے سے آگے بڑھ کر انسان کے جسم، ذہن اور روح کی مکمل بحالی ہے۔",
    fusionTitle: "سائنس اور روح کا امتزاج",
    fusionBody:
      "Mario کا علاجی فلسفہ جدید نیوروسائنس اور قدیم روحانی حکمت کے درمیان پل قائم کرتا ہے۔ روایتی نفسیاتی علاج کو نجوم، یوگا اور مراقبہ جیسے زاویوں کے ساتھ ملا کر وہ لوگوں کو اپنے رویوں اور تعلقاتی نمونوں کی گہری سمجھ دیتے ہیں۔",
    fusionSecond:
      "ان کی روحانی بیداری ایک اہم تجربے کے بعد شروع ہوئی جس نے یسوع مسیح کے ساتھ ان کے ذاتی تعلق کی بنیاد رکھی۔ وہ یسوع کو روحانی تطہیر اور ذاتی نشوونما کی ایک مرکزی شخصیت سمجھتے ہیں۔",
    innovationsTitle: "فلاح میں جدت",
    innovationsBody:
      "یہ نفسیاتی طرزِ فکر ایسے منفرد فلاحی ماڈلز کو یکجا کرتا ہے جو اضطراب، بائی پولر ڈس آرڈر، ADHD اور شیزوفرینیا جیسی پیچیدہ حالتوں سے بحالی کے لیے بنائے گئے ہیں۔ طرزِ زندگی میں تبدیلی اور جامع علاج کے ذریعے افراد اپنی مکمل صلاحیت کو پہچانتے ہیں اور معاشرے میں دوبارہ فعال ہو سکتے ہیں۔",
    innovationsFollow:
      "LIFESPACE کے علاوہ، Mario نے Relationship Rorschach Test™ بھی تیار کیا، جو جوڑوں کے معالجین کے لیے ایک خصوصی ذریعہ ہے اور لاشعوری جذبات اور باہمی حرکیات کو سمجھنے میں مدد دیتا ہے۔",
    creationVisionTitle: "Creation Health: ایک وژنری فلاحی کمیونٹی",
    creationVisionBody:
      "Mario کا منصوبہ Creation Health کے قیام پر منتج ہوتا ہے، جو شفائی فنون اور روحانیت پر مبنی ایک انقلابی برانڈ ہے۔ یہ وژنری فلاحی کمیونٹی روایتی نفسیاتی داخلہ پروگراموں کی جگہ ایک خود کفیل ماڈل پیش کرتی ہے۔",
    conceptImageAlt: "Creation Health فلاحی کمیونٹی کا تصوراتی خاکہ",
    conceptCaption:
      "Creation Health ماک اپ: بیرونی نفسیاتی اِن پیشنٹ اور آؤٹ پیشنٹ پروگرام",
    creationFeaturesLead: "Creation Health کی سہولت کو ایک ایسے مقام کے طور پر تصور کیا گیا ہے جس میں شامل ہوں:",
    creationHealthFeatures: [
      "نفسیاتی علاج اور مہارت سازی کے مراکز۔",
      "باغات، مراقبے کے مقامات اور فٹنس سہولیات۔",
      "کمیونٹی میں حصہ لینے کے ذریعے occupational therapy (مثلاً زمین آرائی اور کھانا پکانا)۔",
      "ایسا تحقیقی مرکز جہاں ماہرین جامع اور غیر دوائی بحالی کے ماڈلز کی افادیت کا مطالعہ کر سکیں۔",
    ],
    authorTitle: "مصنف اور محقق",
    authorLead:
      "ایک آزاد محقق اور Medium کے نمایاں لکھاری کے طور پر، Mario کا کام طبی خود مختاری اور جبری طبی کاری کی حدود پر زور دیتا ہے۔ ان کی آنے والی کتابوں میں شامل ہیں:",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "مختلف نفسیاتی عوارض کے علاج کے لیے ایک غذائی رہنما، جو خوراک اور ذہنی صحت کے اہم تعلق کو واضح کرتا ہے۔" },
      { title: "We Don't Hear Voices, We Are the Voices", description: "شیزوفرینیا سے بحالی پر ایک غیر افسانوی مطالعہ، جس میں 100 سے زائد انٹرویوز شامل ہیں جو نفسیاتی بدعملی کا شکار افراد کے تجربات بیان کرتے ہیں۔" },
      { title: "LIFESPACE: Theory and Methods", description: "دماغی بہتری، نیوروپلاسٹیسٹی اور روح پر مبنی جامع نگہداشت کے ذریعے پائیدار ذہنی بحالی کے سائنسی طریقے۔" },
      { title: "Spiritual Psychometrics", description: "ایک جامع رہنما جو نجوم کی روشنی میں رویہ جاتی نمونوں کو سمجھنے اور معیاری و مقداری psychometric frameworks کے لیے اوزار فراہم کرتی ہے۔" },
    ],
    professionalBackgroundTitle: "پیشہ ورانہ پس منظر",
    professionalBackgroundBody: [
      "Mario نے University of Ottawa سے Psychology میں Bachelor of Arts (Honours) حاصل کیا ہے اور اس وقت Psychology میں MSc کر رہے ہیں۔ ان کا تجربہ کامیاب landscaping کاروبار GardenStyle چلانے سے لے کر، جسے انہوں نے clients کے لیے occupational therapy کے طور پر بھی استعمال کیا، faith-based اور digital peer-support ماحول میں psychospiritual counseling تک پھیلا ہوا ہے۔",
      "2016 میں انہوں نے روحانیت پر مبنی دستاویزی فلموں کے لیے ایک YouTube چینل شروع کیا، جس نے ان کے مجموعی آن لائن کام میں لاکھوں views حاصل کیے۔ انہوں نے تحریر پر دو انعامات بھی جیتے ہیں اور NASA اور SpaceX پر اپنے مضامین کے لیے Medium.com کے Top 500 Writers میں شامل ہوئے ہیں۔",
    ],
    workWithMarioTitle: "Mario کے ساتھ کام کریں",
    workWithMarioBody: [
      "سیشنز غیر جانبدار، صنفی شمولیتی اور trauma-aware ہوتے ہیں۔ چاہے آپ اپنے career، تعلقات یا ذاتی فلاح کے سفر میں وضاحت چاہتے ہوں، Mario قدرتی انداز میں آپ کے راستے کی تلاش کے لیے ایک محفوظ جگہ فراہم کرتے ہیں۔",
    ],
    servicesLead: "خدمات میں شامل ہیں:",
    services: [
      "تفصیلی نجومی مطالعہ اور مشاورت",
      "رشتوں اور مطابقت کے بارے میں بصیرت",
      "کیریئر رہنمائی",
      "ذاتی life coaching اور عملی فلاحی منصوبے",
    ],
    locationLabel: "مقام:",
    locationValue: "Zoom کے ذریعے آن لائن یا Toronto, Ontario میں بالمشافہ دستیاب۔",
    bookSessionLabel: ["سیشن", "بک", "کریں"],
    backToAstrologyToday: "Astrology Today پر واپس جائیں",
    lightboxClose: "بند کریں",
    lightboxAlt: "Creation Health تصوراتی تصویر کا بڑا ورژن",
    lightboxCaption:
      "Creation Health ماک اپ: بیرونی نفسیاتی اِن پیشنٹ اور آؤٹ پیشنٹ پروگرام",
  },
  sa: {
    ...en,
    pageTitle: "सर्जकं मिलामः",
    metaTitle: "सर्जकं मिलामः | Astrology Today",
    metaDescription:
      "Mario Sbardella विषये जानन्तु, यः Astrology Today, LIFESPACE, Creation Health इत्येतयोः सर्जकः अस्ति।",
    intro:
      "Mario Sbardella टोरन्टो-निवासी समग्र-मानसिक-स्वास्थ्य-सेवकः, लेखकः, ज्योतिषविद् च अस्ति। सः मनोरोग-क्षेत्रस्य दूरदर्शी-परिवर्तनाय समर्पितः अस्ति। तस्य साधना करुणामयी, अरोपात्मक-रहित, आत्मकेन्द्रिता च अस्ति, या केवलं लक्षण-निग्रहात् परं गत्वा देह-मनः-आत्मनः पूर्ण-पुनर्स्थापनं साधयितुम् इच्छति।",
    fusionTitle: "विज्ञानस्य आत्मनश्च संयोगः",
    fusionBody:
      "Mario इत्यस्य चिकित्सीय-दर्शनं आधुनिक-नाडीविज्ञानं प्राचीन-आध्यात्मिक-प्रज्ञया सह संयोजयति। पारम्परिक-मनोचिकित्सां ज्योतिष-योग-ध्यानादिभिः दृष्टिभिः सह मिलित्वा सः जनानां व्यवहार-सम्बन्ध-रचनासु गहनं बोधं ददाति।",
    fusionSecond:
      "तस्य आध्यात्मिक-जागरणं एकस्मात् गम्भीर-अनुभवात् आरब्धम्, येन येशु-ख्रिस्तेन सह व्यक्तिगत-संबन्धः प्रारब्धः। सः तम् आध्यात्मिक-शुद्धेः तथा वैयक्तिक-विकासस्य केन्द्रीय-पुरुषं मन्यते।",
    innovationsTitle: "कल्याणे नवोन्मेषाः",
    innovationsBody:
      "अयं मनोवैज्ञानिक-दृष्टिकोणः विशिष्ट-कल्याण-मॉडेलान् समावेशयति, ये जटिल-स्थितिभ्यः पुनरुद्धाराय निर्मिताः सन्ति, यथा चिन्ता, द्विध्रुवीय-विकारः, ADHD, schizophrenia च। जीवन-शैली-परिवर्तनस्य समन्वित-चिकित्सायाश्च माध्यमेन जनाः स्व-सामर्थ्यं अनुभवन्ति तथा समाजे पुनः प्रविष्टुं शक्नुवन्ति।",
    innovationsFollow:
      "LIFESPACE इत्यस्य अतिरिक्तं Mario इत्यनेन Relationship Rorschach Test™ अपि विकसितः, यः दम्पत्य-चिकित्सकानां कृते विशेष-उपकरणं अस्ति तथा अवचेतन-भावान् अन्वेष्टुं सहायकः अस्ति।",
    creationVisionTitle: "Creation Health: दूरदर्शी-कल्याण-समाजः",
    creationVisionBody:
      "Mario इत्यस्य योजना Creation Health नाम क्रान्तिकारी-चिकित्सा-आध्यात्मिक-ब्राण्डस्य संस्थापनया पूर्णतां गच्छति। अयं दूरदर्शी-कल्याण-समुदाय-संकल्पः पारम्परिक-मनोरोग-आवासीय-कार्यक्रमान् स्वावलम्बी-प्रणाल्या प्रतिस्थापयितुं रचितः अस्ति।",
    conceptImageAlt: "Creation Health कल्याण-समुदायस्य संकल्प-चित्रम्",
    conceptCaption: "Creation Health नमूना: बहिःस्थितम् मनोरोग-आवासीय-बहिरङ्ग-कार्यक्रमम्",
    creationFeaturesLead: "Creation Health-सुविधा एतादृश-स्थलरूपेण कल्पिता अस्ति यत्र एतानि भवन्ति:",
    creationHealthFeatures: [
      "मनोचिकित्सा-कौशल-विकास-केन्द्राणि।",
      "उद्यानानि, ध्यान-स्थलानि, व्यायाम-सुविधाः च।",
      "समुदाय-योगदानेन occupational therapy (उदा. उद्यान-व्यवस्था, पाककर्म च)।",
      "एवं शोध-केन्द्रम् यत्र विशेषज्ञाः समग्र-औषधरहित-पुनरुद्धार-प्रणालीनां प्रभावं अध्ययनं कुर्वन्ति।",
    ],
    authorTitle: "लेखकः शोधकर्ता च",
    authorLead:
      "स्वतन्त्र-शोधकर्ता तथा Medium इत्यत्र प्रमुख-लेखकत्वेन Mario इत्यस्य कार्यं चिकित्सीय-स्वायत्ततां तथा बलात्-चिकित्साकरणस्य सीमाः प्रकाशयति। तस्य आगामि-पुस्तकानि इमानि सन्ति:",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "विविध-मानसिक-विकाराणां चिकित्सायै आहार-मार्गदर्शिका, या भोजनस्य मानसिक-स्वास्थ्येन सह सम्बन्धं विवृणोति।" },
      { title: "We Don't Hear Voices, We Are the Voices", description: "schizophrenia-उद्धारस्य विषये एकं अप्रबन्ध-परिशीलनम्, यत्र शताधिक-साक्षात्काराः अन्तर्भवन्ति।" },
      { title: "LIFESPACE: Theory and Methods", description: "मस्तिष्क-अनुकूलनस्य, neuroplasticity इत्यस्य, आत्मकेन्द्रित-समग्र-सेवया स्थिर-मानसिक-पुनर्स्थापनस्य वैज्ञानिक-पद्धतयः।" },
      { title: "Spiritual Psychometrics", description: "ज्योतिष-दृष्ट्या व्यवहार-रचनानां बोधार्थं तथा गुणात्मक-परिमाणात्मक-psychometric ढाँचानां कृते साधन-सम्पन्ना विस्तीर्ण-मार्गदर्शिका।" },
    ],
    professionalBackgroundTitle: "व्यावसायिक-पृष्ठभूमिः",
    professionalBackgroundBody: [
      "Mario इत्यनेन University of Ottawa संस्थायां Psychology-विषये Bachelor of Arts (Honours) प्राप्तः, सः इदानीं Psychology-विषये MSc कुर्वन् अस्ति। तस्य अनुभवं GardenStyle नाम सफल-landscaping-व्यवसायस्य संचालनात् आरभ्य faith-based तथा digital peer-support-परिसरेषु psychospiritual counseling पर्यन्तं विस्तृतम् अस्ति।",
      "२०१६ तमे वर्षे सः आध्यात्मिक-विषयक-documentary-समर्पितं YouTube-मार्गम् आरब्धवान्, यस्य कार्येभ्यः लक्षाधिक-दर्शकाः प्राप्ताः। लेखन-कौशलाय द्वौ पुरस्कारौ अपि प्राप्तौ, NASA तथा SpaceX विषये लेखानां कारणेन Medium.com-Top 500 Writers मध्ये च समाविष्टः।",
    ],
    workWithMarioTitle: "Mario सह कार्यं कुरुत",
    workWithMarioBody: [
      "अत्र सत्राणि निर्णय-रहितानि, लिङ्ग-समावेशिनि, trauma-aware च भवन्ति। यदि भवन्तः career, सम्बन्धेषु, व्यक्तिगत-कल्याण-यात्रायां वा स्पष्टताम् इच्छन्ति, Mario स्वाभाविकतया पन्थानम् अन्वेष्टुं सुरक्षित-स्थलं ददाति।",
    ],
    servicesLead: "सेवाः एताः सन्ति:",
    services: [
      "विस्तृत-ज्योतिष-पठनं परामर्शश्च",
      "सम्बन्ध-सामञ्जस्य-विषये बोधः",
      "व्यवसाय-मार्गदर्शनम्",
      "व्यक्तिगत-life coaching तथा व्यावहारिक-कल्याण-योजनाः",
    ],
    locationLabel: "स्थानम्:",
    locationValue: "Zoom-द्वारा online वा Toronto, Ontario-स्थले प्रत्यक्षतया उपलब्धम्।",
    bookSessionLabel: ["सत्रं", "आरक्षत", ""],
    backToAstrologyToday: "Astrology Today प्रति प्रत्यागच्छतु",
    lightboxClose: "पिधत",
    lightboxAlt: "Creation Health संकल्प-चित्रस्य विस्तीर्ण-रूपम्",
    lightboxCaption: "Creation Health नमूना: बहिःस्थितम् मनोरोग-आवासीय-बहिरङ्ग-कार्यक्रमम्",
  },
  pa: {
    ...en,
    pageTitle: "ਸਰਜਨਹਾਰ ਨੂੰ ਮਿਲੋ",
    metaTitle: "ਸਰਜਨਹਾਰ ਨੂੰ ਮਿਲੋ | Astrology Today",
    metaDescription:
      "Mario Sbardella ਬਾਰੇ ਜਾਣੋ, ਜੋ Astrology Today, LIFESPACE ਅਤੇ Creation Health ਦੇ ਸਰਜਨਹਾਰ ਹਨ।",
    intro:
      "Mario Sbardella ਟੋਰਾਂਟੋ ਅਧਾਰਿਤ ਸਮਗ੍ਰ ਮਾਨਸਿਕ ਸਿਹਤ ਪ੍ਰੈਕਟੀਸ਼ਨਰ, ਲੇਖਕ ਅਤੇ ਜੋਤਿਸ਼ੀ ਹਨ, ਜੋ ਮਨੋਚਿਕਿਤਸਾ ਦੇ ਖੇਤਰ ਵਿੱਚ ਦੂਰਦਰਸ਼ੀ ਸੁਧਾਰ ਲਈ ਸਮਰਪਿਤ ਹਨ। ਉਨ੍ਹਾਂ ਦੀ ਪ੍ਰੈਕਟਿਸ ਕਰੁਣਾਮਈ, ਗੈਰ-ਰੋਗੀਕਰਨਕ ਅਤੇ ਆਤਮਾ-ਕੇਂਦ੍ਰਿਤ ਪਹੁੰਚ 'ਤੇ ਅਧਾਰਿਤ ਹੈ, ਜਿਸਦਾ ਉਦੇਸ਼ ਕੇਵਲ ਲੱਛਣਾਂ ਨੂੰ ਦਬਾਉਣਾ ਨਹੀਂ, ਸਗੋਂ ਸਰੀਰ, ਮਨ ਅਤੇ ਆਤਮਾ ਦੀ ਪੂਰੀ ਪੁਨਰਸਥਾਪਨਾ ਕਰਨਾ ਹੈ।",
    fusionTitle: "ਵਿਗਿਆਨ ਅਤੇ ਆਤਮਾ ਦਾ ਮਿਲਾਪ",
    fusionBody:
      "Mario ਦੀ ਥੈਰਾਪਿਊਟਿਕ ਸੋਚ ਆਧੁਨਿਕ ਨਿਊਰੋਸਾਇੰਸ ਅਤੇ ਪ੍ਰਾਚੀਨ ਆਧਿਆਤਮਿਕ ਗਿਆਨ ਵਿਚਕਾਰ ਪੁਲ ਬਣਾਉਂਦੀ ਹੈ। ਪਰੰਪਰਾਗਤ ਮਨੋਚਿਕਿਤਸਾ ਨੂੰ ਜੋਤਿਸ਼, ਯੋਗ ਅਤੇ ਧਿਆਨ ਵਰਗੀਆਂ ਦ੍ਰਿਸ਼ਟੀਆਂ ਨਾਲ ਜੋੜ ਕੇ ਉਹ ਲੋਕਾਂ ਨੂੰ ਆਪਣੇ ਵਿਹਾਰ ਅਤੇ ਰਿਸ਼ਤਿਆਂ ਦੇ ਰੂਪਾਂ ਦੀ ਡੂੰਘੀ ਸਮਝ ਦਿੰਦੇ ਹਨ।",
    fusionSecond:
      "ਉਨ੍ਹਾਂ ਦਾ ਆਧਿਆਤਮਿਕ ਜਾਗਰਣ ਇੱਕ ਗਹਿਰੇ ਤਜ਼ਰਬੇ ਤੋਂ ਸ਼ੁਰੂ ਹੋਇਆ, ਜਿਸ ਨੇ ਯਿਸੂ ਮਸੀਹ ਨਾਲ ਨਿੱਜੀ ਸਬੰਧ ਦੀ ਸ਼ੁਰੂਆਤ ਕੀਤੀ। ਉਹ ਯਿਸੂ ਨੂੰ ਆਧਿਆਤਮਿਕ ਸ਼ੁੱਧੀਕਰਨ ਅਤੇ ਨਿੱਜੀ ਵਿਕਾਸ ਦੀ ਕੇਂਦਰੀ ਹਸਤੀ ਮੰਨਦੇ ਹਨ।",
    innovationsTitle: "ਵੈੱਲਨੈੱਸ ਵਿੱਚ ਨਵੀਂ ਸੋਚ",
    innovationsBody:
      "ਇਹ ਮਨੋਵਿਗਿਆਨਕ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਵਿਲੱਖਣ ਵੈੱਲਨੈੱਸ ਮਾਡਲਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ, ਜੋ ਚਿੰਤਾ, ਬਾਈਪੋਲਰ ਡਿਸਆਰਡਰ, ADHD ਅਤੇ ਸਕਿਜੋਫ੍ਰੇਨੀਆ ਵਰਗੀਆਂ ਜਟਿਲ ਹਾਲਤਾਂ ਤੋਂ ਸੁਧਾਰ ਲਈ ਬਣਾਏ ਗਏ ਹਨ। ਜੀਵਨਸ਼ੈਲੀ ਵਿੱਚ ਬਦਲਾਅ ਅਤੇ ਸਮਨਵਿਤ ਥੈਰਪੀ ਰਾਹੀਂ ਲੋਕ ਆਪਣੀ ਪੂਰੀ ਸਮਰੱਥਾ ਨੂੰ ਪਛਾਣ ਸਕਦੇ ਹਨ ਅਤੇ ਸਮਾਜ ਨਾਲ ਦੁਬਾਰਾ ਜੁੜ ਸਕਦੇ ਹਨ।",
    innovationsFollow:
      "LIFESPACE ਤੋਂ ਇਲਾਵਾ, Mario ਨੇ Relationship Rorschach Test™ ਵੀ ਤਿਆਰ ਕੀਤਾ, ਜੋ ਜੋੜੇ-ਥੈਰਾਪਿਸਟਾਂ ਲਈ ਇੱਕ ਵਿਸ਼ੇਸ਼ ਸੰਦ ਹੈ ਅਤੇ ਅਚੇਤਨ ਭਾਵਨਾਵਾਂ ਅਤੇ ਸਾਂਝੀਆਂ ਗਤੀਵਿਧੀਆਂ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
    creationVisionTitle: "Creation Health: ਇੱਕ ਦੂਰਦਰਸ਼ੀ ਵੈੱਲਨੈੱਸ ਕਮਿਊਨਿਟੀ",
    creationVisionBody:
      "Mario ਦੀ ਯੋਜਨਾ Creation Health ਦੀ ਸਥਾਪਨਾ ਵਿੱਚ ਪਰਿਣਤ ਹੁੰਦੀ ਹੈ, ਜੋ ਚੰਗਿਆਈ ਦੀਆਂ ਕਲਾਵਾਂ ਅਤੇ ਆਧਿਆਤਮਿਕਤਾ 'ਤੇ ਆਧਾਰਿਤ ਇੱਕ ਕ੍ਰਾਂਤੀਕਾਰੀ ਬ੍ਰਾਂਡ ਹੈ। ਇਹ ਦੂਰਦਰਸ਼ੀ ਵੈੱਲਨੈੱਸ ਕਮਿਊਨਿਟੀ ਰਵਾਇਤੀ ਮਨੋਚਿਕਿਤਸਕ ਇਨ-ਪੇਸ਼ੈਂਟ ਪ੍ਰੋਗਰਾਮਾਂ ਦੀ ਥਾਂ ਇੱਕ ਆਤਮਨਿਰਭਰ ਮਾਡਲ ਲਿਆਉਣ ਲਈ ਸੋਚੀ ਗਈ ਹੈ।",
    conceptImageAlt: "Creation Health ਵੈੱਲਨੈੱਸ ਕਮਿਊਨਿਟੀ ਦਾ ਸੰਕਲਪ-ਚਿੱਤਰ",
    conceptCaption:
      "Creation Health ਮਾਕਅੱਪ: ਬਾਹਰੀ ਮਨੋਚਿਕਿਤਸਕ ਇਨ-ਪੇਸ਼ੈਂਟ/ਆਉਟ-ਪੇਸ਼ੈਂਟ ਪ੍ਰੋਗਰਾਮ",
    creationFeaturesLead: "Creation Health ਸਹੂਲਤ ਨੂੰ ਇਸ ਤਰ੍ਹਾਂ ਦੇ ਸਥਾਨ ਵਜੋਂ ਸੋਚਿਆ ਗਿਆ ਹੈ ਜਿਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣਗੇ:",
    creationHealthFeatures: [
      "ਮਨੋਚਿਕਿਤਸਾ ਅਤੇ ਹੁਨਰ-ਨਿਰਮਾਣ ਕੇਂਦਰ।",
      "ਬਾਗ਼, ਧਿਆਨ ਵਾਲੇ ਖੇਤਰ ਅਤੇ ਫਿਟਨੈੱਸ ਸਹੂਲਤਾਂ।",
      "ਕਮਿਊਨਿਟੀ ਯੋਗਦਾਨ ਰਾਹੀਂ occupational therapy (ਜਿਵੇਂ ਲੈਂਡਸਕੇਪਿੰਗ ਅਤੇ ਰਸੋਈ)।",
      "ਇੱਕ ਖੋਜ ਕੇਂਦਰ, ਜਿੱਥੇ ਵਿਸ਼ੇਸ਼ਗਿਆਨ ਸਮਗ੍ਰ, ਗੈਰ-ਦਵਾਈ-ਆਧਾਰਿਤ ਸੁਧਾਰ ਮਾਡਲਾਂ ਦੀ ਪ੍ਰਭਾਵਸ਼ੀਲਤਾ ਦਾ ਅਧਿਐਨ ਕਰ ਸਕਣ।",
    ],
    authorTitle: "ਲੇਖਕ ਅਤੇ ਖੋਜਕਰਤਾ",
    authorLead:
      "ਇੱਕ ਸੁਤੰਤਰ ਖੋਜਕਰਤਾ ਅਤੇ Medium ਦੇ ਪ੍ਰਮੁੱਖ ਲੇਖਕ ਵਜੋਂ, Mario ਦਾ ਕੰਮ ਚਿਕਿਤਸਕੀ ਸਵੈ-ਨਿਰਭਰਤਾ ਅਤੇ ਜ਼ਬਰਦਸਤੀ ਚਿਕਿਤਸਾਕਰਨ ਦੀਆਂ ਹੱਦਾਂ 'ਤੇ ਜ਼ੋਰ ਦਿੰਦਾ ਹੈ। ਉਨ੍ਹਾਂ ਦੀਆਂ ਆਉਣ ਵਾਲੀਆਂ ਕਿਤਾਬਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "ਵੱਖ-ਵੱਖ ਮਨੋਵਿਗਿਆਨਕ ਬਿਮਾਰੀਆਂ ਦੇ ਇਲਾਜ ਲਈ ਇੱਕ ਪੋਸ਼ਣ-ਮਾਰਗਦਰਸ਼ਿਕਾ, ਜੋ ਭੋਜਨ ਅਤੇ ਮਾਨਸਿਕ ਸਿਹਤ ਵਿਚਲੇ ਮਹੱਤਵਪੂਰਨ ਸੰਬੰਧ ਨੂੰ ਖੰਗਾਲਦੀ ਹੈ।" },
      { title: "We Don't Hear Voices, We Are the Voices", description: "ਸਕਿਜੋਫ੍ਰੇਨੀਆ ਰਿਕਵਰੀ ਬਾਰੇ ਇੱਕ ਗੈਰ-ਕਲਪਨਾਤਮਕ ਅਧਿਐਨ, ਜਿਸ ਵਿੱਚ 100 ਤੋਂ ਵੱਧ ਇੰਟਰਵਿਊ ਸ਼ਾਮਲ ਹਨ ਅਤੇ ਮਨੋਚਿਕਿਤਸਕ ਗਲਤ ਵਿਵਹਾਰ ਦਾ ਸ਼ਿਕਾਰ ਰਹੇ ਲੋਕਾਂ ਦੇ ਅਨੁਭਵ ਦਿੱਤੇ ਗਏ ਹਨ।" },
      { title: "LIFESPACE: Theory and Methods", description: "ਦਿਮਾਗੀ ਅਨੁਕੂਲਤਾ, neuroplasticity ਅਤੇ ਆਤਮਾ-ਕੇਂਦ੍ਰਿਤ ਸਮਗ੍ਰ ਦੇਖਭਾਲ ਰਾਹੀਂ ਟਿਕਾਊ ਮਾਨਸਿਕ ਪੁਨਰਸਥਾਪਨਾ ਲਈ ਵਿਗਿਆਨਕ ਢੰਗ।" },
      { title: "Spiritual Psychometrics", description: "ਇੱਕ ਵਿਸਤ੍ਰਿਤ ਮਾਰਗਦਰਸ਼ਿਕਾ ਜੋ ਜੋਤਿਸ਼ੀ ਨਜ਼ਰੀਏ ਰਾਹੀਂ ਵਿਹਾਰਕ ਰੂਪਾਂ ਨੂੰ ਸਮਝਣ ਅਤੇ ਗੁਣਾਤਮਕ ਤੇ ਮਾਤਰਾਤਮਕ psychometric frameworks ਲਈ ਸਾਧਨ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ।" },
    ],
    professionalBackgroundTitle: "ਪੇਸ਼ਾਵਰ ਪਿਛੋਕੜ",
    professionalBackgroundBody: [
      "Mario ਨੇ University of Ottawa ਤੋਂ ਮਨੋਵਿਗਿਆਨ ਵਿੱਚ Bachelor of Arts (Honours) ਪ੍ਰਾਪਤ ਕੀਤੀ ਹੈ ਅਤੇ ਇਸ ਵੇਲੇ ਮਨੋਵਿਗਿਆਨ ਵਿੱਚ MSc ਕਰ ਰਹੇ ਹਨ। ਉਨ੍ਹਾਂ ਦਾ ਅਨੁਭਵ ਇੱਕ ਸਫਲ landscaping ਬਿਜ਼ਨਸ GardenStyle ਚਲਾਉਣ ਤੋਂ, ਜਿਸਨੂੰ ਉਹ clients ਲਈ occupational therapy ਦੇ ਰੂਪ ਵਿੱਚ ਵੀ ਵਰਤਦੇ ਸਨ, faith-based ਅਤੇ digital peer-support ਮਾਹੌਲਾਂ ਵਿੱਚ psychospiritual counseling ਦੇਣ ਤੱਕ ਫੈਲਿਆ ਹੋਇਆ ਹੈ।",
      "2016 ਵਿੱਚ ਉਨ੍ਹਾਂ ਨੇ ਆਧਿਆਤਮਿਕ ਡਾਕਿਊਮੈਂਟਰੀਆਂ ਲਈ ਇਕ YouTube ਚੈਨਲ ਸ਼ੁਰੂ ਕੀਤਾ, ਜਿਸ ਨੇ ਉਨ੍ਹਾਂ ਦੇ ਆਨਲਾਈਨ ਕੰਮ ਵਿੱਚ ਮਿਲੀਅਨ ਦਰਸ਼ਨ ਇਕੱਠੇ ਕੀਤੇ। ਉਨ੍ਹਾਂ ਨੇ ਲਿਖਤ ਲਈ ਦੋ ਇਨਾਮ ਵੀ ਜਿੱਤੇ ਹਨ ਅਤੇ NASA ਅਤੇ SpaceX 'ਤੇ ਆਪਣੇ ਲੇਖਾਂ ਲਈ Medium.com ਦੇ Top 500 Writers ਵਿੱਚ ਸ਼ਾਮਲ ਰਹੇ ਹਨ।",
    ],
    workWithMarioTitle: "Mario ਨਾਲ ਕੰਮ ਕਰੋ",
    workWithMarioBody: [
      "ਸੈਸ਼ਨ ਬਿਨਾ ਫ਼ੈਸਲਾ ਕੀਤੇ, ਜੈਂਡਰ-ਸਮਾਵੇਸ਼ੀ ਅਤੇ trauma-aware ਹਨ। ਜੇ ਤੁਸੀਂ ਆਪਣੀ ਕਰੀਅਰ, ਰਿਸ਼ਤਿਆਂ ਜਾਂ ਨਿੱਜੀ ਵੈੱਲਨੈੱਸ ਯਾਤਰਾ ਵਿੱਚ ਸਪਸ਼ਟਤਾ ਲੱਭ ਰਹੇ ਹੋ, ਤਾਂ Mario ਤੁਹਾਡੇ ਰਸਤੇ ਦੀ ਕੁਦਰਤੀ ਖੋਜ ਲਈ ਸੁਰੱਖਿਅਤ ਥਾਂ ਮੁਹੱਈਆ ਕਰਦੇ ਹਨ।",
    ],
    servicesLead: "ਸੇਵਾਵਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:",
    services: [
      "ਵਿਸਤ੍ਰਿਤ ਜੋਤਿਸ਼ੀ ਪਾਠ ਅਤੇ ਸਲਾਹ",
      "ਰਿਸ਼ਤਿਆਂ ਅਤੇ ਅਨੁਕੂਲਤਾ ਬਾਰੇ ਜਾਣਕਾਰੀ",
      "ਕੈਰੀਅਰ ਦੀ ਦਿਸ਼ਾ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ",
      "ਨਿੱਜੀ life coaching ਅਤੇ ਵਿਹਾਰਕ ਵੈੱਲਨੈੱਸ ਯੋਜਨਾਵਾਂ",
    ],
    locationLabel: "ਟਿਕਾਣਾ:",
    locationValue: "Zoom ਰਾਹੀਂ ਆਨਲਾਈਨ ਜਾਂ Toronto, Ontario ਵਿੱਚ ਸਾਮ੍ਹਣੇ ਉਪਲਬਧ।",
    bookSessionLabel: ["ਸੈਸ਼ਨ", "ਬੁੱਕ", "ਕਰੋ"],
    backToAstrologyToday: "Astrology Today ਵੱਲ ਵਾਪਸ",
    lightboxClose: "ਬੰਦ ਕਰੋ",
    lightboxAlt: "Creation Health ਸੰਕਲਪ-ਚਿੱਤਰ ਦਾ ਵੱਡਾ ਰੂਪ",
    lightboxCaption:
      "Creation Health ਮਾਕਅੱਪ: ਬਾਹਰੀ ਮਨੋਚਿਕਿਤਸਕ ਇਨ-ਪੇਸ਼ੈਂਟ/ਆਉਟ-ਪੇਸ਼ੈਂਟ ਪ੍ਰੋਗਰਾਮ",
  },
  zh: {
    ...en,
    pageTitle: "认识创始人",
    metaTitle: "认识创始人 | Astrology Today",
    metaDescription:
      "了解 Astrology Today、LIFESPACE 和 Creation Health 的创始人 Mario Sbardella。",
    intro:
      "Mario Sbardella 是一位常驻多伦多的整体心理健康从业者、作家和占星师，致力于推动精神健康领域的前瞻性改革。他的实践建立在富有同情心、非病理化且以灵魂为中心的方法之上，目标不是单纯压制症状，而是推动人的身体、心智与精神的完整修复。",
    fusionTitle: "科学与灵性的融合",
    fusionBody:
      "Mario 的治疗理念在现代神经科学与古老灵性智慧之间架起桥梁。通过将传统心理治疗与占星、瑜伽和冥想等视角结合起来，他帮助来访者更深刻地理解自己的行为模式和关系模式。",
    fusionSecond:
      "他的灵性觉醒始于一次深刻的经历，这段经历开启了他与耶稣基督之间的个人关系。他认为耶稣是灵性净化与个人成长中的核心人物。",
    innovationsTitle: "健康模式的创新",
    innovationsBody:
      "这一心理学路径整合了多种具有标志性的健康模型，旨在支持人们从复杂状况中恢复，包括焦虑、双相障碍、ADHD 和精神分裂症。通过生活方式转变与整合治疗，来访者能够认识自身潜能，并重新融入社会。",
    innovationsFollow:
      "除了 LIFESPACE 之外，Mario 还开发了 Relationship Rorschach Test™，这是一种帮助伴侣治疗师探索潜意识情绪并深入理解双方互动结构的专门工具。",
    creationVisionTitle: "Creation Health：一个前瞻性的健康社区",
    creationVisionBody:
      "Mario 的愿景最终汇聚为 Creation Health 的建立，这是一个围绕疗愈艺术与灵性而构建的革新品牌。这个前瞻性的健康社区概念，旨在用自给自足的模式取代传统住院式精神科项目。",
    conceptImageAlt: "Creation Health 健康社区概念图",
    conceptCaption: "Creation Health 概念图：户外精神健康住院/门诊项目",
    creationFeaturesLead: "Creation Health 设施被构想为一个包含以下内容的空间：",
    creationHealthFeatures: [
      "心理治疗与技能培养中心。",
      "花园、冥想区域和健身设施。",
      "通过社区贡献开展的职业治疗（例如园艺和烹饪）。",
      "供专业人士研究整体、非药物康复模式有效性的研究中心。",
    ],
    authorTitle: "作者与研究者",
    authorLead:
      "作为独立研究者以及 Medium 上的高排名作者，Mario 的工作强调医疗自主权以及强制医疗化的局限性。他即将出版的书籍包括：",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "一本面向多种心理障碍治疗的营养指南，探讨饮食与心理健康之间的关键联系。" },
      { title: "We Don't Hear Voices, We Are the Voices", description: "一本关于精神分裂症康复的非虚构探索，包含 100 多次访谈，记录那些遭受精神医学失当对待者的艰难经历。" },
      { title: "LIFESPACE: Theory and Methods", description: "通过以灵魂为中心的整体照护，实现大脑优化、神经可塑性与可持续心理修复的科学方法。" },
      { title: "Spiritual Psychometrics", description: "一部全面指南，提供从占星视角理解行为模式的工具，以及定性与定量心理测量框架。" },
    ],
    professionalBackgroundTitle: "专业背景",
    professionalBackgroundBody: [
      "Mario 拥有渥太华大学心理学荣誉文学学士学位，目前正在攻读心理学理学硕士。他的经历非常多元，从经营成功的园艺企业 GardenStyle，并将其作为来访者职业治疗的一部分，到在信仰社群与数字同伴支持环境中提供心理—灵性辅导。",
      "2016 年，他创办了一个以灵性纪录片为主题的 YouTube 频道，其整体线上作品已累计数百万观看量。他还曾因写作获得两项奖项，并因关于 NASA 与 SpaceX 的文章入选 Medium.com 前 500 名作者。",
    ],
    workWithMarioTitle: "与 Mario 合作",
    workWithMarioBody: [
      "咨询过程没有评判，具备性别包容性，并以创伤知情为基础。无论你是在寻找职业、关系，还是个人健康旅程上的清晰方向，Mario 都会提供一个安全空间，帮助你自然地探索自己的道路。",
    ],
    servicesLead: "服务内容包括：",
    services: [
      "详细的占星解读与咨询",
      "关系与匹配度洞察",
      "职业方向指导",
      "个性化生活教练与实用健康方案",
    ],
    locationLabel: "地点：",
    locationValue: "可通过 Zoom 在线进行，或在安大略省多伦多线下面谈。",
    bookSessionLabel: ["预约", "咨询", ""],
    backToAstrologyToday: "返回 Astrology Today",
    lightboxClose: "关闭",
    lightboxAlt: "放大的 Creation Health 概念图",
    lightboxCaption: "Creation Health 概念图：户外精神健康住院/门诊项目",
  },
  ja: {
    ...en,
    pageTitle: "創設者について",
    metaTitle: "創設者について | Astrology Today",
    metaDescription:
      "Astrology Today、LIFESPACE、Creation Health の創設者である Mario Sbardella についてご紹介します。",
    intro:
      "Mario Sbardella はトロントを拠点とするホリスティックなメンタルヘルス実践家、作家、そして占星家です。彼は精神医療のあり方を根本から見直す先見的な改革に取り組んでいます。彼の実践は、思いやりがあり、病理化せず、魂を中心に据えたアプローチに基づいており、単なる症状の抑制を超えて、身体・心・精神の全体的な回復を目指しています。",
    fusionTitle: "科学とスピリットの融合",
    fusionBody:
      "Mario の治療哲学は、現代神経科学と古代の霊的叡智のあいだに橋を架けます。伝統的な心理療法に占星術、ヨガ、瞑想といった視点を組み合わせることで、クライアントが自らの行動パターンや対人関係の構造をより深く理解できるよう支えています。",
    fusionSecond:
      "彼の霊的な目覚めは、ある決定的な体験から始まり、それがイエス・キリストとの個人的な関係の始まりとなりました。彼はイエスを、霊的浄化と人格的成長における中心的存在として捉えています。",
    innovationsTitle: "ウェルネスにおける革新",
    innovationsBody:
      "この心理学的アプローチは、不安症、双極性障害、ADHD、統合失調症などの複雑な状態からの回復を支えるために設計された独自のウェルネスモデルを統合しています。生活様式の変容と統合的な治療を通して、人々は自らの可能性を再発見し、社会へ再び関わる力を得ていきます。",
    innovationsFollow:
      "LIFESPACE に加えて、Mario は Relationship Rorschach Test™ も開発しました。これはカップルセラピストが無意識の感情を探り、関係性のダイナミクスをより深く理解するための専門的ツールです。",
    creationVisionTitle: "Creation Health：先見的なウェルネス・コミュニティ",
    creationVisionBody:
      "Mario の構想は、癒やしの芸術とスピリチュアリティを基盤とする革新的ブランド、Creation Health の設立へと結実します。この先見的なウェルネス・コミュニティ構想は、従来の入院型精神科プログラムに代わる自立的な運営モデルとして設計されています。",
    conceptImageAlt: "Creation Health ウェルネス・コミュニティのコンセプトアート",
    conceptCaption: "Creation Health モックアップ：屋外型の精神科入院・外来プログラム",
    creationFeaturesLead: "Creation Health 施設は、次のような要素を備えた空間として構想されています。",
    creationHealthFeatures: [
      "心理療法およびスキル育成センター。",
      "庭園、瞑想エリア、フィットネス設備。",
      "地域貢献を通じた作業療法（例：造園や料理）。",
      "ホリスティックで薬に依存しない回復モデルの有効性を専門家が研究できる研究センター。",
    ],
    authorTitle: "著者・研究者",
    authorLead:
      "独立研究者であり、Medium の上位執筆者の一人でもある Mario の仕事は、医療的自律性と強制的な医療化の限界に焦点を当てています。現在執筆中の著書には次のものがあります。",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "さまざまな心理的障害の治療に向けた栄養ガイドであり、食事とメンタルヘルスの重要なつながりを探ります。" },
      { title: "We Don't Hear Voices, We Are the Voices", description: "統合失調症からの回復をめぐるノンフィクション作品で、精神医療の不適切な扱いに苦しんだ人々の体験を 100 件以上のインタビューとともに記録します。" },
      { title: "LIFESPACE: Theory and Methods", description: "脳の最適化、神経可塑性、そして魂を中心とした全人的ケアによる持続的な心の回復のための科学的方法。" },
      { title: "Spiritual Psychometrics", description: "占星術の視点から行動パターンを理解するための道具と、質的・量的な心理測定枠組みを提供する総合ガイド。" },
    ],
    professionalBackgroundTitle: "専門的背景",
    professionalBackgroundBody: [
      "Mario はオタワ大学で心理学の優等学士号を取得し、現在は心理学の MSc を履修中です。彼の経験は、クライアントへの作業療法の一環としても活用した造園事業 GardenStyle の経営から、信仰に基づく場やデジタルのピアサポート環境での心理・霊的カウンセリングにまで及びます。",
      "2016 年にはスピリチュアリティに焦点を当てたドキュメンタリーの YouTube チャンネルを立ち上げ、彼のオンライン作品群は総計で数百万回の視聴を集めました。また、執筆で二つの賞を受賞し、NASA と SpaceX に関する記事によって Medium.com のトップ 500 ライターにも選ばれています。",
    ],
    workWithMarioTitle: "Mario と取り組む",
    workWithMarioBody: [
      "セッションは判断を伴わず、ジェンダーに包摂的で、トラウマへの配慮を備えています。キャリア、人間関係、または個人的なウェルネスの旅において明確さを求めているなら、Mario はあなたが自然なかたちで自分の道を探れる安全な空間を提供します。",
    ],
    servicesLead: "提供サービス：",
    services: [
      "詳細な占星術リーディングとカウンセリング",
      "関係性と相性に関する洞察",
      "キャリアの方向性に関するガイダンス",
      "個別のライフコーチングと実践的なウェルネス計画",
    ],
    locationLabel: "場所：",
    locationValue: "Zoom によるオンライン、またはオンタリオ州トロントでの対面対応が可能です。",
    bookSessionLabel: ["セッションを", "予約", ""],
    backToAstrologyToday: "Astrology Today に戻る",
    lightboxClose: "閉じる",
    lightboxAlt: "Creation Health コンセプト画像の拡大版",
    lightboxCaption: "Creation Health モックアップ：屋外型の精神科入院・外来プログラム",
  },
  yue: {
    ...en,
    pageTitle: "認識創辦人",
    metaTitle: "認識創辦人 | Astrology Today",
    metaDescription:
      "了解 Astrology Today、LIFESPACE 同 Creation Health 嘅創辦人 Mario Sbardella。",
    intro:
      "Mario Sbardella 係一位以多倫多為基地嘅整合式心理健康工作者、作家同占星師，致力推動精神健康領域嘅前瞻改革。佢嘅實踐建基於富有同理心、唔將人病理化、以靈魂為核心嘅方法，目標唔只係壓低症狀，而係促進一個人喺身體、心智同靈性上嘅完整修復。",
    fusionTitle: "科學同靈性嘅融合",
    fusionBody:
      "Mario 嘅治療理念喺現代神經科學同古老靈性智慧之間搭起一條橋。佢將傳統心理治療結合占星、瑜伽同冥想等視角，幫助來訪者更深入理解自己嘅行為模式同關係模式。",
    fusionSecond:
      "佢嘅靈性覺醒始於一次深刻經驗，令佢同耶穌基督建立咗個人關係。佢視耶穌為靈性淨化同個人成長中嘅核心人物。",
    innovationsTitle: "健康模式嘅創新",
    innovationsBody:
      "呢套心理學取向整合咗一系列標誌性健康模型，旨在支援焦慮、躁鬱症、ADHD 同精神分裂症等複雜情況嘅康復。透過生活方式轉化同整合治療，來訪者可以重新發現自己嘅潛能，並重返社會。",
    innovationsFollow:
      "除咗 LIFESPACE，Mario 仲開發咗 Relationship Rorschach Test™，呢個專門工具可以幫伴侶治療師探索無意識情緒，並更深入咁理解雙方之間嘅動力。",
    creationVisionTitle: "Creation Health：一個前瞻性健康社群",
    creationVisionBody:
      "Mario 嘅計劃最終匯聚成 Creation Health 嘅建立，呢個係一個以療癒藝術同靈性為基礎嘅革新品牌。呢個前瞻性健康社群概念，旨在以自給自足嘅運作模式取代傳統精神科住院項目。",
    conceptImageAlt: "Creation Health 健康社群概念圖",
    conceptCaption: "Creation Health 模型圖：戶外精神科住院／門診項目",
    creationFeaturesLead: "Creation Health 設施構想中會包含：",
    creationHealthFeatures: [
      "心理治療同技能培育中心。",
      "花園、冥想區同健身設施。",
      "透過社群貢獻進行嘅職業治療（例如園藝同煮食）。",
      "供專業人士研究整合式、非藥物康復模式成效嘅研究中心。",
    ],
    authorTitle: "作者同研究者",
    authorLead:
      "作為獨立研究者同 Medium 上嘅高排名作者，Mario 嘅工作著重醫療自主權同強制醫療化嘅限制。佢即將推出嘅著作包括：",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "一本針對多種心理障礙治療嘅營養指南，探討飲食同心理健康之間嘅關鍵聯繫。" },
      { title: "We Don't Hear Voices, We Are the Voices", description: "一部探討精神分裂症康復嘅非虛構作品，包含超過一百次訪談，記錄經歷精神醫療失當者嘅艱難故事。" },
      { title: "LIFESPACE: Theory and Methods", description: "透過以靈魂為核心嘅整合照護，達成腦部優化、神經可塑性同持續心理修復嘅科學方法。" },
      { title: "Spiritual Psychometrics", description: "一本全面指南，提供從占星角度理解行為模式，以及質性同量化心理測量框架嘅工具。" },
    ],
    professionalBackgroundTitle: "專業背景",
    professionalBackgroundBody: [
      "Mario 擁有渥太華大學心理學榮譽文學士學位，現正修讀心理學碩士。佢嘅經驗相當多元，由經營成功園藝公司 GardenStyle（亦曾作為客戶職業治療嘅一部分），到喺宗教團體同數碼同儕支持環境中提供心理—靈性輔導。",
      "2016 年，佢開設咗一個專注靈性紀錄片嘅 YouTube 頻道，整體網上作品累積咗數以百萬計觀看次數。佢亦曾憑寫作贏得兩個獎項，並因為關於 NASA 同 SpaceX 嘅文章而躋身 Medium.com 前 500 名作者。",
    ],
    workWithMarioTitle: "同 Mario 一齊工作",
    workWithMarioBody: [
      "所有會談都唔帶批判、包容唔同性別經驗，並且具備創傷知情取向。無論你係想喺事業、關係，定係個人健康旅程中獲得更清晰方向，Mario 都會提供一個安全空間，俾你自然地探索自己嘅道路。",
    ],
    servicesLead: "服務包括：",
    services: [
      "詳細占星解讀同輔導",
      "關係同相容性洞察",
      "事業方向指引",
      "個人化人生教練同實用健康計劃",
    ],
    locationLabel: "地點：",
    locationValue: "可透過 Zoom 線上進行，或喺加拿大安大略省多倫多面談。",
    bookSessionLabel: ["預約", "會談", ""],
    backToAstrologyToday: "返回 Astrology Today",
    lightboxClose: "關閉",
    lightboxAlt: "放大版 Creation Health 概念圖",
    lightboxCaption: "Creation Health 模型圖：戶外精神科住院／門診項目",
  },
  ko: {
    ...en,
    pageTitle: "창립자 소개",
    metaTitle: "창립자 소개 | Astrology Today",
    metaDescription:
      "Astrology Today, LIFESPACE, Creation Health의 창립자 Mario Sbardella를 소개합니다.",
    intro:
      "Mario Sbardella는 토론토를 기반으로 활동하는 통합적 정신건강 실천가이자 작가, 점성가입니다. 그는 정신의학 환경에 대한 비전 있는 개혁에 헌신하고 있습니다. 그의 실천은 공감적이고, 병리화하지 않으며, 영혼을 중심에 둔 접근에 기반하며, 단순한 증상 억제를 넘어 몸과 마음, 영성의 전인적 회복을 지향합니다.",
    fusionTitle: "과학과 영성의 융합",
    fusionBody:
      "Mario의 치료 철학은 현대 신경과학과 고대 영적 지혜 사이를 잇습니다. 전통 심리치료에 점성술, 요가, 명상과 같은 관점을 결합함으로써, 그는 사람들이 자신의 행동 패턴과 관계 패턴을 더 깊이 이해하도록 돕습니다.",
    fusionSecond:
      "그의 영적 각성은 한 번의 형성적 경험에서 시작되었고, 그것은 예수 그리스도와의 개인적 관계로 이어졌습니다. 그는 예수를 영적 정화와 개인적 성장의 중심 인물로 봅니다.",
    innovationsTitle: "웰니스의 혁신",
    innovationsBody:
      "이 심리학적 접근은 불안, 양극성 장애, ADHD, 조현병과 같은 복합적 상태로부터의 회복을 지원하도록 설계된 고유한 웰니스 모델을 통합합니다. 생활 방식의 전환과 통합 치료를 통해 사람들은 자신의 잠재력을 회복하고 사회로 다시 참여할 수 있게 됩니다.",
    innovationsFollow:
      "LIFESPACE 외에도 Mario는 Relationship Rorschach Test™를 개발했습니다. 이 특화 도구는 커플 치료사들이 무의식적 감정을 탐색하고 관계의 공유된 역동을 더 깊이 이해하는 데 도움을 줍니다.",
    creationVisionTitle: "Creation Health: 비전 있는 웰니스 공동체",
    creationVisionBody:
      "Mario의 계획은 치유 예술과 영성을 기반으로 한 혁신적 브랜드인 Creation Health의 설립으로 이어집니다. 이 비전 있는 웰니스 공동체 개념은 전통적인 정신과 입원 프로그램을 자립적 운영 모델로 대체하기 위해 설계되었습니다.",
    conceptImageAlt: "Creation Health 웰니스 공동체 콘셉트 아트",
    conceptCaption: "Creation Health 목업: 야외 정신과 입원/외래 프로그램",
    creationFeaturesLead: "Creation Health 시설은 다음과 같은 공간으로 구상되고 있습니다.",
    creationHealthFeatures: [
      "심리치료 및 기술 개발 센터.",
      "정원, 명상 공간, 피트니스 시설.",
      "공동체 기여를 통한 작업치료(예: 조경 및 요리).",
      "통합적이고 비약물 기반 회복 모델의 효과를 연구할 수 있는 연구 센터.",
    ],
    authorTitle: "저자이자 연구자",
    authorLead:
      "독립 연구자이자 Medium의 상위 작가 중 한 명으로서, Mario의 작업은 의료 자율성과 강제적 의료화의 한계를 강조합니다. 그의 예정 저서는 다음과 같습니다.",
    upcomingBooks: [
      { title: "The Neurotransmitter Food Bible", description: "다양한 심리적 장애의 치료를 위한 영양 가이드로, 식단과 정신건강 사이의 중요한 연관성을 탐구합니다." },
      { title: "We Don't Hear Voices, We Are the Voices", description: "조현병 회복을 다루는 논픽션 탐구서로, 정신의학적 오진과 악용을 겪은 사람들의 고통스러운 경험을 100건 이상의 인터뷰로 담아냅니다." },
      { title: "LIFESPACE: Theory and Methods", description: "영혼 중심의 통합 돌봄을 통해 두뇌 최적화, 신경가소성, 지속 가능한 정신 회복을 이루기 위한 과학적 방법." },
      { title: "Spiritual Psychometrics", description: "점성술의 렌즈를 통해 행동 패턴을 이해하고, 질적·양적 심리측정 틀을 활용할 수 있도록 돕는 종합 가이드." },
    ],
    professionalBackgroundTitle: "전문적 배경",
    professionalBackgroundBody: [
      "Mario는 오타와 대학교에서 심리학 우등 문학사를 취득했고 현재 심리학 MSc를 밟고 있습니다. 그의 경험은 조경 사업 GardenStyle을 성공적으로 운영하며 이를 고객의 작업치료 수단으로 활용한 것부터, 신앙 공동체와 디지털 동료지원 환경에서 심리·영성 상담을 제공한 것까지 다양합니다.",
      "2016년에는 영성 중심 다큐멘터리를 다루는 YouTube 채널을 시작했고, 그의 온라인 작업은 통합적으로 수백만 회의 조회 수를 기록했습니다. 또한 글쓰기로 두 차례 상을 받았으며, NASA와 SpaceX에 관한 글로 Medium.com 상위 500명 작가에 이름을 올렸습니다.",
    ],
    workWithMarioTitle: "Mario와 함께하기",
    workWithMarioBody: [
      "세션은 판단이 없고, 젠더를 포용하며, 트라우마를 고려합니다. 당신이 경력, 관계 또는 개인적 웰니스 여정에서 명확함을 찾고 있다면, Mario는 자신의 길을 자연스럽게 탐색할 수 있는 안전한 공간을 제공합니다.",
    ],
    servicesLead: "제공 서비스:",
    services: [
      "심층 점성술 리딩 및 상담",
      "관계와 궁합에 대한 통찰",
      "진로 방향 안내",
      "개인 맞춤 라이프 코칭과 실용적 웰니스 계획",
    ],
    locationLabel: "위치:",
    locationValue: "Zoom을 통한 온라인 또는 캐나다 온타리오주 토론토에서 대면 가능.",
    bookSessionLabel: ["세션", "예약", ""],
    backToAstrologyToday: "Astrology Today로 돌아가기",
    lightboxClose: "닫기",
    lightboxAlt: "확대된 Creation Health 콘셉트 이미지",
    lightboxCaption: "Creation Health 목업: 야외 정신과 입원/외래 프로그램",
  },
};

export function getMeetTheCreatorCopy(locale: SupportedLocale): MeetTheCreatorCopy {
  return meetTheCreatorCopy[locale] ?? meetTheCreatorCopy[defaultLocale] ?? en;
}
