import { defaultLocale, type SupportedLocale } from "./i18n";

export type AccessibilityStatementCopy = {
  metadataTitle: string;
  metadataDescription: string;
  toc: string[];
  statusHeading: string;
  statusBody: string[];
  contentHeading: string;
  contentLead: string;
  nonAccessibleItems: string[];
  preparationHeading: string;
  preparationBody: string[];
  feedbackHeading: string;
  feedbackBody: string[];
  feedbackResponse: string;
  enforcementHeading: string;
  enforcementBody: string;
};

const nonAccessibleItems = [
  "Elements must meet minimum color contrast ratio AA - Issue will be fixed by Q1 2026.",
  "All page content should be contained by landmarks - Issue will be fixed by Q1 2026.",
  "Links must have discernible text - Issue will be fixed by Q1 2026.",
  "<li> elements must be contained in a <ul> or <ol> - Issue will be fixed by Q1 2026.",
  "ARIA dialog and alert dialog nodes should have an accessible name - Issue will be fixed by Q1 2026.",
  "All page content should be contained by landmarks - Issue will be fixed by Q1 2026.",
];

const nonAccessibleItemOverrides: Partial<Record<SupportedLocale, string[]>> = {
  fr: [
    "Les éléments doivent respecter le contraste minimal AA - Problème corrigé d'ici T1 2026.",
    "Tout le contenu de la page doit être contenu dans des repères (landmarks) - Problème corrigé d'ici T1 2026.",
    "Les liens doivent comporter un texte identifiable - Problème corrigé d'ici T1 2026.",
    "Les éléments <li> doivent être contenus dans un <ul> ou un <ol> - Problème corrigé d'ici T1 2026.",
    "Les boîtes de dialogue ARIA et alert dialog doivent avoir un nom accessible - Problème corrigé d'ici T1 2026.",
    "Tout le contenu de la page doit être contenu dans des repères (landmarks) - Problème corrigé d'ici T1 2026.",
  ],
  it: [
    "Gli elementi devono rispettare il rapporto di contrasto minimo AA - Il problema sarà risolto entro il Q1 2026.",
    "Tutto il contenuto della pagina deve essere contenuto nei landmark - Il problema sarà risolto entro il Q1 2026.",
    "I link devono avere testo riconoscibile - Il problema sarà risolto entro il Q1 2026.",
    "Gli elementi <li> devono essere contenuti in un <ul> o <ol> - Il problema sarà risolto entro il Q1 2026.",
    "I dialoghi ARIA e alert dialog devono avere un nome accessibile - Il problema sarà risolto entro il Q1 2026.",
    "Tutto il contenuto della pagina deve essere contenuto nei landmark - Il problema sarà risolto entro il Q1 2026.",
  ],
  es: [
    "Los elementos deben cumplir con la relación mínima de contraste AA - El problema se corregirá para el T1 de 2026.",
    "Todo el contenido de la página debe estar contenido dentro de landmarks - El problema se corregirá para el T1 de 2026.",
    "Los enlaces deben tener texto identificable - El problema se corregirá para el T1 de 2026.",
    "Los elementos <li> deben estar contenidos dentro de un <ul> o <ol> - El problema se corregirá para el T1 de 2026.",
    "Los diálogos ARIA y alert dialog deben tener un nombre accesible - El problema se corregirá para el T1 de 2026.",
    "Todo el contenido de la página debe estar contenido dentro de landmarks - El problema se corregirá para el T1 de 2026.",
  ],
  hi: [
    "तत्वों को न्यूनतम AA रंग-कॉन्ट्रास्ट अनुपात पूरा करना होगा - यह समस्या Q1 2026 तक ठीक कर दी जाएगी।",
    "सभी पृष्ठ सामग्री को लैंडमार्क्स के भीतर होना चाहिए - यह समस्या Q1 2026 तक ठीक कर दी जाएगी।",
    "लिंक्स में स्पष्ट पहचाने जा सकने वाला पाठ होना चाहिए - यह समस्या Q1 2026 तक ठीक कर दी जाएगी।",
    "<li> तत्वों को <ul> या <ol> के भीतर होना चाहिए - यह समस्या Q1 2026 तक ठीक कर दी जाएगी।",
    "ARIA dialog और alert dialog नोड्स का सुलभ नाम होना चाहिए - यह समस्या Q1 2026 तक ठीक कर दी जाएगी।",
    "सभी पृष्ठ सामग्री को लैंडमार्क्स के भीतर होना चाहिए - यह समस्या Q1 2026 तक ठीक कर दी जाएगी।",
  ],
  ur: [
    "عناصر کو کم از کم AA رنگی تضاد کے تناسب پر پورا اترنا چاہیے - یہ مسئلہ Q1 2026 تک حل کر دیا جائے گا۔",
    "تمام صفحاتی مواد کو landmarks کے اندر ہونا چاہیے - یہ مسئلہ Q1 2026 تک حل کر دیا جائے گا۔",
    "لنکس میں واضح متن ہونا چاہیے - یہ مسئلہ Q1 2026 تک حل کر دیا جائے گا۔",
    "<li> عناصر کو <ul> یا <ol> کے اندر ہونا چاہیے - یہ مسئلہ Q1 2026 تک حل کر دیا جائے گا۔",
    "ARIA dialog اور alert dialog نوڈز کے لیے قابلِ رسائی نام ہونا چاہیے - یہ مسئلہ Q1 2026 تک حل کر دیا جائے گا۔",
    "تمام صفحاتی مواد کو landmarks کے اندر ہونا چاہیے - یہ مسئلہ Q1 2026 تک حل کر دیا جائے گا۔",
  ],
  sa: [
    "तत्त्वानि न्यूनतम-AA-वर्ण-विरोध-अनुपातं पूरयेयुः - अयं दोषः Q1 2026 पर्यन्तं संशोधितः भविष्यति।",
    "सर्वा पृष्ठ-सामग्री landmark-प्रदेशेषु निहिता भवेत् - अयं दोषः Q1 2026 पर्यन्तं संशोधितः भविष्यति।",
    "संबद्धेषु लिङ्केषु विवेचनीयः पाठः भवेत् - अयं दोषः Q1 2026 पर्यन्तं संशोधितः भविष्यति।",
    "<li> तत्त्वानि <ul> अथवा <ol> अन्तर्गतानि भवेत् - अयं दोषः Q1 2026 पर्यन्तं संशोधितः भविष्यति।",
    "ARIA dialog तथा alert dialog नोड्स इत्येषां सुलभ-नाम भवेत् - अयं दोषः Q1 2026 पर्यन्तं संशोधितः भविष्यति।",
    "सर्वा पृष्ठ-सामग्री landmark-प्रदेशेषु निहिता भवेत् - अयं दोषः Q1 2026 पर्यन्तं संशोधितः भविष्यति।",
  ],
  pa: [
    "ਤੱਤਾਂ ਨੂੰ ਘੱਟੋ-ਘੱਟ AA ਰੰਗੀ ਕਾਨਟ੍ਰਾਸਟ ਅਨੁਪਾਤ ਪੂਰਾ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ - ਇਹ ਸਮੱਸਿਆ Q1 2026 ਤੱਕ ਠੀਕ ਕਰ ਦਿੱਤੀ ਜਾਵੇਗੀ।",
    "ਸਾਰੀ ਪੰਨਾ ਸਮੱਗਰੀ landmarks ਦੇ ਅੰਦਰ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ - ਇਹ ਸਮੱਸਿਆ Q1 2026 ਤੱਕ ਠੀਕ ਕਰ ਦਿੱਤੀ ਜਾਵੇਗੀ।",
    "ਲਿੰਕਾਂ ਵਿੱਚ ਸਪਸ਼ਟ ਪਾਠ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ - ਇਹ ਸਮੱਸਿਆ Q1 2026 ਤੱਕ ਠੀਕ ਕਰ ਦਿੱਤੀ ਜਾਵੇਗੀ।",
    "<li> ਤੱਤਾਂ ਨੂੰ <ul> ਜਾਂ <ol> ਦੇ ਅੰਦਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ - ਇਹ ਸਮੱਸਿਆ Q1 2026 ਤੱਕ ਠੀਕ ਕਰ ਦਿੱਤੀ ਜਾਵੇਗੀ।",
    "ARIA dialog ਅਤੇ alert dialog nodes ਲਈ ਪਹੁੰਚਯੋਗ ਨਾਮ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ - ਇਹ ਸਮੱਸਿਆ Q1 2026 ਤੱਕ ਠੀਕ ਕਰ ਦਿੱਤੀ ਜਾਵੇਗੀ।",
    "ਸਾਰੀ ਪੰਨਾ ਸਮੱਗਰੀ landmarks ਦੇ ਅੰਦਰ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ - ਇਹ ਸਮੱਸਿਆ Q1 2026 ਤੱਕ ਠੀਕ ਕਰ ਦਿੱਤੀ ਜਾਵੇਗੀ।",
  ],
  zh: [
    "元素必须满足最低 AA 色彩对比度要求 - 该问题将于 2026 年第一季度前修复。",
    "所有页面内容都应包含在地标区域内 - 该问题将于 2026 年第一季度前修复。",
    "链接必须具有可辨识的文本 - 该问题将于 2026 年第一季度前修复。",
    "<li> 元素必须包含在 <ul> 或 <ol> 中 - 该问题将于 2026 年第一季度前修复。",
    "ARIA dialog 和 alert dialog 节点应具有可访问名称 - 该问题将于 2026 年第一季度前修复。",
    "所有页面内容都应包含在地标区域内 - 该问题将于 2026 年第一季度前修复。",
  ],
  ja: [
    "要素は最低 AA コントラスト比を満たす必要があります - この問題は 2026年第1四半期までに修正予定です。",
    "すべてのページコンテンツはランドマーク内に含まれる必要があります - この問題は 2026年第1四半期までに修正予定です。",
    "リンクには識別可能なテキストが必要です - この問題は 2026年第1四半期までに修正予定です。",
    "<li> 要素は <ul> または <ol> 内に含まれている必要があります - この問題は 2026年第1四半期までに修正予定です。",
    "ARIA dialog および alert dialog ノードにはアクセシブルな名前が必要です - この問題は 2026年第1四半期までに修正予定です。",
    "すべてのページコンテンツはランドマーク内に含まれる必要があります - この問題は 2026年第1四半期までに修正予定です。",
  ],
  yue: [
    "元素必須符合最低 AA 色彩對比要求 - 呢個問題會喺 2026 年第一季前修正。",
    "所有頁面內容都應該包含喺地標區域入面 - 呢個問題會喺 2026 年第一季前修正。",
    "連結必須有清楚可辨識嘅文字 - 呢個問題會喺 2026 年第一季前修正。",
    "<li> 元素必須包含喺 <ul> 或 <ol> 入面 - 呢個問題會喺 2026 年第一季前修正。",
    "ARIA dialog 同 alert dialog 節點應該有可存取名稱 - 呢個問題會喺 2026 年第一季前修正。",
    "所有頁面內容都應該包含喺地標區域入面 - 呢個問題會喺 2026 年第一季前修正。",
  ],
  ko: [
    "요소는 최소 AA 색상 대비 비율을 충족해야 합니다 - 이 문제는 2026년 1분기까지 수정될 예정입니다.",
    "모든 페이지 콘텐츠는 랜드마크 안에 포함되어야 합니다 - 이 문제는 2026년 1분기까지 수정될 예정입니다.",
    "링크에는 식별 가능한 텍스트가 있어야 합니다 - 이 문제는 2026년 1분기까지 수정될 예정입니다.",
    "<li> 요소는 <ul> 또는 <ol> 안에 포함되어야 합니다 - 이 문제는 2026년 1분기까지 수정될 예정입니다.",
    "ARIA dialog 및 alert dialog 노드는 접근 가능한 이름을 가져야 합니다 - 이 문제는 2026년 1분기까지 수정될 예정입니다.",
    "모든 페이지 콘텐츠는 랜드마크 안에 포함되어야 합니다 - 이 문제는 2026년 1분기까지 수정될 예정입니다.",
  ],
};

