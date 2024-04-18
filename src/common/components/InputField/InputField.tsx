import { ChangeEvent } from "react";
import classNames from "classnames/bind";
import styles from "./InputField.module.scss";
import { PrefixIcon, SuffixIcon, ErrorMessage, Label } from "./index";
import Input from "./Input/Input";

const cn = classNames.bind(styles);

interface InputFieldProps {
  name: string;
  type?: "text" | "email" | "password" | "dropdown" | "search" | "number" | "time";
  placeholder?: string;
  size?: "sm" | "md" | "full";
  color?: "white" | "gray";
  isError?: true | false;
  label?: string;
  disabled?: true | false;
  unit?: string;
  prefix?: string;
  value?: string;
  onChange?: (e: ChangeEvent) => void;
  border?: "solid" | "none";
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
  errorMessage,
}: InputFieldProps) {
  const className: string = cn("default", size, color, isError && "error", border);

  return (
    <div className={styles.inputField}>
      {label && <Label name={name} label={label} />}
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
      {isError && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
}
