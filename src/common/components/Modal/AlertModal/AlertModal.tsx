import classNames from "classnames/bind";
import styles from "@/common/components/Modal/AlertModal/AlertModal.module.scss";
import { useRef } from "react";
import Check from "@/images/ic_check.svg";
import Modal from "@/common/components/Modal/Modal";
import useOutSideClick from "@/common/components/Modal/hooks/useOutsideClick";
import Button from "@/common/components/Button/Button";

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
          <Check width={20} height={20} />
          <p className={cn("text")}>{message}</p>
        </div>
        <div className={cn("buttonContainer")}>
          <Button onClick={cancelButtonOnClick} variant="outline" color="primary" size="small">
            {cancelButtonText}
          </Button>
          <Button onClick={confirmButtonOnClick} size="small">
            {confirmButtonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
