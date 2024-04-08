import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import { storage } from "./firebase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleAbrirLink = (link: string) => {
  window.open(link, "_blank");
};

