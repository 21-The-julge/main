import classNames from "classnames/bind";
import { ChangeEvent, InputHTMLAttributes, forwardRef, useState } from "react";

import { Radio } from "../parts";

import styles from "./RadioField.module.scss";

const cn = classNames.bind(styles);
interface Option {
  id: string;
  value: string;
  label: string;
}

interface RadioFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  legend: string;
  name: string;
  options: Option[];
}

export default forwardRef<HTMLInputElement, RadioFieldProps>(function RadioField(
  { legend, name, options, ...rest },
  ref,
) {
  const [isSelected, setIsSelected] = useState(options[0].value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.value);
    rest.onChange?.(e);
  };

  return (
    <fieldset className={cn("radioField")}>
      <legend className={cn("legend")}>{legend}</legend>
      <div className={cn("radioInputBox")}>
        {options.map((option) => (
          <Radio
            {...rest}
            checked={isSelected === option.value}
            onChange={handleChange}
            ref={ref}
            key={option.id}
            id={option.id}
            name={name}
            label={option.label}
            value={option.value}
          />
        ))}
      </div>
    </fieldset>
  );
});
