import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure assets load correctly from the /ObsidianGym subpath on GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/ObsidianGym' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ObsidianGym' : '',
};

export default nextConfig;
