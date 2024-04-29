import { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef } from "react";

import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  name?: string;
  type?: HTMLInputTypeAttribute;
  size?: "sm" | "md";
  color?: "white" | "gray";
  cursor?: string;
  value?: string | number | readonly string[] | undefined;
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { type = "text", size, name, color = "white", value, cursor, ...rest },
  ref,
) {
  const className = cn("default", size, color, cursor);

  return <input ref={ref} id={name} name={name} className={className} type={type} value={value} {...rest} />;
});
