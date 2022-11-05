import { Meta, StoryObj } from "@storybook/react";
import {
  House,
  Phone,
  Wallet,
  ClockCounterClockwise,
  User,
  SignOut,
} from "phosphor-react";
import { AsideNavProps } from "./AsideNav";
import { AsideNav } from "./AsideNav";
import { HeadingText } from "./HeadingText";
import { NavButton } from "./NavButton";

export default {
  title: "Components/AsideNav",
  component: AsideNav,
  args: {
    imagem:
      "https://i.pinimg.com/564x/8e/fb/55/8efb55e9efc12eb11bedf41caa7f33bb.jpg",
    children: (
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <NavButton.Root
            inUsed
            label={
              <HeadingText size="sm" weight="medium">
                <p>DashBoard</p>
              </HeadingText>
            }
          >
            <NavButton.Icon>
              <House weight="regular" />
            </NavButton.Icon>
          </NavButton.Root>

          <NavButton.Root
            label={
              <HeadingText size="sm" weight="medium">
                <p>Dispositivos</p>
              </HeadingText>
            }
          >
            <NavButton.Icon>
              <Phone weight="regular" />
            </NavButton.Icon>
          </NavButton.Root>

          <NavButton.Root
            label={
              <HeadingText size="sm" weight="medium">
                <p>Faturas</p>
              </HeadingText>
            }
          >
            <NavButton.Icon>
              <Wallet weight="regular" />
            </NavButton.Icon>
          </NavButton.Root>

          <NavButton.Root
            label={
              <HeadingText size="sm" weight="medium">
                <p>Histórico</p>
              </HeadingText>
            }
          >
            <NavButton.Icon>
              <ClockCounterClockwise weight="regular" />
            </NavButton.Icon>
          </NavButton.Root>

          <NavButton.Root
            label={
              <HeadingText size="sm" weight="medium">
                <p>Perfil</p>
              </HeadingText>
            }
          >
            <NavButton.Icon>
              <User weight="regular" />
            </NavButton.Icon>
          </NavButton.Root>
        </div>

        <NavButton.Root
          label={
            <HeadingText size="sm" weight="medium">
              <p>Sair</p>
            </HeadingText>
          }
        >
          <NavButton.Icon>
            <SignOut weight="regular" />
          </NavButton.Icon>
        </NavButton.Root>
      </div>
    ),
  },
} as Meta<AsideNavProps>;

export const Default: StoryObj<AsideNavProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
