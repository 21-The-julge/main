import { HTMLAttributes } from "react";
import classNames from "classnames/bind";
import styles from "./Badge.module.scss";
import CloseIcon from "@/images/ic_close.svg";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  color: "blue" | "green" | "red";
  styleMode?: "fixed" | "responsive";
  hasCloseIcon?: boolean;
  onClick?: () => void;
  className?: string;
}
const cn = classNames.bind(styles);

export default function Badge({
  color,
  hasCloseIcon = false,
  styleMode,
  children,
  onClick,
  className,
  ...props
}: BadgeProps) {
  const badgeClass = cn("badge", color, { responsive: styleMode === "responsive" }, className);
  return (
    <div className={badgeClass} {...props}>
      {children}
      {hasCloseIcon && <CloseIcon width="16" height="16" fill="#EA3C12" onClick={onClick} />}
    </div>
  );
}
//
