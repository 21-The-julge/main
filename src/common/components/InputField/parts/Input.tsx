import { ChangeEvent } from "react";

import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps {
  type: "text" | "email" | "password" | "search";
  size?: "sm" | "md" | "free";
  placeholder?: string;
  name?: string;
  color?: "white" | "gray";
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function Input({
  type = "text",
  size,
  placeholder,
  name,
  color = "white",
  disabled,
  value,
  onChange,
  required,
}: InputProps) {
  const className = cn("default", size, color);

  return (
    <input
      id={name}
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
}
