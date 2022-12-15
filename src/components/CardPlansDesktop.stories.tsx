import { Meta } from "@storybook/react";
import { CardPlansDesktop, ICardPlansDesktopProps } from "../lib/CardPlansDesktop";
import { Button } from "../lib/Button";

export default {
  title: "Components/CardPlansDesktop",
  component: CardPlansDesktop,
  args: {
    img: "https://cdn-icons-png.flaticon.com/512/888/888835.png",
    namePlan: "PLANO PLUS",
    dueDate: "20/Nov/22",
    planBy: "Rs company",
    children: <Button>Ver mais</Button>,
  },
} as Meta<ICardPlansDesktopProps>;

export const Default = {};
