"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import SiteFooter from "../shared/SiteFooter";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { SHOW_DEBUGGERS } from "../../lib/debug";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getClientQuestionnaireCopy } from "../../lib/clientQuestionnaireCopy";
import { getClientSubscriptionPlanKey } from "../../lib/square";
import {
  attachSquareCheckoutToIntake,
  createClientIntake,
} from "../../lib/firebase/lifespace";

const QUESTIONNAIRE_STORAGE_KEY = "astrologytoday-client-questionnaire-v1";
const QUESTIONNAIRE_DEBUG_STORAGE_KEY = "astrologytoday-client-questionnaire-debug-v2";
const QUESTIONNAIRE_CANVAS_SCALE = 0.71;
const QUESTIONNAIRE_CANVAS_WIDTH = 1760;
const QUESTIONNAIRE_CANVAS_OFFSET_X = 0;
const QUESTIONNAIRE_CANVAS_OFFSET_Y = 16;

type OptionItem = {
  value: string;
  label: string;
};

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
  "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
  "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
  "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe",
];

const workFields = [
  "Accounting", "Agriculture", "Animals", "Architecture", "Astrology", "Astronomy",
  "Automobiles", "Business", "Casino", "Chemistry", "Child Care", "Cleaning",
  "Design", "Education", "Electricity", "Emergency Services", "Entertainment",
  "Ethics", "Event Planning", "Fashion & Beauty", "Finance", "Fitness", "Food",
  "Forestry", "Fundraising", "Government", "Jewellery", "Landscaping", "Law",
  "Library", "Logistics", "Locomotives", "Medicine", "Metallurgy", "Mixology",
  "Mortuary Services", "Museum", "Painting", "Pest Control", "Plumbing",
  "Postal Service", "Psychology", "Real Estate", "Social Work", "Software",
  "Spirituality", "Sports", "Statistics", "Technology", "Theme Parks",
  "Other", "Undecided",
];

const sexualPreferences = [
  "Heterosexual",
  "Homosexual",
  "Bisexual",
  "Pansexual",
  "Asexual",
  "Questioning",
  "Prefer not to say",
  "Other",
];

const drugs = [
  "Alcohol",
  "Cannabis",
  "Nicotine",
  "Coffee",
  "Psychedelics",
  "Stimulants",
  "Opioids",
  "Benzodiazepines",
  "MDMA (e.g., ecstasy)",
  "Cocaine",
  "Heroin",
  "Methamphetamine",
  "Ketamine",
  "Fentanyl",
  "Other",
  "No drug use",
];

const helpOptions = [
  "Depression",
  "Anxiety",
  "Addiction",
  "Eating disorder",
  "Sleep disorder",
  "Fitness training",
  "Career counseling",
  "Spiritual counseling",
  "Relationship counseling",
  "Something else",
];

const spiritualAffiliations = [
  "Atheist", "Agnostic", "Spiritual but not religious", "Christianity", "Catholicism",
  "Orthodox Christianity", "Protestant Christianity", "Judaism", "Islam", "Sufism",
  "Hinduism", "Sikhism", "Buddhism", "Taoism", "Confucianism", "Jainism",
  "Zoroastrianism", "Baháʼí", "Paganism", "Wicca", "Shamanism", "Animism",
  "Indigenous spirituality", "Occultism", "Hermeticism", "New Age", "Astrology",
  "Esoteric Christianity", "Gnosticism", "Mysticism", "Not sure", "Prefer not to say",
];

const socioeconomicOptions = [
  "No income",
  "$0–$20,000",
  "$20,000–$40,000",
  "$40,000–$70,000",
  "$70,000–$100,000",
  "$100,000–$200,000",
  "$200,000+",
];

const livingSituations = ["Rent/own", "Live with parents", "Homeless", "Nomadic", "Couchsurfing", "Other"];

const fastingOptions = [
  "Yes, intermittent fasting",
  "Yes, long fasting",
  "Yes, dry fasting",
  "No, never fasted",
];

const workoutOptions = [
  "Once a month",
  "Once a week",
  "More than once a week",
  "Never",
];

const frequencyOptions = ["Monthly", "Biweekly", "Weekly"] as const;
const durationOptions = ["30-minute", "60-minute"] as const;

const priceMap: Record<(typeof frequencyOptions)[number], Record<(typeof durationOptions)[number], string>> = {
  Weekly: {
    "30-minute": "$82.99/month",
    "60-minute": "$102.99/month",
  },
  Biweekly: {
    "30-minute": "$41.99/month",
    "60-minute": "$79.99/month",
  },
  Monthly: {
    "30-minute": "$21.99/month",
    "60-minute": "$29.99/month",
  },
};

