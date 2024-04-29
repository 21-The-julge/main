import { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef } from "react";

import classNames from "classnames/bind";
import styles from "./InputField.module.scss";

import { PrefixElement, ErrorMessage, Input, SuffixUnit, Label } from "../parts/index";

const cn = classNames.bind(styles);
interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  name?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  unit?: "원" | "시간";
  prefix?: "search";
  isError?: boolean;
  errorMessage?: string;
  size?: "sm" | "md";
  color?: "white" | "gray";
  border?: "solid" | "none";
  className?: string;
  disabled?: boolean;
}

export default forwardRef<HTMLInputElement, InputFieldProps>(function InputField(
  {
    name,
    type = "text",
    size = "md",
    color = "white",
    isError = false,
    unit,
    prefix,
    value,
    border = "solid",
    errorMessage = "",
    className,
    label,
    disabled,
    ...rest
  },
  ref,
) {
  const combinedClassName = cn("default", size, color, border, { error: isError, inputDisabled: disabled });

  return (
    <div className={cn("inputField", className)}>
      {label && <Label label={label} htmlFor={name} required={rest.required} />}
      <div className={combinedClassName}>
        {prefix && <PrefixElement element={prefix} />}
        <Input name={name} type={type} size={size} color={color} disabled={disabled} ref={ref} {...rest} />
        {unit && <SuffixUnit unit={unit} />}
        {isError && <ErrorMessage message={errorMessage} />}
      </div>
    </div>
  );
});
