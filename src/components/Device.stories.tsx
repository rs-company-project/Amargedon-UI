import { Meta, StoryObj } from "@storybook/react";
import { Device, IDeviceProps } from "./Device";

export default {
  title: "Components/Device",
  component: Device,
  args: {
    description: "Descrição objetiva, liga para esse setor é aqui você para",
    status: "on",
    number: "+55 (81) 91234-5678",
    nameDevice: "Nome do Device",
    image: "https://cdn-icons-png.flaticon.com/512/2504/2504845.png",
  },
  argTypes: {
    status: {
      options: ["on", "off"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<IDeviceProps>;

export const Default = {};
export const Offline: StoryObj<IDeviceProps> = {
  args: {
    status: "off",
  },
};
