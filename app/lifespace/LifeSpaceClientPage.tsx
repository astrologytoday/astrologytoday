"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  createWebAccount,
  getLifespaceLogs,
  getSharedLifespaceSnapshot,
  getUserProfile,
  getWebAccountByCode,
  updateWebAccountCode,
} from "../../lib/firebase/lifespace";
import { isFirebaseConfigured } from "../../lib/firebase/config";
import { getLifetimeModuleScores, getPriorityModules, getTodayScore } from "../../lib/lifespace/analytics";
import {
  LIFESPACE_MODULE_LABELS,
  LIFESPACE_MODULES,
  type LifespaceSharedSnapshot,
  type LifespaceLogEntry,
  type LifespaceModule,
  type UserProfile,
} from "../../lib/lifespace/types";
import {
  authenticateLifespaceAccount,
  getStoredLifespaceSession,
  hashPassword,
  LIFESPACE_AUTH_EVENT,
  setStoredLifespaceSession,
  type LifespaceWebSession,
} from "../../lib/lifespace/webAuth";
import { SHOW_DEBUGGERS } from "../../lib/debug";
import ScaledPageCanvas from "../../components/shared/ScaledPageCanvas";

type IconDockItem = {
  key: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: ReactNode;
};

const defaultUserId = process.env.NEXT_PUBLIC_LIFESPACE_DEFAULT_USER_ID ?? "";

const moduleDescriptions: Record<LifespaceModule, string> = {
  light: "Light tracks sunlight, brightness, and whether your day gives your nervous system enough clarity.",
  innerWork:
    "Inner Work covers prayer, reflection, meditation, and the quieter practices that keep you inwardly connected.",
  fitness:
    "Fitness reflects movement, exercise, and whether your body is being challenged enough to stay alive and responsive.",
  eating:
    "Eating measures whether your food choices are supporting recovery, energy, and long-term brain optimization.",
  sensory:
    "Sensory Health focuses on environment, overstimulation, and whether your physical surroundings are regulating or draining you.",
  purpose:
    "Purpose measures meaning, direction, and whether your actions still feel tied to the bigger life you want to build.",
  activity:
    "Activity tracks everyday engagement: whether you are participating in life instead of only enduring it.",
  community:
    "Community reflects closeness, belonging, outreach, and whether you are emotionally connected to other people.",
  expression:
    "Expression measures whether your creativity, style, and personality are actually making it into the world around you.",
};

const prescriptionCopy: Record<LifespaceModule, string> = {
  light: "Get at least 15 minutes of daylight and let natural light into the room early in the day.",
  innerWork: "Make time for stillness, meditation, or prayer so your inner life is not drowned out by momentum.",
  fitness: "Work in at least a short burst of real physical effort so your body remembers it is meant to move.",
  eating: "Choose cleaner, more supportive food today and simplify meals around nourishment instead of impulse.",
  sensory: "Adjust your environment so it feels safer, calmer, and less cluttered to your nervous system.",
  purpose: "Write down one meaningful aim for the week so your effort is pointed somewhere real.",
  activity: "Plan one life-giving activity that gets you participating instead of only reacting.",
  community: "Reach out to someone and create one real point of contact, warmth, or shared presence.",
  expression: "Do one thing that lets your actual taste, voice, or personality come through clearly.",
};

const footerLinks = ["Contact", "Careers", "FAQ", "Testimonials", "Privacy Policy", "Terms of Use"];
const LIFESPACE_DEBUG_STORAGE_KEY = "astrologytoday-lifespace-debug-v1";
const LIFESPACE_CANVAS_SCALE = 0.71;
const LIFESPACE_CANVAS_WIDTH = 1760;
const LIFESPACE_CANVAS_OFFSET_X = 0;
const LIFESPACE_CANVAS_OFFSET_Y = 16;
const EMPTY_MODULE_SCORES: Record<LifespaceModule, number> = {
  light: 0,
  innerWork: 0,
  fitness: 0,
  eating: 0,
  sensory: 0,
  purpose: 0,
  activity: 0,
  community: 0,
  expression: 0,
};
type LifespacePageMode = "construction" | "preview" | "final";

const moduleLetters: Record<LifespaceModule, string> = {
  light: "L",
  innerWork: "I",
  fitness: "F",
  eating: "E",
  sensory: "S",
  purpose: "P",
  activity: "A",
  community: "C",
  expression: "E",
};

function AppleIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M39 14c2-3 3-6 3-9-4 0-7 2-9 5-1 2-2 5-2 8 3 0 6-1 8-4Z"
        fill="currentColor"
      />
      <path
        d="M47 23c-3-4-8-5-11-5-5 0-7 2-10 2s-5-2-9-2c-7 0-14 6-14 18 0 8 3 17 7 23 3 5 6 9 11 9 4 0 5-2 10-2 4 0 5 2 9 2 5 0 8-4 11-8 2-4 4-8 5-12-7-3-8-13-1-17-2-3-5-6-8-8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckStackIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="13" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="m15 22 4 4 7-8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="10" y="37" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="m15 46 4 4 7-8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 22h18M36 46h18" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function SurveyPageIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 10h20l8 8v36H18z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M38 10v12h8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M24 30h16M24 40h16M24 50h10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="20" cy="22" r="7" fill="currentColor" />
      <circle cx="44" cy="22" r="7" fill="currentColor" />
      <circle cx="32" cy="18" r="8" fill="currentColor" />
      <path d="M10 46c1-7 7-11 14-11s13 4 14 11" fill="currentColor" />
      <path d="M24 49c1-8 8-13 16-13s15 5 16 13" fill="currentColor" />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M11 50h42" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="m14 41 10-11 11 7 15-17" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="41" r="3" fill="currentColor" />
      <circle cx="24" cy="30" r="3" fill="currentColor" />
      <circle cx="35" cy="37" r="3" fill="currentColor" />
      <circle cx="50" cy="20" r="3" fill="currentColor" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="m35 9 3 5 6 1 2 6 5 3-2 6 2 6-5 3-2 6-6 1-3 5-6-2-6 2-3-5-6-1-2-6-5-3 2-6-2-6 5-3 2-6 6-1 3-5 6 2 6-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

function PowerIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 8v22" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M19 16a20 20 0 1 0 26 0" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="22" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M14 52c3-10 10-15 18-15s15 5 18 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function getBarTone(score: number) {
  if (score >= 80) return "high";
  if (score >= 55) return "mid";
  return "low";
}

function getStatusLabel(status: "idle" | "loading" | "ready" | "error") {
  if (status === "ready") return "Synced";
  if (status === "loading") return "Syncing";
  if (status === "error") return "Attention needed";
  return "Awaiting profile";
}

function formatLifespaceCodeInput(value: string) {
  const cleaned = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const prefix = cleaned.startsWith("LS") ? "LS" : cleaned.slice(0, Math.min(2, cleaned.length));
  const remainder = cleaned.startsWith("LS") ? cleaned.slice(2, 8) : cleaned.slice(2, 8);
  if (!prefix) return "";
  return remainder ? `${prefix}-${remainder}` : prefix;
}

