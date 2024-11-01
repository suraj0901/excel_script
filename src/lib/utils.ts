import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lazyLoad<T>(component: Promise<{ default: T }>) {
  return async () => {
    const result = (await component).default;
    return {
      Component: result,
    };
  };
}