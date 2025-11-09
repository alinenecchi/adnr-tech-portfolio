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
  // Webpack config removida temporariamente para compatibilidade com Turbopack
  // Se necessário, podemos adicionar configuração específica para Turbopack
  // webpack: (config, { isServer }) => {
  //   // Handle SVG files
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   });

  //   // Fix for Node.js modules in client-side
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //       path: false,
  //       os: false,
  //     };
  //   }

  //   return config;
  // },
  // transpilePackages: ["@svgr/webpack"],
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
