import { Meta, StoryObj } from "@storybook/react";
import { InlineButton, IInlineButtonRootProps, IInlineButtonButtonProps } from "../lib/components/InLineButton";
import { Text } from "../lib/components/Text";

export default {
  title: "Components/InLineButton",
  component: InlineButton.Root,
  args: {
    children: [
      <InlineButton.Button position="single">
        <Text size="lg">
          <p>single</p>
        </Text>
      </InlineButton.Button>
    ],
  },
} as Meta<IInlineButtonRootProps>;

export const Default = {
    argTypes: {
        children: {
          table: {
            disable: true,
          },
        },
      },
};
export const TwoButton: StoryObj<IInlineButtonRootProps> = {
  args: {
    children: [
        <InlineButton.Button position="start">
          <Text size="lg">
            <p>first</p>
          </Text>
        </InlineButton.Button>,
        <InlineButton.Button position="end">
          <Text size="lg">
            <p>end</p>
          </Text>
        </InlineButton.Button>
    ],
  },
};
export const ThreeButton: StoryObj<IInlineButtonRootProps> = {
  args: {
    children: [
        <InlineButton.Button position="start">
          <Text size="lg">
            <p>first</p>
          </Text>
        </InlineButton.Button>,
        <InlineButton.Button position="middle">
          <Text size="lg">
            <p>middle</p>
          </Text>
        </InlineButton.Button>,
        <InlineButton.Button position="end">
          <Text size="lg">
            <p>end</p>
          </Text>
        </InlineButton.Button>
    ],
  },
};
