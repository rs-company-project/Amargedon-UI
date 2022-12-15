import { Meta, StoryObj } from "@storybook/react";
import { User, EyeSlash } from "phosphor-react";
import { FieldProps } from "../lib/Field";
import { Field } from "../lib/Field";
import { Button } from "../lib/Button";

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

export const WithButton: StoryObj<FieldProps> = {
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
  decorators: [
    (Story) => {
      return (
        <form className="flex flex-col items-center gap-8">
          {Story()}
          <Button size="md">Executar ação</Button>
        </form>
      );
    },
  ],
};
