import { ChangeEvent } from "react";

import classNames from "classnames/bind";
import styles from "./InputField.module.scss";

import { PrefixElement, SuffixElement, ErrorMessage, Label, Input } from "../parts/index";

const cn = classNames.bind(styles);

interface InputFieldProps {
  name?: string;
  type?: "text" | "email" | "password" | "search";
  value?: string | number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  unit?: "원" | "시급";
  prefix?: "search";
  isError?: boolean;
  errorMessage?: string;
  size?: "sm" | "md";
  color?: "white" | "gray";
  border?: "solid" | "none";
}

export default function InputField({
  name,
  type = "text",
  placeholder = "",
  size = "md",
  color = "white",
  isError = false,
  label,
  disabled = false,
  unit,
  prefix,
  value,
  onChange,
  border = "solid",
  errorMessage = "",
}: InputFieldProps) {
  const className = cn("default", size, color, border, { error: isError });

  return (
    <div className={cn("inputField")}>
      {label && <Label htmlFor={name} label={label} />}
      <div className={className}>
        {prefix && <PrefixElement element={prefix} />}
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          size={size}
          color={color}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
        {unit && <SuffixElement element={unit} />}
      </div>
      {isError && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
