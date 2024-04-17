import React from "react";
import CloseIcon from "@/images/ic_close.svg";
import styles from "./badge.module.scss";
import classNames from "classnames";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "blue" | "green" | "red";
  mobile?: boolean;
  close?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string; // 사용자가 추가할 수 있는 클래스 이름
}

export default function Badge({
  color,
  close = false,
  mobile = true,
  children,
  onClick,
  className,
  ...props
}: BadgeProps) {
  const cn = classNames.bind(styles);
  // 기본 "badge" 클래스와 조건부 색상 클래스, 사용자 정의 클래스를 결합
  const badgeClasses = cn([styles.badge], [styles.className], {
    [styles.mobile]: mobile,
    [styles.blue]: color === "blue",
    [styles.green]: color === "green",
    [styles.red]: color === "red",
  });

  return (
    <div className={badgeClasses} {...props}>
      {children}
      {close && <CloseIcon width="16" height="16" fill="#EA3C12" onClick={onClick} />}
    </div>
  );
}
