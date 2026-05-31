import { defaultLocale, type SupportedLocale } from "./i18n";

export type AboutPageCopy = {
  heroTitle: string;
  intro: string[];
  benefitsLead: string;
  benefits: string[];
  body: string[];
  cta: string;
};

const en: AboutPageCopy = {
  heroTitle: "What Is Astroanalysis?",
  intro: [
    "Astrology has been used for thousands of years as part of healing traditions to help people make sense of their bodies, their minds, and the deeper patterns of their lives. Astroanalysis is not a fortune-telling technique or a fixed lens of fate.",
    "An astrological consultation is a dialogue between two people in which fundamental truths are uncovered about a person's life, allowing them to move forward with greater clarity, direction, and self-understanding.",
  ],
  benefitsLead: "Some of these insights include:",
  benefits: [
    "Major strengths and weaknesses",
    "Emotional patterns",
    "Career insights",
    "Parenting guidance",
    "Love and sex style",
  ],
  body: [
    "As human beings, we each contain a unique set of energies. Learning more about those energies can help us better shape how we manifest them in the physical world to achieve our hopes and desires. Astrological therapy can help you identify what those energies are, how they affect you, and how they are currently playing a role in your career and relationships.",
    "The astrologers of Astrology Today are committed to the study of astrology, with a comprehensive understanding of each of the twelve signs, their planetary placements, their powers, and how they interact. Personal character must also be taken into account when making a summary analysis.",
    "Every astroanalysis begins with the Sun Sign, which represents the basic character. Normally, this is all that is given. The lost art of astroanalysis lies in being able to synthesize the results of each of the twelve signs as they are positioned among the planets, while also incorporating house placements.",
    "Put another way, it is obvious that if you know your basic character traits and potentialities, you will be in a much better position to **assert your talents, correct your shortcomings, exploit your natural possibilities, and bring greater harmony into your relationships with others,** in short, to live a richer and more meaningful life.",
    "Frequently, when doing astroanalysis, you will notice that an individual's character clashes with his or her personality. This can help you understand aggressive and contradictory behavior patterns that would otherwise be baffling. With this new insight, you will be able to **improve relationships between partners, co-workers, or friends,** generally reducing friction between those you live with or work around.",
    "Perhaps most importantly, **children can be encouraged along positive lines** by their parents and guided toward a future that provides full scope for their natural abilities and aptitudes. Sometimes a parent will have very harmonious astrology with two or more of their children, while another child becomes the black sheep of the family. However, this may be due to astrological differences rather than character flaws or behavioral issues.",
    "**Severe mental health challenges may also be better understood and prevented from worsening by understanding astrological influences.**",
    "It may help the skeptic to know that modern astrology does not suggest that the planets themselves rule our destinies. The planets are dynamic parts of the electromagnetic field in which we exist. Their constantly changing angular positions to the Earth and to each other are understood astrologically to correlate with distinct changes in human and cosmic affairs.",
  ],
  cta: "Get Your Astroanalysis",
};

