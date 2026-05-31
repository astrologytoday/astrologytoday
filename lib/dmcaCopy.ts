import { defaultLocale, type SupportedLocale } from "./i18n";

export type DmcaCopy = {
  metadataTitle: string;
  metadataDescription: string;
  toc: [string, string, string];
  policy: string[];
  noticeHeading: string;
  noticeBody: string[];
  noticeClosing: string;
  counterHeading: string;
  counterBody: string[];
  counterClosing: string;
  infringementItems: string[];
  counterItems: string[];
};

const englishInfringementItems = [
  "Identify in sufficient detail the copyrighted work that you believe has been infringed upon.",
  "Identify the material that you claim is infringing the copyrighted work listed above or which you claim is the subject of infringing activity. You must identify each separate item of allegedly infringing material.",
  "Provide information reasonably sufficient to permit Creation Health to locate the material.",
  "Provide information reasonably sufficient to permit Creation Health to contact you, including your email address, telephone number, and mailing address.",
  "Provide information, if possible, sufficient to permit Creation Health to notify the user who allegedly submitted or transmitted the material.",
  "Include a good-faith statement that the complained-of use is not authorized.",
  "Include a sworn statement that the notice is accurate and that you are authorized to act.",
  "Sign the written notice.",
  "Send the notice by email to mariosbardella@protonmail.com with the subject line \"DMCA Complaint.\"",
];

const englishCounterItems = [
  "Identify the name of the Astrology Today, LIFESPACE, or Creation Health content with respect to which access has been blocked, disabled, or removed.",
  "Provide your name, address, telephone number, email address, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or New York, New York, USA if your address is outside the United States, and that you will accept service of process from the person who provided the original infringement notification or that person's agent.",
  "Include the following statement: \"I swear, under penalty of perjury, that I have a good faith belief that the material identified above was removed, blocked, or disabled as a result of a mistake or misidentification.\"",
  "Sign the written counter notification.",
];

