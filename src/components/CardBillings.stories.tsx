import { Meta, StoryObj } from "@storybook/react";
import { CurrencyCircleDollar, FilePdf } from "phosphor-react";
import { ICardBillingsProps } from "../lib/CardBillings";
import { CardBillings } from "../lib/CardBillings";
import { InfoStatus } from "../lib/InfoStatus";

export default {
  title: "Components/CardBillings",
  component: CardBillings.Root,
  args: {
    plan: "plano plus",
    infoStatus: <InfoStatus label="pendente" color="golden" />,
    date: "20 de Nov de 2022",
    coin: "R$",
    price: "200,00",
    children: (
      <CardBillings.Button>
        <CardBillings.Icon>
          <CurrencyCircleDollar weight="fill" />
        </CardBillings.Icon>
        <CardBillings.Icon>
          <FilePdf weight="fill" />
        </CardBillings.Icon>
      </CardBillings.Button>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    infoStatus: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ICardBillingsProps>;

export const Default: StoryObj<ICardBillingsProps> = {};
