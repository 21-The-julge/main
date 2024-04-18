import { ChangeEvent } from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps {
  type: "text" | "email" | "password" | "dropdown" | "search" | "number" | "time";
  size?: "sm" | "md" | "full";
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
  const className: string = cn("default", size, color);

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
