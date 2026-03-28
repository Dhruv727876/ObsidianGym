import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetPath(path: string) {
  // Return early if it's already a full URL
  if (path.startsWith('http') || path.startsWith('//')) return path;
  
  // Use prefix from environment variable or default to empty string
  // This will be set during GitHub Actions build
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Ensure we don't double slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${prefix}${cleanPath}`;
}