const metadataCopy: Record<SupportedLocale, { title: string; description: string }> = {
  en: {
    title: "Accessibility Statement | Astrology Today",
    description: "Creation Health accessibility statement for Astrology Today and related digital services.",
  },
  fr: {
    title: "Déclaration d'accessibilité | Astrology Today",
    description: "Déclaration d'accessibilité de Creation Health pour Astrology Today et les services numériques associés.",
  },
  it: {
    title: "Dichiarazione di accessibilità | Astrology Today",
    description: "Dichiarazione di accessibilità di Creation Health per Astrology Today e i servizi digitali correlati.",
  },
  es: {
    title: "Declaración de accesibilidad | Astrology Today",
    description: "Declaración de accesibilidad de Creation Health para Astrology Today y los servicios digitales relacionados.",
  },
  hi: {
    title: "अभिगम्यता वक्तव्य | Astrology Today",
    description: "Astrology Today और संबंधित डिजिटल सेवाओं के लिए Creation Health का अभिगम्यता वक्तव्य।",
  },
  ur: {
    title: "رسائی کا بیان | Astrology Today",
    description: "Astrology Today اور متعلقہ ڈیجیٹل خدمات کے لیے Creation Health کا رسائی بیان۔",
  },
  sa: {
    title: "सुलभता-वक्तव्यम् | Astrology Today",
    description: "Astrology Today तथा सम्बद्ध-डिजिटल-सेवाः विषये Creation Health इत्यस्य सुलभता-वक्तव्यम्।",
  },
  pa: {
    title: "ਪਹੁੰਚਯੋਗਤਾ ਬਿਆਨ | Astrology Today",
    description: "Astrology Today ਅਤੇ ਸੰਬੰਧਿਤ ਡਿਜ਼ੀਟਲ ਸੇਵਾਵਾਂ ਲਈ Creation Health ਦਾ ਪਹੁੰਚਯੋਗਤਾ ਬਿਆਨ।",
  },
  zh: {
    title: "无障碍声明 | Astrology Today",
    description: "适用于 Astrology Today 及相关数字服务的 Creation Health 无障碍声明。",
  },
  ja: {
    title: "アクセシビリティ声明 | Astrology Today",
    description: "Astrology Today と関連デジタルサービスに関する Creation Health のアクセシビリティ声明。",
  },
  yue: {
    title: "無障礙聲明 | Astrology Today",
    description: "適用於 Astrology Today 同相關數碼服務嘅 Creation Health 無障礙聲明。",
  },
  ko: {
    title: "접근성 성명서 | Astrology Today",
    description: "Astrology Today 및 관련 디지털 서비스에 대한 Creation Health의 접근성 성명서.",
  },
};

