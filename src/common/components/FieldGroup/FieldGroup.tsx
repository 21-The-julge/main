import classNames from "classnames/bind";
import styles from "./FieldGroup.module.scss";

import { InputField, Dropdown } from "./index";
import { Label } from "./parts";
import { DropdownProps, InputFieldProps } from "./type";

const cn = classNames.bind(styles);

interface FieldGroupProps extends InputFieldProps, DropdownProps {
  field: "input" | "dropdown" | "textarea";
}

export default function FieldGroup({ field, label, required, name, options }: FieldGroupProps) {
  return (
    <div className={cn("fieldGroup")}>
      {label && <Label label={label} htmlFor={name} required={required} />}
      {field === "input" && <InputField />}
      {field === "dropdown" && <Dropdown options={options} />}
    </div>
  );
}
