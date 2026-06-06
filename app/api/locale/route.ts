import { NextRequest, NextResponse } from "next/server";
import {
  LOCALE_PREFERENCE_KEY,
  defaultLocale,
  isSupportedLocale,
} from "../../../lib/i18n";

function getSafeReturnPath(value: string | null, locale: string) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return locale === defaultLocale ? "/" : `/${locale}`;
  }

  return value;
}

export function GET(request: NextRequest) {
  const localeParam = request.nextUrl.searchParams.get("locale") ?? "";
  const locale = isSupportedLocale(localeParam) ? localeParam : defaultLocale;
  const returnTo = getSafeReturnPath(request.nextUrl.searchParams.get("returnTo"), locale);
  const response = NextResponse.redirect(new URL(returnTo, request.url));

  response.cookies.set(LOCALE_PREFERENCE_KEY, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}
