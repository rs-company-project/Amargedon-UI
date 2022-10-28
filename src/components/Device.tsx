import { HeadingText } from "./HeadingText";
import { Text } from "./Text";

export interface IDeviceProps {
  nameDevice: string;
  number: string;
  description?: string;
  status: "on" | "off";
  image: string;
}

export function Device({
  description,
  status,
  number,
  nameDevice,
  image
}: IDeviceProps) {
  return (
    <div className="flex flex-col gap-4 px-4 py-2 bg-black-700 w-80 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-9"
            src={image}
            alt="whatsapp logov"
          />
          <div>
            <HeadingText asChild={true} size="sm" weight="medium">
              <h4 className="text-white-500">{nameDevice}</h4>
            </HeadingText>

            <Text asChild={true} size="md" weigth="regular">
              <p className="text-gray-400">{number}</p>
            </Text>
          </div>
        </div>
        {status === "on" ? (
          <div className="bg-green-500 w-4 h-4 rounded-full" />
        ) : (
          <div className="bg-red-700 w-4 h-4 rounded-full" />
        )}
      </div>
      <Text asChild={true} size="sm" weigth="regular">
        <p className="text-gray-400">
          {description &&
            `${description?.slice(0, 56)}${
              description.length > 56 ? "..." : ""
            }`}
        </p>
      </Text>
    </div>
  );
}
