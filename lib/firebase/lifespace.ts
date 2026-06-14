import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
  writeBatch,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { getFirestoreDb } from "./config";
import type {
  LifespaceConnection,
  LifespaceLogEntry,
  LifespaceModule,
  LifespaceSharedSnapshot,
  LifespaceTherapistClient,
  LifespaceWebAccount,
  UserProfile,
  YearSummary,
} from "../lifespace/types";
import type { ClientSubscriptionPlanKey } from "../square";

function toDate(value: Timestamp | Date | string | null | undefined) {
  if (!value) return null;
  if (value instanceof Timestamp) {
    return value.toDate();
  }
  if (value instanceof Date) return value;
  return new Date(value);
}

function toStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function mapUserProfile(userId: string, data: DocumentData): UserProfile {
  return {
    userId,
    username: data.username ?? "",
    gender: data.gender ?? "",
    height: data.height ?? "",
    weight: data.weight ?? "",
    age: data.age ?? "",
    drinksPerWeek: data.drinksPerWeek ?? "",
    smokingStatus: data.smokingStatus ?? "",
    customActivity: data.customActivity ?? null,
    customExpression: data.customExpression ?? null,
    customInnerWork: data.customInnerWork ?? null,
    activityOptions: toStringArray(data.activityOptions),
    expressionOptions: toStringArray(data.expressionOptions),
    fitnessOptions: toStringArray(data.fitnessOptions),
    innerWorkOptions: toStringArray(data.innerWorkOptions),
    purposeOptions: toStringArray(data.purposeOptions),
    updatedAt: toDate(data.updatedAt),
  };
}

function mapLogEntry(snapshot: QueryDocumentSnapshot<DocumentData>, userId: string): LifespaceLogEntry {
  const data = snapshot.data();
  return {
    id: snapshot.id,
    userId,
    date: toDate(data.date) ?? new Date(),
    type: data.type ?? "lifespace",
    module: data.module as LifespaceModule,
    questionCount: Number(data.questionCount ?? 0),
    yesCount: Number(data.yesCount ?? 0),
    source: data.source ?? "unknown",
    createdAt: toDate(data.createdAt),
  };
}

function emptyModuleScores() {
  return {
    light: 0,
    innerWork: 0,
    fitness: 0,
    eating: 0,
    sensory: 0,
    purpose: 0,
    activity: 0,
    community: 0,
    expression: 0,
  } satisfies Record<LifespaceModule, number>;
}

function normalizeModuleScores(value: unknown) {
  const raw = value && typeof value === "object" ? (value as Partial<Record<LifespaceModule, unknown>>) : {};
  const base = emptyModuleScores();

  for (const module of Object.keys(base) as LifespaceModule[]) {
    base[module] = Number(raw[module] ?? 0);
  }

  return base;
}

function normalizeWeakestModules(value: unknown) {
  return Array.isArray(value)
    ? value.filter(
        (item): item is LifespaceModule =>
          typeof item === "string" &&
          ["light", "innerWork", "fitness", "eating", "sensory", "purpose", "activity", "community", "expression"].includes(item),
      )
    : [];
}

function mapSharedSnapshot(code: string, data: DocumentData): LifespaceSharedSnapshot {
  const analytics = (data.analytics ?? {}) as DocumentData;
  const latestResult = (data.latestResult ?? {}) as DocumentData;
  const profile = (data.profile ?? {}) as DocumentData;

  return {
    userShareCode: code,
    sharingEnabled: Boolean(data.sharingEnabled),
    profileUsername: profile.username ?? "",
    todayScore: Number(analytics.todayScore ?? 0),
    lifetimeModuleAverages: normalizeModuleScores(analytics.lifetimeModuleAverages),
    weakestModules: normalizeWeakestModules(latestResult.weakestModules),
    updatedAt: toDate(data.updatedAt),
  };
}

function mapWebAccount(data: DocumentData): LifespaceWebAccount {
  const linkedCode = data.linkedCode ?? "";
  const lifespaceLinkedCode =
    data.lifespaceLinkedCode ?? (typeof linkedCode === "string" && linkedCode.startsWith("LS-") ? linkedCode : "");

  return {
    username: data.username ?? "",
    usernameLower: data.usernameLower ?? "",
    passwordHash: data.passwordHash ?? "",
    recoveryEmail: data.recoveryEmail ?? "",
    linkedCode,
    lifespaceLinkedCode,
    therapistLinkedCode: data.therapistLinkedCode ?? "",
    createdAt: toDate(data.createdAt),
    updatedAt: toDate(data.updatedAt),
  };
}

