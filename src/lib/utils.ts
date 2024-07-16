import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const loaderTimer = async (path: string, timer?: number) => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import(`${path}`)), timer || 1000);
  });
};
