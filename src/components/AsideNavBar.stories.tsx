import { Meta, StoryObj } from "@storybook/react";
import {
  House,
  Phone,
  Wallet,
  ClockCounterClockwise,
  User,
  SignOut,
} from "phosphor-react";
import { AsideNavBarProps } from "../lib/AsideNavBar";
import { AsideNavBar } from "../lib/AsideNavBar";

export default {
  title: "Components/AsideNavBar",
  component: AsideNavBar.Root,
  args: {
    imagem:
      "https://i.pinimg.com/564x/8e/fb/55/8efb55e9efc12eb11bedf41caa7f33bb.jpg",
    children: (
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <AsideNavBar.Icon inUsed>
            <House weight="regular" />
          </AsideNavBar.Icon>

          <AsideNavBar.Icon>
            <Phone weight="regular" />
          </AsideNavBar.Icon>

          <AsideNavBar.Icon>
            <Wallet weight="regular" />
          </AsideNavBar.Icon>

          <AsideNavBar.Icon>
            <ClockCounterClockwise weight="regular" />
          </AsideNavBar.Icon>

          <AsideNavBar.Icon>
            <User weight="regular" />
          </AsideNavBar.Icon>
        </div>

        <AsideNavBar.Icon>
          <SignOut weight="regular" />
        </AsideNavBar.Icon>
      </div>
    ),
  },
} as Meta<AsideNavBarProps>;

export const Default: StoryObj<AsideNavBarProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
