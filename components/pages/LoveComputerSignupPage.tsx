"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getWebAccountByUsername, createWebAccount } from "../../lib/firebase/lifespace";
import {
  createEmailPasswordAuthAccount,
  getFirebaseAuthErrorMessage,
  getStoredLifespaceSession,
  rollbackCurrentAuthAccount,
  setStoredLifespaceSession,
  type LifespaceWebSession,
} from "../../lib/lifespace/webAuth";

function buildRelationshipCalculatorLinkedCode() {
  return `LC-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`.toUpperCase();
}

function getReturnPath(pathname: string) {
  return pathname.replace(/\/sign-up\/?$/, "") || "/love-computer";
}

export default function LoveComputerSignupPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const session = getStoredLifespaceSession();
    if (session) {
      router.replace(getReturnPath(pathname));
    }
  }, [pathname, router]);

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedUsername = username.trim();
    const trimmedRecoveryEmail = recoveryEmail.trim().toLowerCase();
    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedRecoveryEmail);

    if (!trimmedUsername || !password || !confirmPassword || !trimmedRecoveryEmail) {
      setMessage("Please complete all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (!emailLooksValid) {
      setMessage("Enter a valid recovery email.");
      return;
    }

    setBusy(true);
    setMessage("");

    try {
      const existing = await getWebAccountByUsername(trimmedUsername);
      if (existing) {
        throw new Error("That username is already taken.");
      }

      await createEmailPasswordAuthAccount(trimmedRecoveryEmail, password);
      let account = null;
      let attempts = 0;

      while (!account && attempts < 3) {
        attempts += 1;
        account = await createWebAccount({
          username: trimmedUsername,
          usernameLower: trimmedUsername.toLowerCase(),
          recoveryEmail: trimmedRecoveryEmail,
          linkedCode: buildRelationshipCalculatorLinkedCode(),
        });
      }

      if (!account) {
        throw new Error("Unable to create the account.");
      }

      const session = {
        username: account.username,
        usernameLower: account.usernameLower,
        linkedCode: account.linkedCode,
      } satisfies LifespaceWebSession;

      setStoredLifespaceSession(session);
      router.replace(getReturnPath(pathname));
      router.refresh();
    } catch (error) {
      await rollbackCurrentAuthAccount();
      setMessage(
        getFirebaseAuthErrorMessage(
          error,
          error instanceof Error ? error.message : "Unable to create the account."
        )
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="love-computer-auth-shell">
      <section className="love-computer-auth-card">
        <h1>Relationship Calculator</h1>
        <p>Create an account to save your charts and notes.</p>
        <form className="love-computer-auth-form" onSubmit={handleSignup}>
          <input
            className="love-computer-auth-input"
            type="text"
            placeholder="Username"
            aria-label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="love-computer-auth-input"
            type="password"
            placeholder="Password"
            aria-label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            className="love-computer-auth-input"
            type="password"
            placeholder="Confirm Password"
            aria-label="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <input
            className="love-computer-auth-input"
            type="email"
            placeholder="Recovery Email"
            aria-label="Recovery Email"
            value={recoveryEmail}
            onChange={(event) => setRecoveryEmail(event.target.value)}
          />
          {message ? <p className="love-computer-auth-error">{message}</p> : null}
          <button type="submit" className="love-computer-auth-button" disabled={busy}>
            {busy ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="love-computer-auth-signup">
          Already have an account? <Link href={getReturnPath(pathname)}>Log in</Link>
        </p>
      </section>
    </main>
  );
}
