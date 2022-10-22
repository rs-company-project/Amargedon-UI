import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { User, EyeSlash } from "phosphor-react";
import { FieldProps } from "./Field";
import { Field } from "./Field";

export default {
  title: "Components/Field",
  component: Field.Root,
  args: {
    children: [
      <Field.Icon>
        <User />
      </Field.Icon>,
      <Field.Input placeholder="Digite seu e-mail" />,
    ],
  },
} as Meta<FieldProps>;

export const Default: StoryObj<FieldProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export const Password: StoryObj<FieldProps> = {
  args: {
    children: [
      <Field.Icon>
        <User />
      </Field.Icon>,
      <Field.Input placeholder="Digite sua senha" />,
      <Field.Icon>
        <EyeSlash />
      </Field.Icon>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
