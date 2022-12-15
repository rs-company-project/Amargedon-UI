import "../styles/global.css";
import { Meta, StoryObj } from "@storybook/react";
import { ICardPlanMobileProps } from "../lib/CardPlanMobile";
import { CardPlanMobile } from "../lib/CardPlanMobile";

import { Field } from "../lib/Field";
import { MagnifyingGlass } from "phosphor-react";

export default {
    title: "Components/CardPlanMobile",
    component: CardPlanMobile,
    args: {
        provider: "twilio",
        plan: "PLANO PLUS",
        due_date: "20 Nov de 2022",
        button: "RENOVAR",
    },
} as Meta<ICardPlanMobileProps>;

export const Default: StoryObj<ICardPlanMobileProps> = {};

export const WithInput: StoryObj<ICardPlanMobileProps> = {
    args: {
        provider: "twilio",
        plan: "PLANO PLUS",
        due_date: "20 Nov de 2022",
        button: "RENOVAR",
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
                    <Field.Root>
                        <Field.Icon>
                            <MagnifyingGlass />
                        </Field.Icon>
                        <Field.Input placeholder="PESQUISAR" />
                    </Field.Root>
                    {Story()}
                </form>
            );
        },
    ],
};