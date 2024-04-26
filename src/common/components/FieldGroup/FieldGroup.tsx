import { ForwardedRef, Ref, forwardRef } from "react";

import classNames from "classnames/bind";
import styles from "./FieldGroup.module.scss";

import { Label } from "./parts";
import { InputField, Dropdown, Textarea } from "./index";
import { DropdownProps, InputFieldProps, TextareaProps } from "./type";

const cn = classNames.bind(styles);

interface FieldGroupProps extends InputFieldProps, DropdownProps, TextareaProps {
  field: "input" | "dropdown" | "textarea";
}

export default forwardRef(function FieldGroup(
  {
    field,
    label,
    required,
    name,
    placeholder,
    size,
    color,
    type,
    isError,
    disabled,
    unit,
    prefix,
    value,
    onChange,
    border,
    errorMessage,
    options,
    onClick,
    className,
    onTextareaChange,
    ...rest
  }: FieldGroupProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
) {
  const commonProps = {
    name,
    placeholder,
    size,
    color,
    className,
    ref,
    ...rest,
    ...(field === "input" && {
      type,
      isError,
      disabled,
      required,
      unit,
      prefix,
      value,
      onChange,
      border,
      errorMessage,
    }),
    ...(field === "dropdown" && {
      options,
      onClick,
    }),
    ...(field === "textarea" && {
      rows: 4,
      onTextareaChange,
    }),
  };

  const renderField = () => {
    switch (field) {
      case "input":
        return <InputField {...commonProps} ref={ref as Ref<HTMLInputElement>} />;
      case "dropdown":
        return <Dropdown {...commonProps} />;
      case "textarea":
        return <Textarea {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className={cn("fieldGroup")}>
      {label && <Label label={label} htmlFor={name} required={required} />}
      {renderField()}
    </div>
  );
});
