import { HTMLAttributes } from "react";
import CloseIcon from "@/images/ic_close.svg";
import classNames from "classnames/bind";
import styles from "./Badge.module.scss";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  color: "blue" | "green" | "red";
  isResponsive?: boolean;
  hasCloseIcon?: boolean;
  onClick?: () => void;
  className?: string;
}
const cn = classNames.bind(styles);

export default function Badge({
  color,
  hasCloseIcon = false,
  isResponsive,
  children,
  onClick,
  className,
  ...rest
}: BadgeProps) {
  const badgeClass = cn("badge", color, { responsive: isResponsive }, className);
  return (
    <div className={badgeClass} {...rest}>
      {children}
      {hasCloseIcon && <CloseIcon width="16" height="16" fill="#EA3C12" onClick={onClick} />}
    </div>
  );
}
