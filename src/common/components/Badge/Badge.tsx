import React, { HTMLAttributes, MouseEventHandler } from "react";
import CloseIcon from "@/images/ic_close.svg";
import styles from "./badge.module.scss";
import classNames from "classnames/bind";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  color?: "blue" | "green" | "red";
  mobile?: boolean;
  close?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}
const cn = classNames.bind(styles);
// 모바일 prop을 둔 이유 filter에서는 모바일 디자인을 안쓰는것 같아서
export default function Badge({
  color,
  close = false,
  mobile = true,
  children,
  onClick,
  className,
  ...props
}: BadgeProps) {
  return (
    <div className={cn("badge", color, mobile && "mobile", className)} {...props}>
      {children}
      {close && <CloseIcon width="16" height="16" fill="#EA3C12" onClick={onClick} />}
    </div>
  );
}
