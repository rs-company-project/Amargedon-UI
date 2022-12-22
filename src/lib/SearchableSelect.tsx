import "../styles/global.css";
import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode, forwardRef, Ref } from "react";
import Select from 'react-select'

export interface SearchableSelectProps {
  placeholder: string | undefined,
  noOptionsMessage: string | undefined
  options: { value: string | number, label: string }[]
}

export function SearchableSelect({ placeholder, noOptionsMessage, options }: SearchableSelectProps) {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      noOptionsMessage={() => {
        return noOptionsMessage;
      }}
      styles={{
        control: (baseStyles, state) => {
          return ({
            ...baseStyles,
            backgroundColor: "rgb(22 22 22 / 1)",
            borderColor: state.isFocused ? '#8e24aa' : 'transparent',
            borderRadius: "0.5rem"
          })
        },
        singleValue: (baseStyles) => {
          return ({
            ...baseStyles,
            color: "#fff"
          })
        },
        placeholder: (baseStyles) => {
          return ({
            ...baseStyles,
            color: "#949496"
          })
        },
        menu: (baseStyles) => {
          return ({
            ...baseStyles,
            backgroundColor: "rgb(22 22 22 / 1)",
          })
        },
        option: (baseStyles, state) => {
          return ({
            ...baseStyles,
            backgroundColor: (state.isFocused || state.isSelected) ? "rgb(30 30 30 / 1)" : "rgb(22 22 22 / 1)",
            color: "white"
          })
        },
        input: (baseStyles, state) => {
          console.log(baseStyles, state, 'baseStyles');

          return ({
            ...baseStyles,
            color: "white"
          })
        },
      }}
    />
  );
}

SearchableSelect.displayName = "SearchableSelectRoot";