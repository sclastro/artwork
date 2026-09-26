import type { NextConfig } from "next";

// GitHub Pages 以 /<repo> 為子路徑；由 actions/configure-pages 提供，本機開發為空字串。
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  reactStrictMode: true,
};

export default nextConfig;