const infringementItemOverrides: Partial<Record<SupportedLocale, string[]>> = {
  fr: [
    "Identifiez avec un niveau de détail suffisant l'œuvre protégée par le droit d'auteur que vous estimez avoir été enfreinte.",
    "Identifiez le contenu que vous affirmez être en infraction ou faire l'objet d'une activité illicite. Vous devez identifier séparément chaque élément prétendument contrefaisant.",
    "Fournissez des informations raisonnablement suffisantes pour permettre à Creation Health de localiser le contenu.",
    "Fournissez des informations raisonnablement suffisantes pour permettre à Creation Health de vous contacter, y compris votre adresse e-mail, votre numéro de téléphone et votre adresse postale.",
    "Fournissez, si possible, suffisamment d'informations pour permettre à Creation Health de notifier l'utilisateur qui aurait soumis ou transmis le contenu.",
    "Incluez une déclaration de bonne foi indiquant que l'utilisation contestée n'est pas autorisée.",
    "Incluez une déclaration sous serment attestant que la notification est exacte et que vous êtes autorisé à agir.",
    "Signez la notification écrite.",
    "Envoyez la notification par e-mail à mariosbardella@protonmail.com avec pour objet « DMCA Complaint ».",
  ],
  it: [
    "Identifica con sufficiente dettaglio l'opera protetta da copyright che ritieni sia stata violata.",
    "Identifica il materiale che ritieni violi il copyright sopra indicato o che costituisca attività illecita. Devi identificare separatamente ciascun elemento presumibilmente illecito.",
    "Fornisci informazioni ragionevolmente sufficienti a consentire a Creation Health di localizzare il materiale.",
    "Fornisci informazioni ragionevolmente sufficienti a consentire a Creation Health di contattarti, inclusi indirizzo e-mail, numero di telefono e indirizzo postale.",
    "Fornisci, se possibile, informazioni sufficienti a permettere a Creation Health di avvisare l'utente che avrebbe inviato o trasmesso il materiale.",
    "Includi una dichiarazione in buona fede che l'uso contestato non è autorizzato.",
    "Includi una dichiarazione giurata che la notifica è accurata e che sei autorizzato ad agire.",
    "Firma la notifica scritta.",
    "Invia la notifica via e-mail a mariosbardella@protonmail.com con oggetto \"DMCA Complaint\".",
  ],
  es: [
    "Identifique con suficiente detalle la obra protegida por derechos de autor que considera infringida.",
    "Identifique el material que usted afirma que infringe la obra indicada anteriormente o que constituye actividad infractora. Debe identificar por separado cada elemento presuntamente infractor.",
    "Proporcione información razonablemente suficiente para permitir que Creation Health localice el material.",
    "Proporcione información razonablemente suficiente para permitir que Creation Health se comunique con usted, incluidos su correo electrónico, número de teléfono y dirección postal.",
    "Proporcione, si es posible, información suficiente para permitir que Creation Health notifique al usuario que presuntamente envió o transmitió el material.",
    "Incluya una declaración de buena fe de que el uso denunciado no está autorizado.",
    "Incluya una declaración jurada de que la notificación es exacta y de que usted está autorizado para actuar.",
    "Firme la notificación por escrito.",
    "Envíe la notificación por correo electrónico a mariosbardella@protonmail.com con el asunto \"DMCA Complaint\".",
  ],
  hi: [
    "उस कॉपीराइट संरक्षित कृति की पर्याप्त विस्तार से पहचान करें जिसके बारे में आप मानते हैं कि उसका उल्लंघन हुआ है।",
    "उस सामग्री की पहचान करें जिसे आप ऊपर सूचीबद्ध कॉपीराइट कृति का उल्लंघन करने वाली या उल्लंघनकारी गतिविधि का विषय मानते हैं। प्रत्येक अलग-अलग कथित उल्लंघनकारी सामग्री को अलग से पहचानना आवश्यक है।",
    "Creation Health को सामग्री ढूँढ़ने में सक्षम बनाने के लिए युक्तिसंगत रूप से पर्याप्त जानकारी प्रदान करें।",
    "Creation Health को आपसे संपर्क करने में सक्षम बनाने के लिए युक्तिसंगत रूप से पर्याप्त जानकारी दें, जिसमें आपका ईमेल पता, टेलीफोन नंबर और डाक पता शामिल हो।",
    "यदि संभव हो, तो ऐसी पर्याप्त जानकारी दें जिससे Creation Health उस उपयोगकर्ता को सूचित कर सके जिसने कथित रूप से सामग्री जमा की या प्रेषित की।",
    "एक सद्भावना वक्तव्य शामिल करें कि जिस उपयोग की शिकायत की गई है वह अधिकृत नहीं है।",
    "एक शपथ-पत्र शामिल करें कि नोटिस सटीक है और आप कार्रवाई करने के लिए अधिकृत हैं।",
    "लिखित नोटिस पर हस्ताक्षर करें।",
    "नोटिस को मariosbardella@protonmail.com पर \"DMCA Complaint\" विषय पंक्ति के साथ ईमेल करें।",
  ],
  ur: [
    "جس کاپی رائٹ شدہ تخلیق کے متعلق آپ سمجھتے ہیں کہ اس کی خلاف ورزی ہوئی ہے، اس کی مناسب تفصیل کے ساتھ نشاندہی کریں۔",
    "اس مواد کی نشاندہی کریں جس کے بارے میں آپ دعویٰ کرتے ہیں کہ وہ اوپر درج کاپی رائٹ شدہ کام کی خلاف ورزی کرتا ہے یا خلاف ورزی کی سرگرمی کا موضوع ہے۔ ہر مبینہ خلاف ورزی کرنے والے مواد کو الگ الگ شناخت کرنا ضروری ہے۔",
    "ایسی مناسب معلومات فراہم کریں جن کی مدد سے Creation Health اس مواد کو تلاش کر سکے۔",
    "ایسی مناسب معلومات فراہم کریں جن کی مدد سے Creation Health آپ سے رابطہ کر سکے، جن میں آپ کا ای میل ایڈریس، ٹیلیفون نمبر اور ڈاک کا پتہ شامل ہو۔",
    "اگر ممکن ہو تو ایسی معلومات فراہم کریں جن کی مدد سے Creation Health اس صارف کو مطلع کر سکے جس نے مبینہ طور پر مواد جمع یا منتقل کیا۔",
    "ایک نیک نیتی پر مبنی بیان شامل کریں کہ شکایت کردہ استعمال مجاز نہیں ہے۔",
    "ایک حلفیہ بیان شامل کریں کہ نوٹس درست ہے اور آپ کارروائی کرنے کے مجاز ہیں۔",
    "تحریری نوٹس پر دستخط کریں۔",
    "نوٹس کو mariosbardella@protonmail.com پر \"DMCA Complaint\" سبجیکٹ لائن کے ساتھ ای میل کریں۔",
  ],
  sa: [
    "यस्य प्रतिलिप्यधिकार-संरक्षित-कृतेः उल्लङ्घनं जातमिति भवान् मन्यते, तस्य पर्याप्त-विस्तरेण परिचयं ददातु।",
    "यत् पदार्थं भवान् उपरि निर्दिष्टस्य प्रतिलिप्यधिकार-कृत्याः उल्लङ्घनकारि वा उल्लङ्घन-क्रियायाः विषयः इति मन्यते, तस्य परिचयं ददातु। प्रत्येकं पृथक् कथितं उल्लङ्घनकारि-पदार्थं पृथक् निर्देष्टव्यम्।",
    "Creation Health इत्यस्य तं पदार्थं ज्ञातुं शक्नोति इति हेतोः पर्याप्तां सूचनां प्रदत्तु।",
    "Creation Health भवता सह सम्पर्कं कर्तुं शक्नोति इति हेतोः पर्याप्तां सूचनां ददातु, यथा ईमेल-पता, दूरभाष-सङ्ख्या, डाक-पताच।",
    "यदि शक्यते, Creation Health कथित-पदार्थ-प्रेषक-उपयोक्तारं सूचयितुं शक्नोति इत्यर्थं पर्याप्तां सूचनां ददातु।",
    "एवं सद्भाव-प्रस्तावं समावेशयतु यत् उल्लिखितः उपयोगः अनुमतः नास्ति।",
    "एवं शपथ-वचनं समावेशयतु यत् सूचना यथार्था अस्ति तथा भवता कार्यं कर्तुं अधिकारः अस्ति।",
    "लिखित-सूचनायां स्वहस्ताक्षरं कुरुत।",
    "सूचनां \"DMCA Complaint\" इति विषय-पङ्क्त्या सह mariosbardella@protonmail.com इत्यत्र ईमेलद्वारा प्रेषयतु।",
  ],
  pa: [
    "ਉਸ ਕਾਪੀਰਾਈਟ ਸੁਰੱਖਿਅਤ ਰਚਨਾ ਦੀ ਯਥੋਚਿਤ ਵੇਰਵੇ ਨਾਲ ਪਹਿਚਾਣ ਕਰੋ ਜਿਸ ਬਾਰੇ ਤੁਸੀਂ ਮੰਨਦੇ ਹੋ ਕਿ ਉਸ ਦਾ ਉਲੰਘਣ ਹੋਇਆ ਹੈ।",
    "ਉਸ ਸਮੱਗਰੀ ਦੀ ਪਹਿਚਾਣ ਕਰੋ ਜਿਸ ਬਾਰੇ ਤੁਸੀਂ ਦਾਅਵਾ ਕਰਦੇ ਹੋ ਕਿ ਉਹ ਉਪਰੋਕਤ ਕਾਪੀਰਾਈਟ ਰਚਨਾ ਦਾ ਉਲੰਘਣ ਕਰਦੀ ਹੈ ਜਾਂ ਉਲੰਘਣਕਾਰੀ ਗਤੀਵਿਧੀ ਦਾ ਵਿਸ਼ਾ ਹੈ। ਹਰ ਵੱਖਰੇ ਕਥਿਤ ਉਲੰਘਣਕਾਰੀ ਤੱਤ ਦੀ ਵੱਖਰੀ ਪਹਿਚਾਣ ਲਾਜ਼ਮੀ ਹੈ।",
    "Creation Health ਨੂੰ ਸਮੱਗਰੀ ਲੱਭਣ ਦੀ ਆਗਿਆ ਦੇਣ ਲਈ ਵਾਜਬ ਤੌਰ 'ਤੇ ਕਾਫ਼ੀ ਜਾਣਕਾਰੀ ਦਿਓ।",
    "Creation Health ਨੂੰ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਦੀ ਆਗਿਆ ਦੇਣ ਲਈ ਵਾਜਬ ਤੌਰ 'ਤੇ ਕਾਫ਼ੀ ਜਾਣਕਾਰੀ ਦਿਓ, ਜਿਸ ਵਿੱਚ ਤੁਹਾਡਾ ਈਮੇਲ ਪਤਾ, ਫੋਨ ਨੰਬਰ ਅਤੇ ਡਾਕ ਪਤਾ ਸ਼ਾਮਲ ਹੋਣ।",
    "ਜੇ ਸੰਭਵ ਹੋਵੇ, ਤਾਂ ਐਸੀ ਕਾਫ਼ੀ ਜਾਣਕਾਰੀ ਦਿਓ ਜਿਸ ਨਾਲ Creation Health ਉਸ ਵਰਤੋਂਕਾਰ ਨੂੰ ਸੂਚਿਤ ਕਰ ਸਕੇ ਜਿਸ ਨੇ ਕਥਿਤ ਤੌਰ 'ਤੇ ਸਮੱਗਰੀ ਭੇਜੀ ਜਾਂ ਪ੍ਰੇਰਿਤ ਕੀਤੀ।",
    "ਇਹ ਭਲਮੰਸੀ ਵਾਲਾ ਬਿਆਨ ਸ਼ਾਮਲ ਕਰੋ ਕਿ ਜਿਸ ਵਰਤੋਂ ਦੀ ਸ਼ਿਕਾਇਤ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ, ਉਹ ਅਧਿਕ੍ਰਿਤ ਨਹੀਂ ਹੈ।",
    "ਇੱਕ ਹਲਫ਼ਨਾਮਾ ਸ਼ਾਮਲ ਕਰੋ ਕਿ ਨੋਟਿਸ ਸਹੀ ਹੈ ਅਤੇ ਤੁਸੀਂ ਕਾਰਵਾਈ ਕਰਨ ਲਈ ਅਧਿਕ੍ਰਿਤ ਹੋ।",
    "ਲਿਖਤੀ ਨੋਟਿਸ 'ਤੇ ਦਸਤਖ਼ਤ ਕਰੋ।",
    "ਨੋਟਿਸ ਨੂੰ mariosbardella@protonmail.com ਉੱਤੇ \"DMCA Complaint\" ਵਿਸ਼ਾ ਲਾਈਨ ਨਾਲ ਈਮੇਲ ਕਰੋ।",
  ],
  zh: [
    "请以足够详细的方式说明您认为被侵权的版权作品。",
    "请指出您声称侵犯上述版权作品或构成侵权活动对象的材料。您必须分别识别每一项被指控侵权的材料。",
    "请提供足以让 Creation Health 定位该材料的合理信息。",
    "请提供足以让 Creation Health 与您联系的合理信息，包括您的电子邮件地址、电话号码和邮寄地址。",
    "如有可能，请提供足够的信息，以便 Creation Health 通知据称提交或传送该材料的用户。",
    "请附上一份善意声明，说明被投诉的使用未经授权。",
    "请附上一份宣誓声明，说明通知内容准确且您有权采取行动。",
    "请在书面通知上签名。",
    "请将通知以电子邮件发送至 mariosbardella@protonmail.com，主题行为“DMCA Complaint”。",
  ],
  ja: [
    "侵害されたと考える著作権保護対象物を十分な詳細で特定してください。",
    "上記著作物を侵害している、または侵害行為の対象であると主張する素材を特定してください。侵害が疑われる各素材は個別に特定する必要があります。",
    "Creation Health が当該素材を特定できるよう、合理的に十分な情報を提供してください。",
    "Creation Health があなたに連絡できるよう、メールアドレス、電話番号、郵送先住所を含む合理的に十分な情報を提供してください。",
    "可能であれば、当該素材を投稿または送信したとされる利用者に Creation Health が通知できるよう、十分な情報を提供してください。",
    "問題となっている利用が許可されていないことについての善意の表明を含めてください。",
    "通知内容が正確であり、あなたが行動する権限を有していることについての宣誓文を含めてください。",
    "書面通知に署名してください。",
    "通知は件名を「DMCA Complaint」として mariosbardella@protonmail.com 宛にメール送信してください。",
  ],
  yue: [
    "請以足夠詳細嘅方式識別你認為被侵犯版權嘅作品。",
    "請識別你聲稱侵犯上述版權作品或者構成侵權活動對象嘅材料。每一項被指稱侵權嘅材料都必須分開指出。",
    "請提供足以令 Creation Health 可以定位該材料嘅合理資料。",
    "請提供足以令 Creation Health 可以聯絡你嘅合理資料，包括你嘅電郵地址、電話號碼同郵寄地址。",
    "如有可能，請提供足夠資料，令 Creation Health 可以通知被指提交或傳送該材料嘅用戶。",
    "請加入一份真誠相信有關使用未獲授權嘅聲明。",
    "請加入一份宣誓聲明，說明通知內容準確，而且你有權採取行動。",
    "請喺書面通知上簽署。",
    "請以電郵將通知寄去 mariosbardella@protonmail.com，主旨請寫「DMCA Complaint」。",
  ],
  ko: [
    "귀하가 침해되었다고 믿는 저작권 보호 대상물을 충분히 구체적으로 식별하십시오.",
    "위에 기재한 저작권 작품을 침해하거나 침해 활동의 대상이라고 주장하는 자료를 식별하십시오. 침해가 의심되는 각 자료는 개별적으로 특정해야 합니다.",
    "Creation Health가 해당 자료를 찾을 수 있도록 합리적으로 충분한 정보를 제공하십시오.",
    "Creation Health가 귀하에게 연락할 수 있도록 이메일 주소, 전화번호 및 우편 주소를 포함한 합리적으로 충분한 정보를 제공하십시오.",
    "가능하다면, Creation Health가 해당 자료를 제출하거나 전송했다고 주장되는 사용자를 통지할 수 있도록 충분한 정보를 제공하십시오.",
    "문제가 된 사용이 허가되지 않았다는 선의의 진술을 포함하십시오.",
    "통지 내용이 정확하며 귀하가 이를 제출할 권한이 있다는 선서 진술을 포함하십시오.",
    "서면 통지에 서명하십시오.",
    "통지는 제목을 \"DMCA Complaint\"로 하여 mariosbardella@protonmail.com으로 이메일 발송하십시오.",
  ],
};