const aboutCopy: Partial<Record<SupportedLocale, AboutPageCopy>> = {
  en,
  fr: {
    heroTitle: "Qu'est-ce que l'astroanalyse ?",
    intro: [
      "L'astrologie est utilisée depuis des milliers d'années dans les traditions de guérison pour aider les gens à donner sens à leur corps, à leur esprit et aux motifs plus profonds de leur vie. L'astroanalyse n'est ni une technique de divination ni une vision figée du destin.",
      "Une consultation astrologique est un dialogue entre deux personnes dans lequel des vérités fondamentales sur la vie d'une personne sont révélées, lui permettant d'avancer avec plus de clarté, de direction et de compréhension de soi.",
    ],
    benefitsLead: "Parmi ces éclairages, on trouve :",
    benefits: [
      "Forces et faiblesses majeures",
      "Schémas émotionnels",
      "Perspectives de carrière",
      "Conseils parentaux",
      "Style amoureux et sexuel",
    ],
    body: [
      "En tant qu'êtres humains, nous portons chacun un ensemble unique d'énergies. En apprendre davantage sur ces énergies peut nous aider à mieux façonner la manière dont nous les manifestons dans le monde physique afin de réaliser nos espoirs et nos désirs. La thérapie astrologique peut vous aider à identifier ces énergies, à comprendre comment elles vous affectent et le rôle qu'elles jouent actuellement dans votre carrière et vos relations.",
      "Les astrologues d'Astrology Today sont engagés dans l'étude de l'astrologie, avec une compréhension approfondie des douze signes, de leurs placements planétaires, de leurs forces et de leurs interactions. Le caractère personnel doit également être pris en compte lors de l'élaboration d'une analyse synthétique.",
      "Toute astroanalyse commence par le signe solaire, qui représente le caractère fondamental. Normalement, c'est tout ce qui est donné. L'art perdu de l'astroanalyse réside dans la capacité à synthétiser les résultats des douze signes selon leur position parmi les planètes, tout en intégrant les placements en maisons.",
      "Autrement dit, il est évident que si vous connaissez vos traits de caractère fondamentaux et vos potentialités, vous serez bien mieux placé pour **affirmer vos talents, corriger vos lacunes, exploiter vos possibilités naturelles et apporter plus d'harmonie dans vos relations avec les autres,** bref, pour vivre une vie plus riche et plus signifiante.",
      "Souvent, lors d'une astroanalyse, vous remarquerez que le caractère d'une personne entre en conflit avec sa personnalité. Cela peut vous aider à comprendre des schémas de comportement agressifs et contradictoires qui resteraient autrement déconcertants. Avec ce nouvel éclairage, vous pourrez **améliorer les relations entre partenaires, collègues ou amis,** en réduisant globalement les frictions avec ceux avec qui vous vivez ou travaillez.",
      "Plus important encore peut-être, **les enfants peuvent être encouragés dans des directions positives** par leurs parents et orientés vers un avenir qui offre tout l'espace nécessaire à leurs capacités et aptitudes naturelles.",
      "**Les défis sévères de santé mentale peuvent aussi être mieux compris et empêchés d'empirer grâce à une compréhension des influences astrologiques.**",
      "Il peut être utile au sceptique de savoir que l'astrologie moderne ne prétend pas que les planètes gouvernent elles-mêmes notre destinée. Les planètes sont des parties dynamiques du champ électromagnétique dans lequel nous existons.",
    ],
    cta: "Obtenir votre astroanalyse",
  },
  it: {
    heroTitle: "Che cos'è l'astroanalisi?",
    intro: [
      "L'astrologia è stata utilizzata per migliaia di anni come parte delle tradizioni di guarigione per aiutare le persone a dare senso al proprio corpo, alla propria mente e ai modelli più profondi della loro vita. L'astroanalisi non è una tecnica di divinazione né una lente fissa del destino.",
      "Una consulenza astrologica è un dialogo tra due persone in cui vengono portate alla luce verità fondamentali sulla vita di una persona, permettendole di andare avanti con maggiore chiarezza, direzione e comprensione di sé.",
    ],
    benefitsLead: "Alcuni di questi approfondimenti includono:",
    benefits: [
      "Punti di forza e debolezze principali",
      "Schemi emotivi",
      "Indicazioni di carriera",
      "Orientamento genitoriale",
      "Stile amoroso e sessuale",
    ],
    body: [
      "Come esseri umani, ognuno di noi contiene un insieme unico di energie. Imparare di più su queste energie può aiutarci a modellare meglio il modo in cui le manifestiamo nel mondo fisico per realizzare speranze e desideri. La terapia astrologica può aiutarti a identificare quali sono queste energie, come ti influenzano e quale ruolo stanno attualmente svolgendo nella tua carriera e nelle tue relazioni.",
      "Gli astrologi di Astrology Today sono impegnati nello studio dell'astrologia, con una comprensione completa di ciascuno dei dodici segni, dei loro posizionamenti planetari, dei loro poteri e di come interagiscono.",
      "Ogni astroanalisi inizia con il Segno Solare, che rappresenta il carattere di base. Normalmente è tutto ciò che viene fornito. L'arte perduta dell'astroanalisi sta nella capacità di sintetizzare i risultati dei dodici segni così come sono disposti tra i pianeti, incorporando anche le case astrologiche.",
      "Detto in altro modo, è evidente che se conosci i tuoi tratti caratteriali fondamentali e le tue potenzialità, sarai in una posizione molto migliore per **affermare i tuoi talenti, correggere le tue mancanze, sfruttare le tue possibilità naturali e portare maggiore armonia nelle tue relazioni con gli altri,** in breve, per vivere una vita più ricca e significativa.",
      "Spesso, quando si svolge un'astroanalisi, si nota che il carattere di una persona entra in conflitto con la sua personalità. Con questa nuova comprensione, sarai in grado di **migliorare i rapporti tra partner, colleghi o amici,** riducendo in generale l'attrito con coloro con cui vivi o lavori.",
      "Forse, cosa più importante, **i bambini possono essere incoraggiati lungo linee positive** dai loro genitori e guidati verso un futuro che offra pieno spazio alle loro capacità e attitudini naturali.",
      "**Anche le gravi difficoltà di salute mentale possono essere comprese meglio e impedite dal peggiorare attraverso la comprensione delle influenze astrologiche.**",
      "Può aiutare lo scettico sapere che l'astrologia moderna non suggerisce che siano i pianeti stessi a governare il nostro destino. I pianeti sono parti dinamiche del campo elettromagnetico in cui esistiamo.",
    ],
    cta: "Ottieni la tua astroanalisi",
  },
  es: {
    heroTitle: "¿Qué es el astroanálisis?",
    intro: [
      "La astrología se ha utilizado durante miles de años como parte de tradiciones de sanación para ayudar a las personas a dar sentido a sus cuerpos, sus mentes y los patrones más profundos de sus vidas. El astroanálisis no es una técnica de adivinación ni una visión fija del destino.",
      "Una consulta astrológica es un diálogo entre dos personas en el que se descubren verdades fundamentales sobre la vida de una persona, permitiéndole avanzar con mayor claridad, dirección y comprensión de sí misma.",
    ],
    benefitsLead: "Algunas de estas perspectivas incluyen:",
    benefits: [
      "Fortalezas y debilidades principales",
      "Patrones emocionales",
      "Perspectivas profesionales",
      "Orientación para la crianza",
      "Estilo amoroso y sexual",
    ],
    body: [
      "Como seres humanos, cada uno de nosotros contiene un conjunto único de energías. Aprender más sobre esas energías puede ayudarnos a moldear mejor la forma en que las manifestamos en el mundo físico para alcanzar nuestras esperanzas y deseos. La terapia astrológica puede ayudarte a identificar cuáles son esas energías, cómo te afectan y cómo están desempeñando actualmente un papel en tu carrera y tus relaciones.",
      "Los astrólogos de Astrology Today están comprometidos con el estudio de la astrología, con una comprensión integral de cada uno de los doce signos, sus posiciones planetarias, sus poderes y cómo interactúan.",
      "Todo astroanálisis comienza con el Signo Solar, que representa el carácter básico. El arte perdido del astroanálisis reside en ser capaz de sintetizar los resultados de cada uno de los doce signos tal como están posicionados entre los planetas, incorporando también las casas astrológicas.",
      "Dicho de otro modo, es evidente que si conoces tus rasgos básicos de carácter y tus potencialidades, estarás en una posición mucho mejor para **afirmar tus talentos, corregir tus carencias, explotar tus posibilidades naturales y aportar mayor armonía a tus relaciones con los demás,** en definitiva, para vivir una vida más rica y con más sentido.",
      "Con frecuencia, al hacer astroanálisis, notarás que el carácter de una persona choca con su personalidad. Con esta nueva comprensión, podrás **mejorar las relaciones entre parejas, compañeros de trabajo o amigos,** reduciendo en general la fricción con quienes vives o trabajas.",
      "Quizá lo más importante sea que **los niños pueden ser alentados por líneas positivas** por sus padres y guiados hacia un futuro que brinde pleno alcance a sus capacidades y aptitudes naturales.",
      "**Los desafíos severos de salud mental también pueden comprenderse mejor y evitar que empeoren al entender las influencias astrológicas.**",
      "Puede ayudar al escéptico saber que la astrología moderna no sugiere que los propios planetas gobiernen nuestro destino. Los planetas son partes dinámicas del campo electromagnético en el que existimos.",
    ],
    cta: "Obtén tu astroanálisis",
  },
};

export function getAboutCopy(locale: SupportedLocale): AboutPageCopy {
  return aboutCopy[locale] ?? aboutCopy[defaultLocale] ?? en;
}