function toEmailDocId(email: string) {
  return email.trim().toLowerCase();
}

type ClientIntakeQuestionnaireAnswers = {
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

export async function getUserProfile(userId: string) {
  const db = getFirestoreDb();
  if (!db) return null;

  const snapshot = await getDoc(doc(db, "users", userId));
  if (!snapshot.exists()) return null;
  return mapUserProfile(userId, snapshot.data());
}

export async function getLifespaceLogs(userId: string, max = 180) {
  const db = getFirestoreDb();
  if (!db) return [];

  const logsQuery = query(
    collection(db, "users", userId, "lifespaceLogs"),
    orderBy("date", "desc"),
    limit(max),
  );

  const snapshot = await getDocs(logsQuery);
  return snapshot.docs.map((docSnapshot) => mapLogEntry(docSnapshot, userId));
}

export async function getYearSummaries(userId: string) {
  const db = getFirestoreDb();
  if (!db) return [];

  const snapshot = await getDocs(collection(db, "users", userId, "yearSummaries"));
  return snapshot.docs
    .map((docSnapshot) => {
      const data = docSnapshot.data();
      return {
        year: Number(docSnapshot.id),
        overallScore: Number(data.overallScore ?? 0),
        moduleScores: (data.moduleScores ?? {}) as YearSummary["moduleScores"],
      } satisfies YearSummary;
    })
    .sort((a, b) => a.year - b.year);
}

export async function getConnections(userId: string) {
  const db = getFirestoreDb();
  if (!db) return [];

  const snapshot = await getDocs(collection(db, "users", userId, "connections"));
  return snapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data();
    return {
      id: docSnapshot.id,
      ownerUserId: userId,
      connectedUserId: data.connectedUserId ?? "",
      relationshipType: data.relationshipType ?? "friend",
      canCompareScores: Boolean(data.canCompareScores),
      displayName: data.displayName ?? undefined,
    } satisfies LifespaceConnection;
  });
}

export async function getSharedLifespaceSnapshot(code: string) {
  const db = getFirestoreDb();
  if (!db) return null;

  const normalizedCode = code.trim().toUpperCase();
  if (!normalizedCode) return null;

  const snapshot = await getDoc(doc(db, "lifespaceSharedData", normalizedCode));
  if (!snapshot.exists()) return null;

  return mapSharedSnapshot(normalizedCode, snapshot.data());
}

export async function getWebAccountByUsername(username: string) {
  const db = getFirestoreDb();
  if (!db) return null;

  const usernameLower = username.trim().toLowerCase();
  if (!usernameLower) return null;

  const snapshot = await getDoc(doc(db, "lifespaceWebAccounts", usernameLower));
  if (!snapshot.exists()) return null;

  return mapWebAccount(snapshot.data());
}

export async function getWebAccountByCode(code: string) {
  const db = getFirestoreDb();
  if (!db) return null;

  const normalizedCode = code.trim().toUpperCase();
  if (!normalizedCode) return null;

  const lifespaceCodeQuery = query(
    collection(db, "lifespaceWebAccounts"),
    where("lifespaceLinkedCode", "==", normalizedCode),
    limit(1),
  );

  let snapshot = await getDocs(lifespaceCodeQuery);
  let match = snapshot.docs[0];

  if (!match) {
    const legacyCodeQuery = query(
      collection(db, "lifespaceWebAccounts"),
      where("linkedCode", "==", normalizedCode),
      limit(1),
    );
    snapshot = await getDocs(legacyCodeQuery);
    match = snapshot.docs[0];
  }

  if (!match) return null;

  return mapWebAccount(match.data());
}

export async function getWebAccountByTherapistCode(code: string) {
  const db = getFirestoreDb();
  if (!db) return null;

  const normalizedCode = code.trim().toUpperCase();
  if (!normalizedCode) return null;

  const therapistCodeQuery = query(
    collection(db, "lifespaceWebAccounts"),
    where("therapistLinkedCode", "==", normalizedCode),
    limit(1),
  );
  const snapshot = await getDocs(therapistCodeQuery);
  const match = snapshot.docs[0];

  return match ? mapWebAccount(match.data()) : null;
}

