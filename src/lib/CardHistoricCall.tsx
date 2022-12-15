import {
  ArrowElbowLeft,
  ArrowUpRight,
  CheckCircle,
  XCircle,
} from "phosphor-react";
import { Text } from "./Text";

export interface ICardHistoricCallProps {
  call: "answered" | "not-met";
  deviceName: string;
  status: "on" | "off";
  image?: string;
  time?: string;
  subtitle?: string;
  date: string;
}

export function CardHistoricCall({
  image,
  call,
  deviceName,
  status,
  subtitle,
  time,
  date,
}: ICardHistoricCallProps) {
  return (
    <div className="flex items-center justify-between bg-black-700 py-2 px-4 w-104 rounded-lg hover:bg-black-hover-700">
      <div className="flex items-center gap-4">
        <div className="flex items-end justify-end">
          <img
            src={image}
            alt="profile"
            className="w-12 h-12 rounded-full bg-contain"
          />
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
              className="absolute text-red-700 self-end"
            />
          )}
        </div>
        <div>
          <Text size="lg" weigth="regular">
            <p>{deviceName}</p>
          </Text>{" "}
          <div className="flex gap-1 items-center">
            {call === "answered" ? (
              <ArrowUpRight
                size={12}
                weight="bold"
                className="text-green-500"
              />
            ) : (
              <ArrowElbowLeft
                size={12}
                weight="bold"
                className="text-red-700"
              />
            )}

            <Text size="md" weigth="regular" asChild={true}>
              {call === "answered" ? (
                <p>{"Chamada atendida"}</p>
              ) : (
                <p>{subtitle ?? "Chama não atendida"}</p>
              )}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-20">
        {call === "answered" && (
          <Text size="lg" weigth="regular">
            <p>{time}</p>
          </Text>
        )}
        <Text size="lg" weigth="regular">
          <p>{date ?? "Data não encontrada"}</p>
        </Text>
      </div>
    </div>
  );
}
