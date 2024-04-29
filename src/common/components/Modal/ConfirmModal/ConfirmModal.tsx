import classNames from "classnames/bind";
import { useRef } from "react";

import { Button } from "@/common/components";
import useOutsideClick from "@/common/hooks/useOutsideClick";
import Modal from "@/common/components/Modal/Modal";

import styles from "@/common/components/Modal/ConfirmModal/confirmModal.module.scss";

const cn = classNames.bind(styles);

interface ConfirmModalProps {
  message: string;
  className: string;
  onClick: () => void;
}

export default function ConfirmModal({ message, className, onClick }: ConfirmModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onClick);

  return (
    <Modal>
      <div className={cn("modalContainer", className)} ref={modalRef}>
        <p className={cn("text")}>{message}</p>
        <Button onClick={onClick} size="medium">
          확인
        </Button>
      </div>
    </Modal>
  );
}