const englishBase = {
  toc: [
    "Accessibility Statement",
    "Compliance Status",
    "Non-accessible Content",
    "Preparation Of This Statement",
    "Feedback And Contact Information",
    "Enforcement Procedure",
  ],
  statusHeading: "Compliance Status",
  statusBody: [
    "This website is partially compliant with the EN 301 549 accessibility standard, which incorporates the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.",
    "Non-compliance means that some parts of the content may not fully meet accessibility requirements.",
  ],
  contentHeading: "Non-accessible Content",
  contentLead: "The content listed below is non-accessible for the following reasons.",
  preparationHeading: "Preparation Of This Accessibility Statement",
  preparationBody: [
    "This statement was prepared on April 11, 2026. The method used to prepare the statement: self-assessment based on the WCAG 2.1 AA success criteria.",
    "Last review date: April 20, 2026.",
  ],
  feedbackHeading: "Feedback And Contact Information",
  feedbackBody: [
    "We welcome your feedback on the accessibility of Astrology Today.",
    "If you encounter any accessibility barriers, please let us know:",
  ],
  feedbackResponse: "We aim to respond to accessibility feedback within 5-10 business days.",
  enforcementHeading: "Enforcement Procedure",
  enforcementBody:
    "If you are not satisfied with our response to your feedback, you can contact the responsible national enforcement body:",
};

