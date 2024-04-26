import { ChangeEvent, ForwardedRef, forwardRef } from "react";

import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps {
  name?: string;
  type: "text" | "email" | "password" | "search";
  value?: string | number | readonly string[];
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  size?: "sm" | "md";
  color?: "white" | "gray";
  readOnly?: boolean;
  required?: boolean;
  cursor?: string;
}

export default forwardRef(function Input(
  {
    type = "text",
    size,
    placeholder,
    name,
    color = "white",
    disabled,
    value,
    onChange,
    readOnly,
    required,
    cursor,
    ...rest
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const className = cn("default", size, color, cursor);

  return (
    <input
      ref={ref}
      id={name}
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      required={required}
      onChange={onChange}
      readOnly={readOnly}
      {...rest}
    />
  );
});
