"use client";

import {
  createUserWithEmailAndPassword,
  deleteUser,
  type AuthError,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getWebAccountByUsername } from "../firebase/lifespace";
import { getFirebaseAuth } from "../firebase/config";

export const LIFESPACE_WEB_SESSION_KEY = "astrologytoday-lifespace-web-session-v1";
export const LIFESPACE_AUTH_EVENT = "astrologytoday-lifespace-auth-changed";

export type LifespaceWebSession = {
  username: string;
  usernameLower: string;
  linkedCode: string;
};

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
}

export async function hashPassword(password: string) {
  const encoder = new TextEncoder();
  const digest = await window.crypto.subtle.digest("SHA-256", encoder.encode(password));
  return toHex(digest);
}

export function getFirebaseAuthErrorMessage(error: unknown, fallback: string) {
  const code =
    error && typeof error === "object" && "code" in error ? (error as AuthError).code : "";

  switch (code) {
    case "auth/configuration-not-found":
      return "Email/password sign-in is not enabled for this Firebase project yet.";
    case "auth/email-already-in-use":
      return "That recovery email is already connected to another account.";
    case "auth/invalid-email":
      return "Enter a valid recovery email.";
    case "auth/weak-password":
      return "Choose a stronger password.";
    case "auth/too-many-requests":
      return "Too many attempts right now. Please try again in a moment.";
    default:
      return fallback;
  }
}

export function getStoredLifespaceSession() {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(LIFESPACE_WEB_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LifespaceWebSession>;
    if (!parsed.username || !parsed.usernameLower || !parsed.linkedCode) return null;
    return {
      username: parsed.username,
      usernameLower: parsed.usernameLower,
      linkedCode: parsed.linkedCode,
    } satisfies LifespaceWebSession;
  } catch {
    return null;
  }
}

export function setStoredLifespaceSession(session: LifespaceWebSession | null) {
  if (typeof window === "undefined") return;

  if (session) {
    window.localStorage.setItem(LIFESPACE_WEB_SESSION_KEY, JSON.stringify(session));
  } else {
    window.localStorage.removeItem(LIFESPACE_WEB_SESSION_KEY);
  }

  window.dispatchEvent(new Event(LIFESPACE_AUTH_EVENT));
}

export async function authenticateLifespaceAccount(username: string, password: string) {
  const account = await getWebAccountByUsername(username);
  if (!account) return null;

  const auth = getFirebaseAuth();
  if (auth && account.recoveryEmail) {
    try {
      await signInWithEmailAndPassword(auth, account.recoveryEmail, password);
    } catch {
      const passwordHash = await hashPassword(password);
      if (passwordHash !== (account.passwordHash ?? "")) return null;
    }
  } else {
    const passwordHash = await hashPassword(password);
    if (passwordHash !== (account.passwordHash ?? "")) return null;
  }

  const session = {
    username: account.username,
    usernameLower: account.usernameLower,
    linkedCode: account.linkedCode,
  } satisfies LifespaceWebSession;

  setStoredLifespaceSession(session);
  return session;
}

export async function createEmailPasswordAuthAccount(email: string, password: string) {
  const auth = getFirebaseAuth();
  if (!auth) {
    throw new Error("Firebase authentication is not configured.");
  }

  return createUserWithEmailAndPassword(auth, email, password);
}

export async function rollbackCurrentAuthAccount() {
  const auth = getFirebaseAuth();
  if (!auth?.currentUser) return;

  try {
    await deleteUser(auth.currentUser);
  } catch {
    // Best-effort cleanup for partially created auth users.
  }
}

export async function requestPasswordReset(email: string) {
  const auth = getFirebaseAuth();
  if (!auth) {
    throw new Error("Firebase authentication is not configured.");
  }

  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as { code?: string }).code === "auth/user-not-found"
    ) {
      return;
    }

    throw error;
  }
}

export async function refreshStoredLifespaceSession() {
  const session = getStoredLifespaceSession();
  if (!session) return null;

  const account = await getWebAccountByUsername(session.usernameLower);
  if (!account) {
    setStoredLifespaceSession(null);
    return null;
  }

  const refreshed = {
    username: account.username,
    usernameLower: account.usernameLower,
    linkedCode: account.linkedCode,
  } satisfies LifespaceWebSession;

  setStoredLifespaceSession(refreshed);
  return refreshed;
}
