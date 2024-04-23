import classNames from "classnames/bind";
import styles from "./FieldGroup.module.scss";

import { InputField, Dropdown } from "./index";
import { Label } from "./parts";
import { DropdownProps, InputFieldProps } from "./type";

const cn = classNames.bind(styles);

interface FieldGroupProps extends InputFieldProps, DropdownProps {
  field: "input" | "dropdown" | "textarea";
}

export default function FieldGroup({
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
}: FieldGroupProps) {
  const commonProps = {
    name,
    placeholder,
    size,
    color,
    className,
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
  };

  const renderField = () => {
    switch (field) {
      case "input":
        return <InputField {...commonProps} />;
      case "dropdown":
        return <Dropdown {...commonProps} />;
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
}
