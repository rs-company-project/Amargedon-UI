import { Meta, StoryObj } from "@storybook/react";
import { TextProps } from "./Text";
import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Hello World",
    size: "md",
    weigth: "regular",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    weigth: {
      options: ["light", "regular", "medium", "semi_bold"],
      control: {
        type: "inline-radio",
      },
    }
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
    <p>Hello World</p>
    ),
  },
  argTypes: {
    children: {
        table: {
            disable: true
        }
    }
  }
};
