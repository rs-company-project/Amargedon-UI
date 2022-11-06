import "../styles/global.css";
import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface AsideNavBarProps {
  children?: ReactNode;
  imagem: string;
}

export function AsideNavBarRoot({ imagem, children }: AsideNavBarProps) {
  return (
    <div className="flex flex-col items-center gap-12 py-8 w-24 h-164 bg-black-700 rounded-lg">
      <img className="w-16 h-16 bg-contain" src={imagem} alt="" />
      {children}
    </div>
  );
}

AsideNavBarRoot.displayName = "AsideNavBar.Root";

export interface IIconAsideNavBarProps {
  children: ReactNode;
  inUsed?: boolean;
}

function IconAsideNavBar({ children, inUsed }: IIconAsideNavBarProps) { 
  return (
    <div className="flex items-center gap-6 justify-start w-24">
      <div
        className={clsx("w-2 h-16 bg-purple-900 rounded-xl", {
          "bg-transparent": inUsed !== true,
          "bg-purple-900 shadow-lg shadow-purple-700": inUsed === true,
        })}
      />
      <Slot className="w-8 h-8 text-white-500 hover:bg-white-500 hover:bg-opacity-10 rounded-lg">{children}</Slot>
    </div>
  );
}

IconAsideNavBar.displayName = "AsideNavBar.Icon";

export const AsideNavBar = {
  Root: AsideNavBarRoot,
  Icon: IconAsideNavBar,
};
