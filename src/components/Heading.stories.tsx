import { Meta, StoryObj } from "@storybook/react";
import { HeadingTextProps } from "./HeadingText";
import { HeadingText } from "./HeadingText";

export default {
  title: "Components/HeadingText",
  component: HeadingText,
  args: {
    children: "Hello World",
    size: "md",
    weight: "medium"
  },
  argTypes: {
    weight: {
      options: ["medium", "semibold"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingTextProps>;

export const Default: StoryObj<HeadingTextProps> = {};

export const Small: StoryObj<HeadingTextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingTextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingTextProps> = {
  args: {
    asChild: true,
    children: <h1>Hello World with H1 tag</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
