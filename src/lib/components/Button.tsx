import "../../styles/global.css";
import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size?: "md" | "lg";
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-purple-900 rounded-lg px-4 py-2 hover:bg-purple-700 focus:bg-green-500 text-white-500 font-semibold",
        {
          "w-52": props.size === "md",
          "w-80": props.size === "lg",
        },
        {
          uppercase: props.size === "md" || props.size === "lg",
        },
        {
          "text-lg": props.size === "lg",
          "text-md": props.size !== "lg",
        }
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
