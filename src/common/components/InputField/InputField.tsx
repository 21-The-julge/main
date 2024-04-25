import { CSSProperties, ChangeEvent } from "react";

import classNames from "classnames/bind";
import styles from "./InputField.module.scss";

import { PrefixElement, SuffixElement, ErrorMessage, Label, Input } from "./index";

const cn = classNames.bind(styles);

interface InputFieldProps {
  name?: string;
  type?: "text" | "email" | "password" | "search";
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  unit?: "원" | "시간";
  prefix?: "search";
  isError?: boolean;
  errorMessage?: string;
  size?: "sm" | "md";
  color?: "white" | "gray";
  border?: "solid" | "none";
  className?: string;
} // input interface랑 비슷한데 extend로 뽑을까요?

interface ClassNameCSSProperties extends CSSProperties {
  "--width"?: string;
}

export default function InputField({
  name,
  type = "text",
  placeholder,
  size,
  color = "white",
  isError = false,
  label,
  disabled,
  required,
  unit,
  prefix,
  value,
  onChange,
  border = "solid",
  errorMessage = "",
  className,
}: InputFieldProps) {
  const combinedClassName = cn("default", size, color, border, { error: isError });
  const style: ClassNameCSSProperties = {
    "--width": className || "100vw",
  };

  return (
    <div className={cn("inputField")}>
      {label && <Label htmlFor={name} label={label} />}
      <div className={combinedClassName} style={style}>
        {prefix && <PrefixElement element={prefix} />}
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
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
