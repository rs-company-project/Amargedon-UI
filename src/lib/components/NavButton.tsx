import "../../styles/global.css";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface NavButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "md" | "lg";
  label?: string | ReactNode;
  inUsed?: boolean;
}

function NavButtonRoot(props: NavButtonProps) {
  return (
    <button
      className={clsx(
        "flex justify-start items-center gap-2 rounded-lg px-4 py-4 w-52 h-16 hover:bg-purple-900 focus:bg-green-500 text-white-500 font-medium text-lg uppercase", {
          'bg-purple-900':  props.inUsed === true,
          'bg-black-900':  props.inUsed !== true,
        })}
      {...props}
    >
      {props.children}
      {props.label}
    </button>
  );
}

NavButtonRoot.displayName = 'NavButton.Root'

export interface IconNavButtonProps {
  children: ReactNode;
}

function IconNavButton({ children }: IconNavButtonProps) {
  return <Slot className="w-8 h-8 text-white-500">{children}</Slot>
}

IconNavButton.displayName = 'NavButton.Icon'

export const NavButton = {
    Root: NavButtonRoot,
    Icon: IconNavButton
}