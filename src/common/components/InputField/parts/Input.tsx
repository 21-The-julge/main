import { ChangeEvent } from "react";

import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps {
  type: "text" | "email" | "password" | "search";
  size?: "sm" | "md";
  placeholder?: string;
  name: string;
  color?: "white" | "gray";
  disabled?: true | false;
  value?: string | number;
  onChange?: (e: ChangeEvent) => void;
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
  ...rest
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
      onChange={onChange}
      {...rest}
    />
  );
}
