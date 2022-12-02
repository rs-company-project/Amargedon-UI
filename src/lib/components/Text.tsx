import "../../styles/global.css";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  weigth?: "light" | "regular" | "medium" | "semi_bold";
}

export function Text({ size, children, asChild, weigth = "regular" }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("text-white-500", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      },
      {
        "font-light": weigth === "light",
        "font-normal": weigth === "regular",
        "font-medium": weigth === "medium",
        "font-semibold": weigth === "semi_bold"
      })}
    >
      {children}
    </Comp>
  );
}
