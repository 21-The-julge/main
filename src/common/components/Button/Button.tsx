import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cn = classNames.bind(styles);

interface ButtonProps {
  children: ReactNode;
  type: "submit" | "button" | "reset";
  size: "large" | "medium" | "small";
  variant?: "solid" | "outline";
  color?: "primary" | "secondary";
  disabled?: boolean;
  onClick: () => void;
}

export default function Button({ children, type, size, variant, color, disabled, onClick }: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      className={cn("button", size, variant, color)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = { variant: "solid", color: "primary", disabled: false } as Partial<ButtonProps>;
