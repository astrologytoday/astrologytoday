"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  defaultLocale,
  localeLabels,
  type SupportedLocale,
  withExplicitLocale,
  withLocale,
} from "../../lib/i18n";
import { getHomeCopy } from "../../lib/copy";
import { SHOW_AD_DEBUGGERS, SHOW_DEBUGGERS } from "../../lib/debug";
import {
  authenticateLifespaceAccount,
  getStoredLifespaceSession,
  LIFESPACE_AUTH_EVENT,
  setStoredLifespaceSession,
  type LifespaceWebSession,
} from "../../lib/lifespace/webAuth";
import { upsertMailingListSignup } from "../../lib/firebase/lifespace";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";

type NavLink = {
  label: string;
  href: string;
};

type FooterLink = {
  label: string;
  href: string;
};

type TransformDebug = {
  x: number;
  y: number;
  scale: number;
};

type BarDebug = TransformDebug & {
  width: number;
  height: number;
};

type LoginDebug = {
  x: number;
  y: number;
  width: number;
  scale: number;
};

type DebugTarget =
  | "topCard"
  | "bottomCard"
  | "previewCard"
  | "main"
  | "adExample"
  | "emblem"
  | "title"
  | "titleCircle"
  | "titleCircle2"
  | "titleCircle3"
  | "titleCircle4"
  | "titleBar"
  | "titleBar2"
  | "marquee"
  | "magazine"
  | "menu"
  | "buttons"
  | "fields"
  | "loggedInFields"
  | "passwordField"
  | "monthly"
  | "preview"
  | "previewCopy"
  | "previewBenefits"
  | "previewButton"
  | "newsletterTitle"
  | "newsletterForm"
  | "footerLogo"
  | "footerBar"
  | "footerMeta"
  | "footerCredit"
  | "app";

type GlowState = Record<DebugTarget, number>;

const HOME_EMBLEM_LOCKED: TransformDebug = { x: 17, y: 2, scale: 0.64 };
const HOME_TOP_CARD_EXTEND_LOCKED = 0;
const HOME_BOTTOM_CARD_EXTEND_LOCKED = 84;
const HOME_PREVIEW_CARD_EXTEND_LOCKED = 333;
const HOME_MAIN_LOCKED: TransformDebug = { x: 0, y: -28, scale: 1 };
const HOME_AD_EXAMPLE_LOCKED: TransformDebug = { x: -68, y: 1164, scale: 1.24 };
const HOME_AD_EXAMPLE_WIDTH_LOCKED = 220;
const HOME_AD_EXAMPLE_HEIGHT_LOCKED = 708;
const HOME_TITLE_LOCKED: TransformDebug = { x: 345, y: 140, scale: 0.54 };
const HOME_TITLE_CIRCLE_LOCKED: TransformDebug = { x: 60, y: 32, scale: 1.82 };
const HOME_TITLE_CIRCLE_2_LOCKED: TransformDebug = { x: 118, y: 47, scale: 1.42 };
const HOME_TITLE_CIRCLE_3_LOCKED: TransformDebug = { x: 88, y: 54, scale: 1.1 };
const HOME_TITLE_CIRCLE_4_LOCKED: TransformDebug = { x: 88, y: 64, scale: 1.18 };
const HOME_TITLE_BAR_LOCKED: BarDebug = { x: 279, y: 102, scale: 0.86, width: 566, height: 144 };
const HOME_TITLE_BAR_2_LOCKED: BarDebug = { x: 290, y: 104, scale: 0.74, width: 636, height: 164 };
const HOME_MARQUEE_LOCKED: TransformDebug = { x: 3, y: -41, scale: 1.24 };
const HOME_MARQUEE_WIDTH_LOCKED = 1739;
const HOME_MARQUEE_HEIGHT_LOCKED = 28;
const HOME_MAGAZINE_LOCKED: TransformDebug = { x: 25, y: 11, scale: 1 };
const HOME_SIDEBAR_LOCKED: TransformDebug = { x: -70, y: 42, scale: 1.08 };
const HOME_CTA_LOCKED: TransformDebug = { x: -13, y: 113, scale: 1 };
const HOME_APP_LOCKED: TransformDebug = { x: 70, y: 26, scale: 1.24 };
const HOME_APP_WIDTH_LOCKED = 420;
const HOME_APP_HEIGHT_LOCKED = 236;
const HOME_LOGIN_LOCKED: LoginDebug = { x: 643, y: -50, width: 96, scale: 1 };
const HOME_LOGGED_IN_FIELDS_LOCKED: LoginDebug = { x: 643, y: -50, width: 96, scale: 1 };
const HOME_PASSWORD_FIELD_WIDTH_LOCKED = 0;
const HOME_MONTHLY_LOCKED: TransformDebug = { x: 647, y: 86, scale: 1 };
const HOME_PREVIEW_LOCKED: TransformDebug = { x: 3, y: 21, scale: 1 };
const HOME_PREVIEW_COPY_LOCKED: TransformDebug = { x: 4, y: 145, scale: 1 };
const HOME_PREVIEW_BENEFITS_LOCKED: TransformDebug = { x: 0, y: -301, scale: 0.92 };
const HOME_PREVIEW_BUTTON_LOCKED: TransformDebug = { x: 406, y: -4, scale: 0.92 };
const HOME_NEWSLETTER_TITLE_LOCKED: TransformDebug = { x: 0, y: -75, scale: 2.04 };
const HOME_NEWSLETTER_FORM_LOCKED: TransformDebug = { x: 0, y: -98, scale: 1.08 };
const HOME_FOOTER_LOGO_LOCKED: TransformDebug = { x: 11, y: 11, scale: 1.24 };
const HOME_CANVAS_SCALE = 0.71;
const HOME_CANVAS_WIDTH = 1860;
const HOME_CANVAS_BLEED_LEFT = 360;
const HOME_CANVAS_BLEED_RIGHT = 360;
const HOME_CANVAS_OFFSET_X = 10;
const HOME_CANVAS_OFFSET_Y = 29;
const HOME_FOOTER_BAR_LOCKED: TransformDebug = { x: -17, y: -163, scale: 1 };
const HOME_FOOTER_META_LOCKED: TransformDebug = { x: 0, y: 0, scale: 1 };
const HOME_FOOTER_CREDIT_LOCKED: TransformDebug = { x: 0, y: -150, scale: 1 };
const HOME_FOOTER_BAR_WIDTH_LOCKED = 100;
const HOME_MAGAZINE_SCROLL_DURATION_LOCKED = 1050;
const HOME_DEBUG_STORAGE_KEY = "astrologytoday-home-debug-v45";
const HOME_TITLE_CIRCLE_COLOR_LOCKED = "#a6c8cf";
const HOME_TITLE_CIRCLE_2_COLOR_LOCKED = "#a6c8cf";
const HOME_TITLE_CIRCLE_3_COLOR_LOCKED = "#a6c8cf";
const HOME_TITLE_CIRCLE_4_COLOR_LOCKED = "#a6c8cf";
const HOME_TITLE_BAR_COLOR_LOCKED = "#a9cbd1";
const HOME_TITLE_BAR_2_COLOR_LOCKED = "#a9cbd1";
const HOME_TITLE_CIRCLE_OPACITY_LOCKED = 0.05;
const HOME_TITLE_CIRCLE_2_OPACITY_LOCKED = 0.05;
const HOME_TITLE_CIRCLE_3_OPACITY_LOCKED = 0.05;
const HOME_TITLE_CIRCLE_4_OPACITY_LOCKED = 0.05;
const HOME_TITLE_BAR_OPACITY_LOCKED = 1;
const HOME_TITLE_BAR_2_OPACITY_LOCKED = 1;
const HOME_TITLE_CIRCLE_TEXTURE_LOCKED = true;
const HOME_TITLE_CIRCLE_2_TEXTURE_LOCKED = true;
const HOME_TITLE_CIRCLE_3_TEXTURE_LOCKED = true;
const HOME_TITLE_CIRCLE_4_TEXTURE_LOCKED = true;
const HOME_TITLE_BAR_TEXTURE_LOCKED = true;
const HOME_TITLE_BAR_2_TEXTURE_LOCKED = true;
const HOME_TITLE_CIRCLE_VISIBLE_LOCKED = true;
const HOME_TITLE_CIRCLE_2_VISIBLE_LOCKED = true;
const HOME_TITLE_CIRCLE_3_VISIBLE_LOCKED = true;
const HOME_TITLE_CIRCLE_4_VISIBLE_LOCKED = true;
const HOME_TITLE_BAR_VISIBLE_LOCKED = true;
const HOME_TITLE_BAR_2_VISIBLE_LOCKED = true;
const HOME_TITLE_GLOW_LOCKED = 0.64;
const HOME_TITLE_BRIGHTNESS_LOCKED = 2;
const HOME_AD_DEBUGGER_OFFSET_LOCKED = { x: 0, y: 0 };
const HOME_GLOW_LOCKED: GlowState = {
  topCard: 0,
  bottomCard: 0,
  previewCard: 0,
  main: 0.1,
  adExample: 0.1,
  emblem: 1.25,
  title: 0.64,
  titleCircle: 1.5,
  titleCircle2: 0.75,
  titleCircle3: 1.35,
  titleCircle4: 1.4,
  titleBar: 1.45,
  titleBar2: 1.35,
  marquee: 0.08,
  magazine: 1.25,
  menu: 0.1,
  buttons: 0.1,
  fields: 0.1,
  loggedInFields: 0.1,
  passwordField: 0.1,
  monthly: 0.1,
  preview: 0.1,
  previewCopy: 0.1,
  previewBenefits: 0.1,
  previewButton: 0.1,
  newsletterTitle: 0.1,
  newsletterForm: 0.1,
  footerLogo: 0.1,
  footerBar: 0.1,
  footerMeta: 0.1,
  footerCredit: 0.1,
  app: 1.04,
};

const clampPreviewCardAdjust = (value: number) => value;
const clampBottomCardAdjust = (value: number) => value;

const navLinksPrimary: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Downloads", href: "/downloads" },
  { label: "About", href: "/about" },
  { label: "LIFESPACE", href: "https://mylifespace.ca/portal" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const homeMarqueeItems = [
  "♅ ⋅ URANUS ENTERS GEMINI 04/26 ⋅ ♅",
  "☉ ⋅ CANCER SUN ⋅ 06/21 - 07/22 ⋅ CANCER SUN ⋅ ☉",
  "☽ ⋅ LIBRA MOON ⋅ 06/22 - 06/23 ⋅ LIBRA MOON ⋅ ☽",
  "☿ ⋅ CANCER MERCURY ⋅ 06/01 - 08/08 ⋅ CANCER MERCURY ⋅ ☿",
  "☽ ⋅ SCORPIO MOON ⋅ 06/24 - 06/25 ⋅ SCORPIO MOON ⋅ ☽",
  "♃ ⋅ JUPITER ENTERS LEO 06/30 ⋅ ♃",
  "☽ ⋅ SAGITTARIUS FULL MOON ⋅ 06/26 - 06/28 ⋅ SAGITTARIUS FULL MOON ⋅ ☽",
  "♂ ⋅ TAURUS MARS ⋅ 05/18 - 06/27 ⋅ TAURUS MARS ⋅ ♂",
  "☽ ⋅ CAPRICORN FULL MOON ⋅ 06/29 - 07/01 ⋅ CAPRICORN FULL MOON ⋅ ☽",
  "♀ ⋅ LEO VENUS ⋅ 06/13 - 07/08 ⋅ LEO VENUS ⋅ ♀",
  "♂ ⋅ GEMINI MARS ⋅ 06/28 - 08/10 ⋅ GEMINI MARS ⋅ ♂",
];

const weeklyCards = [
  { key: "sun", title: "SUN ☉", copy: "Write copy here." },
  { key: "moon", title: "MOON ☽", copy: "Write copy here." },
  { key: "rising", title: "RISING ⥉", copy: "Write copy here." },
  { key: "mercury", title: "MERCURY ☿", copy: "Write copy here." },
  { key: "venus", title: "VENUS ♀", copy: "Write copy here." },
  { key: "mars", title: "MARS ♂", copy: "Write copy here." },
  { key: "jupiter", title: "JUPITER ♃", copy: "Write copy here." },
  { key: "saturn", title: "SATURN ♄", copy: "Write copy here." },
];

const signs = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const footerColumns = [
  {
    heading: "Discover",
    items: [
      { label: "Creation Health", href: "#" },
      { label: "Site Rules", href: "/site-rules" },
      {
        label: "Advertise",
        href: "mailto:inquiries@mylifespace.ca?subject=Advertising%20With%20Astrology%20Today",
      },
      { label: "Support", href: "https://buymeacoffee.com/creationhealth" },
    ] satisfies FooterLink[],
  },
  {
    heading: "Legal",
    items: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "DMCA", href: "/dmca" },
      { label: "Accessibility Statement", href: "/accessibility-statement" },
    ] satisfies FooterLink[],
  },
  {
    heading: "Other",
    items: [
      { label: "Upgrade to AT+", href: "#" },
      { label: "Articles Staff", href: "#" },
      { label: "Services", href: "/services" },
    ] satisfies FooterLink[],
  },
];

const languageColumns = [
  [
    { code: "en", label: localeLabels.en },
    { code: "fr", label: localeLabels.fr },
    { code: "it", label: localeLabels.it },
    { code: "es", label: localeLabels.es },
  ],
  [
    { code: "hi", label: localeLabels.hi },
    { code: "ur", label: localeLabels.ur },
    { code: "sa", label: localeLabels.sa },
    { code: "pa", label: localeLabels.pa },
  ],
  [
    { code: "zh", label: localeLabels.zh },
    { code: "ja", label: localeLabels.ja },
    { code: "yue", label: localeLabels.yue },
    { code: "ko", label: localeLabels.ko },
  ],
] satisfies { code: SupportedLocale; label: string }[][];
const PREVIEW_SLIDE_VERSION = "2026-04-10-1";
const previewSlides = [
  `/preview-1.png?v=${PREVIEW_SLIDE_VERSION}`,
  `/preview-2.png?v=${PREVIEW_SLIDE_VERSION}`,
  `/preview-3.png?v=${PREVIEW_SLIDE_VERSION}`,
  `/preview-6.png?v=${PREVIEW_SLIDE_VERSION}`,
  `/preview-7.png?v=${PREVIEW_SLIDE_VERSION}`,
  `/preview-8.png?v=${PREVIEW_SLIDE_VERSION}`,
  `/preview-9.png?v=${PREVIEW_SLIDE_VERSION}`,
  `/preview-10.png?v=${PREVIEW_SLIDE_VERSION}`,
  `/preview-11.png?v=${PREVIEW_SLIDE_VERSION}`,
  `/preview-12.png?v=${PREVIEW_SLIDE_VERSION}`,
  `/preview-13.png?v=${PREVIEW_SLIDE_VERSION}`,
];


const DEBUGGER_VISIBLE_TARGETS: DebugTarget[] = [
  "topCard",
  "bottomCard",
  "previewCard",
  "main",
  "adExample",
  "marquee",
  "magazine",
  "menu",
  "fields",
  "loggedInFields",
  "monthly",
  "passwordField",
  "preview",
  "previewCopy",
  "previewBenefits",
  "previewButton",
  "newsletterTitle",
  "newsletterForm",
  "footerLogo",
  "footerBar",
  "footerMeta",
  "footerCredit",
  "app",
];

