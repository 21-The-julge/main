import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps {
  type: "text" | "email" | "password";
  size: "sm" | "md" | "lg" | "xl" | "full";
  placeholder?: string;
}

export default function Input({ type, size, placeholder }: InputProps) {
  const className: string = cn("default", size);

  return <input className={className} type={type} placeholder={placeholder} />;
}
// component 정의 후 defaultProps 설정
Input.defaultProps = {
  placeholder: "",
};
