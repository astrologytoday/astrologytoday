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
      document.cookie = `${LOCALE_PREFERENCE_KEY}=${localeFromPath}; path=/; max-age=31536000; SameSite=Lax`;
      return;
    }

    const storedLocale = window.localStorage.getItem(LOCALE_PREFERENCE_KEY);

    if (!storedLocale || !isSupportedLocale(storedLocale) || storedLocale === defaultLocale) {
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