export default function HomePage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getHomeCopy(locale);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const marqueeGroupRef = useRef<HTMLDivElement | null>(null);
  const homeNavLinks: NavLink[] = [
    { label: copy.nav.home, href: "/" },
    { label: copy.nav.services, href: "/services" },
    { label: copy.nav.downloads, href: "/downloads" },
    { label: copy.nav.about, href: "/about" },
    { label: copy.nav.lifespace, href: "https://mylifespace.ca/portal" },
    { label: copy.nav.pricing, href: "/pricing" },
    { label: copy.nav.blog, href: "/blog" },
  ];
  const homeFooterColumns = [
    {
      heading: copy.footer.discover,
      items: [
        { label: copy.footer.creationHealth, href: "/creation-health" },
        { label: copy.footer.siteRules, href: "/site-rules" },
        {
          label: copy.footer.advertise,
          href: "mailto:inquiries@mylifespace.ca?subject=Advertising%20With%20Astrology%20Today",
        },
        {
          label: copy.footer.support,
          href: "/support",
        },
      ] satisfies FooterLink[],
    },
    {
      heading: copy.footer.legal,
      items: [
        { label: copy.footer.terms, href: "/terms-of-service" },
        { label: copy.footer.privacy, href: "/privacy-policy" },
        { label: copy.footer.dmca, href: "/dmca" },
        { label: copy.footer.accessibility, href: "/accessibility-statement" },
      ] satisfies FooterLink[],
    },
    {
      heading: copy.footer.other,
      items: [
        { label: copy.footer.upgrade, href: "/pricing" },
        { label: copy.footer.staff, href: "/meet-the-creator" },
        { label: copy.footer.services, href: "/services" },
      ] satisfies FooterLink[],
    },
  ];
  const scrollToPageBottom = () => {
    if (typeof window === "undefined") return;
    const startY = window.scrollY;
    const targetY = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const distance = targetY - startY;

    if (Math.abs(distance) < 8) return;

    const duration = magazineScrollDuration;
    const startTime = window.performance.now();
    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };
  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const localizedHref = (href: string) => withLocale(locale, href);
  const [debuggerOffset, setDebuggerOffset] = useState({ x: 0, y: 0 });
  const [debugTarget, setDebugTarget] = useState<DebugTarget>("emblem");
  const [topCardExtend, setTopCardExtend] = useState(HOME_TOP_CARD_EXTEND_LOCKED);
  const [bottomCardExtend, setBottomCardExtend] = useState(HOME_BOTTOM_CARD_EXTEND_LOCKED);
  const [previewCardExtend, setPreviewCardExtend] = useState(HOME_PREVIEW_CARD_EXTEND_LOCKED);
  const [mainDebug, setMainDebug] = useState(HOME_MAIN_LOCKED);
  const [adExampleDebug, setAdExampleDebug] = useState(HOME_AD_EXAMPLE_LOCKED);
  const [adExampleWidth, setAdExampleWidth] = useState(HOME_AD_EXAMPLE_WIDTH_LOCKED);
  const [adExampleHeight, setAdExampleHeight] = useState(HOME_AD_EXAMPLE_HEIGHT_LOCKED);
  const [adDebuggerVisible, setAdDebuggerVisible] = useState(true);
  const [adDebuggerOffset, setAdDebuggerOffset] = useState(HOME_AD_DEBUGGER_OFFSET_LOCKED);
  const [adCopyStatus, setAdCopyStatus] = useState("");
  const [emblemDebug, setEmblemDebug] = useState(HOME_EMBLEM_LOCKED);
  const [titleDebug, setTitleDebug] = useState(HOME_TITLE_LOCKED);
  const [titleCircleDebug, setTitleCircleDebug] = useState(HOME_TITLE_CIRCLE_LOCKED);
  const [titleCircle2Debug, setTitleCircle2Debug] = useState(HOME_TITLE_CIRCLE_2_LOCKED);
  const [titleCircle3Debug, setTitleCircle3Debug] = useState(HOME_TITLE_CIRCLE_3_LOCKED);
  const [titleCircle4Debug, setTitleCircle4Debug] = useState(HOME_TITLE_CIRCLE_4_LOCKED);
  const [titleBarDebug, setTitleBarDebug] = useState<BarDebug>(HOME_TITLE_BAR_LOCKED);
  const [titleBar2Debug, setTitleBar2Debug] = useState<BarDebug>(HOME_TITLE_BAR_2_LOCKED);
  const [marqueeDebug, setMarqueeDebug] = useState(HOME_MARQUEE_LOCKED);
  const [marqueeWidth, setMarqueeWidth] = useState(HOME_MARQUEE_WIDTH_LOCKED);
  const [marqueeHeight, setMarqueeHeight] = useState(HOME_MARQUEE_HEIGHT_LOCKED);
  const [magazineDebug, setMagazineDebug] = useState(HOME_MAGAZINE_LOCKED);
  const [menuDebug, setMenuDebug] = useState(HOME_SIDEBAR_LOCKED);
  const [buttonDebug, setButtonDebug] = useState(HOME_CTA_LOCKED);
  const [appDebug, setAppDebug] = useState(HOME_APP_LOCKED);
  const [appWidth, setAppWidth] = useState(HOME_APP_WIDTH_LOCKED);
  const [appHeight, setAppHeight] = useState(HOME_APP_HEIGHT_LOCKED);
  const [fieldDebug, setFieldDebug] = useState(HOME_LOGIN_LOCKED);
  const [loggedInFieldDebug, setLoggedInFieldDebug] = useState(HOME_LOGGED_IN_FIELDS_LOCKED);
  const [passwordFieldWidth, setPasswordFieldWidth] = useState(HOME_PASSWORD_FIELD_WIDTH_LOCKED);
  const [monthlyDebug, setMonthlyDebug] = useState(HOME_MONTHLY_LOCKED);
  const [previewDebug, setPreviewDebug] = useState(HOME_PREVIEW_LOCKED);
  const [previewCopyDebug, setPreviewCopyDebug] = useState(HOME_PREVIEW_COPY_LOCKED);
  const [previewBenefitsDebug, setPreviewBenefitsDebug] = useState(HOME_PREVIEW_BENEFITS_LOCKED);
  const [previewButtonDebug, setPreviewButtonDebug] = useState(HOME_PREVIEW_BUTTON_LOCKED);
  const [newsletterTitleDebug, setNewsletterTitleDebug] = useState(HOME_NEWSLETTER_TITLE_LOCKED);
  const [newsletterFormDebug, setNewsletterFormDebug] = useState(HOME_NEWSLETTER_FORM_LOCKED);
  const [footerLogoDebug, setFooterLogoDebug] = useState(HOME_FOOTER_LOGO_LOCKED);
  const [footerBarDebug, setFooterBarDebug] = useState(HOME_FOOTER_BAR_LOCKED);
  const [footerMetaDebug, setFooterMetaDebug] = useState(HOME_FOOTER_META_LOCKED);
  const [footerCreditDebug, setFooterCreditDebug] = useState(HOME_FOOTER_CREDIT_LOCKED);
  const [footerBarWidth, setFooterBarWidth] = useState(HOME_FOOTER_BAR_WIDTH_LOCKED);
  const [magazineScrollDuration, setMagazineScrollDuration] = useState(HOME_MAGAZINE_SCROLL_DURATION_LOCKED);
  const [titleCircleColor, setTitleCircleColor] = useState(HOME_TITLE_CIRCLE_COLOR_LOCKED);
  const [titleCircle2Color, setTitleCircle2Color] = useState(HOME_TITLE_CIRCLE_2_COLOR_LOCKED);
  const [titleCircle3Color, setTitleCircle3Color] = useState(HOME_TITLE_CIRCLE_3_COLOR_LOCKED);
  const [titleCircle4Color, setTitleCircle4Color] = useState(HOME_TITLE_CIRCLE_4_COLOR_LOCKED);
  const [titleBarColor, setTitleBarColor] = useState(HOME_TITLE_BAR_COLOR_LOCKED);
  const [titleBar2Color, setTitleBar2Color] = useState(HOME_TITLE_BAR_2_COLOR_LOCKED);
  const [titleCircleOpacity, setTitleCircleOpacity] = useState(HOME_TITLE_CIRCLE_OPACITY_LOCKED);
  const [titleCircle2Opacity, setTitleCircle2Opacity] = useState(HOME_TITLE_CIRCLE_2_OPACITY_LOCKED);
  const [titleCircle3Opacity, setTitleCircle3Opacity] = useState(HOME_TITLE_CIRCLE_3_OPACITY_LOCKED);
  const [titleCircle4Opacity, setTitleCircle4Opacity] = useState(HOME_TITLE_CIRCLE_4_OPACITY_LOCKED);
  const [titleBarOpacity, setTitleBarOpacity] = useState(HOME_TITLE_BAR_OPACITY_LOCKED);
  const [titleBar2Opacity, setTitleBar2Opacity] = useState(HOME_TITLE_BAR_2_OPACITY_LOCKED);
  const [titleCircleTexture, setTitleCircleTexture] = useState(HOME_TITLE_CIRCLE_TEXTURE_LOCKED);
  const [titleCircle2Texture, setTitleCircle2Texture] = useState(HOME_TITLE_CIRCLE_2_TEXTURE_LOCKED);
  const [titleCircle3Texture, setTitleCircle3Texture] = useState(HOME_TITLE_CIRCLE_3_TEXTURE_LOCKED);
  const [titleCircle4Texture, setTitleCircle4Texture] = useState(HOME_TITLE_CIRCLE_4_TEXTURE_LOCKED);
  const [titleBarTexture, setTitleBarTexture] = useState(HOME_TITLE_BAR_TEXTURE_LOCKED);
  const [titleBar2Texture, setTitleBar2Texture] = useState(HOME_TITLE_BAR_2_TEXTURE_LOCKED);
  const [titleCircleVisible, setTitleCircleVisible] = useState(HOME_TITLE_CIRCLE_VISIBLE_LOCKED);
  const [titleCircle2Visible, setTitleCircle2Visible] = useState(HOME_TITLE_CIRCLE_2_VISIBLE_LOCKED);
  const [titleCircle3Visible, setTitleCircle3Visible] = useState(HOME_TITLE_CIRCLE_3_VISIBLE_LOCKED);
  const [titleCircle4Visible, setTitleCircle4Visible] = useState(HOME_TITLE_CIRCLE_4_VISIBLE_LOCKED);
  const [titleBarVisible, setTitleBarVisible] = useState(HOME_TITLE_BAR_VISIBLE_LOCKED);
  const [titleBar2Visible, setTitleBar2Visible] = useState(HOME_TITLE_BAR_2_VISIBLE_LOCKED);
  const [titleGlow, setTitleGlow] = useState(HOME_TITLE_GLOW_LOCKED);
  const [titleBrightness, setTitleBrightness] = useState(HOME_TITLE_BRIGHTNESS_LOCKED);
  const [glowState, setGlowState] = useState<GlowState>(HOME_GLOW_LOCKED);
  const [marqueeViewportWidth, setMarqueeViewportWidth] = useState(0);
  const [marqueeCycleWidth, setMarqueeCycleWidth] = useState(0);
  const [selectedSign, setSelectedSign] = useState("Aries");
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [wrongPasswordAttempts, setWrongPasswordAttempts] = useState<Record<string, number>>({});
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [lifespaceSession, setLifespaceSession] = useState<LifespaceWebSession | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterJoined, setNewsletterJoined] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [dragging, setDragging] = useState<{
    target: DebugTarget;
    startX: number;
    startY: number;
    initialTransform?: TransformDebug | BarDebug;
    initialField?: LoginDebug;
  } | null>(null);
  const [debuggerDragging, setDebuggerDragging] = useState<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);
  const [adDragging, setAdDragging] = useState<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);
  const [adDebuggerDragging, setAdDebuggerDragging] = useState<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);
  const [resizingSection, setResizingSection] = useState<{
    target: "topCard" | "bottomCard" | "previewCard";
    startY: number;
    initialValue: number;
  } | null>(null);

  useEffect(() => {
    setLifespaceSession(getStoredLifespaceSession());

    function syncSession() {
      setLifespaceSession(getStoredLifespaceSession());
    }

    window.addEventListener(LIFESPACE_AUTH_EVENT, syncSession);
    window.addEventListener("storage", syncSession);

    return () => {
      window.removeEventListener(LIFESPACE_AUTH_EVENT, syncSession);
      window.removeEventListener("storage", syncSession);
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      if (marqueeRef.current) setMarqueeViewportWidth(marqueeRef.current.clientWidth);
      if (marqueeGroupRef.current) setMarqueeCycleWidth(marqueeGroupRef.current.offsetWidth);
    };

    measure();

    const observer = new ResizeObserver(() => measure());
    if (marqueeRef.current) observer.observe(marqueeRef.current);
    if (marqueeGroupRef.current) observer.observe(marqueeGroupRef.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (!DEBUGGER_VISIBLE_TARGETS.includes(debugTarget)) {
      setDebugTarget("preview");
    }
  }, [debugTarget]);

  const displayLifespaceSession = useMemo(
    () =>
      lifespaceSession ??
      (debugTarget === "loggedInFields"
        ? ({
            username: "mariosbardella",
            usernameLower: "mariosbardella",
            linkedCode: "LS-PREVIEW",
          } satisfies LifespaceWebSession)
        : null),
    [debugTarget, lifespaceSession],
  );

  const marqueeIntroDelaySeconds = 1.2;
  const marqueeIntroDurationSeconds =
    marqueeViewportWidth > 0 && marqueeCycleWidth > 0
      ? (44 * marqueeViewportWidth) / marqueeCycleWidth
      : 22;
  const marqueeLoopDelaySeconds = marqueeIntroDelaySeconds + marqueeIntroDurationSeconds;

  useEffect(() => {
    const stored = window.localStorage.getItem(HOME_DEBUG_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as {
        topCardExtend?: number;
        bottomCardExtend?: number;
        previewCardExtend?: number;
        main?: TransformDebug;
        adExample?: TransformDebug;
        adExampleWidth?: number;
        adExampleHeight?: number;
        emblem?: TransformDebug;
        title?: TransformDebug;
        titleCircle?: TransformDebug;
        titleCircle2?: TransformDebug;
        titleCircle3?: TransformDebug;
        titleCircle4?: TransformDebug;
        titleBar?: Partial<BarDebug>;
        titleBar2?: Partial<BarDebug>;
        marquee?: TransformDebug;
        marqueeWidth?: number;
        marqueeHeight?: number;
        magazine?: TransformDebug;
        menu?: TransformDebug;
        buttons?: TransformDebug;
        app?: TransformDebug;
        appWidth?: number;
        appHeight?: number;
        monthly?: TransformDebug;
        preview?: TransformDebug;
        previewCopy?: TransformDebug;
        previewBenefits?: TransformDebug;
        previewButton?: TransformDebug;
        newsletterTitle?: TransformDebug;
        newsletterForm?: TransformDebug;
        footerLogo?: TransformDebug;
        footerBar?: TransformDebug;
        footerMeta?: TransformDebug;
        footerCredit?: TransformDebug;
        footerBarWidth?: number;
        magazineScrollDuration?: number;
        fields?: LoginDebug;
        loggedInFields?: LoginDebug;
        passwordFieldWidth?: number;
        titleCircleColor?: string;
        titleCircle2Color?: string;
        titleCircle3Color?: string;
        titleCircle4Color?: string;
        titleBarColor?: string;
        titleBar2Color?: string;
        titleCircleOpacity?: number;
        titleCircle2Opacity?: number;
        titleCircle3Opacity?: number;
        titleCircle4Opacity?: number;
        titleBarOpacity?: number;
        titleBar2Opacity?: number;
        titleCircleTexture?: boolean;
        titleCircle2Texture?: boolean;
        titleCircle3Texture?: boolean;
        titleCircle4Texture?: boolean;
        titleBarTexture?: boolean;
        titleBar2Texture?: boolean;
        titleCircleVisible?: boolean;
        titleCircle2Visible?: boolean;
        titleCircle3Visible?: boolean;
        titleCircle4Visible?: boolean;
        titleBarVisible?: boolean;
        titleBar2Visible?: boolean;
        titleGlow?: number;
        titleBrightness?: number;
        glowState?: Partial<GlowState>;
      };
      if (typeof parsed.topCardExtend === "number") setTopCardExtend(parsed.topCardExtend);
      if (typeof parsed.bottomCardExtend === "number") setBottomCardExtend(parsed.bottomCardExtend);
      if (typeof parsed.previewCardExtend === "number") setPreviewCardExtend(parsed.previewCardExtend);
      if (parsed.main) setMainDebug({ ...HOME_MAIN_LOCKED, ...parsed.main });
      if (parsed.adExample) setAdExampleDebug({ ...HOME_AD_EXAMPLE_LOCKED, ...parsed.adExample });
      if (typeof parsed.adExampleWidth === "number") setAdExampleWidth(parsed.adExampleWidth);
      if (typeof parsed.adExampleHeight === "number") setAdExampleHeight(parsed.adExampleHeight);
      if (parsed.emblem) setEmblemDebug({ ...HOME_EMBLEM_LOCKED, ...parsed.emblem });
      if (parsed.title) setTitleDebug({ ...HOME_TITLE_LOCKED, ...parsed.title });
      if (parsed.titleCircle) setTitleCircleDebug({ ...HOME_TITLE_CIRCLE_LOCKED, ...parsed.titleCircle });
      if (parsed.titleCircle2) setTitleCircle2Debug({ ...HOME_TITLE_CIRCLE_2_LOCKED, ...parsed.titleCircle2 });
      if (parsed.titleCircle3) setTitleCircle3Debug({ ...HOME_TITLE_CIRCLE_3_LOCKED, ...parsed.titleCircle3 });
      if (parsed.titleCircle4) setTitleCircle4Debug({ ...HOME_TITLE_CIRCLE_4_LOCKED, ...parsed.titleCircle4 });
      if (parsed.titleBar) setTitleBarDebug({ ...HOME_TITLE_BAR_LOCKED, ...parsed.titleBar });
      if (parsed.titleBar2) setTitleBar2Debug({ ...HOME_TITLE_BAR_2_LOCKED, ...parsed.titleBar2 });
      if (parsed.marquee) setMarqueeDebug({ ...HOME_MARQUEE_LOCKED, ...parsed.marquee });
      if (typeof parsed.marqueeWidth === "number") setMarqueeWidth(parsed.marqueeWidth);
      if (typeof parsed.marqueeHeight === "number") setMarqueeHeight(parsed.marqueeHeight);
      if (parsed.magazine) setMagazineDebug({ ...HOME_MAGAZINE_LOCKED, ...parsed.magazine });
      if (parsed.menu) setMenuDebug({ ...HOME_SIDEBAR_LOCKED, ...parsed.menu });
      if (parsed.buttons) setButtonDebug({ ...HOME_CTA_LOCKED, ...parsed.buttons });
      if (parsed.app) setAppDebug({ ...HOME_APP_LOCKED, ...parsed.app });
      if (typeof parsed.appWidth === "number") setAppWidth(parsed.appWidth);
      if (typeof parsed.appHeight === "number") setAppHeight(parsed.appHeight);
      if (parsed.monthly) setMonthlyDebug({ ...HOME_MONTHLY_LOCKED, ...parsed.monthly });
      if (parsed.preview) setPreviewDebug({ ...HOME_PREVIEW_LOCKED, ...parsed.preview });
      if (parsed.previewCopy) setPreviewCopyDebug({ ...HOME_PREVIEW_COPY_LOCKED, ...parsed.previewCopy });
      if (parsed.previewBenefits) setPreviewBenefitsDebug({ ...HOME_PREVIEW_BENEFITS_LOCKED, ...parsed.previewBenefits });
      if (parsed.previewButton) setPreviewButtonDebug({ ...HOME_PREVIEW_BUTTON_LOCKED, ...parsed.previewButton });
      if (parsed.newsletterTitle) setNewsletterTitleDebug({ ...HOME_NEWSLETTER_TITLE_LOCKED, ...parsed.newsletterTitle });
      if (parsed.newsletterForm) setNewsletterFormDebug({ ...HOME_NEWSLETTER_FORM_LOCKED, ...parsed.newsletterForm });
      if (parsed.footerLogo) setFooterLogoDebug({ ...HOME_FOOTER_LOGO_LOCKED, ...parsed.footerLogo });
      if (parsed.footerBar) setFooterBarDebug({ ...HOME_FOOTER_BAR_LOCKED, ...parsed.footerBar });
      if (parsed.footerMeta) setFooterMetaDebug({ ...HOME_FOOTER_META_LOCKED, ...parsed.footerMeta });
      if (parsed.footerCredit) setFooterCreditDebug({ ...HOME_FOOTER_CREDIT_LOCKED, ...parsed.footerCredit });
      if (typeof parsed.footerBarWidth === "number") setFooterBarWidth(parsed.footerBarWidth);
      if (typeof parsed.magazineScrollDuration === "number") setMagazineScrollDuration(parsed.magazineScrollDuration);
      if (parsed.fields) setFieldDebug({ ...HOME_LOGIN_LOCKED, ...parsed.fields });
      if (parsed.loggedInFields) {
        setLoggedInFieldDebug({ ...HOME_LOGGED_IN_FIELDS_LOCKED, ...parsed.loggedInFields });
      } else if (parsed.fields) {
        setLoggedInFieldDebug({ ...HOME_LOGGED_IN_FIELDS_LOCKED, ...parsed.fields });
      }
      if (typeof parsed.passwordFieldWidth === "number") setPasswordFieldWidth(parsed.passwordFieldWidth);
      if (parsed.titleCircleColor) setTitleCircleColor(parsed.titleCircleColor);
      if (parsed.titleCircle2Color) setTitleCircle2Color(parsed.titleCircle2Color);
      if (parsed.titleCircle3Color) setTitleCircle3Color(parsed.titleCircle3Color);
      if (parsed.titleCircle4Color) setTitleCircle4Color(parsed.titleCircle4Color);
      if (parsed.titleBarColor) setTitleBarColor(parsed.titleBarColor);
      if (parsed.titleBar2Color) setTitleBar2Color(parsed.titleBar2Color);
      if (typeof parsed.titleCircleOpacity === "number") setTitleCircleOpacity(parsed.titleCircleOpacity);
      if (typeof parsed.titleCircle2Opacity === "number") setTitleCircle2Opacity(parsed.titleCircle2Opacity);
      if (typeof parsed.titleCircle3Opacity === "number") setTitleCircle3Opacity(parsed.titleCircle3Opacity);
      if (typeof parsed.titleCircle4Opacity === "number") setTitleCircle4Opacity(parsed.titleCircle4Opacity);
      if (typeof parsed.titleBarOpacity === "number") setTitleBarOpacity(parsed.titleBarOpacity);
      if (typeof parsed.titleBar2Opacity === "number") setTitleBar2Opacity(parsed.titleBar2Opacity);
      if (typeof parsed.titleCircleTexture === "boolean") setTitleCircleTexture(parsed.titleCircleTexture);
      if (typeof parsed.titleCircle2Texture === "boolean") setTitleCircle2Texture(parsed.titleCircle2Texture);
      if (typeof parsed.titleCircle3Texture === "boolean") setTitleCircle3Texture(parsed.titleCircle3Texture);
      if (typeof parsed.titleCircle4Texture === "boolean") setTitleCircle4Texture(parsed.titleCircle4Texture);
      if (typeof parsed.titleBarTexture === "boolean") setTitleBarTexture(parsed.titleBarTexture);
      if (typeof parsed.titleBar2Texture === "boolean") setTitleBar2Texture(parsed.titleBar2Texture);
      if (typeof parsed.titleCircleVisible === "boolean") setTitleCircleVisible(parsed.titleCircleVisible);
      if (typeof parsed.titleCircle2Visible === "boolean") setTitleCircle2Visible(parsed.titleCircle2Visible);
      if (typeof parsed.titleCircle3Visible === "boolean") setTitleCircle3Visible(parsed.titleCircle3Visible);
      if (typeof parsed.titleCircle4Visible === "boolean") setTitleCircle4Visible(parsed.titleCircle4Visible);
      if (typeof parsed.titleBarVisible === "boolean") setTitleBarVisible(parsed.titleBarVisible);
      if (typeof parsed.titleBar2Visible === "boolean") setTitleBar2Visible(parsed.titleBar2Visible);
      if (typeof parsed.titleGlow === "number") setTitleGlow(parsed.titleGlow);
      if (typeof parsed.titleBrightness === "number") setTitleBrightness(parsed.titleBrightness);
      if (parsed.glowState) setGlowState({ ...HOME_GLOW_LOCKED, ...parsed.glowState });
    } catch {
      window.localStorage.removeItem(HOME_DEBUG_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (!loginErrorMessage) return;
    const timeoutId = window.setTimeout(() => {
      setLoginErrorMessage("");
    }, 9000);
    return () => window.clearTimeout(timeoutId);
  }, [loginErrorMessage]);

  async function handleLoginAction() {
    if (lifespaceSession) {
      setStoredLifespaceSession(null);
      setLifespaceSession(null);
      setLoginPassword("");
      setLoginErrorMessage("");
      return;
    }

    const normalizedUsername = loginUsername.trim().toLowerCase();
    const session = await authenticateLifespaceAccount(loginUsername, loginPassword);
    if (!session) {
      const nextAttempts = (wrongPasswordAttempts[normalizedUsername] ?? 0) + 1;
      setWrongPasswordAttempts((current) => ({
        ...current,
        [normalizedUsername]: nextAttempts,
      }));
      setLoginErrorMessage(nextAttempts >= 3 ? "Contact support" : "Wrong password");
      return;
    }

    setWrongPasswordAttempts((current) => ({
      ...current,
      [normalizedUsername]: 0,
    }));
    setLifespaceSession(session);
    setLoginErrorMessage("");
    setLoginPassword("");
  }

  useEffect(() => {
    window.localStorage.setItem(
      HOME_DEBUG_STORAGE_KEY,
      JSON.stringify({
        topCardExtend,
        bottomCardExtend,
        previewCardExtend,
        main: mainDebug,
        adExample: adExampleDebug,
        adExampleWidth,
        adExampleHeight,
        emblem: emblemDebug,
        title: titleDebug,
        titleCircle: titleCircleDebug,
        titleCircle2: titleCircle2Debug,
        titleCircle3: titleCircle3Debug,
        titleCircle4: titleCircle4Debug,
        titleBar: titleBarDebug,
        titleBar2: titleBar2Debug,
        marquee: marqueeDebug,
        marqueeWidth,
        marqueeHeight,
        magazine: magazineDebug,
        menu: menuDebug,
        buttons: buttonDebug,
        app: appDebug,
        appWidth,
        appHeight,
        monthly: monthlyDebug,
        preview: previewDebug,
        previewCopy: previewCopyDebug,
        previewBenefits: previewBenefitsDebug,
        previewButton: previewButtonDebug,
        newsletterTitle: newsletterTitleDebug,
        newsletterForm: newsletterFormDebug,
        footerLogo: footerLogoDebug,
        footerBar: footerBarDebug,
        footerMeta: footerMetaDebug,
        footerCredit: footerCreditDebug,
        footerBarWidth,
        magazineScrollDuration,
        fields: fieldDebug,
        loggedInFields: loggedInFieldDebug,
        passwordFieldWidth,
        titleCircleColor,
        titleCircle2Color,
        titleCircle3Color,
        titleCircle4Color,
        titleBarColor,
        titleBar2Color,
        titleCircleOpacity,
        titleCircle2Opacity,
        titleCircle3Opacity,
        titleCircle4Opacity,
        titleBarOpacity,
        titleBar2Opacity,
        titleCircleTexture,
        titleCircle2Texture,
        titleCircle3Texture,
        titleCircle4Texture,
        titleBarTexture,
        titleBar2Texture,
        titleCircleVisible,
        titleCircle2Visible,
        titleCircle3Visible,
        titleCircle4Visible,
        titleBarVisible,
        titleBar2Visible,
        titleGlow,
        titleBrightness,
        glowState,
      }),
    );
  }, [adExampleDebug, adExampleHeight, adExampleWidth, appDebug, appHeight, appWidth, bottomCardExtend, buttonDebug, emblemDebug, fieldDebug, footerBarDebug, footerBarWidth, footerCreditDebug, footerLogoDebug, footerMetaDebug, glowState, loggedInFieldDebug, magazineDebug, magazineScrollDuration, mainDebug, marqueeDebug, marqueeHeight, marqueeWidth, menuDebug, monthlyDebug, newsletterFormDebug, newsletterTitleDebug, passwordFieldWidth, previewBenefitsDebug, previewButtonDebug, previewCardExtend, previewCopyDebug, previewDebug, titleBar2Color, titleBar2Debug, titleBar2Opacity, titleBar2Texture, titleBar2Visible, titleBarColor, titleBarDebug, titleBarOpacity, titleBarTexture, titleBarVisible, titleBrightness, titleCircle2Color, titleCircle2Debug, titleCircle2Opacity, titleCircle2Texture, titleCircle2Visible, titleCircle3Color, titleCircle3Debug, titleCircle3Opacity, titleCircle3Texture, titleCircle3Visible, titleCircle4Color, titleCircle4Debug, titleCircle4Opacity, titleCircle4Texture, titleCircle4Visible, titleCircleColor, titleCircleDebug, titleCircleOpacity, titleCircleTexture, titleCircleVisible, titleDebug, titleGlow, topCardExtend]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!debuggerVisible) return;
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (["input", "textarea", "select"].includes(activeTag)) return;
      const step = event.shiftKey ? 10 : 2;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();

      if (debugTarget === "topCard" || debugTarget === "bottomCard" || debugTarget === "previewCard") {
        const apply =
          debugTarget === "topCard"
            ? setTopCardExtend
            : debugTarget === "bottomCard"
              ? setBottomCardExtend
              : setPreviewCardExtend;
        if (event.key === "ArrowUp") {
          apply((current) =>
            debugTarget === "previewCard"
              ? clampPreviewCardAdjust(current - step * 4)
              : debugTarget === "bottomCard"
                ? clampBottomCardAdjust(current - step * 4)
                : Math.max(0, current - step * 4),
          );
        }
        if (event.key === "ArrowDown") {
          apply((current) =>
            debugTarget === "previewCard"
              ? clampPreviewCardAdjust(current + step * 4)
              : debugTarget === "bottomCard"
                ? clampBottomCardAdjust(current + step * 4)
                : current + step * 4,
          );
        }
        return;
      }

      if (debugTarget === "fields") {
        setFieldDebug((current) => ({
          ...current,
          x:
            event.key === "ArrowLeft"
              ? current.x - step
              : event.key === "ArrowRight"
                ? current.x + step
                : current.x,
          y:
            event.key === "ArrowUp"
              ? current.y - step
              : event.key === "ArrowDown"
                ? current.y + step
                : current.y,
        }));
        return;
      }

      if (debugTarget === "loggedInFields") {
        setLoggedInFieldDebug((current) => ({
          ...current,
          x:
            event.key === "ArrowLeft"
              ? current.x - step
              : event.key === "ArrowRight"
                ? current.x + step
                : current.x,
          y:
            event.key === "ArrowUp"
              ? current.y - step
              : event.key === "ArrowDown"
                ? current.y + step
                : current.y,
        }));
        return;
      }

      const updater = (current: TransformDebug): TransformDebug => ({
        ...current,
        x:
          event.key === "ArrowLeft"
            ? current.x - step
            : event.key === "ArrowRight"
              ? current.x + step
              : current.x,
        y:
          event.key === "ArrowUp"
            ? current.y - step
            : event.key === "ArrowDown"
              ? current.y + step
              : current.y,
      });

      if (debugTarget === "main") setMainDebug(updater);
      else if (debugTarget === "adExample") setAdExampleDebug(updater);
      else if (debugTarget === "emblem") setEmblemDebug(updater);
      else if (debugTarget === "title") setTitleDebug(updater);
      else if (debugTarget === "titleCircle") setTitleCircleDebug(updater);
      else if (debugTarget === "titleCircle2") setTitleCircle2Debug(updater);
      else if (debugTarget === "titleCircle3") setTitleCircle3Debug(updater);
      else if (debugTarget === "titleCircle4") setTitleCircle4Debug(updater);
      else if (debugTarget === "titleBar") {
        setTitleBarDebug((current) => ({ ...current, x: updater(current).x, y: updater(current).y }));
      }
      else if (debugTarget === "titleBar2") {
        setTitleBar2Debug((current) => ({ ...current, x: updater(current).x, y: updater(current).y }));
      }
      else if (debugTarget === "marquee") setMarqueeDebug(updater);
      else if (debugTarget === "magazine") setMagazineDebug(updater);
      else if (debugTarget === "menu") setMenuDebug(updater);
      else if (debugTarget === "buttons") setButtonDebug(updater);
      else if (debugTarget === "monthly") setMonthlyDebug(updater);
      else if (debugTarget === "preview") setPreviewDebug(updater);
      else if (debugTarget === "previewCopy") setPreviewCopyDebug(updater);
      else if (debugTarget === "previewBenefits") setPreviewBenefitsDebug(updater);
      else if (debugTarget === "previewButton") setPreviewButtonDebug(updater);
      else if (debugTarget === "newsletterTitle") setNewsletterTitleDebug(updater);
      else if (debugTarget === "newsletterForm") setNewsletterFormDebug(updater);
      else if (debugTarget === "footerLogo") setFooterLogoDebug(updater);
      else if (debugTarget === "footerBar") setFooterBarDebug(updater);
      else if (debugTarget === "footerMeta") setFooterMetaDebug(updater);
      else if (debugTarget === "footerCredit") setFooterCreditDebug(updater);
      else if (debugTarget === "app") setAppDebug(updater);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [debugTarget, debuggerVisible]);

  useEffect(() => {
    if (!dragging) return;

    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - dragging.startX;
      const dy = event.clientY - dragging.startY;

      if (dragging.target === "fields" && dragging.initialField) {
        setFieldDebug({
          ...dragging.initialField,
          x: dragging.initialField.x + dx,
          y: dragging.initialField.y + dy,
        });
        return;
      }

      if (dragging.target === "loggedInFields" && dragging.initialField) {
        setLoggedInFieldDebug({
          ...dragging.initialField,
          x: dragging.initialField.x + dx,
          y: dragging.initialField.y + dy,
        });
        return;
      }

      if (!dragging.initialTransform) return;
      const next = {
        ...dragging.initialTransform,
        x: dragging.initialTransform.x + dx,
        y: dragging.initialTransform.y + dy,
      };

      if (dragging.target === "main") setMainDebug(next);
      else if (dragging.target === "adExample") setAdExampleDebug(next);
      else if (dragging.target === "emblem") setEmblemDebug(next);
      else if (dragging.target === "title") setTitleDebug(next);
      else if (dragging.target === "titleCircle") setTitleCircleDebug(next);
      else if (dragging.target === "titleCircle2") setTitleCircle2Debug(next);
      else if (dragging.target === "titleCircle3") setTitleCircle3Debug(next);
      else if (dragging.target === "titleCircle4") setTitleCircle4Debug(next);
      else if (dragging.target === "titleBar") {
        setTitleBarDebug((current) => ({ ...current, x: next.x, y: next.y, scale: next.scale }));
      }
      else if (dragging.target === "titleBar2") {
        setTitleBar2Debug((current) => ({ ...current, x: next.x, y: next.y, scale: next.scale }));
      }
      else if (dragging.target === "marquee") setMarqueeDebug(next);
      else if (dragging.target === "magazine") setMagazineDebug(next);
      else if (dragging.target === "menu") setMenuDebug(next);
      else if (dragging.target === "buttons") setButtonDebug(next);
      else if (dragging.target === "monthly") setMonthlyDebug(next);
      else if (dragging.target === "preview") setPreviewDebug(next);
      else if (dragging.target === "previewCopy") setPreviewCopyDebug(next);
      else if (dragging.target === "previewBenefits") setPreviewBenefitsDebug(next);
      else if (dragging.target === "previewButton") setPreviewButtonDebug(next);
      else if (dragging.target === "newsletterTitle") setNewsletterTitleDebug(next);
      else if (dragging.target === "newsletterForm") setNewsletterFormDebug(next);
      else if (dragging.target === "footerLogo") setFooterLogoDebug(next);
      else if (dragging.target === "footerBar") setFooterBarDebug(next);
      else if (dragging.target === "footerMeta") setFooterMetaDebug(next);
      else if (dragging.target === "footerCredit") setFooterCreditDebug(next);
      else if (dragging.target === "app") setAppDebug(next);
    };

    const onUp = () => setDragging(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

  useEffect(() => {
    if (!adDragging) return;

    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - adDragging.startX;
      const dy = event.clientY - adDragging.startY;
      setAdExampleDebug((current) => ({
        ...current,
        x: adDragging.initialX + dx,
        y: adDragging.initialY + dy,
      }));
    };

    const onUp = () => setAdDragging(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [adDragging]);

  useEffect(() => {
    if (!adDebuggerDragging) return;

    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - adDebuggerDragging.startX;
      const dy = event.clientY - adDebuggerDragging.startY;
      setAdDebuggerOffset({
        x: adDebuggerDragging.initialX + dx,
        y: adDebuggerDragging.initialY + dy,
      });
    };

    const onUp = () => setAdDebuggerDragging(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [adDebuggerDragging]);

  useEffect(() => {
    if (!debuggerDragging) return;

    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - debuggerDragging.startX;
      const dy = event.clientY - debuggerDragging.startY;
      setDebuggerOffset({
        x: debuggerDragging.initialX + dx,
        y: debuggerDragging.initialY + dy,
      });
    };

    const onUp = () => setDebuggerDragging(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [debuggerDragging]);

  useEffect(() => {
    if (!resizingSection) return;

    const onMove = (event: MouseEvent) => {
      const delta = event.clientY - resizingSection.startY;
      const next = resizingSection.initialValue + delta;
      if (resizingSection.target === "topCard") setTopCardExtend(next);
      else if (resizingSection.target === "bottomCard") setBottomCardExtend(clampBottomCardAdjust(next));
      else setPreviewCardExtend(clampPreviewCardAdjust(next));
    };

    const onUp = () => setResizingSection(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [resizingSection]);

  const startDragTransform = (
    target: Exclude<DebugTarget, "fields" | "loggedInFields">,
    current: TransformDebug,
  ) => (event: React.MouseEvent) => {
    if (!debuggerVisible) return;
    event.preventDefault();
    setDebugTarget(target);
    setDragging({
      target,
      startX: event.clientX,
      startY: event.clientY,
      initialTransform: current,
    });
  };

  const startDragFields = (event: React.MouseEvent) => {
    if (!debuggerVisible) return;
    event.preventDefault();
    setDebugTarget("fields");
    setDragging({
      target: "fields",
      startX: event.clientX,
      startY: event.clientY,
      initialField: fieldDebug,
    });
  };

  const startDragLoggedInFields = (event: React.MouseEvent) => {
    if (!debuggerVisible) return;
    event.preventDefault();
    setDebugTarget("loggedInFields");
    setDragging({
      target: "loggedInFields",
      startX: event.clientX,
      startY: event.clientY,
      initialField: loggedInFieldDebug,
    });
  };

  const activeTransform = useMemo(() => {
    if (debugTarget === "topCard" || debugTarget === "bottomCard" || debugTarget === "previewCard") return { x: 0, y: 0, scale: 1 };
    if (debugTarget === "main") return mainDebug;
    if (debugTarget === "adExample") return adExampleDebug;
    if (debugTarget === "emblem") return emblemDebug;
    if (debugTarget === "title") return titleDebug;
    if (debugTarget === "titleCircle") return titleCircleDebug;
    if (debugTarget === "titleCircle2") return titleCircle2Debug;
    if (debugTarget === "titleCircle3") return titleCircle3Debug;
    if (debugTarget === "titleCircle4") return titleCircle4Debug;
    if (debugTarget === "titleBar") return titleBarDebug;
    if (debugTarget === "titleBar2") return titleBar2Debug;
    if (debugTarget === "marquee") return marqueeDebug;
    if (debugTarget === "magazine") return magazineDebug;
    if (debugTarget === "menu") return menuDebug;
    if (debugTarget === "buttons") return buttonDebug;
    if (debugTarget === "monthly") return monthlyDebug;
    if (debugTarget === "preview") return previewDebug;
    if (debugTarget === "previewCopy") return previewCopyDebug;
    if (debugTarget === "previewBenefits") return previewBenefitsDebug;
    if (debugTarget === "previewButton") return previewButtonDebug;
    if (debugTarget === "newsletterTitle") return newsletterTitleDebug;
    if (debugTarget === "newsletterForm") return newsletterFormDebug;
    if (debugTarget === "footerLogo") return footerLogoDebug;
    if (debugTarget === "footerBar") return footerBarDebug;
    if (debugTarget === "footerMeta") return footerMetaDebug;
    if (debugTarget === "footerCredit") return footerCreditDebug;
    if (debugTarget === "loggedInFields") return loggedInFieldDebug;
    if (debugTarget === "passwordField") return { x: 0, y: 0, scale: 1 };
    return appDebug;
  }, [adExampleDebug, appDebug, buttonDebug, debugTarget, emblemDebug, footerBarDebug, footerCreditDebug, footerLogoDebug, footerMetaDebug, loggedInFieldDebug, magazineDebug, mainDebug, marqueeDebug, menuDebug, monthlyDebug, newsletterFormDebug, newsletterTitleDebug, previewBenefitsDebug, previewButtonDebug, previewCopyDebug, previewDebug, titleBar2Debug, titleBarDebug, titleCircle2Debug, titleCircle3Debug, titleCircle4Debug, titleCircleDebug, titleDebug]);

  const activeGlow = glowState[debugTarget] ?? 0;
  const edgeBoxGlow = (glow: number, rgb: string, spread = 1) =>
    glow <= 0
      ? "none"
      : `0 0 ${Math.round(10 + glow * 16 * spread)}px rgba(${rgb}, ${Math.min(0.82, 0.16 + glow * 0.32).toFixed(2)})`;
  const edgeDropGlow = (glow: number, rgb: string, spread = 1) =>
    glow <= 0
      ? ""
      : ` drop-shadow(0 0 ${Math.round(8 + glow * 14 * spread)}px rgba(${rgb}, ${Math.min(0.88, 0.18 + glow * 0.32).toFixed(2)}))`;
  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = newsletterEmail.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

    if (!isValidEmail) {
      setNewsletterJoined(false);
      setNewsletterError("Please enter a valid email address.");
      return;
    }

    setNewsletterSubmitting(true);

    try {
      await upsertMailingListSignup(normalizedEmail);
      setNewsletterError("");
      setNewsletterJoined(true);
      setNewsletterEmail(normalizedEmail);
    } catch (error) {
      setNewsletterJoined(false);
      setNewsletterError(
        error instanceof Error
          ? error.message
          : "We couldn't save your email right now. Please try again.",
      );
    } finally {
      setNewsletterSubmitting(false);
    }
  };
  const combineGroupTransform = (current: TransformDebug) => ({
    x: current.x + mainDebug.x,
    y: current.y + mainDebug.y,
    scale: Number((current.scale * mainDebug.scale).toFixed(2)),
  });
  const adjustGlow = (delta: number) =>
    setGlowState((current) => ({
      ...current,
      [debugTarget]: Number(Math.max(0, Math.min(1.5, (current[debugTarget] ?? 0) + delta)).toFixed(2)),
    }));

  const copyAdValues = async () => {
    const payload = [
      "Homepage ad debugger values",
      `home ad: x ${adExampleDebug.x}, y ${adExampleDebug.y}, width ${adExampleWidth}, height ${adExampleHeight}`,
      `ad debugger panel: x ${adDebuggerOffset.x}, y ${adDebuggerOffset.y}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(payload);
      setAdCopyStatus("Values copied.");
      window.setTimeout(() => setAdCopyStatus(""), 1800);
    } catch {
      setAdCopyStatus("Copy failed.");
      window.setTimeout(() => setAdCopyStatus(""), 1800);
    }
  };


  const nudgeTransform = (axis: "x" | "y", amount: number) => {
    if (debugTarget === "topCard" || debugTarget === "bottomCard" || debugTarget === "previewCard") return;
    if (debugTarget === "passwordField") return;
    if (debugTarget === "loggedInFields") {
      setLoggedInFieldDebug((current) => ({ ...current, [axis]: current[axis] + amount }));
      return;
    }
    const updater = (current: TransformDebug) => ({ ...current, [axis]: current[axis] + amount });
    if (debugTarget === "main") setMainDebug(updater);
    else if (debugTarget === "adExample") setAdExampleDebug(updater);
    else if (debugTarget === "emblem") setEmblemDebug(updater);
    else if (debugTarget === "title") setTitleDebug(updater);
    else if (debugTarget === "titleCircle") setTitleCircleDebug(updater);
    else if (debugTarget === "titleCircle2") setTitleCircle2Debug(updater);
    else if (debugTarget === "titleCircle3") setTitleCircle3Debug(updater);
    else if (debugTarget === "titleCircle4") setTitleCircle4Debug(updater);
    else if (debugTarget === "titleBar") {
      setTitleBarDebug((current) => ({ ...current, [axis]: current[axis] + amount }));
    }
    else if (debugTarget === "titleBar2") {
      setTitleBar2Debug((current) => ({ ...current, [axis]: current[axis] + amount }));
    }
    else if (debugTarget === "marquee") setMarqueeDebug(updater);
    else if (debugTarget === "magazine") setMagazineDebug(updater);
    else if (debugTarget === "menu") setMenuDebug(updater);
      else if (debugTarget === "buttons") setButtonDebug(updater);
      else if (debugTarget === "monthly") setMonthlyDebug(updater);
      else if (debugTarget === "preview") setPreviewDebug(updater);
      else if (debugTarget === "previewCopy") setPreviewCopyDebug(updater);
      else if (debugTarget === "previewBenefits") setPreviewBenefitsDebug(updater);
      else if (debugTarget === "previewButton") setPreviewButtonDebug(updater);
      else if (debugTarget === "newsletterTitle") setNewsletterTitleDebug(updater);
      else if (debugTarget === "newsletterForm") setNewsletterFormDebug(updater);
      else if (debugTarget === "footerLogo") setFooterLogoDebug(updater);
      else if (debugTarget === "footerBar") setFooterBarDebug(updater);
      else if (debugTarget === "footerMeta") setFooterMetaDebug(updater);
      else if (debugTarget === "footerCredit") setFooterCreditDebug(updater);
      else if (debugTarget === "app") setAppDebug(updater);
  };

  const resizeTransform = (delta: number) => {
    if (debugTarget === "topCard" || debugTarget === "bottomCard" || debugTarget === "previewCard") return;
    if (debugTarget === "loggedInFields") {
      setLoggedInFieldDebug((current) => ({
        ...current,
        scale: Number(Math.max(0.5, Math.min(2.5, current.scale + delta)).toFixed(2)),
      }));
      return;
    }
    const updater = (current: TransformDebug) => ({
      ...current,
      scale: Number(Math.max(0.2, Math.min(6, current.scale + delta)).toFixed(2)),
    });
    if (debugTarget === "main") setMainDebug(updater);
    else if (debugTarget === "adExample") setAdExampleDebug(updater);
    else if (debugTarget === "emblem") setEmblemDebug(updater);
    else if (debugTarget === "title") setTitleDebug(updater);
    else if (debugTarget === "titleCircle") setTitleCircleDebug(updater);
    else if (debugTarget === "titleCircle2") setTitleCircle2Debug(updater);
    else if (debugTarget === "titleCircle3") setTitleCircle3Debug(updater);
    else if (debugTarget === "titleCircle4") setTitleCircle4Debug(updater);
    else if (debugTarget === "titleBar") {
      setTitleBarDebug((current) => ({
        ...current,
        scale: Number(Math.max(0.2, Math.min(6, current.scale + delta)).toFixed(2)),
      }));
    }
    else if (debugTarget === "titleBar2") {
      setTitleBar2Debug((current) => ({
        ...current,
        scale: Number(Math.max(0.2, Math.min(6, current.scale + delta)).toFixed(2)),
      }));
    }
    else if (debugTarget === "marquee") setMarqueeDebug(updater);
    else if (debugTarget === "magazine") setMagazineDebug(updater);
    else if (debugTarget === "menu") setMenuDebug(updater);
    else if (debugTarget === "buttons") setButtonDebug(updater);
    else if (debugTarget === "monthly") setMonthlyDebug(updater);
    else if (debugTarget === "preview") setPreviewDebug(updater);
    else if (debugTarget === "previewCopy") setPreviewCopyDebug(updater);
    else if (debugTarget === "previewBenefits") setPreviewBenefitsDebug(updater);
    else if (debugTarget === "previewButton") setPreviewButtonDebug(updater);
    else if (debugTarget === "newsletterTitle") setNewsletterTitleDebug(updater);
    else if (debugTarget === "newsletterForm") setNewsletterFormDebug(updater);
    else if (debugTarget === "footerLogo") setFooterLogoDebug(updater);
    else if (debugTarget === "footerBar") setFooterBarDebug(updater);
    else if (debugTarget === "footerMeta") setFooterMetaDebug(updater);
    else if (debugTarget === "footerCredit") setFooterCreditDebug(updater);
    else if (debugTarget === "app") setAppDebug(updater);
  };

  const resetActive = () => {
    if (debugTarget === "topCard") setTopCardExtend(HOME_TOP_CARD_EXTEND_LOCKED);
    else if (debugTarget === "bottomCard") setBottomCardExtend(HOME_BOTTOM_CARD_EXTEND_LOCKED);
    else if (debugTarget === "previewCard") setPreviewCardExtend(HOME_PREVIEW_CARD_EXTEND_LOCKED);
    else if (debugTarget === "main") setMainDebug(HOME_MAIN_LOCKED);
    else if (debugTarget === "adExample") setAdExampleDebug(HOME_AD_EXAMPLE_LOCKED);
    else if (debugTarget === "emblem") setEmblemDebug(HOME_EMBLEM_LOCKED);
    else if (debugTarget === "title") setTitleDebug(HOME_TITLE_LOCKED);
    else if (debugTarget === "titleCircle") setTitleCircleDebug(HOME_TITLE_CIRCLE_LOCKED);
    else if (debugTarget === "titleCircle2") setTitleCircle2Debug(HOME_TITLE_CIRCLE_2_LOCKED);
    else if (debugTarget === "titleCircle3") setTitleCircle3Debug(HOME_TITLE_CIRCLE_3_LOCKED);
    else if (debugTarget === "titleCircle4") setTitleCircle4Debug(HOME_TITLE_CIRCLE_4_LOCKED);
    else if (debugTarget === "titleBar") setTitleBarDebug(HOME_TITLE_BAR_LOCKED);
    else if (debugTarget === "titleBar2") setTitleBar2Debug(HOME_TITLE_BAR_2_LOCKED);
    else if (debugTarget === "marquee") {
      setMarqueeDebug(HOME_MARQUEE_LOCKED);
      setMarqueeWidth(HOME_MARQUEE_WIDTH_LOCKED);
      setMarqueeHeight(HOME_MARQUEE_HEIGHT_LOCKED);
    }
    else if (debugTarget === "magazine") setMagazineDebug(HOME_MAGAZINE_LOCKED);
    else if (debugTarget === "menu") setMenuDebug(HOME_SIDEBAR_LOCKED);
    else if (debugTarget === "buttons") setButtonDebug(HOME_CTA_LOCKED);
    else if (debugTarget === "monthly") setMonthlyDebug(HOME_MONTHLY_LOCKED);
    else if (debugTarget === "preview") setPreviewDebug(HOME_PREVIEW_LOCKED);
    else if (debugTarget === "previewCopy") setPreviewCopyDebug(HOME_PREVIEW_COPY_LOCKED);
    else if (debugTarget === "previewBenefits") setPreviewBenefitsDebug(HOME_PREVIEW_BENEFITS_LOCKED);
    else if (debugTarget === "previewButton") setPreviewButtonDebug(HOME_PREVIEW_BUTTON_LOCKED);
    else if (debugTarget === "newsletterTitle") setNewsletterTitleDebug(HOME_NEWSLETTER_TITLE_LOCKED);
    else if (debugTarget === "newsletterForm") setNewsletterFormDebug(HOME_NEWSLETTER_FORM_LOCKED);
    else if (debugTarget === "footerLogo") setFooterLogoDebug(HOME_FOOTER_LOGO_LOCKED);
    else if (debugTarget === "footerBar") {
      setFooterBarDebug(HOME_FOOTER_BAR_LOCKED);
      setFooterBarWidth(HOME_FOOTER_BAR_WIDTH_LOCKED);
    }
    else if (debugTarget === "footerMeta") setFooterMetaDebug(HOME_FOOTER_META_LOCKED);
    else if (debugTarget === "footerCredit") setFooterCreditDebug(HOME_FOOTER_CREDIT_LOCKED);
    else if (debugTarget === "fields") setFieldDebug(HOME_LOGIN_LOCKED);
    else if (debugTarget === "loggedInFields") setLoggedInFieldDebug(HOME_LOGGED_IN_FIELDS_LOCKED);
    else if (debugTarget === "passwordField") setPasswordFieldWidth(HOME_PASSWORD_FIELD_WIDTH_LOCKED);
    else if (debugTarget === "app") {
      setAppDebug(HOME_APP_LOCKED);
      setAppWidth(HOME_APP_WIDTH_LOCKED);
      setAppHeight(HOME_APP_HEIGHT_LOCKED);
    }
    else setFieldDebug(HOME_LOGIN_LOCKED);
    if (debugTarget === "magazine") setMagazineScrollDuration(HOME_MAGAZINE_SCROLL_DURATION_LOCKED);
  };

  return (
    <main className="home-page">
      <ScaledPageCanvas
        bleedLeft={HOME_CANVAS_BLEED_LEFT}
        bleedRight={HOME_CANVAS_BLEED_RIGHT}
        className="home-page-mock home-page-canvas"
        clipViewportOverflow
        designWidth={HOME_CANVAS_WIDTH}
        offsetX={HOME_CANVAS_OFFSET_X}
        offsetY={HOME_CANVAS_OFFSET_Y}
        scale={HOME_CANVAS_SCALE}
        viewportTrimBottom={40}
        viewportClassName="home-page-canvas-viewport"
      >
      <div
        ref={marqueeRef}
        className="home-marquee home-marquee-animated"
        aria-label="Libra week marquee"
        style={{
          transform: `translate(${marqueeDebug.x}px, ${marqueeDebug.y}px) scale(${marqueeDebug.scale})`,
          transformOrigin: "top center",
          ["--marquee-width" as string]: `${marqueeWidth}px`,
          ["--marquee-height" as string]: `${marqueeHeight}px`,
          ["--marquee-intro-delay" as string]: `${marqueeIntroDelaySeconds}s`,
          ["--marquee-intro-duration" as string]: `${marqueeIntroDurationSeconds}s`,
          ["--marquee-loop-delay" as string]: `${marqueeLoopDelaySeconds}s`,
        }}
        onMouseDown={startDragTransform("marquee", marqueeDebug)}
        >
        <div className="home-marquee-intro-track">
          <div className="home-marquee-track">
            <div ref={marqueeGroupRef} className="home-marquee-group">
              {homeMarqueeItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="home-marquee-group" aria-hidden="true">
              {homeMarqueeItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="home-top-shell home-top-shell-mock">
        <aside className="home-side-column">
          <div className="home-social-rail home-social-rail-mock">
            <div
              className="home-brand-emblem-wrap"
              style={{
                transform: `translate(${combineGroupTransform(emblemDebug).x}px, ${combineGroupTransform(emblemDebug).y}px) scale(${combineGroupTransform(emblemDebug).scale})`,
                transformOrigin: "top left",
              }}
              onMouseDown={startDragTransform("emblem", emblemDebug)}
            >
              <img
                src="/astrologytoday-emblem.png"
                alt="AstrologyToday emblem"
                className={`home-brand-emblem-image${glowState.emblem > 0 ? " home-glow-animated" : ""}`}
                style={{
                  filter: `drop-shadow(0 20px 42px rgba(5, 42, 48, 0.3))${edgeDropGlow(glowState.emblem, "236, 248, 245", 1.05)}`,
                }}
              />
            </div>

            {titleCircleVisible ? (
              <div
                className="home-brand-title-bg-wrap home-brand-title-circle-wrap"
                style={{
                  transform: `translate(${combineGroupTransform(titleCircleDebug).x}px, ${combineGroupTransform(titleCircleDebug).y}px) scale(${combineGroupTransform(titleCircleDebug).scale})`,
                  transformOrigin: "top left",
                }}
                onMouseDown={startDragTransform("titleCircle", titleCircleDebug)}
              >
                <div
                  className={`home-brand-title-circle${glowState.titleCircle > 0 ? " home-glow-animated" : ""}`}
                  style={{
                    backgroundColor: titleCircleColor,
                    backgroundImage: titleCircleTexture ? "url('/title-background.png')" : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: titleCircleOpacity,
                    boxShadow: edgeBoxGlow(glowState.titleCircle, "240, 251, 255"),
                  }}
                />
              </div>
            ) : null}

            {titleCircle2Visible ? (
              <div
                className="home-brand-title-bg-wrap home-brand-title-circle-wrap"
                style={{
                  transform: `translate(${combineGroupTransform(titleCircle2Debug).x}px, ${combineGroupTransform(titleCircle2Debug).y}px) scale(${combineGroupTransform(titleCircle2Debug).scale})`,
                  transformOrigin: "top left",
                }}
                onMouseDown={startDragTransform("titleCircle2", titleCircle2Debug)}
              >
                <div
                  className={`home-brand-title-circle${glowState.titleCircle2 > 0 ? " home-glow-animated" : ""}`}
                  style={{
                    backgroundColor: titleCircle2Color,
                    backgroundImage: titleCircle2Texture ? "url('/title-background.png')" : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: titleCircle2Opacity,
                    boxShadow: edgeBoxGlow(glowState.titleCircle2, "240, 251, 255"),
                  }}
                />
              </div>
            ) : null}

            {titleCircle3Visible ? (
              <div
                className="home-brand-title-bg-wrap home-brand-title-circle-wrap"
                style={{
                  transform: `translate(${combineGroupTransform(titleCircle3Debug).x}px, ${combineGroupTransform(titleCircle3Debug).y}px) scale(${combineGroupTransform(titleCircle3Debug).scale})`,
                  transformOrigin: "top left",
                }}
                onMouseDown={startDragTransform("titleCircle3", titleCircle3Debug)}
              >
                <div
                  className={`home-brand-title-circle${glowState.titleCircle3 > 0 ? " home-glow-animated" : ""}`}
                  style={{
                    backgroundColor: titleCircle3Color,
                    backgroundImage: titleCircle3Texture ? "url('/title-background.png')" : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: titleCircle3Opacity,
                    boxShadow: edgeBoxGlow(glowState.titleCircle3, "240, 251, 255"),
                  }}
                />
              </div>
            ) : null}

            {titleCircle4Visible ? (
              <div
                className="home-brand-title-bg-wrap home-brand-title-circle-wrap"
                style={{
                  transform: `translate(${combineGroupTransform(titleCircle4Debug).x}px, ${combineGroupTransform(titleCircle4Debug).y}px) scale(${combineGroupTransform(titleCircle4Debug).scale})`,
                  transformOrigin: "top left",
                }}
                onMouseDown={startDragTransform("titleCircle4", titleCircle4Debug)}
              >
                <div
                  className={`home-brand-title-circle${glowState.titleCircle4 > 0 ? " home-glow-animated" : ""}`}
                  style={{
                    backgroundColor: titleCircle4Color,
                    backgroundImage: titleCircle4Texture ? "url('/title-background.png')" : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: titleCircle4Opacity,
                    boxShadow: edgeBoxGlow(glowState.titleCircle4, "240, 251, 255"),
                  }}
                />
              </div>
            ) : null}

            {titleBarVisible ? (
              <div
                className="home-brand-title-bg-wrap home-brand-title-bar-wrap"
                style={{
                  transform: `translate(${combineGroupTransform(titleBarDebug).x}px, ${combineGroupTransform(titleBarDebug).y}px) scale(${combineGroupTransform(titleBarDebug).scale})`,
                  transformOrigin: "top left",
                }}
                onMouseDown={startDragTransform("titleBar", titleBarDebug)}
              >
                <div
                  className={`home-brand-title-bar${glowState.titleBar > 0 ? " home-glow-animated" : ""}`}
                  style={{
                    width: `${titleBarDebug.width}px`,
                    height: `${titleBarDebug.height}px`,
                    backgroundColor: titleBarColor,
                    backgroundImage: titleBarTexture ? "url('/title-background.png')" : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: titleBarOpacity,
                    boxShadow: edgeBoxGlow(glowState.titleBar, "240, 251, 255"),
                  }}
                />
              </div>
            ) : null}

            {titleBar2Visible ? (
              <div
                className="home-brand-title-bg-wrap home-brand-title-bar-wrap"
                style={{
                  transform: `translate(${combineGroupTransform(titleBar2Debug).x}px, ${combineGroupTransform(titleBar2Debug).y}px) scale(${combineGroupTransform(titleBar2Debug).scale})`,
                  transformOrigin: "top left",
                }}
                onMouseDown={startDragTransform("titleBar2", titleBar2Debug)}
              >
                <div
                  className={`home-brand-title-bar${glowState.titleBar2 > 0 ? " home-glow-animated" : ""}`}
                  style={{
                    width: `${titleBar2Debug.width}px`,
                    height: `${titleBar2Debug.height}px`,
                    backgroundColor: titleBar2Color,
                    backgroundImage: titleBar2Texture ? "url('/title-background.png')" : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: titleBar2Opacity,
                    boxShadow: edgeBoxGlow(glowState.titleBar2, "240, 251, 255"),
                  }}
                />
              </div>
            ) : null}

            <div
              className="home-brand-title-wrap"
              style={{
                transform: `translate(${combineGroupTransform(titleDebug).x}px, ${combineGroupTransform(titleDebug).y}px) scale(${combineGroupTransform(titleDebug).scale})`,
                transformOrigin: "top left",
              }}
              onMouseDown={startDragTransform("title", titleDebug)}
            >
              <img
                src="/astrologytoday-title.png"
                alt="AstrologyToday title"
                className={`home-brand-title-image${glowState.title > 0 ? " home-glow-animated" : ""}`}
                style={{
                  filter:
                    `brightness(${titleBrightness}) ` +
                    `drop-shadow(0 0 16px rgba(255, 255, 255, ${titleGlow})) ` +
                    `drop-shadow(0 0 34px rgba(240, 251, 255, ${Math.max(0, titleGlow - 0.18)}))` +
                    edgeDropGlow(glowState.title, "255, 255, 255", 1.15),
                }}
              />
            </div>

            <nav
              className={`home-sidebar-nav${glowState.menu > 0 ? " home-glow-animated" : ""}`}
              aria-label="Site sections"
              style={{
                transform: `translate(${menuDebug.x}px, ${menuDebug.y}px) scale(${menuDebug.scale})`,
                transformOrigin: "top center",
                filter: edgeDropGlow(glowState.menu, "236, 248, 245", 1),
              }}
              onMouseDown={startDragTransform("menu", menuDebug)}
            >
              {homeNavLinks.map((item, index) => (
                <a
                  key={item.label}
                  href={localizedHref(item.href)}
                  className={`home-sidebar-link${index === 0 ? " is-active" : ""}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

          </div>
        </aside>

        <section
          className="home-dashboard home-dashboard-mock"
          style={{ paddingBottom: `${topCardExtend}px` }}
        >
          <div className="home-mock-grid">
            <section className="home-mock-intro">
              <div
                className={`home-mock-intro-copy${glowState.buttons > 0 ? " home-glow-animated" : ""}`}
              style={{
                transform: `translate(${combineGroupTransform(buttonDebug).x}px, ${combineGroupTransform(buttonDebug).y}px) scale(${combineGroupTransform(buttonDebug).scale})`,
                transformOrigin: "top left",
                filter: edgeDropGlow(glowState.buttons, "236, 248, 245", 1),
              }}
              onMouseDown={startDragTransform("buttons", buttonDebug)}
            >
                <h1>{copy.hero.title}</h1>
                <p className="home-mock-lead">{copy.hero.lead}</p>

                <div className="home-hero-actions home-mock-actions">
                  <Link
                    href={localizedHref("/love-computer")}
                    className="primary-link"
                  >
                    {copy.hero.relationshipCalculator}
                  </Link>
                  <Link
                    href="https://calendar.app.google/hXSfs9oYid9LXN5x6"
                    className="secondary-link"
                  >
                    {copy.hero.bookSession}
                  </Link>
                </div>
              </div>
            </section>

            <article
              className={`home-mock-magazine${glowState.magazine > 0 ? " home-glow-animated" : ""}`}
              id="downloads"
              style={{
                transform: `translate(${magazineDebug.x}px, ${magazineDebug.y}px) scale(${magazineDebug.scale})`,
                transformOrigin: "top left",
                filter: edgeDropGlow(glowState.magazine, "255, 255, 255", 1.08),
              }}
              onMouseDown={startDragTransform("magazine", magazineDebug)}
            >
              <a
                href="#site-bottom"
                className="home-mock-magazine-link"
                aria-label="Scroll to bottom of page"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToPageBottom();
                }}
              >
                <img
                  src="/june-2026-issue.png"
                  alt="April 2026 Astrological Report cover"
                  className="home-mock-magazine-image"
                />
              </a>
            </article>

            <section className="home-mock-nav-panel" id="services">
              <div
                className={`home-mock-login-panel${
                  (displayLifespaceSession ? glowState.loggedInFields : glowState.fields) > 0 ? " home-glow-animated" : ""
                }${
                  displayLifespaceSession ? " is-logged-in" : ""
                }`}
              style={{
                transform: `translate(${
                  (displayLifespaceSession ? loggedInFieldDebug : fieldDebug).x
                }px, ${(displayLifespaceSession ? loggedInFieldDebug : fieldDebug).y}px) scale(${
                  (displayLifespaceSession ? loggedInFieldDebug : fieldDebug).scale
                })`,
                transformOrigin: "top right",
                ["--login-extra-width" as string]: `${
                  displayLifespaceSession ? loggedInFieldDebug.width : fieldDebug.width
                }px`,
                filter: edgeDropGlow(displayLifespaceSession ? glowState.loggedInFields : glowState.fields, "236, 248, 245", 1),
              }}
              onMouseDown={displayLifespaceSession ? startDragLoggedInFields : startDragFields}
            >
                {displayLifespaceSession ? (
                  <p className="home-mock-login-status">{`Logged in: ${displayLifespaceSession.username}`}</p>
                ) : null}
                {!displayLifespaceSession ? (
                  <>
                    <input
                      type="text"
                      placeholder={copy.login.username}
                      aria-label={copy.login.username}
                      value={loginUsername}
                      onChange={(event) => setLoginUsername(event.target.value)}
                    />
                    <div className="home-mock-login-password-row">
                      {loginErrorMessage ? <p className="home-mock-login-error">{loginErrorMessage}</p> : null}
                      <input
                        type="password"
                        placeholder={copy.login.password}
                        aria-label={copy.login.password}
                        style={{ ["--password-extra-width" as string]: `${passwordFieldWidth}px` }}
                        value={loginPassword}
                        onChange={(event) => setLoginPassword(event.target.value)}
                      />
                    </div>
                  </>
                ) : null}
                <button
                  type="button"
                  className={displayLifespaceSession ? "is-logout" : undefined}
                  onClick={() => void handleLoginAction()}
                >
                  {displayLifespaceSession ? "Logout" : copy.login.login}
                </button>
              </div>
            </section>

            {false ? (
              <section
                className={`home-mock-weekly${glowState.monthly > 0 ? " home-glow-animated" : ""}`}
                id="blog"
                style={{
                  transform: `translate(${monthlyDebug.x}px, ${monthlyDebug.y}px) scale(${monthlyDebug.scale})`,
                  transformOrigin: "top left",
                  filter: edgeDropGlow(glowState.monthly, "236, 248, 245", 1),
                }}
                onMouseDown={startDragTransform("monthly", monthlyDebug)}
              >
                <p className="eyebrow">Monthly Horoscope</p>
                <h2>Keep calm and plan accordingly.</h2>
                <div className="home-monthly-layout">
                  <article className="home-monthly-card">
                    {weeklyCards.map((card) => (
                      <section key={card.key} className="home-monthly-row">
                        <h3>{card.title}</h3>
                        <p key={`${selectedSign}-${card.key}`} className="home-monthly-copy">
                          {selectedSign} {card.copy}
                        </p>
                      </section>
                    ))}
                  </article>
                  <aside className="home-sign-grid" aria-label="Sign selector">
                    {signs.map((sign) => (
                      <button
                        key={sign}
                        type="button"
                        className={`home-sign-grid-button${selectedSign === sign ? " is-active" : ""}`}
                        onClick={() => setSelectedSign(sign)}
                      >
                        {sign}
                      </button>
                    ))}
                  </aside>
                </div>
              </section>
            ) : null}

          </div>
          {debuggerVisible ? (
            <button
              type="button"
              className="home-section-resize-handle"
              aria-label="Resize top card"
              onMouseDown={(event) => {
                event.preventDefault();
                setDebugTarget("topCard");
                setResizingSection({
                  target: "topCard",
                  startY: event.clientY,
                  initialValue: topCardExtend,
                });
              }}
            />
          ) : null}
        </section>
      </section>

      <section className="home-bottom-grid home-bottom-grid-mock">
        <section
          className="home-bottom-panel home-bottom-lifespace"
          style={{ paddingBottom: `${4 + bottomCardExtend}px` }}
        >
          <div className="home-bottom-lifespace-copy">
            <p className="eyebrow">{copy.lifespace.eyebrow}</p>
            <h2>{copy.lifespace.title}</h2>
            <p className="home-newsletter-copy">{copy.lifespace.bodyOne}</p>
            <p className="home-newsletter-copy">{copy.lifespace.bodyTwo}</p>
            <div className="home-lifespace-ready">
              <p>{copy.lifespace.ready}</p>
              <ul>
                {copy.lifespace.readyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="home-newsletter-copy home-lifespace-close">{copy.lifespace.close}</p>
            <div
              className={`home-bottom-cta-row${glowState.app > 0 ? " home-glow-animated" : ""}`}
              style={{
                transform: `translate(${appDebug.x}px, ${appDebug.y}px) scale(${appDebug.scale})`,
                transformOrigin: "top left",
                filter: edgeDropGlow(glowState.app, "236, 248, 245", 1.12),
              }}
              onMouseDown={startDragTransform("app", appDebug)}
            >
              <a
                href="https://testflight.apple.com/join/5jkdSs4A"
                className="home-lifespace-card-cta"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="home-lifespace-card-shell"
                  style={{
                    ["--lifespace-card-width" as string]: `${appWidth}px`,
                    ["--lifespace-card-height" as string]: `${appHeight}px`,
                  }}
                >
                  <span className="home-lifespace-card-core">
                    <img
                      src="/lifespace-app-icon.png"
                      alt="LIFESPACE app icon"
                      className="home-lifespace-card-image"
                    />
                  </span>
                </span>
                <span className="home-lifespace-card-caption">{copy.lifespace.download}</span>
              </a>
            </div>
          </div>

          <div className="home-bottom-lifespace-visuals">
            <section
              className="home-lifespace-showcase"
              style={{
                paddingBottom: `${24 + previewCardExtend}px`,
              }}
            >
              <div
                className={`home-lifespace-preview-group${glowState.preview > 0 ? " home-glow-animated" : ""}`}
                style={{
                  transform: `translate(${previewDebug.x}px, ${previewDebug.y}px) scale(${previewDebug.scale})`,
                  transformOrigin: "top right",
                  filter: edgeDropGlow(glowState.preview, "236, 248, 245", 1),
                }}
                onMouseDown={(event) => {
                  event.stopPropagation();
                  startDragTransform("preview", previewDebug)(event);
                }}
              >
                <div className="home-lifespace-slide-image-wrap">
                  <img
                    key={previewSlides[activePreviewIndex]}
                    src={previewSlides[activePreviewIndex]}
                    alt={`LIFESPACE app preview ${activePreviewIndex + 1}`}
                    className="home-lifespace-slide-image home-lifespace-slide-image-animated"
                  />
                </div>
                <button
                  type="button"
                  className={`home-lifespace-slide-next${glowState.previewButton > 0 ? " home-glow-animated" : ""}`}
                  style={{
                    transform: `translate(${previewButtonDebug.x}px, ${previewButtonDebug.y}px) scale(${previewButtonDebug.scale})`,
                    transformOrigin: "top center",
                    filter: edgeDropGlow(glowState.previewButton, "236, 248, 245", 1),
                  }}
                  onMouseDown={(event) => {
                    event.stopPropagation();
                    startDragTransform("previewButton", previewButtonDebug)(event);
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    setActivePreviewIndex((current) => (current + 1) % previewSlides.length);
                  }}
                  aria-label="Next preview"
                >
                  <img src="/button-2.png" alt="" className="home-lifespace-slide-next-image" />
                </button>
                <div
                  className="home-lifespace-slide-copy"
                  style={{
                    transform: `translate(${previewCopyDebug.x}px, ${previewCopyDebug.y}px) scale(${previewCopyDebug.scale})`,
                    transformOrigin: "top left",
                  }}
                  onMouseDown={(event) => {
                    event.stopPropagation();
                    startDragTransform("previewCopy", previewCopyDebug)(event);
                  }}
                >
                  <p className="eyebrow">{copy.lifespace.previewEyebrow}</p>
                  <h3>{copy.lifespace.previewTitle}</h3>
                  <p>{copy.lifespace.previewBody}</p>
                  <div className="home-lifespace-slide-dots">
                    {previewSlides.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className={index === activePreviewIndex ? "is-active" : ""}
                        aria-label={`Go to preview ${index + 1}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          setActivePreviewIndex(index);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div
              className="home-lifespace-benefits"
              style={{
                marginTop: `${previewBenefitsDebug.y}px`,
                transform: `translateX(${previewBenefitsDebug.x}px) scale(${previewBenefitsDebug.scale})`,
                transformOrigin: "top center",
              }}
              onMouseDown={(event) => {
                event.stopPropagation();
                startDragTransform("previewBenefits", previewBenefitsDebug)(event);
              }}
            >
              <article>
                <h3>{copy.lifespace.benefits.dailyTitle}</h3>
                <p>{copy.lifespace.benefits.dailyBody}</p>
              </article>
              <article>
                <h3>{copy.lifespace.benefits.mealsTitle}</h3>
                <p>{copy.lifespace.benefits.mealsBody}</p>
              </article>
              <article>
                <h3>{copy.lifespace.benefits.financeTitle}</h3>
                <p>{copy.lifespace.benefits.financeBody}</p>
              </article>
            </div>
            {debuggerVisible ? (
              <button
                type="button"
                className="home-section-resize-handle home-section-resize-handle-preview"
                aria-label="Resize preview card"
                onMouseDown={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setDebugTarget("previewCard");
                  setResizingSection({
                    target: "previewCard",
                    startY: event.clientY,
                    initialValue: previewCardExtend,
                  });
                }}
              />
            ) : null}
          </div>
          {debuggerVisible ? (
            <button
              type="button"
              className="home-section-resize-handle"
              aria-label="Resize bottom card"
              onMouseDown={(event) => {
                event.preventDefault();
                setDebugTarget("bottomCard");
                setResizingSection({
                  target: "bottomCard",
                  startY: event.clientY,
                  initialValue: bottomCardExtend,
                });
              }}
            />
          ) : null}
        </section>
      </section>

      <section className="home-newsletter-strip">
        <div className="home-newsletter-shell">
          <p
            className="eyebrow home-newsletter-eyebrow"
            style={{
              transform: `translate(${newsletterTitleDebug.x}px, ${newsletterTitleDebug.y}px) scale(${newsletterTitleDebug.scale})`,
              transformOrigin: "top center",
            }}
            onMouseDown={startDragTransform("newsletterTitle", newsletterTitleDebug)}
          >
            {copy.newsletter.eyebrow}
          </p>
          <form
            className="home-newsletter-form"
            style={{
              transform: `translate(${newsletterFormDebug.x}px, ${newsletterFormDebug.y}px) scale(${newsletterFormDebug.scale})`,
              transformOrigin: "top center",
            }}
            onMouseDown={(event) => {
              event.stopPropagation();
              startDragTransform("newsletterForm", newsletterFormDebug)(event);
            }}
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              placeholder={copy.newsletter.placeholder}
              aria-label={copy.newsletter.eyebrow}
              value={newsletterEmail}
              onChange={(event) => {
                setNewsletterEmail(event.target.value);
                if (newsletterJoined) setNewsletterJoined(false);
                if (newsletterError) setNewsletterError("");
              }}
            />
            <button
              type="submit"
              className={`home-login-button home-newsletter-button${newsletterJoined ? " is-joined" : ""}`}
              disabled={newsletterSubmitting}
            >
              {newsletterJoined ? "Joined" : newsletterSubmitting ? "Joining..." : copy.newsletter.join}
            </button>
            {newsletterJoined ? (
              <p className="home-newsletter-success">
                You have been successfully added to our mailing list.
              </p>
            ) : null}
            {newsletterError ? <p className="home-newsletter-error">{newsletterError}</p> : null}
          </form>
        </div>
      </section>

      <div
        className="home-footer-meta"
        style={{
          transform: `translate(${footerMetaDebug.x}px, ${footerMetaDebug.y}px) scale(${footerMetaDebug.scale})`,
          transformOrigin: "top center",
        }}
        onMouseDown={(event) => {
          event.stopPropagation();
          startDragTransform("footerMeta", footerMetaDebug)(event);
        }}
      >
        <footer
          className="home-footer-mega"
          style={{
            transform: `translate(${footerBarDebug.x}px, ${footerBarDebug.y}px) scale(${footerBarDebug.scale})`,
            transformOrigin: "top center",
            ["--footer-bar-width" as string]: `${footerBarWidth}%`,
          }}
          onMouseDown={(event) => {
            event.stopPropagation();
            startDragTransform("footerBar", footerBarDebug)(event);
          }}
        >
          <div className="home-footer-mega-logo">
            <img
              src="/astrologytoday-emblem.png"
              alt="AstrologyToday logo"
              className="home-footer-mega-logo-image"
              style={{
                transform: `translate(${footerLogoDebug.x}px, ${footerLogoDebug.y}px) scale(${footerLogoDebug.scale})`,
                transformOrigin: "top left",
              }}
              onMouseDown={(event) => {
                event.stopPropagation();
                startDragTransform("footerLogo", footerLogoDebug)(event);
              }}
            />
          </div>
          {homeFooterColumns.map((column) => (
            <div key={column.heading} className="home-footer-mega-column">
              <h3>{column.heading}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item.label}>
                    {"disabled" in item && item.disabled ? (
                      <span>{item.label}</span>
                    ) : item.href.startsWith("mailto:") ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <Link href={localizedHref(item.href)}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="home-footer-mega-column home-footer-mega-languages">
            <h3>{copy.footer.language}</h3>
            <div className="home-footer-language-grid">
              {languageColumns.map((column, index) => (
                <ul key={index}>
                  {column.map((item) => (
                    <li key={item.code}>
                      <a
                        href={`/api/locale?locale=${item.code}&returnTo=${encodeURIComponent(
                          withExplicitLocale(item.code, "/")
                        )}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </footer>

        <p
          id="site-bottom"
          className="home-site-credit"
          style={{
            transform: `translate(${footerCreditDebug.x}px, ${footerCreditDebug.y}px) scale(${footerCreditDebug.scale})`,
            transformOrigin: "top center",
          }}
          onMouseDown={(event) => {
            event.stopPropagation();
            startDragTransform("footerCredit", footerCreditDebug)(event);
          }}
        >
          © 2026 Astrology Today. {copy.footer.credit}{" "}
          <Link href={localizedHref("/website-services")} className="home-site-credit-link">
            LIFESPACE
          </Link>
        </p>
      </div>
      </ScaledPageCanvas>

      {SHOW_AD_DEBUGGERS ? (adDebuggerVisible ? (
        <aside
          className="home-ad-compact-debugger"
          style={{ transform: `translate(${adDebuggerOffset.x}px, ${adDebuggerOffset.y}px)` }}
        >
          <div className="home-ad-compact-debugger-header">
            <p className="home-ad-compact-debugger-title">Homepage Ad Debugger</p>
            <button
              type="button"
              className="home-ad-compact-debugger-toggle-button home-ad-compact-debugger-toggle-button-inline"
              onClick={() => {
                setAdDebuggerDragging(null);
                setAdDebuggerVisible(false);
              }}
            >
              Hide
            </button>
          </div>
          <div
            className="home-ad-compact-debugger-dragbar"
            onMouseDown={(event) =>
              setAdDebuggerDragging({
                startX: event.clientX,
                startY: event.clientY,
                initialX: adDebuggerOffset.x,
                initialY: adDebuggerOffset.y,
              })
            }
          >
            Drag panel
          </div>
          <p className="home-ad-compact-debugger-readout">
            X {Math.round(adExampleDebug.x)} Y {Math.round(adExampleDebug.y)} W {Math.round(adExampleWidth)} H {Math.round(adExampleHeight)}
          </p>
          <p className="home-ad-compact-debugger-readout">
            Arrow keys move the ad. Hold Shift for larger steps.
          </p>
          <div className="home-ad-compact-debugger-grid">
            <button type="button" onClick={() => setAdExampleDebug((current) => ({ ...current, y: current.y - 8 }))}>
              Up
            </button>
            <button type="button" onClick={() => setAdExampleDebug((current) => ({ ...current, x: current.x - 8 }))}>
              Left
            </button>
            <button type="button" onClick={() => setAdExampleDebug((current) => ({ ...current, x: current.x + 8 }))}>
              Right
            </button>
            <button type="button" onClick={() => setAdExampleDebug((current) => ({ ...current, y: current.y + 8 }))}>
              Down
            </button>
            <button type="button" onClick={() => setAdExampleWidth((current) => Math.max(140, current - 8))}>
              Narrower
            </button>
            <button type="button" onClick={() => setAdExampleWidth((current) => Math.min(340, current + 8))}>
              Wider
            </button>
            <button type="button" onClick={() => setAdExampleHeight((current) => Math.max(240, current - 12))}>
              Shorter
            </button>
            <button type="button" onClick={() => setAdExampleHeight((current) => Math.min(1200, current + 12))}>
              Taller
            </button>
          </div>
          <div className="home-ad-compact-debugger-actions">
            <button type="button" className="home-ad-compact-debugger-reset" onClick={copyAdValues}>
              Copy Values
            </button>
            <button
              type="button"
              className="home-ad-compact-debugger-reset"
              onClick={() => {
                setAdExampleDebug(HOME_AD_EXAMPLE_LOCKED);
                setAdExampleWidth(HOME_AD_EXAMPLE_WIDTH_LOCKED);
                setAdExampleHeight(HOME_AD_EXAMPLE_HEIGHT_LOCKED);
                setAdDebuggerOffset(HOME_AD_DEBUGGER_OFFSET_LOCKED);
              }}
            >
              Reset
            </button>
          </div>
          {adCopyStatus ? <p className="home-ad-compact-debugger-status">{adCopyStatus}</p> : null}
        </aside>
      ) : (
        <button
          type="button"
          className="home-ad-compact-debugger-toggle-button"
          onClick={() => setAdDebuggerVisible(true)}
          aria-label="Show homepage ad tools"
          title="Show homepage ad tools"
        >
          A
        </button>
      )) : null}

      {SHOW_DEBUGGERS ? (debuggerVisible ? (
        <aside
          className="home-logo-debugger"
          style={{ transform: `translate(${debuggerOffset.x}px, ${debuggerOffset.y}px)` }}
        >
          <div
            className="home-logo-debugger-header"
            onMouseDown={(event) =>
              setDebuggerDragging({
                startX: event.clientX,
                startY: event.clientY,
                initialX: debuggerOffset.x,
                initialY: debuggerOffset.y,
              })
            }
          >
            <p>Layout Debugger</p>
            <button
              type="button"
              className="home-logo-debugger-toggle-button home-logo-debugger-toggle-button-inline"
              onClick={() => {
                setDragging(null);
                setDebuggerDragging(null);
                setDebuggerVisible(false);
              }}
            >
              Hide
            </button>
          </div>
          <label className="home-logo-debugger-select-wrap">
            <span>Element</span>
            <select
              className="home-logo-debugger-select"
              value={debugTarget}
              onChange={(event) => setDebugTarget(event.target.value as DebugTarget)}
            >
              {(DEBUGGER_VISIBLE_TARGETS as DebugTarget[]).map(
                (target) => (
                  <option key={target} value={target}>
                    {target}
                  </option>
                ),
              )}
            </select>
          </label>
          <div className="home-logo-debugger-readout">
            {debugTarget === "topCard"
              ? `Extend ${Math.round(topCardExtend)}`
              : debugTarget === "bottomCard"
              ? `Adjust ${Math.round(bottomCardExtend)}`
                : debugTarget === "previewCard"
                  ? `Adjust ${Math.round(previewCardExtend)}`
              : debugTarget === "marquee"
                ? `X ${marqueeDebug.x} Y ${marqueeDebug.y} W ${marqueeWidth} H ${marqueeHeight} S ${marqueeDebug.scale.toFixed(2)}`
              : debugTarget === "magazine"
              ? `X ${magazineDebug.x} Y ${magazineDebug.y} S ${magazineDebug.scale.toFixed(2)} Scroll ${Math.round(magazineScrollDuration)}ms`
              : debugTarget === "fields"
              ? `X ${fieldDebug.x} Y ${fieldDebug.y} W ${fieldDebug.width} S ${fieldDebug.scale.toFixed(2)}`
              : debugTarget === "loggedInFields"
              ? `X ${loggedInFieldDebug.x} Y ${loggedInFieldDebug.y} W ${loggedInFieldDebug.width} S ${loggedInFieldDebug.scale.toFixed(2)}`
              : debugTarget === "passwordField"
              ? `W ${passwordFieldWidth}`
              : debugTarget === "app"
                ? `X ${appDebug.x} Y ${appDebug.y} W ${appWidth} H ${appHeight} S ${appDebug.scale.toFixed(2)}`
                : debugTarget === "footerBar"
                ? `X ${footerBarDebug.x} Y ${footerBarDebug.y} W ${footerBarWidth}% S ${footerBarDebug.scale.toFixed(2)}`
                : debugTarget === "titleBar"
                ? `X ${titleBarDebug.x} Y ${titleBarDebug.y} S ${titleBarDebug.scale.toFixed(2)} W ${titleBarDebug.width} H ${titleBarDebug.height}`
                : debugTarget === "titleBar2"
                  ? `X ${titleBar2Debug.x} Y ${titleBar2Debug.y} S ${titleBar2Debug.scale.toFixed(2)} W ${titleBar2Debug.width} H ${titleBar2Debug.height}`
                  : `X ${activeTransform.x} Y ${activeTransform.y} S ${activeTransform.scale.toFixed(2)}`}
          </div>
          <div className="home-logo-debugger-hint">Arrow keys nudge. Hold Shift for bigger steps. Drag elements directly.</div>
          <div className="home-logo-debugger-grid">
            <button
              type="button"
              onClick={() =>
                debugTarget === "topCard"
                  ? setTopCardExtend((current) => current - 16)
                  : debugTarget === "bottomCard"
                    ? setBottomCardExtend((current) => clampBottomCardAdjust(current - 16))
                    : debugTarget === "previewCard"
                      ? setPreviewCardExtend((current) => clampPreviewCardAdjust(current - 16))
                : debugTarget === "fields"
                  ? setFieldDebug((current) => ({ ...current, y: current.y - 4 }))
                : debugTarget === "loggedInFields"
                  ? setLoggedInFieldDebug((current) => ({ ...current, y: current.y - 4 }))
                : debugTarget === "passwordField"
                  ? undefined
                  : nudgeTransform("y", -4)
              }
            >
              Up
            </button>
            <button
              type="button"
              onClick={() =>
                debugTarget === "topCard" || debugTarget === "bottomCard" || debugTarget === "previewCard"
                  ? undefined
                : debugTarget === "fields"
                  ? setFieldDebug((current) => ({ ...current, x: current.x - 4 }))
                : debugTarget === "loggedInFields"
                  ? setLoggedInFieldDebug((current) => ({ ...current, x: current.x - 4 }))
                : debugTarget === "passwordField"
                  ? undefined
                  : nudgeTransform("x", -4)
              }
            >
              Left
            </button>
            <button
              type="button"
              onClick={() =>
                debugTarget === "topCard" || debugTarget === "bottomCard" || debugTarget === "previewCard"
                  ? undefined
                : debugTarget === "fields"
                  ? setFieldDebug((current) => ({ ...current, x: current.x + 4 }))
                : debugTarget === "loggedInFields"
                  ? setLoggedInFieldDebug((current) => ({ ...current, x: current.x + 4 }))
                : debugTarget === "passwordField"
                  ? undefined
                  : nudgeTransform("x", 4)
              }
            >
              Right
            </button>
            <button
              type="button"
              onClick={() =>
                debugTarget === "topCard"
                  ? setTopCardExtend((current) => current + 16)
                  : debugTarget === "bottomCard"
                    ? setBottomCardExtend((current) => clampBottomCardAdjust(current + 16))
                    : debugTarget === "previewCard"
                      ? setPreviewCardExtend((current) => clampPreviewCardAdjust(current + 16))
                : debugTarget === "fields"
                  ? setFieldDebug((current) => ({ ...current, y: current.y + 4 }))
                : debugTarget === "loggedInFields"
                  ? setLoggedInFieldDebug((current) => ({ ...current, y: current.y + 4 }))
                : debugTarget === "passwordField"
                  ? undefined
                  : nudgeTransform("y", 4)
              }
            >
              Down
            </button>
            <button
              type="button"
              onClick={() =>
                debugTarget === "topCard"
                  ? setTopCardExtend((current) => current + 24)
                  : debugTarget === "bottomCard"
                    ? setBottomCardExtend((current) => clampBottomCardAdjust(current + 24))
                    : debugTarget === "previewCard"
                      ? setPreviewCardExtend((current) => clampPreviewCardAdjust(current + 24))
                : debugTarget === "marquee"
                  ? setMarqueeWidth((current) => current + 24)
                : debugTarget === "fields"
                  ? setFieldDebug((current) => ({ ...current, width: current.width + 16 }))
                : debugTarget === "loggedInFields"
                  ? setLoggedInFieldDebug((current) => ({ ...current, width: current.width + 16 }))
                : debugTarget === "passwordField"
                  ? setPasswordFieldWidth((current) => current + 16)
                : debugTarget === "app"
                    ? setAppWidth((current) => current + 16)
                  : debugTarget === "footerBar"
                    ? setFooterBarWidth((current) => current + 4)
                  : debugTarget === "titleBar"
                    ? setTitleBarDebug((current) => ({ ...current, width: current.width + 24 }))
                    : debugTarget === "titleBar2"
                      ? setTitleBar2Debug((current) => ({ ...current, width: current.width + 24 }))
                      : resizeTransform(0.08)
              }
            >
              {debugTarget === "topCard" || debugTarget === "bottomCard" || debugTarget === "previewCard"
                ? debugTarget === "previewCard" || debugTarget === "bottomCard" ? "More" : "Taller"
                : debugTarget === "marquee"
                  ? "Wider"
                : debugTarget === "fields" || debugTarget === "loggedInFields"
                  ? "Longer"
                : debugTarget === "passwordField"
                  ? "Longer"
                : debugTarget === "app"
                  ? "Wider"
                : debugTarget === "footerBar"
                  ? "Longer"
                  : debugTarget === "titleBar" || debugTarget === "titleBar2"
                    ? "Longer"
                    : "Bigger"}
            </button>
            <button
              type="button"
              onClick={() =>
                debugTarget === "topCard"
                  ? setTopCardExtend((current) => current - 24)
                  : debugTarget === "bottomCard"
                    ? setBottomCardExtend((current) => clampBottomCardAdjust(current - 24))
                    : debugTarget === "previewCard"
                      ? setPreviewCardExtend((current) => clampPreviewCardAdjust(current - 24))
                : debugTarget === "marquee"
                  ? setMarqueeWidth((current) => Math.max(200, current - 24))
                : debugTarget === "fields"
                  ? setFieldDebug((current) => ({ ...current, width: current.width - 16 }))
                : debugTarget === "loggedInFields"
                  ? setLoggedInFieldDebug((current) => ({ ...current, width: current.width - 16 }))
                : debugTarget === "passwordField"
                  ? setPasswordFieldWidth((current) => Math.max(-160, current - 16))
                : debugTarget === "app"
                    ? setAppWidth((current) => Math.max(140, current - 16))
                  : debugTarget === "footerBar"
                    ? setFooterBarWidth((current) => Math.max(40, current - 4))
                  : debugTarget === "titleBar"
                    ? setTitleBarDebug((current) => ({ ...current, width: Math.max(160, current.width - 24) }))
                    : debugTarget === "titleBar2"
                      ? setTitleBar2Debug((current) => ({ ...current, width: Math.max(160, current.width - 24) }))
                      : resizeTransform(-0.08)
              }
            >
              {debugTarget === "topCard" || debugTarget === "bottomCard" || debugTarget === "previewCard"
                ? debugTarget === "previewCard" || debugTarget === "bottomCard" ? "Less" : "Shorter"
                : debugTarget === "marquee"
                  ? "Skinnier"
                : debugTarget === "fields" || debugTarget === "loggedInFields"
                  ? "Shorter"
                : debugTarget === "passwordField"
                  ? "Shorter"
                : debugTarget === "app"
                  ? "Skinnier"
                : debugTarget === "footerBar"
                  ? "Shorter"
                  : debugTarget === "titleBar" || debugTarget === "titleBar2"
                    ? "Shorter"
                    : "Smaller"}
            </button>
            <button type="button" onClick={resetActive}>
              Reset
            </button>
          </div>
          {debugTarget === "titleBar" || debugTarget === "titleBar2" ? (
            <div className="home-logo-debugger-grid home-logo-debugger-grid-secondary">
              <button
                type="button"
                onClick={() =>
                  debugTarget === "titleBar"
                    ? setTitleBarDebug((current) => ({ ...current, height: current.height + 8 }))
                    : setTitleBar2Debug((current) => ({ ...current, height: current.height + 8 }))
                }
              >
                Taller
              </button>
              <button
                type="button"
                onClick={() =>
                  debugTarget === "titleBar"
                    ? setTitleBarDebug((current) => ({ ...current, height: Math.max(32, current.height - 8) }))
                    : setTitleBar2Debug((current) => ({ ...current, height: Math.max(32, current.height - 8) }))
                }
              >
                Flatter
              </button>
            </div>
          ) : null}
          {debugTarget === "fields" || debugTarget === "loggedInFields" || debugTarget === "app" || debugTarget === "marquee" ? (
            <div className="home-logo-debugger-grid home-logo-debugger-grid-secondary">
              <button
                type="button"
                onClick={() =>
                  debugTarget === "marquee"
                    ? setMarqueeHeight((current) => current + 8)
                    : debugTarget === "fields"
                    ? setFieldDebug((current) => ({
                        ...current,
                        scale: Number(Math.max(0.5, Math.min(2.5, current.scale + 0.06)).toFixed(2)),
                      }))
                    : debugTarget === "loggedInFields"
                    ? setLoggedInFieldDebug((current) => ({
                        ...current,
                        scale: Number(Math.max(0.5, Math.min(2.5, current.scale + 0.06)).toFixed(2)),
                      }))
                    : setAppHeight((current) => current + 16)
                }
              >
                {debugTarget === "marquee" ? "Taller" : debugTarget === "fields" || debugTarget === "loggedInFields" ? "Bigger" : "Taller"}
              </button>
              <button
                type="button"
                onClick={() =>
                  debugTarget === "marquee"
                    ? setMarqueeHeight((current) => Math.max(12, current - 8))
                    : debugTarget === "fields"
                    ? setFieldDebug((current) => ({
                        ...current,
                        scale: Number(Math.max(0.5, Math.min(2.5, current.scale - 0.06)).toFixed(2)),
                      }))
                    : debugTarget === "loggedInFields"
                    ? setLoggedInFieldDebug((current) => ({
                        ...current,
                        scale: Number(Math.max(0.5, Math.min(2.5, current.scale - 0.06)).toFixed(2)),
                      }))
                    : setAppHeight((current) => Math.max(140, current - 16))
                }
              >
                {debugTarget === "marquee" ? "Shorter" : debugTarget === "fields" || debugTarget === "loggedInFields" ? "Smaller" : "Shorter"}
              </button>
            </div>
          ) : null}
          {debugTarget === "titleCircle" || debugTarget === "titleCircle2" || debugTarget === "titleCircle3" || debugTarget === "titleCircle4" || debugTarget === "titleBar" || debugTarget === "titleBar2" ? (
            <div className="home-logo-debugger-color">
              <label>
                Color
                <input
                  type="color"
                  value={
                    debugTarget === "titleCircle"
                      ? titleCircleColor
                      : debugTarget === "titleCircle2"
                        ? titleCircle2Color
                        : debugTarget === "titleCircle3"
                          ? titleCircle3Color
                          : debugTarget === "titleCircle4"
                            ? titleCircle4Color
                        : debugTarget === "titleBar"
                          ? titleBarColor
                          : titleBar2Color
                  }
                  onChange={(event) =>
                    debugTarget === "titleCircle"
                      ? setTitleCircleColor(event.target.value)
                      : debugTarget === "titleCircle2"
                        ? setTitleCircle2Color(event.target.value)
                        : debugTarget === "titleCircle3"
                          ? setTitleCircle3Color(event.target.value)
                          : debugTarget === "titleCircle4"
                            ? setTitleCircle4Color(event.target.value)
                        : debugTarget === "titleBar"
                          ? setTitleBarColor(event.target.value)
                          : setTitleBar2Color(event.target.value)
                  }
                />
              </label>
              <div className="home-logo-debugger-readout">
                {debugTarget === "titleCircle"
                  ? `Opacity ${titleCircleOpacity.toFixed(2)}`
                  : debugTarget === "titleCircle2"
                  ? `Opacity ${titleCircle2Opacity.toFixed(2)}`
                    : debugTarget === "titleCircle3"
                      ? `Opacity ${titleCircle3Opacity.toFixed(2)}`
                      : debugTarget === "titleCircle4"
                        ? `Opacity ${titleCircle4Opacity.toFixed(2)}`
                    : debugTarget === "titleBar"
                      ? `Opacity ${titleBarOpacity.toFixed(2)}`
                      : `Opacity ${titleBar2Opacity.toFixed(2)}`}
              </div>
              <div className="home-logo-debugger-grid home-logo-debugger-grid-secondary">
                <button
                  type="button"
                  onClick={() =>
                    debugTarget === "titleCircle"
                      ? setTitleCircleOpacity((current) => Number(Math.min(1, current + 0.05).toFixed(2)))
                      : debugTarget === "titleCircle2"
                        ? setTitleCircle2Opacity((current) => Number(Math.min(1, current + 0.05).toFixed(2)))
                        : debugTarget === "titleCircle3"
                          ? setTitleCircle3Opacity((current) => Number(Math.min(1, current + 0.05).toFixed(2)))
                          : debugTarget === "titleCircle4"
                            ? setTitleCircle4Opacity((current) => Number(Math.min(1, current + 0.05).toFixed(2)))
                        : debugTarget === "titleBar"
                          ? setTitleBarOpacity((current) => Number(Math.min(1, current + 0.05).toFixed(2)))
                          : setTitleBar2Opacity((current) => Number(Math.min(1, current + 0.05).toFixed(2)))
                  }
                >
                  More Opaque
                </button>
                <button
                  type="button"
                  onClick={() =>
                    debugTarget === "titleCircle"
                      ? setTitleCircleOpacity((current) => Number(Math.max(0.05, current - 0.05).toFixed(2)))
                      : debugTarget === "titleCircle2"
                        ? setTitleCircle2Opacity((current) => Number(Math.max(0.05, current - 0.05).toFixed(2)))
                        : debugTarget === "titleCircle3"
                          ? setTitleCircle3Opacity((current) => Number(Math.max(0.05, current - 0.05).toFixed(2)))
                          : debugTarget === "titleCircle4"
                            ? setTitleCircle4Opacity((current) => Number(Math.max(0.05, current - 0.05).toFixed(2)))
                        : debugTarget === "titleBar"
                          ? setTitleBarOpacity((current) => Number(Math.max(0.05, current - 0.05).toFixed(2)))
                          : setTitleBar2Opacity((current) => Number(Math.max(0.05, current - 0.05).toFixed(2)))
                  }
                >
                  Less Opaque
                </button>
              </div>
              <button
                type="button"
                className="home-logo-debugger-toggle"
                onClick={() => {
                  if (debugTarget === "titleCircle") setTitleCircleVisible((current) => !current);
                  else if (debugTarget === "titleCircle2") setTitleCircle2Visible((current) => !current);
                  else if (debugTarget === "titleCircle3") setTitleCircle3Visible((current) => !current);
                  else if (debugTarget === "titleCircle4") setTitleCircle4Visible((current) => !current);
                  else if (debugTarget === "titleBar") setTitleBarVisible((current) => !current);
                  else setTitleBar2Visible((current) => !current);
                }}
              >
                {debugTarget === "titleCircle"
                  ? titleCircleVisible
                    ? "Hide Element"
                    : "Show Element"
                  : debugTarget === "titleCircle2"
                    ? titleCircle2Visible
                      ? "Hide Element"
                      : "Show Element"
                    : debugTarget === "titleCircle3"
                      ? titleCircle3Visible
                        ? "Hide Element"
                        : "Show Element"
                      : debugTarget === "titleCircle4"
                        ? titleCircle4Visible
                          ? "Hide Element"
                          : "Show Element"
                    : debugTarget === "titleBar"
                      ? titleBarVisible
                        ? "Hide Element"
                        : "Show Element"
                      : titleBar2Visible
                        ? "Hide Element"
                        : "Show Element"}
              </button>
              <button
                type="button"
                className="home-logo-debugger-toggle"
                onClick={() =>
                  debugTarget === "titleCircle"
                    ? setTitleCircleTexture((current) => !current)
                    : debugTarget === "titleCircle2"
                    ? setTitleCircle2Texture((current) => !current)
                      : debugTarget === "titleCircle3"
                        ? setTitleCircle3Texture((current) => !current)
                        : debugTarget === "titleCircle4"
                          ? setTitleCircle4Texture((current) => !current)
                      : debugTarget === "titleBar"
                        ? setTitleBarTexture((current) => !current)
                        : setTitleBar2Texture((current) => !current)
                }
              >
                {debugTarget === "titleCircle"
                  ? titleCircleTexture
                    ? "Use Solid Fill"
                    : "Use Image Fill"
                : debugTarget === "titleCircle2"
                  ? titleCircle2Texture
                    ? "Use Solid Fill"
                    : "Use Image Fill"
                  : debugTarget === "titleCircle3"
                    ? titleCircle3Texture
                      ? "Use Solid Fill"
                      : "Use Image Fill"
                    : debugTarget === "titleCircle4"
                      ? titleCircle4Texture
                        ? "Use Solid Fill"
                        : "Use Image Fill"
                  : debugTarget === "titleBar"
                    ? titleBarTexture
                      ? "Use Solid Fill"
                        : "Use Image Fill"
                      : titleBar2Texture
                        ? "Use Solid Fill"
                        : "Use Image Fill"}
              </button>
            </div>
          ) : null}
          {debugTarget === "title" ? (
            <div className="home-logo-debugger-color">
              <div className="home-logo-debugger-readout">
                {`Glow ${titleGlow.toFixed(2)} | Brightness ${titleBrightness.toFixed(2)}`}
              </div>
              <div className="home-logo-debugger-grid home-logo-debugger-grid-secondary">
                <button
                  type="button"
                  onClick={() => setTitleGlow((current) => Number(Math.min(1, current + 0.04).toFixed(2)))}
                >
                  More Glow
                </button>
                <button
                  type="button"
                  onClick={() => setTitleGlow((current) => Number(Math.max(0, current - 0.04).toFixed(2)))}
                >
                  Less Glow
                </button>
              </div>
              <div className="home-logo-debugger-grid home-logo-debugger-grid-secondary">
                <button
                  type="button"
                  onClick={() =>
                    setTitleBrightness((current) => Number(Math.min(2, current + 0.05).toFixed(2)))
                  }
                >
                  Brighter
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setTitleBrightness((current) => Number(Math.max(0.4, current - 0.05).toFixed(2)))
                  }
                >
                  Darker
                </button>
              </div>
            </div>
          ) : null}
          <div className="home-logo-debugger-color">
            <div className="home-logo-debugger-readout">{`Edge Glow ${activeGlow.toFixed(2)}`}</div>
            <div className="home-logo-debugger-grid home-logo-debugger-grid-secondary">
              <button type="button" onClick={() => adjustGlow(0.05)}>
                More Glow
              </button>
              <button type="button" onClick={() => adjustGlow(-0.05)}>
                Less Glow
              </button>
            </div>
          </div>
          {debugTarget === "magazine" ? (
            <div className="home-logo-debugger-color">
              <div className="home-logo-debugger-readout">{`Scroll Speed ${Math.round(magazineScrollDuration)}ms`}</div>
              <div className="home-logo-debugger-grid home-logo-debugger-grid-secondary">
                <button
                  type="button"
                  onClick={() =>
                    setMagazineScrollDuration((current) => Math.min(5000, current + 150))
                  }
                >
                  Slower
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setMagazineScrollDuration((current) => Math.max(300, current - 150))
                  }
                >
                  Faster
                </button>
              </div>
            </div>
          ) : null}
        </aside>
      ) : (
      <button
        type="button"
        className="home-logo-debugger-toggle-button"
        onClick={() => {
          setDragging(null);
          setDebuggerVisible(true);
        }}
        aria-label="Show debugger"
        title="Show debugger"
      >
        D
      </button>
      )) : null}
    </main>
  );
}
