import "../styles/global.css";
import { Meta, StoryObj } from "@storybook/react";
import { ICardHistoricDeviceProps } from "./CardHistoricDevice";
import { CardHistoricDevice } from "./CardHistoricDevice";
import { PhoneOutgoing, PhoneX } from "phosphor-react";
import { Text } from "./Text";


export default {
  title: "Components/CardHistoricDevice",
  component: CardHistoricDevice.Root,
  args: {
    imagem: "https://cdn-icons-png.flaticon.com/512/2504/2504845.png",
    deviceName: "Administração",
    deviceNumber: "+55 (81) 9 1234-5678",
    status: "online",
    lastCall: "Ultima ligação à 10 minutos atrás",
    children: [
      <div className="flex gap-2 items-center">
        <CardHistoricDevice.Icon>
          <PhoneOutgoing weight="regular" />
        </CardHistoricDevice.Icon>
        <Text asChild={true} size="sm">
          <p className="text-start">10 chamadas realizadas em 24hrs</p>
        </Text>
      </div>,
      <div className="flex gap-2 items-center">
        <CardHistoricDevice.Icon>
          <PhoneX weight="regular" />
        </CardHistoricDevice.Icon>
        <Text asChild={true} size="sm">
          <p className="text-start">20 chamadas perdidas em 24hrs</p>
        </Text>
      </div>,
    ],
  },
} as Meta<ICardHistoricDeviceProps>;

export const Default: StoryObj<ICardHistoricDeviceProps> = {};
