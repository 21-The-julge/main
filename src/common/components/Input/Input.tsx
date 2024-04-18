import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps {
  type: "text" | "email" | "password" | "dropdown" | "search" | "money" | "time";
  size?: "sm" | "md" | "full";
  placeholder?: string;
  name: string;
  color?: "white" | "gray";
  disabled?: true | false;
}

export default function Input({
  type = "text",
  size = "md",
  placeholder = "",
  name,
  color = "white",
  disabled = false,
}: InputProps) {
  const className: string = cn("default", size, color);

  return (
    <input id={name} name={name} className={className} type={type} placeholder={placeholder} disabled={disabled} />
  );
}

// Input.defaultProps = {
//   placeholder: "",
//   size: "md",
//   type: "text",
//   color: "white",
//   disabled: false,
// };
