import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Cycle of Tailwind animation-delay utilities for staggering a grid of
// <Reveal> items — pass `STAGGER[i % STAGGER.length]` as the className.
export const STAGGER = ["", "delay-100", "delay-200", "delay-300"] as const;
