import { TextareaHTMLAttributes, forwardRef } from "react";

import classNames from "classnames/bind";
import styles from "./Textarea.module.scss";

import { Label } from "../parts";

const cn = classNames.bind(styles);

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  name?: string;
  value?: string | number;
  required?: boolean;
  label?: string;
  className?: string;
}

export default forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { name, value, label, rows = 4, className, ...rest },
  ref,
) {
  return (
    <div className={cn("field")}>
      {label && <Label label={label} htmlFor={name} required={rest.required} />}
      <div className={cn("textareaBox", className)}>
        <textarea
          ref={ref}
          rows={rows}
          className={cn("textarea")}
          id={name}
          name={name}
          autoCorrect="off"
          value={value}
          {...rest}
        />
      </div>
    </div>
  );
});
