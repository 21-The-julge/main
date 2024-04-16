import CloseIcon from "@/images/ic_close.svg";
import styles from "./badge.module.scss";
import classNames from "classnames";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  close?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Badge({ color, close = false, children, onClick, ...props }: BadgeProps) {
  const cn = classNames.bind(styles);

  return close ? (
    <div className={cn("badge")} {...props}>
      {children}
      <CloseIcon width="16" height="16" fill="#EA3C12" onClick={onClick} />
    </div>
  ) : (
    <div className={cn("badge")} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
