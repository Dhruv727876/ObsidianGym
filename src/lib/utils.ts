import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetPath(path: string) {
  // Return early if it's already a full URL
  if (path.startsWith('http') || path.startsWith('//')) return path;
  
  const repoName = 'ObsidianGym';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Check if we are in a production/CI environment
  const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true';
  
  if (isProd) {
    // Force the repository name prefix for GitHub Pages
    return `/${repoName}${cleanPath}`;
  }
  
  return cleanPath;
}
