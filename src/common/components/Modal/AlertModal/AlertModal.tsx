import classNames from "classnames/bind";
import styles from "@/common/components/Modal/AlertModal/AlertModal.module.scss";
import { useRef } from "react";
import Check from "@/images/ic_check.svg";
import useOutSideClick from "../hooks/useOutsideClick";

const cn = classNames.bind(styles);

interface AlertModalProps {
  message: string;
  className: string;
  leftButtononClick: () => void;
  rightButtononClick: () => void;
  leftButtonText: string;
  rightButtonText: string;
}

export default function AlertModal({
  message,
  className,
  leftButtononClick,
  rightButtononClick,
  leftButtonText,
  rightButtonText,
}: AlertModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutSideClick(modalRef, leftButtononClick);

  return (
    <div className={cn(className, "modalContainer")} ref={modalRef}>
      <div className={cn("messageContainer")}>
        <Check width={16} height={16} />
        <p className={cn("text")}>{message}</p>
      </div>
      <div className={cn("buttonContainer")}>
        <button onClick={leftButtononClick} type="button" className={cn("leftButton")}>
          {leftButtonText}
        </button>
        <button onClick={rightButtononClick} type="button" className={cn("rightButton")}>
          {rightButtonText}
        </button>
      </div>
    </div>
  );
}
