import { defaultLocale, type SupportedLocale } from "./i18n";

export type SiteRuleSection = {
  id: string;
  title: string;
  body: string[];
};

export type SiteRulesCopy = {
  metadataTitle: string;
  metadataDescription: string;
  intro: string;
  sections: SiteRuleSection[];
};

const siteRulesCopy: Record<SupportedLocale, SiteRulesCopy> = {
  en: {
    metadataTitle: "Site Rules | Astrology Today",
    metadataDescription:
      "Astrology Today's site rules, editorial boundaries, and community standards.",
    intro:
      "These rules describe the tone, boundaries, and standards that shape Astrology Today. They are intended to protect the reader experience, support editorial integrity, and keep our astrology work clear, grounded, and beautiful.",
    sections: [
      {
        id: "purpose",
        title: "1. Purpose Of Astrology Today",
        body: [
          "Astrology Today is a publication and discovery platform for astrology, symbolism, cycles, and thoughtful self-reflection. We publish forecasts, articles, visual features, and educational content designed to help readers explore astrological ideas with curiosity, imagination, and care.",
          "The site exists to make astrology feel beautiful, accessible, and well-considered. Everything on the platform should support that goal: clarity over confusion, reflection over fear, and thoughtful interpretation over sensationalism.",
        ],
      },
      {
        id: "community",
        title: "2. Respectful Use And Community Conduct",
        body: [
          "Visitors, subscribers, collaborators, and community members must use the site in a respectful way. Harassment, hate speech, intimidation, impersonation, spam, fraudulent activity, or attempts to disrupt the experience for others are not permitted.",
          "If Astrology Today introduces public comments, submissions, profiles, or interactive tools, we may moderate, limit, or remove content that undermines a welcoming environment or conflicts with the spirit of the platform.",
        ],
      },
      {
        id: "editorial",
        title: "3. Editorial Standards",
        body: [
          "We aim to present astrology as a reflective practice, creative language, and interpretive framework. Our articles and forecasts should be written in good faith, avoid manipulative claims, and clearly distinguish between symbolic interpretation, opinion, and factual information.",
          "Astrology Today may revise, update, or remove material at any time to improve clarity, accuracy, tone, or alignment with the brand. Featured writers and contributors are expected to follow the same standard.",
        ],
      },
      {
        id: "wellness",
        title: "4. Wellness And Advice Boundaries",
        body: [
          "Astrology Today may provide mental health, wellness, and personal development guidance, but it does not provide medical, legal, tax, or financial advice. Our content is intended for educational, editorial, and inspirational purposes only.",
          "Readers should use independent judgment and seek qualified professionals when making serious personal, health, legal, or financial decisions. Content that encourages dependency, fear, or absolute certainty about life outcomes is outside the spirit of this site.",
        ],
      },
      {
        id: "submissions",
        title: "5. User Submissions And Shared Material",
        body: [
          "If you submit text, artwork, testimonials, charts, or other materials to Astrology Today, you confirm that you have the right to share them and that doing so does not violate another person's rights, privacy, or intellectual property.",
          "By submitting material for publication or feature consideration, you allow Astrology Today to review, edit, format, and publish that material in connection with the site, newsletter, and related promotional channels unless a different written agreement applies.",
        ],
      },
      {
        id: "copyright",
        title: "6. Copyright, Credits, And Fair Use",
        body: [
          "Astrology Today branding, design elements, original writing, visuals, and compiled site content are protected by applicable intellectual property laws. You may not copy, republish, scrape, sell, or redistribute substantial portions of the site without permission.",
          "Short quotations with clear credit may be acceptable where lawful and fair. If you believe material on the site infringes your rights, you may contact us with enough detail for us to investigate and respond appropriately.",
        ],
      },
      {
        id: "commercial",
        title: "7. Advertising, Partnerships, And Promotions",
        body: [
          "Sponsored content, paid placements, affiliate relationships, and partnerships must fit the tone and values of Astrology Today. We reserve the right to refuse promotions that feel misleading, low-integrity, exploitative, or out of alignment with the reader experience.",
          "Commercial partners may not imply endorsement beyond what is explicitly stated. Any promotional material should be clearly identified and presented in a way that respects reader trust.",
        ],
      },
      {
        id: "privacy",
        title: "8. Privacy, Accounts, And Security",
        body: [
          "Where accounts, forms, or newsletter signups are offered, users are expected to provide accurate information and keep their access details secure. Attempts to gain unauthorized access, probe vulnerabilities, or misuse collected data are strictly prohibited.",
          "Astrology Today may store and process limited information needed to operate the site, communicate with subscribers, and improve the experience. Separate privacy terms may provide additional detail as those systems expand.",
        ],
      },
      {
        id: "enforcement",
        title: "9. Enforcement And Updates",
        body: [
          "We may suspend access, remove content, restrict features, or take other reasonable action when these rules are violated or when necessary to protect the site, our readers, or our collaborators.",
          "These Site Rules may change over time as Astrology Today evolves. Continued use of the site after updates means you accept the current version posted here.",
        ],
      },
    ],
  },
  fr: {
    metadataTitle: "Règles du site | Astrology Today",
    metadataDescription:
      "Règles du site, limites éditoriales et standards communautaires d'Astrology Today.",
    intro:
      "Ces règles décrivent le ton, les limites et les standards qui façonnent Astrology Today. Elles visent à protéger l'expérience des lecteurs, à soutenir l'intégrité éditoriale et à maintenir notre travail astrologique clair, ancré et beau.",
    sections: [
      {
        id: "purpose",
        title: "1. Objectif d'Astrology Today",
        body: [
          "Astrology Today est une plateforme de publication et de découverte consacrée à l'astrologie, au symbolisme, aux cycles et à une réflexion personnelle attentive. Nous publions des prévisions, des articles, des contenus visuels et des ressources éducatives conçus pour aider les lecteurs à explorer les idées astrologiques avec curiosité, imagination et soin.",
          "Le site existe pour rendre l'astrologie belle, accessible et réfléchie. Tout sur la plateforme doit soutenir cet objectif : la clarté plutôt que la confusion, la réflexion plutôt que la peur, et l'interprétation attentive plutôt que le sensationnalisme.",
        ],
      },
      {
        id: "community",
        title: "2. Utilisation respectueuse et conduite communautaire",
        body: [
          "Les visiteurs, abonnés, collaborateurs et membres de la communauté doivent utiliser le site avec respect. Le harcèlement, les discours haineux, l'intimidation, l'usurpation d'identité, le spam, les activités frauduleuses ou les tentatives de perturber l'expérience des autres ne sont pas autorisés.",
          "Si Astrology Today introduit des commentaires publics, des soumissions, des profils ou des outils interactifs, nous pouvons modérer, limiter ou retirer tout contenu qui compromet un environnement accueillant ou contredit l'esprit de la plateforme.",
        ],
      },
      {
        id: "editorial",
        title: "3. Standards éditoriaux",
        body: [
          "Nous cherchons à présenter l'astrologie comme une pratique de réflexion, un langage créatif et un cadre d'interprétation. Nos articles et prévisions doivent être rédigés de bonne foi, éviter les affirmations manipulatrices et distinguer clairement l'interprétation symbolique, l'opinion et l'information factuelle.",
          "Astrology Today peut réviser, mettre à jour ou retirer du contenu à tout moment pour améliorer la clarté, l'exactitude, le ton ou l'alignement avec la marque. Les auteurs mis en avant et les contributeurs sont tenus de respecter le même niveau d'exigence.",
        ],
      },
      {
        id: "wellness",
        title: "4. Limites en matière de bien-être et de conseils",
        body: [
          "Astrology Today peut proposer des conseils liés à la santé mentale, au bien-être et au développement personnel, mais ne fournit pas de conseils médicaux, juridiques, fiscaux ou financiers. Notre contenu est destiné uniquement à des fins éducatives, éditoriales et inspirantes.",
          "Les lecteurs doivent faire preuve de jugement personnel et consulter des professionnels qualifiés lorsqu'ils prennent des décisions importantes d'ordre personnel, médical, juridique ou financier. Le contenu qui encourage la dépendance, la peur ou une certitude absolue concernant l'issue de la vie est contraire à l'esprit de ce site.",
        ],
      },
      {
        id: "submissions",
        title: "5. Contributions des utilisateurs et contenus partagés",
        body: [
          "Si vous soumettez à Astrology Today des textes, œuvres, témoignages, cartes ou tout autre document, vous confirmez que vous avez le droit de les partager et que cela ne viole pas les droits, la vie privée ou la propriété intellectuelle d'une autre personne.",
          "En soumettant du contenu pour publication ou pour une éventuelle mise en avant, vous autorisez Astrology Today à examiner, modifier, mettre en forme et publier ce matériel en lien avec le site, la newsletter et les canaux promotionnels associés, sauf accord écrit différent.",
        ],
      },
      {
        id: "copyright",
        title: "6. Droit d'auteur, crédits et usage loyal",
        body: [
          "L'image de marque d'Astrology Today, ses éléments de design, ses textes originaux, ses visuels et ses contenus compilés sont protégés par les lois applicables en matière de propriété intellectuelle. Vous ne pouvez pas copier, republier, extraire, vendre ou redistribuer des parties substantielles du site sans autorisation.",
          "De courtes citations avec attribution claire peuvent être acceptables lorsqu'elles sont légales et équitables. Si vous pensez qu'un contenu du site enfreint vos droits, vous pouvez nous contacter avec suffisamment de détails pour que nous puissions enquêter et répondre de manière appropriée.",
        ],
      },
      {
        id: "commercial",
        title: "7. Publicité, partenariats et promotions",
        body: [
          "Le contenu sponsorisé, les placements payants, les relations d'affiliation et les partenariats doivent correspondre au ton et aux valeurs d'Astrology Today. Nous nous réservons le droit de refuser les promotions qui paraissent trompeuses, peu intègres, exploitantes ou en décalage avec l'expérience du lecteur.",
          "Les partenaires commerciaux ne peuvent pas suggérer un soutien au-delà de ce qui est explicitement indiqué. Tout matériel promotionnel doit être clairement identifié et présenté d'une manière qui respecte la confiance du lecteur.",
        ],
      },
      {
        id: "privacy",
        title: "8. Confidentialité, comptes et sécurité",
        body: [
          "Lorsqu'un compte, un formulaire ou une inscription à la newsletter est proposé, les utilisateurs doivent fournir des informations exactes et conserver leurs identifiants de manière sécurisée. Toute tentative d'accès non autorisé, de test de vulnérabilités ou d'utilisation abusive des données collectées est strictement interdite.",
          "Astrology Today peut stocker et traiter les informations limitées nécessaires au fonctionnement du site, à la communication avec les abonnés et à l'amélioration de l'expérience. Des conditions de confidentialité distinctes peuvent fournir davantage de détails à mesure que ces systèmes évoluent.",
        ],
      },
      {
        id: "enforcement",
        title: "9. Application et mises à jour",
        body: [
          "Nous pouvons suspendre l'accès, retirer du contenu, restreindre des fonctionnalités ou prendre toute autre mesure raisonnable lorsque ces règles sont violées ou lorsque cela est nécessaire pour protéger le site, nos lecteurs ou nos collaborateurs.",
          "Ces règles du site peuvent évoluer au fil du temps à mesure qu'Astrology Today se développe. Le fait de continuer à utiliser le site après une mise à jour signifie que vous acceptez la version actuelle publiée ici.",
        ],
      },
    ],
  },
  it: {
    metadataTitle: "Regole del sito | Astrology Today",
    metadataDescription:
      "Regole del sito, limiti editoriali e standard della comunità di Astrology Today.",
    intro:
      "Queste regole descrivono il tono, i limiti e gli standard che definiscono Astrology Today. Hanno lo scopo di proteggere l'esperienza del lettore, sostenere l'integrità editoriale e mantenere il nostro lavoro astrologico chiaro, radicato e curato.",
    sections: [
      {
        id: "purpose",
        title: "1. Scopo di Astrology Today",
        body: [
          "Astrology Today è una piattaforma editoriale e di scoperta dedicata all'astrologia, al simbolismo, ai cicli e all'auto-riflessione consapevole. Pubbliciamo previsioni, articoli, contenuti visivi e materiali educativi pensati per aiutare i lettori a esplorare le idee astrologiche con curiosità, immaginazione e attenzione.",
          "Il sito esiste per rendere l'astrologia bella, accessibile e ben ponderata. Tutto ciò che compare sulla piattaforma dovrebbe sostenere questo obiettivo: chiarezza invece di confusione, riflessione invece di paura, e interpretazione ponderata invece di sensazionalismo.",
        ],
      },
      {
        id: "community",
        title: "2. Uso rispettoso e condotta della comunità",
        body: [
          "Visitatori, iscritti, collaboratori e membri della comunità devono usare il sito in modo rispettoso. Non sono consentiti molestie, discorsi d'odio, intimidazioni, impersonificazione, spam, attività fraudolente o tentativi di disturbare l'esperienza altrui.",
          "Se Astrology Today introdurrà commenti pubblici, invii di contenuti, profili o strumenti interattivi, potremo moderare, limitare o rimuovere i materiali che compromettono un ambiente accogliente o che entrano in conflitto con lo spirito della piattaforma.",
        ],
      },
      {
        id: "editorial",
        title: "3. Standard editoriali",
        body: [
          "Il nostro obiettivo è presentare l'astrologia come pratica riflessiva, linguaggio creativo e quadro interpretativo. I nostri articoli e le nostre previsioni devono essere scritti in buona fede, evitare affermazioni manipolative e distinguere chiaramente tra interpretazione simbolica, opinione e informazione fattuale.",
          "Astrology Today può rivedere, aggiornare o rimuovere contenuti in qualsiasi momento per migliorare chiarezza, accuratezza, tono o coerenza con il brand. Gli autori in evidenza e i collaboratori sono tenuti a seguire lo stesso standard.",
        ],
      },
      {
        id: "wellness",
        title: "4. Limiti relativi a benessere e consigli",
        body: [
          "Astrology Today può offrire orientamento su salute mentale, benessere e sviluppo personale, ma non fornisce consulenza medica, legale, fiscale o finanziaria. I nostri contenuti sono destinati esclusivamente a fini educativi, editoriali e ispirazionali.",
          "I lettori dovrebbero usare il proprio giudizio e rivolgersi a professionisti qualificati quando prendono decisioni serie di natura personale, sanitaria, legale o finanziaria. I contenuti che incoraggiano dipendenza, paura o assoluta certezza sugli esiti della vita non rientrano nello spirito di questo sito.",
        ],
      },
      {
        id: "submissions",
        title: "5. Contributi degli utenti e materiali condivisi",
        body: [
          "Se invii testi, opere, testimonianze, carte astrologiche o altri materiali ad Astrology Today, confermi di avere il diritto di condividerli e che così facendo non violi i diritti, la privacy o la proprietà intellettuale di altre persone.",
          "Inviando materiale per la pubblicazione o per una possibile messa in evidenza, autorizzi Astrology Today a esaminarlo, modificarlo, impaginarlo e pubblicarlo in relazione al sito, alla newsletter e ai canali promozionali collegati, salvo diverso accordo scritto.",
        ],
      },
      {
        id: "copyright",
        title: "6. Copyright, crediti e fair use",
        body: [
          "Il marchio Astrology Today, gli elementi di design, i testi originali, le immagini e i contenuti raccolti del sito sono protetti dalle leggi applicabili in materia di proprietà intellettuale. Non puoi copiare, ripubblicare, estrarre, vendere o ridistribuire parti sostanziali del sito senza autorizzazione.",
          "Brevi citazioni con attribuzione chiara possono essere accettabili ove consentito dalla legge e dall'uso corretto. Se ritieni che un contenuto del sito violi i tuoi diritti, puoi contattarci fornendo dettagli sufficienti affinché possiamo esaminare la questione e rispondere in modo appropriato.",
        ],
      },
      {
        id: "commercial",
        title: "7. Pubblicità, partnership e promozioni",
        body: [
          "Contenuti sponsorizzati, posizionamenti a pagamento, relazioni di affiliazione e partnership devono essere coerenti con il tono e i valori di Astrology Today. Ci riserviamo il diritto di rifiutare promozioni che risultino fuorvianti, poco integre, sfruttatrici o disallineate rispetto all'esperienza del lettore.",
          "I partner commerciali non possono implicare approvazioni oltre a quanto dichiarato esplicitamente. Ogni materiale promozionale deve essere chiaramente identificato e presentato in modo da rispettare la fiducia del lettore.",
        ],
      },
      {
        id: "privacy",
        title: "8. Privacy, account e sicurezza",
        body: [
          "Quando vengono offerti account, moduli o iscrizioni alla newsletter, gli utenti sono tenuti a fornire informazioni accurate e a custodire in modo sicuro i propri dati di accesso. Qualsiasi tentativo di ottenere accessi non autorizzati, sondare vulnerabilità o utilizzare impropriamente i dati raccolti è severamente vietato.",
          "Astrology Today può archiviare e trattare le informazioni limitate necessarie per far funzionare il sito, comunicare con gli iscritti e migliorare l'esperienza. Termini di privacy separati potranno fornire ulteriori dettagli man mano che questi sistemi si sviluppano.",
        ],
      },
      {
        id: "enforcement",
        title: "9. Applicazione e aggiornamenti",
        body: [
          "Possiamo sospendere l'accesso, rimuovere contenuti, limitare funzionalità o intraprendere altre azioni ragionevoli quando queste regole vengono violate o quando ciò è necessario per proteggere il sito, i nostri lettori o i nostri collaboratori.",
          "Queste regole del sito possono cambiare nel tempo man mano che Astrology Today evolve. L'uso continuato del sito dopo gli aggiornamenti implica l'accettazione della versione corrente pubblicata qui.",
        ],
      },
    ],
  },
  es: {
    metadataTitle: "Reglas del sitio | Astrology Today",
    metadataDescription:
      "Reglas del sitio, límites editoriales y estándares comunitarios de Astrology Today.",
    intro:
      "Estas reglas describen el tono, los límites y los estándares que dan forma a Astrology Today. Están destinadas a proteger la experiencia del lector, respaldar la integridad editorial y mantener nuestro trabajo astrológico claro, centrado y bello.",
    sections: [
      {
        id: "purpose",
        title: "1. Propósito de Astrology Today",
        body: [
          "Astrology Today es una plataforma editorial y de descubrimiento para la astrología, el simbolismo, los ciclos y la autorreflexión consciente. Publicamos pronósticos, artículos, piezas visuales y contenido educativo diseñado para ayudar a los lectores a explorar las ideas astrológicas con curiosidad, imaginación y cuidado.",
          "El sitio existe para que la astrología se sienta hermosa, accesible y bien pensada. Todo en la plataforma debe apoyar ese objetivo: claridad por encima de la confusión, reflexión por encima del miedo e interpretación cuidadosa por encima del sensacionalismo.",
        ],
      },
      {
        id: "community",
        title: "2. Uso respetuoso y conducta comunitaria",
        body: [
          "Visitantes, suscriptores, colaboradores y miembros de la comunidad deben usar el sitio de manera respetuosa. No se permiten el acoso, los discursos de odio, la intimidación, la suplantación de identidad, el spam, la actividad fraudulenta ni los intentos de interrumpir la experiencia de otras personas.",
          "Si Astrology Today introduce comentarios públicos, envíos, perfiles o herramientas interactivas, podremos moderar, limitar o eliminar contenido que perjudique un entorno acogedor o entre en conflicto con el espíritu de la plataforma.",
        ],
      },
      {
        id: "editorial",
        title: "3. Estándares editoriales",
        body: [
          "Nuestro objetivo es presentar la astrología como una práctica reflexiva, un lenguaje creativo y un marco interpretativo. Nuestros artículos y pronósticos deben escribirse de buena fe, evitar afirmaciones manipuladoras y distinguir claramente entre interpretación simbólica, opinión e información factual.",
          "Astrology Today puede revisar, actualizar o eliminar material en cualquier momento para mejorar la claridad, la precisión, el tono o la alineación con la marca. Los autores destacados y colaboradores deben seguir ese mismo estándar.",
        ],
      },
      {
        id: "wellness",
        title: "4. Límites sobre bienestar y asesoramiento",
        body: [
          "Astrology Today puede ofrecer orientación sobre salud mental, bienestar y desarrollo personal, pero no brinda asesoramiento médico, legal, fiscal ni financiero. Nuestro contenido tiene fines únicamente educativos, editoriales e inspiradores.",
          "Los lectores deben usar su propio criterio y buscar profesionales cualificados al tomar decisiones importantes de carácter personal, sanitario, legal o financiero. El contenido que fomenta dependencia, miedo o certeza absoluta sobre los resultados de la vida queda fuera del espíritu de este sitio.",
        ],
      },
      {
        id: "submissions",
        title: "5. Envíos de usuarios y material compartido",
        body: [
          "Si envías texto, obras, testimonios, cartas astrales u otros materiales a Astrology Today, confirmas que tienes derecho a compartirlos y que al hacerlo no violas los derechos, la privacidad ni la propiedad intelectual de otra persona.",
          "Al enviar material para publicación o consideración editorial, autorizas a Astrology Today a revisarlo, editarlo, formatearlo y publicarlo en relación con el sitio, el boletín y los canales promocionales relacionados, salvo que exista otro acuerdo escrito.",
        ],
      },
      {
        id: "copyright",
        title: "6. Copyright, créditos y uso legítimo",
        body: [
          "La marca Astrology Today, sus elementos de diseño, la redacción original, los elementos visuales y el contenido compilado del sitio están protegidos por las leyes de propiedad intelectual aplicables. No puedes copiar, republicar, extraer, vender ni redistribuir partes sustanciales del sitio sin permiso.",
          "Las citas breves con atribución clara pueden ser aceptables cuando sean legales y justas. Si crees que algún material del sitio infringe tus derechos, puedes contactarnos con suficiente detalle para que podamos investigarlo y responder de forma adecuada.",
        ],
      },
      {
        id: "commercial",
        title: "7. Publicidad, alianzas y promociones",
        body: [
          "El contenido patrocinado, las ubicaciones pagadas, las relaciones de afiliación y las alianzas deben ajustarse al tono y los valores de Astrology Today. Nos reservamos el derecho de rechazar promociones que parezcan engañosas, de baja integridad, explotadoras o fuera de sintonía con la experiencia del lector.",
          "Los socios comerciales no pueden insinuar un respaldo más allá de lo que se indique explícitamente. Todo material promocional debe identificarse con claridad y presentarse de una manera que respete la confianza del lector.",
        ],
      },
      {
        id: "privacy",
        title: "8. Privacidad, cuentas y seguridad",
        body: [
          "Cuando se ofrezcan cuentas, formularios o suscripciones al boletín, se espera que los usuarios proporcionen información precisa y mantengan seguros sus datos de acceso. Está estrictamente prohibido intentar obtener acceso no autorizado, explorar vulnerabilidades o hacer un uso indebido de los datos recopilados.",
          "Astrology Today puede almacenar y procesar la información limitada necesaria para operar el sitio, comunicarse con los suscriptores y mejorar la experiencia. Términos de privacidad separados pueden ofrecer más detalles a medida que estos sistemas se amplíen.",
        ],
      },
      {
        id: "enforcement",
        title: "9. Aplicación y actualizaciones",
        body: [
          "Podemos suspender el acceso, eliminar contenido, restringir funciones o tomar otras medidas razonables cuando se violen estas reglas o cuando sea necesario para proteger el sitio, a nuestros lectores o a nuestros colaboradores.",
          "Estas reglas del sitio pueden cambiar con el tiempo a medida que Astrology Today evoluciona. El uso continuado del sitio después de las actualizaciones significa que aceptas la versión actual publicada aquí.",
        ],
      },
    ],
  },
  hi: {
    metadataTitle: "साइट नियम | Astrology Today",
    metadataDescription:
      "Astrology Today के साइट नियम, संपादकीय सीमाएँ और सामुदायिक मानक।",
    intro:
      "ये नियम Astrology Today के स्वर, सीमाओं और मानकों का वर्णन करते हैं। इनका उद्देश्य पाठक अनुभव की रक्षा करना, संपादकीय अखंडता का समर्थन करना और हमारे ज्योतिषीय कार्य को स्पष्ट, स्थिर और सुंदर बनाए रखना है।",
    sections: [
      {
        id: "purpose",
        title: "1. Astrology Today का उद्देश्य",
        body: [
          "Astrology Today ज्योतिष, प्रतीकवाद, चक्रों और विचारशील आत्म-चिंतन के लिए एक प्रकाशन और खोज मंच है। हम पूर्वानुमान, लेख, दृश्य सामग्री और शैक्षिक संसाधन प्रकाशित करते हैं, जो पाठकों को जिज्ञासा, कल्पना और सावधानी के साथ ज्योतिषीय विचारों का अन्वेषण करने में सहायता दें।",
          "इस साइट का उद्देश्य ज्योतिष को सुंदर, सुलभ और विचारपूर्ण अनुभव बनाना है। मंच पर मौजूद हर चीज़ को इसी लक्ष्य का समर्थन करना चाहिए: भ्रम की जगह स्पष्टता, भय की जगह आत्म-चिंतन, और सनसनी की जगह समझदार व्याख्या।",
        ],
      },
      {
        id: "community",
        title: "2. सम्मानजनक उपयोग और सामुदायिक आचरण",
        body: [
          "आगंतुकों, ग्राहकों, सहयोगियों और समुदाय के सदस्यों को साइट का उपयोग सम्मानपूर्वक करना चाहिए। उत्पीड़न, घृणास्पद भाषण, धमकी, प्रतिरूपण, स्पैम, धोखाधड़ीपूर्ण गतिविधि, या दूसरों के अनुभव को बाधित करने के प्रयास स्वीकार्य नहीं हैं।",
          "यदि Astrology Today भविष्य में सार्वजनिक टिप्पणियाँ, प्रस्तुतियाँ, प्रोफ़ाइल या इंटरैक्टिव उपकरण शुरू करता है, तो हम ऐसे किसी भी सामग्री का संयमन, सीमांकन या निष्कासन कर सकते हैं जो स्वागतपूर्ण वातावरण को कमजोर करे या मंच की भावना से टकराए।",
        ],
      },
      {
        id: "editorial",
        title: "3. संपादकीय मानक",
        body: [
          "हम ज्योतिष को एक चिंतनशील अभ्यास, एक रचनात्मक भाषा और एक व्याख्यात्मक ढाँचे के रूप में प्रस्तुत करना चाहते हैं। हमारे लेख और पूर्वानुमान सद्भावना में लिखे जाने चाहिए, भ्रामक दावों से बचना चाहिए, और प्रतीकात्मक व्याख्या, मत और तथ्यात्मक जानकारी के बीच स्पष्ट भेद करना चाहिए।",
          "Astrology Today किसी भी समय स्पष्टता, सटीकता, स्वर या ब्रांड के अनुरूपता को बेहतर बनाने के लिए सामग्री को संशोधित, अद्यतन या हटा सकता है। प्रमुख लेखकों और योगदानकर्ताओं से भी यही मानक पालन करने की अपेक्षा की जाती है।",
        ],
      },
      {
        id: "wellness",
        title: "4. वेलनेस और सलाह की सीमाएं",
        body: [
          "Astrology Today मानसिक स्वास्थ्य, वेलनेस और व्यक्तिगत विकास से संबंधित मार्गदर्शन दे सकता है, लेकिन यह चिकित्सकीय, कानूनी, कर-संबंधी या वित्तीय सलाह नहीं देता। हमारी सामग्री केवल शैक्षिक, संपादकीय और प्रेरणात्मक उद्देश्यों के लिए है।",
          "पाठकों को गंभीर व्यक्तिगत, स्वास्थ्य, कानूनी या वित्तीय निर्णय लेते समय स्वतंत्र विवेक का उपयोग करना चाहिए और योग्य पेशेवरों से परामर्श लेना चाहिए। ऐसा कोई भी सामग्री जो निर्भरता, भय या जीवन के परिणामों के बारे में पूर्ण निश्चितता को बढ़ावा दे, इस साइट की भावना के बाहर है।",
        ],
      },
      {
        id: "submissions",
        title: "5. उपयोगकर्ता प्रस्तुतियाँ और साझा सामग्री",
        body: [
          "यदि आप Astrology Today को पाठ, कला, प्रशंसापत्र, चार्ट या अन्य सामग्री भेजते हैं, तो आप यह पुष्टि करते हैं कि आपके पास उन्हें साझा करने का अधिकार है और ऐसा करने से किसी अन्य व्यक्ति के अधिकारों, गोपनीयता या बौद्धिक संपदा का उल्लंघन नहीं होता।",
          "प्रकाशन या फीचर विचारार्थ सामग्री भेजकर, आप Astrology Today को उस सामग्री की समीक्षा, संपादन, स्वरूपण और साइट, न्यूज़लेटर तथा संबंधित प्रचार माध्यमों में प्रकाशन की अनुमति देते हैं, जब तक कि कोई अलग लिखित समझौता लागू न हो।",
        ],
      },
      {
        id: "copyright",
        title: "6. कॉपीराइट, श्रेय और उचित उपयोग",
        body: [
          "Astrology Today की ब्रांडिंग, डिज़ाइन तत्व, मौलिक लेखन, दृश्य सामग्री और संकलित साइट सामग्री लागू बौद्धिक संपदा कानूनों द्वारा संरक्षित हैं। आप बिना अनुमति के साइट के महत्वपूर्ण भागों की नकल, पुनर्प्रकाशन, स्क्रैपिंग, बिक्री या पुनर्वितरण नहीं कर सकते।",
          "स्पष्ट श्रेय के साथ छोटे उद्धरण, जहाँ कानूनी और उचित हों, स्वीकार्य हो सकते हैं। यदि आपको लगता है कि साइट पर कोई सामग्री आपके अधिकारों का उल्लंघन करती है, तो आप पर्याप्त विवरण के साथ हमसे संपर्क कर सकते हैं ताकि हम जाँच कर उचित उत्तर दे सकें।",
        ],
      },
      {
        id: "commercial",
        title: "7. विज्ञापन, साझेदारियाँ और प्रचार",
        body: [
          "प्रायोजित सामग्री, सशुल्क प्लेसमेंट, एफिलिएट संबंध और साझेदारियाँ Astrology Today के स्वर और मूल्यों के अनुरूप होने चाहिए। हम ऐसे प्रचारों को अस्वीकार करने का अधिकार सुरक्षित रखते हैं जो भ्रामक, निम्न-निष्ठा वाले, शोषणकारी या पाठक अनुभव से असंगत लगें।",
          "व्यावसायिक साझेदार स्पष्ट रूप से कही गई बातों से अधिक समर्थन का संकेत नहीं दे सकते। कोई भी प्रचार सामग्री स्पष्ट रूप से चिन्हित होनी चाहिए और इस प्रकार प्रस्तुत की जानी चाहिए कि पाठक का विश्वास बना रहे।",
        ],
      },
      {
        id: "privacy",
        title: "8. गोपनीयता, खाते और सुरक्षा",
        body: [
          "जहाँ खाते, फ़ॉर्म या न्यूज़लेटर साइनअप उपलब्ध हों, वहाँ उपयोगकर्ताओं से सटीक जानकारी देने और अपने पहुँच विवरण सुरक्षित रखने की अपेक्षा की जाती है। अनधिकृत पहुँच प्राप्त करने, कमजोरियों की जाँच करने, या एकत्रित डेटा का दुरुपयोग करने के प्रयास सख्ती से निषिद्ध हैं।",
          "Astrology Today साइट संचालन, ग्राहकों से संवाद और अनुभव को बेहतर बनाने के लिए आवश्यक सीमित जानकारी संग्रहीत और संसाधित कर सकता है। जैसे-जैसे ये प्रणालियाँ विस्तृत होंगी, अलग गोपनीयता शर्तें और अधिक विवरण प्रदान कर सकती हैं।",
        ],
      },
      {
        id: "enforcement",
        title: "9. प्रवर्तन और अद्यतन",
        body: [
          "यदि इन नियमों का उल्लंघन होता है, या साइट, हमारे पाठकों, या हमारे सहयोगियों की सुरक्षा के लिए आवश्यक हो, तो हम पहुँच निलंबित कर सकते हैं, सामग्री हटा सकते हैं, सुविधाएँ सीमित कर सकते हैं, या अन्य उचित कार्रवाई कर सकते हैं।",
          "Astrology Today के विकसित होने के साथ ये साइट नियम समय-समय पर बदल सकते हैं। अद्यतन के बाद साइट का उपयोग जारी रखने का अर्थ है कि आप यहाँ प्रकाशित वर्तमान संस्करण को स्वीकार करते हैं।",
        ],
      },
    ],
  },
  ur: {
    metadataTitle: "سائٹ قواعد | Astrology Today",
    metadataDescription:
      "Astrology Today کے سائٹ قواعد، اداراتی حدود اور کمیونٹی معیار۔",
    intro:
      "یہ قواعد Astrology Today کے لہجے، حدود اور معیار کی وضاحت کرتے ہیں۔ ان کا مقصد قاری کے تجربے کی حفاظت، ادارتی دیانت کی حمایت، اور ہمارے نجومی کام کو واضح، زمین سے جڑا اور خوبصورت رکھنا ہے۔",
    sections: [
      {
        id: "purpose",
        title: "1. Astrology Today کا مقصد",
        body: [
          "Astrology Today نجوم، علامت نگاری، ادوار اور پُر غور خود احتسابی کے لیے ایک اشاعتی اور دریافتاتی پلیٹ فارم ہے۔ ہم پیش گوئیاں، مضامین، بصری فیچرز اور تعلیمی مواد شائع کرتے ہیں تاکہ قارئین نجومی خیالات کو تجسس، تخیل اور توجہ کے ساتھ دریافت کر سکیں۔",
          "یہ سائٹ اس لیے موجود ہے کہ نجوم کو خوبصورت، قابلِ رسائی اور سنجیدہ محسوس کرایا جا سکے۔ پلیٹ فارم پر موجود ہر چیز کو اسی مقصد کی حمایت کرنی چاہیے: ابہام کے بجائے وضاحت، خوف کے بجائے غور و فکر، اور سنسنی خیزی کے بجائے باوقار تعبیر۔",
        ],
      },
      {
        id: "community",
        title: "2. بااحترام استعمال اور کمیونٹی طرزِ عمل",
        body: [
          "زائرین، سبسکرائبرز، تعاون کاروں اور کمیونٹی کے اراکین کو سائٹ کا استعمال بااحترام انداز میں کرنا چاہیے۔ ہراسانی، نفرت انگیز گفتگو، دھمکی، جعل سازی، اسپیم، فراڈ، یا دوسروں کے تجربے کو خراب کرنے کی کوششیں جائز نہیں ہیں۔",
          "اگر Astrology Today عوامی تبصرے، جمع شدہ مواد، پروفائلز یا انٹرایکٹو ٹولز متعارف کرائے، تو ہم ایسے مواد کو محدود، معتدل یا حذف کر سکتے ہیں جو ایک خوش آمدیدی ماحول کو نقصان پہنچائے یا پلیٹ فارم کی روح کے خلاف ہو۔",
        ],
      },
      {
        id: "editorial",
        title: "3. اداراتی معیار",
        body: [
          "ہم نجوم کو ایک غور طلب عمل، ایک تخلیقی زبان اور ایک تشریحی فریم ورک کے طور پر پیش کرنا چاہتے ہیں۔ ہمارے مضامین اور پیش گوئیاں نیک نیتی سے لکھی جائیں، فریب دینے والے دعووں سے بچیں، اور علامتی تعبیر، رائے اور حقائق کے درمیان واضح فرق قائم کریں۔",
          "Astrology Today کسی بھی وقت وضاحت، درستی، لہجے یا برانڈ کے مطابق ہم آہنگی بہتر بنانے کے لیے مواد میں ترمیم، اپ ڈیٹ یا حذف کر سکتا ہے۔ نمایاں مصنفین اور معاونین سے بھی یہی معیار اپنانے کی توقع کی جاتی ہے۔",
        ],
      },
      {
        id: "wellness",
        title: "4. فلاح و مشورے کی حدود",
        body: [
          "Astrology Today ذہنی صحت، فلاح و بہبود اور ذاتی ترقی سے متعلق رہنمائی فراہم کر سکتا ہے، لیکن یہ طبی، قانونی، ٹیکس یا مالی مشورہ نہیں دیتا۔ ہمارا مواد صرف تعلیمی، اداراتی اور الہامی مقاصد کے لیے ہے۔",
          "قارئین کو سنجیدہ ذاتی، صحت، قانونی یا مالی فیصلے کرتے وقت اپنا آزادانہ فیصلہ استعمال کرنا چاہیے اور اہل ماہرین سے رجوع کرنا چاہیے۔ ایسا مواد جو انحصار، خوف یا زندگی کے نتائج کے بارے میں قطعی یقین پیدا کرے، اس سائٹ کی روح سے باہر ہے۔",
        ],
      },
      {
        id: "submissions",
        title: "5. صارف کی جمع کرائی گئی اور مشترکہ مواد",
        body: [
          "اگر آپ Astrology Today کو متن، فن پارہ، تعریفی بیانات، چارٹس یا دیگر مواد بھیجتے ہیں، تو آپ تصدیق کرتے ہیں کہ آپ کو انہیں شیئر کرنے کا حق حاصل ہے اور ایسا کرنے سے کسی دوسرے شخص کے حقوق، نجی معلومات یا فکری ملکیت کی خلاف ورزی نہیں ہوتی۔",
          "اشاعت یا نمایاں کیے جانے کے لیے مواد جمع کرا کر، آپ Astrology Today کو یہ اجازت دیتے ہیں کہ وہ اس مواد کا جائزہ لے، اس میں تدوین کرے، اسے فارمیٹ کرے اور سائٹ، نیوز لیٹر اور متعلقہ تشہیری چینلز کے ساتھ شائع کرے، جب تک کہ کوئی الگ تحریری معاہدہ نافذ نہ ہو۔",
        ],
      },
      {
        id: "copyright",
        title: "6. کاپی رائٹ، کریڈٹس اور منصفانہ استعمال",
        body: [
          "Astrology Today کی برانڈنگ، ڈیزائن عناصر، اصل تحریریں، بصری مواد اور مرتب شدہ سائٹ مواد قابلِ اطلاق فکری املاک کے قوانین کے تحت محفوظ ہیں۔ آپ اجازت کے بغیر سائٹ کے نمایاں حصوں کی نقل، دوبارہ اشاعت، اسکریپنگ، فروخت یا دوبارہ تقسیم نہیں کر سکتے۔",
          "واضح کریڈٹ کے ساتھ مختصر اقتباسات، جہاں قانونی اور منصفانہ ہوں، قابلِ قبول ہو سکتے ہیں۔ اگر آپ سمجھتے ہیں کہ سائٹ پر موجود کوئی مواد آپ کے حقوق کی خلاف ورزی کرتا ہے، تو آپ مناسب تفصیل کے ساتھ ہم سے رابطہ کر سکتے ہیں تاکہ ہم جانچ کر مناسب ردِعمل دے سکیں۔",
        ],
      },
      {
        id: "commercial",
        title: "7. اشتہارات، شراکت داریاں اور پروموشنز",
        body: [
          "اسپانسر شدہ مواد، ادا شدہ پلیسمنٹس، افیلیئیٹ تعلقات اور شراکت داریاں Astrology Today کے لہجے اور اقدار کے مطابق ہونی چاہئیں۔ ہم ایسے پروموشنز کو مسترد کرنے کا حق محفوظ رکھتے ہیں جو گمراہ کن، کم دیانت والے، استحصالی یا قاری کے تجربے سے غیر ہم آہنگ محسوس ہوں۔",
          "تجارتی شراکت دار واضح طور پر بیان کردہ حد سے زیادہ حمایت یا توثیق کا تاثر نہیں دے سکتے۔ ہر پروموشنل مواد کو واضح شناخت کے ساتھ اور اس انداز میں پیش کیا جانا چاہیے جو قاری کے اعتماد کا احترام کرے۔",
        ],
      },
      {
        id: "privacy",
        title: "8. پرائیویسی، اکاؤنٹس اور سیکیورٹی",
        body: [
          "جہاں اکاؤنٹس، فارمز یا نیوز لیٹر سائن اپ فراہم کیے جائیں، وہاں صارفین سے درست معلومات دینے اور اپنے رسائی کے کوائف محفوظ رکھنے کی توقع کی جاتی ہے۔ غیر مجاز رسائی حاصل کرنے، کمزوریوں کی جانچ کرنے یا جمع شدہ ڈیٹا کے غلط استعمال کی کوششیں سختی سے ممنوع ہیں۔",
          "Astrology Today سائٹ چلانے، سبسکرائبرز سے رابطہ رکھنے اور تجربے کو بہتر بنانے کے لیے درکار محدود معلومات محفوظ اور پراسیس کر سکتا ہے۔ جیسے جیسے یہ نظام پھیلیں گے، الگ پرائیویسی شرائط مزید تفصیل فراہم کر سکتی ہیں۔",
        ],
      },
      {
        id: "enforcement",
        title: "9. نفاذ اور اپ ڈیٹس",
        body: [
          "اگر ان قواعد کی خلاف ورزی ہو، یا سائٹ، ہمارے قارئین یا ہمارے تعاون کاروں کی حفاظت کے لیے ضروری ہو، تو ہم رسائی معطل کر سکتے ہیں، مواد ہٹا سکتے ہیں، خصوصیات محدود کر سکتے ہیں یا دیگر معقول اقدامات کر سکتے ہیں۔",
          "Astrology Today کے ارتقا کے ساتھ یہ سائٹ قواعد وقتاً فوقتاً بدل سکتے ہیں۔ اپ ڈیٹس کے بعد سائٹ کا استعمال جاری رکھنا اس بات کی علامت ہے کہ آپ یہاں شائع شدہ موجودہ ورژن کو قبول کرتے ہیں۔",
        ],
      },
    ],
  },
  sa: {
    metadataTitle: "साइट-नियमाः | Astrology Today",
    metadataDescription:
      "Astrology Today इत्यस्य साइट-नियमाः, सम्पादकीय-सीमाः, समुदाय-मानकाः च।",
    intro:
      "एते नियमाः Astrology Today इत्यस्य स्वरं, मर्यादाः, मानकांश्च वर्णयन्ति। एतेषां उद्देश्यः पाठक-अनुभवस्य रक्षणम्, सम्पादकीय-निष्ठायाः समर्थनम्, ज्योतिषकार्यस्य स्पष्टं, स्थितं, रमणीयं च रक्षणम् अस्ति।",
    sections: [
      {
        id: "purpose",
        title: "1. Astrology Today इत्यस्य प्रयोजनम्",
        body: [
          "Astrology Today ज्योतिषस्य, संकेतविद्यायाः, चक्राणां, मननशील-आत्मचिन्तनस्य च प्रकाशन-आविष्कार-मञ्चः अस्ति। वयं भविष्यवाण्यः, लेखान्, दृश्य-विशेषाङ्कान्, शैक्षिक-सामग्रीम् च प्रकाशयामः, येन पाठकाः कौतुकेन, कल्पनया, सावधानतया च ज्योतिषीय-विचारान् अन्वेष्टुं शक्नुवन्ति।",
          "अयं जालस्थलः ज्योतिषं रमणीयं, सुलभं, विचारपूर्वकं च अनुभवयितुं निर्मितः अस्ति। अत्र स्थितं सर्वं तदेव लक्ष्यं समर्थयेत्: संशयस्य स्थाने स्पष्टता, भयस्य स्थाने मननम्, सनसनीकरणस्य स्थाने विवेकिनी व्याख्या।",
        ],
      },
      {
        id: "community",
        title: "2. मान्य-उपयोगः समुदायाचारश्च",
        body: [
          "आगन्तुकाः, सदस्याः, सहयोगिनः, समुदायस्य सदस्याश्च एतत् जालस्थानं ससम्मानं उपयुञ्जीरन्। उत्पीडनम्, द्वेषभाषणम्, भीषणम्, छद्मरूपधारणम्, अवाञ्छित-सन्देश-प्रसारणम्, कपट-क्रिया, अथवा अन्येषां अनुभव-विघात-प्रयत्नाः न अनुमन्यन्ते।",
          "यदि Astrology Today सार्वजनिक-टिप्पणीः, प्रस्तुतीः, परिचय-पत्राणि, अन्तःक्रियात्मक-साधनानि वा स्थापयति, तर्हि वयं तादृशं सामग्रीं नियन्त्रयेम, सीमयेम, अपास्येम वा या स्वागतशीलं वातावरणं नाशयति अथवा अस्य मञ्चस्य भावेन विरुद्धा अस्ति।",
        ],
      },
      {
        id: "editorial",
        title: "3. सम्पादकीय-मानकाः",
        body: [
          "वयं ज्योतिषं मननशील-प्रयोगरूपेण, सृजनात्मक-भाषारूपेण, व्याख्यान-चक्ररूपेण च प्रस्तुतुम् इच्छामः। अस्माकं लेखाः भविष्यवाण्यश्च सद्भावेन लिखिताः स्युः, छलयुक्त-दावान् परित्यजन्तु, तथा सांकेतिक-व्याख्या, अभिप्रायः, तथ्यसूचना च स्पष्टतया पृथक्कुर्युः।",
          "Astrology Today कदाचित् स्पष्टतां, यथार्थतां, स्वर-साम्यं, ब्राण्ड-संगतिं वा वर्धयितुं सामग्रीं संशोधितुं, अद्यतनयितुं, अपासितुं वा शक्नोति। प्रमुख-लेखकाः योगदानकर्तारश्च एतान् एव मानकान् अनुसरन्तु।",
        ],
      },
      {
        id: "wellness",
        title: "4. स्वास्थ्य-उपदेशयोः सीमाः",
        body: [
          "Astrology Today मानसिक-स्वास्थ्यस्य, कल्याणस्य, व्यक्तित्व-विकासस्य च मार्गदर्शनं दातुं शक्नोति, किन्तु चिकित्सकीयम्, वैधानिकम्, कर-संबद्धम्, आर्थिकम् वा परामर्शं न ददाति। अस्माकं सामग्री केवलं शैक्षिक-, सम्पादकीय-, प्रेरणात्मक-उद्देश्यार्थं अस्ति।",
          "गम्भीर-व्यक्तिगत-, स्वास्थ्य-, वैधानिक-, आर्थिक-निर्णयेषु पाठकैः स्वविवेकः उपयोज्यः, योग्य-विशेषज्ञाः च परामर्शनीयाः। या सामग्री आश्रयभावं, भयम्, जीवन-परिणामेषु परम-निश्चिततां वा प्रोत्साहयति, सा अस्य जालस्थानस्य भावात् बहिः अस्ति।",
        ],
      },
      {
        id: "submissions",
        title: "5. उपयोक्तृ-प्रस्तुतयः साझीकृत-सामग्री च",
        body: [
          "यदि भवन्तः Astrology Today प्रति लेखनम्, कला, प्रशंसापत्राणि, कुण्डल्यः, अन्यां सामग्रीं वा प्रेषयन्ति, तर्हि भवन्तः अस्य साझाकरणस्य अधिकारं स्वीकुर्वन्ति तथा एतत् अन्यस्य अधिकारं, गोपनीयतां, बौद्धिक-सम्पत्तिं वा न लङ्घयति इति अपि प्रतिजानन्ति।",
          "प्रकाशनार्थं वा विशेष-प्रदर्शन-विचारार्थं सामग्रीं प्रेष्य, भवन्तः Astrology Today इत्यस्मै तस्य समीक्षणं, संपादनं, रूपायनं, प्रकाशनं च कर्तुं अनुमतिं ददति, यावत् भिन्नः लिखित-समयः न प्रवर्तते।",
        ],
      },
      {
        id: "copyright",
        title: "6. प्रतिलिप्यधिकारः, श्रेयः, न्याय्य-उपयोगश्च",
        body: [
          "Astrology Today इत्यस्य ब्राण्डिंग्, रूपनिर्माण-तत्त्वानि, मौलिक-लेखनम्, दृश्य-सामग्री, संकलित-जालसामग्री च यथोचित-बौद्धिक-सम्पत्ति-नियमैः संरक्षिताः सन्ति। अनुमतिं विना भवन्तः जालस्थानस्य प्रमुख-भागानां प्रतिलिपिं, पुनःप्रकाशनम्, सङ्ग्रहणम्, विक्रयम्, पुनर्वितरणम् वा कर्तुं न शक्नुवन्ति।",
          "स्पष्ट-श्रेयसा सह लघु-उद्धरणानि, यत्र वैधानिकं न्याय्यं च, स्वीकर्तुं शक्यन्ते। यदि भवन्तः मन्यन्ते यत् अत्र काचित् सामग्री भवन्तः अधिकारान् लङ्घयति, तर्हि पर्याप्त-विवरेण अस्मान् सम्प्रेष्टुं शक्नुवन्ति, येन वयं परीक्ष्य यथोचितं प्रत्युत्तरं ददेम।",
        ],
      },
      {
        id: "commercial",
        title: "7. विज्ञापनानि, सहभागिताः, प्रचाराश्च",
        body: [
          "प्रायोजित-सामग्री, शुल्क-आधारित-स्थापनानि, सहभाजक-सम्बन्धाः, सहभागिताश्च Astrology Today इत्यस्य स्वरेण मूल्यैश्च अनुरूपाः भवेयुः। ये प्रचाराः भ्रमकारिणः, अल्प-निष्ठाः, शोषणात्मकाः, पाठक-अनुभवेन विसंगताः वा भासन्ते, तान् वयं निराकर्तुं अधिकारं धारयामः।",
          "व्यावसायिक-सहभागिनः स्पष्टतया उक्तात् अधिकां अनुमोदन-संज्ञां न दातुं शक्नुवन्ति। सर्वं प्रचार-सामग्री स्पष्टतया निर्दिष्टा स्यात् तथा पाठक-विश्वासं सम्मानयन् रूपेण प्रस्तुतव्या।",
        ],
      },
      {
        id: "privacy",
        title: "8. गोपनीयता, खातानि, सुरक्षा च",
        body: [
          "यत्र खातानि, प्रपत्राणि, समाचार-पत्र-सदस्यताः वा प्रदीयन्ते, तत्र उपयोक्तारः यथार्थ-सूचनां दद्यु: तथा स्व-प्रवेश-विवराणि सुरक्षितानि धारयेयुः। अनधिकृत-प्रवेश-प्रयत्नाः, दुर्बलता-परीक्षणम्, सङ्गृहीत-तथ्यानां दुरुपयोगः वा कदापि न अनुमन्यते।",
          "Astrology Today जालस्थान-परिचालनाय, सदस्यैः सह संवादाय, अनुभव-सुधाराय च आवश्यकां सीमित-सूचनां संगृह्णीयात्, संसाधयेत् च। एतेषां प्रणालीनाम् विस्तारसमये पृथक् गोपनीयता-नियमाः अधिकं विवरणं दास्यन्ति।",
        ],
      },
      {
        id: "enforcement",
        title: "9. प्रवर्तनम् अद्यतनानि च",
        body: [
          "यदि एते नियमाः लङ्घ्यन्ते, अथवा जालस्थानस्य, पाठकानां, सहयोगिनां वा रक्षणार्थं आवश्यकं भवति, तर्हि वयं प्रवेशं निलम्बयेम, सामग्रीं अपास्येम, कार्यविधीन् सीमयेम, अन्यां युक्तियुक्तां क्रियां वा कुर्याम।",
          "Astrology Today इत्यस्य विकासेन सह एते साइट-नियमाः कालान्तरे परिवर्तितुं शक्नुवन्ति। अद्यतनानन्तरं जालस्थानस्य निरन्तर-उपयोगः अत्र प्रकाशितं वर्तमान-रूपं स्वीकृतम् इति सूचयति।",
        ],
      },
    ],
  },
  pa: {
    metadataTitle: "ਸਾਈਟ ਨਿਯਮ | Astrology Today",
    metadataDescription:
      "Astrology Today ਦੇ ਸਾਈਟ ਨਿਯਮ, ਸੰਪਾਦਕੀ ਹੱਦਾਂ ਅਤੇ ਕਮਿਊਨਟੀ ਮਾਪਦੰਡ।",
    intro:
      "ਇਹ ਨਿਯਮ Astrology Today ਦੀ ਟੋਨ, ਹੱਦਾਂ ਅਤੇ ਮਾਪਦੰਡਾਂ ਦਾ ਵਰਣਨ ਕਰਦੇ ਹਨ। ਇਹ ਪਾਠਕ ਅਨੁਭਵ ਦੀ ਰੱਖਿਆ ਕਰਨ, ਸੰਪਾਦਕੀ ਇਮਾਨਦਾਰੀ ਦਾ ਸਮਰਥਨ ਕਰਨ ਅਤੇ ਸਾਡੇ ਜੋਤਿਸ਼ੀ ਕੰਮ ਨੂੰ ਸਪਸ਼ਟ, ਸੰਤੁਲਿਤ ਅਤੇ ਸੁੰਦਰ ਰੱਖਣ ਲਈ ਬਣਾਏ ਗਏ ਹਨ।",
    sections: [
      {
        id: "purpose",
        title: "1. Astrology Today ਦਾ ਉਦੇਸ਼",
        body: [
          "Astrology Today ਜੋਤਿਸ਼, ਪ੍ਰਤੀਕਵਾਦ, ਚੱਕਰਾਂ ਅਤੇ ਸੋਚ-ਵਿਚਾਰ ਵਾਲੀ ਆਤਮ-ਚਿੰਤਨ ਲਈ ਇੱਕ ਪ੍ਰਕਾਸ਼ਨ ਅਤੇ ਖੋਜ ਪਲੇਟਫਾਰਮ ਹੈ। ਅਸੀਂ ਭਵਿੱਖਬਾਣੀਆਂ, ਲੇਖ, ਵਿਜ਼ੂਅਲ ਫੀਚਰ ਅਤੇ ਸਿੱਖਿਆਤਮਕ ਸਮੱਗਰੀ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਦੇ ਹਾਂ, ਤਾਂ ਜੋ ਪਾਠਕ ਜਿਗਿਆਸਾ, ਕਲਪਨਾ ਅਤੇ ਸਾਵਧਾਨੀ ਨਾਲ ਜੋਤਿਸ਼ੀ ਵਿਚਾਰਾਂ ਦੀ ਖੋਜ ਕਰ ਸਕਣ।",
          "ਇਹ ਸਾਈਟ ਇਸ ਲਈ ਮੌਜੂਦ ਹੈ ਕਿ ਜੋਤਿਸ਼ ਸੁੰਦਰ, ਆਸਾਨੀ ਨਾਲ ਪਹੁੰਚਯੋਗ ਅਤੇ ਸੋਚ-ਵਿਚਾਰ ਵਾਲੀ ਲੱਗੇ। ਇਸ ਪਲੇਟਫਾਰਮ ਉੱਤੇ ਹਰ ਚੀਜ਼ ਨੂੰ ਇਸੇ ਉਦੇਸ਼ ਦਾ ਸਮਰਥਨ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ: ਗੁੰਝਲ ਦੀ ਥਾਂ ਸਪਸ਼ਟਤਾ, ਡਰ ਦੀ ਥਾਂ ਮਨਨ, ਅਤੇ ਸਨਸਨੀ ਦੀ ਥਾਂ ਵਿਚਾਰਸ਼ੀਲ ਵਿਆਖਿਆ।",
        ],
      },
      {
        id: "community",
        title: "2. ਆਦਰਭਰਿਆ ਵਰਤਾਉ ਅਤੇ ਕਮਿਊਨਟੀ ਆਚਰਨ",
        body: [
          "ਮੁਲਾਕਾਤੀ, ਸਬਸਕ੍ਰਾਈਬਰ, ਸਹਿਯੋਗੀ ਅਤੇ ਕਮਿਊਨਟੀ ਦੇ ਮੈਂਬਰ ਸਾਈਟ ਦਾ ਵਰਤਾਵ ਆਦਰ ਨਾਲ ਕਰਨ। ਹੈਰਾਸੀ, ਨਫ਼ਰਤੀ ਬੋਲ, ਧਮਕਾਉਣਾ, ਨਕਲੀ ਪਹਿਚਾਣ, ਸਪੈਮ, ਧੋਖਾਧੜੀ ਜਾਂ ਹੋਰਨਾਂ ਦੇ ਅਨੁਭਵ ਨੂੰ ਖਰਾਬ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਮਨਜ਼ੂਰ ਨਹੀਂ।",
          "ਜੇ Astrology Today ਜਨਤਕ ਟਿੱਪਣੀਆਂ, ਸਬਮਿਸ਼ਨ, ਪ੍ਰੋਫ਼ਾਈਲ ਜਾਂ ਇੰਟਰਐਕਟਿਵ ਸੰਦ ਲਿਆਉਂਦਾ ਹੈ, ਤਾਂ ਅਸੀਂ ਉਸ ਸਮੱਗਰੀ ਨੂੰ ਨਿਯੰਤ੍ਰਿਤ, ਸੀਮਿਤ ਜਾਂ ਹਟਾ ਸਕਦੇ ਹਾਂ ਜੋ ਸਵਾਗਤੀ ਮਾਹੌਲ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਾਵੇ ਜਾਂ ਪਲੇਟਫਾਰਮ ਦੀ ਭਾਵਨਾ ਨਾਲ ਟਕਰਾਏ।",
        ],
      },
      {
        id: "editorial",
        title: "3. ਸੰਪਾਦਕੀ ਮਾਪਦੰਡ",
        body: [
          "ਅਸੀਂ ਜੋਤਿਸ਼ ਨੂੰ ਇੱਕ ਮਨਨਸ਼ੀਲ ਅਭਿਆਸ, ਇੱਕ ਰਚਨਾਤਮਕ ਭਾਸ਼ਾ ਅਤੇ ਇੱਕ ਵਿਆਖਿਆਤਮਕ ਢਾਂਚੇ ਵਜੋਂ ਪੇਸ਼ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹਾਂ। ਸਾਡੇ ਲੇਖ ਅਤੇ ਭਵਿੱਖਬਾਣੀਆਂ ਚੰਗੀ ਨੀਅਤ ਨਾਲ ਲਿਖੀਆਂ ਜਾਣ, ਹੇਰਾਫੇਰੀ ਵਾਲੇ ਦਾਵਿਆਂ ਤੋਂ ਬਚਣ, ਅਤੇ ਪ੍ਰਤੀਕਾਤਮਕ ਵਿਆਖਿਆ, ਰਾਏ ਅਤੇ ਤੱਥਾਤਮਕ ਜਾਣਕਾਰੀ ਵਿਚਕਾਰ ਸਪਸ਼ਟ ਫਰਕ ਰੱਖਣ।",
          "Astrology Today ਕਿਸੇ ਵੀ ਵੇਲੇ ਸਪਸ਼ਟਤਾ, ਸਹੀਪਣ, ਟੋਨ ਜਾਂ ਬ੍ਰਾਂਡ ਨਾਲ ਮੇਲ ਬਿਹਤਰ ਕਰਨ ਲਈ ਸਮੱਗਰੀ ਨੂੰ ਸੋਧ, ਅੱਪਡੇਟ ਜਾਂ ਹਟਾ ਸਕਦਾ ਹੈ। ਮੁੱਖ ਲੇਖਕਾਂ ਅਤੇ ਯੋਗਦਾਨਕਾਰਾਂ ਤੋਂ ਵੀ ਇਹੀ ਮਾਪਦੰਡ ਪਾਲਣ ਦੀ ਉਮੀਦ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
        ],
      },
      {
        id: "wellness",
        title: "4. ਵੈੱਲਨੈੱਸ ਅਤੇ ਸਲਾਹ ਦੀਆਂ ਸੀਮਾਵਾਂ",
        body: [
          "Astrology Today ਮਾਨਸਿਕ ਸਿਹਤ, ਵੈੱਲਨੈੱਸ ਅਤੇ ਨਿੱਜੀ ਵਿਕਾਸ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ ਦੇ ਸਕਦਾ ਹੈ, ਪਰ ਇਹ ਚਿਕਿਤਸਕ, ਕਾਨੂੰਨੀ, ਟੈਕਸ ਜਾਂ ਵਿੱਤੀ ਸਲਾਹ ਨਹੀਂ ਦਿੰਦਾ। ਸਾਡੀ ਸਮੱਗਰੀ ਸਿਰਫ਼ ਸਿੱਖਿਆਤਮਕ, ਸੰਪਾਦਕੀ ਅਤੇ ਪ੍ਰੇਰਕ ਉਦੇਸ਼ਾਂ ਲਈ ਹੈ।",
          "ਪਾਠਕਾਂ ਨੂੰ ਗੰਭੀਰ ਨਿੱਜੀ, ਸਿਹਤ, ਕਾਨੂੰਨੀ ਜਾਂ ਵਿੱਤੀ ਫੈਸਲੇ ਕਰਦੇ ਸਮੇਂ ਆਪਣਾ ਸੁਤੰਤਰ ਨਿਰਣਾ ਵਰਤਣਾ ਚਾਹੀਦਾ ਹੈ ਅਤੇ ਯੋਗ ਪੇਸ਼ੇਵਰਾਂ ਨਾਲ ਸਲਾਹ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ। ਅਜਿਹੀ ਸਮੱਗਰੀ ਜੋ ਨਿਰਭਰਤਾ, ਡਰ ਜਾਂ ਜੀਵਨ ਦੇ ਨਤੀਜਿਆਂ ਬਾਰੇ ਪੂਰਨ ਨਿਸ਼ਚਿਤਤਾ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰੇ, ਇਸ ਸਾਈਟ ਦੀ ਭਾਵਨਾ ਤੋਂ ਬਾਹਰ ਹੈ।",
        ],
      },
      {
        id: "submissions",
        title: "5. ਯੂਜ਼ਰ ਸਬਮਿਸ਼ਨ ਅਤੇ ਸਾਂਝੀ ਸਮੱਗਰੀ",
        body: [
          "ਜੇ ਤੁਸੀਂ Astrology Today ਨੂੰ ਲਿਖਤ, ਕਲਾ, ਪ੍ਰਸ਼ੰਸਾਪੱਤਰ, ਚਾਰਟ ਜਾਂ ਹੋਰ ਸਮੱਗਰੀ ਭੇਜਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਇਹ ਪੁਸ਼ਟੀ ਕਰਦੇ ਹੋ ਕਿ ਤੁਹਾਨੂੰ ਇਹ ਸਾਂਝੀ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਹੈ ਅਤੇ ਐਸਾ ਕਰਨ ਨਾਲ ਕਿਸੇ ਹੋਰ ਦੇ ਅਧਿਕਾਰਾਂ, ਗੋਪਨੀਯਤਾ ਜਾਂ ਬੌਧਿਕ ਸੰਪਤੀ ਦੀ ਉਲੰਘਣਾ ਨਹੀਂ ਹੁੰਦੀ।",
          "ਪ੍ਰਕਾਸ਼ਨ ਜਾਂ ਫੀਚਰ ਵਿਚਾਰ ਲਈ ਸਮੱਗਰੀ ਭੇਜ ਕੇ ਤੁਸੀਂ Astrology Today ਨੂੰ ਇਸ ਦੀ ਸਮੀਖਿਆ ਕਰਨ, ਸੋਧ ਕਰਨ, ਫਾਰਮੈਟ ਕਰਨ ਅਤੇ ਇਸਨੂੰ ਸਾਈਟ, ਨਿਊਜ਼ਲੇਟਰ ਅਤੇ ਸੰਬੰਧਿਤ ਪ੍ਰਚਾਰ ਮਾਧਿਅਮਾਂ ਨਾਲ ਜੋੜ ਕੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦੇ ਹੋ, ਜਦੋਂ ਤੱਕ ਕੋਈ ਵੱਖਰਾ ਲਿਖਤੀ ਸਮਝੌਤਾ ਲਾਗੂ ਨਾ ਹੋਵੇ।",
        ],
      },
      {
        id: "copyright",
        title: "6. ਕਾਪੀਰਾਈਟ, ਕਰੈਡਿਟ ਅਤੇ ਨਿਆਂਯੋਗ ਵਰਤੋਂ",
        body: [
          "Astrology Today ਦੀ ਬ੍ਰਾਂਡਿੰਗ, ਡਿਜ਼ਾਇਨ ਤੱਤ, ਮੂਲ ਲਿਖਤ, ਵਿਜ਼ੂਅਲ ਅਤੇ ਇਕੱਠੀ ਕੀਤੀ ਸਾਈਟ ਸਮੱਗਰੀ ਲਾਗੂ ਬੌਧਿਕ ਸੰਪਤੀ ਕਾਨੂੰਨਾਂ ਅਧੀਨ ਸੁਰੱਖਿਅਤ ਹਨ। ਤੁਸੀਂ ਇਜਾਜ਼ਤ ਤੋਂ ਬਿਨਾਂ ਸਾਈਟ ਦੇ ਵੱਡੇ ਹਿੱਸਿਆਂ ਦੀ ਨਕਲ, ਦੁਬਾਰਾ ਪ੍ਰਕਾਸ਼ਨਾ, ਸਕ੍ਰੈਪਿੰਗ, ਵਿਕਰੀ ਜਾਂ ਮੁੜ ਵੰਡ ਨਹੀਂ ਕਰ ਸਕਦੇ।",
          "ਜਿੱਥੇ ਕਾਨੂੰਨੀ ਅਤੇ ਨਿਆਂਯੋਗ ਹੋਵੇ, ਉੱਥੇ ਸਪਸ਼ਟ ਕਰੈਡਿਟ ਨਾਲ ਛੋਟੇ ਉਧਰਣ ਕਬੂਲਯੋਗ ਹੋ ਸਕਦੇ ਹਨ। ਜੇ ਤੁਹਾਨੂੰ ਲੱਗਦਾ ਹੈ ਕਿ ਸਾਈਟ ਉੱਤੇ ਮੌਜੂਦ ਕੋਈ ਸਮੱਗਰੀ ਤੁਹਾਡੇ ਅਧਿਕਾਰਾਂ ਦੀ ਉਲੰਘਣਾ ਕਰਦੀ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਕਾਫ਼ੀ ਵੇਰਵੇ ਨਾਲ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ ਤਾਂ ਜੋ ਅਸੀਂ ਜਾਂਚ ਕਰਕੇ ਢੰਗ ਨਾਲ ਜਵਾਬ ਦੇ ਸਕੀਏ।",
        ],
      },
      {
        id: "commercial",
        title: "7. ਵਿਗਿਆਪਨ, ਭਾਗੀਦਾਰੀਆਂ ਅਤੇ ਪ੍ਰਮੋਸ਼ਨ",
        body: [
          "ਸਪਾਂਸਰ ਕੀਤੀ ਸਮੱਗਰੀ, ਭੁਗਤਾਨ ਕੀਤੇ ਸਥਾਨ, ਅਫ਼ਿਲੀਏਟ ਸੰਬੰਧ ਅਤੇ ਭਾਗੀਦਾਰੀਆਂ Astrology Today ਦੀ ਟੋਨ ਅਤੇ ਮੁੱਲਾਂ ਨਾਲ ਮੇਲ ਖਾਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ। ਅਸੀਂ ਉਹਨਾਂ ਪ੍ਰਮੋਸ਼ਨਾਂ ਨੂੰ ਰੱਦ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਰੱਖਦੇ ਹਾਂ ਜੋ ਭਰਮਿਤ ਕਰਨ ਵਾਲੀਆਂ, ਘੱਟ ਇਮਾਨਦਾਰ, ਸ਼ੋਸ਼ਣਕਾਰੀ ਜਾਂ ਪਾਠਕ ਅਨੁਭਵ ਨਾਲ ਅਸੰਗਤ ਮਹਿਸੂਸ ਹੋਣ।",
          "ਵਪਾਰਕ ਭਾਗੀਦਾਰ ਸਪਸ਼ਟ ਤੌਰ ‘ਤੇ ਕਹੀ ਗਈ ਹੱਦ ਤੋਂ ਵੱਧ ਸਮਰਥਨ ਦਾ ਭਾਵ ਨਹੀਂ ਦੇ ਸਕਦੇ। ਹਰ ਪ੍ਰਚਾਰ ਸਮੱਗਰੀ ਨੂੰ ਸਪਸ਼ਟ ਤੌਰ ‘ਤੇ ਦਰਸਾਇਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ ਅਤੇ ਇਸ ਤਰ੍ਹਾਂ ਪੇਸ਼ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ ਕਿ ਪਾਠਕ ਦੇ ਭਰੋਸੇ ਦਾ ਸਤਿਕਾਰ ਰਹੇ।",
        ],
      },
      {
        id: "privacy",
        title: "8. ਗੋਪਨੀਯਤਾ, ਖਾਤੇ ਅਤੇ ਸੁਰੱਖਿਆ",
        body: [
          "ਜਿੱਥੇ ਖਾਤੇ, ਫਾਰਮ ਜਾਂ ਨਿਊਜ਼ਲੇਟਰ ਸਾਈਨਅੱਪ ਦਿੱਤੇ ਜਾਂਦੇ ਹਨ, ਉੱਥੇ ਯੂਜ਼ਰਾਂ ਤੋਂ ਸਹੀ ਜਾਣਕਾਰੀ ਦੇਣ ਅਤੇ ਆਪਣੇ ਐਕਸੈੱਸ ਵੇਰਵੇ ਸੁਰੱਖਿਅਤ ਰੱਖਣ ਦੀ ਉਮੀਦ ਹੁੰਦੀ ਹੈ। ਬਿਨਾ ਅਧਿਕਾਰ ਪ੍ਰਵੇਸ਼ ਲੈਣ, ਕਮਜ਼ੋਰੀਆਂ ਦੀ ਜਾਂਚ ਕਰਨ ਜਾਂ ਇਕੱਠੇ ਕੀਤੇ ਡਾਟੇ ਦੇ ਗਲਤ ਵਰਤੋਂ ਦੀਆਂ ਕੋਸ਼ਿਸ਼ਾਂ ਸਖ਼ਤੀ ਨਾਲ ਮਨਾਹੀ ਹਨ।",
          "Astrology Today ਸਾਈਟ ਚਲਾਉਣ, ਸਬਸਕ੍ਰਾਈਬਰਾਂ ਨਾਲ ਸੰਚਾਰ ਕਰਨ ਅਤੇ ਅਨੁਭਵ ਬਿਹਤਰ ਕਰਨ ਲਈ ਲੋੜੀਂਦੀ ਸੀਮਿਤ ਜਾਣਕਾਰੀ ਸਟੋਰ ਅਤੇ ਪ੍ਰੋਸੈਸ ਕਰ ਸਕਦਾ ਹੈ। ਜਿਵੇਂ ਜਿਵੇਂ ਇਹ ਸਿਸਟਮ ਫੈਲਦੇ ਹਨ, ਵੱਖਰੀਆਂ ਗੋਪਨੀਯਤਾ ਸ਼ਰਤਾਂ ਹੋਰ ਵੇਰਵਾ ਦੇ ਸਕਦੀਆਂ ਹਨ।",
        ],
      },
      {
        id: "enforcement",
        title: "9. ਲਾਗੂਕਰਨ ਅਤੇ ਅੱਪਡੇਟ",
        body: [
          "ਜੇ ਇਹ ਨਿਯਮ ਤੋੜੇ ਜਾਣ, ਜਾਂ ਸਾਈਟ, ਸਾਡੇ ਪਾਠਕਾਂ ਜਾਂ ਸਾਡੇ ਸਹਿਯੋਗੀਆਂ ਦੀ ਰੱਖਿਆ ਲਈ ਲੋੜ ਹੋਵੇ, ਤਾਂ ਅਸੀਂ ਐਕਸੈੱਸ ਰੋਕ ਸਕਦੇ ਹਾਂ, ਸਮੱਗਰੀ ਹਟਾ ਸਕਦੇ ਹਾਂ, ਫੀਚਰ ਸੀਮਿਤ ਕਰ ਸਕਦੇ ਹਾਂ ਜਾਂ ਹੋਰ ਉਚਿਤ ਕਦਮ ਚੁੱਕ ਸਕਦੇ ਹਾਂ।",
          "Astrology Today ਦੇ ਵਿਕਾਸ ਨਾਲ ਇਹ ਸਾਈਟ ਨਿਯਮ ਸਮੇਂ ਦੇ ਨਾਲ ਬਦਲ ਸਕਦੇ ਹਨ। ਅੱਪਡੇਟ ਤੋਂ ਬਾਅਦ ਸਾਈਟ ਵਰਤਦੇ ਰਹਿਣ ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਤੁਸੀਂ ਇੱਥੇ ਪ੍ਰਕਾਸ਼ਿਤ ਮੌਜੂਦਾ ਸੰਸਕਰਣ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦੇ ਹੋ।",
        ],
      },
    ],
  },
  zh: {
    metadataTitle: "网站规则 | Astrology Today",
    metadataDescription:
      "Astrology Today 的网站规则、编辑边界与社区标准。",
    intro:
      "这些规则描述了塑造 Astrology Today 的语气、边界和标准。它们旨在保护读者体验、支持编辑完整性，并让我们的占星工作保持清晰、 grounded 且具有美感。",
    sections: [
      {
        id: "purpose",
        title: "1. Astrology Today 的宗旨",
        body: [
          "Astrology Today 是一个围绕占星、象征、周期与深思式自我反省的出版与发现平台。我们发布预测、文章、视觉内容与教育材料，帮助读者以好奇心、想象力和审慎态度探索占星理念。",
          "这个网站的存在，是为了让占星显得美、易接近且经过认真思考。平台上的一切都应该服务于这一目标：以清晰取代混乱，以反思取代恐惧，以审慎诠释取代耸动表达。",
        ],
      },
      {
        id: "community",
        title: "2. 尊重性的使用与社区行为",
        body: [
          "访客、订阅者、合作者和社区成员必须以尊重的方式使用本网站。不允许骚扰、仇恨言论、恐吓、冒充、垃圾信息、欺诈行为，或任何试图破坏他人体验的举动。",
          "如果 Astrology Today 未来引入公开评论、投稿、个人资料或互动工具，我们可能会审核、限制或移除那些破坏欢迎氛围或违背平台精神的内容。",
        ],
      },
      {
        id: "editorial",
        title: "3. 编辑标准",
        body: [
          "我们希望将占星呈现为一种反思性实践、一种创造性语言和一种诠释框架。我们的文章与预测应当出于善意撰写，避免操纵性主张，并清楚地区分象征性诠释、观点与事实信息。",
          "Astrology Today 可在任何时候修订、更新或移除材料，以提升清晰度、准确性、语气或与品牌的一致性。重点作者与撰稿人也应遵守同样的标准。",
        ],
      },
      {
        id: "wellness",
        title: "4. 健康与建议边界",
        body: [
          "Astrology Today 可以提供关于心理健康、身心福祉和个人成长的指导，但并不提供医疗、法律、税务或财务建议。我们的内容仅用于教育、编辑与启发目的。",
          "读者在做出严肃的个人、健康、法律或财务决定时，应独立判断并咨询合格专业人士。任何鼓励依赖、恐惧或对人生结果抱持绝对确定性的内容，都不符合本网站的精神。",
        ],
      },
      {
        id: "submissions",
        title: "5. 用户投稿与共享材料",
        body: [
          "如果你向 Astrology Today 提交文字、艺术作品、见证、星盘或其他材料，你即确认自己拥有分享这些材料的权利，并且此举不会侵犯他人的权利、隐私或知识产权。",
          "通过提交供发布或特色展示考虑的材料，你即允许 Astrology Today 就网站、新闻通讯及相关推广渠道对该材料进行审阅、编辑、排版和发布，除非另有书面协议。",
        ],
      },
      {
        id: "copyright",
        title: "6. 版权、署名与合理使用",
        body: [
          "Astrology Today 的品牌标识、设计元素、原创文字、视觉内容及汇编而成的网站内容，均受适用知识产权法律保护。未经许可，你不得复制、转载、抓取、出售或重新分发网站中的大量内容。",
          "在合法且合理的情况下，带有清晰署名的简短引用可能是允许的。如果你认为网站上的某项内容侵犯了你的权利，可以提供足够细节与我们联系，以便我们进行调查并妥善回应。",
        ],
      },
      {
        id: "commercial",
        title: "7. 广告、合作与推广",
        body: [
          "赞助内容、付费投放、联盟关系与合作项目必须符合 Astrology Today 的语气与价值观。对于那些显得误导、缺乏诚信、带有剥削性，或与读者体验不一致的推广内容，我们保留拒绝的权利。",
          "商业合作伙伴不得暗示超出明确说明之外的认可。任何推广材料都应被清楚标识，并以尊重读者信任的方式呈现。",
        ],
      },
      {
        id: "privacy",
        title: "8. 隐私、账户与安全",
        body: [
          "当网站提供账户、表单或新闻通讯订阅时，用户应提供准确的信息并妥善保管自己的访问凭据。任何试图获取未授权访问、探查漏洞或滥用收集数据的行为均被严格禁止。",
          "Astrology Today 可能会存储和处理为运营网站、与订阅者沟通及改善体验所必需的有限信息。随着这些系统扩展，单独的隐私条款可能会提供更详细说明。",
        ],
      },
      {
        id: "enforcement",
        title: "9. 执行与更新",
        body: [
          "当这些规则被违反，或当有必要保护网站、读者或合作伙伴时，我们可能会暂停访问、移除内容、限制功能，或采取其他合理措施。",
          "随着 Astrology Today 的发展，这些网站规则可能会随时间变化。在更新后继续使用本网站，表示你接受此处发布的当前版本。",
        ],
      },
    ],
  },
  ja: {
    metadataTitle: "サイトルール | Astrology Today",
    metadataDescription:
      "Astrology Today のサイトルール、編集上の境界、コミュニティ基準。",
    intro:
      "これらのルールは、Astrology Today を形づくるトーン、境界、基準を示しています。読者体験を守り、編集上の誠実さを支え、私たちの占星術の仕事を明快で地に足のついた美しいものに保つためのものです。",
    sections: [
      {
        id: "purpose",
        title: "1. Astrology Today の目的",
        body: [
          "Astrology Today は、占星術、象徴、サイクル、そして思慮深い自己省察のための出版・発見プラットフォームです。私たちは、読者が好奇心、想像力、配慮をもって占星術的な考え方を探究できるように、予報、記事、ビジュアル特集、教育的コンテンツを発信しています。",
          "このサイトは、占星術を美しく、親しみやすく、よく考えられたものとして感じられるようにするために存在しています。プラットフォーム上のすべては、その目標を支えるべきです。混乱より明快さ、恐れより省察、扇情性より思慮ある解釈を優先します。",
        ],
      },
      {
        id: "community",
        title: "2. 敬意ある利用とコミュニティ行動",
        body: [
          "訪問者、購読者、協力者、コミュニティのメンバーは、このサイトを敬意をもって利用しなければなりません。嫌がらせ、ヘイトスピーチ、威圧、なりすまし、スパム、詐欺的行為、または他者の体験を妨げる行為は認められません。",
          "Astrology Today が将来的に公開コメント、投稿、プロフィール、または対話型ツールを導入した場合、私たちは歓迎的な環境を損なう内容や、プラットフォームの精神に反する内容をモデレート、制限、または削除する場合があります。",
        ],
      },
      {
        id: "editorial",
        title: "3. 編集基準",
        body: [
          "私たちは占星術を、内省的な実践、創造的な言語、そして解釈の枠組みとして提示したいと考えています。記事や予報は誠実に書かれ、操作的な主張を避け、象徴的解釈、意見、事実情報を明確に区別するべきです。",
          "Astrology Today は、明快さ、正確さ、トーン、またはブランドとの整合性を高めるために、いつでも内容を改訂、更新、削除することがあります。注目作家や寄稿者にも同じ基準が求められます。",
        ],
      },
      {
        id: "wellness",
        title: "4. ウェルネスと助言の境界",
        body: [
          "Astrology Today は、メンタルヘルス、ウェルネス、個人の成長に関するガイダンスを提供する場合がありますが、医療、法律、税務、金融上の助言は提供しません。私たちのコンテンツは、教育的、編集的、そして着想を与える目的のためのものです。",
          "読者は、重大な個人的、健康上、法的、または財務上の決定を行う際には、自らの判断を用い、資格を持つ専門家に相談するべきです。依存、恐れ、または人生の結果に対する絶対的な確実性を促す内容は、このサイトの精神に反します。",
        ],
      },
      {
        id: "submissions",
        title: "5. ユーザー投稿と共有資料",
        body: [
          "Astrology Today に文章、アート作品、証言、チャート、その他の資料を提出する場合、あなたはそれらを共有する権利を有しており、かつそれによって他人の権利、プライバシー、知的財産を侵害しないことを確認するものとします。",
          "掲載または特集の検討のために資料を提出することで、別段の書面合意がない限り、Astrology Today がその資料をサイト、ニュースレター、および関連するプロモーション・チャネルに関連して確認、編集、整形、掲載することを許可するものとします。",
        ],
      },
      {
        id: "copyright",
        title: "6. 著作権、クレジット、公正利用",
        body: [
          "Astrology Today のブランド、デザイン要素、オリジナルの文章、ビジュアル、そして編集・集約されたサイト内容は、適用される知的財産法によって保護されています。許可なく、サイトの大部分をコピー、再掲載、スクレイピング、販売、再配布することはできません。",
          "法的かつ公正である範囲において、明確なクレジットを伴う短い引用は許容される場合があります。サイト上の素材があなたの権利を侵害していると考える場合は、調査と適切な対応ができるよう、十分な詳細を添えてご連絡ください。",
        ],
      },
      {
        id: "commercial",
        title: "7. 広告、提携、プロモーション",
        body: [
          "スポンサー付きコンテンツ、有料掲載、アフィリエイト関係、提携は、Astrology Today のトーンと価値観に合致していなければなりません。読者体験とずれている、誤解を招く、誠実さに欠ける、搾取的だと感じられるプロモーションは、私たちの裁量で拒否することがあります。",
          "商業パートナーは、明示的に述べられた範囲を超えて支持・承認を示唆してはなりません。あらゆるプロモーション素材は明確に表示され、読者の信頼を尊重する形で提示されるべきです。",
        ],
      },
      {
        id: "privacy",
        title: "8. プライバシー、アカウント、セキュリティ",
        body: [
          "アカウント、フォーム、ニュースレター登録が提供される場合、ユーザーは正確な情報を提供し、自身のアクセス情報を安全に保つことが期待されます。不正アクセスの試み、脆弱性の探索、収集されたデータの不正利用は厳しく禁止されます。",
          "Astrology Today は、サイト運営、購読者との連絡、体験向上に必要な限定的な情報を保存・処理することがあります。これらのシステムが拡張されるにつれ、別個のプライバシー条件がより詳細を提供する場合があります。",
        ],
      },
      {
        id: "enforcement",
        title: "9. 執行と更新",
        body: [
          "これらのルールが違反された場合、またはサイト、読者、協力者を守るために必要な場合、私たちはアクセス停止、コンテンツ削除、機能制限、その他合理的な措置を講じることがあります。",
          "これらのサイトルールは、Astrology Today の進化に伴って時間とともに変更されることがあります。更新後もサイトを利用し続けることは、ここに掲載された最新の版を受け入れたことを意味します。",
        ],
      },
    ],
  },
  yue: {
    metadataTitle: "網站規則 | Astrology Today",
    metadataDescription:
      "Astrology Today 嘅網站規則、編輯界線同社群標準。",
    intro:
      "呢套規則講清楚 Astrology Today 嘅語氣、界線同標準。目的係保障讀者體驗、維護編輯完整性，同令我哋嘅占星內容保持清晰、踏實同有美感。",
    sections: [
      {
        id: "purpose",
        title: "1. Astrology Today 嘅宗旨",
        body: [
          "Astrology Today 係一個關於占星、象徵、循環同深思式自我反省嘅出版同探索平台。我哋會發佈預測、文章、視覺特集同教育內容，幫助讀者以好奇心、想像力同細緻態度去探索占星理念。",
          "呢個網站存在嘅目的，就係令占星感覺上更靚、更容易接近，同埋更有深思熟慮。平台上面所有內容都應該支持呢個目標：用清晰取代混亂，用反思取代恐懼，用審慎詮釋取代嘩眾取寵。",
        ],
      },
      {
        id: "community",
        title: "2. 尊重式使用同社群行為",
        body: [
          "訪客、訂閱者、合作夥伴同社群成員都必須以尊重嘅方式使用網站。騷擾、仇恨言論、恐嚇、冒充身份、垃圾訊息、詐騙行為，或者任何破壞其他人使用體驗嘅企圖，都唔被允許。",
          "如果 Astrology Today 日後加入公開留言、投稿、個人檔案或者互動工具，我哋可以審核、限制或者移除任何破壞友善環境、或者違反平台精神嘅內容。",
        ],
      },
      {
        id: "editorial",
        title: "3. 編輯標準",
        body: [
          "我哋希望將占星呈現成一種反思式實踐、一種創意語言，同埋一套詮釋框架。我哋嘅文章同預測都應該本著善意去寫，避免操控性講法，並且清楚區分象徵性詮釋、個人意見同事實資料。",
          "Astrology Today 可以隨時修訂、更新或者移除內容，以改善清晰度、準確性、語氣或者品牌一致性。重點作者同投稿者亦都需要遵守同一套標準。",
        ],
      },
      {
        id: "wellness",
        title: "4. 身心健康同建議界線",
        body: [
          "Astrology Today 可以提供有關心理健康、身心福祉同個人成長嘅指引，但唔提供醫療、法律、稅務或者財務意見。我哋嘅內容只供教育、編輯同啟發用途。",
          "讀者喺作出重要個人、健康、法律或者財務決定時，應該自行判斷，並向合資格專業人士求助。任何鼓勵依賴、恐懼，或者對人生結果抱持絕對確定性嘅內容，都唔符合本網站精神。",
        ],
      },
      {
        id: "submissions",
        title: "5. 用戶投稿同共享內容",
        body: [
          "如果你向 Astrology Today 提交文字、藝術作品、見證、星盤或者其他材料，即表示你確認自己有權分享呢啲內容，而且咁樣做唔會侵犯其他人嘅權利、私隱或者知識產權。",
          "當你提交內容作刊登或者精選考慮時，即表示你容許 Astrology Today 為咗網站、電子通訊同相關推廣渠道而審閱、編輯、排版同發佈該內容，除非另有書面協議。",
        ],
      },
      {
        id: "copyright",
        title: "6. 版權、署名同合理使用",
        body: [
          "Astrology Today 嘅品牌、設計元素、原創文字、視覺內容同整理後嘅網站內容，都受到適用知識產權法保護。未經許可，你唔可以複製、轉載、擷取、出售或者重新分發網站中大量內容。",
          "喺合法同合理情況下，附有清楚署名嘅簡短引文可以被接受。如果你認為網站上某項內容侵犯咗你嘅權利，可以提供足夠細節聯絡我哋，等我哋調查同作出適當回應。",
        ],
      },
      {
        id: "commercial",
        title: "7. 廣告、合作同推廣",
        body: [
          "贊助內容、付費投放、聯盟關係同商業合作，都必須符合 Astrology Today 嘅語氣同價值觀。我哋保留權利拒絕任何令人覺得誤導、欠缺誠信、帶有剝削性，或者同讀者體驗唔一致嘅推廣內容。",
          "商業夥伴唔可以暗示超出明確聲明範圍之外嘅支持或者背書。所有推廣內容都應該清楚標示，並以尊重讀者信任嘅方式呈現。",
        ],
      },
      {
        id: "privacy",
        title: "8. 私隱、帳戶同安全",
        body: [
          "當網站提供帳戶、表格或者電子報訂閱時，用戶應該提供準確資料，並妥善保管自己嘅登入資訊。任何企圖取得未授權存取、探測漏洞，或者濫用收集到嘅數據，都屬於嚴格禁止行為。",
          "Astrology Today 可能會儲存同處理運作網站、同訂閱者溝通，以及改善體驗所需嘅有限資料。隨著系統擴展，可能會有獨立私隱條款提供更多細節。",
        ],
      },
      {
        id: "enforcement",
        title: "9. 執行同更新",
        body: [
          "當呢啲規則被違反，或者有需要保護網站、我哋嘅讀者或者合作夥伴時，我哋可以暫停存取、移除內容、限制功能，或者採取其他合理措施。",
          "隨住 Astrology Today 發展，呢套網站規則可以隨時間更改。更新之後繼續使用網站，即表示你接受目前喺呢度發佈嘅版本。",
        ],
      },
    ],
  },
  ko: {
    metadataTitle: "사이트 규칙 | Astrology Today",
    metadataDescription:
      "Astrology Today의 사이트 규칙, 편집 경계, 커뮤니티 기준.",
    intro:
      "이 규칙은 Astrology Today를 형성하는 어조, 경계, 기준을 설명합니다. 독자 경험을 보호하고 편집적 진정성을 지키며 우리의 점성술 작업을 명확하고 단단하며 아름답게 유지하기 위한 것입니다.",
    sections: [
      {
        id: "purpose",
        title: "1. Astrology Today의 목적",
        body: [
          "Astrology Today는 점성술, 상징, 순환, 그리고 사려 깊은 자기 성찰을 위한 출판 및 발견 플랫폼입니다. 우리는 독자들이 호기심, 상상력, 세심함을 가지고 점성학적 아이디어를 탐구할 수 있도록 예측, 글, 시각적 특집, 교육 콘텐츠를 제공합니다.",
          "이 사이트는 점성술이 아름답고, 접근 가능하며, 충분히 숙고된 것으로 느껴지도록 존재합니다. 플랫폼의 모든 요소는 그 목표를 뒷받침해야 합니다. 혼란보다 명확함을, 두려움보다 성찰을, 자극적인 표현보다 신중한 해석을 우선합니다.",
        ],
      },
      {
        id: "community",
        title: "2. 존중하는 사용과 커뮤니티 행동",
        body: [
          "방문자, 구독자, 협력자, 커뮤니티 구성원은 이 사이트를 존중하는 방식으로 이용해야 합니다. 괴롭힘, 혐오 발언, 위협, 사칭, 스팸, 사기 행위, 혹은 다른 사람의 경험을 방해하려는 시도는 허용되지 않습니다.",
          "Astrology Today가 향후 공개 댓글, 제출물, 프로필 또는 상호작용 도구를 도입할 경우, 우리는 환영하는 환경을 해치거나 플랫폼의 정신과 충돌하는 콘텐츠를 조정, 제한 또는 삭제할 수 있습니다.",
        ],
      },
      {
        id: "editorial",
        title: "3. 편집 기준",
        body: [
          "우리는 점성술을 성찰적 실천이자 창조적 언어이며 해석적 틀로 제시하고자 합니다. 우리의 글과 예측은 선의로 작성되어야 하며, 조작적인 주장들을 피하고, 상징적 해석, 의견, 사실 정보를 분명히 구분해야 합니다.",
          "Astrology Today는 명확성, 정확성, 어조 또는 브랜드 정렬을 개선하기 위해 언제든지 자료를 수정, 업데이트 또는 제거할 수 있습니다. 주요 필자와 기고자 역시 같은 기준을 따라야 합니다.",
        ],
      },
      {
        id: "wellness",
        title: "4. 웰니스와 조언의 경계",
        body: [
          "Astrology Today는 정신 건강, 웰니스, 개인 성장에 관한 안내를 제공할 수 있지만, 의료, 법률, 세무 또는 재정 조언은 제공하지 않습니다. 우리의 콘텐츠는 오직 교육적, 편집적, 영감적 목적을 위한 것입니다.",
          "독자들은 중요한 개인적, 건강상, 법적, 재정적 결정을 내릴 때 스스로의 판단을 사용하고 자격을 갖춘 전문가의 도움을 받아야 합니다. 의존, 두려움, 혹은 삶의 결과에 대한 절대적 확신을 부추기는 콘텐츠는 이 사이트의 정신과 맞지 않습니다.",
        ],
      },
      {
        id: "submissions",
        title: "5. 사용자 제출물과 공유 자료",
        body: [
          "Astrology Today에 글, 예술 작품, 후기, 차트 또는 기타 자료를 제출하는 경우, 귀하는 이를 공유할 권리가 있으며 그 행위가 다른 사람의 권리, 사생활 또는 지적 재산을 침해하지 않는다는 것을 확인합니다.",
          "게시 또는 소개 검토를 위해 자료를 제출함으로써, 별도의 서면 계약이 없는 한 Astrology Today가 해당 자료를 사이트, 뉴스레터 및 관련 홍보 채널과 관련하여 검토, 편집, 형식화 및 게시하는 것을 허용하게 됩니다.",
        ],
      },
      {
        id: "copyright",
        title: "6. 저작권, 크레딧, 공정 이용",
        body: [
          "Astrology Today의 브랜딩, 디자인 요소, 원본 글, 시각 자료 및 편집된 사이트 콘텐츠는 적용되는 지적 재산권 법률에 의해 보호됩니다. 허가 없이 사이트의 상당 부분을 복사, 재게시, 스크래핑, 판매 또는 재배포할 수 없습니다.",
          "명확한 출처 표기가 있는 짧은 인용은 법적으로 허용되고 공정한 범위 안에서는 가능할 수 있습니다. 사이트의 자료가 자신의 권리를 침해한다고 생각한다면, 우리가 조사하고 적절히 대응할 수 있도록 충분한 세부 사항과 함께 연락해 주십시오.",
        ],
      },
      {
        id: "commercial",
        title: "7. 광고, 파트너십, 프로모션",
        body: [
          "스폰서 콘텐츠, 유료 배치, 제휴 관계, 파트너십은 Astrology Today의 어조와 가치에 맞아야 합니다. 독자 경험과 어긋나거나, 오해를 부르거나, 진정성이 부족하거나, 착취적으로 느껴지는 프로모션은 거부할 권리를 보유합니다.",
          "상업적 파트너는 명시적으로 언급된 범위를 넘어서는 지지나 보증을 암시해서는 안 됩니다. 모든 홍보 자료는 분명히 표시되어야 하며 독자의 신뢰를 존중하는 방식으로 제시되어야 합니다.",
        ],
      },
      {
        id: "privacy",
        title: "8. 개인정보, 계정 및 보안",
        body: [
          "계정, 양식 또는 뉴스레터 가입이 제공되는 경우, 사용자는 정확한 정보를 제공하고 자신의 접근 정보를 안전하게 유지해야 합니다. 무단 접근을 시도하거나, 취약점을 탐색하거나, 수집된 데이터를 오용하려는 행위는 엄격히 금지됩니다.",
          "Astrology Today는 사이트 운영, 구독자와의 소통, 경험 개선에 필요한 제한된 정보를 저장하고 처리할 수 있습니다. 이러한 시스템이 확장됨에 따라 별도의 개인정보 조건에서 더 자세한 내용을 제공할 수 있습니다.",
        ],
      },
      {
        id: "enforcement",
        title: "9. 집행 및 업데이트",
        body: [
          "이 규칙이 위반되거나, 사이트, 독자 또는 협력자를 보호하기 위해 필요하다고 판단될 경우, 우리는 접근을 중단시키고, 콘텐츠를 삭제하고, 기능을 제한하거나, 기타 합리적인 조치를 취할 수 있습니다.",
          "Astrology Today가 발전함에 따라 이 사이트 규칙은 시간이 지나면서 변경될 수 있습니다. 업데이트 후에도 사이트를 계속 사용하는 것은 여기 게시된 현재 버전을 수락한다는 의미입니다.",
        ],
      },
    ],
  },
};

export function getSiteRulesCopy(locale: SupportedLocale): SiteRulesCopy {
  return siteRulesCopy[locale] ?? siteRulesCopy[defaultLocale];
}
