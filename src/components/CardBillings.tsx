import "../styles/global.css";
import { useReducer } from "react";
import { clsx } from "clsx";
import { Text } from "./Text";
import { HeadingText } from "./HeadingText";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ICardBillingsProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  plan: string;
  infoStatus: ReactNode;
  date: string;
  coin: "R$" | "$";
  price: string;
  children?: ReactNode;
}

export function CardBillingsRoot(props: ICardBillingsProps) {
  const [isOpen, dispatch] = useReducer((state: boolean) => {
    return !state;
  }, false);

  return (
    <>
      <button
        className={clsx(
          "flex flex-col gap-2 px-4 py-2 bg-black-800 w-80 hover:bg-black-hover-700", {
            'rounded-t-lg': isOpen,
            'rounded-lg': !isOpen,
          })}
        onClick={() => dispatch()}
        {...props}
      >
        <HeadingText size="sm" weight="semibold">
          <h4 className="uppercase">{props.plan}</h4>
        </HeadingText>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            {props.infoStatus}
            <Text size="sm">{props.date}</Text>
          </div>
          <Text size="lg">{`${props.coin} ${props.price}`}</Text>
        </div>
      </button>
      {isOpen && props.children}
    </>
  );
}

CardBillingsRoot.displayName = 'CardBillings.Root'

export interface IButtonBillingsProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

function ButtonBillings(props: IButtonBillingsProps) {
  return <button className="flex items-center justify-between px-8 py-2 bg-purple-900 w-80 rounded-b-lg focus-within:text-green-500" {...props}>{props.children}</button>;
}

ButtonBillings.displayName = 'CardBillings.Button'

export interface IIconBillingsProps {
  children: ReactNode;
}

function IconBillings({ children }: IIconBillingsProps) {
  return (
    <Slot className="w-9 h-9 text-white-500 hover:text-golden-100">
      {children}
    </Slot>
  );
}

IconBillings.displayName = 'CardBillings.Icon'

export const CardBillings = {
  Root: CardBillingsRoot,
  Button: ButtonBillings,
  Icon: IconBillings,
};
