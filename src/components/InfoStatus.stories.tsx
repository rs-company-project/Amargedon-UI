import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { User, EyeSlash } from "phosphor-react";
import { IInfoStatusProps } from "../lib/components/InfoStatus";
import { InfoStatus } from "../lib";
import { Button } from "../lib"

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
