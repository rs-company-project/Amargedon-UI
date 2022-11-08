import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { User, EyeSlash } from "phosphor-react";
import { IInfoStatusProps } from "./InfoStatus";
import { InfoStatus } from "./InfoStatus";
import { Button } from "./Button";

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
