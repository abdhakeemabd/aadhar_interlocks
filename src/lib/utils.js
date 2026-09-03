import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getWhatsAppLink = (message) => `https://wa.me/919000000000?text=${encodeURIComponent(message)}`;
