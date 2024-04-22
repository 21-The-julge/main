import { ChangeEvent } from "react";

import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps {
  type: "text" | "email" | "password" | "search";
  size?: "sm" | "md";
  placeholder?: string;
  name?: string;
  color?: "white" | "gray";
  disabled?: boolean;
  value?: string | number | readonly string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  required?: boolean;
  cursor?: string;
}

export default function Input({
  type = "text",
  size = "md",
  placeholder = "",
  name,
  color = "white",
  disabled = false,
  value,
  onChange,
  readOnly,
  required,
  cursor,
}: InputProps) {
  const className = cn("default", size, color, cursor);

  return (
    <input
      id={name}
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      required={required}
    />
  );
}
