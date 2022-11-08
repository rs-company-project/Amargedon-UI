import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "./Button";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Ver mais",
  },
  argTypes: {
    size: {
      options: ["md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  }
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg'
  }
};