const counterItemOverrides: Partial<Record<SupportedLocale, string[]>> = {
  fr: [
    "Identifiez le nom du contenu Astrology Today, LIFESPACE ou Creation Health dont l'accès a été bloqué, désactivé ou supprimé.",
    "Fournissez votre nom, votre adresse, votre numéro de téléphone, votre adresse e-mail, ainsi qu'une déclaration indiquant que vous acceptez la compétence de la Cour fédérale de district du ressort de votre adresse, ou de New York, New York, États-Unis si votre adresse est hors des États-Unis, et que vous accepterez la signification de procédure de la personne ayant fourni la notification initiale d'infraction ou de son agent.",
    "Incluez la déclaration suivante : « Je jure, sous peine de parjure, que je crois de bonne foi que le contenu identifié ci-dessus a été supprimé, bloqué ou désactivé à la suite d'une erreur ou d'une mauvaise identification. »",
    "Signez la contre-notification écrite.",
  ],
  it: [
    "Identifica il nome del contenuto di Astrology Today, LIFESPACE o Creation Health rispetto al quale l'accesso è stato bloccato, disabilitato o rimosso.",
    "Fornisci il tuo nome, indirizzo, numero di telefono, indirizzo e-mail e una dichiarazione con cui acconsenti alla giurisdizione della Corte Distrettuale Federale del distretto giudiziario in cui si trova il tuo indirizzo, oppure di New York, New York, USA se il tuo indirizzo è fuori dagli Stati Uniti, e che accetterai la notifica degli atti dalla persona che ha fornito la notifica iniziale di violazione o dal suo agente.",
    "Includi la seguente dichiarazione: \"Giuro, sotto pena di spergiuro, di ritenere in buona fede che il materiale sopra identificato sia stato rimosso, bloccato o disabilitato a causa di un errore o di un'errata identificazione.\"",
    "Firma la contro-notifica scritta.",
  ],
  es: [
    "Identifique el nombre del contenido de Astrology Today, LIFESPACE o Creation Health respecto del cual se ha bloqueado, deshabilitado o eliminado el acceso.",
    "Proporcione su nombre, dirección, número de teléfono, dirección de correo electrónico y una declaración de que acepta la jurisdicción del Tribunal Federal de Distrito del distrito judicial en el que se encuentra su domicilio, o de Nueva York, Nueva York, EE. UU. si su domicilio está fuera de Estados Unidos, y que aceptará la notificación de la persona que presentó la notificación original de infracción o de su agente.",
    "Incluya la siguiente declaración: \"Juro, bajo pena de perjurio, que creo de buena fe que el material identificado anteriormente fue eliminado, bloqueado o deshabilitado como resultado de un error o una identificación equivocada.\"",
    "Firme la contranotificación por escrito.",
  ],
  hi: [
    "उस Astrology Today, LIFESPACE या Creation Health सामग्री का नाम पहचानें जिसके संबंध में पहुँच अवरुद्ध, अक्षम या हटाई गई है।",
    "अपना नाम, पता, टेलीफोन नंबर, ईमेल पता और यह वक्तव्य प्रदान करें कि आप उस न्यायिक जिले की संघीय जिला अदालत के अधिकार-क्षेत्र को स्वीकार करते हैं जहाँ आपका पता स्थित है, या यदि आपका पता संयुक्त राज्य अमेरिका के बाहर है तो न्यूयॉर्क, न्यूयॉर्क, USA के अधिकार-क्षेत्र को, और यह कि आप मूल उल्लंघन नोटिस देने वाले व्यक्ति या उसके एजेंट से प्रक्रिया की सेवा स्वीकार करेंगे।",
    "निम्नलिखित वक्तव्य शामिल करें: \"मैं, मिथ्या शपथ के दंड के अधीन, यह शपथ लेता/लेती हूँ कि मुझे सद्भावना से विश्वास है कि ऊपर पहचानी गई सामग्री किसी त्रुटि या गलत पहचान के कारण हटाई, रोकी या अक्षम की गई थी।\"",
    "लिखित प्रत्युत्तर-नोटिस पर हस्ताक्षर करें।",
  ],
  ur: [
    "اس Astrology Today، LIFESPACE یا Creation Health مواد کے نام کی نشاندہی کریں جس کے سلسلے میں رسائی روکی، غیر فعال یا حذف کی گئی ہے۔",
    "اپنا نام، پتہ، ٹیلیفون نمبر، ای میل ایڈریس، اور یہ بیان فراہم کریں کہ آپ اُس وفاقی ضلعی عدالت کے دائرۂ اختیار کو قبول کرتے ہیں جس عدالتی ضلع میں آپ کا پتہ واقع ہے، یا اگر آپ کا پتہ امریکہ سے باہر ہے تو نیویارک، نیویارک، USA کے دائرۂ اختیار کو، اور یہ کہ آپ اصل خلاف ورزی کی اطلاع دینے والے شخص یا اس کے ایجنٹ کی جانب سے قانونی کارروائی کی سروس قبول کریں گے۔",
    "درج ذیل بیان شامل کریں: \"میں، جھوٹی گواہی کی سزا کے تحت، یہ حلف اٹھاتا/اٹھاتی ہوں کہ مجھے نیک نیتی سے یقین ہے کہ اوپر شناخت کیا گیا مواد کسی غلطی یا غلط شناخت کے نتیجے میں ہٹایا، روکا یا غیر فعال کیا گیا تھا۔\"",
    "تحریری جوابی نوٹس پر دستخط کریں۔",
  ],
  sa: [
    "यस्य Astrology Today, LIFESPACE अथवा Creation Health विषयस्य प्रवेशः अवरुद्धः, निष्क्रियीकृतः वा अपाकृतः, तस्य नाम निर्दिशतु।",
    "स्वनाम, स्वपता, दूरभाष-सङ्ख्या, ईमेल-पतं च ददातु, तथा एतदपि उद्घोषयतु यत् यत्र भवतः पता वर्तते तस्य न्यायिक-प्रदेशस्य संघीय-जिलान्यायालयस्य, अथवा यदि भवतः पता संयुक्त-राज्येभ्यः बहिः वर्तते तर्हि New York, New York, USA इत्यस्य, अधिकारक्षेत्रं स्वीकरोति, तथा मूल-उल्लङ्घन-सूचनां दत्तवत: पुरुषस्य तस्य प्रतिनिधेर्वा प्रक्रियासेवां स्वीकुर्यात्।",
    "एतत् वचनं समावेशयतु: \"अहं मिथ्या-शपथ-दण्डस्य अधीनः/अधीना एतत् शपामि यत् मम सद्भावनया विश्वासः अस्ति यत् उपरि निर्दिष्टः पदार्थः त्रुटेः अथवा मिथ्या-पहिचानस्य परिणामस्वरूपं अपाकृतः, अवरुद्धः, अथवा निष्क्रियीकृतः आसीत्।\"",
    "लिखित-प्रतिसूचनायां स्वहस्ताक्षरं कुरुत।",
  ],
  pa: [
    "ਉਸ Astrology Today, LIFESPACE ਜਾਂ Creation Health ਸਮੱਗਰੀ ਦੇ ਨਾਮ ਦੀ ਪਹਿਚਾਣ ਕਰੋ ਜਿਸ ਸਬੰਧੀ ਪਹੁੰਚ ਰੋਕੀ, ਅਯੋਗ ਕੀਤੀ ਜਾਂ ਹਟਾਈ ਗਈ ਹੈ।",
    "ਆਪਣਾ ਨਾਮ, ਪਤਾ, ਟੈਲੀਫ਼ੋਨ ਨੰਬਰ, ਈਮੇਲ ਪਤਾ ਅਤੇ ਇਹ ਬਿਆਨ ਦਿਓ ਕਿ ਤੁਸੀਂ ਉਸ ਫੈਡਰਲ ਜ਼ਿਲ੍ਹਾ ਅਦਾਲਤ ਦੇ ਅਧਿਕਾਰ-ਖੇਤਰ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦੇ ਹੋ ਜਿੱਥੇ ਤੁਹਾਡਾ ਪਤਾ ਸਥਿਤ ਹੈ, ਜਾਂ ਜੇ ਤੁਹਾਡਾ ਪਤਾ ਸੰਯੁਕਤ ਰਾਜ ਤੋਂ ਬਾਹਰ ਹੈ ਤਾਂ ਨਿਊਯਾਰਕ, ਨਿਊਯਾਰਕ, USA ਦੇ ਅਧਿਕਾਰ-ਖੇਤਰ ਨੂੰ, ਅਤੇ ਇਹ ਕਿ ਤੁਸੀਂ ਮੂਲ ਉਲੰਘਣ ਸੂਚਨਾ ਦੇਣ ਵਾਲੇ ਵਿਅਕਤੀ ਜਾਂ ਉਸ ਦੇ ਏਜੰਟ ਵੱਲੋਂ ਪ੍ਰਕਿਰਿਆ ਦੀ ਸੇਵਾ ਸਵੀਕਾਰ ਕਰੋਗੇ।",
    "ਹੇਠਾਂ ਦਿੱਤਾ ਬਿਆਨ ਸ਼ਾਮਲ ਕਰੋ: \"ਮੈਂ, ਝੂਠੀ ਕਸਮ ਦੀ ਸਜ਼ਾ ਦੇ ਅਧੀਨ, ਇਹ ਕਸਮ ਖਾਂਦਾ/ਖਾਂਦੀ ਹਾਂ ਕਿ ਮੈਨੂੰ ਭਲਮੰਸੀ ਨਾਲ ਇਹ ਵਿਸ਼ਵਾਸ ਹੈ ਕਿ ਉਪਰੋਕਤ ਪਛਾਣ ਕੀਤੀ ਸਮੱਗਰੀ ਕਿਸੇ ਗਲਤੀ ਜਾਂ ਗਲਤ ਪਛਾਣ ਦੇ ਨਤੀਜੇ ਵਜੋਂ ਹਟਾਈ, ਰੋਕੀ ਜਾਂ ਅਯੋਗ ਕੀਤੀ ਗਈ ਸੀ।\"",
    "ਲਿਖਤੀ ਜਵਾਬੀ ਨੋਟੀਫਿਕੇਸ਼ਨ 'ਤੇ ਦਸਤਖ਼ਤ ਕਰੋ।",
  ],
  zh: [
    "请指出已被屏蔽、禁用或删除访问权限的 Astrology Today、LIFESPACE 或 Creation Health 内容名称。",
    "请提供您的姓名、地址、电话号码、电子邮件地址，以及一份声明，说明您同意接受您地址所在司法辖区的联邦地区法院管辖；如果您的地址位于美国境外，则同意接受美国纽约州纽约市的联邦地区法院管辖，并同意接受最初侵权通知提交人或其代理人的送达。",
    "请包含以下声明：“本人在伪证处罚下宣誓，本人真诚相信，上述识别的材料之所以被移除、屏蔽或禁用，是由于错误或错误识别造成的。”",
    "请在书面反通知上签名。",
  ],
  ja: [
    "アクセスが遮断、無効化、または削除された Astrology Today、LIFESPACE、または Creation Health のコンテンツ名を特定してください。",
    "あなたの氏名、住所、電話番号、メールアドレス、ならびにあなたの住所が所在する司法地区の連邦地方裁判所、または住所が米国外にある場合は米国ニューヨーク州ニューヨーク市の連邦地方裁判所の管轄に同意し、元の侵害通知を提出した者またはその代理人からの送達を受け入れる旨の声明を提供してください。",
    "次の文言を含めてください: 「私は偽証罪の罰則の下で、上記の資料が誤りまたは誤認により削除、遮断、または無効化されたと善意で信じていることを誓います。」",
    "書面による異議申立て通知に署名してください。",
  ],
  yue: [
    "請指出被封鎖、停用或者移除存取權限嘅 Astrology Today、LIFESPACE 或者 Creation Health 內容名稱。",
    "請提供你嘅姓名、地址、電話號碼、電郵地址，同埋一份聲明，表示你同意接受你地址所在司法地區聯邦地區法院嘅管轄；如果你地址喺美國境外，就同意接受美國紐約州紐約市聯邦地區法院嘅管轄，並且會接受原始侵權通知提交人或者其代理人送達法律文件。",
    "請加入以下聲明：「本人在偽證罪處罰之下宣誓，真誠相信上述所識別嘅材料係因錯誤或者錯誤識別而被移除、封鎖或者停用。」",
    "請喺書面反通知上簽署。",
  ],
  ko: [
    "접근이 차단, 비활성화 또는 삭제된 Astrology Today, LIFESPACE 또는 Creation Health 콘텐츠의 이름을 식별하십시오.",
    "귀하의 이름, 주소, 전화번호, 이메일 주소와 함께 귀하의 주소가 위치한 사법구역의 연방지방법원, 또는 귀하의 주소가 미국 외부에 있는 경우 미국 뉴욕주 뉴욕시의 연방지방법원의 관할에 동의하며, 최초 침해 통지를 제공한 사람 또는 그 대리인의 송달을 수락하겠다는 진술을 제공하십시오.",
    "다음 문구를 포함하십시오: \"본인은 위증 시 처벌을 받는다는 조건 아래, 위에서 식별한 자료가 실수 또는 오인에 의해 삭제, 차단 또는 비활성화되었다고 선의로 믿고 있음을 맹세합니다.\"",
    "서면 반론 통지에 서명하십시오.",
  ],
};

