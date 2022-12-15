import "../styles/global.css";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface HeadingTextProps {
  size?: "sm" | "md" | "lg";
  weight?: "medium" | "semibold";
  children: ReactNode;
  asChild?: boolean;
}

export function HeadingText({
  size,
  children,
  asChild,
  weight,
}: HeadingTextProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(
        "text-white-500",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        {
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
        }
      )}
    >
      {children}
    </Comp>
  );
}
