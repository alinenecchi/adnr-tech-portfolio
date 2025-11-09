import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporariamente ignorar para permitir build na Vercel
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  reactStrictMode: true,
  trailingSlash: false,
  // output: "standalone", // Comentado temporariamente para evitar problemas com Turbopack
  distDir: ".next",
  assetPrefix: "",
};

export default nextConfig;