const metadataCopy: Record<SupportedLocale, { title: string; description: string }> = {
  en: {
    title: "DMCA / Copyright Policy | Astrology Today",
    description: "Creation Health DMCA and copyright policy for Astrology Today, LIFESPACE, and related services.",
  },
  fr: {
    title: "DMCA / Politique de droit d'auteur | Astrology Today",
    description: "Politique DMCA et de droit d'auteur de Creation Health pour Astrology Today, LIFESPACE et les services associés.",
  },
  it: {
    title: "DMCA / Politica sul copyright | Astrology Today",
    description: "Politica DMCA e sul copyright di Creation Health per Astrology Today, LIFESPACE e servizi correlati.",
  },
  es: {
    title: "DMCA / Política de copyright | Astrology Today",
    description: "Política DMCA y de copyright de Creation Health para Astrology Today, LIFESPACE y servicios relacionados.",
  },
  hi: {
    title: "DMCA / कॉपीराइट नीति | Astrology Today",
    description: "Astrology Today, LIFESPACE और संबंधित सेवाओं के लिए Creation Health की DMCA और कॉपीराइट नीति।",
  },
  ur: {
    title: "DMCA / کاپی رائٹ پالیسی | Astrology Today",
    description: "Astrology Today، LIFESPACE اور متعلقہ خدمات کے لیے Creation Health کی DMCA اور کاپی رائٹ پالیسی۔",
  },
  sa: {
    title: "DMCA / प्रतिलिप्यधिकार-नीतिः | Astrology Today",
    description: "Astrology Today, LIFESPACE, सम्बद्ध-सेवाः च विषये Creation Health इत्यस्य DMCA तथा प्रतिलिप्यधिकार-नीतिः।",
  },
  pa: {
    title: "DMCA / ਕਾਪੀਰਾਈਟ ਨੀਤੀ | Astrology Today",
    description: "Astrology Today, LIFESPACE ਅਤੇ ਸੰਬੰਧਿਤ ਸੇਵਾਵਾਂ ਲਈ Creation Health ਦੀ DMCA ਅਤੇ ਕਾਪੀਰਾਈਟ ਨੀਤੀ।",
  },
  zh: {
    title: "DMCA / 版权政策 | Astrology Today",
    description: "适用于 Astrology Today、LIFESPACE 及相关服务的 Creation Health DMCA 与版权政策。",
  },
  ja: {
    title: "DMCA / 著作権ポリシー | Astrology Today",
    description: "Astrology Today、LIFESPACE、および関連サービスに関する Creation Health の DMCA / 著作権ポリシー。",
  },
  yue: {
    title: "DMCA / 版權政策 | Astrology Today",
    description: "適用於 Astrology Today、LIFESPACE 同相關服務嘅 Creation Health DMCA 同版權政策。",
  },
  ko: {
    title: "DMCA / 저작권 정책 | Astrology Today",
    description: "Astrology Today, LIFESPACE 및 관련 서비스에 적용되는 Creation Health의 DMCA 및 저작권 정책.",
  },
};

