export type LifespaceModule =
  | "light"
  | "innerWork"
  | "fitness"
  | "eating"
  | "sensory"
  | "purpose"
  | "activity"
  | "community"
  | "expression";

export type CheckType = "lifespace" | "lifestyleSurvey";

export const LIFESPACE_MODULES: LifespaceModule[] = [
  "light",
  "innerWork",
  "fitness",
  "eating",
  "sensory",
  "purpose",
  "activity",
  "community",
  "expression",
];

export const LIFESPACE_MODULE_LABELS: Record<LifespaceModule, string> = {
  light: "Light",
  innerWork: "Inner Work",
  fitness: "Fitness",
  eating: "Eating",
  sensory: "Sensory",
  purpose: "Purpose",
  activity: "Activity",
  community: "Community",
  expression: "Expression",
};

export type UserProfile = {
  userId: string;
  username: string;
  gender: string;
  height: string;
  weight: string;
  age: string;
  drinksPerWeek: string;
  smokingStatus: string;
  customActivity?: string | null;
  customExpression?: string | null;
  customInnerWork?: string | null;
  activityOptions: string[];
  expressionOptions: string[];
  fitnessOptions: string[];
  innerWorkOptions: string[];
  purposeOptions: string[];
  updatedAt?: Date | null;
};

export type LifespaceLogEntry = {
  id: string;
  userId: string;
  date: Date;
  type: CheckType;
  module: LifespaceModule;
  questionCount: number;
  yesCount: number;
  source?: "ios" | "web" | "unknown";
  createdAt?: Date | null;
};

export type YearSummary = {
  year: number;
  overallScore: number;
  moduleScores: Partial<Record<LifespaceModule, number>>;
};

export type LifespaceConnection = {
  id: string;
  ownerUserId: string;
  connectedUserId: string;
  relationshipType: "self" | "friend" | "client" | "partner";
  canCompareScores: boolean;
  displayName?: string;
};

export type ModuleScoreMap = Record<LifespaceModule, number>;

export type ComparisonUser = {
  userId: string;
  label: string;
};

export type LifespaceSharedSnapshot = {
  userShareCode: string;
  sharingEnabled: boolean;
  profileUsername: string;
  todayScore: number;
  lifetimeModuleAverages: ModuleScoreMap;
  weakestModules: LifespaceModule[];
  updatedAt?: Date | null;
};

export type LifespaceWebAccount = {
  username: string;
  usernameLower: string;
  passwordHash?: string;
  recoveryEmail: string;
  linkedCode: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};
