import { Meta, StoryObj } from "@storybook/react";
import { NavButtonProps } from "../lib/NavButton";
import { NavButton } from "../lib/NavButton";
import { Alarm } from "phosphor-react";

export default {
  title: "Components/NavButton",
  component: NavButton.Root,
  args: {
    label: "Title",
    children: (
      <NavButton.Icon>
        <Alarm weight="regular" />
      </NavButton.Icon>
    ),
  },
} as Meta<NavButtonProps>;

export const Default: StoryObj<NavButtonProps> = {};
