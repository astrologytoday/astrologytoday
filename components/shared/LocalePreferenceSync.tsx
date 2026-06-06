"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  LOCALE_PREFERENCE_KEY,
  defaultLocale,
  isSupportedLocale,
  withExplicitLocale,
} from "../../lib/i18n";

function getPathLocale(pathname: string) {
  const segment = pathname.split("/")[1];
  return segment && isSupportedLocale(segment) ? segment : null;
}

function getCookieLocale() {
  const prefix = `${LOCALE_PREFERENCE_KEY}=`;
  const value = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix))
    ?.slice(prefix.length);

  if (!value) return null;

  const decodedValue = decodeURIComponent(value);
  return isSupportedLocale(decodedValue) ? decodedValue : null;
}

export default function LocalePreferenceSync() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const localeFromPath = getPathLocale(pathname);

    if (localeFromPath) {
      window.localStorage.setItem(LOCALE_PREFERENCE_KEY, localeFromPath);
      document.documentElement.lang = localeFromPath;
      document.cookie = `${LOCALE_PREFERENCE_KEY}=${localeFromPath}; path=/; max-age=31536000; SameSite=Lax`;
      return;
    }

    const cookieLocale = getCookieLocale();
    let storedLocale: string | null = cookieLocale;

    try {
      storedLocale ||= window.localStorage.getItem(LOCALE_PREFERENCE_KEY);
      if (cookieLocale) {
        window.localStorage.setItem(LOCALE_PREFERENCE_KEY, cookieLocale);
      }
    } catch {
      // Cookie preference remains available when storage is unavailable.
    }

    if (!storedLocale || !isSupportedLocale(storedLocale) || storedLocale === defaultLocale) {
      document.documentElement.lang = defaultLocale;
      return;
    }

    const query = searchParams.toString();
    const targetPath = withExplicitLocale(storedLocale, pathname);
    const targetHref = query ? `${targetPath}?${query}` : targetPath;
    const currentHref = query ? `${pathname}?${query}` : pathname;

    if (targetHref !== currentHref) {
      router.replace(targetHref);
    }
  }, [pathname, router, searchParams]);

  return null;
}
