import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["swisseph"],
  outputFileTracingIncludes: {
    "/api/astrology/*": ["./node_modules/swisseph/ephe/**/*"],
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:path*/",
        destination: "/:path*/",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
