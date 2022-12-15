import "../styles/global.css";
import { clsx } from "clsx";
import { Text, InfoStatus } from "../index";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ICardHistoricDeviceProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  imagem?: string;
  deviceName: string;
  deviceNumber: string;
  children?: ReactNode;
  lastCall: string;
  status: "online" | "offline";
}
function CardHistoricDeviceRoot(props: ICardHistoricDeviceProps) {
  return (
    <button
      className={clsx(
        "flex justify-between items-center px-4 py-4 bg-black-800 w-102 h-24 rounded-lg hover:bg-black-hover-700 focus:ring-2 ring-purple-900"
      )}
      {...props}
    >
      <div className="flex gap-6 items-center">
        <img src={props.imagem} alt="whatsapp logo" className="w-12 h-12" />

        <div className="flex flex-col items-start gap-2">
          <div>
            <Text asChild={true} size="lg">
              <h4 className="text-start">{props.deviceName}</h4>
            </Text>
            <Text asChild={true} size="sm">
              <p className="text-start -mt-1">{props.deviceNumber}</p>
            </Text>
          </div>
          <div>
            {props.children}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between h-full">
        <Text asChild={true} size="sm">
          <p>{props.lastCall}</p>
        </Text>
        <InfoStatus
          label={props.status}
          color={props.status === "online" ? "green" : "red"}
        />
      </div>
    </button>
  );
}

CardHistoricDeviceRoot.displayName = 'CardHistoricDevice.Root'

export interface IIconHistoricCallProps {
  children: ReactNode;
}

function IconHistoricCall({ children }: IIconHistoricCallProps) {
  return (
    <Slot className="w-3 h-3 text-white-500">
      {children}
    </Slot>
  );
}

IconHistoricCall.displayName = 'CardHistoricDevice.Icon'


export const CardHistoricDevice = {
  Root: CardHistoricDeviceRoot,
  Icon: IconHistoricCall
}