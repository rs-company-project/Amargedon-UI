import "../../styles/global.css";
import { Text } from "./Text";
import { HeadingText } from "./HeadingText";

export interface IDashCardProps {
  qtdCalls: number;
  title: string;
  typeOfCall: string;
}

export const DashCard = ({ title, qtdCalls, typeOfCall }: IDashCardProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-4  rounded-lg w-fit h-16 transition-colors ease-in-out delay-120 bg-purple-900 hover:bg-purple-700">
      <HeadingText size="lg" weight="semibold" asChild={true}>
        <h4>{qtdCalls}</h4>
      </HeadingText>
      <div>
        <Text size="lg" asChild={true}>
          <p className="-my-1">{title}</p>
        </Text>
        <Text size="lg" asChild={true}>
          <p>{typeOfCall}</p>
        </Text>
      </div>
    </div>
  );
};
