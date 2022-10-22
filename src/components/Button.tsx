import "../styles/global.css";
import { clsx } from "clsx";

export interface ButtonProps {
  children: string;
  size?: "md" | "lg";
}

export function Button({ children, size }: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-purple-900 rounded-lg px-4 py-2 hover:bg-purple-700 focus:bg-green-500 text-white-500 font-semibold",
        {
          "w-52": size === "md",
          "w-80": size === "lg",
        },
        {
          uppercase: size === "md" || size === "lg",
        },
        {
          "text-lg": size === "lg",
          "text-md": size !== "lg",
        }
      )}
    >
      {children}
    </button>
  );
}
