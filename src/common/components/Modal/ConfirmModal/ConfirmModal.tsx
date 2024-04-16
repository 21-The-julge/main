import classNames from "classnames/bind";
import styles from "@/common/components/Modal/ConfirmModal/confirmModal.module.scss";
import { useEffect, useRef } from "react";

const cn = classNames.bind(styles);

interface ConfirmModalProps {
  text: string;
  className: string;
  onClick: () => void;
}

export default function ConfirmModal({ text, className, onClick }: ConfirmModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick]);
  return (
    <div className={cn(className, "modalContainer")} ref={modalRef}>
      <p className={cn("text")}>{text}</p>
      <button onClick={onClick} className={cn("buttonPosition")} type="button">
        확인
      </button>
    </div>
  );
}
