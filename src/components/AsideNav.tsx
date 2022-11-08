import "../styles/global.css";
import { ReactNode } from "react";

export interface AsideNavProps {
  children?: ReactNode;
  imagem: string;
}

export function AsideNav({ imagem, children }: AsideNavProps) {
  return (
    <div className="flex flex-col items-center gap-8 px-4 pt-8 pb-4 w-60 h-164 bg-black-700 rounded-lg">
      <img className="w-16 h-16 bg-contain" src={imagem} alt="" />
      {children}
    </div>
  );
}
