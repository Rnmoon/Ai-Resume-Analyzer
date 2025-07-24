/**
 * Utility functions for the application
 */

/**
 * Formats a file size in bytes to a human-readable string (KB, MB, GB)
 * @param bytes - The size in bytes
 * @returns A formatted string representing the size in KB, MB, or GB
 */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine clsx and tailwind-merge
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  // Determine the appropriate unit
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Format the number with 2 decimal places
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export const generateUUID = () => crypto.randomUUID();