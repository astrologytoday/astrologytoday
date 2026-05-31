import { defaultLocale, type SupportedLocale } from "./i18n";

export type TermsSection = {
  id: string;
  title: string;
  body: string[];
};

export type TermsOfServiceCopy = {
  metadataTitle: string;
  metadataDescription: string;
  sections: TermsSection[];
};

const englishSections: TermsSection[] = [
  {
    id: "access",
    title: "1. Access To The Service",
    body: [
      "You may use the Service only if you can legally form a binding contract with Creation Health, and only in compliance with these Terms and all applicable laws. When you create an account for Astrology Today, LIFESPACE, or any related service, you must provide accurate and complete information. Use of the Service by anyone under the age of 13 is not allowed, and where local law requires a higher age for valid consent to data processing, you may use the Service only if you satisfy that requirement or valid parental consent has been provided where permitted by law.",
      "Subject to the limitations described in this Agreement, you are granted a limited right to access the text, files, images, video, audio, software, digital tools, written materials, wellness content, astrology content, and other materials made available through the Service. In order to use the Service, you must obtain internet access and pay any service fees associated with such access, and you must provide any equipment necessary to connect to and use the Service.",
    ],
  },
  {
    id: "registration",
    title: "2. Your Registration Obligations",
    body: [
      "You agree to provide true, accurate, current, and complete information about yourself as prompted by the registration process, and to promptly update that information when it changes. You further consent and authorize us to verify your registration data as reasonably required for your access to and use of the Service.",
      "You are solely responsible for maintaining the confidentiality of your account credentials and for any charges, damages, liabilities, or losses arising from your failure to do so. You agree not to permit any other person to use your account credentials, and you agree to notify us immediately of any unauthorized use of your account or any other breach of security known to you.",
    ],
  },
  {
    id: "fees",
    title: "3. Service Fees",
    body: [
      "By registering for any paid portion of the Service, you agree to pay the fees designated for the subscription or service level you select. Additional charges may include purchases you make, service upgrades you request, taxes, payment processing fees where applicable, or other charges disclosed at the time of purchase.",
      "Unless otherwise stated, subscriptions renew automatically at the applicable rate until cancelled by you or terminated by us. Monthly, quarterly, semiannual, annual, or other recurring plans may renew at the end of each subscription period, and you are responsible for managing cancellation before the applicable renewal date if you do not want the Service to continue. All fees and charges are nonrefundable except where required by law or expressly stated by us in writing.",
      "If you register for a trial period, you may be required to provide a payment method when signing up. Unless you cancel before the end of the trial period, your subscription may convert automatically into a paid plan at the rate and billing cycle presented during signup. Payment must be made through a payment method accepted by us or by the relevant platform operator, and your agreement with your card issuer, Apple, Google, or any other payment provider governs your use of that payment method.",
      "We reserve the right to change our fees and billing methods at any time, including by adding supplemental fees or separate charges for content, products, services, subscriptions, or features made available through Creation Health, Astrology Today, or LIFESPACE. Your continued use of the Service after the effective date of any fee change constitutes your acceptance of that change.",
    ],
  },
  {
    id: "termination",
    title: "4. Termination / Cancellation / Refunds",
    body: [
      "You may cancel your account or subscription through the account portal, subscription settings, app store controls, or other cancellation method made available for the Service you purchased. If you cancel your subscription, access to paid features may continue only until the end of the paid subscription term unless otherwise required by law or expressly stated by us.",
      "Except as required by law, we do not provide refunds for partially used subscription periods, and cancellation is your sole right and exclusive remedy if you are dissatisfied with the Service. We may restrict, suspend, or terminate your access to the Service immediately and without notice if you violate, breach, or fail to comply with this Agreement.",
    ],
  },
  {
    id: "restrictions",
    title: "5. User Restrictions",
    body: [
      "You may not use the Service to upload, distribute, transmit, communicate, publish, link to, or otherwise make available any material that is unlawful, defamatory, obscene, threatening, hateful, discriminatory, abusive, fraudulent, invasive of privacy, or otherwise objectionable, or that infringes the intellectual property or other rights of any person or entity.",
      "You may not attempt to disrupt, impair, reverse engineer, scrape, interfere with, overload, or otherwise compromise the Service or any account, host, server, processor, network, or related system. You are prohibited from violating or attempting to violate the security of the Service, including probing vulnerabilities, bypassing authentication, transmitting malicious code, or collecting personal information about others without proper authority.",
    ],
  },
  {
    id: "ip",
    title: "6. Intellectual Property Rights",
    body: [
      "The Service, including its design, layout, branding, logos, software, code, graphics, original writing, compiled content, and all related intellectual property, is owned by or licensed to Creation Health, Astrology Today, LIFESPACE, or their licensors and is protected by copyright, trademark, and other intellectual property laws.",
      "Except as expressly permitted by this Agreement, you may not copy, reproduce, republish, distribute, display, modify, create derivative works from, decompile, reverse engineer, sell, license, rent, lease, exploit, or otherwise use any part of the Service or its content for commercial or unauthorized purposes. We reserve all rights not expressly granted in this Agreement.",
      "If you believe that material available on the Service infringes your copyright or other intellectual property rights, you may notify us using the contact methods made available by Creation Health, and we may investigate and take action as appropriate.",
    ],
  },
  {
    id: "ugc",
    title: "7. User Generated Content",
    body: [
      "The Service may, but is not required to, offer features that permit registered users to post, submit, display, upload, or otherwise make available content, including comments, reviews, writing, images, videos, ideas, feedback, wellness material, astrology observations, or other user-submitted content. If you use such features, you do so at your own risk and remain solely responsible for the content you submit.",
      "By posting user-generated content on or through the Service, you grant Creation Health a non-exclusive, worldwide, royalty-free, sublicensable license to use, host, store, reproduce, modify, adapt, publish, display, distribute, and otherwise make that content available on or in connection with the Service and related promotional channels. We reserve the right, but not the obligation, to monitor, edit, remove, or refuse to publish user-generated content at any time in our sole discretion.",
    ],
  },
  {
    id: "warranties",
    title: "8. Disclaimer Of Warranties",
    body: [
      "You expressly agree that use of and access to the Service is at your sole risk. The Service is provided on an \"as is\" and an \"as available\" basis. To the maximum extent permitted by law, we disclaim all representations and warranties, express, implied, statutory, or otherwise, including any implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, or arising by course of dealing or usage of trade.",
      "We do not warrant that any material, content, products, services, subscriptions, wellness guidance, astrology content, or digital tools available through the Service are accurate, complete, reliable, timely, secure, uninterrupted, or free from errors, viruses, or other harmful components. Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.",
    ],
  },
  {
    id: "liability",
    title: "9. Limitation Of Liability",
    body: [
      "To the maximum extent permitted by law, Creation Health, Astrology Today, LIFESPACE, and their respective affiliates, operators, collaborators, licensors, and service providers shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenues, data, goodwill, use, or other intangible losses arising from or relating to your access to, use of, or inability to use the Service.",
      "In no event shall our aggregate liability for all claims relating to the Service exceed one hundred U.S. dollars (US $100.00) or the amount you paid us for the specific paid Service giving rise to the claim during the twelve months preceding the event giving rise to liability, whichever is greater. If you are a consumer in a jurisdiction that does not permit certain limitations of liability, some of the foregoing limitations may not apply to you.",
    ],
  },
  {
    id: "indemnity",
    title: "10. Indemnity",
    body: [
      "You agree to defend, indemnify, and hold harmless Creation Health, Astrology Today, LIFESPACE, and their respective affiliates, officers, directors, employees, contractors, licensors, and service providers from and against any losses, liabilities, claims, damages, costs, and expenses, including reasonable attorneys' fees, arising out of or related to your breach of this Agreement, your misuse of the Service, your user-generated content, or the use of the Service by any person using your account credentials.",
      "We reserve the right, at our own expense and on notice to you, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you.",
    ],
  },
  {
    id: "law",
    title: "11. Choice Of Law And Consent To Jurisdiction",
    body: [
      "These Terms shall be governed by the laws applicable to the operator of Creation Health and Astrology Today, without regard to conflict of law principles. If you are not a consumer in a jurisdiction that provides otherwise, the exclusive place of jurisdiction for disputes arising from or in connection with this Agreement shall be the courts designated by the operator of the Service.",
      "If you are a consumer in a jurisdiction that grants you non-waivable local rights or forum protections, nothing in these Terms is intended to deprive you of those protections.",
    ],
  },
  {
    id: "objectionable",
    title: "12. Objectionable Material",
    body: [
      "You understand that by using the Service, you may encounter content that may be deemed offensive, indecent, inaccurate, controversial, or otherwise objectionable. You agree to use the Service at your sole risk, and we shall have no liability to you for content that may be found objectionable to you.",
      "Content descriptions, labels, or classifications are provided for convenience only, and we do not guarantee their completeness or accuracy.",
    ],
  },
  {
    id: "links",
    title: "13. Links To Other Sites",
    body: [
      "The Service may contain hyperlinks and pointers to websites, services, platforms, or resources maintained by third parties. If you use those links, you may leave the Service and your browser or device may be redirected to external resources.",
      "Those third-party sites may have their own terms, privacy practices, content standards, or billing policies. We are not responsible for the legality, accuracy, quality, authenticity, availability, content, products, services, or practices of any other site or service, and you access them at your own risk.",
    ],
  },
  {
    id: "privacy",
    title: "14. Creation Health Privacy Policy",
    body: [
      "Creation Health takes your privacy seriously and operates under the policies and principles set forth in its Privacy Policy, which contains important information and disclosures relating to the collection and use of your Personal Data in connection with your use of the Service.",
      "By using the Service, you acknowledge that you have reviewed or have had the opportunity to review our Privacy Policy.",
    ],
  },
  {
    id: "support",
    title: "15. Customer Support",
    body: [
      "If you need assistance with your account, subscription, purchase, or access to the Service, you may contact customer support through the support methods made available by Astrology Today, LIFESPACE, or related Creation Health pages. We may utilize the services of third parties in providing customer support.",
      "The disclaimers of warranties and limitations of liability set forth in this Agreement expressly apply to your use of customer support services as well.",
    ],
  },
  {
    id: "other",
    title: "16. Other Important Provisions",
    body: [
      "You may not assign or transfer this Agreement or any rights granted under it without our prior written consent. We may assign this Agreement without restriction in connection with a corporate reorganization, merger, acquisition, sale of assets, or other business transaction.",
      "No failure or delay by us in enforcing any provision of this Agreement shall operate as a waiver of that or any other right. If any provision of this Agreement is held invalid or unenforceable, the remaining provisions shall remain in full force and effect. This Agreement, together with our Privacy Policy and any other rules or policies expressly incorporated by reference, constitutes the entire agreement between you and us with respect to the Service.",
    ],
  },
  {
    id: "changes",
    title: "17. Changes Or Modifications",
    body: [
      "We reserve the right to add, delete, change, or modify parts of these Terms at our sole discretion and at any time without notice or liability to you. If we do so, we will post the updated Terms on this page and indicate the effective date.",
      "It is your responsibility to review this Agreement from time to time to remain aware of any additions, revisions, or modifications. Your continued use of the Service after any update becomes effective constitutes your acceptance of the revised Terms.",
    ],
  },
];

const sectionTitleOverrides: Partial<Record<SupportedLocale, string[]>> = {
  fr: [
    "1. Accès au service",
    "2. Vos obligations d'inscription",
    "3. Frais de service",
    "4. Résiliation / annulation / remboursements",
    "5. Restrictions d'utilisation",
    "6. Droits de propriété intellectuelle",
    "7. Contenu généré par l'utilisateur",
    "8. Exclusion de garanties",
    "9. Limitation de responsabilité",
    "10. Indemnisation",
    "11. Droit applicable et juridiction",
    "12. Contenu choquant",
    "13. Liens vers d'autres sites",
    "14. Politique de confidentialité de Creation Health",
    "15. Assistance clientèle",
    "16. Autres dispositions importantes",
    "17. Modifications",
  ],
  it: [
    "1. Accesso al servizio",
    "2. Obblighi di registrazione",
    "3. Tariffe del servizio",
    "4. Risoluzione / cancellazione / rimborsi",
    "5. Restrizioni per l'utente",
    "6. Diritti di proprietà intellettuale",
    "7. Contenuti generati dagli utenti",
    "8. Esclusione di garanzie",
    "9. Limitazione di responsabilità",
    "10. Manleva",
    "11. Legge applicabile e giurisdizione",
    "12. Materiale offensivo",
    "13. Link ad altri siti",
    "14. Informativa sulla privacy di Creation Health",
    "15. Assistenza clienti",
    "16. Altre disposizioni importanti",
    "17. Modifiche",
  ],
  es: [
    "1. Acceso al servicio",
    "2. Obligaciones de registro",
    "3. Tarifas del servicio",
    "4. Terminación / cancelación / reembolsos",
    "5. Restricciones del usuario",
    "6. Derechos de propiedad intelectual",
    "7. Contenido generado por el usuario",
    "8. Exclusión de garantías",
    "9. Limitación de responsabilidad",
    "10. Indemnización",
    "11. Ley aplicable y jurisdicción",
    "12. Material objetable",
    "13. Enlaces a otros sitios",
    "14. Política de privacidad de Creation Health",
    "15. Atención al cliente",
    "16. Otras disposiciones importantes",
    "17. Cambios o modificaciones",
  ],
  hi: [
    "1. सेवा तक पहुँच",
    "2. पंजीकरण संबंधी दायित्व",
    "3. सेवा शुल्क",
    "4. समाप्ति / रद्दीकरण / धनवापसी",
    "5. उपयोगकर्ता प्रतिबंध",
    "6. बौद्धिक संपदा अधिकार",
    "7. उपयोगकर्ता-निर्मित सामग्री",
    "8. वारंटी का अस्वीकरण",
    "9. दायित्व की सीमा",
    "10. क्षतिपूर्ति",
    "11. लागू कानून और क्षेत्राधिकार",
    "12. आपत्तिजनक सामग्री",
    "13. अन्य साइटों के लिंक",
    "14. Creation Health गोपनीयता नीति",
    "15. ग्राहक सहायता",
    "16. अन्य महत्वपूर्ण प्रावधान",
    "17. परिवर्तन या संशोधन",
  ],
  ur: [
    "1. سروس تک رسائی",
    "2. رجسٹریشن سے متعلق ذمہ داریاں",
    "3. سروس فیس",
    "4. خاتمہ / منسوخی / رقم کی واپسی",
    "5. صارف پابندیاں",
    "6. دانشورانہ املاک کے حقوق",
    "7. صارف کی تیار کردہ مواد",
    "8. ضمانتوں کا انکار",
    "9. ذمہ داری کی حد",
    "10. ازالہ",
    "11. قابل اطلاق قانون اور دائرہ اختیار",
    "12. قابلِ اعتراض مواد",
    "13. دیگر سائٹس کے روابط",
    "14. Creation Health پرائیویسی پالیسی",
    "15. کسٹمر سپورٹ",
    "16. دیگر اہم دفعات",
    "17. تبدیلیاں یا ترامیم",
  ],
  sa: [
    "1. सेवायाः प्रवेशः",
    "2. पञ्जीकरण-सम्बद्ध-कर्तव्याः",
    "3. सेवा-शुल्काः",
    "4. समाप्तिः / निरसनम् / धन-प्रत्यावर्तनम्",
    "5. उपयोक्तृ-निषेधाः",
    "6. बौद्धिक-सम्पत्ति-अधिकाराः",
    "7. उपयोक्तृ-निर्मिता सामग्री",
    "8. आश्वासन-निराकरणम्",
    "9. दायित्व-सीमा",
    "10. क्षतिपूर्तिः",
    "11. प्रवर्त्यमानः विधिः अधिकारक्षेत्रं च",
    "12. आपत्तिजनक-सामग्री",
    "13. अन्य-जालस्थान-सम्बन्धाः",
    "14. Creation Health गोपनीयता-नीतिः",
    "15. ग्राहक-सहायता",
    "16. अन्ये महत्त्वपूर्ण-नियमाः",
    "17. परिवर्तनानि अथवा संशोधनानि",
  ],
  pa: [
    "1. ਸੇਵਾ ਤੱਕ ਪਹੁੰਚ",
    "2. ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨਾਲ ਸੰਬੰਧਿਤ ਫ਼ਰਜ਼",
    "3. ਸੇਵਾ ਫ਼ੀਸ",
    "4. ਸਮਾਪਤੀ / ਰੱਦਗੀ / ਰਿਫੰਡ",
    "5. ਯੂਜ਼ਰ ਪਾਬੰਦੀਆਂ",
    "6. ਬੌਧਿਕ ਸੰਪਤੀ ਅਧਿਕਾਰ",
    "7. ਯੂਜ਼ਰ-ਤਿਆਰ ਕੀਤੀ ਸਮੱਗਰੀ",
    "8. ਵਾਰੰਟੀਆਂ ਦਾ ਅਸਵੀਕਾਰ",
    "9. ਜ਼ਿੰਮੇਵਾਰੀ ਦੀ ਸੀਮਾ",
    "10. ਮੁਆਵਜ਼ਾ",
    "11. ਲਾਗੂ ਕਾਨੂੰਨ ਅਤੇ ਅਧਿਕਾਰ-ਖੇਤਰ",
    "12. ਆਪਤਿਤਜਨਕ ਸਮੱਗਰੀ",
    "13. ਹੋਰ ਸਾਈਟਾਂ ਲਈ ਲਿੰਕ",
    "14. Creation Health ਪਰਾਈਵੇਸੀ ਨੀਤੀ",
    "15. ਗਾਹਕ ਸਹਾਇਤਾ",
    "16. ਹੋਰ ਮਹੱਤਵਪੂਰਨ ਪ੍ਰਾਵਧਾਨ",
    "17. ਤਬਦੀਲੀਆਂ ਜਾਂ ਸੋਧਾਂ",
  ],
  zh: [
    "1. 服务访问",
    "2. 注册义务",
    "3. 服务费用",
    "4. 终止 / 取消 / 退款",
    "5. 用户限制",
    "6. 知识产权",
    "7. 用户生成内容",
    "8. 免责声明",
    "9. 责任限制",
    "10. 赔偿",
    "11. 适用法律与管辖",
    "12. 令人反感的内容",
    "13. 其他网站链接",
    "14. Creation Health 隐私政策",
    "15. 客户支持",
    "16. 其他重要条款",
    "17. 变更或修改",
  ],
  ja: [
    "1. サービスへのアクセス",
    "2. 登録に関する義務",
    "3. サービス料金",
    "4. 終了 / 解約 / 返金",
    "5. 利用者の制限",
    "6. 知的財産権",
    "7. ユーザー生成コンテンツ",
    "8. 保証の否認",
    "9. 責任の制限",
    "10. 補償",
    "11. 準拠法および裁判管轄",
    "12. 不快なコンテンツ",
    "13. 外部サイトへのリンク",
    "14. Creation Health プライバシーポリシー",
    "15. カスタマーサポート",
    "16. その他の重要条項",
    "17. 変更または修正",
  ],
  yue: [
    "1. 使用服務",
    "2. 註冊責任",
    "3. 服務費用",
    "4. 終止 / 取消 / 退款",
    "5. 用戶限制",
    "6. 知識產權",
    "7. 用戶生成內容",
    "8. 免責聲明",
    "9. 責任限制",
    "10. 彌償",
    "11. 適用法律及司法管轄",
    "12. 令人反感內容",
    "13. 其他網站連結",
    "14. Creation Health 私隱政策",
    "15. 客戶支援",
    "16. 其他重要條文",
    "17. 更改或修改",
  ],
  ko: [
    "1. 서비스 접근",
    "2. 등록 의무",
    "3. 서비스 요금",
    "4. 종료 / 취소 / 환불",
    "5. 사용자 제한",
    "6. 지적 재산권",
    "7. 사용자 생성 콘텐츠",
    "8. 보증의 부인",
    "9. 책임의 제한",
    "10. 면책",
    "11. 준거법 및 관할",
    "12. 불쾌한 콘텐츠",
    "13. 외부 사이트 링크",
    "14. Creation Health 개인정보 처리방침",
    "15. 고객 지원",
    "16. 기타 중요한 조항",
    "17. 변경 또는 수정",
  ],
};

