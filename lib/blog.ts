export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type BlogBodySection = {
  eyebrow?: string;
  heading?: string;
  subheading?: boolean;
  paragraphs?: string[];
  imageAfterParagraph?: number;
  quote?: string;
  quoteLead?: string;
  image?: BlogImage;
  imageLayout?: "center" | "rightWrap";
  images?: BlogImage[];
  items?: string[];
  separator?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  publishedLabel: string;
  publishedTime?: string;
  modifiedTime?: string;
  issueLabel: string;
  readTime: string;
  excerpt: string;
  keywords?: string[];
  section?: string;
  deck?: string;
  coverImage: string;
  coverImageAlt: string;
  coverImageCaption?: string;
  intro: string[];
  zodiacBodyMap: Array<{
    sign: string;
    body: string;
  }>;
  sections: BlogBodySection[];
  practices: string[];
  closing: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "history-of-medicinal-astrology",
    title: "The History of Medicinal Astrology",
    subtitle: "Why Hippocrates Might Not Have Approved of Modern Medicine",
    publishedLabel: "Apr 2026",
    publishedTime: "2026-04-01T00:00:00-04:00",
    modifiedTime: "2026-04-01T00:00:00-04:00",
    issueLabel: "Astrology Today Journal",
    readTime: "8 min read",
    excerpt:
      "Why Hippocrates might not have approved of modern medicine, and how older physicians once used the zodiac as part of diagnosis, timing, and holistic care.",
    keywords: [
      "medical astrology",
      "history of astrology",
      "Hippocrates astrology",
      "zodiac body correspondences",
      "holistic health astrology",
    ],
    section: "Astrology",
    coverImage: "/blog/history-of-medicinal-astrology/photo-1.webp",
    coverImageAlt:
      "Historic zodiac anatomy diagram showing the astrological ailments mapped across the body.",
    coverImageCaption: "A basic pictorial representation of the astrological ailments",
    intro: [
      "When a doctor in the United States finishes their medical degree, they typically have to take the Hippocratic Oath. This is an oath written by Hippocrates of Kos, the Father of Medicine.",
    ],
    zodiacBodyMap: [
      { sign: "Aries", body: "Head, teeth, tongue, striated muscles, penis, gall bladder, arteries, blood" },
      { sign: "Taurus", body: "Neck, larynx, throat, vocal cords, thyroid gland, tonsils, Adam's apple" },
      { sign: "Gemini", body: "Shoulders, arms, hands, respiratory system, bronchial tubes, lungs, nervous connections for sensor and motor skills, blood capillaries" },
      { sign: "Cancer", body: "Stomach, mucosa, ovary, womb, vagina, breast, pleura, peritoneum, lymph system, breastbone" },
      { sign: "Leo", body: "Heart, aorta, blood circulation, blood pressure, heart rate" },
      { sign: "Virgo", body: "Pancreas, small intestine, cecum, colon, digestive tract, duodenum, rectum, sense organs: eyes and ears" },
      { sign: "Libra", body: "Kidney, ureter, urinary bladder, veins, skin as an organ of touch, pancreas, insulin, glucagon" },
      { sign: "Scorpio", body: "Genitals, rectum, anus, urethra, genital glands, ovaries, prostate, pubic bone, genes" },
      { sign: "Sagittarius", body: "Liver, sacrum, thigh bone, tail bone, hip muscles, hip joint, lumbar vertebra, lumbar muscle" },
      { sign: "Capricorn", body: "Knees, joints, backbone, spinal muscles, patella, bones, tendons and ligaments, skin, hair, spleen, the organ of balance" },
      { sign: "Aquarius", body: "Calf, ankle, shin, Achilles, forearm muscles, thyroid hormones" },
      { sign: "Pisces", body: "Feet, toes, hypophysis, pineal gland, endorphin, melatonin" },
    ],
    sections: [
      {
        quoteLead: "One of the most famous quotes attributed to Hippocrates is this:",
        quote:
          "“A physician without a knowledge of astrology has no right to call himself a physician”",
      },
      {
        paragraphs: [
          "Modern medicine has evolved with society over the years, and many today would probably scoff at the idea of using astrology in a medical practice, but Hippocrates, commonly known as the Father of Medicine, took it very seriously.",
          "Hippocrates and his contemporaries were part of a scientific revolution and they actively avoided supernatural explanations for phenomena around them, looking for natural explanations instead. It was part of the traditional vernacular used to describe ancient medical concepts, and back then, the Ancients would have scoffed at [us] for [not] using it.",
          "Astrology was [not] something you performed as a hobby or simply out of curiosity. It required a very good grasp of mathematics, astronomy, and writing, among many other things. This was definitely not something you would have encountered among the general populace as we see today. Tragically, the vast majority of people who practice astrology today do so with only a rudimentary understanding of the practice, not fully understanding the signs, planetary placements, or the numerous interactions between the two.",
        ],
      },
      {
        heading: "The Solar Messiah",
        paragraphs: [
          "To the Ancients, the signs of the Zodiac correspond to what they called “The Grand Man.” This image of a man is still pictured in modern almanacs with each sign corresponding to a part of his body. The Zodiac was the forerunner of modern science, astronomy, and medicine. Before modern technology, doctors would study the natal charts of their patients to help diagnose illness.",
        ],
        image: {
          src: "/blog/history-of-medicinal-astrology/photo-2.webp",
          alt: "Historic medical astrology diagram showing a zodiac wheel beside a body mapped to the signs.",
        },
      },
      {
        paragraphs: [
          "Medical astrology is the branch of astrology that deals with the workings of the human body. In the event of illness or disease, a medical astrologer would use predictive methods to try to determine the severity and duration of the disease.",
          "All illness has a duration, and astrologers knew this. But today we see that people become very stressed when they discover they may have an illness. This in turn creates “Saturnian energy,” which includes elements such as fear or pressure that can exacerbate symptoms. When this happens, the afraid individual will rush to the doctor for pharmacological treatment, but by doing so, might introduce side effects and in some cases even prolong illness.",
          "Modern medicine excels at acute care and infection control, but fails at maintaining the overall health of the body long-term.",
          "As an illustrative example, there was a family that I noticed something interesting about... The Capricorn grandmother had problems with her knees, the Libra grandson had urinary problems, and the Virgo uncle was noticeably bloated. Each of these disorders corresponded perfectly with what we have learned from ancient astrology in medical practice.",
        ],
      },
      {
        paragraphs: [
          "So as we can see based on previous astrological research, Capricorn would have trouble with their knees, Libra would have problems with their urinary bladder, and Virgo would have problems with the small intestine, colon and digestive tract which could cause bloating. Of course, none of this is accepted by modern medicine, but it still may be of interest to a Capricorn to take special care of her knees or backbone early in life.",
        ],
      },
      {
        images: [
          {
            src: "/blog/history-of-medicinal-astrology/photo-3.webp",
            alt: "Microcosmus Melothesia image showing zodiac signs arranged on a human figure.",
          },
          {
            src: "/blog/history-of-medicinal-astrology/photo-4.webp",
            alt: "Dr. J.H. McLean's Family Almanac anatomy chart governed by the twelve constellations.",
          },
        ],
      },
      {
        heading: "Ancient Greek Medicine",
        paragraphs: [
          "Ancient Greek medicine such as what was practiced by Hippocrates as well as Galen, one of the most accomplished of all medical researchers of antiquity, believed the cosmos influenced the body. As well, the body is governed by balances (humors, fluids, heat, etc.)",
        ],
      },
      {
        paragraphs: ["Doctors actually used astrology to decide when to…"],
        items: ["Perform surgery", "Diagnose illness", "Track bleeding cycles"],
      },
      {
        paragraphs: [
          "Originally, this system was very simple. For example, each sign would only govern a very specific area of the body, i.e., Aries governing the head, or Taurus governing the throat. Later traditions began to layer in other biological processes such as those regulated by endocrine glands, hormones, or detailed organs.",
          "By today’s modern medical standards, empirical evidence is required before any treatment is accepted. However, early observations were often based on trial and error, as practitioners attempted to understand patterns in the body through repeated experience. Over time, these observations became systematized; they just didn’t have the resources to perform longitudinal studies or meta-analyses as we do today. But even today, doctors will tell you how they’ve noticed the results of surgeries change based on whether they were done on full moons and new moons.",
          "These practices were replaced with new medical tools such as microscopes, imaging (X-rays, MRI, etc.), and biochemistry. Once you can see bacteria, organs, and cells directly, you no longer need symbolic mappings like zodiac-body correspondences.",
          "The Ancients believed that the macrocosm of the sky could be mapped onto the microcosm of the body as a mnemonic framework for organizing knowledge and symbolic anatomy. They worked with seasonal equinoxes, symmetry principles, and philosophical beliefs rooted in Babylonian or Hellenistic astrology.",
        ],
      },
      {
        separator: true,
      },
      {
        paragraphs: [
          "What modern medicine does prove is that human beings are made of stardust. Heavier elements like iron, calcium, or nitrogen only form in the pressure of a star. Stars are stable because the fusion fights gravity, but when iron starts building up, stars can’t sustain themselves any longer and collapse into supernovae. These supernovas send elements out into the universe to collect on planets, and into beings such as yourself. The only reason there is iron in your blood or calcium in your bones is because stars created them.",
          "No part of you would exist if stars didn’t make it.",
          "At the core of a star, simple elements are gradually fused into more complex ones. Hydrogen becomes helium, helium becomes carbon, and from there the chain continues, forming oxygen, neon, and other elements step by step. This process builds upward until it reaches iron, which marks a kind of limit. Beyond this point, fusion no longer produces energy, so stars cannot continue creating heavier elements in the same way. Instead, those rarer elements are only formed under extreme conditions, such as the collapse or explosion of a star.",
        ],
      },
      {
        heading: "The LIFESPACE Holistic Health Method",
        paragraphs: [
          "Just because we have a connection to a star system, that doesn’t mean that we are victims to the stars. Quite the contrary, the stars we are given are gifts that we need to learn how to control. Each star and planet gives characteristics that a person can use for good, or use for evil. Ailments only begin when the person is not living their life according to God’s Will, i.e., not taking care of themselves or their lives properly.",
          "We recommend the LIFESPACE Holistic Health Method for maximum support and brain optimization. Truly, all disease begins in the mind and you can even heal your ailments by using your mind. But first, you need to make sure that your mind is healthy and working at capacity.",
          "We do this by following a simple guideline for health consciousness that can be extended to medical disciplines other than that of mental health. These principles provide major support for thyroid issues, metabolic disorders, cardiovascular health, digestive conditions, immune system regulation, respiratory health, musculoskeletal integrity, dermatological conditions, and virtually anything else.",
        ],
      },
    ],
    practices: [
      "L — Light, sunlight, UV rays, warm light, cold light, etc.",
      "I — Inner Work, meditation, prayer, yoga, mirror work, trataka, tai chi, union, connection with God",
      "F — Fitness, daily exercise, vigorous exercise for at least 5 minutes per day (i.e., 300 seconds per day), breaking a sweat",
      "E — Eating healthy, orthomolecular dieting, slow-digesting carbohydrates, nutritional supplements, micronutrients, diets for specific neurotransmitter function",
      "S — Sensory health, cleanliness of the home, decorated space, wardrobe, clean body, color psychology, peaceful environment, free from noise pollution, Feng Shui, ergonomics, temperature, fresh air",
      "P — Purpose, career, employment, life’s calling, goal setting (i.e., SMART goals), to-do lists, day planners, calendars, financial tracking",
      "A — Activity, sleep hygiene, rest, recreation, sports, pets, music, dance, TV shows, movies, reading books, parks, trails",
      "C — Community, visiting friends, family, phone calls, texting, sharing ideas, church group, theatre troupe, conferences, bars, fraternal organizations, social movements, political causes, volunteer work",
      "E — Expression, creative expression, artwork, cooking, writing, photography, design",
    ],
    closing: [],
  },
  {
    slug: "trataka-ancient-spiritual-practice-of-yogic-gazing",
    title: "Trataka: The Ancient Spiritual Practice of Yogic Gazing",
    subtitle: undefined,
    publishedLabel: "May 2026",
    publishedTime: "2026-05-01T00:00:00-04:00",
    modifiedTime: "2026-05-01T00:00:00-04:00",
    issueLabel: "Astrology Today Journal",
    readTime: "7 min read",
    excerpt:
      "An introduction to Trataka, the yogic practice of fixed-point gazing, with notes on breathing, nervous system regulation, and ways to practice at home.",
    keywords: [
      "trataka",
      "candle gazing meditation",
      "yogic gazing",
      "mirror work meditation",
      "autonomic nervous system meditation",
    ],
    section: "Meditation",
    deck: undefined,
    coverImage: "/blog/trataka-yogic-gazing/image-1.jpg",
    coverImageAlt:
      "Illustration of a seated practitioner gazing at a candle flame from a fixed distance in Trataka meditation.",
    intro: [
      "Trataka is an ancient yogic technique that involves gazing at a fixed point for a long period of time. The point at which one gazes can vary widely and may include almost anything, but many practitioners prefer to use a candle’s flame, a mirror, or a mandala’s geometric design.",
      "Daily trataka enhances intuition, sharpens concentration, and, when combined with proper breathing exercises or meditation, helps one achieve a feeling of inner peace almost immediately. In yogic practice, Trataka is said to purify the third eye, a symbolic centre associated with inner vision, clarity, and higher perception. Ancient mystics also equated this with a higher vibrational state.",
    ],
    zodiacBodyMap: [],
    sections: [
      {
        heading: "Trataka and ANS Activation",
        paragraphs: [
          "The autonomic nervous system, i.e., that which governs our automatic responses to stimuli, is made up of two parts: the sympathetic nervous system and the parasympathetic nervous system. The sympathetic nervous system rules our fight-or-flight responses and survival instincts, while the parasympathetic nervous system governs calming responses related to healing, recovery, and restoration of the spirit.",
          "Trataka works by shifting the practitioner from a sympathetic state into a parasympathetic state, reducing stress and moving toward healing and restoration. This may correspond with changes in brainwave activity associated with meditative states, such as alpha-theta brainwave rhythms. These states may help create greater coherence within the nervous system as the sympathetic and parasympathetic branches work in greater harmony, supporting more regulated communication between the brain, heart, and body.",
        ],
      },
      {
        image: {
          src: "/blog/trataka-yogic-gazing/image-2.jpg",
          alt: "Sri Yantra mandala used as a geometric focal point in Trataka meditation.",
          caption: "Art by Harish Johari: A traditional Sri Yantra mandala commonly used in Trataka meditation.",
        },
        imageLayout: "center",
      },
      {
        heading: "Breathing Techniques",
        paragraphs: [
          "Most people breathe more slowly and deeply during candle gazing without realizing it. Controlled breathing naturally balances the autonomic nervous system, calming anxiety and raising heart rate variability, a marker of emotional and spiritual well-being. A quieted system emits more coherent electromagnetic fields, especially from the heart.",
          "Slow diaphragmatic breathing through the nose is often considered one of the most effective breathing techniques to pair with Trataka. This technique involves breathing slowly through the nose and deeply into the diaphragm. As you breathe, it’s important to deepen your concentration on the flame or fixed point of interest, allowing yourself to enter a more meditative and coherent state of awareness.",
        ],
      },
      {
        heading: "Types of Trataka",
      },
      {
        heading: "Trataka Using a Fixed Point",
        subheading: true,
        paragraphs: [
          "The first method of Trataka involves gazing at a fixed point. The point itself can be almost anything, but it should be visually stable and easy to concentrate on so the mind does not wander during meditation. Many yogic practitioners prefer to use symbols rich in spiritual meaning, including colors believed to produce specific psychological or metaphysical effects, or geometric forms associated with sacred geometry.",
        ],
      },
      {
        heading: "Trataka Using a Candle",
        subheading: true,
        imageAfterParagraph: 2,
        image: {
          src: "/blog/trataka-yogic-gazing/image-3.jpg",
          alt: "Woman practicing candle Trataka in a dark room with the flame centered in front of her face.",
          caption: "Instagram: @girlgonemystic",
        },
        imageLayout: "rightWrap",
        paragraphs: [
          "The second method involves gazing at a candle’s flame. The distance between you and the candle is ultimately up to you, but most practitioners prefer to place the candle on a stand approximately 2 to 3 feet away at eye level. In traditional yogic practice, the flame should remain steady and easily visible without causing physical strain to the eyes or neck. The meditator then focuses intently on the flame without blinking excessively, allowing the mind to gradually become still and single-pointed.",
          "Practicing Trataka with a candle helps stimulate melatonin, serotonin, and circadian rhythm according to some emerging research. In general, research on warm light exposure suggests that naturalistic lighting conditions may influence mood, sleep, and states of alertness in a positive manner. This may be due to activation of the pineal gland and its connection to biophoton transmission.",
          "The relationship between the pineal gland and biophoton transmission is a highly speculative but actively discussed topic at the intersection of neuroscience, biophysics, and consciousness studies. Biophotons might be the scientific term used to describe what ancient yogis have called “inner light” for millennia, and which occurs in all living things.",
          "The flickering of a candle also produces a natural alpha-theta brainwave rhythm, which is associated with relaxed awareness, meditative states, and healing. This entrainment (i.e., the syncing of brain rhythms to external stimuli) can help the mind drop into coherence, increasing internal order, which energetically feels like a “higher frequency” state.",
        ],
      },
      {
        heading: "Trataka Using a Mirror",
        subheading: true,
        paragraphs: [
          "Trataka using a mirror, sometimes affectionately called “mirror work,” is the practice of gazing into your own eyes, typically in a calm, meditative state while observing emotions and sensations that may arise. When done with candlelight, the environment becomes even more introspective, creating a sacred or altered state of consciousness. Some would even venture to say that we are more beautiful in candlelight, and so this practice can encourage feelings of self-love and self-appreciation. The words we speak to ourselves, or even think to ourselves while looking into a mirror, can have profound spiritual effects on our emotional well-being.",
          "Facing the self in the mirror activates what is called the Default Mode Network, or DMN for short. This is a neural system involved in self-referential encoding, daydreaming, and autobiographical memory. This is supported by studies using fMRI, which have shown that gazing at one’s own face activates areas of the brain related to identity and memory retrieval. In summary, your brain is literally retrieving your own story and helping you get in touch with your inner self, or remember who you are.",
          "Eye contact — yes, even with yourself — triggers activity in the limbic system, the brain’s emotional centre. Normally, eye contact with others regulates emotions via oxytocin release and social bonding, but with mirror work, this can help self-regulate emotions like shame, grief, or feelings of unworthiness. This explains why some people cry during mirror meditation: it’s a form of emotional metabolizing. It is also not uncommon to experience feelings of discomfort or trembling in the beginning phases of Trataka, but with practice, these are soon replaced with feelings of ease, acceptance, and confidence in the self.",
        ],
      },
      {
        separator: true,
      },
      {
        heading: "How to Practice Trataka at Home",
        paragraphs: [
          "If you are interested in trying Trataka on your own, you can follow this simple method.",
        ],
        items: [
          "Place a candle on a candlestick or candleholder and make sure it is secure.",
          "Place the candle on a surface in front of a mirror that is at least three feet tall and at least two feet wide.",
          "Sit in a dark room facing the mirror, keeping the candle at a safe distance from your body, clothing, curtains, or anything flammable.",
          "Light the candle.",
          "Start your breathing technique by breathing deeply through your nose for 6 seconds, allowing your belly to expand fully. Hold your breath for 6 seconds, then exhale for 6 seconds until you feel your belly pull completely inward. Then, hold the breath out for 6 seconds before repeating the cycle.",
          "Fix your gaze upon the candle’s flame while continuing the breathing exercise. Feel your own presence in your periphery.",
        ],
      },
      {
        paragraphs: [
          "And that’s it! You are now practicing Trataka like a true yogi.",
          "Alternatively, at some point during your meditation, you may decide to place the candle to the side and focus solely on the center between your eyes. Use the space between your eyebrows as a fixed point and continue the practice just as you did with the candle’s flame. You can continue doing this for as long as feels comfortable, or until you begin to feel the spiritual benefits that Trataka meditation has to offer.",
          "If you are someone who is uncomfortable with psychedelic experiences or has had negative experiences with psychedelics in the past, then Trataka may not be suitable for you. This is because the subtle shadows and movement of candlelight can also create mild pareidolia, such as the perception of faces or patterns, which enhances the mythic or symbolic feeling of the practice, but may trigger episodes in those with a history of psychosis.",
        ],
      },
      {
        separator: true,
      },
      {
        heading: "Works Cited",
        items: [
          "Blume, C., Garbazza, C., & Spitschan, M. (2019). Effects of light on human circadian rhythms, sleep and mood. Sleep Medicine Reviews, 44, 108–118.",
          "Bonmati-Carrion, M. A., et al. (2014). Protecting the Melatonin Rhythm through Circadian Healthy Light Exposure. International Journal of Molecular Sciences.",
          "Walker, W. H., et al. (2020). Circadian rhythm disruption and mental health. Molecular Psychiatry.",
          "Tähkämö, L., Partonen, T., & Pesonen, A.-K. (2019). Systematic review of light exposure impact on human circadian rhythm. Chronobiology International, 36(2), 151–170.",
          "Zaccaro, Andrea, et al. “How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing.” Frontiers in Human Neuroscience, vol. 12, 2018.",
          "Apps, Matthew A. J., and Manos Tsakiris. “The Different Faces of One’s Self: An fMRI Study into the Recognition of Current and Past Self-Facial Appearances.” PLoS ONE, vol. 8, no. 7, 2013.",
        ],
      },
    ],
    practices: [],
    closing: [],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
