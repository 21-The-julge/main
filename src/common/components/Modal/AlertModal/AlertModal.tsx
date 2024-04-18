import classNames from "classnames/bind";
import styles from "@/common/components/Modal/AlertModal/AlertModal.module.scss";
import { useRef } from "react";
import Check from "@/images/ic_check.svg";
import Modal from "@/common/components/Modal/Modal";
import useOutSideClick from "../hooks/useOutsideClick";

const cn = classNames.bind(styles);

interface AlertModalProps {
  message: string;
  className: string;
  cancelButtonOnClick: () => void;
  confirmButtonOnClick: () => void;
  cancelButtonText: string;
  confirmButtonText: string;
}

export default function AlertModal({
  message,
  className,
  cancelButtonOnClick,
  confirmButtonOnClick,
  cancelButtonText,
  confirmButtonText,
}: AlertModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutSideClick(modalRef, cancelButtonOnClick);

  return (
    <Modal>
      <div className={cn(className, "modalContainer")} ref={modalRef}>
        <div className={cn("messageContainer")}>
          <Check width={16} height={16} />
          <p className={cn("text")}>{message}</p>
        </div>
        <div className={cn("buttonContainer")}>
          <button onClick={cancelButtonOnClick} type="button" className={cn("leftButton")}>
            {cancelButtonText}
          </button>
          <button onClick={confirmButtonOnClick} type="button" className={cn("rightButton")}>
            {confirmButtonText}
          </button>
        </div>
      </div>
    </Modal>
  );
}