type QuestionnaireAnswers = {
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  countryOfOrigin: string;
  fieldOfWork: string;
  sexualPreference: string;
  drugUse: string[];
  helpSeeking: string[];
  spiritualAffiliation: string;
  socioeconomicStatus: string;
  livingSituation: string;
  liveAlone: string;
  fastingHistory: string;
  workoutFrequency: string;
  vitamins: string;
  medications: string;
  sessionFrequency: string;
  sessionDuration: string;
};

const defaultAnswers: QuestionnaireAnswers = {
  birthDay: "",
  birthMonth: "",
  birthYear: "",
  countryOfOrigin: "",
  fieldOfWork: "",
  sexualPreference: "",
  drugUse: [],
  helpSeeking: [],
  spiritualAffiliation: "",
  socioeconomicStatus: "",
  livingSituation: "",
  liveAlone: "",
  fastingHistory: "",
  workoutFrequency: "",
  vitamins: "",
  medications: "",
  sessionFrequency: "",
  sessionDuration: "",
};

type StepId =
  | "birth"
  | "field"
  | "sexualPreference"
  | "drugUse"
  | "help"
  | "spirituality"
  | "socioeconomic"
  | "livingSituation"
  | "liveAlone"
  | "fasting"
  | "workout"
  | "vitamins"
  | "medications"
  | "session";

type QuestionnaireDebugTarget = "footer" | "footerLogo";

type QuestionnaireFooterDebug = {
  footerSpacing: number;
  footerLogo: {
    x: number;
    y: number;
    scale: number;
  };
};

const QUESTIONNAIRE_DEFAULT_FOOTER_DEBUG: QuestionnaireFooterDebug = {
  footerSpacing: 52,
  footerLogo: {
    x: 0,
    y: 0,
    scale: 1,
  },
};

const QUESTIONNAIRE_LOCKED_FOOTER_DEBUG: Partial<Record<StepId, QuestionnaireFooterDebug>> = {
  birth: {
    footerSpacing: 52,
    footerLogo: {
      x: 16,
      y: 16,
      scale: 1.12,
    },
  },
};

const countryCodeMap: Record<string, string> = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  Andorra: "AD",
  Angola: "AO",
  "Antigua and Barbuda": "AG",
  Argentina: "AR",
  Armenia: "AM",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bhutan: "BT",
  Bolivia: "BO",
  "Bosnia and Herzegovina": "BA",
  Botswana: "BW",
  Brazil: "BR",
  Brunei: "BN",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  "Cabo Verde": "CV",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  "Central African Republic": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  Colombia: "CO",
  Comoros: "KM",
  Congo: "CG",
  "Costa Rica": "CR",
  Croatia: "HR",
  Cuba: "CU",
  Cyprus: "CY",
  "Czech Republic": "CZ",
  "Democratic Republic of the Congo": "CD",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Republic": "DO",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Greece: "GR",
  Grenada: "GD",
  Guatemala: "GT",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  Honduras: "HN",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Ireland: "IE",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  Laos: "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  "Marshall Islands": "MH",
  Mauritania: "MR",
  Mauritius: "MU",
  Mexico: "MX",
  Micronesia: "FM",
  Moldova: "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  Netherlands: "NL",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  "North Korea": "KP",
  "North Macedonia": "MK",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  Palestine: "PS",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  Poland: "PL",
  Portugal: "PT",
  Qatar: "QA",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Korea": "KR",
  "South Sudan": "SS",
  Spain: "ES",
  "Sri Lanka": "LK",
  Sudan: "SD",
  Suriname: "SR",
  Sweden: "SE",
  Switzerland: "CH",
  Syria: "SY",
  Taiwan: "TW",
  Tajikistan: "TJ",
  Tanzania: "TZ",
  Thailand: "TH",
  "Timor-Leste": "TL",
  Togo: "TG",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  "Vatican City": "VA",
  Venezuela: "VE",
  Vietnam: "VN",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
};

function localizeCountries(locale: SupportedLocale) {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: "region" });
    return countries.map((country) => ({
      value: country,
      label: displayNames.of(countryCodeMap[country]) ?? country,
    }));
  } catch {
    return countries.map((country) => ({ value: country, label: country }));
  }
}

function localizeOptions(options: readonly string[], labels: Record<string, string>): OptionItem[] {
  return options.map((option) => ({
    value: option,
    label: labels[option] ?? option,
  }));
}

