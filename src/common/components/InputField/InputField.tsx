import classNames from "classnames/bind";
import styles from "./InputField.module.scss";
import Input from "../Input/Input";

const cn = classNames.bind(styles);

interface InputFieldProps {
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  size?: "sm" | "md" | "full";
  color?: "white" | "gray";
  isError?: true | false;
}

export default function InputField({ name, type, placeholder, size, color, isError }: InputFieldProps) {
  const className: string = cn("default", size, color, isError && "error");

  return (
    <div className={styles.inputField}>
      <div className={styles.label}>{name}</div>
      {/* <SuffixIcon /> */}
      <div className={className}>
        <Input name={name} type={type} placeholder={placeholder} size={size} />
      </div>
      {/* <PreffixIcon /> */}
      <span className={styles.errorMessage}>잘못된 이메일 입니다.</span>
    </div>
  );
}

// component 정의 후 defaultProps 설정
InputField.defaultProps = {
  placeholder: "",
  size: "md",
  type: "text",
  color: "white",
  isError: true,
};