export async function getTherapistClients(usernameLower: string) {
  const db = getFirestoreDb();
  if (!db) return [];

  const normalizedUsername = usernameLower.trim().toLowerCase();
  if (!normalizedUsername) return [];

  const snapshot = await getDocs(
    query(
      collection(db, "lifespaceWebAccounts", normalizedUsername, "therapistClients"),
      orderBy("name"),
    ),
  );

  return snapshot.docs.map((clientSnapshot) => {
    const data = clientSnapshot.data();
    return {
      id: clientSnapshot.id,
      name: data.name ?? "",
      lifespaceLinkedCode: data.lifespaceLinkedCode ?? "",
      createdAt: toDate(data.createdAt),
      updatedAt: toDate(data.updatedAt),
    } satisfies LifespaceTherapistClient;
  });
}

export async function addTherapistClient(
  usernameLower: string,
  client: {
    name: string;
    lifespaceLinkedCode: string;
  },
) {
  const db = getFirestoreDb();
  if (!db) throw new Error("Firebase is not configured.");

  const normalizedUsername = usernameLower.trim().toLowerCase();
  const normalizedName = client.name.trim();
  const normalizedCode = client.lifespaceLinkedCode.trim().toUpperCase();

  if (!normalizedUsername || !normalizedName || !normalizedCode.startsWith("LS-")) {
    throw new Error("Enter a client name and valid LIFESPACE code.");
  }

  const sharedSnapshot = await getSharedLifespaceSnapshot(normalizedCode);
  if (!sharedSnapshot || !sharedSnapshot.sharingEnabled) {
    throw new Error("That LIFESPACE client code was not found or sharing is disabled.");
  }

  const clientRef = doc(
    db,
    "lifespaceWebAccounts",
    normalizedUsername,
    "therapistClients",
    normalizedCode,
  );
  const existing = await getDoc(clientRef);

  await setDoc(
    clientRef,
    {
      name: normalizedName,
      lifespaceLinkedCode: normalizedCode,
      createdAt: existing.exists() ? existing.data().createdAt ?? serverTimestamp() : serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  const saved = await getDoc(clientRef);
  if (!saved.exists()) {
    throw new Error("Unable to save that client.");
  }

  const data = saved.data();
  return {
    id: saved.id,
    name: data.name ?? normalizedName,
    lifespaceLinkedCode: data.lifespaceLinkedCode ?? normalizedCode,
    createdAt: toDate(data.createdAt),
    updatedAt: toDate(data.updatedAt),
  } satisfies LifespaceTherapistClient;
}

export async function createWebAccount(account: {
  username: string;
  usernameLower: string;
  passwordHash?: string;
  recoveryEmail: string;
  linkedCode?: string;
  lifespaceLinkedCode?: string;
}) {
  const db = getFirestoreDb();
  if (!db) throw new Error("Firebase is not configured.");

  const accountRef = doc(db, "lifespaceWebAccounts", account.usernameLower);
  const existing = await getDoc(accountRef);
  if (existing.exists()) {
    throw new Error("That username is already taken.");
  }

  if (account.lifespaceLinkedCode) {
    const linkedAccount = await getWebAccountByCode(account.lifespaceLinkedCode);
    if (linkedAccount) {
      throw new Error("That app user code is already connected to another account.");
    }
  }

  const payload: Record<string, unknown> = {
    username: account.username,
    usernameLower: account.usernameLower,
    recoveryEmail: account.recoveryEmail,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  if (typeof account.linkedCode === "string" && account.linkedCode.length > 0) {
    payload.linkedCode = account.linkedCode;
  }

  if (typeof account.lifespaceLinkedCode === "string" && account.lifespaceLinkedCode.length > 0) {
    payload.lifespaceLinkedCode = account.lifespaceLinkedCode;
  }

  if (typeof account.passwordHash === "string" && account.passwordHash.length > 0) {
    payload.passwordHash = account.passwordHash;
  }

  await setDoc(accountRef, payload);

  return getWebAccountByUsername(account.usernameLower);
}

export async function updateWebAccountCode(usernameLower: string, linkedCode: string) {
  const db = getFirestoreDb();
  if (!db) throw new Error("Firebase is not configured.");

  const linkedAccount = await getWebAccountByCode(linkedCode);
  if (linkedAccount && linkedAccount.usernameLower !== usernameLower) {
    throw new Error("That app user code is already connected to another account.");
  }

  await setDoc(
    doc(db, "lifespaceWebAccounts", usernameLower),
    {
      lifespaceLinkedCode: linkedCode.trim().toUpperCase(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  return getWebAccountByUsername(usernameLower);
}

export async function upsertMailingListSignup(email: string) {
  const db = getFirestoreDb();
  if (!db) throw new Error("Firebase is not configured.");

  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) {
    throw new Error("Please enter a valid email address.");
  }

  const signupRef = doc(db, "mailingListSignups", toEmailDocId(normalizedEmail));
  const notificationRef = doc(
    db,
    "mailingListNotifications",
    `${toEmailDocId(normalizedEmail)}--newsletter`,
  );
  const existingSignup = await getDoc(signupRef);
  const batch = writeBatch(db);

  batch.set(
    signupRef,
    {
      email: normalizedEmail,
      emailLower: normalizedEmail,
      source: "home-newsletter",
      status: "active",
      createdAt: existingSignup.exists() ? existingSignup.data().createdAt ?? serverTimestamp() : serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  batch.set(
    notificationRef,
    {
      type: "mailing-list-signup",
      recipientEmail: "mariosbardella@protonmail.com",
      sourceEmail: normalizedEmail,
      subject: `${normalizedEmail} has joined your mailing list`,
      status: "pending",
      channel: "email",
      createdAt: existingSignup.exists() ? existingSignup.data().createdAt ?? serverTimestamp() : serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  await batch.commit();

  return {
    email: normalizedEmail,
    queuedNotification: true,
  };
}

export async function createClientIntake(input: {
  answers: ClientIntakeQuestionnaireAnswers;
  selectedPlanKey: ClientSubscriptionPlanKey;
  selectedPrice: string;
}) {
  const db = getFirestoreDb();
  if (!db) throw new Error("Firebase is not configured.");

  const intakeRef = doc(collection(db, "clientIntakes"));

  await setDoc(intakeRef, {
    intakeId: intakeRef.id,
    status: "pending_checkout",
    selectedPlanKey: input.selectedPlanKey,
    selectedPrice: input.selectedPrice,
    questionnaireAnswers: input.answers,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return {
    intakeId: intakeRef.id,
  };
}

export async function attachSquareCheckoutToIntake(input: {
  intakeId: string;
  selectedPlanKey: ClientSubscriptionPlanKey;
  selectedPrice: string;
  squarePaymentLinkId: string;
  squareCheckoutUrl: string;
  squareOrderId?: string | null;
}) {
  const db = getFirestoreDb();
  if (!db) throw new Error("Firebase is not configured.");

  await setDoc(
    doc(db, "clientIntakes", input.intakeId),
    {
      status: "checkout_created",
      selectedPlanKey: input.selectedPlanKey,
      selectedPrice: input.selectedPrice,
      squarePaymentLinkId: input.squarePaymentLinkId,
      squareCheckoutUrl: input.squareCheckoutUrl,
      squareOrderId: input.squareOrderId ?? null,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export type LoveComputerCloudState = {
  savedCharts: unknown[];
  modalNotes: Record<string, string>;
  updatedAt: Date | null;
};

export async function getLoveComputerCloudState(usernameLower: string) {
  const db = getFirestoreDb();
  if (!db) return null;

  const normalizedUsername = usernameLower.trim().toLowerCase();
  if (!normalizedUsername) return null;

  const snapshot = await getDoc(doc(db, "lifespaceWebAccounts", normalizedUsername, "privateData", "loveComputer"));
  if (!snapshot.exists()) return null;

  const data = snapshot.data();
  return {
    savedCharts: Array.isArray(data.savedCharts) ? data.savedCharts : [],
    modalNotes:
      data.modalNotes && typeof data.modalNotes === "object"
        ? Object.fromEntries(
            Object.entries(data.modalNotes as Record<string, unknown>).filter(
              (entry): entry is [string, string] => typeof entry[0] === "string" && typeof entry[1] === "string"
            )
          )
        : {},
    updatedAt: toDate(data.updatedAt),
  } satisfies LoveComputerCloudState;
}

export async function setLoveComputerCloudState(
  usernameLower: string,
  input: {
    savedCharts: unknown[];
    modalNotes: Record<string, string>;
  }
) {
  const db = getFirestoreDb();
  if (!db) throw new Error("Firebase is not configured.");

  const normalizedUsername = usernameLower.trim().toLowerCase();
  if (!normalizedUsername) {
    throw new Error("A username is required to save Love Computer data.");
  }

  await setDoc(
    doc(db, "lifespaceWebAccounts", normalizedUsername, "privateData", "loveComputer"),
    {
      savedCharts: input.savedCharts,
      modalNotes: input.modalNotes,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}