function WheelField({
  value,
  options,
  onChange,
  ariaLabel,
  emptyLabel,
}: {
  value: string;
  options: OptionItem[];
  onChange: (next: string) => void;
  ariaLabel: string;
  emptyLabel: string;
}) {
  return (
    <div className="client-questionnaire-wheel-wrap">
      <select
        className="client-questionnaire-wheel"
        size={6}
        value={value}
        aria-label={ariaLabel}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="" disabled>
          {emptyLabel}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function YesNoField({
  value,
  onChange,
  labels,
}: {
  value: string;
  onChange: (next: string) => void;
  labels: { yes: string; no: string };
}) {
  const options = [
    { value: "Yes", label: labels.yes },
    { value: "No", label: labels.no },
  ];

  return (
    <div className="client-questionnaire-binary">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`client-questionnaire-binary-option${value === option.value ? " is-selected" : ""}`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function formatDateInput(value: string, maxLength: number) {
  return value.replace(/\D/g, "").slice(0, maxLength);
}

export default function ClientSubscriptionQuestionnairePage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getClientQuestionnaireCopy(locale);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(defaultAnswers);
  const [stepIndex, setStepIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const [debugTarget, setDebugTarget] = useState<QuestionnaireDebugTarget>("footerLogo");
  const [debuggerOffset, setDebuggerOffset] = useState({ x: 0, y: 0 });
  const [copyStatus, setCopyStatus] = useState("");
  const [footerDebugByStep, setFooterDebugByStep] =
    useState<Partial<Record<StepId, QuestionnaireFooterDebug>>>(QUESTIONNAIRE_LOCKED_FOOTER_DEBUG);
  const timeoutRef = useRef<number | null>(null);
  const copyTimeoutRef = useRef<number | null>(null);
  const debuggerDraggingRef = useRef<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(QUESTIONNAIRE_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as Partial<QuestionnaireAnswers> & { stepIndex?: number };
      setAnswers((current) => ({ ...current, ...parsed }));
      if (typeof parsed.stepIndex === "number") setStepIndex(parsed.stepIndex);
    } catch {
      window.localStorage.removeItem(QUESTIONNAIRE_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem(QUESTIONNAIRE_DEBUG_STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as {
        debugTarget?: QuestionnaireDebugTarget;
        debuggerOffset?: { x?: number; y?: number };
        footerDebugByStep?: Partial<Record<StepId, Partial<QuestionnaireFooterDebug>>>;
      };
      if (parsed.debugTarget === "footer" || parsed.debugTarget === "footerLogo") {
        setDebugTarget(parsed.debugTarget);
      }
      if (parsed.debuggerOffset) {
        setDebuggerOffset({
          x: Number(parsed.debuggerOffset.x ?? 0),
          y: Number(parsed.debuggerOffset.y ?? 0),
        });
      }
      if (parsed.footerDebugByStep) {
        const nextState: Partial<Record<StepId, QuestionnaireFooterDebug>> = {};
        for (const [step, debug] of Object.entries(parsed.footerDebugByStep) as [StepId, Partial<QuestionnaireFooterDebug>][]) {
          nextState[step] = {
            footerSpacing: Number(debug.footerSpacing ?? QUESTIONNAIRE_DEFAULT_FOOTER_DEBUG.footerSpacing),
            footerLogo: {
              x: Number(debug.footerLogo?.x ?? QUESTIONNAIRE_DEFAULT_FOOTER_DEBUG.footerLogo.x),
              y: Number(debug.footerLogo?.y ?? QUESTIONNAIRE_DEFAULT_FOOTER_DEBUG.footerLogo.y),
              scale: Number(debug.footerLogo?.scale ?? QUESTIONNAIRE_DEFAULT_FOOTER_DEBUG.footerLogo.scale),
            },
          };
        }
        setFooterDebugByStep(nextState);
      }
    } catch {
      window.localStorage.removeItem(QUESTIONNAIRE_DEBUG_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      QUESTIONNAIRE_STORAGE_KEY,
      JSON.stringify({ ...answers, stepIndex }),
    );
  }, [answers, stepIndex]);

  useEffect(() => {
    window.localStorage.setItem(
      QUESTIONNAIRE_DEBUG_STORAGE_KEY,
      JSON.stringify({ debugTarget, debuggerOffset, footerDebugByStep }),
    );
  }, [debugTarget, debuggerOffset, footerDebugByStep]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!debuggerDraggingRef.current) return;
      const dx = event.clientX - debuggerDraggingRef.current.startX;
      const dy = event.clientY - debuggerDraggingRef.current.startY;
      setDebuggerOffset({
        x: debuggerDraggingRef.current.initialX + dx,
        y: debuggerDraggingRef.current.initialY + dy,
      });
    };

    const handleMouseUp = () => {
      debuggerDraggingRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const steps = useMemo(() => {
    const base: StepId[] = [
      "birth",
      "field",
      "sexualPreference",
      "drugUse",
      "help",
      "spirituality",
      "socioeconomic",
      "livingSituation",
    ];

    if (answers.livingSituation === "Rent/own") {
      base.push("liveAlone");
    }

    base.push("fasting", "workout", "vitamins", "medications", "session");
    return base;
  }, [answers.livingSituation]);

  useEffect(() => {
    if (stepIndex > steps.length - 1) {
      setStepIndex(Math.max(0, steps.length - 1));
    }
  }, [stepIndex, steps.length]);

  const currentStep = steps[stepIndex];
  const activeFooterDebug = footerDebugByStep[currentStep] ?? QUESTIONNAIRE_DEFAULT_FOOTER_DEBUG;
  const countryOptions = useMemo(() => localizeCountries(locale), [locale]);
  const workFieldOptions = useMemo(
    () => localizeOptions(workFields, copy.workFieldLabels),
    [copy.workFieldLabels],
  );
  const sexualPreferenceOptions = useMemo(
    () => localizeOptions(sexualPreferences, copy.sexualPreferenceLabels),
    [copy.sexualPreferenceLabels],
  );
  const drugOptions = useMemo(() => localizeOptions(drugs, copy.drugLabels), [copy.drugLabels]);
  const helpOptionItems = useMemo(
    () => localizeOptions(helpOptions, copy.helpLabels),
    [copy.helpLabels],
  );
  const spiritualAffiliationOptions = useMemo(
    () => localizeOptions(spiritualAffiliations, copy.spiritualAffiliationLabels),
    [copy.spiritualAffiliationLabels],
  );
  const socioeconomicOptionItems = useMemo(
    () => localizeOptions(socioeconomicOptions, copy.socioeconomicLabels),
    [copy.socioeconomicLabels],
  );
  const livingSituationOptions = useMemo(
    () => localizeOptions(livingSituations, copy.livingSituationLabels),
    [copy.livingSituationLabels],
  );
  const fastingOptionItems = useMemo(
    () => localizeOptions(fastingOptions, copy.fastingLabels),
    [copy.fastingLabels],
  );
  const workoutOptionItems = useMemo(
    () => localizeOptions(workoutOptions, copy.workoutLabels),
    [copy.workoutLabels],
  );

  const updateAnswers = (partial: Partial<QuestionnaireAnswers>) => {
    setAnswers((current) => ({ ...current, ...partial }));
  };

  const updateFooterDebug = (updater: (current: QuestionnaireFooterDebug) => QuestionnaireFooterDebug) => {
    setFooterDebugByStep((current) => ({
      ...current,
      [currentStep]: updater(current[currentStep] ?? QUESTIONNAIRE_DEFAULT_FOOTER_DEBUG),
    }));
  };

  const toggleMulti = (field: "drugUse" | "helpSeeking", option: string) => {
    setAnswers((current) => {
      const currentValues = current[field];
      const isSelected = currentValues.includes(option);
      let nextValues = isSelected
        ? currentValues.filter((item) => item !== option)
        : [...currentValues, option];

      if (field === "drugUse" && option === "No drug use" && !isSelected) {
        nextValues = ["No drug use"];
      }

      if (field === "drugUse" && option !== "No drug use" && !isSelected) {
        nextValues = nextValues.filter((item) => item !== "No drug use");
      }

      return { ...current, [field]: nextValues };
    });
  };

  const canConfirmStep = () => {
    switch (currentStep) {
      case "birth":
        return Boolean(
          answers.birthDay &&
            answers.birthMonth &&
            answers.birthYear &&
            answers.countryOfOrigin,
        );
      case "field":
        return Boolean(answers.fieldOfWork);
      case "sexualPreference":
        return Boolean(answers.sexualPreference);
      case "drugUse":
        return answers.drugUse.length > 0;
      case "help":
        return answers.helpSeeking.length > 0;
      case "spirituality":
        return Boolean(answers.spiritualAffiliation);
      case "socioeconomic":
        return Boolean(answers.socioeconomicStatus);
      case "livingSituation":
        return Boolean(answers.livingSituation);
      case "liveAlone":
        return Boolean(answers.liveAlone);
      case "fasting":
        return Boolean(answers.fastingHistory);
      case "workout":
        return Boolean(answers.workoutFrequency);
      case "vitamins":
        return Boolean(answers.vitamins);
      case "medications":
        return answers.medications.trim().length > 0;
      case "session":
        return Boolean(answers.sessionFrequency && answers.sessionDuration);
      default:
        return false;
    }
  };

  const confirmStep = () => {
    if (!canConfirmStep()) return;
    if (currentStep === "session") return;
    setIsTransitioning(true);
    timeoutRef.current = window.setTimeout(() => {
      setStepIndex((current) => Math.min(current + 1, steps.length - 1));
      setIsTransitioning(false);
    }, 240);
  };

  const goBack = () => {
    if (stepIndex === 0 || isTransitioning) return;
    setIsTransitioning(true);
    timeoutRef.current = window.setTimeout(() => {
      setStepIndex((current) => Math.max(current - 1, 0));
      setIsTransitioning(false);
    }, 180);
  };

  const sessionPrice =
    answers.sessionFrequency && answers.sessionDuration
      ? priceMap[answers.sessionFrequency as (typeof frequencyOptions)[number]]?.[
          answers.sessionDuration as (typeof durationOptions)[number]
        ]
      : null;
  const selectedPlanKey = getClientSubscriptionPlanKey(
    answers.sessionFrequency,
    answers.sessionDuration,
  );

  const progressLabel = `${stepIndex + 1} / ${steps.length}`;
  const currentQuestionKicker = copy.questionLabel(stepIndex + 1);

  const proceedToCheckout = async () => {
    if (!selectedPlanKey || !sessionPrice || checkoutLoading) return;

    setCheckoutError("");
    setCheckoutLoading(true);

    try {
      const intake = await createClientIntake({
        answers,
        selectedPlanKey,
        selectedPrice: sessionPrice,
      });

      const response = await fetch("/api/square/create-subscription-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedPlan: selectedPlanKey,
          intakeId: intake.intakeId,
        }),
      });

      const responseText = await response.text();
      let payload: {
        checkoutUrl?: string;
        paymentLinkId?: string | null;
        orderId?: string | null;
        error?: string;
      } = {};

      if (responseText) {
        try {
          payload = JSON.parse(responseText) as typeof payload;
        } catch {
          throw new Error(
            response.ok
              ? "Checkout returned an unexpected response."
              : "Checkout endpoint is unavailable right now.",
          );
        }
      }

      if (!response.ok || !payload.checkoutUrl) {
        throw new Error(payload.error || "Square checkout could not be created.");
      }

      if (payload.paymentLinkId) {
        await attachSquareCheckoutToIntake({
          intakeId: intake.intakeId,
          selectedPlanKey,
          selectedPrice: sessionPrice,
          squarePaymentLinkId: payload.paymentLinkId,
          squareCheckoutUrl: payload.checkoutUrl,
          squareOrderId: payload.orderId ?? null,
        });
      }

      window.location.href = payload.checkoutUrl;
    } catch (error) {
      setCheckoutError(
        error instanceof Error ? error.message : "Square checkout could not be created.",
      );
      setCheckoutLoading(false);
    }
  };

  const debuggerReadout =
    debugTarget === "footer"
      ? `${currentStep} footer spacing ${activeFooterDebug.footerSpacing}`
      : `${currentStep} footer logo X ${activeFooterDebug.footerLogo.x} Y ${activeFooterDebug.footerLogo.y} S ${activeFooterDebug.footerLogo.scale.toFixed(2)}`;

  const copyValues = async () => {
    const lines = [
      "Questionnaire footer debugger values",
      `${currentStep} footer spacing ${activeFooterDebug.footerSpacing}`,
      `${currentStep} footer logo X ${activeFooterDebug.footerLogo.x} Y ${activeFooterDebug.footerLogo.y} S ${activeFooterDebug.footerLogo.scale.toFixed(2)}`,
      `debugger panel X ${debuggerOffset.x} Y ${debuggerOffset.y}`,
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyStatus("Copied values");
      if (copyTimeoutRef.current) window.clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = window.setTimeout(() => setCopyStatus(""), 1600);
    } catch {
      setCopyStatus("Copy failed");
    }
  };

  return (
    <main className="client-questionnaire-page">
      <div className="client-questionnaire-orb client-questionnaire-orb-one" aria-hidden="true" />
      <div className="client-questionnaire-orb client-questionnaire-orb-two" aria-hidden="true" />

      <ScaledPageCanvas
        className="client-questionnaire-page-canvas"
        designWidth={QUESTIONNAIRE_CANVAS_WIDTH}
        offsetX={QUESTIONNAIRE_CANVAS_OFFSET_X}
        offsetY={QUESTIONNAIRE_CANVAS_OFFSET_Y}
        scale={QUESTIONNAIRE_CANVAS_SCALE}
        viewportClassName="client-questionnaire-page-canvas-viewport"
      >
        <section className="client-questionnaire-shell">
          <div className="client-questionnaire-topbar">
            <Link
              href={withLocale(locale, "/")}
              className="client-questionnaire-back-link"
            >
              {`\u2190 ${copy.backToAstrologyToday}`}
            </Link>
            <span className="client-questionnaire-progress">{progressLabel}</span>
          </div>

          <section className={`client-questionnaire-card${isTransitioning ? " is-transitioning" : ""}`}>
            <img
              src="/astrologytoday-emblem.png"
              alt="Astrology Today emblem"
              className="client-questionnaire-emblem"
            />

            {currentStep === "birth" ? (
              <>
                <h1 className="client-questionnaire-question">{copy.birthTitle}</h1>
                <div className="client-questionnaire-birth-fields">
                  <label className="client-questionnaire-birth-field">
                    <span>{copy.monthLabel}</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="bday-month"
                      placeholder="MM"
                      value={answers.birthMonth}
                      onChange={(event) =>
                        updateAnswers({ birthMonth: formatDateInput(event.target.value, 2) })
                      }
                    />
                  </label>
                  <label className="client-questionnaire-birth-field">
                    <span>{copy.dayLabel}</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="bday-day"
                      placeholder="DD"
                      value={answers.birthDay}
                      onChange={(event) =>
                        updateAnswers({ birthDay: formatDateInput(event.target.value, 2) })
                      }
                    />
                  </label>
                  <label className="client-questionnaire-birth-field">
                    <span>{copy.yearLabel}</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="bday-year"
                      placeholder="YYYY"
                      value={answers.birthYear}
                      onChange={(event) =>
                        updateAnswers({ birthYear: formatDateInput(event.target.value, 4) })
                      }
                    />
                  </label>
                </div>
                <h2 className="client-questionnaire-subquestion">{copy.countryOfOrigin}</h2>
                <div className="client-questionnaire-answer-block">
                  <WheelField
                    value={answers.countryOfOrigin}
                    options={countryOptions}
                    onChange={(next) => updateAnswers({ countryOfOrigin: next })}
                    ariaLabel={copy.countryOfOrigin}
                    emptyLabel={copy.selectOption}
                  />
                </div>
              </>
            ) : null}

            {currentStep === "field" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">
                  {copy.fieldTitle}
                </h1>
                <div className="client-questionnaire-answer-block">
                  <WheelField
                    value={answers.fieldOfWork}
                    options={workFieldOptions}
                    onChange={(next) => updateAnswers({ fieldOfWork: next })}
                    ariaLabel={copy.fieldAria}
                    emptyLabel={copy.selectOption}
                  />
                </div>
              </>
            ) : null}

            {currentStep === "sexualPreference" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">{copy.sexualPreferenceTitle}</h1>
                <div className="client-questionnaire-answer-block">
                  <WheelField
                    value={answers.sexualPreference}
                    options={sexualPreferenceOptions}
                    onChange={(next) => updateAnswers({ sexualPreference: next })}
                    ariaLabel={copy.sexualPreferenceTitle}
                    emptyLabel={copy.selectOption}
                  />
                </div>
              </>
            ) : null}

            {currentStep === "drugUse" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">{copy.drugUseTitle}</h1>
                <div className="client-questionnaire-checkbox-grid">
                  {drugOptions.map((option) => {
                    const checked = answers.drugUse.includes(option.value);
                    return (
                      <label key={option.value} className={`client-questionnaire-checkbox${checked ? " is-selected" : ""}`}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleMulti("drugUse", option.value)}
                        />
                        <span>{option.label}</span>
                      </label>
                    );
                  })}
                </div>
              </>
            ) : null}

            {currentStep === "help" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">
                  {copy.helpTitle}
                </h1>
                <div className="client-questionnaire-checkbox-grid">
                  {helpOptionItems.map((option) => {
                    const checked = answers.helpSeeking.includes(option.value);
                    return (
                      <label key={option.value} className={`client-questionnaire-checkbox${checked ? " is-selected" : ""}`}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleMulti("helpSeeking", option.value)}
                        />
                        <span>{option.label}</span>
                      </label>
                    );
                  })}
                </div>
              </>
            ) : null}

            {currentStep === "spirituality" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">{copy.spiritualityTitle}</h1>
                <div className="client-questionnaire-answer-block">
                  <WheelField
                    value={answers.spiritualAffiliation}
                    options={spiritualAffiliationOptions}
                    onChange={(next) => updateAnswers({ spiritualAffiliation: next })}
                    ariaLabel={copy.spiritualityTitle}
                    emptyLabel={copy.selectOption}
                  />
                </div>
              </>
            ) : null}

            {currentStep === "socioeconomic" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">{copy.socioeconomicTitle}</h1>
                <div className="client-questionnaire-answer-block">
                  <WheelField
                    value={answers.socioeconomicStatus}
                    options={socioeconomicOptionItems}
                    onChange={(next) => updateAnswers({ socioeconomicStatus: next })}
                    ariaLabel={copy.socioeconomicTitle}
                    emptyLabel={copy.selectOption}
                  />
                </div>
              </>
            ) : null}

            {currentStep === "livingSituation" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">{copy.livingSituationTitle}</h1>
                <div className="client-questionnaire-answer-block">
                  <WheelField
                    value={answers.livingSituation}
                    options={livingSituationOptions}
                    onChange={(next) => updateAnswers({ livingSituation: next, liveAlone: "" })}
                    ariaLabel={copy.livingSituationTitle}
                    emptyLabel={copy.selectOption}
                  />
                </div>
              </>
            ) : null}

            {currentStep === "liveAlone" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">{copy.liveAloneTitle}</h1>
                <div className="client-questionnaire-answer-block">
                  <div className="client-questionnaire-choice-grid">
                    {(["Yes", "No", "Sometimes"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`client-questionnaire-choice${answers.liveAlone === option ? " is-selected" : ""}`}
                        onClick={() => updateAnswers({ liveAlone: option })}
                      >
                        {copy.liveAloneLabels[option]}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : null}

            {currentStep === "fasting" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">{copy.fastingTitle}</h1>
                <div className="client-questionnaire-answer-block">
                  <WheelField
                    value={answers.fastingHistory}
                    options={fastingOptionItems}
                    onChange={(next) => updateAnswers({ fastingHistory: next })}
                    ariaLabel={copy.fastingTitle}
                    emptyLabel={copy.selectOption}
                  />
                </div>
              </>
            ) : null}

            {currentStep === "workout" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">{copy.workoutTitle}</h1>
                <div className="client-questionnaire-answer-block">
                  <WheelField
                    value={answers.workoutFrequency}
                    options={workoutOptionItems}
                    onChange={(next) => updateAnswers({ workoutFrequency: next })}
                    ariaLabel={copy.workoutTitle}
                    emptyLabel={copy.selectOption}
                  />
                </div>
              </>
            ) : null}

            {currentStep === "vitamins" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">{copy.vitaminsTitle}</h1>
                <YesNoField
                  value={answers.vitamins}
                  onChange={(next) => updateAnswers({ vitamins: next })}
                  labels={{ yes: copy.yes, no: copy.no }}
                />
              </>
            ) : null}

            {currentStep === "medications" ? (
              <>
                <p className="client-questionnaire-kicker">{currentQuestionKicker}</p>
                <h1 className="client-questionnaire-question">{copy.medicationsTitle}</h1>
                <textarea
                  className="client-questionnaire-textarea"
                  value={answers.medications}
                  onChange={(event) => updateAnswers({ medications: event.target.value })}
                  placeholder={copy.medicationsPlaceholder}
                />
              </>
            ) : null}

            {currentStep === "session" ? (
              <>
                <p className="client-questionnaire-kicker">{copy.finalStep}</p>
                <h1 className="client-questionnaire-question">{copy.sessionTitle}</h1>
                <div className="client-questionnaire-final-grid">
                  <div className="client-questionnaire-final-group">
                    <h2 className="client-questionnaire-subquestion">{copy.frequency}</h2>
                    <div className="client-questionnaire-choice-grid">
                      {frequencyOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`client-questionnaire-choice${answers.sessionFrequency === option ? " is-selected" : ""}`}
                          onClick={() => updateAnswers({ sessionFrequency: option })}
                        >
                          {copy.sessionFrequencyLabels[option]}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="client-questionnaire-final-group">
                    <h2 className="client-questionnaire-subquestion">{copy.duration}</h2>
                    <div className="client-questionnaire-choice-grid">
                      {durationOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`client-questionnaire-choice${answers.sessionDuration === option ? " is-selected" : ""}`}
                          onClick={() => updateAnswers({ sessionDuration: option })}
                        >
                          {copy.sessionDurationLabels[option]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {sessionPrice ? (
                  <div className="client-questionnaire-price-card">
                    <p className="client-questionnaire-price-label">{copy.estimatedMembershipPrice}</p>
                    <p className="client-questionnaire-price">{sessionPrice}</p>
                  </div>
                ) : null}
              </>
            ) : null}

            <div className="client-questionnaire-actions">
              <button
                type="button"
                className="client-questionnaire-secondary"
                onClick={goBack}
                disabled={stepIndex === 0 || isTransitioning}
              >
                {copy.back}
              </button>

              {currentStep === "session" ? (
                <button
                  type="button"
                  className="client-questionnaire-primary"
                  onClick={proceedToCheckout}
                  disabled={!canConfirmStep() || !selectedPlanKey || checkoutLoading}
                >
                  {checkoutLoading ? copy.redirecting : copy.proceedToCheckout}
                </button>
              ) : (
                <button
                  type="button"
                  className="client-questionnaire-primary"
                  onClick={confirmStep}
                  disabled={!canConfirmStep() || isTransitioning}
                >
                  {copy.next}
                </button>
              )}
            </div>

            {currentStep === "session" && checkoutError ? (
              <p className="client-questionnaire-checkout-error">{checkoutError}</p>
            ) : null}
          </section>

          <SiteFooter
            locale={locale}
            currentPath="/pricing/client-questionnaire"
            className="site-section-footer"
            footerSpacing={activeFooterDebug.footerSpacing}
            logoTransform={activeFooterDebug.footerLogo}
          />
        </section>
      </ScaledPageCanvas>

      {SHOW_DEBUGGERS && debuggerVisible ? (
        <div
          className="downloads-debugger"
          style={{ transform: `translate(${debuggerOffset.x}px, ${debuggerOffset.y}px)` }}
        >
          <div className="downloads-debugger-header">
            <p className="downloads-debugger-title">Questionnaire Footer Debugger</p>
            <button
              type="button"
              className="downloads-debugger-toggle-button downloads-debugger-toggle-button-inline"
              onClick={() => setDebuggerVisible(false)}
            >
              Hide
            </button>
          </div>
          <button
            type="button"
            className="downloads-debugger-dragbar"
            onMouseDown={(event) => {
              debuggerDraggingRef.current = {
                startX: event.clientX,
                startY: event.clientY,
                initialX: debuggerOffset.x,
                initialY: debuggerOffset.y,
              };
            }}
          >
            Drag panel
          </button>
          <label className="downloads-debugger-select-wrap">
            <span>Target</span>
            <select
              className="downloads-debugger-select"
              value={debugTarget}
              onChange={(event) => setDebugTarget(event.target.value as QuestionnaireDebugTarget)}
            >
              <option value="footer">footer spacing</option>
              <option value="footerLogo">footer logo</option>
            </select>
          </label>
          <div className="downloads-debugger-readout">{debuggerReadout}</div>
          {debugTarget === "footer" ? (
            <div className="downloads-debugger-grid">
              <button type="button" onClick={() => updateFooterDebug((current) => ({ ...current, footerSpacing: current.footerSpacing - 12 }))}>
                Less Space
              </button>
              <button type="button" onClick={() => updateFooterDebug((current) => ({ ...current, footerSpacing: current.footerSpacing + 12 }))}>
                More Space
              </button>
            </div>
          ) : (
            <div className="downloads-debugger-grid">
              <button
                type="button"
                onClick={() =>
                  updateFooterDebug((current) => ({
                    ...current,
                    footerLogo: { ...current.footerLogo, y: current.footerLogo.y - 8 },
                  }))
                }
              >
                Up
              </button>
              <button
                type="button"
                onClick={() =>
                  updateFooterDebug((current) => ({
                    ...current,
                    footerLogo: { ...current.footerLogo, x: current.footerLogo.x - 8 },
                  }))
                }
              >
                Left
              </button>
              <button
                type="button"
                onClick={() =>
                  updateFooterDebug((current) => ({
                    ...current,
                    footerLogo: { ...current.footerLogo, x: current.footerLogo.x + 8 },
                  }))
                }
              >
                Right
              </button>
              <button
                type="button"
                onClick={() =>
                  updateFooterDebug((current) => ({
                    ...current,
                    footerLogo: { ...current.footerLogo, y: current.footerLogo.y + 8 },
                  }))
                }
              >
                Down
              </button>
              <button
                type="button"
                onClick={() =>
                  updateFooterDebug((current) => ({
                    ...current,
                    footerLogo: {
                      ...current.footerLogo,
                      scale: Number(Math.max(0.4, current.footerLogo.scale - 0.04).toFixed(2)),
                    },
                  }))
                }
              >
                Smaller
              </button>
              <button
                type="button"
                onClick={() =>
                  updateFooterDebug((current) => ({
                    ...current,
                    footerLogo: {
                      ...current.footerLogo,
                      scale: Number((current.footerLogo.scale + 0.04).toFixed(2)),
                    },
                  }))
                }
              >
                Bigger
              </button>
            </div>
          )}
          <div className="downloads-debugger-actions">
            <button type="button" className="downloads-debugger-reset" onClick={copyValues}>
              Copy Values
            </button>
            <button
              type="button"
              className="downloads-debugger-reset"
              onClick={() =>
                setFooterDebugByStep((current) => ({
                  ...current,
                  [currentStep]: QUESTIONNAIRE_DEFAULT_FOOTER_DEBUG,
                }))
              }
            >
              Reset Step
            </button>
          </div>
          {copyStatus ? <div className="downloads-debugger-status">{copyStatus}</div> : null}
        </div>
      ) : null}

      {SHOW_DEBUGGERS ? (
        <button
          type="button"
          className="downloads-debugger-toggle-button"
          onClick={() => setDebuggerVisible(true)}
          aria-label="Show debugger"
          title="Show debugger"
        >
          D
        </button>
      ) : null}
    </main>
  );
}
