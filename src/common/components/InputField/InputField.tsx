import { ChangeEvent } from "react";

import classNames from "classnames/bind";
import styles from "./InputField.module.scss";

import { PrefixIcon, SuffixIcon, ErrorMessage, Label, Input } from "./index";

const cn = classNames.bind(styles);

interface InputFieldProps {
  type?: "text" | "email" | "password" | "search";
  name?: string;
  placeholder?: string;
  size?: "sm" | "md";
  color?: "white" | "gray";
  label?: string;
  disabled?: boolean;
  unit?: string;
  prefix?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  border?: "solid" | "none";
  isError?: boolean;
  errorMessage?: string;
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
  const className = cn("default", size, color, isError && "error", border);

  return (
    <div className={styles.inputField}>
      {label && <Label htmlFor={name} label={label} />}
      <div className={className}>
        {prefix && <PrefixIcon prefix={prefix} />}
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
        {unit && <SuffixIcon suffix={unit} />}
      </div>
      {isError && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
