import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *  Get a random element from an array
 * @param array - An array of elements
 * @param count - The number of random elements to select
 * @returns An array of random elements
 */
export function getRandomElements<T>(array: T[], count?: number): T[] {
  const n = array.length;
  const result = [...array]; // Create a copy to avoid mutating the original array
  const selectionCount = count ?? n; // Use all elements if 'count' is not provided

  /**
   * Fisher-Yates shuffle algorithm
   * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
   */
  for (let i = 0; i < selectionCount; i++) {
    const randomIndex = i + ((Math.random() * (n - i)) | 0);
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }

  return result.slice(0, selectionCount);
}
