import classNames from "classnames/bind";
import styles from "@/common/components/Modal/ConfirmModal/confirmModal.module.scss";
import { useRef } from "react";
import useOutSideClick from "../hooks/useOutsideClick";

const cn = classNames.bind(styles);

interface ConfirmModalProps {
  message: string;
  className: string;
  onClick: () => void;
}

export default function ConfirmModal({ message, className, onClick }: ConfirmModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutSideClick(modalRef, onClick);

  return (
    <div className={cn(className, "modalContainer")} ref={modalRef}>
      <p className={cn("text")}>{message}</p>
      <button onClick={onClick} className={cn("buttonPosition")} type="button">
        확인
      </button>
    </div>
  );
}
