import "../../styles/global.css";
import { ReactNode } from "react";
import { HeadingText } from "./HeadingText";
import { Text } from "./Text";

export interface ICardPlansDesktopProps {
  children: ReactNode;
  namePlan: string;
  planBy: string;
  dueDate: string;
  img: string;
}

export function CardPlansDesktop({
  children,
  dueDate,
  img,
  namePlan,
  planBy,
}: ICardPlansDesktopProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-black-700 py-4 px-8 w-106 h-28 hover:bg-black-hover-700">
      <div className="flex items-center">
        <div className="w-16 h-16">
          <img
            src={img}
            alt="logo da revolutionary service"
            className="w-full h-full"
          />
        </div>

        <div className="ml-8">
          <HeadingText size="md" weight="semibold">
            <h3>{namePlan}</h3>
          </HeadingText>
          <Text size="md">by {planBy}</Text>
        </div>
        <div className="ml-14">
          <HeadingText size="sm" weight="semibold">
            <p>Venc</p>
          </HeadingText>
          <Text size="sm">
            <p>{dueDate}</p>
          </Text>
        </div>
      </div>
      {children}
    </div>
  );
}
