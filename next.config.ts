import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Needed because the root layout lives in app/[locale]
    globalNotFound: true,
  },
};

export default nextConfig;
