import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  }, typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        hostname: "e60kh81gmp.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
