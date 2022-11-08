import { Meta, StoryObj } from "@storybook/react";
import { NavButtonProps } from "./NavButton";
import { NavButton } from "./NavButton";
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
