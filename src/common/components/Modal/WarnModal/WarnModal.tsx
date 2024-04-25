import classNames from "classnames/bind";
import styles from "@/common/components/Modal/WarnModal/WarnModal.module.scss";
import { useRef } from "react";
import Warn from "@/images/ic_warn.svg";
import Modal from "@/common/components/Modal/Modal";
import useOutsideClick from "@/common/hooks/useOutsideClick";
import Button from "@/common/components/Button/Button";

const cn = classNames.bind(styles);

interface WarnModalProps {
  message: string;
  className: string;
  onClick: () => void;
}

export default function WarnModal({ message, className, onClick }: WarnModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onClick);

  return (
    <Modal>
      <div className={cn("modalContainer", className)} ref={modalRef}>
        <div className={cn("messageContainer")}>
          <Warn width={20} height={20} />
          <p className={cn("text")}>{message}</p>
        </div>
        <Button onClick={onClick} variant="outline" color="primary" size="small">
          확인
        </Button>
      </div>
    </Modal>
  );
}