const sectionBodyOverrides: Partial<Record<SupportedLocale, string[][]>> = {
  fr: [
    [
      "Vous ne pouvez utiliser le Service que si vous êtes légalement en mesure de conclure un contrat contraignant avec Creation Health, et uniquement dans le respect des présentes Conditions et de toutes les lois applicables. Lorsque vous créez un compte pour Astrology Today, LIFESPACE ou tout service connexe, vous devez fournir des informations exactes et complètes. L'utilisation du Service par toute personne âgée de moins de 13 ans n'est pas autorisée et, lorsque la loi locale exige un âge plus élevé pour un consentement valide au traitement des données, vous ne pouvez utiliser le Service que si vous remplissez cette exigence ou si un consentement parental valide a été fourni lorsque cela est permis par la loi.",
      "Sous réserve des limitations décrites dans le présent Accord, il vous est accordé un droit limité d'accès aux textes, fichiers, images, vidéos, contenus audio, logiciels, outils numériques, documents écrits, contenus de bien-être, contenus astrologiques et autres éléments mis à disposition par le Service. Pour utiliser le Service, vous devez obtenir un accès à Internet et payer tous les frais liés à cet accès, et vous devez fournir tout équipement nécessaire pour vous connecter au Service et l'utiliser.",
    ],
    [
      "Vous acceptez de fournir des informations vraies, exactes, à jour et complètes vous concernant, telles que demandées dans le cadre du processus d'inscription, et de mettre rapidement ces informations à jour lorsqu'elles changent. Vous consentez en outre à ce que nous vérifiions vos données d'inscription dans la mesure raisonnablement nécessaire à votre accès au Service et à votre utilisation de celui-ci.",
      "Vous êtes seul responsable du maintien de la confidentialité de vos identifiants de compte et de tous frais, dommages, responsabilités ou pertes résultant de votre manquement à cette obligation. Vous acceptez de ne permettre à aucune autre personne d'utiliser vos identifiants de compte et de nous informer immédiatement de toute utilisation non autorisée de votre compte ou de toute autre atteinte à la sécurité portée à votre connaissance.",
    ],
    [
      "En vous inscrivant à toute partie payante du Service, vous acceptez de payer les frais correspondant à l'abonnement ou au niveau de service que vous sélectionnez. Des frais supplémentaires peuvent inclure les achats que vous effectuez, les améliorations de service que vous demandez, les taxes, les frais de traitement des paiements lorsque cela s'applique, ou tout autre frais divulgué au moment de l'achat.",
      "Sauf indication contraire, les abonnements se renouvellent automatiquement au tarif applicable jusqu'à leur annulation par vous ou leur résiliation par nous. Les forfaits mensuels, trimestriels, semestriels, annuels ou autres forfaits récurrents peuvent être renouvelés à la fin de chaque période d'abonnement, et vous êtes responsable de gérer l'annulation avant la date de renouvellement applicable si vous ne souhaitez pas que le Service se poursuive. Tous les frais et paiements sont non remboursables sauf lorsque la loi l'exige ou lorsque nous l'indiquons expressément par écrit.",
      "Si vous vous inscrivez à une période d'essai, il peut vous être demandé de fournir un mode de paiement lors de l'inscription. Sauf annulation avant la fin de la période d'essai, votre abonnement peut être automatiquement converti en formule payante au tarif et selon le cycle de facturation présentés lors de l'inscription. Le paiement doit être effectué via un mode de paiement accepté par nous ou par l'opérateur de plateforme concerné, et votre accord avec l'émetteur de votre carte, Apple, Google ou tout autre fournisseur de paiement régit votre utilisation de ce mode de paiement.",
      "Nous nous réservons le droit de modifier nos frais et nos modes de facturation à tout moment, y compris en ajoutant des frais supplémentaires ou distincts pour des contenus, produits, services, abonnements ou fonctionnalités mis à disposition par Creation Health, Astrology Today ou LIFESPACE. Votre utilisation continue du Service après la date d'entrée en vigueur d'une modification tarifaire constitue votre acceptation de cette modification.",
    ],
    [
      "Vous pouvez annuler votre compte ou votre abonnement via le portail de compte, les paramètres d'abonnement, les contrôles de l'app store ou toute autre méthode d'annulation mise à disposition pour le Service que vous avez acheté. Si vous annulez votre abonnement, l'accès aux fonctionnalités payantes peut se poursuivre uniquement jusqu'à la fin de la période d'abonnement payée, sauf disposition contraire imposée par la loi ou expressément indiquée par nous.",
      "Sauf lorsque la loi l'exige, nous n'accordons pas de remboursements pour les périodes d'abonnement partiellement utilisées, et l'annulation constitue votre seul droit et recours exclusif si vous êtes insatisfait du Service. Nous pouvons restreindre, suspendre ou mettre fin immédiatement et sans préavis à votre accès au Service si vous violez, enfreignez ou ne respectez pas le présent Accord.",
    ],
    [
      "Vous ne pouvez pas utiliser le Service pour téléverser, distribuer, transmettre, communiquer, publier, lier ou autrement rendre disponible tout contenu illégal, diffamatoire, obscène, menaçant, haineux, discriminatoire, abusif, frauduleux, portant atteinte à la vie privée ou autrement répréhensible, ou qui enfreint les droits de propriété intellectuelle ou autres droits de toute personne ou entité.",
      "Vous ne pouvez pas tenter de perturber, altérer, rétroconcevoir, aspirer, interférer avec, surcharger ou autrement compromettre le Service ou tout compte, hôte, serveur, processeur, réseau ou système connexe. Il vous est interdit de violer ou de tenter de violer la sécurité du Service, notamment en sondant les vulnérabilités, en contournant l'authentification, en transmettant du code malveillant ou en collectant des informations personnelles sur autrui sans autorisation appropriée.",
    ],
    [
      "Le Service, y compris sa conception, sa structure, son image de marque, ses logos, ses logiciels, son code, ses graphismes, ses textes originaux, ses contenus compilés et toute propriété intellectuelle associée, est détenu ou concédé sous licence à Creation Health, Astrology Today, LIFESPACE ou à leurs concédants, et est protégé par les lois sur le droit d'auteur, les marques et autres droits de propriété intellectuelle.",
      "Sauf autorisation expresse prévue par le présent Accord, vous ne pouvez copier, reproduire, republier, distribuer, afficher, modifier, créer des œuvres dérivées à partir de, décompiler, rétroconcevoir, vendre, concéder sous licence, louer, donner à bail, exploiter ou autrement utiliser toute partie du Service ou de son contenu à des fins commerciales ou non autorisées. Tous les droits non expressément accordés dans le présent Accord sont réservés.",
      "Si vous estimez que du matériel disponible sur le Service enfreint vos droits d'auteur ou d'autres droits de propriété intellectuelle, vous pouvez nous en informer en utilisant les moyens de contact mis à disposition par Creation Health, et nous pourrons enquêter et prendre les mesures appropriées.",
    ],
    [
      "Le Service peut, sans y être obligé, proposer des fonctionnalités permettant aux utilisateurs enregistrés de publier, soumettre, afficher, téléverser ou autrement rendre disponibles des contenus, notamment des commentaires, avis, textes, images, vidéos, idées, retours, contenus liés au bien-être, observations astrologiques ou tout autre contenu soumis par les utilisateurs. Si vous utilisez de telles fonctionnalités, vous le faites à vos propres risques et restez seul responsable du contenu que vous soumettez.",
      "En publiant du contenu généré par l'utilisateur sur le Service ou par son intermédiaire, vous accordez à Creation Health une licence non exclusive, mondiale, gratuite et pouvant faire l'objet d'une sous-licence pour utiliser, héberger, stocker, reproduire, modifier, adapter, publier, afficher, distribuer et autrement mettre ce contenu à disposition sur le Service ou en lien avec celui-ci et via les canaux promotionnels associés. Nous nous réservons le droit, sans y être obligés, de surveiller, modifier, supprimer ou refuser de publier tout contenu généré par les utilisateurs à tout moment et à notre seule discrétion.",
    ],
    [
      "Vous acceptez expressément que l'utilisation du Service et l'accès à celui-ci se fassent à vos seuls risques. Le Service est fourni « en l'état » et « selon disponibilité ». Dans toute la mesure permise par la loi, nous déclinons toute déclaration et garantie, expresse, implicite, légale ou autre, y compris toute garantie implicite de qualité marchande, d'adéquation à un usage particulier, de titre, d'absence de contrefaçon, ou découlant d'une relation d'affaires ou d'un usage commercial.",
      "Nous ne garantissons pas que les documents, contenus, produits, services, abonnements, orientations en matière de bien-être, contenus astrologiques ou outils numériques disponibles via le Service soient exacts, complets, fiables, opportuns, sécurisés, ininterrompus ou exempts d'erreurs, de virus ou d'autres composants nuisibles. Certaines juridictions n'autorisent pas l'exclusion de certaines garanties, de sorte qu'une partie des exclusions ci-dessus peut ne pas s'appliquer à vous.",
    ],
    [
      "Dans toute la mesure permise par la loi, Creation Health, Astrology Today, LIFESPACE et leurs sociétés affiliées, opérateurs, collaborateurs, concédants et prestataires de services respectifs ne pourront être tenus responsables de dommages indirects, accessoires, spéciaux, consécutifs, exemplaires ou punitifs, ni de pertes de profits, revenus, données, clientèle, usage ou autres pertes immatérielles découlant de votre accès au Service, de votre utilisation du Service ou de votre incapacité à l'utiliser, ou s'y rapportant.",
      "En aucun cas notre responsabilité globale pour l'ensemble des réclamations liées au Service n'excédera cent dollars américains (100 USD) ou le montant que vous nous avez payé pour le Service payant spécifique à l'origine de la réclamation au cours des douze mois précédant l'événement ayant donné lieu à la responsabilité, selon le montant le plus élevé. Si vous êtes un consommateur dans une juridiction qui n'autorise pas certaines limitations de responsabilité, certaines des limitations ci-dessus peuvent ne pas s'appliquer à vous.",
    ],
    [
      "Vous acceptez de défendre, d'indemniser et de dégager de toute responsabilité Creation Health, Astrology Today, LIFESPACE ainsi que leurs sociétés affiliées, dirigeants, administrateurs, employés, prestataires, concédants et fournisseurs de services respectifs contre toute perte, responsabilité, réclamation, dommage, coût et dépense, y compris des honoraires raisonnables d'avocat, résultant de ou liés à votre violation du présent Accord, à votre mauvaise utilisation du Service, à votre contenu généré par l'utilisateur ou à l'utilisation du Service par toute personne utilisant vos identifiants de compte.",
      "Nous nous réservons le droit, à nos propres frais et sous réserve de vous en informer, d'assumer la défense et le contrôle exclusifs de toute affaire faisant autrement l'objet d'une indemnisation de votre part.",
    ],
    [
      "Les présentes Conditions sont régies par les lois applicables à l'exploitant de Creation Health et d'Astrology Today, sans égard aux principes de conflits de lois. Si vous n'êtes pas un consommateur dans une juridiction prévoyant des dispositions contraires, le lieu de juridiction exclusif pour les litiges découlant du présent Accord ou s'y rapportant sera celui des tribunaux désignés par l'exploitant du Service.",
      "Si vous êtes un consommateur dans une juridiction vous accordant des droits locaux impératifs ou des protections de for, rien dans les présentes Conditions n'a pour objet de vous priver de ces protections.",
    ],
    [
      "Vous comprenez qu'en utilisant le Service, vous pouvez être exposé à des contenus susceptibles d'être jugés offensants, indécents, inexacts, controversés ou autrement répréhensibles. Vous acceptez d'utiliser le Service à vos seuls risques, et nous ne saurions être responsables envers vous de contenus que vous pourriez juger répréhensibles.",
      "Les descriptions, étiquettes ou classifications de contenu sont fournies uniquement à des fins de commodité, et nous ne garantissons pas leur exhaustivité ni leur exactitude.",
    ],
    [
      "Le Service peut contenir des hyperliens et des renvois vers des sites web, services, plateformes ou ressources exploités par des tiers. Si vous utilisez ces liens, vous pouvez quitter le Service et votre navigateur ou appareil peut être redirigé vers des ressources externes.",
      "Ces sites tiers peuvent avoir leurs propres conditions, pratiques de confidentialité, normes de contenu ou politiques de facturation. Nous ne sommes pas responsables de la légalité, de l'exactitude, de la qualité, de l'authenticité, de la disponibilité, du contenu, des produits, des services ou des pratiques d'un autre site ou service, et vous y accédez à vos propres risques.",
    ],
    [
      "Creation Health prend votre vie privée au sérieux et applique les politiques et principes définis dans sa Politique de confidentialité, qui contient des informations et des divulgations importantes relatives à la collecte et à l'utilisation de vos Données personnelles dans le cadre de votre utilisation du Service.",
      "En utilisant le Service, vous reconnaissez avoir examiné ou avoir eu la possibilité d'examiner notre Politique de confidentialité.",
    ],
    [
      "Si vous avez besoin d'aide concernant votre compte, votre abonnement, votre achat ou votre accès au Service, vous pouvez contacter le service client via les moyens d'assistance mis à disposition par Astrology Today, LIFESPACE ou les pages connexes de Creation Health. Nous pouvons faire appel à des tiers pour fournir le service client.",
      "Les exclusions de garantie et limitations de responsabilité énoncées dans le présent Accord s'appliquent expressément également à votre utilisation des services d'assistance clientèle.",
    ],
    [
      "Vous ne pouvez pas céder ou transférer le présent Accord ni les droits qui y sont accordés sans notre consentement écrit préalable. Nous pouvons céder le présent Accord sans restriction dans le cadre d'une réorganisation d'entreprise, d'une fusion, d'une acquisition, d'une vente d'actifs ou d'une autre opération commerciale.",
      "Aucun manquement ou retard de notre part dans l'application d'une disposition du présent Accord ne constitue une renonciation à ce droit ni à tout autre droit. Si une disposition du présent Accord est jugée invalide ou inapplicable, les autres dispositions resteront pleinement en vigueur. Le présent Accord, ainsi que notre Politique de confidentialité et toute autre règle ou politique expressément incorporée par renvoi, constitue l'intégralité de l'accord entre vous et nous concernant le Service.",
    ],
    [
      "Nous nous réservons le droit d'ajouter, de supprimer, de changer ou de modifier des parties des présentes Conditions à notre seule discrétion et à tout moment, sans préavis ni responsabilité envers vous. Si nous le faisons, nous publierons les Conditions mises à jour sur cette page et indiquerons la date d'entrée en vigueur.",
      "Il vous appartient de consulter périodiquement le présent Accord afin de prendre connaissance de tout ajout, révision ou modification. Votre utilisation continue du Service après l'entrée en vigueur d'une mise à jour constitue votre acceptation des Conditions révisées.",
    ],
  ],
  hi: [
    ["आप सेवा का उपयोग केवल तभी कर सकते हैं जब आप Creation Health के साथ बाध्यकारी अनुबंध करने की कानूनी क्षमता रखते हों, इन शर्तों और लागू कानूनों का पालन करते हों, और Astrology Today, LIFESPACE या संबंधित सेवाओं के लिए सही और पूर्ण जानकारी प्रदान करें; 13 वर्ष से कम आयु के उपयोगकर्ताओं को अनुमति नहीं है, और जहाँ स्थानीय कानून अधिक आयु या वैध अभिभावकीय सहमति मांगता है, वहाँ वही लागू होगा।"],
    ["आप सहमत हैं कि पंजीकरण प्रक्रिया में सत्य, सटीक, अद्यतन और पूर्ण जानकारी देंगे, आवश्यक होने पर उसे अपडेट करेंगे, और हम आपके पंजीकरण डेटा को सेवा तक पहुँच और उपयोग के लिए उचित सीमा तक सत्यापित कर सकते हैं; आपके खाते की गोपनीयता और किसी भी अनधिकृत उपयोग की जिम्मेदारी आपकी होगी।"],
    ["सेवा के किसी भी भुगतान वाले भाग के लिए पंजीकरण करके आप चुनी गई सदस्यता या सेवा-स्तर के शुल्क, लागू कर, भुगतान-प्रसंस्करण शुल्क और अन्य प्रकट शुल्कों का भुगतान करने के लिए सहमत होते हैं; सदस्यताएँ सामान्यतः स्वतः नवीनीकृत होती हैं, परीक्षण अवधि समाप्त होने पर भुगतान योजना में बदल सकती हैं, और हमारी शुल्क तथा बिलिंग विधियाँ समय-समय पर बदली जा सकती हैं।"],
    ["आप अपना खाता या सदस्यता उपलब्ध रद्दीकरण साधनों के माध्यम से समाप्त कर सकते हैं, लेकिन भुगतान-अवधि के आंशिक उपयोग पर सामान्यतः धनवापसी नहीं दी जाती; यदि आप इस समझौते का उल्लंघन करते हैं तो हम बिना सूचना के आपकी पहुँच सीमित, निलंबित या समाप्त कर सकते हैं।"],
    ["आप सेवा का उपयोग अवैध, मानहानिकारक, अश्लील, धमकीपूर्ण, घृणित, भेदभावपूर्ण, धोखाधड़ीपूर्ण या बौद्धिक संपदा अथवा अन्य अधिकारों का उल्लंघन करने वाली सामग्री के लिए नहीं कर सकते, और न ही सेवा, उसके खातों, सर्वरों, नेटवर्कों या सुरक्षा तंत्रों को बाधित, स्क्रैप, ओवरलोड या क्षति पहुँचाने का प्रयास कर सकते हैं।"],
    ["सेवा की रूपरेखा, ब्रांडिंग, लोगो, सॉफ्टवेयर, कोड, ग्राफिक्स, मूल लेखन और संकलित सामग्री Creation Health, Astrology Today, LIFESPACE या उनके लाइसेंसदाताओं की बौद्धिक संपदा है; स्पष्ट अनुमति के बिना आप इन्हें कॉपी, पुनर्प्रकाशित, वितरित, संशोधित, व्युत्पन्न कार्यों में उपयोग या वाणिज्यिक रूप से शोषित नहीं कर सकते।"],
    ["सेवा उपयोगकर्ता-निर्मित सामग्री जैसे टिप्पणियाँ, समीक्षाएँ, लेखन, छवियाँ, वीडियो, विचार और प्रतिक्रिया की अनुमति दे सकती है; ऐसी सामग्री के लिए आप स्वयं जिम्मेदार रहेंगे, और उसे प्रकाशित करके आप Creation Health को उसे होस्ट, संग्रहीत, पुनरुत्पादित, अनुकूलित, प्रदर्शित, वितरित और प्रचारित करने का विश्वव्यापी, रॉयल्टी-फ्री लाइसेंस देते हैं।"],
    ["सेवा 'जैसी है' और 'जैसी उपलब्ध है' आधार पर प्रदान की जाती है, और कानून द्वारा अनुमत अधिकतम सीमा तक हम व्यापारिक योग्यता, किसी विशेष उद्देश्य के लिए उपयुक्तता, शीर्षक, गैर-उल्लंघन, निर्बाधता, सुरक्षा, सटीकता या हानिकारक तत्वों से मुक्त होने संबंधी सभी स्पष्ट या निहित वारंटियों का अस्वीकरण करते हैं।"],
    ["कानून द्वारा अनुमत अधिकतम सीमा तक Creation Health, Astrology Today, LIFESPACE और उनके सहयोगी, लाइसेंसदाता और सेवा-प्रदाता किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी, दंडात्मक या अमूर्त हानि के लिए जिम्मेदार नहीं होंगे; हमारी कुल जिम्मेदारी सामान्यतः 100 अमेरिकी डॉलर या दावे से संबंधित सेवा के लिए पिछले 12 महीनों में चुकाई गई राशि तक सीमित होगी।"],
    ["आप Creation Health, Astrology Today, LIFESPACE और उनके संबंधित अधिकारियों, कर्मचारियों, ठेकेदारों और सेवा-प्रदाताओं को आपके उल्लंघन, दुरुपयोग, उपयोगकर्ता-सामग्री या आपके खाते के माध्यम से सेवा के उपयोग से उत्पन्न दावों, हानियों और लागतों से बचाने, प्रतिरक्षा देने और क्षतिपूर्ति करने के लिए सहमत हैं।"],
    ["ये शर्तें सेवा के संचालक पर लागू कानूनों द्वारा शासित होंगी; यदि आपकी स्थानीय उपभोक्ता-सुरक्षाएँ अन्यथा न कहें, तो विवादों के लिए वही न्यायालय और अधिकार-क्षेत्र लागू होंगे जिन्हें सेवा-संचालक निर्दिष्ट करता है।"],
    ["सेवा का उपयोग करते समय आपको ऐसा सामग्री मिल सकती है जिसे आप आपत्तिजनक, अनुचित, गलत या विवादास्पद मानें; ऐसी सामग्री के जोखिम पर आप स्वयं सेवा का उपयोग करते हैं, और सामग्री के विवरण या वर्गीकरण की पूर्णता या शुद्धता की हम गारंटी नहीं देते।"],
    ["सेवा में तृतीय-पक्ष वेबसाइटों, प्लेटफ़ॉर्मों या संसाधनों के लिंक हो सकते हैं; उन बाहरी साइटों के अपने नियम, गोपनीयता-प्रथाएँ और नीतियाँ हो सकती हैं, और उनके कानूनीपन, गुणवत्ता, उपलब्धता या व्यवहार के लिए हम जिम्मेदार नहीं हैं।"],
    ["Creation Health आपकी गोपनीयता को गंभीरता से लेता है और अपनी गोपनीयता नीति के अनुसार कार्य करता है, जिसमें आपकी व्यक्तिगत जानकारी के संग्रह और उपयोग के बारे में महत्वपूर्ण विवरण दिए गए हैं; सेवा का उपयोग करके आप स्वीकार करते हैं कि आपने उस नीति की समीक्षा की है या करने का अवसर पाया है।"],
    ["यदि आपको खाते, सदस्यता, खरीद या सेवा तक पहुँच के बारे में सहायता चाहिए, तो आप Astrology Today, LIFESPACE या Creation Health द्वारा उपलब्ध कराए गए सहायता-चैनलों का उपयोग कर सकते हैं; ग्राहक सहायता के उपयोग पर भी इस समझौते में दी गई वारंटी-निरस्ती और दायित्व-सीमाएँ लागू होंगी।"],
    ["आप बिना हमारी लिखित अनुमति के इस समझौते या इसके अंतर्गत अपने अधिकारों का हस्तांतरण नहीं कर सकते; हम कॉर्पोरेट पुनर्गठन, विलय, अधिग्रहण, परिसंपत्ति-विक्रय या अन्य व्यवसायिक लेनदेन के संदर्भ में इसे हस्तांतरित कर सकते हैं, और यदि किसी प्रावधान को अमान्य माना जाए तो भी शेष प्रावधान प्रभावी रहेंगे।"],
    ["हम किसी भी समय बिना पूर्व सूचना के इन शर्तों के भागों को जोड़ने, हटाने, बदलने या संशोधित करने का अधिकार सुरक्षित रखते हैं; अद्यतन संस्करण इसी पृष्ठ पर प्रभावी तिथि सहित प्रकाशित किया जाएगा, और सेवा का आपका निरंतर उपयोग संशोधित शर्तों की स्वीकृति माना जाएगा।"],
  ],
  ur: [
    ["آپ سروس صرف اسی صورت استعمال کر سکتے ہیں جب آپ کے پاس Creation Health کے ساتھ قانونی طور پر پابند معاہدہ کرنے کی صلاحیت ہو، آپ ان شرائط اور تمام قابلِ اطلاق قوانین کی پابندی کریں، اور Astrology Today، LIFESPACE یا متعلقہ سروسز کے لیے درست اور مکمل معلومات فراہم کریں؛ 13 سال سے کم عمر افراد کو سروس استعمال کرنے کی اجازت نہیں، اور جہاں مقامی قانون زیادہ عمر یا والدین کی درست رضامندی کا تقاضا کرے وہاں وہی شرط لاگو ہوگی۔"],
    ["آپ اس بات سے اتفاق کرتے ہیں کہ رجسٹریشن کے دوران اپنے بارے میں سچی، درست، موجودہ اور مکمل معلومات فراہم کریں گے اور ان میں تبدیلی آنے پر انہیں بروقت اپڈیٹ کریں گے؛ ہم آپ کے رجسٹریشن ڈیٹا کی اتنی حد تک توثیق کر سکتے ہیں جتنی آپ کی سروس تک رسائی اور استعمال کے لیے معقول طور پر ضروری ہو، جبکہ اکاؤنٹ کی رازداری اور کسی غیر مجاز استعمال کی بنیادی ذمہ داری آپ پر ہوگی۔"],
    ["سروس کے کسی بھی بامعاوضہ حصے کے لیے رجسٹر ہو کر آپ منتخب کردہ سبسکرپشن یا سروس لیول کی فیس، ممکنہ اضافی خریداریوں، ٹیکسوں، ادائیگی کی پروسیسنگ فیس اور خریداری کے وقت ظاہر کیے گئے دیگر اخراجات ادا کرنے پر رضامند ہوتے ہیں؛ سبسکرپشنز عموماً خودکار طور پر تجدید ہوتی ہیں، ٹرائل مدت ختم ہونے پر ادا شدہ پلان میں تبدیل ہو سکتی ہیں، اور ہم فیس یا بلنگ کے طریقے وقتاً فوقتاً تبدیل کر سکتے ہیں۔"],
    ["آپ دستیاب منسوخی طریقوں کے ذریعے اپنا اکاؤنٹ یا سبسکرپشن ختم کر سکتے ہیں، لیکن جزوی طور پر استعمال شدہ مدت کے لیے عام طور پر رقم واپس نہیں کی جاتی؛ اگر آپ اس معاہدے کی خلاف ورزی کریں تو ہم فوری طور پر اور بغیر اطلاع کے آپ کی رسائی محدود، معطل یا ختم کر سکتے ہیں۔"],
    ["آپ سروس کو کسی غیر قانونی، ہتک آمیز، فحش، دھمکی آمیز، نفرت انگیز، امتیازی، دھوکہ دہ، رازداری میں مداخلت کرنے والے یا کسی کے حقوقِ دانش یا دیگر حقوق کی خلاف ورزی کرنے والے مواد کے لیے استعمال نہیں کر سکتے، اور نہ ہی سروس، سرورز، نیٹ ورکس یا سیکیورٹی کو خراب، اوورلوڈ، اسکریپ یا بائی پاس کرنے کی کوشش کر سکتے ہیں۔"],
    ["سروس کا ڈیزائن، لے آؤٹ، برانڈنگ، لوگوز، سافٹ ویئر، کوڈ، گرافکس، اصل تحریریں اور مرتب شدہ مواد Creation Health، Astrology Today، LIFESPACE یا ان کے لائسنس دہندگان کی ملکیت یا لائسنس شدہ املاک ہیں اور قابلِ اطلاق دانشورانہ املاک کے قوانین کے تحت محفوظ ہیں؛ واضح اجازت کے بغیر آپ انہیں نقل، دوبارہ شائع، ترمیم، تقسیم یا تجارتی طور پر استعمال نہیں کر سکتے۔"],
    ["سروس صارفین کو تبصرے، جائزے، تحریریں، تصاویر، ویڈیوز، خیالات، فیڈبیک یا دیگر صارف ساختہ مواد جمع کرانے کی سہولت دے سکتی ہے؛ ایسا مواد آپ اپنی ذمہ داری پر فراہم کرتے ہیں، اور اسے پوسٹ کر کے آپ Creation Health کو اسے میزبانی، محفوظ، نقل، موافق، شائع، دکھانے، تقسیم کرنے اور سروس یا اس کی پروموشن کے ساتھ استعمال کرنے کا عالمی، غیر منفرد اور رائلٹی فری لائسنس دیتے ہیں۔"],
    ["آپ واضح طور پر تسلیم کرتے ہیں کہ سروس کا استعمال اور اس تک رسائی مکمل طور پر آپ کے اپنے خطرے پر ہے؛ سروس 'جیسی ہے' اور 'جیسی دستیاب ہے' کی بنیاد پر فراہم کی جاتی ہے، اور قانون کی زیادہ سے زیادہ اجازت یافتہ حد تک ہم تجارت پذیری، مخصوص مقصد کے لیے موزونیت، عنوان، عدم خلاف ورزی، تسلسل، سیکیورٹی یا درستگی سے متعلق تمام ضمانتوں سے دستبردار ہوتے ہیں۔"],
    ["قانون کی زیادہ سے زیادہ اجازت یافتہ حد تک Creation Health، Astrology Today، LIFESPACE اور ان کے وابستگان، آپریٹرز، لائسنس دہندگان اور سروس فراہم کنندگان کسی بھی بالواسطہ، اتفاقی، خصوصی، نتیجتی یا تعزیری نقصان، یا منافع، آمدنی، ڈیٹا، شہرت، استعمال یا دیگر غیر مادی نقصانات کے ذمہ دار نہیں ہوں گے؛ ہماری مجموعی ذمہ داری عموماً 100 امریکی ڈالر یا متعلقہ ادا شدہ سروس کے لیے گزشتہ بارہ ماہ میں ادا کی گئی رقم، جو زیادہ ہو، تک محدود ہوگی۔"],
    ["آپ Creation Health، Astrology Today، LIFESPACE اور ان کے متعلقہ افسران، ڈائریکٹرز، ملازمین، کنٹریکٹرز، لائسنس دہندگان اور سروس فراہم کنندگان کو آپ کی خلاف ورزی، سروس کے غلط استعمال، آپ کے صارف ساختہ مواد، یا آپ کے اکاؤنٹ کے ذریعے سروس کے استعمال سے پیدا ہونے والے دعووں، نقصانات، ذمہ داریوں اور اخراجات سے بچانے، ان کا دفاع کرنے اور انہیں معاوضہ دینے پر رضامند ہیں۔"],
    ["یہ شرائط Creation Health اور Astrology Today کے آپریٹر پر لاگو قوانین کے تابع ہوں گی؛ اگر آپ ایسی دائرہ اختیار میں صارف نہیں ہیں جہاں مقامی لازمی حقوق مختلف تحفظات دیتے ہوں، تو اس معاہدے سے متعلق تنازعات کے لیے وہی عدالتیں اور اختیار نافذ ہوگا جو سروس آپریٹر نامزد کرے۔"],
    ["سروس استعمال کرتے وقت آپ کو ایسا مواد مل سکتا ہے جو ناگوار، ناشائستہ، غلط، متنازع یا دوسری صورت میں قابلِ اعتراض سمجھا جا سکتا ہے؛ آپ اس خطرے کو قبول کرتے ہیں، اور مواد کی درجہ بندی یا وضاحت کی مکمل درستگی یا تکمیل کی ہم ضمانت نہیں دیتے۔"],
    ["سروس میں تیسرے فریق کی ویب سائٹس، پلیٹ فارمز یا وسائل کے لنکس ہو سکتے ہیں؛ ان بیرونی سائٹس کی اپنی شرائط، پرائیویسی طریقے، مواد کے معیارات یا بلنگ پالیسیاں ہو سکتی ہیں، اور ان کی قانونی حیثیت، دستیابی، معیار یا طریقہ کار کے لیے ہم ذمہ دار نہیں ہیں۔"],
    ["Creation Health آپ کی رازداری کو سنجیدگی سے لیتا ہے اور اپنی پرائیویسی پالیسی کے مطابق کام کرتا ہے، جس میں آپ کے ذاتی ڈیٹا کے جمع اور استعمال کے بارے میں اہم معلومات شامل ہیں؛ سروس استعمال کر کے آپ تسلیم کرتے ہیں کہ آپ نے اس پالیسی کا جائزہ لیا ہے یا ایسا کرنے کا موقع پایا ہے۔"],
    ["اگر آپ کو اپنے اکاؤنٹ، سبسکرپشن، خریداری یا سروس تک رسائی کے بارے میں مدد درکار ہو تو آپ Astrology Today، LIFESPACE یا متعلقہ Creation Health صفحات کے ذریعے دستیاب سپورٹ ذرائع سے رابطہ کر سکتے ہیں؛ کسٹمر سپورٹ کے استعمال پر بھی اسی معاہدے میں دی گئی ذمہ داری کی حدیں اور ضمانتوں کے انکار لاگو ہوں گے۔"],
    ["آپ ہماری پیشگی تحریری اجازت کے بغیر اس معاہدے یا اس کے تحت حقوق کو منتقل نہیں کر سکتے؛ ہم کارپوریٹ تنظیمِ نو، انضمام، حصول، اثاثہ فروشی یا دیگر کاروباری لین دین کے سلسلے میں اسے منتقل کر سکتے ہیں، اور اگر کسی شق کو ناقابلِ نفاذ سمجھا جائے تو باقی شقیں بدستور مؤثر رہیں گی۔"],
    ["ہم کسی بھی وقت اور اپنی صوابدید پر ان شرائط کے حصوں کو شامل، حذف، تبدیل یا ترمیم کرنے کا حق محفوظ رکھتے ہیں؛ تازہ ترین شرائط اس صفحے پر مؤثر تاریخ کے ساتھ شائع کی جائیں گی، اور اس کے بعد سروس کا مسلسل استعمال آپ کی جانب سے ان ترمیم شدہ شرائط کی قبولیت سمجھا جائے گا۔"],
  ],
  pa: [
    ["ਤੁਸੀਂ ਸੇਵਾ ਸਿਰਫ਼ ਉਹਨਾਂ ਹਾਲਾਤਾਂ ਵਿੱਚ ਵਰਤ ਸਕਦੇ ਹੋ ਜਦੋਂ ਤੁਸੀਂ Creation Health ਨਾਲ ਕਾਨੂੰਨੀ ਤੌਰ 'ਤੇ ਬਾਧਕ ਸਮਝੌਤਾ ਕਰਨ ਦੇ ਯੋਗ ਹੋ, ਇਨ੍ਹਾਂ ਸ਼ਰਤਾਂ ਅਤੇ ਲਾਗੂ ਕਾਨੂੰਨਾਂ ਦੀ ਪਾਲਣਾ ਕਰਦੇ ਹੋ, ਅਤੇ Astrology Today, LIFESPACE ਜਾਂ ਸੰਬੰਧਿਤ ਸੇਵਾਵਾਂ ਲਈ ਸਹੀ ਅਤੇ ਪੂਰੀ ਜਾਣਕਾਰੀ ਦਿੰਦੇ ਹੋ; 13 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਵਾਲਿਆਂ ਨੂੰ ਸੇਵਾ ਵਰਤਣ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਹੈ, ਅਤੇ ਜਿੱਥੇ ਸਥਾਨਕ ਕਾਨੂੰਨ ਵਧੀਕ ਉਮਰ ਜਾਂ ਮਾਪਿਆਂ ਦੀ ਵੈਧ ਸਹਿਮਤੀ ਮੰਗਦਾ ਹੈ, ਉੱਥੇ ਉਹੀ ਲਾਗੂ ਹੋਵੇਗਾ।"],
    ["ਤੁਸੀਂ ਸਹਿਮਤ ਹੋ ਕਿ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦੌਰਾਨ ਆਪਣੇ ਬਾਰੇ ਸੱਚੀ, ਸਹੀ, ਅਪਡੇਟ ਅਤੇ ਪੂਰੀ ਜਾਣਕਾਰੀ ਦੋਗੇ ਅਤੇ ਲੋੜ ਪੈਣ 'ਤੇ ਉਸਨੂੰ ਅਪਡੇਟ ਕਰਦੇ ਰਹੋਗੇ; ਸੇਵਾ ਤੱਕ ਤੁਹਾਡੀ ਪਹੁੰਚ ਅਤੇ ਵਰਤੋਂ ਲਈ ਜਿੰਨੀ ਲੋੜੀਂਦੀ ਹੋਵੇ, ਅਸੀਂ ਤੁਹਾਡੇ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਡਾਟੇ ਦੀ ਜਾਂਚ ਕਰ ਸਕਦੇ ਹਾਂ, ਜਦਕਿ ਤੁਹਾਡੇ ਖਾਤੇ ਦੀ ਗੋਪਨੀਯਤਾ ਅਤੇ ਬਿਨਾਂ ਅਧਿਕਾਰ ਵਾਲੀ ਵਰਤੋਂ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਤੁਹਾਡੀ ਰਹੇਗੀ।"],
    ["ਸੇਵਾ ਦੇ ਕਿਸੇ ਵੀ ਭੁਗਤਾਨੀ ਹਿੱਸੇ ਲਈ ਰਜਿਸਟਰ ਕਰਕੇ ਤੁਸੀਂ ਚੁਣੀ ਗਈ ਮੈਂਬਰਸ਼ਿਪ ਜਾਂ ਸੇਵਾ ਪੱਧਰ ਦੀ ਫੀਸ, ਵਾਧੂ ਖਰੀਦਾਂ, ਟੈਕਸ, ਭੁਗਤਾਨ ਪ੍ਰਕਿਰਿਆ ਫੀਸ ਅਤੇ ਖਰੀਦ ਦੇ ਸਮੇਂ ਦੱਸੇ ਹੋਰ ਖਰਚੇ ਭਰਨ ਲਈ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ; ਮੈਂਬਰਸ਼ਿਪ ਆਮ ਤੌਰ 'ਤੇ ਆਪਣੇ ਆਪ ਨਵੀਕਰਿਤ ਹੁੰਦੀ ਹੈ, ਟਰਾਇਲ ਸਮਾਪਤ ਹੋਣ 'ਤੇ ਭੁਗਤਾਨੀ ਯੋਜਨਾ ਬਣ ਸਕਦੀ ਹੈ, ਅਤੇ ਅਸੀਂ ਆਪਣੀਆਂ ਫੀਸਾਂ ਜਾਂ ਬਿਲਿੰਗ ਵਿਧੀਆਂ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ ਬਦਲ ਸਕਦੇ ਹਾਂ।"],
    ["ਤੁਸੀਂ ਖਾਤਾ ਪੋਰਟਲ, ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਸੈਟਿੰਗਾਂ, ਐਪ ਸਟੋਰ ਕੰਟਰੋਲ ਜਾਂ ਉਪਲਬਧ ਹੋਰ ਰੱਦਗੀ ਤਰੀਕਿਆਂ ਰਾਹੀਂ ਆਪਣਾ ਖਾਤਾ ਜਾਂ ਮੈਂਬਰਸ਼ਿਪ ਰੱਦ ਕਰ ਸਕਦੇ ਹੋ, ਪਰ ਅਧ-ਵਰਤੀ ਗਈ ਭੁਗਤਾਨੀ ਮਿਆਦ ਲਈ ਆਮ ਤੌਰ 'ਤੇ ਰਿਫੰਡ ਨਹੀਂ ਦਿੱਤਾ ਜਾਂਦਾ; ਜੇ ਤੁਸੀਂ ਇਸ ਸਮਝੌਤੇ ਦੀ ਉਲੰਘਣਾ ਕਰਦੇ ਹੋ ਤਾਂ ਅਸੀਂ ਤੁਹਾਡੀ ਪਹੁੰਚ ਤੁਰੰਤ ਅਤੇ ਬਿਨਾਂ ਨੋਟਿਸ ਦੇ ਸੀਮਿਤ, ਸਸਪੈਂਡ ਜਾਂ ਸਮਾਪਤ ਕਰ ਸਕਦੇ ਹਾਂ।"],
    ["ਤੁਸੀਂ ਸੇਵਾ ਨੂੰ ਕਿਸੇ ਗੈਰਕਾਨੂੰਨੀ, ਬਦਨਾਮੀਪੂਰਨ, ਅਸ਼ਲੀਲ, ਧਮਕੀਭਰੀ, ਘ੍ਰਿਣਾਪੂਰਨ, ਭੇਦਭਾਵਪੂਰਨ, ਧੋਖੇਬਾਜ਼, ਗੋਪਨੀਯਤਾ ਵਿੱਚ ਦਖਲ ਦੇਣ ਵਾਲੀ ਜਾਂ ਹੋਰਨਾਂ ਦੇ ਬੌਧਿਕ ਜਾਂ ਹੋਰ ਅਧਿਕਾਰਾਂ ਦੀ ਉਲੰਘਣਾ ਕਰਨ ਵਾਲੀ ਸਮੱਗਰੀ ਲਈ ਵਰਤ ਨਹੀਂ ਸਕਦੇ, ਅਤੇ ਨਾ ਹੀ ਸੇਵਾ, ਖਾਤਿਆਂ, ਸਰਵਰਾਂ, ਨੈੱਟਵਰਕਾਂ ਜਾਂ ਸੁਰੱਖਿਆ ਪ੍ਰਣਾਲੀਆਂ ਨੂੰ ਖਰਾਬ, ਓਵਰਲੋਡ, ਸਕ੍ਰੈਪ ਜਾਂ ਬਾਈਪਾਸ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਸਕਦੇ ਹੋ।"],
    ["ਸੇਵਾ ਦੀ ਡਿਜ਼ਾਈਨ, ਲੇਆਉਟ, ਬ੍ਰਾਂਡਿੰਗ, ਲੋਗੋ, ਸੌਫਟਵੇਅਰ, ਕੋਡ, ਗ੍ਰਾਫਿਕਸ, ਮੂਲ ਲਿਖਤ ਅਤੇ ਇਕੱਠੀ ਕੀਤੀ ਸਮੱਗਰੀ Creation Health, Astrology Today, LIFESPACE ਜਾਂ ਉਨ੍ਹਾਂ ਦੇ ਲਾਇਸੰਸਦਾਤਾਵਾਂ ਦੀ ਬੌਧਿਕ ਸੰਪਤੀ ਹੈ; ਸਪਸ਼ਟ ਮਨਜ਼ੂਰੀ ਤੋਂ ਬਿਨਾਂ ਤੁਸੀਂ ਇਸਨੂੰ ਨਕਲ, ਦੁਬਾਰਾ ਪ੍ਰਕਾਸ਼ਿਤ, ਸੋਧ, ਵੰਡ ਜਾਂ ਵਪਾਰਕ ਤੌਰ 'ਤੇ ਵਰਤ ਨਹੀਂ ਸਕਦੇ।"],
    ["ਸੇਵਾ ਰਜਿਸਟਰ ਕੀਤੇ ਵਰਤੋਂਕਾਰਾਂ ਨੂੰ ਟਿੱਪਣੀਆਂ, ਸਮੀਖਿਆਵਾਂ, ਲਿਖਤ, ਚਿੱਤਰ, ਵੀਡੀਓ, ਵਿਚਾਰ, ਫੀਡਬੈਕ ਜਾਂ ਹੋਰ ਵਰਤੋਂਕਾਰ-ਤਿਆਰ ਕੀਤੀ ਸਮੱਗਰੀ ਪੋਸਟ ਕਰਨ ਦੀ ਆਗਿਆ ਦੇ ਸਕਦੀ ਹੈ; ਅਜਿਹੀ ਸਮੱਗਰੀ ਲਈ ਤੁਸੀਂ ਖੁਦ ਜ਼ਿੰਮੇਵਾਰ ਰਹੋਗੇ, ਅਤੇ ਉਸਨੂੰ ਪੋਸਟ ਕਰਕੇ ਤੁਸੀਂ Creation Health ਨੂੰ ਇਸਨੂੰ ਹੋਸਟ ਕਰਨ, ਸੰਭਾਲਣ, ਨਕਲ ਕਰਨ, ਢਾਲਣ, ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਨ, ਦਿਖਾਉਣ ਅਤੇ ਸੇਵਾ ਜਾਂ ਇਸ ਨਾਲ ਸੰਬੰਧਿਤ ਪ੍ਰਚਾਰ ਮਾਧਿਅਮਾਂ ਵਿੱਚ ਵਰਤਣ ਲਈ ਵਿਸ਼ਵਵਿਆਪੀ, ਗੈਰ-ਵਿਸ਼ੇਸ਼ ਅਤੇ ਰਾਇਲਟੀ-ਮੁਕਤ ਲਾਇਸੰਸ ਦਿੰਦੇ ਹੋ।"],
    ["ਤੁਸੀਂ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਮੰਨਦੇ ਹੋ ਕਿ ਸੇਵਾ ਦੀ ਵਰਤੋਂ ਅਤੇ ਇਸ ਤੱਕ ਪਹੁੰਚ ਤੁਹਾਡੇ ਆਪਣੇ ਜੋਖਮ 'ਤੇ ਹੈ; ਸੇਵਾ 'ਜਿਵੇਂ ਹੈ' ਅਤੇ 'ਜਿਵੇਂ ਉਪਲਬਧ ਹੈ' ਦੇ ਅਧਾਰ 'ਤੇ ਪ੍ਰਦਾਨ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਅਤੇ ਕਾਨੂੰਨ ਦੁਆਰਾ ਮਨਜ਼ੂਰ ਸਭ ਤੋਂ ਵੱਧ ਹੱਦ ਤੱਕ ਅਸੀਂ ਵਪਾਰਯੋਗਤਾ, ਕਿਸੇ ਖ਼ਾਸ ਮਕਸਦ ਲਈ ਯੋਗਤਾ, ਮਲਕੀਅਤ, ਗੈਰ-ਉਲੰਘਣਾ, ਸੁਰੱਖਿਆ ਜਾਂ ਲਗਾਤਾਰ ਉਪਲਬਧਤਾ ਸੰਬੰਧੀ ਸਾਰੀਆਂ ਵਾਰੰਟੀਆਂ ਤੋਂ ਇਨਕਾਰ ਕਰਦੇ ਹਾਂ।"],
    ["ਕਾਨੂੰਨ ਦੁਆਰਾ ਮਨਜ਼ੂਰ ਸਭ ਤੋਂ ਵੱਧ ਹੱਦ ਤੱਕ Creation Health, Astrology Today, LIFESPACE ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਸੰਬੰਧਿਤ ਸਹਿਯੋਗੀ, ਆਪਰੇਟਰ, ਲਾਇਸੰਸਦਾਤਾ ਅਤੇ ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਕਿਸੇ ਵੀ ਅਪਰੋਕਸ਼, ਯਾਦਰਚਿਤ, ਵਿਸ਼ੇਸ਼, ਨਤੀਜਾਤਮਕ ਜਾਂ ਦੰਡਾਤਮਕ ਨੁਕਸਾਨ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹੋਣਗੇ; ਸਾਡੀ ਕੁੱਲ ਜ਼ਿੰਮੇਵਾਰੀ ਆਮ ਤੌਰ 'ਤੇ 100 ਅਮਰੀਕੀ ਡਾਲਰ ਜਾਂ ਉਸ ਭੁਗਤਾਨੀ ਸੇਵਾ ਲਈ ਪਿਛਲੇ 12 ਮਹੀਨਿਆਂ ਵਿੱਚ ਤੁਹਾਡੇ ਦੁਆਰਾ ਦਿੱਤੀ ਰਕਮ, ਜੋ ਵੱਧ ਹੋਵੇ, ਤੱਕ ਸੀਮਿਤ ਰਹੇਗੀ।"],
    ["ਤੁਸੀਂ Creation Health, Astrology Today, LIFESPACE ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਅਧਿਕਾਰੀਆਂ, ਡਾਇਰੈਕਟਰਾਂ, ਕਰਮਚਾਰੀਆਂ, ਠੇਕੇਦਾਰਾਂ, ਲਾਇਸੰਸਦਾਤਾਵਾਂ ਅਤੇ ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਤੁਹਾਡੇ ਸਮਝੌਤਾ-ਉਲੰਘਣ, ਸੇਵਾ ਦੇ ਗਲਤ ਇਸਤੇਮਾਲ, ਤੁਹਾਡੀ ਵਰਤੋਂਕਾਰ-ਸਮੱਗਰੀ ਜਾਂ ਤੁਹਾਡੇ ਖਾਤੇ ਰਾਹੀਂ ਹੋਏ ਵਰਤੋਂ ਨਾਲ ਜੁੜੇ ਦਾਅਵਿਆਂ, ਨੁਕਸਾਨਾਂ ਅਤੇ ਖਰਚਿਆਂ ਤੋਂ ਬਚਾਉਣ, ਰੱਖਿਆ ਕਰਨ ਅਤੇ ਮੁਆਵਜ਼ਾ ਦੇਣ ਲਈ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ।"],
    ["ਇਹ ਸ਼ਰਤਾਂ Creation Health ਅਤੇ Astrology Today ਦੇ ਆਪਰੇਟਰ 'ਤੇ ਲਾਗੂ ਕਾਨੂੰਨਾਂ ਅਨੁਸਾਰ ਚੱਲਣਗੀਆਂ; ਜੇਕਰ ਤੁਸੀਂ ਕਿਸੇ ਅਜਿਹੇ ਖੇਤਰ ਦੇ ਉਪਭੋਗਤਾ ਨਹੀਂ ਹੋ ਜਿੱਥੇ ਸਥਾਨਕ ਅਟੱਲ ਅਧਿਕਾਰ ਵੱਖਰੀ ਸੁਰੱਖਿਆ ਦਿੰਦੇ ਹਨ, ਤਾਂ ਵਿਵਾਦਾਂ ਲਈ ਉਹੀ ਅਦਾਲਤਾਂ ਅਤੇ ਅਧਿਕਾਰ-ਖੇਤਰ ਲਾਗੂ ਹੋਣਗੇ ਜੋ ਸੇਵਾ ਆਪਰੇਟਰ ਨਿਰਧਾਰਤ ਕਰੇ।"],
    ["ਤੁਸੀਂ ਸਮਝਦੇ ਹੋ ਕਿ ਸੇਵਾ ਵਰਤਦੇ ਹੋਏ ਤੁਹਾਨੂੰ ਅਜਿਹੀ ਸਮੱਗਰੀ ਮਿਲ ਸਕਦੀ ਹੈ ਜੋ ਅਪਮਾਨਜਨਕ, ਅਸ਼ੋਭਨ, ਗਲਤ, ਵਿਵਾਦਪੂਰਨ ਜਾਂ ਹੋਰ ਤਰੀਕੇ ਨਾਲ ਆਪਤਿਤਜਨਕ ਮੰਨੀ ਜਾ ਸਕਦੀ ਹੈ; ਤੁਸੀਂ ਇਹ ਜੋਖਮ ਆਪਣੇ ਸਿਰ ਲੈਂਦੇ ਹੋ, ਅਤੇ ਅਸੀਂ ਅਜਿਹੀ ਸਮੱਗਰੀ ਲਈ ਤੁਹਾਡੇ ਪ੍ਰਤੀ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹੋਵਾਂਗੇ।"],
    ["ਸੇਵਾ ਵਿੱਚ ਤੀਜੇ ਪੱਖ ਦੀਆਂ ਵੈਬਸਾਈਟਾਂ, ਪਲੇਟਫਾਰਮਾਂ ਜਾਂ ਸਰੋਤਾਂ ਦੇ ਲਿੰਕ ਹੋ ਸਕਦੇ ਹਨ; ਉਹਨਾਂ ਬਾਹਰੀ ਸਾਈਟਾਂ ਦੀਆਂ ਆਪਣੀਆਂ ਸ਼ਰਤਾਂ, ਪਰਾਈਵੇਸੀ ਰਵਾਇਤਾਂ, ਸਮੱਗਰੀ ਮਾਪਦੰਡ ਜਾਂ ਬਿਲਿੰਗ ਨੀਤੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹਨ, ਅਤੇ ਉਨ੍ਹਾਂ ਦੀ ਕਾਨੂੰਨੀਤਾ, ਉਪਲਬਧਤਾ, ਗੁਣਵੱਤਾ ਜਾਂ ਰਵਾਇਤਾਂ ਲਈ ਅਸੀਂ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।"],
    ["Creation Health ਤੁਹਾਡੀ ਪਰਾਈਵੇਸੀ ਨੂੰ ਗੰਭੀਰਤਾ ਨਾਲ ਲੈਂਦਾ ਹੈ ਅਤੇ ਆਪਣੀ ਪਰਾਈਵੇਸੀ ਨੀਤੀ ਅਨੁਸਾਰ ਕੰਮ ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਤੁਹਾਡੇ ਨਿੱਜੀ ਡਾਟੇ ਦੀ ਇਕੱਠੀਕਰਨ ਅਤੇ ਵਰਤੋਂ ਬਾਰੇ ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਦਿੱਤੀ ਗਈ ਹੈ; ਸੇਵਾ ਵਰਤ ਕੇ ਤੁਸੀਂ ਮੰਨਦੇ ਹੋ ਕਿ ਤੁਸੀਂ ਉਸ ਨੀਤੀ ਦੀ ਸਮੀਖਿਆ ਕੀਤੀ ਹੈ ਜਾਂ ਕਰਨ ਦਾ ਮੌਕਾ ਪ੍ਰਾਪਤ ਕੀਤਾ ਹੈ।"],
    ["ਜੇ ਤੁਹਾਨੂੰ ਆਪਣੇ ਖਾਤੇ, ਮੈਂਬਰਸ਼ਿਪ, ਖਰੀਦ ਜਾਂ ਸੇਵਾ ਤੱਕ ਪਹੁੰਚ ਬਾਰੇ ਮਦਦ ਦੀ ਲੋੜ ਹੋਵੇ, ਤਾਂ ਤੁਸੀਂ Astrology Today, LIFESPACE ਜਾਂ ਸੰਬੰਧਿਤ Creation Health ਪੇਜ਼ਾਂ ਰਾਹੀਂ ਉਪਲਬਧ ਗਾਹਕ ਸਹਾਇਤਾ ਨਾਲ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ; ਗਾਹਕ ਸਹਾਇਤਾ ਦੀ ਵਰਤੋਂ 'ਤੇ ਵੀ ਇਸ ਸਮਝੌਤੇ ਵਿੱਚ ਦਿੱਤੀਆਂ ਵਾਰੰਟੀ ਛੂਟਾਂ ਅਤੇ ਜ਼ਿੰਮੇਵਾਰੀ ਸੀਮਾਵਾਂ ਲਾਗੂ ਰਹਿਣਗੀਆਂ।"],
    ["ਤੁਸੀਂ ਸਾਡੀ ਲਿਖਤੀ ਮਨਜ਼ੂਰੀ ਤੋਂ ਬਿਨਾਂ ਇਸ ਸਮਝੌਤੇ ਜਾਂ ਇਸ ਦੇ ਅਧੀਨ ਦਿੱਤੇ ਹੱਕਾਂ ਨੂੰ ਟ੍ਰਾਂਸਫਰ ਨਹੀਂ ਕਰ ਸਕਦੇ; ਅਸੀਂ ਕਾਰਪੋਰੇਟ ਪੁਨਰਗਠਨ, ਵਿਲੀਨ, ਅਧਿਗ੍ਰਹਿਣ, ਸੰਪਤੀ ਵਿਕਰੀ ਜਾਂ ਹੋਰ ਕਾਰੋਬਾਰੀ ਲੈਣ-ਦੇਣ ਦੇ ਸੰਦਰਭ ਵਿੱਚ ਇਸ ਸਮਝੌਤੇ ਨੂੰ ਬਿਨਾਂ ਰੋਕਤੋਕ ਟ੍ਰਾਂਸਫਰ ਕਰ ਸਕਦੇ ਹਾਂ, ਅਤੇ ਜੇ ਕਿਸੇ ਪ੍ਰਾਵਧਾਨ ਨੂੰ ਅਵੈਧ ਮੰਨਿਆ ਜਾਵੇ ਤਾਂ ਵੀ ਬਾਕੀ ਪ੍ਰਾਵਧਾਨ ਪ੍ਰਭਾਵ ਵਿੱਚ ਰਹਿਣਗੇ।"],
    ["ਅਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਅਤੇ ਆਪਣੀ ਵਿਵੇਕ ਅਨੁਸਾਰ ਇਨ੍ਹਾਂ ਸ਼ਰਤਾਂ ਦੇ ਹਿੱਸਿਆਂ ਵਿੱਚ ਜੋੜ, ਹਟਾਉਣ, ਤਬਦੀਲੀ ਜਾਂ ਸੋਧ ਕਰਨ ਦਾ ਹੱਕ ਰੱਖਦੇ ਹਾਂ; ਅਪਡੇਟ ਵਰਜਨ ਇਸੇ ਪੇਜ਼ 'ਤੇ ਪ੍ਰਭਾਵੀ ਮਿਤੀ ਸਮੇਤ ਪ੍ਰਕਾਸ਼ਿਤ ਕੀਤਾ ਜਾਵੇਗਾ, ਅਤੇ ਉਸ ਤੋਂ ਬਾਅਦ ਸੇਵਾ ਦੀ ਤੁਹਾਡੀ ਲਗਾਤਾਰ ਵਰਤੋਂ ਉਹਨਾਂ ਸੋਧੀਆਂ ਗਈਆਂ ਸ਼ਰਤਾਂ ਦੀ ਸਵੀਕ੍ਰਿਤੀ ਮੰਨੀ ਜਾਵੇਗੀ।"],
  ],
  zh: [
    ["只有在您具备与 Creation Health 订立具有法律约束力协议的资格，并遵守本条款及所有适用法律的情况下，您才可以使用本服务。您在为 Astrology Today、LIFESPACE 或任何相关服务创建账户时，必须提供准确、完整的信息。13 岁以下人员不得使用本服务；如果当地法律要求更高的有效数据处理同意年龄，则您只有在满足该要求或依法已获得有效监护人同意的情况下才可使用本服务。"],
    ["您同意在注册过程中提供真实、准确、最新且完整的信息，并在信息发生变化时及时更新。您还同意并授权我们在合理必要的范围内核验您的注册信息，以便您访问和使用本服务；维护账户凭据的保密性以及任何未经授权的使用风险由您自行承担。"],
    ["注册本服务的任何付费部分，即表示您同意支付您所选择的订阅或服务等级对应的费用。其他费用可能包括您进行的购买、您请求的升级、适用税费、支付处理费用以及购买时披露的其他收费。除非另有说明，订阅会按适用费率自动续订；试用期结束后，订阅也可能自动转为付费方案。我们保留随时调整费用及计费方式的权利。"],
    ["您可以通过账户门户、订阅设置、应用商店控制项或我们提供的其他取消方式取消账户或订阅。除非法律要求，否则对于部分已使用的订阅周期，我们通常不提供退款；如果您违反本协议，我们可以立即且无需通知地限制、暂停或终止您对本服务的访问。"],
    ["您不得利用本服务上传、传播、发布或以其他方式提供任何违法、诽谤、淫秽、威胁、仇恨、歧视、欺诈、侵犯隐私或其他令人反感的材料，也不得提供侵犯任何个人或实体知识产权或其他权利的内容；您也不得试图干扰、抓取、超载、破坏或规避本服务、其账户、服务器、网络或安全机制。"],
    ["本服务及其设计、布局、品牌、标识、软件、代码、图形、原创写作、汇编内容及相关知识产权均归 Creation Health、Astrology Today、LIFESPACE 或其许可方所有或经其许可使用，并受版权、商标及其他知识产权法律保护。除本协议明确允许外，您不得复制、再发布、分发、修改、反向工程、出售、授权、出租或以其他未授权方式使用本服务或其内容。"],
    ["本服务可能提供允许注册用户发布、提交、展示、上传或以其他方式提供内容的功能，包括评论、评价、文章、图片、视频、想法、反馈、健康材料、占星观察或其他用户提交内容。您对自己提交的内容承担全部责任；通过在服务上发布该类内容，您授予 Creation Health 一项全球范围、非独占、免版税、可再许可的许可，以便其托管、存储、复制、修改、发布、展示、分发并结合服务及相关推广渠道使用这些内容。"],
    ["您明确同意，使用和访问本服务的风险由您自行承担。本服务按“现状”和“可用”基础提供。在法律允许的最大范围内，我们不作任何明示、默示、法定或其他形式的陈述或保证，包括适销性、特定用途适用性、权属、不侵权、不中断、安全性或准确性的保证。"],
    ["在法律允许的最大范围内，Creation Health、Astrology Today、LIFESPACE 及其关联方、运营方、合作方、许可方和服务提供商均不对任何间接、附带、特殊、后果性、惩罚性损害，或利润、收入、数据、商誉、使用价值及其他无形损失承担责任；我们的总责任通常不超过 100 美元或您在导致索赔事件发生前 12 个月内就相关付费服务支付的金额（以较高者为准）。"],
    ["您同意就因您违反本协议、滥用本服务、您的用户内容或任何使用您账户凭据的人使用本服务而产生或与之相关的任何损失、责任、索赔、损害、费用和开支（包括合理律师费），为 Creation Health、Astrology Today、LIFESPACE 及其关联方、管理人员、员工、承包商、许可方和服务提供商进行抗辩、赔偿并使其免责。"],
    ["本条款受适用于 Creation Health 和 Astrology Today 运营方的法律管辖，而不考虑法律冲突原则。如果您不属于享有强制性本地消费者保护的司法辖区，则与本协议相关的争议应提交由服务运营方指定的法院专属管辖。"],
    ["您理解，使用本服务时可能会接触到您认为令人反感、不当、不准确、具争议性或其他令人不悦的内容。您同意自行承担该风险，我们不对任何您认为令人反感的内容承担责任；内容描述、标签或分类仅为方便而设，我们不保证其完整性或准确性。"],
    ["本服务可能包含指向第三方网站、平台或资源的链接或指示。如果您使用这些链接，可能会离开本服务并被重定向到外部资源。这些第三方网站可能拥有其自身的条款、隐私做法、内容标准或计费政策，我们不对其合法性、准确性、质量、真实性、可用性、内容、产品、服务或做法负责。"],
    ["Creation Health 重视您的隐私，并依据其隐私政策运营。该政策包含与您使用本服务相关的个人数据收集与使用的重要说明。使用本服务即表示您确认自己已经审阅或已有机会审阅我们的隐私政策。"],
    ["如果您需要有关账户、订阅、购买或访问本服务的帮助，您可以通过 Astrology Today、LIFESPACE 或相关 Creation Health 页面提供的支持方式联系客户支持。我们可能会使用第三方协助提供客户支持，本协议中的免责声明和责任限制同样适用于客户支持服务。"],
    ["未经我们事先书面同意，您不得转让本协议或本协议授予的任何权利。我们可以在公司重组、合并、收购、资产出售或其他商业交易中不受限制地转让本协议。如果本协议任何条款被认定无效或不可执行，其余条款仍继续有效；本协议连同我们的隐私政策及明确纳入的其他规则或政策，构成您与我们之间关于本服务的完整协议。"],
    ["我们保留在任何时间自行决定增加、删除、更改或修改本条款内容的权利，无需另行通知或对您承担责任。若发生此类变更，我们会在本页面发布更新后的条款并注明生效日期。您有责任定期查阅本协议；在更新生效后继续使用本服务，即构成您对修订条款的接受。"],
  ],
  ja: [
    ["お客様は、Creation Health と法的拘束力のある契約を締結できる法的能力を有し、本規約および適用されるすべての法令を遵守する場合に限り、本サービスを利用することができます。Astrology Today、LIFESPACE、または関連サービスのアカウントを作成する際には、正確かつ完全な情報を提供しなければなりません。13歳未満による利用は認められず、現地法が個人データ処理への有効な同意についてより高い年齢要件を定めている場合は、その要件を満たすか、法令で認められる範囲で有効な保護者同意がある場合に限り利用できます。"],
    ["お客様は、登録手続において真実、正確、最新かつ完全な情報を提供し、変更が生じた場合には速やかに更新することに同意します。また、お客様は、本サービスへのアクセスおよび利用のために合理的に必要な範囲で、当社が登録情報を確認することに同意し、これを承認します。アカウント認証情報の機密保持および不正利用によるリスクは、お客様ご自身が負うものとします。"],
    ["本サービスの有料部分に登録することにより、お客様は選択したサブスクリプションまたはサービスレベルに対応する料金を支払うことに同意します。追加料金には、お客様が行う購入、アップグレード、税金、決済処理手数料、購入時に開示されたその他の料金が含まれる場合があります。別段の定めがない限り、サブスクリプションは自動更新され、試用期間終了後には有料プランへ自動移行する場合があります。当社は、料金および請求方法を随時変更する権利を留保します。"],
    ["お客様は、アカウントポータル、サブスクリプション設定、アプリストア管理画面、または提供されるその他の解約方法を通じて、アカウントまたはサブスクリプションを解約することができます。法令により要求される場合を除き、部分的に利用された購読期間についての返金は通常行われません。また、お客様が本契約に違反した場合、当社は事前通知なく直ちに本サービスへのアクセスを制限、停止または終了することができます。"],
    ["お客様は、本サービスを用いて、違法、名誉毀損的、わいせつ、脅迫的、憎悪的、差別的、虐待的、詐欺的、プライバシーを侵害する、またはその他不適切な資料、あるいは他者の知的財産権その他の権利を侵害する資料をアップロード、配布、送信、公開、リンク設定または提供してはなりません。また、本サービス、アカウント、サーバー、ネットワークまたはセキュリティを妨害、スクレイピング、過負荷、侵害または回避しようとしてはなりません。"],
    ["本サービス（その設計、レイアウト、ブランド、ロゴ、ソフトウェア、コード、グラフィック、オリジナル文章、編集コンテンツおよび関連する知的財産を含みます）は、Creation Health、Astrology Today、LIFESPACE またはそのライセンサーに帰属し、著作権、商標その他の知的財産法によって保護されています。本契約で明示的に認められている場合を除き、お客様は本サービスまたはそのコンテンツを複製、再公開、配布、改変、リバースエンジニアリング、販売、ライセンス、賃貸、または商業目的その他無断で利用することはできません。"],
    ["本サービスは、登録ユーザーがコメント、レビュー、文章、画像、動画、アイデア、フィードバック、ウェルネス資料、占星術に関する所見その他のユーザー投稿コンテンツを投稿、送信、表示、アップロードまたは提供できる機能を提供する場合があります。お客様は当該コンテンツについて単独で責任を負い、それをサービス上またはサービスを通じて投稿することにより、Creation Health に対して、それをホスト、保存、複製、改変、公開、表示、配布し、サービスおよび関連プロモーションに関連して利用する世界的、非独占的、ロイヤリティフリーかつ再許諾可能なライセンスを付与します。"],
    ["お客様は、本サービスの利用およびアクセスが自己の単独の危険負担で行われることに明示的に同意します。本サービスは「現状有姿」かつ「提供可能な範囲」で提供されます。法令で認められる最大限の範囲において、当社は、商品性、特定目的適合性、権原、非侵害、継続性、安全性または正確性に関する明示または黙示の保証を含め、あらゆる表明および保証を否認します。"],
    ["法令で認められる最大限の範囲において、Creation Health、Astrology Today、LIFESPACE、およびその関連会社、運営者、協力者、ライセンサー、サービス提供者は、お客様の本サービスへのアクセス、利用または利用不能に起因または関連する間接損害、付随的損害、特別損害、結果的損害、懲罰的損害、または利益、収益、データ、信用、利用価値その他の無形損失について責任を負いません。当社の総責任は、通常、100米ドルまたは直前12か月間に当該請求の原因となった有料サービスについてお客様が支払った額のいずれか大きい方を超えません。"],
    ["お客様は、本契約違反、本サービスの不正使用、ユーザー生成コンテンツ、またはお客様のアカウント認証情報を使用する者による本サービス利用に起因または関連する一切の損失、責任、請求、損害、費用および支出（合理的な弁護士費用を含みます）について、Creation Health、Astrology Today、LIFESPACE およびその関連会社、役員、取締役、従業員、請負業者、ライセンサー、サービス提供者を防御し、補償し、免責することに同意します。"],
    ["本規約は、法の抵触原則を考慮することなく、Creation Health および Astrology Today の運営者に適用される法に準拠します。お客様が、別段の強行的な消費者保護を定める法域の消費者でない限り、本契約に起因または関連する紛争については、サービス運営者が指定する裁判所が専属的裁判管轄を有します。"],
    ["お客様は、本サービスを利用することにより、不快、わいせつ、不正確、物議を醸す、またはその他好ましくないと考えられるコンテンツに遭遇する可能性があることを理解します。お客様はそのリスクを自ら負担して本サービスを利用することに同意し、当社はお客様が不適切とみなすコンテンツについて責任を負いません。コンテンツの説明、ラベルまたは分類は便宜上提供されるものであり、その完全性または正確性を保証するものではありません。"],
    ["本サービスには、第三者が運営するウェブサイト、サービス、プラットフォームまたはリソースへのハイパーリンクや参照が含まれる場合があります。これらのリンクを利用すると、お客様は本サービスを離れ、ブラウザまたはデバイスが外部リソースにリダイレクトされることがあります。第三者サイトは独自の利用規約、プライバシー慣行、コンテンツ基準または請求方針を有する場合があり、当社はそれらの合法性、正確性、品質、真正性、可用性、コンテンツ、製品、サービスまたは慣行について責任を負いません。"],
    ["Creation Health はお客様のプライバシーを重視しており、サービス利用に関連するお客様の個人データの収集および利用について重要な情報を含むプライバシーポリシーに従って運営されています。本サービスを利用することにより、お客様は当該プライバシーポリシーを確認した、または確認する機会があったことを認めます。"],
    ["アカウント、サブスクリプション、購入または本サービスへのアクセスについて支援が必要な場合、お客様は Astrology Today、LIFESPACE または関連する Creation Health ページが提供するサポート手段を通じてカスタマーサポートに連絡できます。当社はカスタマーサポート提供のため第三者サービスを利用する場合があり、本契約に定める保証否認および責任制限はカスタマーサポートの利用にも適用されます。"],
    ["お客様は、当社の事前の書面による同意なく、本契約または本契約に基づく権利を譲渡または移転することはできません。当社は、企業再編、合併、買収、資産売却またはその他の事業取引に関連して、本契約を制限なく譲渡することができます。本契約のいずれかの条項が無効または執行不能と判断された場合でも、残りの条項は引き続き完全に効力を有します。"],
    ["当社は、自己の裁量により、いつでも通知または責任を負うことなく、本規約の一部を追加、削除、変更または修正する権利を留保します。変更を行う場合、更新版の規約を本ページに掲載し、その効力発生日を示します。お客様は定期的に本契約を確認し、追加、改訂または修正を把握する責任を負い、更新の効力発生日以降も本サービスを継続利用することにより、改訂後の規約に同意したものとみなされます。"],
  ],
  yue: [
    ["你只可以喺你有法律能力同 Creation Health 訂立具約束力合約，而且遵守本條款同所有適用法律嘅情況下使用本服務。你為 Astrology Today、LIFESPACE 或任何相關服務建立帳戶時，必須提供準確完整嘅資料。13 歲以下人士唔可以使用本服務；如果當地法律要求更高年齡先可以有效同意資料處理，咁你只有喺符合該要求或依法已取得有效家長同意時先可以使用。"],
    ["你同意喺註冊時提供真實、準確、最新同完整嘅資料，並喺資料變更時盡快更新。我哋亦可以喺合理必要範圍內核實你嘅註冊資料，以便你存取同使用本服務；維持帳戶憑證保密以及任何未經授權使用所帶來嘅風險，由你自行承擔。"],
    ["註冊本服務任何收費部分，即表示你同意支付你所選訂閱或服務級別嘅費用。額外收費可以包括你作出嘅購買、你要求嘅升級、稅項、付款處理費用以及購買時披露嘅其他費用。除非另有說明，訂閱一般會自動續期，試用期完結後亦可能自動轉為付費計劃；我哋保留隨時更改費用同計費方式嘅權利。"],
    ["你可以透過帳戶入口、訂閱設定、app store 控制項或其他提供嘅取消方式取消帳戶或訂閱。不過除非法律要求，部分已用期間一般唔會退款；如果你違反本協議，我哋可以即時而且毋須通知地限制、暫停或終止你對本服務嘅使用。"],
    ["你唔可以利用本服務上載、傳送、發佈、分發、連結或以其他方式提供任何違法、誹謗、猥褻、威脅、仇恨、歧視、欺詐、侵犯私隱或其他令人反感嘅內容，亦唔可以提供侵犯任何個人或實體知識產權或其他權利嘅材料；你亦唔可以試圖干擾、抓取、超載、破壞或繞過本服務、其帳戶、伺服器、網絡或安全機制。"],
    ["本服務以及其設計、版面、品牌、標誌、軟件、程式碼、圖像、原創文字、編整內容同相關知識產權，均屬 Creation Health、Astrology Today、LIFESPACE 或其授權人所有或獲授權使用，並受版權、商標及其他知識產權法律保障。除非本協議明確允許，否則你唔可以複製、再發佈、分發、修改、逆向工程、出售、授權、出租或以其他未經授權方式使用本服務或其內容。"],
    ["本服務可能提供功能，讓已註冊用戶張貼、提交、展示、上載或以其他方式提供內容，包括評論、評價、文章、圖片、影片、意見、回饋、健康材料、占星觀察或其他用戶提交內容。你對自己提交嘅內容負全部責任；當你喺服務上或透過服務發佈呢類內容，即表示你授予 Creation Health 一項全球、非獨家、免權利金並可再授權嘅許可，以便托管、儲存、複製、改編、發佈、展示、分發並結合服務及相關宣傳渠道使用該內容。"],
    ["你明確同意，使用同存取本服務嘅風險由你自己承擔。本服務係按「現狀」同「可提供」基礎提供，而喺法律容許嘅最大範圍內，我哋否認所有明示、暗示、法定或其他形式嘅陳述同保證，包括適銷性、特定用途適用性、權屬、非侵權、持續性、安全性或準確性方面嘅保證。"],
    ["喺法律容許嘅最大範圍內，Creation Health、Astrology Today、LIFESPACE 同佢哋各自嘅關聯方、營運者、合作方、授權人及服務供應商，對任何間接、附帶、特別、相應、懲罰性損害，或利潤、收入、數據、商譽、使用價值及其他無形損失概不負責；我哋嘅總責任通常唔會超過 100 美元或你喺導致索償嘅事件發生前 12 個月內就相關付費服務支付嘅金額（以較高者為準）。"],
    ["你同意就因你違反本協議、濫用本服務、你嘅用戶內容，或任何使用你帳戶憑證嘅人使用本服務而引致或相關嘅任何損失、責任、申索、損害、成本及開支（包括合理律師費），為 Creation Health、Astrology Today、LIFESPACE 同佢哋各自嘅關聯方、主管人員、董事、僱員、承包商、授權人及服務供應商作出抗辯、賠償並使其免受損害。"],
    ["本條款受適用於 Creation Health 同 Astrology Today 營運者嘅法律管轄，而唔考慮法律衝突原則。如果你唔係處於提供其他不可放棄本地消費者保障嘅司法管轄區之消費者，咁由本協議引起或相關嘅爭議將由服務營運者指定嘅法院專屬管轄。"],
    ["你明白，使用本服務時可能會遇到被視為令人反感、不雅、不準確、有爭議或其他不受歡迎嘅內容。你同意自行承擔呢個風險，而我哋唔會就任何你覺得令人反感嘅內容向你負責；內容描述、標籤或分類只係為咗方便提供，我哋唔保證其完整性或準確性。"],
    ["本服務可能包含指向第三方網站、服務、平台或資源嘅連結。如果你使用呢啲連結，你可能會離開本服務，而你嘅瀏覽器或裝置亦可能被重新導向至外部資源。該等第三方網站可能有自己嘅條款、私隱做法、內容標準或收費政策，我哋唔會對其合法性、準確性、質素、真確性、可用性、內容、產品、服務或做法負責。"],
    ["Creation Health 非常重視你嘅私隱，並按照其私隱政策運作。該政策載有關於你使用本服務時個人資料之收集同使用嘅重要資訊。當你使用本服務，即表示你確認自己已經查閱或曾有機會查閱我哋嘅私隱政策。"],
    ["如果你需要關於帳戶、訂閱、購買或存取本服務嘅協助，你可以透過 Astrology Today、LIFESPACE 或相關 Creation Health 頁面提供嘅支援方式聯絡客戶支援。我哋可能會使用第三方服務提供客戶支援，而本協議中有關保證免責同責任限制亦同樣適用於客戶支援服務。"],
    ["未經我哋事先書面同意，你唔可以轉讓本協議或本協議授予你嘅任何權利。我哋可以喺公司重組、合併、收購、資產出售或其他商業交易中，不受限制咁轉讓本協議；如果本協議任何條文被認定無效或不可執行，其餘條文仍然完全有效。本協議連同我哋嘅私隱政策及任何明確納入嘅其他政策，構成你同我哋之間就本服務嘅完整協議。"],
    ["我哋保留隨時按自行酌情增刪、更改或修訂本條款部分內容嘅權利，而毋須另行通知或向你承擔責任。如果我哋作出修改，會喺本頁發佈更新後嘅條款並標示生效日期。你有責任不時查閱本協議，而喺更新生效後繼續使用本服務，即表示你接受經修訂嘅條款。"],
  ],
  ko: [
    ["귀하는 Creation Health와 법적 구속력이 있는 계약을 체결할 수 있는 법적 능력이 있고, 본 약관 및 모든 관련 법률을 준수하는 경우에만 본 서비스를 이용할 수 있습니다. Astrology Today, LIFESPACE 또는 관련 서비스의 계정을 만들 때는 정확하고 완전한 정보를 제공해야 합니다. 13세 미만은 본 서비스를 이용할 수 없으며, 현지 법률이 데이터 처리에 대한 유효한 동의에 더 높은 연령 요건을 요구하는 경우에는 그 요건을 충족하거나 법이 허용하는 범위에서 유효한 부모 동의가 제공된 경우에만 이용할 수 있습니다."],
    ["귀하는 등록 절차에서 자신에 대한 진실하고 정확하며 최신의 완전한 정보를 제공하고, 변경이 생기면 신속히 이를 갱신하는 데 동의합니다. 또한 귀하는 본 서비스에 대한 접근과 이용을 위해 합리적으로 필요한 범위 내에서 당사가 귀하의 등록 정보를 확인하는 데 동의하고 이를 허용합니다. 계정 자격 증명의 기밀 유지와 무단 사용으로 인한 위험은 귀하가 직접 부담합니다."],
    ["본 서비스의 유료 부분에 등록함으로써 귀하는 선택한 구독 또는 서비스 수준에 대한 요금을 지불하는 데 동의합니다. 추가 요금에는 귀하가 수행한 구매, 요청한 업그레이드, 세금, 결제 처리 수수료 및 구매 시 공개된 기타 비용이 포함될 수 있습니다. 별도 명시가 없는 한 구독은 자동 갱신되며, 체험 기간 종료 후 유료 플랜으로 자동 전환될 수 있습니다. 당사는 수수료 및 청구 방식을 언제든지 변경할 권리를 보유합니다."],
    ["귀하는 계정 포털, 구독 설정, 앱스토어 제어 기능 또는 구매한 서비스에 대해 제공되는 기타 취소 방법을 통해 계정 또는 구독을 해지할 수 있습니다. 법률상 요구되는 경우를 제외하고 부분적으로 사용된 구독 기간에 대해서는 일반적으로 환불이 제공되지 않으며, 귀하가 본 계약을 위반하는 경우 당사는 사전 통지 없이 즉시 귀하의 서비스 접근을 제한, 중지 또는 종료할 수 있습니다."],
    ["귀하는 본 서비스를 사용하여 불법적, 명예훼손적, 외설적, 위협적, 혐오적, 차별적, 학대적, 사기적, 사생활을 침해하거나 기타 부적절한 자료 또는 타인의 지적 재산권이나 기타 권리를 침해하는 자료를 업로드, 배포, 전송, 게시, 링크하거나 기타 방식으로 제공해서는 안 됩니다. 또한 귀하는 본 서비스, 계정, 서버, 네트워크 또는 보안을 방해, 스크래핑, 과부하 또는 우회하려고 시도해서는 안 됩니다."],
    ["본 서비스의 디자인, 레이아웃, 브랜드, 로고, 소프트웨어, 코드, 그래픽, 원본 작성물, 편집된 콘텐츠 및 관련 지적 재산은 Creation Health, Astrology Today, LIFESPACE 또는 그 라이선스 제공자의 소유이거나 그들로부터 라이선스를 받은 것으로, 저작권, 상표 및 기타 지적 재산 법률의 보호를 받습니다. 본 계약에서 명시적으로 허용하지 않는 한, 귀하는 본 서비스 또는 그 콘텐츠를 복제, 재게시, 배포, 수정, 역분석, 판매, 라이선스, 임대 또는 기타 무단 또는 상업적 목적으로 이용할 수 없습니다."],
    ["본 서비스는 등록된 사용자가 댓글, 리뷰, 글, 이미지, 영상, 아이디어, 피드백, 웰니스 자료, 점성술 관찰 또는 기타 사용자 제출 콘텐츠를 게시, 제출, 표시, 업로드 또는 기타 방식으로 제공할 수 있는 기능을 제공할 수 있습니다. 귀하는 자신이 제출하는 콘텐츠에 대해 전적으로 책임을 지며, 해당 콘텐츠를 본 서비스상에 게시함으로써 Creation Health에 이를 호스팅, 저장, 복제, 수정, 게시, 표시, 배포하고 본 서비스 및 관련 홍보 채널과 관련하여 사용할 수 있는 전 세계적이고 비독점적이며 로열티 없는 재허가 가능한 라이선스를 부여합니다."],
    ["귀하는 본 서비스의 이용과 접근이 전적으로 귀하의 책임과 위험 하에 이루어진다는 데 명시적으로 동의합니다. 본 서비스는 '있는 그대로' 그리고 '이용 가능한 상태로' 제공되며, 법이 허용하는 최대한의 범위 내에서 당사는 상품성, 특정 목적 적합성, 권원, 비침해, 연속성, 보안성 또는 정확성에 관한 모든 명시적·묵시적 보증을 부인합니다."],
    ["법이 허용하는 최대한의 범위 내에서 Creation Health, Astrology Today, LIFESPACE 및 그 계열사, 운영자, 협력자, 라이선스 제공자 및 서비스 제공자는 귀하의 서비스 접근, 이용 또는 이용 불가로 인해 발생하거나 이와 관련된 간접적, 부수적, 특별, 결과적 또는 징벌적 손해, 또는 이익, 수익, 데이터, 영업권, 사용가치 및 기타 무형 손실에 대해 책임을 지지 않습니다. 당사의 총 책임은 일반적으로 100 미국 달러 또는 청구의 원인이 된 유료 서비스에 대해 직전 12개월 동안 귀하가 지불한 금액 중 더 큰 금액을 초과하지 않습니다."],
    ["귀하는 본 계약 위반, 본 서비스의 오용, 귀하의 사용자 생성 콘텐츠 또는 귀하의 계정 자격 증명을 이용한 자의 서비스 이용으로 인해 발생하거나 관련된 모든 손실, 책임, 청구, 손해, 비용 및 지출(합리적인 변호사 수임료 포함)으로부터 Creation Health, Astrology Today, LIFESPACE 및 그 계열사, 임원, 이사, 직원, 계약자, 라이선스 제공자 및 서비스 제공자를 방어하고 면책하며 손해가 없도록 하는 데 동의합니다."],
    ["본 약관은 법률 충돌 원칙에 관계없이 Creation Health와 Astrology Today 운영자에게 적용되는 법률에 따라 규율됩니다. 귀하가 달리 강행적인 소비자 보호를 제공하는 관할 지역의 소비자가 아닌 한, 본 계약과 관련하여 발생하는 분쟁에 대한 전속 관할은 서비스 운영자가 지정한 법원이 됩니다."],
    ["귀하는 본 서비스를 이용함으로써 불쾌하거나, 부적절하거나, 부정확하거나, 논란의 여지가 있거나 기타 불쾌하다고 여겨질 수 있는 콘텐츠를 접할 수 있음을 이해합니다. 귀하는 이 위험을 스스로 부담하고 서비스를 이용하는 데 동의하며, 귀하가 불쾌하다고 판단할 수 있는 콘텐츠에 대해 당사는 책임을 지지 않습니다. 콘텐츠 설명, 라벨 또는 분류는 편의를 위해 제공되는 것일 뿐 그 완전성이나 정확성을 보장하지 않습니다."],
    ["본 서비스에는 제3자가 운영하는 웹사이트, 서비스, 플랫폼 또는 리소스로 연결되는 링크나 참조가 포함될 수 있습니다. 이러한 링크를 사용하면 귀하는 본 서비스를 벗어나 외부 리소스로 이동할 수 있습니다. 해당 제3자 사이트는 자체 약관, 개인정보 처리 관행, 콘텐츠 기준 또는 청구 정책을 가질 수 있으며, 당사는 그 적법성, 정확성, 품질, 진정성, 가용성, 콘텐츠, 제품, 서비스 또는 관행에 대해 책임을 지지 않습니다."],
    ["Creation Health는 귀하의 개인정보를 중요하게 여기며, 서비스 이용과 관련된 개인 데이터의 수집 및 사용에 대한 중요한 정보가 포함된 개인정보 처리방침에 따라 운영됩니다. 본 서비스를 이용함으로써 귀하는 해당 방침을 검토했거나 검토할 기회를 가졌음을 인정합니다."],
    ["계정, 구독, 구매 또는 본 서비스 접근과 관련한 도움이 필요한 경우, 귀하는 Astrology Today, LIFESPACE 또는 관련 Creation Health 페이지에서 제공하는 지원 수단을 통해 고객 지원에 연락할 수 있습니다. 당사는 고객 지원 제공을 위해 제3자 서비스를 이용할 수 있으며, 본 계약의 보증 부인 및 책임 제한은 고객 지원 서비스 이용에도 동일하게 적용됩니다."],
    ["귀하는 당사의 사전 서면 동의 없이 본 계약 또는 이에 따라 부여된 권리를 양도하거나 이전할 수 없습니다. 당사는 기업 구조조정, 합병, 인수, 자산 매각 또는 기타 사업 거래와 관련하여 본 계약을 제한 없이 양도할 수 있으며, 본 계약의 어느 조항이 무효 또는 집행 불가로 판단되더라도 나머지 조항은 계속 완전한 효력을 유지합니다."],
    ["당사는 사전 통지나 귀하에 대한 책임 없이 언제든지 독자적 재량으로 본 약관의 일부를 추가, 삭제, 변경 또는 수정할 권리를 보유합니다. 변경이 있는 경우 당사는 효력 발생일과 함께 업데이트된 약관을 이 페이지에 게시합니다. 귀하는 본 계약을 수시로 검토할 책임이 있으며, 업데이트 효력 발생 후에도 본 서비스를 계속 이용하는 것은 수정된 약관에 대한 귀하의 수락으로 간주됩니다."],
  ],
  sa: [
    ["सेवा केवल तदा एव उपयुज्यते यदा भवान् अथवा भवती Creation Health इत्यनेन सह बन्धनकारीं विधिसम्मतां संधिं कर्तुं समर्थः स्यात्, अस्याः शर्तीनां तथा सर्वेषां प्रवर्त्यमानानां विधानानां पालनं कुर्यात्, तथा Astrology Today, LIFESPACE अथवा सम्बद्धसेवाभ्यः यथार्थं पूर्णं च विवरणं दद्यात्। त्रयोदशवर्षात् न्यूनवयस्कानां सेवा-प्रयोगः न अनुमन्यते, अधिकवयः-अनिवार्यत्वे वा वैध-पितृमातृ-सम्मतौ च तदेव अपेक्षितम्।"],
    ["पञ्जीकरणकाले स्वसम्बद्धं सत्यं, यथार्थं, नवीनं, पूर्णं च विवरणं दातुं, परिवर्तनसमये तत् शीघ्रं संशोधितुं, तथा सेवायाः प्रवेश-प्रयोगयोः आवश्यकपरिमाणे पञ्जीकरण-दत्तांश-परिशीलनाय अस्मान् अनुमन्तुं भवान् सहमतः भवति। खातेय-प्रमाणपत्र-गोपनीयतायाः तथा अनधिकृत-उपयोग-सम्बद्ध-जोखिमस्य मुख्यो भारः भवतः एव।"],
    ["सेवायाः मूल्ययुक्तभागे नामाङ्कनं कृत्वा भवान् चयनित- सदस्यता-स्तरस्य शुल्कं, क्रयसमये निर्दिष्टान्यधिकभारान्, करान्, भुगतान-प्रक्रिया-व्ययांश्च दातुं सहमतः भवति। सदस्यताः सामान्यतया स्वतः नवीक्रियन्ते, परीक्षण-कालात् अनन्तरं मूल्ययोजनायां परिवर्तितुं शक्नुवन्ति, वयं च शुल्क-भुगतान-विधी समये समये परिवर्तयितुं अधिकारं धारयामः।"],
    ["खातं वा सदस्यतां उपलब्ध-निरसन-मार्गैः निरस्तुं शक्यते; किन्तु आंशिक-उपयुक्त-कालस्य प्रतिदानं सामान्यतया न दीयते। यदि भवान् अस्य समझौताय उल्लङ्घनं करोति तर्हि वयं पूर्वसूचनां विना त्वरितं प्रवेशं सीमितुं, निलम्बयितुं वा समाप्तुं शक्नुमः।"],
    ["अस्मिन् सेवायां अवैधं, निन्दात्मकं, अश्लीलं, भयप्रदं, द्वेषोत्पादकं, भेदकारी, कपटपूर्णं, गोपनीयताभङ्गकारि वा अधिकार-उल्लङ्घनकारि सामग्रीं दातुं न शक्यते। सेवा, सर्वर, जालकं, सुरक्षा-व्यवस्था वा विघ्नितुं, अधिकभारं दातुं, अनधिकृत-रूपेण प्रवेशं कर्तुं वा प्रयत्नः अपि निषिद्धः।"],
    ["सेवायाः विन्यासः, रूपरेखा, नामचिह्नानि, सॉफ्टवेयर, कोडः, दृश्यसामग्री, मूल-लेखनं तथा सङ्कलित-वस्तु Creation Health, Astrology Today, LIFESPACE अथवा तेषां अनुज्ञादातृभ्यः स्वाम्येन वा अनुज्ञया धार्यते, तथा बौद्धिकसम्पत्ति-विधिभिः संरक्ष्यते। स्पष्टानुज्ञां विना तस्य प्रतिलिपिः, पुनर्प्रकाशनम्, वितरणम्, विक्रयः, अनुज्ञापनम् वा अनधिकृत-व्यावसायिक-प्रयोगो न अनुमन्यते।"],
    ["सेवा पञ्जीकृत-उपयोक्तॄणां टिप्पणयः, समीक्षाः, लेखनानि, चित्राणि, दृश्यसञ्चिकाः, विचाराः, प्रतिपुष्टिः, स्वास्थ्य-सामग्री, ज्योतिष-अवलोकनानि वा अन्यत् उपयोक्तृ-निर्मितं द्रव्यं प्रदर्शयितुं वा प्रेषयितुं सामर्थ्यं दद्यात्। तस्य द्रव्यस्य दायित्वं पूर्णतया उपयोक्तुः एव; तद् प्रकाशयन् भवान् Creation Health इत्यस्मै तस्य धारण, संग्रहण, प्रतिरूपण, संशोधन, प्रकाशन, प्रदर्शन, वितरण तथा प्रचारोपयोगाय विश्वव्यापिनीं, अविशिष्टां, निःशुल्कां, उपअनुज्ञेयां अनुमतिं ददाति।"],
    ["भवान् स्पष्टतया स्वीकुरुते यत् सेवायाः उपयोगः स्वीय-जोखिमेन एव क्रियते। सेवा 'यथास्थित्या' तथा 'यथालभ्यमाना' दीयते, तथा विधिसम्मत-परम-परिमाणे वयं विक्रेयता, विशेष-प्रयोजन-योग्यता, स्वामित्वम्, अनुल्लङ्घनम्, निरन्तर-उपलब्धता, सुरक्षा, शुद्धता इत्यादि सर्वान् प्रतिज्ञान् निराकुर्मः।"],
    ["विधिना अनुमते परमपरिमाणे Creation Health, Astrology Today, LIFESPACE तथा तेषां सहयोगिनः, सञ्चालकाः, अनुज्ञादातारः, सेवाप्रदातारश्च अप्रत्यक्ष, उपपन्न, विशेष, परिणामरूप, दण्डात्मक अथवा लाभ-हानि, दत्तांश-हानि, उपयोग-हानि, कीर्ति-हानि इत्यादिषु न उत्तरदायिनः स्युः। अस्माकं समष्टि-दायित्वं सामान्यतया 100 अमेरिकीडालरपर्यन्तं वा कारणभूत-शुल्कसेवायां पूर्वद्वादशमासेषु दत्त-राशिपर्यन्तं भवति।"],
    ["भवान् अस्य करारस्य उल्लङ्घनात्, सेवायाः दुरुपयोगात्, स्वीय-उपयोक्तृ-सामग्रीतः अथवा स्व-खात-प्रमाणपत्रैः कस्यचित् उपयोगेन जातानां दावानां, हानिनां, व्ययानां च विषये Creation Health, Astrology Today, LIFESPACE तथा तेषां सम्बन्धिनः अधिकारीनः, कर्मचारिणः, अनुज्ञादातारः, सेवाप्रदातारश्च रक्षितुं, प्रतिपूरयितुं, निर्दोषीकर्तुं च सहमतः भवति।"],
    ["एते नियमाः Creation Health तथा Astrology Today सञ्चालकस्य उपरि प्रवर्त्यमान-विधिभिः नियन्त्र्यन्ते। यदि भवान् स्थानीय-अनपरित्याज्य-उपभोक्ता-अधिकारयुक्त-क्षेत्रस्य उपभोक्ता न स्यात्, तर्हि विवादानां विषये सेवासञ्चालक-नामनिर्दिष्ट-न्यायालयः एव अधिकारक्षेत्रं भवति।"],
    ["सेवायाः उपयोगेन भवान् कदाचित् आपत्तिजनकां, अशोभनाम्, अशुद्धां, विवादस्पदां वा सामग्रीं द्रष्टुं शक्नोति। तस्य जोखिमं स्वयमेव वहन् सेवा उपयुज्यते, तथा सामग्री-वर्णन-श्रेणीकरणयोः पूर्णता-शुद्धता च वयं न प्रत्यजानिमः।"],
    ["सेवायां तृतीयपक्षीय-जालस्थानानां, सेवाः, मंचानां वा संसाधनानां संयोजनानि सन्ति। तेषां स्वकीय-शर्तयः, गोपनीयता-प्रथाः, सामग्री-मानकानि, शुल्क-नीतयश्च भवन्ति, तथा तेषां वैधता, उपलब्धता, गुणवत्ता, व्यवहारः वा विषये वयं न उत्तरदायिनः।"],
    ["Creation Health गोपनीयतां गम्भीरतया गृह्णाति तथा स्वीय-गोपनीयता-नीत्यनुसारं कार्यं करोति, यस्यां सेवोपयोगे सम्बन्धिनः व्यक्तिगत-दत्तांश-संग्रह-उपयोगयोः महत्त्वपूर्णा सूचना वर्तते। सेवायाः उपयोगेन भवान् तां नीतिं अवलोकितवान् अथवा अवलोकन-अवसरं प्राप्तवान् इति स्वीकुरुते।"],
    ["यदि खाते, सदस्यता, क्रयः वा सेवा-प्रवेशः विषये सहाय्यं अपेक्षते, तर्हि Astrology Today, LIFESPACE अथवा Creation Health-पृष्ठेषु निर्दिष्ट-समर्थन-मार्गैः ग्राहक-सहायतां सम्पर्कितुं शक्यते। ग्राहक-सहायता-सेवायामपि अस्य करारस्य आश्वासन-निराकरणानि दायित्व-सीमाश्च समानरूपेण प्रवर्तन्ते।"],
    ["पूर्वलिखित-अनुमतिं विना भवान् अस्य करारस्य अधिकारान् स्थानान्तरयितुं न अर्हति। वयं तु संस्थागत-पुनर्संरचना, विलयन, अधिग्रहण, सम्पत्ति-विक्रयः वा अन्य-व्यापार-लेनदेन-सन्दर्भे निरोधं विना अस्य करारस्य स्थानान्तरणं कर्तुं शक्नुमः। यदि काचित् धारा अवैध-प्रवर्तनीय-विहीना स्यात्, अन्याः धाराः पूर्णतया प्रभावे स्थास्यन्ति।"],
    ["वयं कदाचन स्वेच्छया एतानि नियमांशः योजयितुं, अपाकर्तुं, परिवर्तयितुं, संशोधितुं च अधिकारं धारयामः। अद्यतन-रूपं अस्मिन् पृष्ठे प्रभाव-दिनाङ्केन सह प्रकाशितं भविष्यति। सेवायाः निरन्तर-उपयोगः संशोधित-नियम-स्वीकाररूपेण गणितः भविष्यति।"],
  ],
  it: [
    [
      "Puoi utilizzare il Servizio solo se hai la capacità legale di concludere un contratto vincolante con Creation Health, e solo nel rispetto dei presenti Termini e di tutte le leggi applicabili. Quando crei un account per Astrology Today, LIFESPACE o qualsiasi servizio correlato, devi fornire informazioni accurate e complete. L'uso del Servizio da parte di chiunque abbia meno di 13 anni non è consentito e, laddove la legge locale richieda un'età più elevata per un valido consenso al trattamento dei dati, puoi utilizzare il Servizio solo se soddisfi tale requisito o se è stato fornito un valido consenso genitoriale ove consentito dalla legge.",
      "Fatte salve le limitazioni descritte nel presente Accordo, ti viene concesso un diritto limitato di accesso a testi, file, immagini, video, audio, software, strumenti digitali, materiali scritti, contenuti di benessere, contenuti astrologici e altri materiali resi disponibili tramite il Servizio. Per utilizzare il Servizio, devi ottenere l'accesso a Internet e pagare eventuali costi associati a tale accesso, oltre a procurarti l'attrezzatura necessaria per connetterti e utilizzare il Servizio.",
    ],
    [
      "Accetti di fornire informazioni vere, accurate, aggiornate e complete su di te come richiesto dal processo di registrazione, e di aggiornare tempestivamente tali informazioni quando cambiano. Consenti inoltre e autorizzi noi a verificare i tuoi dati di registrazione nella misura ragionevolmente necessaria per il tuo accesso e utilizzo del Servizio.",
      "Sei l'unico responsabile della riservatezza delle credenziali del tuo account e di eventuali addebiti, danni, responsabilità o perdite derivanti dal mancato rispetto di tale obbligo. Accetti di non consentire a nessun'altra persona di utilizzare le credenziali del tuo account e di informarci immediatamente di qualsiasi uso non autorizzato del tuo account o di qualsiasi altra violazione della sicurezza di cui tu venga a conoscenza.",
    ],
    [
      "Registrandoti a qualsiasi parte a pagamento del Servizio, accetti di pagare le tariffe previste per l'abbonamento o il livello di servizio che selezioni. I costi aggiuntivi possono includere acquisti effettuati da te, aggiornamenti di servizio da te richiesti, imposte, commissioni di elaborazione dei pagamenti ove applicabili, o altri addebiti comunicati al momento dell'acquisto.",
      "Salvo diversa indicazione, gli abbonamenti si rinnovano automaticamente alla tariffa applicabile fino a quando non vengano annullati da te o terminati da noi. I piani mensili, trimestrali, semestrali, annuali o altri piani ricorrenti possono rinnovarsi alla fine di ciascun periodo di abbonamento, e sei responsabile della gestione della cancellazione prima della data di rinnovo applicabile se non desideri che il Servizio continui. Tutti i costi e gli addebiti non sono rimborsabili salvo ove richiesto dalla legge o espressamente indicato per iscritto da noi.",
      "Se ti registri per un periodo di prova, potrebbe esserti richiesto di fornire un metodo di pagamento al momento dell'iscrizione. Salvo annullamento prima della fine del periodo di prova, il tuo abbonamento potrà convertirsi automaticamente in un piano a pagamento alla tariffa e con il ciclo di fatturazione presentati in fase di iscrizione. Il pagamento deve essere effettuato tramite un metodo di pagamento da noi accettato o dal relativo gestore della piattaforma, e il tuo accordo con l'emittente della carta, Apple, Google o qualsiasi altro fornitore di pagamento regola l'uso di tale metodo di pagamento.",
      "Ci riserviamo il diritto di modificare in qualsiasi momento le nostre tariffe e modalità di fatturazione, anche aggiungendo costi supplementari o separati per contenuti, prodotti, servizi, abbonamenti o funzionalità resi disponibili tramite Creation Health, Astrology Today o LIFESPACE. Il tuo uso continuato del Servizio dopo la data di entrata in vigore di una modifica delle tariffe costituisce accettazione di tale modifica.",
    ],
    [
      "Puoi annullare il tuo account o il tuo abbonamento tramite il portale account, le impostazioni dell'abbonamento, i controlli dell'app store o qualsiasi altro metodo di cancellazione reso disponibile per il Servizio acquistato. Se annulli l'abbonamento, l'accesso alle funzionalità a pagamento può continuare solo fino alla fine del periodo di abbonamento già pagato, salvo diversa disposizione di legge o espressa indicazione da parte nostra.",
      "Salvo ove richiesto dalla legge, non forniamo rimborsi per periodi di abbonamento parzialmente utilizzati, e la cancellazione costituisce il tuo unico diritto ed esclusivo rimedio se sei insoddisfatto del Servizio. Possiamo limitare, sospendere o terminare immediatamente e senza preavviso il tuo accesso al Servizio se violi, infrangi o non rispetti il presente Accordo.",
    ],
    [
      "Non puoi utilizzare il Servizio per caricare, distribuire, trasmettere, comunicare, pubblicare, collegare o altrimenti rendere disponibile qualsiasi materiale illecito, diffamatorio, osceno, minaccioso, odioso, discriminatorio, abusivo, fraudolento, invasivo della privacy o altrimenti discutibile, oppure che violi diritti di proprietà intellettuale o altri diritti di qualsiasi persona o entità.",
      "Non puoi tentare di interrompere, compromettere, decodificare, estrarre dati, interferire con, sovraccaricare o altrimenti compromettere il Servizio o qualsiasi account, host, server, processore, rete o sistema correlato. Ti è vietato violare o tentare di violare la sicurezza del Servizio, anche sondando vulnerabilità, eludendo l'autenticazione, trasmettendo codice dannoso o raccogliendo dati personali su altri senza adeguata autorizzazione.",
    ],
    [
      "Il Servizio, inclusi design, struttura, marchio, loghi, software, codice, elementi grafici, scritti originali, contenuti compilati e tutta la relativa proprietà intellettuale, è di proprietà di Creation Health, Astrology Today, LIFESPACE o dei relativi licenzianti, oppure è da questi concesso in licenza, ed è protetto dalle leggi su copyright, marchi e altri diritti di proprietà intellettuale.",
      "Salvo quanto espressamente consentito dal presente Accordo, non puoi copiare, riprodurre, ripubblicare, distribuire, mostrare, modificare, creare opere derivate, decompilare, effettuare reverse engineering, vendere, concedere in licenza, noleggiare, dare in leasing, sfruttare o altrimenti utilizzare qualsiasi parte del Servizio o dei suoi contenuti per fini commerciali o non autorizzati. Tutti i diritti non espressamente concessi nel presente Accordo sono riservati.",
      "Se ritieni che materiale disponibile sul Servizio violi il tuo copyright o altri diritti di proprietà intellettuale, puoi informarci tramite i metodi di contatto messi a disposizione da Creation Health, e potremo indagare e adottare le misure opportune.",
    ],
    [
      "Il Servizio può, ma non è obbligato a, offrire funzionalità che consentono agli utenti registrati di pubblicare, inviare, mostrare, caricare o altrimenti rendere disponibile contenuto, inclusi commenti, recensioni, scritti, immagini, video, idee, feedback, materiale legato al benessere, osservazioni astrologiche o altri contenuti inviati dagli utenti. Se utilizzi tali funzionalità, lo fai a tuo rischio e resti l'unico responsabile del contenuto che invii.",
      "Pubblicando contenuti generati dall'utente sul Servizio o tramite esso, concedi a Creation Health una licenza non esclusiva, mondiale, gratuita e sublicenziabile per utilizzare, ospitare, conservare, riprodurre, modificare, adattare, pubblicare, mostrare, distribuire e altrimenti rendere tali contenuti disponibili su o in connessione con il Servizio e i relativi canali promozionali. Ci riserviamo il diritto, ma non l'obbligo, di monitorare, modificare, rimuovere o rifiutare di pubblicare contenuti generati dagli utenti in qualsiasi momento e a nostra esclusiva discrezione.",
    ],
    [
      "Accetti espressamente che l'uso e l'accesso al Servizio avvengano a tuo esclusivo rischio. Il Servizio è fornito \"così com'è\" e \"come disponibile\". Nella misura massima consentita dalla legge, decliniamo ogni dichiarazione e garanzia, espressa, implicita, di legge o di altro tipo, incluse eventuali garanzie implicite di commerciabilità, idoneità per uno scopo particolare, titolarità, non violazione, o derivanti da prassi commerciali o usi del settore.",
      "Non garantiamo che materiali, contenuti, prodotti, servizi, abbonamenti, orientamenti sul benessere, contenuti astrologici o strumenti digitali disponibili tramite il Servizio siano accurati, completi, affidabili, tempestivi, sicuri, ininterrotti o privi di errori, virus o altri componenti dannosi. Alcune giurisdizioni non consentono l'esclusione di determinate garanzie, pertanto alcune delle esclusioni di cui sopra potrebbero non applicarsi a te.",
    ],
    [
      "Nella misura massima consentita dalla legge, Creation Health, Astrology Today, LIFESPACE e le rispettive affiliate, operatori, collaboratori, licenzianti e fornitori di servizi non saranno responsabili per danni indiretti, incidentali, speciali, consequenziali, esemplari o punitivi, né per perdita di profitti, ricavi, dati, avviamento, uso o altre perdite immateriali derivanti da o connesse al tuo accesso, utilizzo o impossibilità di utilizzare il Servizio.",
      "In nessun caso la nostra responsabilità complessiva per tutte le pretese relative al Servizio supererà cento dollari statunitensi (US $100,00) o l'importo da te pagato per il Servizio a pagamento specifico che ha dato origine alla pretesa nei dodici mesi precedenti l'evento che ha generato la responsabilità, se maggiore. Se sei un consumatore in una giurisdizione che non consente alcune limitazioni di responsabilità, alcune delle limitazioni sopra indicate potrebbero non applicarsi a te.",
    ],
    [
      "Accetti di difendere, manlevare e tenere indenni Creation Health, Astrology Today, LIFESPACE e le rispettive affiliate, dirigenti, amministratori, dipendenti, collaboratori, licenzianti e fornitori di servizi da e contro qualsiasi perdita, responsabilità, pretesa, danno, costo e spesa, incluse ragionevoli spese legali, derivanti da o connessi alla tua violazione del presente Accordo, al tuo uso improprio del Servizio, ai tuoi contenuti generati dall'utente o all'uso del Servizio da parte di qualsiasi persona che utilizzi le credenziali del tuo account.",
      "Ci riserviamo il diritto, a nostre spese e dandotene comunicazione, di assumere la difesa e il controllo esclusivi di qualsiasi questione altrimenti soggetta a indennizzo da parte tua.",
    ],
    [
      "I presenti Termini saranno regolati dalle leggi applicabili all'operatore di Creation Health e Astrology Today, senza riguardo ai principi di conflitto di leggi. Se non sei un consumatore in una giurisdizione che preveda diversamente, il foro esclusivo per le controversie derivanti da o connesse al presente Accordo sarà quello dei tribunali designati dall'operatore del Servizio.",
      "Se sei un consumatore in una giurisdizione che ti riconosce diritti locali inderogabili o tutele di foro, nulla nei presenti Termini è inteso a privarti di tali tutele.",
    ],
    [
      "Comprendi che, utilizzando il Servizio, potresti imbatterti in contenuti che possono essere considerati offensivi, indecenti, inaccurati, controversi o altrimenti discutibili. Accetti di utilizzare il Servizio a tuo esclusivo rischio, e noi non avremo alcuna responsabilità nei tuoi confronti per contenuti che tu possa ritenere discutibili.",
      "Descrizioni, etichette o classificazioni dei contenuti sono fornite esclusivamente per comodità e non ne garantiamo completezza o accuratezza.",
    ],
    [
      "Il Servizio può contenere collegamenti ipertestuali e rimandi a siti web, servizi, piattaforme o risorse gestiti da terze parti. Se utilizzi tali link, potresti lasciare il Servizio e il tuo browser o dispositivo potrebbe essere reindirizzato a risorse esterne.",
      "Tali siti di terzi possono avere propri termini, prassi sulla privacy, standard di contenuto o politiche di fatturazione. Non siamo responsabili della legalità, accuratezza, qualità, autenticità, disponibilità, contenuti, prodotti, servizi o pratiche di altri siti o servizi, e vi accedi a tuo esclusivo rischio.",
    ],
    [
      "Creation Health prende sul serio la tua privacy e opera secondo le politiche e i principi stabiliti nella propria Informativa sulla privacy, che contiene informazioni e dichiarazioni importanti relative alla raccolta e all'uso dei tuoi Dati personali in relazione all'utilizzo del Servizio.",
      "Utilizzando il Servizio, riconosci di aver esaminato o di aver avuto l'opportunità di esaminare la nostra Informativa sulla privacy.",
    ],
    [
      "Se hai bisogno di assistenza per il tuo account, abbonamento, acquisto o accesso al Servizio, puoi contattare il supporto clienti tramite i metodi di assistenza messi a disposizione da Astrology Today, LIFESPACE o dalle relative pagine di Creation Health. Potremmo utilizzare i servizi di terze parti per fornire assistenza clienti.",
      "Le esclusioni di garanzia e le limitazioni di responsabilità previste nel presente Accordo si applicano espressamente anche al tuo utilizzo dei servizi di assistenza clienti.",
    ],
    [
      "Non puoi cedere o trasferire il presente Accordo o i diritti concessi ai sensi dello stesso senza il nostro previo consenso scritto. Possiamo cedere il presente Accordo senza restrizioni nell'ambito di una riorganizzazione societaria, fusione, acquisizione, vendita di beni o altra operazione commerciale.",
      "Nessuna omissione o ritardo da parte nostra nell'applicare una disposizione del presente Accordo costituirà rinuncia a tale diritto o a qualsiasi altro diritto. Se una disposizione del presente Accordo viene ritenuta invalida o inapplicabile, le restanti disposizioni rimarranno pienamente efficaci. Il presente Accordo, insieme alla nostra Informativa sulla privacy e a qualsiasi altra regola o politica espressamente incorporata per riferimento, costituisce l'intero accordo tra te e noi in merito al Servizio.",
    ],
    [
      "Ci riserviamo il diritto di aggiungere, eliminare, cambiare o modificare parti di questi Termini a nostra esclusiva discrezione e in qualsiasi momento, senza preavviso né responsabilità nei tuoi confronti. Se lo faremo, pubblicheremo i Termini aggiornati su questa pagina e indicheremo la data di entrata in vigore.",
      "È tua responsabilità consultare periodicamente il presente Accordo per restare informato su eventuali aggiunte, revisioni o modifiche. Il tuo uso continuato del Servizio dopo l'entrata in vigore di qualsiasi aggiornamento costituirà accettazione dei Termini revisionati.",
    ],
  ],
  es: [
    [
      "Puede utilizar el Servicio únicamente si tiene capacidad legal para celebrar un contrato vinculante con Creation Health, y solo en cumplimiento de estos Términos y de toda la legislación aplicable. Cuando cree una cuenta para Astrology Today, LIFESPACE o cualquier servicio relacionado, debe proporcionar información exacta y completa. No se permite el uso del Servicio por parte de menores de 13 años y, cuando la ley local exija una edad mayor para un consentimiento válido al tratamiento de datos, solo podrá utilizar el Servicio si cumple ese requisito o si se ha proporcionado un consentimiento parental válido cuando la ley lo permita.",
      "Sujeto a las limitaciones descritas en este Acuerdo, se le concede un derecho limitado de acceso a textos, archivos, imágenes, video, audio, software, herramientas digitales, materiales escritos, contenido de bienestar, contenido astrológico y otros materiales puestos a disposición a través del Servicio. Para utilizar el Servicio, debe obtener acceso a Internet y pagar cualquier tarifa asociada a dicho acceso, así como proporcionar el equipo necesario para conectarse y utilizar el Servicio.",
    ],
    [
      "Usted acepta proporcionar información verdadera, exacta, actual, y completa sobre sí mismo según se le solicite durante el proceso de registro, y actualizar dicha información de manera oportuna cuando cambie. Asimismo, consiente y nos autoriza a verificar sus datos de registro cuando ello sea razonablemente necesario para su acceso y uso del Servicio.",
      "Usted es el único responsable de mantener la confidencialidad de las credenciales de su cuenta y de cualquier cargo, daño, responsabilidad o pérdida derivados de no hacerlo. Acepta no permitir que ninguna otra persona utilice las credenciales de su cuenta y notificarnos de inmediato sobre cualquier uso no autorizado de su cuenta o cualquier otra vulneración de seguridad que llegue a conocer.",
    ],
    [
      "Al registrarse en cualquier parte de pago del Servicio, usted acepta pagar las tarifas correspondientes a la suscripción o nivel de servicio que seleccione. Los cargos adicionales pueden incluir compras que realice, mejoras de servicio que solicite, impuestos, comisiones de procesamiento de pago cuando correspondan, u otros cargos revelados en el momento de la compra.",
      "Salvo que se indique lo contrario, las suscripciones se renuevan automáticamente a la tarifa aplicable hasta que usted las cancele o nosotros las terminemos. Los planes mensuales, trimestrales, semestrales, anuales u otros planes recurrentes pueden renovarse al final de cada período de suscripción, y usted es responsable de gestionar la cancelación antes de la fecha de renovación aplicable si no desea que el Servicio continúe. Todas las tarifas y cargos son no reembolsables salvo que la ley lo exija o que nosotros lo indiquemos expresamente por escrito.",
      "Si se registra para un período de prueba, es posible que se le solicite proporcionar un método de pago al registrarse. Salvo que cancele antes del final del período de prueba, su suscripción podrá convertirse automáticamente en un plan de pago con la tarifa y el ciclo de facturación presentados durante el registro. El pago debe realizarse a través de un método de pago aceptado por nosotros o por el operador de la plataforma correspondiente, y su acuerdo con el emisor de su tarjeta, Apple, Google o cualquier otro proveedor de pagos rige su uso de ese método de pago.",
      "Nos reservamos el derecho de cambiar nuestras tarifas y métodos de facturación en cualquier momento, incluso añadiendo cargos suplementarios o separados por contenido, productos, servicios, suscripciones o funciones puestas a disposición por Creation Health, Astrology Today o LIFESPACE. Su uso continuado del Servicio después de la fecha de entrada en vigor de un cambio de tarifas constituye su aceptación de dicho cambio.",
    ],
    [
      "Puede cancelar su cuenta o suscripción a través del portal de cuenta, la configuración de suscripción, los controles de la tienda de aplicaciones o cualquier otro método de cancelación puesto a disposición para el Servicio que haya adquirido. Si cancela su suscripción, el acceso a las funciones de pago podrá continuar únicamente hasta el final del período de suscripción pagado, salvo que la ley disponga lo contrario o nosotros indiquemos expresamente otra cosa.",
      "Salvo cuando la ley lo exija, no ofrecemos reembolsos por períodos de suscripción parcialmente utilizados, y la cancelación constituye su único derecho y recurso exclusivo si no está satisfecho con el Servicio. Podemos restringir, suspender o terminar su acceso al Servicio de manera inmediata y sin previo aviso si usted viola, incumple o deja de cumplir este Acuerdo.",
    ],
    [
      "No puede utilizar el Servicio para cargar, distribuir, transmitir, comunicar, publicar, enlazar o de cualquier otra forma poner a disposición material ilegal, difamatorio, obsceno, amenazante, odioso, discriminatorio, abusivo, fraudulento, invasivo de la privacidad o de cualquier otra manera objetable, ni material que infrinja la propiedad intelectual u otros derechos de cualquier persona o entidad.",
      "No puede intentar interrumpir, deteriorar, descompilar, extraer datos, interferir con, sobrecargar o comprometer de otro modo el Servicio o cualquier cuenta, host, servidor, procesador, red o sistema relacionado. Se le prohíbe violar o intentar violar la seguridad del Servicio, incluso sondeando vulnerabilidades, eludiendo la autenticación, transmitiendo código malicioso o recopilando información personal de otros sin la debida autorización.",
    ],
    [
      "El Servicio, incluido su diseño, estructura, marca, logotipos, software, código, gráficos, escritos originales, contenido compilado y toda la propiedad intelectual relacionada, es propiedad de Creation Health, Astrology Today, LIFESPACE o de sus licenciantes, o está licenciado a estos, y está protegido por las leyes de derechos de autor, marcas y demás leyes de propiedad intelectual.",
      "Salvo que este Acuerdo lo permita expresamente, no puede copiar, reproducir, republicar, distribuir, mostrar, modificar, crear obras derivadas, descompilar, realizar ingeniería inversa, vender, licenciar, alquilar, arrendar, explotar o utilizar de otro modo cualquier parte del Servicio o su contenido con fines comerciales o no autorizados. Nos reservamos todos los derechos no otorgados expresamente en este Acuerdo.",
      "Si cree que algún material disponible en el Servicio infringe sus derechos de autor u otros derechos de propiedad intelectual, puede notificárnoslo utilizando los medios de contacto puestos a disposición por Creation Health, y podremos investigar y tomar las medidas que correspondan.",
    ],
    [
      "El Servicio puede, aunque no está obligado a ello, ofrecer funciones que permitan a los usuarios registrados publicar, enviar, mostrar, cargar o poner a disposición contenido, incluidos comentarios, reseñas, escritos, imágenes, videos, ideas, opiniones, material de bienestar, observaciones astrológicas u otro contenido enviado por los usuarios. Si utiliza dichas funciones, lo hace bajo su propio riesgo y sigue siendo el único responsable del contenido que envía.",
      "Al publicar contenido generado por el usuario en el Servicio o a través de él, usted concede a Creation Health una licencia no exclusiva, mundial, libre de regalías y sublicenciable para usar, alojar, almacenar, reproducir, modificar, adaptar, publicar, mostrar, distribuir y poner de cualquier otro modo dicho contenido a disposición en o en relación con el Servicio y los canales promocionales relacionados. Nos reservamos el derecho, pero no la obligación, de supervisar, editar, eliminar o negarnos a publicar contenido generado por usuarios en cualquier momento y a nuestra entera discreción.",
    ],
    [
      "Usted acepta expresamente que el uso y el acceso al Servicio se realizan por su cuenta y riesgo. El Servicio se proporciona \"tal cual\" y \"según disponibilidad\". En la máxima medida permitida por la ley, rechazamos toda manifestación y garantía, expresa, implícita, legal o de cualquier otro tipo, incluidas cualesquiera garantías implícitas de comerciabilidad, idoneidad para un fin particular, titularidad, no infracción, o derivadas del curso de las relaciones o del uso del comercio.",
      "No garantizamos que ningún material, contenido, producto, servicio, suscripción, orientación de bienestar, contenido astrológico o herramienta digital disponible a través del Servicio sea exacto, completo, fiable, oportuno, seguro, ininterrumpido o libre de errores, virus u otros componentes dañinos. Algunas jurisdicciones no permiten la exclusión de determinadas garantías, por lo que algunas de las exclusiones anteriores podrían no aplicarse a usted.",
    ],
    [
      "En la máxima medida permitida por la ley, Creation Health, Astrology Today, LIFESPACE y sus respectivas filiales, operadores, colaboradores, licenciantes y proveedores de servicios no serán responsables de daños indirectos, incidentales, especiales, consecuentes, ejemplares o punitivos, ni de ninguna pérdida de beneficios, ingresos, datos, fondo de comercio, uso u otras pérdidas intangibles derivadas de o relacionadas con su acceso, uso o imposibilidad de utilizar el Servicio.",
      "En ningún caso nuestra responsabilidad total por todas las reclamaciones relacionadas con el Servicio excederá de cien dólares estadounidenses (US $100,00) o del importe que usted nos haya pagado por el Servicio de pago específico que dio lugar a la reclamación durante los doce meses anteriores al hecho que originó la responsabilidad, lo que sea mayor. Si usted es consumidor en una jurisdicción que no permite determinadas limitaciones de responsabilidad, algunas de las limitaciones anteriores podrían no aplicarse.",
    ],
    [
      "Usted acepta defender, indemnizar y mantener indemnes a Creation Health, Astrology Today, LIFESPACE y sus respectivas filiales, directivos, administradores, empleados, contratistas, licenciantes y proveedores de servicios frente a cualquier pérdida, responsabilidad, reclamación, daño, costo y gasto, incluidos honorarios razonables de abogados, que surjan de o estén relacionados con su incumplimiento de este Acuerdo, su uso indebido del Servicio, su contenido generado por el usuario o el uso del Servicio por cualquier persona que utilice las credenciales de su cuenta.",
      "Nos reservamos el derecho, a nuestro propio costo y previa notificación a usted, de asumir la defensa y el control exclusivos de cualquier asunto que de otro modo estuviera sujeto a indemnización por su parte.",
    ],
    [
      "Estos Términos se regirán por las leyes aplicables al operador de Creation Health y Astrology Today, sin tener en cuenta los principios sobre conflictos de leyes. Si usted no es consumidor en una jurisdicción que disponga lo contrario, el lugar exclusivo de jurisdicción para las controversias que surjan de o en relación con este Acuerdo serán los tribunales designados por el operador del Servicio.",
      "Si usted es consumidor en una jurisdicción que le otorgue derechos locales irrenunciables o protecciones de fuero, nada de lo dispuesto en estos Términos pretende privarle de dichas protecciones.",
    ],
    [
      "Usted entiende que, al utilizar el Servicio, puede encontrar contenido que pueda considerarse ofensivo, indecente, inexacto, controvertido o de cualquier otro modo objetable. Acepta utilizar el Servicio por su cuenta y riesgo, y no tendremos responsabilidad alguna frente a usted por contenidos que puedan resultarle objetables.",
      "Las descripciones, etiquetas o clasificaciones del contenido se proporcionan únicamente por conveniencia, y no garantizamos su integridad ni exactitud.",
    ],
    [
      "El Servicio puede contener hipervínculos y referencias a sitios web, servicios, plataformas o recursos gestionados por terceros. Si utiliza esos enlaces, puede abandonar el Servicio y su navegador o dispositivo puede ser redirigido a recursos externos.",
      "Dichos sitios de terceros pueden tener sus propios términos, prácticas de privacidad, estándares de contenido o políticas de facturación. No somos responsables de la legalidad, exactitud, calidad, autenticidad, disponibilidad, contenido, productos, servicios o prácticas de ningún otro sitio o servicio, y usted accede a ellos bajo su propio riesgo.",
    ],
    [
      "Creation Health se toma en serio su privacidad y opera conforme a las políticas y principios establecidos en su Política de privacidad, que contiene información y divulgaciones importantes relativas a la recopilación y uso de sus Datos personales en relación con su uso del Servicio.",
      "Al utilizar el Servicio, usted reconoce que ha revisado o ha tenido la oportunidad de revisar nuestra Política de privacidad.",
    ],
    [
      "Si necesita ayuda con su cuenta, suscripción, compra o acceso al Servicio, puede ponerse en contacto con el servicio de atención al cliente mediante los métodos de soporte puestos a disposición por Astrology Today, LIFESPACE o las páginas relacionadas de Creation Health. Podemos utilizar los servicios de terceros para prestar atención al cliente.",
      "Las exclusiones de garantías y limitaciones de responsabilidad establecidas en este Acuerdo se aplican expresamente también a su uso de los servicios de atención al cliente.",
    ],
    [
      "No puede ceder ni transferir este Acuerdo ni ninguno de los derechos otorgados en virtud del mismo sin nuestro previo consentimiento por escrito. Podemos ceder este Acuerdo sin restricción en relación con una reorganización corporativa, fusión, adquisición, venta de activos u otra transacción empresarial.",
      "Ninguna falta de ejercicio o retraso por nuestra parte en hacer cumplir cualquier disposición de este Acuerdo operará como renuncia a ese u otro derecho. Si alguna disposición de este Acuerdo se considera inválida o inaplicable, las disposiciones restantes seguirán en pleno vigor y efecto. Este Acuerdo, junto con nuestra Política de privacidad y cualquier otra norma o política incorporada expresamente por referencia, constituye el acuerdo completo entre usted y nosotros con respecto al Servicio.",
    ],
    [
      "Nos reservamos el derecho de añadir, eliminar, cambiar o modificar partes de estos Términos a nuestra entera discreción y en cualquier momento, sin previo aviso ni responsabilidad frente a usted. Si lo hacemos, publicaremos los Términos actualizados en esta página e indicaremos la fecha de entrada en vigor.",
      "Es su responsabilidad revisar periódicamente este Acuerdo para mantenerse al tanto de cualquier adición, revisión o modificación. Su uso continuado del Servicio después de la entrada en vigor de cualquier actualización constituirá su aceptación de los Términos revisados.",
    ],
  ],
};