const localizedCopy: Partial<Record<SupportedLocale, Omit<AccessibilityStatementCopy, "metadataTitle" | "metadataDescription" | "nonAccessibleItems">>> = {
  fr: {
    toc: ["Déclaration d'accessibilité", "État de conformité", "Contenu non accessible", "Préparation de cette déclaration", "Commentaires et coordonnées", "Procédure d'application"],
    statusHeading: "État de conformité",
    statusBody: [
      "Ce site est partiellement conforme à la norme d'accessibilité EN 301 549, qui intègre les WCAG 2.1 niveau AA.",
      "La non-conformité signifie que certaines parties du contenu peuvent ne pas répondre pleinement aux exigences d'accessibilité.",
    ],
    contentHeading: "Contenu non accessible",
    contentLead: "Le contenu ci-dessous n'est pas accessible pour les raisons suivantes.",
    preparationHeading: "Préparation de cette déclaration",
    preparationBody: [
      "Cette déclaration a été préparée le 11 avril 2026. La méthode utilisée repose sur une auto-évaluation fondée sur les critères WCAG 2.1 AA.",
      "Date de dernière révision: 20 avril 2026.",
    ],
    feedbackHeading: "Commentaires et coordonnées",
    feedbackBody: ["Nous accueillons vos commentaires sur l'accessibilité d'Astrology Today.", "Si vous rencontrez des obstacles d'accessibilité, veuillez nous le signaler:"],
    feedbackResponse: "Nous visons à répondre aux retours sur l'accessibilité sous 5 à 10 jours ouvrables.",
    enforcementHeading: "Procédure d'application",
    enforcementBody: "Si vous n'êtes pas satisfait de notre réponse, vous pouvez contacter l'organisme national compétent:",
  },
  es: {
    toc: ["Declaración de accesibilidad", "Estado de cumplimiento", "Contenido no accesible", "Preparación de esta declaración", "Comentarios e información de contacto", "Procedimiento de cumplimiento"],
    statusHeading: "Estado de cumplimiento",
    statusBody: [
      "Este sitio web es parcialmente conforme con la norma EN 301 549, que incorpora las WCAG 2.1 nivel AA.",
      "La falta de cumplimiento significa que algunas partes del contenido pueden no cumplir plenamente los requisitos de accesibilidad.",
    ],
    contentHeading: "Contenido no accesible",
    contentLead: "El contenido que figura a continuación no es accesible por las siguientes razones.",
    preparationHeading: "Preparación de esta declaración",
    preparationBody: [
      "Esta declaración fue preparada el 11 de abril de 2026. El método utilizado fue una autoevaluación basada en los criterios WCAG 2.1 AA.",
      "Fecha de última revisión: 20 de abril de 2026.",
    ],
    feedbackHeading: "Comentarios e información de contacto",
    feedbackBody: ["Agradecemos sus comentarios sobre la accesibilidad de Astrology Today.", "Si encuentra barreras de accesibilidad, por favor infórmenos:"],
    feedbackResponse: "Nuestro objetivo es responder a los comentarios sobre accesibilidad en un plazo de 5 a 10 días hábiles.",
    enforcementHeading: "Procedimiento de cumplimiento",
    enforcementBody: "Si no está satisfecho con nuestra respuesta, puede contactar al organismo nacional competente:",
  },
  zh: {
    toc: ["无障碍声明", "合规状态", "不可访问内容", "本声明的编制", "反馈与联系方式", "执行程序"],
    statusHeading: "合规状态",
    statusBody: [
      "本网站部分符合 EN 301 549 无障碍标准，该标准纳入了 WCAG 2.1 AA 级要求。",
      "部分不合规意味着某些内容可能尚未完全满足无障碍要求。",
    ],
    contentHeading: "不可访问内容",
    contentLead: "以下内容因下列原因而不可访问。",
    preparationHeading: "本声明的编制",
    preparationBody: [
      "本声明编制于 2026年4月11日。采用的方法为基于 WCAG 2.1 AA 成功标准的自我评估。",
      "最后审查日期：2026年4月20日。",
    ],
    feedbackHeading: "反馈与联系方式",
    feedbackBody: ["欢迎您就 Astrology Today 的无障碍体验向我们提供反馈。", "如果您遇到任何无障碍障碍，请告知我们："],
    feedbackResponse: "我们目标是在 5 到 10 个工作日内回复无障碍反馈。",
    enforcementHeading: "执行程序",
    enforcementBody: "如果您对我们的回复不满意，可以联系相应的国家执行机构：",
  },
  ja: {
    toc: ["アクセシビリティ声明", "準拠状況", "アクセスできないコンテンツ", "本声明の作成", "フィードバックと連絡先", "執行手続き"],
    statusHeading: "準拠状況",
    statusBody: [
      "本ウェブサイトは EN 301 549 アクセシビリティ基準に部分的に準拠しており、WCAG 2.1 レベル AA を含みます。",
      "非準拠とは、一部のコンテンツがアクセシビリティ要件を完全には満たしていない可能性があることを意味します。",
    ],
    contentHeading: "アクセスできないコンテンツ",
    contentLead: "以下のコンテンツは次の理由によりアクセシブルではありません。",
    preparationHeading: "本声明の作成",
    preparationBody: [
      "本声明は 2026年4月11日に作成されました。作成方法は WCAG 2.1 AA 達成基準に基づく自己評価です。",
      "最終確認日: 2026年4月20日。",
    ],
    feedbackHeading: "フィードバックと連絡先",
    feedbackBody: ["Astrology Today のアクセシビリティに関するご意見を歓迎します。", "アクセシビリティ上の障壁に遭遇した場合はお知らせください。"],
    feedbackResponse: "アクセシビリティに関するご意見には 5〜10 営業日以内の対応を目指します。",
    enforcementHeading: "執行手続き",
    enforcementBody: "当社の対応にご満足いただけない場合は、担当の国家執行機関に連絡できます:",
  },
  it: {
    toc: ["Dichiarazione di accessibilità", "Stato di conformità", "Contenuti non accessibili", "Preparazione di questa dichiarazione", "Feedback e contatti", "Procedura di applicazione"],
    statusHeading: "Stato di conformità",
    statusBody: [
      "Questo sito web è parzialmente conforme allo standard di accessibilità EN 301 549, che incorpora le WCAG 2.1 livello AA.",
      "La non conformità significa che alcune parti del contenuto potrebbero non soddisfare pienamente i requisiti di accessibilità.",
    ],
    contentHeading: "Contenuti non accessibili",
    contentLead: "I contenuti elencati di seguito non sono accessibili per i seguenti motivi.",
    preparationHeading: "Preparazione di questa dichiarazione",
    preparationBody: [
      "Questa dichiarazione è stata preparata l'11 aprile 2026. Il metodo utilizzato è una autovalutazione basata sui criteri di successo WCAG 2.1 AA.",
      "Data dell'ultima revisione: 20 aprile 2026.",
    ],
    feedbackHeading: "Feedback e contatti",
    feedbackBody: ["Accogliamo con favore il tuo feedback sull'accessibilità di Astrology Today.", "Se riscontri barriere di accessibilità, faccelo sapere:"],
    feedbackResponse: "Il nostro obiettivo è rispondere ai feedback sull'accessibilità entro 5-10 giorni lavorativi.",
    enforcementHeading: "Procedura di applicazione",
    enforcementBody: "Se non sei soddisfatto della nostra risposta, puoi contattare l'organismo nazionale competente:",
  },
  hi: {
    toc: ["अभिगम्यता वक्तव्य", "अनुपालन स्थिति", "अप्रवेशयोग्य सामग्री", "इस वक्तव्य की तैयारी", "प्रतिक्रिया और संपर्क जानकारी", "प्रवर्तन प्रक्रिया"],
    statusHeading: "अनुपालन स्थिति",
    statusBody: [
      "यह वेबसाइट EN 301 549 अभिगम्यता मानक के साथ आंशिक रूप से अनुरूप है, जो WCAG 2.1 स्तर AA को सम्मिलित करता है।",
      "आंशिक अनुपालन का अर्थ है कि सामग्री के कुछ भाग अभी पूर्ण अभिगम्यता आवश्यकताओं को पूरा नहीं कर सकते।",
    ],
    contentHeading: "अप्रवेशयोग्य सामग्री",
    contentLead: "नीचे सूचीबद्ध सामग्री निम्न कारणों से अभिगम्य नहीं है।",
    preparationHeading: "इस वक्तव्य की तैयारी",
    preparationBody: [
      "यह वक्तव्य 11 अप्रैल 2026 को तैयार किया गया था। इसे तैयार करने की विधि WCAG 2.1 AA सफलता मानदंडों पर आधारित स्व-मूल्यांकन थी।",
      "अंतिम समीक्षा तिथि: 20 अप्रैल 2026।",
    ],
    feedbackHeading: "प्रतिक्रिया और संपर्क जानकारी",
    feedbackBody: ["हम Astrology Today की अभिगम्यता के बारे में आपकी प्रतिक्रिया का स्वागत करते हैं।", "यदि आपको कोई अभिगम्यता बाधा दिखाई दे, तो कृपया हमें बताएं:"],
    feedbackResponse: "हमारा लक्ष्य अभिगम्यता प्रतिक्रिया का 5-10 कार्यदिवसों के भीतर उत्तर देना है।",
    enforcementHeading: "प्रवर्तन प्रक्रिया",
    enforcementBody: "यदि आप हमारे उत्तर से संतुष्ट नहीं हैं, तो आप संबंधित राष्ट्रीय प्रवर्तन निकाय से संपर्क कर सकते हैं:",
  },
  ur: {
    toc: ["رسائی کا بیان", "مطابقت کی حیثیت", "غیر قابلِ رسائی مواد", "اس بیان کی تیاری", "رائے اور رابطہ معلومات", "نفاذ کا طریقۂ کار"],
    statusHeading: "مطابقت کی حیثیت",
    statusBody: [
      "یہ ویب سائٹ EN 301 549 رسائی معیار کے ساتھ جزوی طور پر مطابقت رکھتی ہے، جو WCAG 2.1 سطح AA کو شامل کرتا ہے۔",
      "جزوی عدم مطابقت کا مطلب ہے کہ مواد کے کچھ حصے ابھی مکمل طور پر رسائی کی ضروریات پوری نہیں کرتے۔",
    ],
    contentHeading: "غیر قابلِ رسائی مواد",
    contentLead: "ذیل میں درج مواد مندرجہ ذیل وجوہات کی بنا پر قابلِ رسائی نہیں ہے۔",
    preparationHeading: "اس بیان کی تیاری",
    preparationBody: [
      "یہ بیان 11 اپریل 2026 کو تیار کیا گیا تھا۔ اسے تیار کرنے کا طریقہ WCAG 2.1 AA معیارات پر مبنی خود تشخیص تھا۔",
      "آخری جائزے کی تاریخ: 20 اپریل 2026۔",
    ],
    feedbackHeading: "رائے اور رابطہ معلومات",
    feedbackBody: ["ہم Astrology Today کی رسائی کے بارے میں آپ کی رائے کا خیرمقدم کرتے ہیں۔", "اگر آپ کو کوئی رسائی رکاوٹ نظر آئے تو براہِ کرم ہمیں بتائیں:"],
    feedbackResponse: "ہم رسائی سے متعلق رائے کا جواب 5 سے 10 کاروباری دنوں میں دینے کی کوشش کرتے ہیں۔",
    enforcementHeading: "نفاذ کا طریقۂ کار",
    enforcementBody: "اگر آپ ہمارے جواب سے مطمئن نہیں ہیں، تو آپ متعلقہ قومی نفاذی ادارے سے رابطہ کر سکتے ہیں:",
  },
  sa: {
    toc: ["सुलभता-वक्तव्यम्", "अनुपालन-स्थिति:", "असुलभ-विषयवस्तु", "अस्य वक्तव्यस्य निर्माणम्", "प्रतिक्रिया तथा सम्पर्क-सूचना", "प्रवर्तन-प्रक्रिया"],
    statusHeading: "अनुपालन-स्थिति:",
    statusBody: [
      "अयं जालपुटः EN 301 549 सुलभता-मानकेन सह आंशिकतया अनुरूपः अस्ति, यत्र WCAG 2.1 स्तर AA अपि समाविष्टः अस्ति।",
      "अननुरूपता इत्यस्य अर्थः एषः यत् विषयवस्तुनः केचन भागाः अद्यापि सर्वाणि सुलभता-आवश्यकतानि पूर्णतया न पूरयन्ति।",
    ],
    contentHeading: "असुलभ-विषयवस्तु",
    contentLead: "अधोलिखिता विषयवस्तु निम्नकारणैः असुलभा अस्ति।",
    preparationHeading: "अस्य वक्तव्यस्य निर्माणम्",
    preparationBody: [
      "इदं वक्तव्यं 11 अप्रैल 2026 तिथौ सिद्धीकृतम्। अस्य निर्माणे WCAG 2.1 AA सिद्धि-मापदण्डान् आधारभूत्य आत्म-मूल्याङ्कन-पद्धतिः उपयुज्यत।",
      "अन्तिम-समीक्षा-तिथिः: 20 अप्रैल 2026।",
    ],
    feedbackHeading: "प्रतिक्रिया तथा सम्पर्क-सूचना",
    feedbackBody: ["Astrology Today इत्यस्य सुलभतायाः विषये भवतः प्रतिक्रियाः स्वागतार्हाः।", "यदि भवान् काञ्चन सुलभता-बाधां पश्यति, कृपया अस्मान् ज्ञापयतु:"],
    feedbackResponse: "वयं सुलभता-सम्बद्ध-प्रतिक्रियायाः उत्तरं 5-10 कार्यदिवसाभ्यन्तरे दातुं प्रयतामहे।",
    enforcementHeading: "प्रवर्तन-प्रक्रिया",
    enforcementBody: "यदि भवान् अस्माकं प्रत्युत्तरात् सन्तुष्टो नास्ति, तर्हि उत्तरदायि राष्ट्रीय-प्रवर्तन-संस्थां सम्पर्कयितुं शक्नोति:",
  },
  pa: {
    toc: ["ਪਹੁੰਚਯੋਗਤਾ ਬਿਆਨ", "ਅਨੁਕੂਲਤਾ ਦੀ ਸਥਿਤੀ", "ਗੈਰ-ਪਹੁੰਚਯੋਗ ਸਮੱਗਰੀ", "ਇਸ ਬਿਆਨ ਦੀ ਤਿਆਰੀ", "ਫੀਡਬੈਕ ਅਤੇ ਸੰਪਰਕ ਜਾਣਕਾਰੀ", "ਲਾਗੂ ਕਰਨ ਦੀ ਪ੍ਰਕਿਰਿਆ"],
    statusHeading: "ਅਨੁਕੂਲਤਾ ਦੀ ਸਥਿਤੀ",
    statusBody: [
      "ਇਹ ਵੈਬਸਾਈਟ EN 301 549 ਪਹੁੰਚਯੋਗਤਾ ਮਿਆਰ ਨਾਲ ਆੰਸ਼ਿਕ ਤੌਰ 'ਤੇ ਅਨੁਕੂਲ ਹੈ, ਜੋ WCAG 2.1 ਪੱਧਰ AA ਨੂੰ ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ।",
      "ਆੰਸ਼ਿਕ ਗੈਰ-ਅਨੁਕੂਲਤਾ ਦਾ ਅਰਥ ਹੈ ਕਿ ਸਮੱਗਰੀ ਦੇ ਕੁਝ ਹਿੱਸੇ ਹਾਲੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਪਹੁੰਚਯੋਗਤਾ ਦੀਆਂ ਲੋੜਾਂ ਨੂੰ ਪੂਰਾ ਨਹੀਂ ਕਰਦੇ।",
    ],
    contentHeading: "ਗੈਰ-ਪਹੁੰਚਯੋਗ ਸਮੱਗਰੀ",
    contentLead: "ਹੇਠ ਦਿੱਤੀ ਸਮੱਗਰੀ ਹੇਠ ਲਿਖੇ ਕਾਰਨਾਂ ਕਰਕੇ ਪਹੁੰਚਯੋਗ ਨਹੀਂ ਹੈ।",
    preparationHeading: "ਇਸ ਬਿਆਨ ਦੀ ਤਿਆਰੀ",
    preparationBody: [
      "ਇਹ ਬਿਆਨ 11 ਅਪ੍ਰੈਲ 2026 ਨੂੰ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਸੀ। ਇਸ ਨੂੰ ਤਿਆਰ ਕਰਨ ਲਈ WCAG 2.1 AA ਸਫਲਤਾ ਮਾਪਦੰਡਾਂ 'ਤੇ ਆਧਾਰਿਤ ਸਵੈ-ਮੁਲਾਂਕਣ ਵਰਤਿਆ ਗਿਆ।",
      "ਆਖਰੀ ਸਮੀਖਿਆ ਦੀ ਤਾਰੀਖ: 20 ਅਪ੍ਰੈਲ 2026।",
    ],
    feedbackHeading: "ਫੀਡਬੈਕ ਅਤੇ ਸੰਪਰਕ ਜਾਣਕਾਰੀ",
    feedbackBody: ["ਅਸੀਂ Astrology Today ਦੀ ਪਹੁੰਚਯੋਗਤਾ ਬਾਰੇ ਤੁਹਾਡੀ ਪ੍ਰਤੀਕਿਰਿਆ ਦਾ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ।", "ਜੇ ਤੁਸੀਂ ਕੋਈ ਪਹੁੰਚਯੋਗਤਾ ਰੁਕਾਵਟ ਵੇਖੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਸਾਨੂੰ ਦੱਸੋ:"],
    feedbackResponse: "ਅਸੀਂ ਪਹੁੰਚਯੋਗਤਾ ਫੀਡਬੈਕ ਦਾ ਜਵਾਬ 5-10 ਕਾਰੋਬਾਰੀ ਦਿਨਾਂ ਵਿੱਚ ਦੇਣ ਦਾ ਲੱਖ ਰੱਖਦੇ ਹਾਂ।",
    enforcementHeading: "ਲਾਗੂ ਕਰਨ ਦੀ ਪ੍ਰਕਿਰਿਆ",
    enforcementBody: "ਜੇ ਤੁਸੀਂ ਸਾਡੇ ਜਵਾਬ ਨਾਲ ਸੰਤੁਸ਼ਟ ਨਹੀਂ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਸੰਬੰਧਤ ਰਾਸ਼ਟਰੀ ਲਾਗੂਕਰਨ ਸੰਸਥਾ ਨਾਲ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ:",
  },
  yue: {
    toc: ["無障礙聲明", "合規狀態", "無法存取內容", "本聲明嘅編製", "意見回饋同聯絡資料", "執行程序"],
    statusHeading: "合規狀態",
    statusBody: [
      "本網站部分符合 EN 301 549 無障礙標準，當中包含 WCAG 2.1 AA 級要求。",
      "部分不合規即表示部分內容目前未必完全符合無障礙要求。",
    ],
    contentHeading: "無法存取內容",
    contentLead: "以下內容因為下列原因而未能提供完整無障礙存取。",
    preparationHeading: "本聲明嘅編製",
    preparationBody: [
      "本聲明於 2026 年 4 月 11 日編製，採用嘅方法係基於 WCAG 2.1 AA 成功準則嘅自我評估。",
      "最近檢視日期：2026 年 4 月 20 日。",
    ],
    feedbackHeading: "意見回饋同聯絡資料",
    feedbackBody: ["我哋歡迎你就 Astrology Today 嘅無障礙體驗提供意見。", "如果你遇到任何無障礙障礙，請通知我哋："],
    feedbackResponse: "我哋目標喺 5 至 10 個工作天內回覆無障礙相關意見。",
    enforcementHeading: "執行程序",
    enforcementBody: "如果你對我哋嘅回覆唔滿意，可以聯絡相應嘅國家執行機構：",
  },
  ko: {
    toc: ["접근성 성명서", "준수 상태", "접근 불가 콘텐츠", "이 성명서의 작성", "의견 및 연락처 정보", "집행 절차"],
    statusHeading: "준수 상태",
    statusBody: [
      "본 웹사이트는 WCAG 2.1 레벨 AA를 포함하는 EN 301 549 접근성 표준에 부분적으로 준수합니다.",
      "부분적 미준수는 일부 콘텐츠가 아직 접근성 요구사항을 완전히 충족하지 못할 수 있음을 의미합니다.",
    ],
    contentHeading: "접근 불가 콘텐츠",
    contentLead: "아래 나열된 콘텐츠는 다음과 같은 이유로 접근이 어렵습니다.",
    preparationHeading: "이 성명서의 작성",
    preparationBody: [
      "이 성명서는 2026년 4월 11일에 작성되었습니다. 작성 방법은 WCAG 2.1 AA 성공 기준에 기반한 자체 평가였습니다.",
      "최종 검토일: 2026년 4월 20일.",
    ],
    feedbackHeading: "의견 및 연락처 정보",
    feedbackBody: ["Astrology Today의 접근성에 대한 여러분의 의견을 환영합니다.", "접근성 장벽을 발견하셨다면 알려 주십시오:"],
    feedbackResponse: "당사는 접근성 관련 의견에 대해 영업일 기준 5~10일 이내에 답변하는 것을 목표로 합니다.",
    enforcementHeading: "집행 절차",
    enforcementBody: "당사의 답변에 만족하지 못하시는 경우, 해당 국가의 집행 기관에 연락하실 수 있습니다:",
  },
};

