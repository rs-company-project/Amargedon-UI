import { Meta, StoryObj } from "@storybook/react";
import { User, EyeSlash } from "phosphor-react";
import { FieldProps } from "../lib/Field";
import { SearchableSelect } from "../lib/SearchableSelect";

export default {
  title: "Components/SearchableSelect",
  component: SearchableSelect,
  args: {
    placeholder: "Selecione um item",
    noOptionsMessage: 'Nenhum Item encontrado',
    options: [
      { value: 'item1', label: 'Item 1' },
      { value: 'item2', label: 'Item 2' },
      { value: 'item3', label: 'Item 3' }
    ]
  },
  argTypes: {
    placeholder: {
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
