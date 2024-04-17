import Input from "../Input/Input";
import styles from "./InputField.module.scss";

interface InputFieldProps {
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  size?: "sm" | "md" | "full";
}

export default function InputField({ name, type = "text", placeholder, size }: InputFieldProps) {
  return (
    <>
      <div className={styles.label}>{name}</div>
      {/* <SuffixIcon /> */}
      <div className={styles.inputField}>
        <Input name={name} type={type} placeholder={placeholder} size={size} />
      </div>
      {/* <PreffixIcon /> */}
      {/* <span className={styles.errorMessage}>{"잘못된 이메일 입니다."}</span> */}
    </>
  );
}

// component 정의 후 defaultProps 설정
InputField.defaultProps = {
  placeholder: "",
  size: "md",
  type: "text",
};