const localizedCopy: Partial<
  Record<
    SupportedLocale,
    Omit<DmcaCopy, "metadataTitle" | "metadataDescription" | "infringementItems" | "counterItems">
  >
> = {
  fr: {
    toc: ["Politique DMCA", "Notification d'infraction", "Contre-notification"],
    policy: [
      "Nous répondons aux notifications d'infraction présumée conformes au DMCA et aux autres lois applicables en matière de propriété intellectuelle.",
      "Si nous prenons de telles mesures, nous tenterons de bonne foi de contacter la personne ayant transmis le contenu afin qu'elle puisse présenter une contre-notification conformément aux sections 512(g)(2) et (3) du DMCA.",
    ],
    noticeHeading: "Notification d'infraction",
    noticeBody: [
      "Si vous êtes titulaire d'un droit d'auteur ou agent autorisé et pensez qu'un utilisateur d'Astrology Today, de LIFESPACE ou d'un autre service lié à Creation Health a enfreint vos droits, vous pouvez soumettre une notification.",
      "Pour déposer une notification, vous devez envoyer un écrit par e-mail contenant les éléments indiqués ci-dessous. Si vous déclarez à tort qu'un contenu enfreint vos droits, vous pouvez être responsable de dommages et frais juridiques.",
    ],
    noticeClosing: "Si vous ne respectez pas toutes les exigences ci-dessus, votre notification DMCA peut être considérée comme invalide.",
    counterHeading: "Contre-notification",
    counterBody: [
      "Conformément aux sections 512(g)(2) et (3) du DMCA, un abonné peut déposer une contre-notification.",
      "Si vous affirmez à tort qu'un contenu n'est pas contrefaisant, vous pouvez être responsable de dommages et frais juridiques.",
    ],
    counterClosing: "Les contre-notifications doivent également être envoyées à",
  },
  it: {
    toc: ["Politica DMCA", "Notifica di violazione", "Contro-notifica"],
    policy: [
      "Rispondiamo alle segnalazioni di presunta violazione conformi al DMCA e alle altre leggi applicabili in materia di proprietà intellettuale.",
      "Se adottiamo tali misure, tenteremo in buona fede di contattare la persona che ha trasmesso il contenuto affinché possa presentare una contro-notifica ai sensi delle sezioni 512(g)(2) e (3) del DMCA.",
    ],
    noticeHeading: "Notifica di violazione",
    noticeBody: [
      "Se sei titolare di copyright o agente autorizzato e ritieni che un utente di Astrology Today, LIFESPACE o di un altro servizio Creation Health abbia violato i tuoi diritti, puoi inviare una notifica.",
      "Per inviare una notifica, devi fornire una comunicazione scritta via e-mail contenente gli elementi indicati di seguito. Una falsa dichiarazione può esporti a danni e spese legali.",
    ],
    noticeClosing: "Se non rispetti tutti i requisiti sopra indicati, la tua notifica DMCA potrebbe non essere valida.",
    counterHeading: "Contro-notifica",
    counterBody: [
      "Ai sensi delle sezioni 512(g)(2) e (3) del DMCA, un abbonato può presentare una contro-notifica.",
      "Se dichiari erroneamente che un contenuto non viola i diritti altrui, potresti essere responsabile di danni e spese legali.",
    ],
    counterClosing: "Le contro-notifiche devono essere inviate anche a",
  },
  es: {
    toc: ["Política DMCA", "Notificación de infracción", "Contranotificación"],
    policy: [
      "Respondemos a notificaciones de presunta infracción que cumplan con la DMCA y otras leyes aplicables de propiedad intelectual.",
      "Si tomamos dichas medidas, intentaremos de buena fe contactar a la persona que transmitió el contenido para que pueda presentar una contranotificación conforme a las secciones 512(g)(2) y (3) de la DMCA.",
    ],
    noticeHeading: "Notificación de infracción",
    noticeBody: [
      "Si usted es titular de derechos de autor o agente autorizado y cree que un usuario de Astrology Today, LIFESPACE u otro servicio de Creation Health ha infringido sus derechos, puede enviar una notificación.",
      "Para presentar una notificación, debe enviar una comunicación escrita por correo electrónico con los elementos indicados abajo. Una representación errónea puede dar lugar a daños y honorarios legales.",
    ],
    noticeClosing: "Si no cumple con todos los requisitos anteriores, su notificación DMCA puede no ser válida.",
    counterHeading: "Contranotificación",
    counterBody: [
      "Conforme a las secciones 512(g)(2) y (3) de la DMCA, un suscriptor puede presentar una contranotificación.",
      "Si usted declara erróneamente que un contenido no infringe derechos de terceros, podría ser responsable de daños y gastos legales.",
    ],
    counterClosing: "Las contranotificaciones también deben enviarse a",
  },
  zh: {
    toc: ["DMCA 政策", "侵权通知", "反通知"],
    policy: [
      "我们会回应符合 DMCA 及其他适用知识产权法律要求的侵权通知。",
      "如果我们采取相关措施，我们会尽最大诚信尝试联系传送该内容的人，以便其根据 DMCA 第 512(g)(2) 和 (3) 条提交反通知。",
    ],
    noticeHeading: "侵权通知",
    noticeBody: [
      "如果您是版权所有人或其授权代理，并认为 Astrology Today、LIFESPACE 或其他 Creation Health 服务的用户侵犯了您的版权，您可以提交通知。",
      "要提交通知，您必须通过电子邮件发送书面说明并包含下列项目。如您对侵权情况作出重大失实陈述，可能需要承担损害赔偿和法律费用。",
    ],
    noticeClosing: "如果您未满足以上所有要求，您的 DMCA 通知可能被视为无效。",
    counterHeading: "反通知",
    counterBody: [
      "根据 DMCA 第 512(g)(2) 和 (3) 条，订阅者可以提交反通知。",
      "如果您错误声称相关内容并未侵权，您可能需要承担损害赔偿和法律费用。",
    ],
    counterClosing: "反通知也应发送至",
  },
  ja: {
    toc: ["DMCA ポリシー", "侵害通知", "異議申立て通知"],
    policy: [
      "当社は、DMCA および適用される知的財産法に準拠した侵害申立てに対応します。",
      "そのような措置を講じる場合、DMCA 第512(g)(2)および(3)に基づき、コンテンツ送信者が異議申立て通知を提出できるよう誠実に連絡を試みます。",
    ],
    noticeHeading: "侵害通知",
    noticeBody: [
      "あなたが著作権者または正式な代理人であり、Astrology Today、LIFESPACE、または他の Creation Health サービスの利用者があなたの権利を侵害していると考える場合は、通知を提出できます。",
      "通知を行うには、以下の項目を含む書面をメールで送付する必要があります。侵害であると重大な虚偽申告をした場合、損害賠償や弁護士費用の責任を負うことがあります。",
    ],
    noticeClosing: "上記の要件をすべて満たさない場合、DMCA 通知は無効と判断されることがあります。",
    counterHeading: "異議申立て通知",
    counterBody: [
      "DMCA 第512(g)(2)および(3)に基づき、登録者は異議申立て通知を提出することができます。",
      "その内容が非侵害であると重大な虚偽申告をした場合、損害賠償や弁護士費用の責任を負うことがあります。",
    ],
    counterClosing: "異議申立て通知の送付先:",
  },
  hi: {
    toc: ["DMCA नीति", "उल्लंघन सूचना", "प्रत्युत्तर सूचना"],
    policy: [
      "हम उन कथित उल्लंघन सूचनाओं का उत्तर देने की नीति अपनाते हैं जो DMCA और अन्य लागू बौद्धिक संपदा कानूनों के अनुरूप हों।",
      "यदि हम ऐसे कदम उठाते हैं, तो हम सद्भावना के साथ उस व्यक्ति से संपर्क करने का प्रयास करेंगे जिसने सामग्री भेजी थी ताकि वह DMCA की धारा 512(g)(2) और (3) के अनुसार प्रत्युत्तर सूचना दे सके।",
    ],
    noticeHeading: "उल्लंघन सूचना",
    noticeBody: [
      "यदि आप कॉपीराइट स्वामी हैं या उसके अधिकृत प्रतिनिधि हैं और मानते हैं कि Astrology Today, LIFESPACE या Creation Health की किसी संबंधित सेवा के किसी उपयोगकर्ता ने आपके अधिकारों का उल्लंघन किया है, तो आप सूचना भेज सकते हैं।",
      "उल्लंघन सूचना दायर करने के लिए आपको नीचे सूचीबद्ध तत्वों सहित एक लिखित ईमेल भेजना होगा। यदि आप किसी सामग्री या गतिविधि के बारे में गंभीर गलत प्रस्तुति देते हैं, तो आप क्षतिपूर्ति, लागत और वकीलों की फीस के लिए उत्तरदायी हो सकते हैं।",
    ],
    noticeClosing: "यदि आप ऊपर दिए गए सभी आवश्यकताओं का पालन नहीं करते हैं, तो आपकी DMCA सूचना वैध नहीं मानी जा सकती।",
    counterHeading: "प्रत्युत्तर सूचना",
    counterBody: [
      "DMCA की धारा 512(g)(2) और (3) के अनुसार, कोई सदस्य प्रत्युत्तर सूचना दे सकता है।",
      "यदि आप यह गलत रूप से प्रस्तुत करते हैं कि सामग्री दूसरों के कॉपीराइट का उल्लंघन नहीं करती, तो आप क्षतिपूर्ति, लागत और वकीलों की फीस के लिए उत्तरदायी हो सकते हैं।",
    ],
    counterClosing: "प्रत्युत्तर सूचनाएँ भी यहाँ भेजी जानी चाहिए:",
  },
  ur: {
    toc: ["DMCA پالیسی", "خلاف ورزی کی اطلاع", "جوابی اطلاع"],
    policy: [
      "ہم ان مبینہ خلاف ورزی کی اطلاعات پر کارروائی کرنے کی پالیسی رکھتے ہیں جو DMCA اور دیگر قابلِ اطلاق دانشورانہ املاک کے قوانین کے مطابق ہوں۔",
      "اگر ہم ایسے اقدامات کریں، تو ہم نیک نیتی کے ساتھ اس شخص سے رابطہ کرنے کی کوشش کریں گے جس نے مواد منتقل کیا تھا تاکہ وہ DMCA کی دفعات 512(g)(2) اور (3) کے مطابق جوابی اطلاع دے سکے۔",
    ],
    noticeHeading: "خلاف ورزی کی اطلاع",
    noticeBody: [
      "اگر آپ کاپی رائٹ کے مالک ہیں یا اس کے مجاز نمائندہ ہیں اور سمجھتے ہیں کہ Astrology Today، LIFESPACE یا Creation Health کی کسی متعلقہ سروس کے کسی صارف نے آپ کے حقوق کی خلاف ورزی کی ہے، تو آپ اطلاع جمع کرا سکتے ہیں۔",
      "خلاف ورزی کی اطلاع جمع کرانے کے لیے آپ کو ای میل کے ذریعے ایک تحریری مراسلہ بھیجنا ہوگا جس میں ذیل میں دیے گئے عناصر شامل ہوں۔ اگر آپ کسی مواد یا سرگرمی کے خلاف ورزی ہونے کے بارے میں سنگین غلط بیانی کرتے ہیں تو آپ نقصانات، اخراجات اور وکلا کی فیس کے ذمہ دار ہو سکتے ہیں۔",
    ],
    noticeClosing: "اگر آپ اوپر دی گئی تمام شرائط پوری نہیں کرتے، تو آپ کی DMCA اطلاع غیر مؤثر سمجھی جا سکتی ہے۔",
    counterHeading: "جوابی اطلاع",
    counterBody: [
      "DMCA کی دفعات 512(g)(2) اور (3) کے مطابق، کوئی سبسکرائبر جوابی اطلاع جمع کرا سکتا ہے۔",
      "اگر آپ یہ غلط بیانی کرتے ہیں کہ مواد دوسروں کے کاپی رائٹس کی خلاف ورزی نہیں کرتا، تو آپ نقصانات، اخراجات اور وکلا کی فیس کے ذمہ دار ہو سکتے ہیں۔",
    ],
    counterClosing: "جوابی اطلاعات بھی یہاں بھیجی جانی چاہئیں:",
  },
  sa: {
    toc: ["DMCA-नीतिः", "उल्लङ्घन-सूचना", "प्रतिसूचना"],
    policy: [
      "वयं DMCA तथा अन्यैः लागू-बौद्धिक-सम्पदा-विधिभिः अनुरूपाणां कथित-उल्लङ्घन-सूचनानां प्रति प्रतिसादं दातुं नीतिमनुसरामः।",
      "यदि वयं तादृशान् उपायान् गृह्णीमः, तर्हि सामग्रीं प्रेषितवन्तं व्यक्तिं सद्भावेन सम्प्राप्नुयाम यत् सः DMCA-धारा 512(g)(2) तथा (3) अनुसारं प्रतिसूचनां दातुं शक्नुयात्।",
    ],
    noticeHeading: "उल्लङ्घन-सूचना",
    noticeBody: [
      "यदि भवान् प्रतिलिप्यधिकार-स्वामी वा अधिकृत-प्रतिनिधिः अस्ति तथा मन्यते यत् Astrology Today, LIFESPACE अथवा Creation Health सम्बन्धित-सेवायाः कश्चन उपयोक्ता भवतः अधिकारान् उल्लङ्घितवान्, तर्हि भवान् सूचनां दातुं शक्नोति।",
      "उल्लङ्घन-सूचना दातुं, भवता ईमेलद्वारा अधोलिखित-तत्त्वैः सहितं लिखित-सन्देशं प्रेषयितव्यम्। यदि भवान् पदार्थस्य वा क्रियायाः विषये मिथ्या-प्रस्तावं करोति, तर्हि क्षतिपूर्तेः, व्ययस्य, अधिवक्ता-शुल्कस्य च उत्तरदायी भवेत्।",
    ],
    noticeClosing: "यदि भवान् उपर्युक्त-सर्वान् अपेक्षित-विधीन् न पालयति, तर्हि भवतः DMCA-सूचना वैधत्वं न प्राप्नुयात्।",
    counterHeading: "प्रतिसूचना",
    counterBody: [
      "DMCA-धारा 512(g)(2) तथा (3) अनुसारं सदस्यः प्रतिसूचनां दातुं शक्नोति।",
      "यदि भवान् मिथ्यया वदति यत् पदार्थः अन्येषां प्रतिलिप्यधिकारान् न उल्लङ्घयति, तर्हि क्षतिपूर्तेः, व्ययस्य, अधिवक्ता-शुल्कस्य च उत्तरदायी भवेत्।",
    ],
    counterClosing: "प्रतिसूचनाः अपि अत्र प्रेषणीयाः:",
  },
  pa: {
    toc: ["DMCA ਨੀਤੀ", "ਉਲੰਘਣਾ ਸੂਚਨਾ", "ਜਵਾਬੀ ਸੂਚਨਾ"],
    policy: [
      "ਅਸੀਂ ਉਹਨਾਂ ਕਥਿਤ ਉਲੰਘਣਾ ਸੂਚਨਾਵਾਂ ਦਾ ਜਵਾਬ ਦੇਣ ਦੀ ਨੀਤੀ ਰੱਖਦੇ ਹਾਂ ਜੋ DMCA ਅਤੇ ਹੋਰ ਲਾਗੂ ਬੌਧਿਕ ਸੰਪਤੀ ਕਾਨੂੰਨਾਂ ਦੇ ਅਨੁਕੂਲ ਹੋਣ।",
      "ਜੇ ਅਸੀਂ ਅਜੇਹੇ ਕਦਮ ਚੁੱਕੀਏ, ਤਾਂ ਅਸੀਂ ਭਲਮੰਸੀ ਨਾਲ ਉਸ ਵਿਅਕਤੀ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਾਂਗੇ ਜਿਸ ਨੇ ਸਮੱਗਰੀ ਭੇਜੀ ਸੀ ਤਾਂ ਜੋ ਉਹ DMCA ਦੀ ਧਾਰਾ 512(g)(2) ਅਤੇ (3) ਅਨੁਸਾਰ ਜਵਾਬੀ ਸੂਚਨਾ ਦੇ ਸਕੇ।",
    ],
    noticeHeading: "ਉਲੰਘਣਾ ਸੂਚਨਾ",
    noticeBody: [
      "ਜੇ ਤੁਸੀਂ ਕਾਪੀਰਾਈਟ ਮਾਲਕ ਹੋ ਜਾਂ ਉਸ ਦੇ ਅਧਿਕ੍ਰਿਤ ਪ੍ਰਤਿਨਿਧੀ ਹੋ ਅਤੇ ਮੰਨਦੇ ਹੋ ਕਿ Astrology Today, LIFESPACE ਜਾਂ Creation Health ਦੀ ਕਿਸੇ ਸੰਬੰਧਤ ਸੇਵਾ ਦੇ ਕਿਸੇ ਵਰਤੋਂਕਾਰ ਨੇ ਤੁਹਾਡੇ ਅਧਿਕਾਰਾਂ ਦਾ ਉਲੰਘਣ ਕੀਤਾ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਸੂਚਨਾ ਭੇਜ ਸਕਦੇ ਹੋ।",
      "ਉਲੰਘਣਾ ਸੂਚਨਾ ਦਾਇਰ ਕਰਨ ਲਈ ਤੁਹਾਨੂੰ ਹੇਠ ਦਿੱਤੇ ਤੱਤਾਂ ਸਮੇਤ ਇੱਕ ਲਿਖਤੀ ਈਮੇਲ ਭੇਜਣੀ ਹੋਵੇਗੀ। ਜੇ ਤੁਸੀਂ ਕਿਸੇ ਸਮੱਗਰੀ ਜਾਂ ਗਤੀਵਿਧੀ ਦੇ ਉਲੰਘਣਕਾਰੀ ਹੋਣ ਬਾਰੇ ਗੰਭੀਰ ਗਲਤ ਬਿਆਨ ਦਿੰਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਨੁਕਸਾਨ, ਖਰਚਿਆਂ ਅਤੇ ਵਕੀਲ ਫੀਸ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਹੋ ਸਕਦੇ ਹੋ।",
    ],
    noticeClosing: "ਜੇ ਤੁਸੀਂ ਉਪਰੋਕਤ ਸਾਰੀਆਂ ਲੋੜਾਂ ਪੂਰੀਆਂ ਨਹੀਂ ਕਰਦੇ, ਤਾਂ ਤੁਹਾਡੀ DMCA ਸੂਚਨਾ ਅਵੈਧ ਮੰਨੀ ਜਾ ਸਕਦੀ ਹੈ।",
    counterHeading: "ਜਵਾਬੀ ਸੂਚਨਾ",
    counterBody: [
      "DMCA ਦੀ ਧਾਰਾ 512(g)(2) ਅਤੇ (3) ਅਨੁਸਾਰ, ਕੋਈ ਸਬਸਕ੍ਰਾਈਬਰ ਜਵਾਬੀ ਸੂਚਨਾ ਦੇ ਸਕਦਾ ਹੈ।",
      "ਜੇ ਤੁਸੀਂ ਇਹ ਗਲਤ ਤਰੀਕੇ ਨਾਲ ਦਰਸਾਉਂਦੇ ਹੋ ਕਿ ਸਮੱਗਰੀ ਹੋਰਾਂ ਦੇ ਕਾਪੀਰਾਈਟ ਦਾ ਉਲੰਘਣ ਨਹੀਂ ਕਰਦੀ, ਤਾਂ ਤੁਸੀਂ ਨੁਕਸਾਨ, ਖਰਚਿਆਂ ਅਤੇ ਵਕੀਲ ਫੀਸ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਹੋ ਸਕਦੇ ਹੋ।",
    ],
    counterClosing: "ਜਵਾਬੀ ਸੂਚਨਾਵਾਂ ਵੀ ਇੱਥੇ ਭੇਜੀਆਂ ਜਾਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ:",
  },
  yue: {
    toc: ["DMCA 政策", "侵權通知", "反通知"],
    policy: [
      "我哋會回應符合 DMCA 同其他適用知識產權法律要求嘅侵權通知。",
      "如果我哋採取相關措施，我哋會以真誠方式嘗試聯絡傳送該內容嘅人，等佢可以根據 DMCA 第 512(g)(2) 同 (3) 條提交反通知。",
    ],
    noticeHeading: "侵權通知",
    noticeBody: [
      "如果你係版權擁有人或者獲授權代理人，並且相信 Astrology Today、LIFESPACE 或者其他 Creation Health 相關服務嘅用戶侵犯咗你嘅權利，你可以提交通知。",
      "要提交侵權通知，你必須透過電郵發送一份包含以下項目嘅書面說明。如果你嚴重失實地聲稱某項內容或活動構成侵權，你可能要承擔損害賠償、費用同律師費。",
    ],
    noticeClosing: "如果你未有符合以上所有要求，你嘅 DMCA 通知可能會被視為無效。",
    counterHeading: "反通知",
    counterBody: [
      "根據 DMCA 第 512(g)(2) 同 (3) 條，訂閱者可以提交反通知。",
      "如果你嚴重失實地聲稱有關內容並無侵犯他人版權，你可能要承擔損害賠償、費用同律師費。",
    ],
    counterClosing: "反通知亦應發送到：",
  },
  ko: {
    toc: ["DMCA 정책", "침해 통지", "반론 통지"],
    policy: [
      "당사는 DMCA 및 기타 적용 가능한 지식재산권 법률을 준수하는 침해 주장 통지에 대응하는 정책을 가지고 있습니다.",
      "당사가 그러한 조치를 취하는 경우, DMCA 제512(g)(2) 및 (3)에 따라 콘텐츠를 전송한 사람이 반론 통지를 제출할 수 있도록 선의로 연락을 시도합니다.",
    ],
    noticeHeading: "침해 통지",
    noticeBody: [
      "귀하가 저작권자이거나 그 정당한 대리인이고 Astrology Today, LIFESPACE 또는 Creation Health 관련 서비스의 사용자가 귀하의 권리를 침해했다고 믿는 경우, 통지를 제출할 수 있습니다.",
      "침해 통지를 제출하려면 아래 항목을 포함한 서면 이메일을 보내야 합니다. 콘텐츠 또는 활동이 침해라고 중대하게 허위 진술할 경우 손해배상, 비용 및 변호사 비용에 대한 책임이 발생할 수 있습니다.",
    ],
    noticeClosing: "위 요건을 모두 충족하지 못하면 귀하의 DMCA 통지가 유효하지 않은 것으로 간주될 수 있습니다.",
    counterHeading: "반론 통지",
    counterBody: [
      "DMCA 제512(g)(2) 및 (3)에 따라 가입자는 반론 통지를 제출할 수 있습니다.",
      "해당 콘텐츠가 타인의 저작권을 침해하지 않는다고 중대하게 허위 진술할 경우 손해배상, 비용 및 변호사 비용에 대한 책임이 발생할 수 있습니다.",
    ],
    counterClosing: "반론 통지도 다음 주소로 보내야 합니다:",
  },
};

