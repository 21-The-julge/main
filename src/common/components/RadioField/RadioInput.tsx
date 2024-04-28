import classNames from "classnames/bind";
import { InputHTMLAttributes, forwardRef } from "react";

import styles from "./RadioInput.module.scss";

const cn = classNames.bind(styles);

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string; // fieldset안에서 name값이 같아야 하나만 checked가능
  label?: string;
}

export default forwardRef<HTMLInputElement, RadioInputProps>(function RadioInput(
  { id, value, label, name, ...rest },
  ref,
) {
  const className = cn("radioBox");

  return (
    <label htmlFor={id} className={className}>
      <input ref={ref} id={id} className={cn("input")} type="radio" name={name} value={value} {...rest} />
      {label}
    </label>
  );
});
