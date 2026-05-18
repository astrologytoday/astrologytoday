export const CLIENT_SUBSCRIPTION_PLAN_KEYS = [
  "monthly30",
  "monthly60",
  "biweekly30",
  "biweekly60",
  "weekly30",
  "weekly60",
] as const;

export type ClientSubscriptionPlanKey = (typeof CLIENT_SUBSCRIPTION_PLAN_KEYS)[number];

export type ClientSubscriptionSquarePlan = {
  key: ClientSubscriptionPlanKey;
  name: string;
  amountCents: number;
  currency: "CAD";
  /**
   * Paste the real Square subscription plan variation ID here when ready.
   * These placeholders are intentionally obvious so they can be replaced.
   */
  squareSubscriptionPlanVariationId: string;
};

export const CLIENT_SUBSCRIPTION_SQUARE_PLANS: Record<
  ClientSubscriptionPlanKey,
  ClientSubscriptionSquarePlan
> = {
  monthly30: {
    key: "monthly30",
    name: "Monthly 30-Minute Session",
    amountCents: 2199,
    currency: "CAD",
    squareSubscriptionPlanVariationId: "REPLACE_WITH_SQUARE_PLAN_VARIATION_ID_MONTHLY_30",
  },
  monthly60: {
    key: "monthly60",
    name: "Monthly 60-Minute Session",
    amountCents: 2999,
    currency: "CAD",
    squareSubscriptionPlanVariationId: "REPLACE_WITH_SQUARE_PLAN_VARIATION_ID_MONTHLY_60",
  },
  biweekly30: {
    key: "biweekly30",
    name: "Bi-Weekly 30-Minute Session",
    amountCents: 4199,
    currency: "CAD",
    squareSubscriptionPlanVariationId: "REPLACE_WITH_SQUARE_PLAN_VARIATION_ID_BIWEEKLY_30",
  },
  biweekly60: {
    key: "biweekly60",
    name: "Bi-Weekly 60-Minute Session",
    amountCents: 7999,
    currency: "CAD",
    squareSubscriptionPlanVariationId: "REPLACE_WITH_SQUARE_PLAN_VARIATION_ID_BIWEEKLY_60",
  },
  weekly30: {
    key: "weekly30",
    name: "Weekly 30-Minute Session",
    amountCents: 8299,
    currency: "CAD",
    squareSubscriptionPlanVariationId: "REPLACE_WITH_SQUARE_PLAN_VARIATION_ID_WEEKLY_30",
  },
  weekly60: {
    key: "weekly60",
    name: "Weekly 60-Minute Session",
    amountCents: 10299,
    currency: "CAD",
    squareSubscriptionPlanVariationId: "REPLACE_WITH_SQUARE_PLAN_VARIATION_ID_WEEKLY_60",
  },
};

export function isClientSubscriptionPlanKey(value: string): value is ClientSubscriptionPlanKey {
  return CLIENT_SUBSCRIPTION_PLAN_KEYS.includes(value as ClientSubscriptionPlanKey);
}

export function getClientSubscriptionPlanKey(
  frequency: string,
  duration: string,
): ClientSubscriptionPlanKey | null {
  if (frequency === "Monthly" && duration === "30-minute") return "monthly30";
  if (frequency === "Monthly" && duration === "60-minute") return "monthly60";
  if (frequency === "Biweekly" && duration === "30-minute") return "biweekly30";
  if (frequency === "Biweekly" && duration === "60-minute") return "biweekly60";
  if (frequency === "Weekly" && duration === "30-minute") return "weekly30";
  if (frequency === "Weekly" && duration === "60-minute") return "weekly60";

  return null;
}
