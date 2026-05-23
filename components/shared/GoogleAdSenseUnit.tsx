"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type GoogleAdSenseUnitProps = {
  adSlot: string;
  className?: string;
  style?: CSSProperties;
};

const ADSENSE_CLIENT = "ca-pub-1548886446795369";

export default function GoogleAdSenseUnit({
  adSlot,
  className = "",
  style,
}: GoogleAdSenseUnitProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const [hostname, setHostname] = useState("");

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  const shouldLoadAds = useMemo(() => {
    if (!hostname) return false;
    return !["localhost", "127.0.0.1", "::1"].includes(hostname);
  }, [hostname]);

  useEffect(() => {
    if (!shouldLoadAds) return;

    const loadAd = () => {
      if (!adRef.current) return;
      if (adRef.current.getAttribute("data-adsbygoogle-status")) return;

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // Adsense can throw during duplicate hydration or if the script is still booting.
      }
    };

    const timer = window.setTimeout(loadAd, 0);
    return () => window.clearTimeout(timer);
  }, [shouldLoadAds]);

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`.trim()}
      style={style}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
