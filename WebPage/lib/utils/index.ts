import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToElement(elementId: string) {
  const el = document.getElementById(elementId.replace(/^#/, ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
