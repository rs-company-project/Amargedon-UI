import { Meta, StoryObj } from "@storybook/react";

import { CardHistoricCall, ICardHistoricCallProps } from "./CardHistoricCall";

export default {
  title: "Components/CardHistoricCall",
  component: CardHistoricCall,
  args: {
    image: 'https://images.unsplash.com/photo-1666860451327-cddff7f9b678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', 
    status: 'off',
    deviceName: 'Cliente Júlia',
    call: 'answered',
    date: 'Ontem',
    time: '10 Segundos'
  },
  argTypes: {
    call: {
        options: ["answered", "not-met"],
        control: {
            type: 'inline-radio'
        }
    },
    status: {
        options: ["on", "off"],
        control: {
            type: 'inline-radio'
        }
    }
  }
} as Meta<ICardHistoricCallProps>;

export const Default = {};
