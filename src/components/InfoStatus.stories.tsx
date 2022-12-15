import { Meta, StoryObj } from "@storybook/react";
import { IInfoStatusProps } from "../lib/InfoStatus";
import { InfoStatus } from "../lib/InfoStatus";

export default {
  title: "Components/InfoStatus",
  component: InfoStatus,
  args: {
    label: "offline",
    color: "red",
  },
  argTypes: {
    color: {
      options: ["black", "golden", "green", "purple", "red"],
      control: {
        type: "inline-radio",
      },
    }
  },
} as Meta<IInfoStatusProps>;

export const Default: StoryObj<IInfoStatusProps> = {};
