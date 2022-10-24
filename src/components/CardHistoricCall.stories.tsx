import "../styles/global.css";
import { Meta, StoryObj } from "@storybook/react";
import { ICardHistoricCallProps } from "./CardHistoricCall";
import { CardHistoricCall } from "./CardHistoricCall";
import { PhoneOutgoing, PhoneX } from "phosphor-react";
import { Text } from "./Text";


export default {
  title: "Components/CardHistoricCall",
  component: CardHistoricCall.Root,
  args: {
    imagem: "https://cdn-icons-png.flaticon.com/512/2504/2504845.png",
    deviceName: "Administração",
    deviceNumber: "+55 (81) 9 1234-5678",
    status: "online",
    lastCall: "Ultima ligação à 10 minutos atrás",
    children: [
      <div className="flex gap-2 items-center">
        <CardHistoricCall.Icon>
          <PhoneOutgoing weight="regular" />
        </CardHistoricCall.Icon>
        <Text asChild={true} size="sm">
          <p className="text-start">10 chamadas realizadas em 24hrs</p>
        </Text>
      </div>,
      <div className="flex gap-2 items-center">
        <CardHistoricCall.Icon>
          <PhoneX weight="regular" />
        </CardHistoricCall.Icon>
        <Text asChild={true} size="sm">
          <p className="text-start">20 chamadas perdidas em 24hrs</p>
        </Text>
      </div>,
    ],
  },
} as Meta<ICardHistoricCallProps>;

export const Default: StoryObj<ICardHistoricCallProps> = {};