const metadataCopy: Record<SupportedLocale, { title: string; description: string }> = {
  en: {
    title: "Terms of Service | Astrology Today",
    description:
      "Creation Health Terms of Service for Astrology Today, LIFESPACE, subscriptions, payments, and related services.",
  },
  fr: {
    title: "Conditions d'utilisation | Astrology Today",
    description:
      "Conditions d'utilisation de Creation Health pour Astrology Today, LIFESPACE, les abonnements, les paiements et les services associés.",
  },
  it: {
    title: "Termini di servizio | Astrology Today",
    description:
      "Termini di servizio di Creation Health per Astrology Today, LIFESPACE, abbonamenti, pagamenti e servizi correlati.",
  },
  es: {
    title: "Términos de servicio | Astrology Today",
    description:
      "Términos de servicio de Creation Health para Astrology Today, LIFESPACE, suscripciones, pagos y servicios relacionados.",
  },
  hi: {
    title: "सेवा की शर्तें | Astrology Today",
    description:
      "Astrology Today, LIFESPACE, सदस्यताओं, भुगतानों और संबंधित सेवाओं के लिए Creation Health की सेवा शर्तें।",
  },
  ur: {
    title: "شرائطِ خدمت | Astrology Today",
    description:
      "Astrology Today، LIFESPACE، سبسکرپشنز، ادائیگیوں اور متعلقہ خدمات کے لیے Creation Health کی شرائطِ خدمت۔",
  },
  sa: {
    title: "सेवा-नियमाः | Astrology Today",
    description:
      "Astrology Today, LIFESPACE, सदस्यता, भुगतान-व्यवस्था, सम्बद्ध-सेवाः च विषये Creation Health इत्यस्य सेवा-नियमाः।",
  },
  pa: {
    title: "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ | Astrology Today",
    description:
      "Astrology Today, LIFESPACE, ਸਬਸਕ੍ਰਿਪਸ਼ਨ, ਭੁਗਤਾਨ ਅਤੇ ਸੰਬੰਧਿਤ ਸੇਵਾਵਾਂ ਲਈ Creation Health ਦੀਆਂ ਸੇਵਾ ਸ਼ਰਤਾਂ।",
  },
  zh: {
    title: "服务条款 | Astrology Today",
    description:
      "适用于 Astrology Today、LIFESPACE、订阅、付款及相关服务的 Creation Health 服务条款。",
  },
  ja: {
    title: "利用規約 | Astrology Today",
    description:
      "Astrology Today、LIFESPACE、購読、支払い、関連サービスに関する Creation Health の利用規約。",
  },
  yue: {
    title: "服務條款 | Astrology Today",
    description:
      "適用於 Astrology Today、LIFESPACE、訂閱、付款同相關服務嘅 Creation Health 服務條款。",
  },
  ko: {
    title: "서비스 약관 | Astrology Today",
    description:
      "Astrology Today, LIFESPACE, 구독, 결제 및 관련 서비스에 적용되는 Creation Health의 서비스 약관.",
  },
};

const supportedLocales = Object.keys(metadataCopy) as SupportedLocale[];

const termsCopy = supportedLocales.reduce<Record<SupportedLocale, TermsOfServiceCopy>>(
  (acc, locale) => {
    const overrideTitles = sectionTitleOverrides[locale];
    const overrideBodies = sectionBodyOverrides[locale];
    const sections = englishSections.map((section, index) => ({
      ...section,
      title: overrideTitles?.[index] ?? section.title,
      body: overrideBodies?.[index] ?? section.body,
    }));

    acc[locale] = {
      metadataTitle: metadataCopy[locale].title,
      metadataDescription: metadataCopy[locale].description,
      sections,
    };
    return acc;
  },
  {} as Record<SupportedLocale, TermsOfServiceCopy>,
);

export function getTermsOfServiceCopy(locale: SupportedLocale): TermsOfServiceCopy {
  return termsCopy[locale] ?? termsCopy[defaultLocale];
}
