import { NextRequest, NextResponse } from "next/server";
import {
  CLIENT_SUBSCRIPTION_SQUARE_PLANS,
  isClientSubscriptionPlanKey,
} from "../../../../lib/square";

type SquareCreatePaymentLinkResponse = {
  payment_link?: {
    id?: string;
    order_id?: string;
    url?: string;
  };
  related_resources?: {
    orders?: Array<{
      id?: string;
    }>;
  };
  errors?: Array<{
    code?: string;
    detail?: string;
    field?: string;
  }>;
};

function normalizeSquareToken(value: string | undefined) {
  if (!value) return undefined;

  return value
    .trim()
    .replace(/^"(.*)"$/, "$1")
    .replace(/^'(.*)'$/, "$1");
}

function getSquareApiBase(environment: string) {
  return environment === "production"
    ? "https://connect.squareup.com"
    : "https://connect.squareupsandbox.com";
}

export async function POST(request: NextRequest) {
  const { selectedPlan, intakeId } = (await request.json()) as {
    selectedPlan?: string;
    intakeId?: string;
  };

  if (!selectedPlan || !isClientSubscriptionPlanKey(selectedPlan)) {
    return NextResponse.json({ error: "Invalid subscription plan selected." }, { status: 400 });
  }

  const rawAccessToken = process.env.SQUARE_ACCESS_TOKEN;
  const accessToken = normalizeSquareToken(rawAccessToken);
  const locationId = process.env.SQUARE_LOCATION_ID;
  const environment = process.env.SQUARE_ENVIRONMENT ?? "sandbox";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  console.log("[square-checkout] env check", {
    hasAccessToken: Boolean(accessToken),
    rawAccessTokenLength: rawAccessToken?.length ?? 0,
    accessTokenLength: accessToken?.length ?? 0,
    tokenWasWrappedInQuotes:
      rawAccessToken?.startsWith('"') ||
      rawAccessToken?.endsWith('"') ||
      rawAccessToken?.startsWith("'") ||
      rawAccessToken?.endsWith("'"),
    hasLocationId: Boolean(locationId),
    environment,
    apiBase: getSquareApiBase(environment),
  });

  if (!accessToken || !locationId || !siteUrl) {
    return NextResponse.json(
      { error: "Square checkout is not configured yet. Missing environment variables." },
      { status: 500 },
    );
  }

  const plan = CLIENT_SUBSCRIPTION_SQUARE_PLANS[selectedPlan];
  const apiBase = getSquareApiBase(environment);
  const successUrl = `${siteUrl}/pricing/client-questionnaire?checkout=success&plan=${plan.key}`;
  const cancelUrl = `${siteUrl}/pricing/client-questionnaire?checkout=cancelled&plan=${plan.key}`;
  const paymentNoteParts = [
    `Client Subscription checkout: ${plan.key}.`,
    intakeId ? `Intake ID: ${intakeId}.` : null,
    `If using subscription plan variations later, replace placeholder ${plan.squareSubscriptionPlanVariationId}.`,
    `Cancel return: ${cancelUrl}`,
  ].filter(Boolean);

  /**
   * Square hosted checkout is being created through CreatePaymentLink.
   *
   * Today this uses quick_pay so the user is redirected into a hosted Square
   * payment experience without card collection on our site.
   *
   * When your real Square subscription plan variation IDs are ready, replace
   * this request body with the subscription-plan variation flow supported in
   * your Square account and paste each variation ID into
   * `squareSubscriptionPlanVariationId` in `lib/square.ts`.
   */
  const squareResponse = await fetch(`${apiBase}/v2/online-checkout/payment-links`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Square-Version": "2025-10-16",
    },
    body: JSON.stringify({
      idempotency_key: crypto.randomUUID(),
      quick_pay: {
        name: plan.name,
        price_money: {
          amount: plan.amountCents,
          currency: plan.currency,
        },
        location_id: locationId,
      },
      checkout_options: {
        redirect_url: successUrl,
        merchant_support_email: "mariosbardella@protonmail.com",
      },
      payment_note: paymentNoteParts.join(" "),
    }),
  });

  const squareJson = (await squareResponse.json()) as SquareCreatePaymentLinkResponse;

  console.log(
    "[square-checkout] square response",
    JSON.stringify(
      {
        status: squareResponse.status,
        ok: squareResponse.ok,
        body: squareJson,
      },
      null,
      2,
    ),
  );

  if (!squareResponse.ok || !squareJson.payment_link?.url) {
    return NextResponse.json(
      {
        error:
          squareJson.errors?.[0]?.detail ??
          "Square checkout could not be created. Please try again.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    checkoutUrl: squareJson.payment_link.url,
    paymentLinkId: squareJson.payment_link.id ?? null,
    orderId:
      squareJson.payment_link.order_id ??
      squareJson.related_resources?.orders?.[0]?.id ??
      null,
    successUrl,
    cancelUrl,
  });
}
