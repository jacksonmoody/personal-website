import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function scrollTo(id: string) {
  return (ev: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent) => {
    ev.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
}
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
