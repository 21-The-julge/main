import classNames from "classnames/bind";
import styles from "./InputField.module.scss";
import Input from "../Input/Input";
import SuffixIcon from "./SuffixIcon/SuffixIcon";

const cn = classNames.bind(styles);

interface InputFieldProps {
  name: string;
  type?: "text" | "email" | "password" | "dropdown" | "search" | "money" | "time";
  placeholder?: string;
  size?: "sm" | "md" | "full";
  color?: "white" | "gray";
  isError?: true | false;
  label?: string;
  disabled?: true | false;
  unit?: string;
}

export default function InputField({
  name,
  type = "text",
  placeholder = "",
  size = "md",
  color = "white",
  isError = false,
  label,
  disabled = false,
  unit,
}: InputFieldProps) {
  const className: string = cn("default", size, color, isError && "error");

  return (
    <div className={styles.inputField}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}

      <div className={className}>
        {/* {prefixIcon && <PrefixIcon prefixIcon={prefixIcon} />} */}
        <Input name={name} type={type} placeholder={placeholder} size={size} color={color} disabled={disabled} />
        {unit && <SuffixIcon suffix={unit} />}
      </div>

      {isError && <span className={styles.errorMessage}>잘못된 이메일 입니다.</span>}
    </div>
  );
}

// component 정의 후 defaultProps 설정
// InputField.defaultProps = {
//   placeholder: "",
//   size: "md",
//   type: "text",
//   color: "white",
//   isError: false,
//   label: null,
//   disabled: "false",
// };