const supportedLocales = Object.keys(metadataCopy) as SupportedLocale[];

const accessibilityStatementCopy = supportedLocales.reduce<Record<SupportedLocale, AccessibilityStatementCopy>>(
  (acc, locale) => {
    const localized = localizedCopy[locale];
    acc[locale] = {
      metadataTitle: metadataCopy[locale].title,
      metadataDescription: metadataCopy[locale].description,
      toc: localized?.toc ?? englishBase.toc,
      statusHeading: localized?.statusHeading ?? englishBase.statusHeading,
      statusBody: localized?.statusBody ?? englishBase.statusBody,
      contentHeading: localized?.contentHeading ?? englishBase.contentHeading,
      contentLead: localized?.contentLead ?? englishBase.contentLead,
      nonAccessibleItems: nonAccessibleItemOverrides[locale] ?? nonAccessibleItems,
      preparationHeading: localized?.preparationHeading ?? englishBase.preparationHeading,
      preparationBody: localized?.preparationBody ?? englishBase.preparationBody,
      feedbackHeading: localized?.feedbackHeading ?? englishBase.feedbackHeading,
      feedbackBody: localized?.feedbackBody ?? englishBase.feedbackBody,
      feedbackResponse: localized?.feedbackResponse ?? englishBase.feedbackResponse,
      enforcementHeading: localized?.enforcementHeading ?? englishBase.enforcementHeading,
      enforcementBody: localized?.enforcementBody ?? englishBase.enforcementBody,
    };
    return acc;
  },
  {} as Record<SupportedLocale, AccessibilityStatementCopy>,
);

export function getAccessibilityStatementCopy(locale: SupportedLocale): AccessibilityStatementCopy {
  return accessibilityStatementCopy[locale] ?? accessibilityStatementCopy[defaultLocale];
}
