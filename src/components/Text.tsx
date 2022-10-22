import "../styles/global.css";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size, children, asChild }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("text-white-500", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