export default function LifeSpaceClientPage() {
  const [activeUserId] = useState(defaultUserId);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [logs, setLogs] = useState<LifespaceLogEntry[]>([]);
  const [selectedModule, setSelectedModule] = useState<LifespaceModule>("light");
  const [activeDockItem, setActiveDockItem] = useState("analytics");
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const [pageMode, setPageMode] = useState<LifespacePageMode>("final");
  const [debuggerOffset, setDebuggerOffset] = useState({ x: 0, y: 0 });
  const [webSession, setWebSession] = useState<LifespaceWebSession | null>(null);
  const [sharedSnapshot, setSharedSnapshot] = useState<LifespaceSharedSnapshot | null>(null);
  const [sharedSnapshotStatus, setSharedSnapshotStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [sharedSnapshotError, setSharedSnapshotError] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [verifiedCode, setVerifiedCode] = useState("");
  const [authStep, setAuthStep] = useState<"code" | "setup" | "link">("code");
  const [setupUsername, setSetupUsername] = useState("");
  const [confirmUsername, setConfirmUsername] = useState("");
  const [setupPassword, setSetupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [linkUsername, setLinkUsername] = useState("");
  const [linkPassword, setLinkPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authBusy, setAuthBusy] = useState(false);
  const debuggerDraggingRef = useRef<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = window.localStorage.getItem(LIFESPACE_DEBUG_STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw) as {
        pageMode?: LifespacePageMode;
        debuggerOffset?: { x?: number; y?: number };
      };

      if (parsed.pageMode === "construction" || parsed.pageMode === "preview") {
        setPageMode("final");
      } else if (parsed.pageMode === "final") {
        setPageMode(parsed.pageMode);
      }

      if (parsed.debuggerOffset) {
        setDebuggerOffset({
          x: Number(parsed.debuggerOffset.x ?? 0),
          y: Number(parsed.debuggerOffset.y ?? 0),
        });
      }
    } catch {
      // Ignore invalid local debugger values.
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(
      LIFESPACE_DEBUG_STORAGE_KEY,
      JSON.stringify({
        pageMode,
        debuggerOffset,
      }),
    );
  }, [pageMode, debuggerOffset]);

  useEffect(() => {
    function handlePointerMove(event: MouseEvent) {
      if (!debuggerDraggingRef.current) return;
      const dx = event.clientX - debuggerDraggingRef.current.startX;
      const dy = event.clientY - debuggerDraggingRef.current.startY;
      setDebuggerOffset({
        x: debuggerDraggingRef.current.initialX + dx,
        y: debuggerDraggingRef.current.initialY + dy,
      });
    }

    function handlePointerUp() {
      debuggerDraggingRef.current = null;
    }

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
    };
  }, []);

  useEffect(() => {
    setWebSession(getStoredLifespaceSession());

    function syncSession() {
      setWebSession(getStoredLifespaceSession());
    }

    window.addEventListener(LIFESPACE_AUTH_EVENT, syncSession);
    window.addEventListener("storage", syncSession);

    return () => {
      window.removeEventListener(LIFESPACE_AUTH_EVENT, syncSession);
      window.removeEventListener("storage", syncSession);
    };
  }, []);

  useEffect(() => {
    if (!isFirebaseConfigured() || !activeUserId) {
      return;
    }

    let cancelled = false;

    async function load() {
      setStatus("loading");
      setErrorMessage("");

      try {
        const [nextProfile, nextLogs] = await Promise.all([getUserProfile(activeUserId), getLifespaceLogs(activeUserId)]);

        if (cancelled) return;

        setProfile(nextProfile);
        setLogs(nextLogs);
        setStatus("ready");
      } catch (error) {
        if (cancelled) return;
        setStatus("error");
        setErrorMessage(error instanceof Error ? error.message : "Unable to load Firebase data.");
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [activeUserId]);

  useEffect(() => {
    const linkedCode =
      webSession?.lifespaceLinkedCode ||
      (webSession?.linkedCode?.startsWith("LS-") ? webSession.linkedCode : "");

    if (pageMode !== "final" || !linkedCode) {
      setSharedSnapshot(null);
      setSharedSnapshotStatus("idle");
      setSharedSnapshotError("");
      return;
    }

    const resolvedCode = linkedCode;

    let cancelled = false;

    async function loadSharedSnapshot() {
      setSharedSnapshotStatus("loading");
      setSharedSnapshotError("");

      try {
        const snapshot = await getSharedLifespaceSnapshot(resolvedCode);
        if (cancelled) return;

        if (!snapshot || !snapshot.sharingEnabled) {
          setSharedSnapshot(null);
          setSharedSnapshotStatus("error");
          setSharedSnapshotError("No shared LIFESPACE data was found for this account.");
          return;
        }

        setSharedSnapshot(snapshot);
        setSharedSnapshotStatus("ready");
      } catch (error) {
        if (cancelled) return;
        setSharedSnapshot(null);
        setSharedSnapshotStatus("error");
        setSharedSnapshotError(error instanceof Error ? error.message : "Unable to load shared LIFESPACE data.");
      }
    }

    void loadSharedSnapshot();

    return () => {
      cancelled = true;
    };
  }, [pageMode, webSession]);

  const todayScore = useMemo(() => getTodayScore(logs), [logs]);
  const lifetimeScores = useMemo(() => getLifetimeModuleScores(logs), [logs]);
  const priorityModules = useMemo(() => getPriorityModules(logs), [logs]);

  const prescriptionModules: LifespaceModule[] =
    priorityModules.length > 0 ? priorityModules : ["light", "fitness", "eating"];
  const effectiveTodayScore = pageMode === "final" ? sharedSnapshot?.todayScore ?? 0 : todayScore;
  const effectiveLifetimeScores =
    pageMode === "final" ? sharedSnapshot?.lifetimeModuleAverages ?? EMPTY_MODULE_SCORES : lifetimeScores;
  const effectivePrescriptionModules =
    pageMode === "final"
      ? sharedSnapshot?.weakestModules?.slice(0, 3) ?? ["light", "fitness", "eating"]
      : prescriptionModules;
  const effectiveDashboardName =
    pageMode === "final" ? webSession?.username || sharedSnapshot?.profileUsername || "User" : profile?.username || "User";
  const effectiveStatus =
    pageMode === "final"
      ? sharedSnapshotStatus === "ready"
        ? "ready"
        : sharedSnapshotStatus === "loading"
          ? "loading"
          : sharedSnapshotStatus === "error"
            ? "error"
            : "idle"
      : status;
  const effectiveErrorMessage = pageMode === "final" ? sharedSnapshotError : errorMessage;

  const rankedModules = useMemo(
    () =>
      [...LIFESPACE_MODULES]
        .map((module) => ({
          module,
          score: effectiveLifetimeScores[module],
        }))
        .sort((a, b) => a.score - b.score),
    [effectiveLifetimeScores],
  );

  const selectedModuleScore = effectiveLifetimeScores[selectedModule];
  const selectedModuleLabel =
    selectedModule === "sensory" ? "Sensory Health" : LIFESPACE_MODULE_LABELS[selectedModule];
  const weakestModule = rankedModules[0]?.module ?? "light";

  useEffect(() => {
    if (!selectedModule || !(selectedModule in effectiveLifetimeScores)) {
      setSelectedModule("light");
    }
  }, [selectedModule, effectiveLifetimeScores]);

  const iconDockItems: IconDockItem[] = [
    {
      key: "food",
      label: "Food Space",
      shortLabel: "Food",
      description: "Nourishment, meals, and energy support",
      icon: <AppleIcon />,
    },
    {
      key: "planning",
      label: "Planning Space",
      shortLabel: "Plan",
      description: "Weekly structure, goals, and rhythm",
      icon: <CheckStackIcon />,
    },
    {
      key: "budget",
      label: "Budget Planner",
      shortLabel: "Budget",
      description: "Resources, spending, and sustainability",
      icon: <span className="lifespace-icon-glyph">$</span>,
    },
    {
      key: "survey",
      label: "Lifestyle Survey",
      shortLabel: "Survey",
      description: "Daily check-ins and signal collection",
      icon: <SurveyPageIcon />,
    },
    {
      key: "meetups",
      label: "LIFESPACE Meetups",
      shortLabel: "Meetups",
      description: "Shared practice and community touchpoints",
      icon: <CommunityIcon />,
    },
    {
      key: "analytics",
      label: "Analytics",
      shortLabel: "Analytics",
      description: "Pattern review and score insights",
      icon: <AnalyticsIcon />,
    },
    {
      key: "settings",
      label: "Settings",
      shortLabel: "Settings",
      description: "Personal preferences and account controls",
      icon: <GearIcon />,
    },
  ];

  async function handleCodeSubmit() {
    const normalizedCode = codeInput.trim().toUpperCase();
    setAuthBusy(true);
    setAuthError("");

    try {
      const snapshot = await getSharedLifespaceSnapshot(normalizedCode);
      if (!snapshot || !snapshot.sharingEnabled) {
        setAuthError("That app user code was not found.");
        return;
      }

      const linkedAccount = await getWebAccountByCode(normalizedCode);
      if (linkedAccount) {
        setAuthError("That app user code is already attached to another account.");
        return;
      }

      if (webSession?.usernameLower) {
      const updatedAccount = await updateWebAccountCode(webSession.usernameLower, normalizedCode);
      if (!updatedAccount) {
        throw new Error("Unable to link that app user code.");
      }

      const nextSession = {
        username: updatedAccount.username,
        usernameLower: updatedAccount.usernameLower,
        linkedCode: updatedAccount.linkedCode,
        lifespaceLinkedCode: updatedAccount.lifespaceLinkedCode,
      } satisfies LifespaceWebSession;

        setStoredLifespaceSession(nextSession);
        setWebSession(nextSession);
        return;
      }

      setVerifiedCode(normalizedCode);
      setSetupUsername("");
      setConfirmUsername("");
      setSetupPassword("");
      setConfirmPassword("");
      setRecoveryEmail("");
      setLinkUsername("");
      setLinkPassword("");
      setAuthStep("setup");
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "Unable to verify that app user code.");
    } finally {
      setAuthBusy(false);
    }
  }

  async function handleAccountCreate() {
    const trimmedUsername = setupUsername.trim();
    const trimmedConfirmUsername = confirmUsername.trim();
    const trimmedRecoveryEmail = recoveryEmail.trim();

    if (!verifiedCode) {
      setAuthError("Enter a valid app user code first.");
      return;
    }

    if (!trimmedUsername || !trimmedConfirmUsername || !setupPassword || !confirmPassword || !trimmedRecoveryEmail) {
      setAuthError("Please complete all fields.");
      return;
    }

    if (trimmedUsername !== trimmedConfirmUsername) {
      setAuthError("Usernames do not match.");
      return;
    }

    if (setupPassword !== confirmPassword) {
      setAuthError("Passwords do not match.");
      return;
    }

    setAuthBusy(true);
    setAuthError("");

    try {
      const account = await createWebAccount({
        username: trimmedUsername,
        usernameLower: trimmedUsername.toLowerCase(),
        passwordHash: await hashPassword(setupPassword),
        recoveryEmail: trimmedRecoveryEmail,
        linkedCode: "",
        lifespaceLinkedCode: verifiedCode,
      });

      if (!account) {
        throw new Error("Unable to create the account.");
      }

      const nextSession = {
        username: account.username,
        usernameLower: account.usernameLower,
        linkedCode: account.linkedCode,
        lifespaceLinkedCode: account.lifespaceLinkedCode,
      } satisfies LifespaceWebSession;

      setStoredLifespaceSession(nextSession);
      setWebSession(nextSession);
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "Unable to create the account.");
    } finally {
      setAuthBusy(false);
    }
  }

  async function handleAccountLink() {
    const trimmedUsername = linkUsername.trim();

    if (!verifiedCode) {
      setAuthError("Enter a valid app user code first.");
      return;
    }

    if (!trimmedUsername || !linkPassword) {
      setAuthError("Enter your username and password.");
      return;
    }

    setAuthBusy(true);
    setAuthError("");

    try {
      const session = await authenticateLifespaceAccount(trimmedUsername, linkPassword);
      if (!session) {
        setAuthError("That username and password do not match.");
        return;
      }

      const updatedAccount = await updateWebAccountCode(session.usernameLower, verifiedCode);
      if (!updatedAccount) {
        throw new Error("Unable to link the account.");
      }

      const nextSession = {
        username: updatedAccount.username,
        usernameLower: updatedAccount.usernameLower,
        linkedCode: updatedAccount.linkedCode,
        lifespaceLinkedCode: updatedAccount.lifespaceLinkedCode,
      } satisfies LifespaceWebSession;

      setStoredLifespaceSession(nextSession);
      setWebSession(nextSession);
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "Unable to link the account.");
    } finally {
      setAuthBusy(false);
    }
  }

  const showDashboard =
    pageMode !== "final" || sharedSnapshotStatus === "loading" || sharedSnapshotStatus === "ready";
  const usernameTaken = authStep === "setup" && authError === "That username is already taken.";

  return (
    <main className="lifespace-home">
      <ScaledPageCanvas
        className="lifespace-page-canvas"
        designWidth={LIFESPACE_CANVAS_WIDTH}
        offsetX={LIFESPACE_CANVAS_OFFSET_X}
        offsetY={LIFESPACE_CANVAS_OFFSET_Y}
        scale={LIFESPACE_CANVAS_SCALE}
        viewportClassName="lifespace-page-canvas-viewport"
      >
        {showDashboard ? (
        <section
          className={`lifespace-shell ${pageMode === "construction" ? "lifespace-shell-under-construction" : ""}`.trim()}
          aria-hidden={pageMode === "construction"}
        >
          <section className="lifespace-results-panel">
            <aside className="lifespace-icondock-panel">
              <div className="lifespace-brand-block">
                <div className="lifespace-mark-card">
                  <img src="/lifespace-emblem.png" alt="LIFESPACE emblem" className="lifespace-mark-image" />
                </div>
                <div className="lifespace-brand-copy">
                  <p className="eyebrow">LIFESPACE</p>
                  <h2>Wellness intelligence</h2>
                  <p>A calm, structured portal for daily mental wellness decisions and long-range self-care.</p>
                </div>
              </div>

              <div className="lifespace-icondock" aria-label="LIFESPACE navigation">
                {iconDockItems.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={`lifespace-icondock-item ${activeDockItem === item.key ? "is-active" : ""}`}
                    onClick={() => setActiveDockItem(item.key)}
                    aria-pressed={activeDockItem === item.key}
                  >
                    <span className="lifespace-icon-circle">{item.icon}</span>
                    <span className="lifespace-icon-copy">
                      <span className="lifespace-icon-label">{item.label}</span>
                      <span className="lifespace-icon-description">{item.description}</span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="lifespace-sidebar-summary">
                <span className="lifespace-sidebar-summary-label">Today&apos;s score</span>
                <strong>{effectiveTodayScore}%</strong>
                <p>{effectiveStatus === "ready" ? "Live data is shaping this view." : "Connect profile data to unlock live insights."}</p>
              </div>
            </aside>

            <div className="lifespace-workspace">
              <header className="lifespace-dashboard-header">
                <div className="lifespace-page-title">
                  <p className="eyebrow">Dashboard Overview</p>
                  <div className="lifespace-title-row">
                    <h1>{effectiveDashboardName}&apos;s LIFESPACE</h1>
                    <span className={`lifespace-status-chip status-${effectiveStatus}`}>{getStatusLabel(effectiveStatus)}</span>
                  </div>
                  <p>
                    Your environment, habits, and inner life translated into a calmer, clearer wellness command center.
                  </p>
                  {effectiveStatus === "error" && <p>{effectiveErrorMessage}</p>}
                  {effectiveStatus === "loading" && <p>Loading synced profile...</p>}
                  {effectiveStatus === "idle" && <p>Waiting for a shared Firestore user.</p>}
                </div>

                <div className="lifespace-topdock">
                  <div className="lifespace-topdock-actions">
                    <button type="button" className="lifespace-utility-button" aria-label="Logout">
                      <PowerIcon />
                    </button>
                    <button type="button" className="lifespace-utility-button" aria-label="User profile">
                      <PersonIcon />
                    </button>
                    <Link href="/" className="lifespace-brand-pill">
                      <img src="/lifespace-app-icon.png" alt="" aria-hidden="true" />
                      <span>Astrology Today</span>
                    </Link>
                  </div>
                </div>
              </header>

              <section className="lifespace-hero-band">
                <div className="lifespace-hero-copy">
                  <div className="lifespace-chip-row">
                    <span className="lifespace-data-chip">Daily score {effectiveTodayScore}%</span>
                    <span className="lifespace-data-chip">Priority modules {effectivePrescriptionModules.length}</span>
                    <span className="lifespace-data-chip">Focus area {selectedModuleLabel}</span>
                  </div>
                  <h2>Track the shape of your life, not just isolated habits.</h2>
                  <p>
                    LIFESPACE helps you see which parts of your routine are regulating you, which ones are draining
                    you, and where the next week should be gently redirected.
                  </p>
                  <div className="lifespace-hero-actions">
                    <button
                      type="button"
                      className="lifespace-primary-action"
                      onClick={() => {
                        setSelectedModule(weakestModule);
                        setActiveDockItem("analytics");
                      }}
                    >
                      Review weakest area
                    </button>
                    <button
                      type="button"
                      className="lifespace-secondary-action"
                      onClick={() => {
                        document.getElementById("lifespace-prescription")?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                    >
                      Open prescription
                    </button>
                  </div>
                </div>

                <div className="lifespace-overview-card">
                  <span className="lifespace-overview-label">Current wellness score</span>
                  <strong>{effectiveTodayScore}%</strong>
                  <p>
                    {effectiveTodayScore >= 80
                      ? "You are in a strong zone. Protect the conditions that are already working."
                      : effectiveTodayScore >= 55
                        ? "You have a workable baseline. Small targeted adjustments can lift the week noticeably."
                        : "Your system may need extra support right now. Prioritize steadiness, clarity, and relief."}
                  </p>
                </div>
              </section>

              <section className="lifespace-analytics-panel">
                <div className="lifespace-section-heading">
                  <div>
                    <p className="eyebrow">Main Analytics</p>
                    <h2>Lifetime module performance</h2>
                  </div>
                  <p>Tap any letter to inspect the module, compare patterns, and decide what deserves attention next.</p>
                </div>

                <div className="lifespace-analytics-grid">
                  <div className="lifespace-chart-card">
                    <div className="lifespace-score-overlay" aria-label={`Today's score ${effectiveTodayScore} percent`}>
                      <span>Today</span>
                      <strong>{effectiveTodayScore}%</strong>
                    </div>
                    <div className="lifespace-chart-grid">
                      <div className="lifespace-y-axis">
                        {[100, 75, 50, 25, 0].map((tick) => (
                          <span key={tick}>{tick}</span>
                        ))}
                      </div>

                      <div className="lifespace-bars">
                        {LIFESPACE_MODULES.map((module) => {
                          const score = effectiveLifetimeScores[module];

                          return (
                            <div key={module} className="lifespace-bar-slot">
                              <div className="lifespace-bar-shell">
                                <div
                                  className={`lifespace-bar-fill ${getBarTone(score)} ${selectedModule === module ? "is-selected" : ""}`}
                                  style={{ height: `${Math.max(score, 6)}%` }}
                                />
                              </div>
                              <button
                                type="button"
                                className={`lifespace-module-word ${selectedModule === module ? "is-active" : ""}`}
                                onClick={() => setSelectedModule(module)}
                                aria-label={LIFESPACE_MODULE_LABELS[module]}
                                aria-pressed={selectedModule === module}
                              >
                                {moduleLetters[module]}
                              </button>
                              <span className="lifespace-module-caption">
                                {module === "sensory" ? "Sensory" : LIFESPACE_MODULE_LABELS[module]}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <aside className="lifespace-module-popup">
                    <div className="lifespace-module-card-top">
                      <span className="lifespace-module-score">{selectedModuleScore}%</span>
                      <span className={`lifespace-tone-pill tone-${getBarTone(selectedModuleScore)}`}>
                        {selectedModuleScore >= 80 ? "Strong" : selectedModuleScore >= 55 ? "Building" : "Needs support"}
                      </span>
                    </div>
                    <h2>{selectedModuleLabel}</h2>
                    <p>{moduleDescriptions[selectedModule]}</p>

                    <div className="lifespace-module-mini-list">
                      {rankedModules.slice(0, 3).map(({ module, score }, index) => (
                        <div key={module} className="lifespace-module-mini-row">
                          <span className="lifespace-module-mini-rank">0{index + 1}</span>
                          <span className="lifespace-module-mini-name">
                            {module === "sensory" ? "Sensory Health" : LIFESPACE_MODULE_LABELS[module]}
                          </span>
                          <strong>{score}%</strong>
                        </div>
                      ))}
                    </div>
                  </aside>
                </div>
              </section>
            </div>
          </section>

          <section className="lifespace-prescription-card" id="lifespace-prescription">
            <div className="lifespace-prescription-header">
              <div>
                <p className="eyebrow">LIFESPACE Prescription</p>
                <h2>Focus on these top priorities over the next seven days.</h2>
              </div>
              <div className="lifespace-prescription-summary">
                <span>Recommended emphasis</span>
                <strong>{effectivePrescriptionModules.length} guided priorities</strong>
              </div>
            </div>
            <div className="lifespace-prescription-list">
              {effectivePrescriptionModules.map((module, index) => (
                <article key={module} className="lifespace-priority-card">
                  <div className="lifespace-priority-index">{index + 1}</div>
                  <div>
                    <h3>{module === "sensory" ? "Sensory Health" : LIFESPACE_MODULE_LABELS[module]}</h3>
                    <p>{prescriptionCopy[module]}</p>
                  </div>
                  <div className="lifespace-priority-score">{effectiveLifetimeScores[module]}%</div>
                </article>
              ))}
            </div>
          </section>

          <footer className="lifespace-footer">
            {footerLinks.map((item) => (
              <a key={item} href="#" className="lifespace-footer-link">
                {item}
              </a>
            ))}
          </footer>
        </section>
        ) : (
          <section className="lifespace-shell">
            <section className="lifespace-results-panel lifespace-results-panel-auth">
              <div className="lifespace-web-auth-shell">
                <div className={`lifespace-web-auth-card${authStep === "code" ? " is-code-step" : ""}`}>
                  <p className="eyebrow">LIFESPACE Web</p>
                  {authStep === "code" ? (
                    <>
                      <div className="lifespace-web-auth-code-layout">
                        <div className="lifespace-web-auth-copy-block">
                          <h1>Enter app user code</h1>
                          <p>Use the code from your LIFESPACE iPhone app to unlock your web dashboard.</p>
                        </div>
                        <div className="lifespace-web-auth-form-block">
                          <input
                            className="lifespace-web-auth-input"
                            value={codeInput}
                            onChange={(event) => setCodeInput(formatLifespaceCodeInput(event.target.value))}
                            placeholder="LS-XXXXXX"
                            aria-label="Enter app user code"
                            autoCapitalize="characters"
                            autoCorrect="off"
                            spellCheck={false}
                            inputMode="text"
                            maxLength={9}
                          />
                          {authError ? <p className="lifespace-web-auth-error">{authError}</p> : null}
                          <button
                            type="button"
                            className="lifespace-primary-action lifespace-web-auth-button"
                            onClick={() => void handleCodeSubmit()}
                            disabled={authBusy}
                          >
                            {authBusy ? "Checking..." : "Next"}
                          </button>
                        </div>
                      </div>
                    </>
                  ) : authStep === "setup" ? (
                    <>
                      <h1>Create username &amp; password</h1>
                      <p>{`Code accepted: ${verifiedCode}`}</p>
                      <div className="lifespace-web-auth-grid">
                        <input className="lifespace-web-auth-input" value={setupUsername} onChange={(event) => setSetupUsername(event.target.value)} placeholder="Username" aria-label="Username" />
                        <input className="lifespace-web-auth-input" value={confirmUsername} onChange={(event) => setConfirmUsername(event.target.value)} placeholder="Confirm username" aria-label="Confirm username" />
                        <input className="lifespace-web-auth-input" type="password" value={setupPassword} onChange={(event) => setSetupPassword(event.target.value)} placeholder="Password" aria-label="Password" />
                        <input className="lifespace-web-auth-input" type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm password" aria-label="Confirm password" />
                        <input className="lifespace-web-auth-input" type="email" value={recoveryEmail} onChange={(event) => setRecoveryEmail(event.target.value)} placeholder="Recovery email" aria-label="Recovery email" />
                      </div>
                      {authError ? (
                        <div className="lifespace-web-auth-error-row">
                          <p className="lifespace-web-auth-error">{authError}</p>
                          {usernameTaken ? (
                            <button
                              type="button"
                              className="lifespace-web-auth-inline-link"
                              onClick={() => {
                                setLinkUsername(setupUsername.trim());
                                setLinkPassword("");
                                setAuthError("");
                                setAuthStep("link");
                              }}
                            >
                              Login?
                            </button>
                          ) : null}
                        </div>
                      ) : null}
                      <div className="lifespace-web-auth-actions">
                        <button
                          type="button"
                          className="lifespace-secondary-action"
                          onClick={() => {
                            setAuthStep("code");
                            setAuthError("");
                          }}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          className="lifespace-primary-action lifespace-web-auth-button"
                          onClick={() => void handleAccountCreate()}
                          disabled={authBusy}
                        >
                          {authBusy ? "Creating..." : "Create account"}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h1>Link your account</h1>
                      <p>{`Code accepted: ${verifiedCode}`}</p>
                      <div className="lifespace-web-auth-grid">
                        <input
                          className="lifespace-web-auth-input"
                          value={linkUsername}
                          onChange={(event) => setLinkUsername(event.target.value)}
                          placeholder="Username"
                          aria-label="Username"
                        />
                        <input
                          className="lifespace-web-auth-input"
                          type="password"
                          value={linkPassword}
                          onChange={(event) => setLinkPassword(event.target.value)}
                          placeholder="Password"
                          aria-label="Password"
                        />
                      </div>
                      {authError ? <p className="lifespace-web-auth-error">{authError}</p> : null}
                      <div className="lifespace-web-auth-actions">
                        <button
                          type="button"
                          className="lifespace-secondary-action"
                          onClick={() => {
                            setAuthStep("setup");
                            setAuthError("");
                          }}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          className="lifespace-primary-action lifespace-web-auth-button"
                          onClick={() => void handleAccountLink()}
                          disabled={authBusy}
                        >
                          {authBusy ? "Logging in..." : "Login"}
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <Link href="/" className="lifespace-web-auth-back-link">
                  ← Back to Astrology Today
                </Link>
              </div>
            </section>
          </section>
        )}
      </ScaledPageCanvas>

      {pageMode === "construction" ? (
        <div className="lifespace-under-construction">
          <div className="lifespace-under-construction-panel">
            <h2>Check Back Soon For Updates!</h2>
            <a
              href="https://testflight.apple.com/join/5jkdSs4A"
              className="lifespace-under-construction-download"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/lifespace-under-construction-icon.png"
                alt="LIFESPACE app icon"
                className="lifespace-under-construction-icon"
              />
              <span className="lifespace-under-construction-kicker">Get the Beta</span>
            </a>
            <Link href="/" className="lifespace-under-construction-back" aria-label="Back">
              <span aria-hidden="true">←</span>
              <span>Back</span>
            </Link>
          </div>
        </div>
      ) : null}

      {SHOW_DEBUGGERS ? (debuggerVisible ? (
        <div
          className="downloads-debugger"
          style={{ transform: `translate(${debuggerOffset.x}px, ${debuggerOffset.y}px)` }}
        >
          <div className="downloads-debugger-header">
            <p className="downloads-debugger-title">LIFESPACE Debugger</p>
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
            Drag Debugger
          </button>
          <div className="downloads-debugger-readout">
            {pageMode === "construction"
              ? "Under construction view"
              : pageMode === "preview"
                ? "Original preview view"
                : "Final account flow view"}
          </div>
          <label className="downloads-debugger-select-wrap">
            <span>View</span>
            <select
              className="downloads-debugger-select"
              value={pageMode}
              onChange={(event) => setPageMode(event.target.value as LifespacePageMode)}
            >
              <option value="construction">Under construction</option>
              <option value="preview">Original preview</option>
              <option value="final">Final version</option>
            </select>
          </label>
          <div className="downloads-debugger-actions">
            <button type="button" className="downloads-debugger-reset" onClick={() => setPageMode("construction")}>
              Under Construction
            </button>
            <button type="button" className="downloads-debugger-reset" onClick={() => setPageMode("preview")}>
              Original Preview
            </button>
            <button type="button" className="downloads-debugger-reset" onClick={() => setPageMode("final")}>
              Final Version
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="home-logo-debugger-toggle-button"
          onClick={() => setDebuggerVisible(true)}
          aria-label="Open LIFESPACE debugger"
        >
          D
        </button>
      )) : null}
    </main>
  );
}