const englishBase = {
  toc: ["DMCA Policy", "Infringement Notification", "Counter Notification"] as [
    string,
    string,
    string,
  ],
  policy: [
    "It is our policy to respond to notices of alleged infringement that comply with the Digital Millennium Copyright Act (\"DMCA\") and other applicable intellectual property laws. Responses may include removing material claimed to be the subject of infringing activity on Astrology Today, LIFESPACE, or related Creation Health services and/or terminating a user's account.",
    "If we take such measures, we will make a good-faith attempt to contact the sender who transmitted the content so that he or she may make a counter notification pursuant to sections 512(g)(2) and (3) of the DMCA. It is our policy to document all notices of alleged infringement on which we act. As with all legal notices, a copy of the notice may be sent to one or more third parties who may make it available to the public.",
  ],
  noticeHeading: "Infringement Notification",
  noticeBody: [
    "If you are a copyright owner or an authorized agent thereof and believe that any user of Astrology Today, LIFESPACE, or another related Creation Health service has infringed upon your copyrights, you may submit a notification pursuant to the DMCA by filing a notice of infringement with our designated contact.",
    "To file a notice of infringement, you must provide a written communication by email that sets forth the items specified below. Please note that you may be liable for damages, including costs and attorneys' fees, if you materially misrepresent that content or activity is infringing your copyrights. If you are uncertain whether material available online infringes your rights, you should first contact an attorney.",
  ],
  noticeClosing:
    "You acknowledge that if you fail to comply with all of the requirements set forth above, your DMCA notice may not be valid.",
  counterHeading: "Counter Notification",
  counterBody: [
    "Pursuant to sections 512(g)(2) and (3) of the DMCA, a subscriber may make a counter notification. To file a counter notification with us, you must provide a written communication by email that sets forth the items specified below.",
    "Please note that you may be liable for damages, including costs and attorneys' fees, if you materially misrepresent that the content is not infringing the copyrights of others. If you are not sure whether certain material infringes the copyrights of others, you should first contact an attorney.",
  ],
  counterClosing: "Counter notifications should also be sent to",
};

