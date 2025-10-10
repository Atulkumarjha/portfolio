import type { NextConfig } from "next";

process.env.LIGHTNINGCSS_FORCE_WASM = "1";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
