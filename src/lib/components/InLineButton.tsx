import "../../styles/global.css";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IInlineButtonRootProps {
  children: ReactNode;
}

function InlineButtonRoot({ children }: IInlineButtonRootProps) {
  return <div className="flex items-center">{children}</div>;
}

InlineButtonRoot.displayName = 'InlineButtonButton.Root';

export interface IInlineButtonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  position: "start" | "middle" | "end" | 'single';
}

function InlineButtonButton(props: IInlineButtonButtonProps) {
    const { children, position } = props;
  return (
    <button
      {...props}
      className={clsx(
        "bg-black-800 py-2 px-4 hover:bg-black-hover-700 focus:bg-purple-900 text-center w-24 uppercase",
        {
            'rounded-lg': position === 'single',
            'rounded-l-lg': position === 'start',
            'rounded-r-lg': position === 'end'
        }
      )}
    >
      {children}
    </button>
  );
}

InlineButtonButton.displayName = 'InlineButtonButton.Button';

export const InlineButton = {
  Root: InlineButtonRoot,
  Button: InlineButtonButton,
};
