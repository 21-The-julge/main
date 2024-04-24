import classNames from "classnames/bind";
import styles from "@/common/components/Modal/AlertModal/AlertModal.module.scss";
import { useRef } from "react";
import Check from "@/images/ic_check.svg";
import Modal from "@/common/components/Modal/Modal";
import useOutsideClick from "@/common/hooks/useOutsideClick";
import Button from "@/common/components/Button/Button";

const cn = classNames.bind(styles);

interface AlertModalProps {
  message: string;
  className: string;
  onCancelButtonClick: () => void;
  onConfirmButtonClick: () => void;
  cancelButtonText: string;
  confirmButtonText: string;
}

export default function AlertModal({
  message,
  className,
  onCancelButtonClick,
  onConfirmButtonClick,
  cancelButtonText,
  confirmButtonText,
}: AlertModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onCancelButtonClick);

  return (
    <Modal>
      <div className={cn("modalContainer", className)} ref={modalRef}>
        <div className={cn("messageContainer")}>
          <Check width={20} height={20} />
          <p className={cn("text")}>{message}</p>
        </div>
        <div className={cn("buttonContainer")}>
          <Button onClick={onCancelButtonClick} variant="outline" color="primary" size="small">
            {cancelButtonText}
          </Button>
          <Button onClick={onConfirmButtonClick} size="small">
            {confirmButtonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
