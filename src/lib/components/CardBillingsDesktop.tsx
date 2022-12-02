import "../../styles/global.css";
import { Children, ReactNode } from "react";
import { HeadingText } from "./HeadingText";
import { Slot } from "@radix-ui/react-slot";
import { Text } from "./Text";

export interface ICardBilingsDesktop {
  namePlan: string;
  infoStatus: ReactNode;
  dueDate: string;
  price: string;
  coin: "R$" | "$";
  children: ReactNode;
}

function CardBilingsDesktopRoot({
  namePlan,
  infoStatus,
  dueDate,
  price,
  coin,
  children,
}: ICardBilingsDesktop) {
  return (
    <>
      <div className="flex bg-black-700 py-4 px-6 w-200 h-20 rounded-lg items-center justify-between">
        <div className="flex items-center">
          <HeadingText size="sm" weight="semibold" asChild={true}>
            {namePlan.length < 12 ? (
              <h3 className="text-left">{namePlan}</h3>
            ) : (
              <abbr title={namePlan} className="decoration-transparent">
                <h3 className="text-left">{`${namePlan?.slice(0, 12)}...`}</h3>
              </abbr>
            )}
          </HeadingText>

          <div className="ml-24">{infoStatus}</div>

          <HeadingText size="sm" weight="semibold" asChild={true}>
            <p className="ml-12 text-left">Venc</p>
          </HeadingText>
          <Text size="lg" asChild={true}>
            <p className="ml-4 text-left">{dueDate}</p>
          </Text>
          <Text size="lg" asChild={true}>
            <p className="ml-24 text-left">{`${coin} ${price}`}</p>
          </Text>
        </div>
        <div className="flex items-center">{children}</div>
      </div>
    </>
  );
}
CardBilingsDesktopRoot.displayName = "CardBilingsDesktop.Root";

export interface IIconBillingsProps {
  children: ReactNode;
}

function IconCardBilingsDesktop({ children }: IIconBillingsProps) {
  return (
    <button className="w-9 h-9 text-white-500 hover:text-purple-900 focus:text-green-500">
      {children}
    </button>
  );
}
IconCardBilingsDesktop.displayName = "CardBilingsDesktop.Icon";

export const CardBilingsDesktop = {
  Root: CardBilingsDesktopRoot,
  Icon: IconCardBilingsDesktop,
};
