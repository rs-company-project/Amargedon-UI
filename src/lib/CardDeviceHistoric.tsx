import "../styles/global.css";
import {
  Phone,
  ArrowElbowLeft,
  ArrowUpRight,
  XCircle,
  CheckCircle,
} from "phosphor-react";
import { Text } from "./Text";

export interface ICardDeviceHistoricProps {
  call: "answered" | "not-met";
  deviceName: string;
  status: "on" | "off";
  image: string;
  time?: string;
  subtitle?: string;
}

export function CardDeviceHistoric({
  image,
  deviceName,
  call,
  time,
  subtitle,
  status,
}: ICardDeviceHistoricProps) {
  return (
    <div className="flex items-center justify-between w-full bg-black-700 rounded-lg py-2 px-4 hover:bg-black-hover-700">
      <div className="flex items-center gap-4">
        <div className="flex items-end justify-end">
          <img className="w-10 h-10" src={image} alt="brand" />
          {status === "on" ? (
            <CheckCircle
              size={12}
              weight="fill"
              className="absolute text-green-500"
            />
          ) : (
            <XCircle
              size={12}
              weight="fill"
              className="absolute text-red-700"
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Text size="lg" weigth="regular" asChild={true}>
            <p className="uppercase">{deviceName}</p>
          </Text>
          <div className="flex gap-1 items-center">
            {call === "answered" ? (
              <ArrowUpRight
                size={15}
                weight="bold"
                className="text-green-500"
              />
            ) : (
              <ArrowElbowLeft
                size={15}
                weight="bold"
                className="text-red-700"
              />
            )}

            <Text size="md" weigth="regular" asChild={true}>
              {call === "answered" ? (
                <p>{time}</p>
              ) : (
                <p>{subtitle ?? "Chamada não atendida"}</p>
              )}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-7 h-7 bg-purple-900 rounded-full text-white-500">
        <Phone size={16} weight="regular" />
      </div>
    </div>
  );
}
