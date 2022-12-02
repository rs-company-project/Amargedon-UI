import "../../styles/global.css";
import { Text } from "./Text";
import { ButtonHTMLAttributes } from "react";

export interface ICardPlanMobileProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: string;
  plan: string;
  due_date: string;
  button: string;
}

function CardPlanMobileRoot(props: ICardPlanMobileProps) {
  return (
    <>
      <div className="flex flex-col min-w-fit w-full">
        <div className="flex justify-between items-center px-4 py-4 bg-black-800  h-16 rounded-t-lg gap-4">
          <div className="w-12 h-12 bg-white-500 rounded-full">

          </div>
          <div className="flex flex-col grow">
            <Text size="lg" weigth="semi_bold">
              {props.plan}
            </Text>
            <Text size="sm">
              by {props.provider}
            </Text>
          </div>
          <div className="flex flex-col">
            <Text size="lg" weigth="semi_bold">
              venc
            </Text>
            <Text size="sm">
              {props.due_date}
            </Text>
          </div>
        </div>
        <button className="bg-purple-900 rounded-b-lg px-4 py-2 hover:bg-purple-700 focus:bg-green-500 text-white-500 font-semibold">
          <Text size="lg" weigth="semi_bold">
            {props.button}
          </Text>
        </button>
      </div>
    </>
  );
}

CardPlanMobileRoot.displayName = 'CardPlanMobile'

export const CardPlanMobile = CardPlanMobileRoot