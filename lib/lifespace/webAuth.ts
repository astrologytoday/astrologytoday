"use client";

import { getWebAccountByUsername } from "../firebase/lifespace";

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

  const passwordHash = await hashPassword(password);
  if (passwordHash !== account.passwordHash) return null;

  const session = {
    username: account.username,
    usernameLower: account.usernameLower,
    linkedCode: account.linkedCode,
  } satisfies LifespaceWebSession;

  setStoredLifespaceSession(session);
  return session;
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
