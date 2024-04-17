import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps {
  type?: "text" | "email" | "password";
  size?: "sm" | "md" | "full";
  placeholder?: string;
  name: string;
}

export default function Input({ type, size, placeholder, name }: InputProps) {
  const className: string = cn("default", size);

  return <input id={name} name={name} className={className} type={type} placeholder={placeholder} />;
}

Input.defaultProps = {
  placeholder: "",
  size: "md",
  type: "text",
};
