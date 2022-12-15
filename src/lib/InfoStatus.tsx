import "../styles/global.css";
import { clsx } from "clsx";
import { Text } from "../index";

export interface IInfoStatusProps {
  label: string;
  color: "black" | "golden" | "green" | "purple" | "red";
}

export function InfoStatus({ label, color }: IInfoStatusProps) {
  return (
    <div
      className={clsx('flex items-center justify-center px-2 py-1 w-16 h-5 rounded-lg',{
        "bg-black-800": color === "black",
        "bg-golden-100": color === "golden",
        "bg-green-500": color === "green",
        "bg-purple-900": color === "purple",
        "bg-red-700": color === "red",
      })}
    >
      <Text size="sm" asChild={true}>
        <p className="uppercase">{label}</p>
      </Text>
    </div>
  );
}
