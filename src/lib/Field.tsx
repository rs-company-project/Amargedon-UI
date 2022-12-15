import "../styles/global.css";
import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode, forwardRef, Ref } from "react";

export interface FieldProps {
  children: ReactNode;
}

function FieldRoot({ children }: FieldProps) {
  return (
    <div className="flex items-center gap-2 bg-black-700 rounded-lg px-4 py-2 w-full hover:bg-black-hover-700  focus-within:ring-2 ring-purple-900">
      {children}
    </div>
  );
}

FieldRoot.displayName = "Field.Root"

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const FieldInput = forwardRef((props: IInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-white-500 placeholder:text-gray-400 leading-3 focus:text-white-500 focus:placeholder:text-white-500 securet"
      {...props}
    />
  );
})

FieldInput.displayName = "Field.Input"

export interface IIconProps {
  children: ReactNode;
}

function FieldIcon({ children }: IIconProps) {
  return <Slot className="w-6 h-6 text-gray-400 focus:text-white-500">{children}</Slot>;
}

FieldIcon.displayName = "Field.Icon"


export const Field = {
  Root: FieldRoot,
  Input: FieldInput,
  Icon: FieldIcon,
};
