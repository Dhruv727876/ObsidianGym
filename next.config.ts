import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'ObsidianGym';

const nextConfig: NextConfig = {
  output: 'export',
  // Hardcoded for GitHub Pages subpath
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}` : '',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repoName}` : '',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
