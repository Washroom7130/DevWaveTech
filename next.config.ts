import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/data/images/**",
      },
    ],
  },
  typescript: {
    // Disable type checking during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

