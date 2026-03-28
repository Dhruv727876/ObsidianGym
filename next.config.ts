import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const base = isProd ? '/ObsidianGym' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: base,
  assetPrefix: base || undefined, // undefined in dev, /ObsidianGym in prod
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
