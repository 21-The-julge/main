import classNames from "classnames/bind";
import styles from "./InputField.module.scss";

import { PrefixElement, ErrorMessage, Input, SuffixUnit } from "../parts/index";
import { ClassNameCSSProperties, InputFieldProps } from "../type";

const cn = classNames.bind(styles);

export default function InputField({
  name,
  type = "text",
  placeholder,
  size = "md",
  color = "white",
  isError = false,
  disabled,
  required,
  unit,
  prefix,
  value,
  onChange,
  border = "solid",
  errorMessage = "",
  className,
  ...rest
}: InputFieldProps) {
  const combinedClassName = cn("default", size, color, border, { error: isError });
  const style: ClassNameCSSProperties = {
    "--width": className || "100vw",
  };

  return (
    <div className={cn("inputField")}>
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
          {...rest}
        />
        {unit && <SuffixUnit unit={unit} />}
      </div>
      {isError && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