const supportedLocales = Object.keys(metadataCopy) as SupportedLocale[];

const dmcaCopy = supportedLocales.reduce<Record<SupportedLocale, DmcaCopy>>((acc, locale) => {
  const localized = localizedCopy[locale];
  acc[locale] = {
    metadataTitle: metadataCopy[locale].title,
    metadataDescription: metadataCopy[locale].description,
    toc: localized?.toc ?? englishBase.toc,
    policy: localized?.policy ?? englishBase.policy,
    noticeHeading: localized?.noticeHeading ?? englishBase.noticeHeading,
    noticeBody: localized?.noticeBody ?? englishBase.noticeBody,
    noticeClosing: localized?.noticeClosing ?? englishBase.noticeClosing,
    counterHeading: localized?.counterHeading ?? englishBase.counterHeading,
    counterBody: localized?.counterBody ?? englishBase.counterBody,
    counterClosing: localized?.counterClosing ?? englishBase.counterClosing,
    infringementItems:
      infringementItemOverrides[locale] ?? englishInfringementItems,
    counterItems: counterItemOverrides[locale] ?? englishCounterItems,
  };
  return acc;
}, {} as Record<SupportedLocale, DmcaCopy>);

export function getDmcaCopy(locale: SupportedLocale): DmcaCopy {
  return dmcaCopy[locale] ?? dmcaCopy[defaultLocale];
}
