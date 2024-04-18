import classNames from "classnames/bind";
import styles from "@/common/components/Modal/WarnModal/WarnModal.module.scss";
import { useRef } from "react";
import Warn from "@/images/ic_warn.svg";
import Modal from "@/common/components/Modal/Modal";
import useOutSideClick from "../hooks/useOutsideClick";

const cn = classNames.bind(styles);

interface WarnModalProps {
  message: string;
  className: string;
  onClick: () => void;
}

export default function WarnModal({ message, className, onClick }: WarnModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutSideClick(modalRef, onClick);

  return (
    <Modal>
      <div className={cn(className, "modalContainer")} ref={modalRef}>
        <div className={cn("messageContainer")}>
          <Warn width={16} height={16} />
          <p className={cn("text")}>{message}</p>
        </div>
        <button type="button" onClick={onClick} className={cn("buttonContainer")}>
          확인
        </button>
      </div>
    </Modal>
  );
}
