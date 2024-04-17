import { useRef, useEffect } from "react";
import classNames from "classnames/bind";
import IC_CLOSE from "@/images/ic_close.svg";
import IC_SEARCH from "@/images/ic_search.svg";
import styles from "./AlertModal.module.scss";

const cn = classNames.bind(styles);

interface AlertModalProps {
  handleToggleModal: () => void;
  count: number;
}

export default function AlertModal({ handleToggleModal, count }: AlertModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseOver = () => {
      document.body.style.overflow = "hidden";
    };

    const handleMouseOut = () => {
      document.body.style.overflow = "auto";
    };

    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.addEventListener("mouseover", handleMouseOver);
      modalElement.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener("mouseover", handleMouseOver);
        modalElement.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  return (
    <div className={cn(styles.container)} ref={modalRef}>
      <div className={cn(styles.notification)}>
        <div>알림 {count}개</div> <IC_CLOSE className={cn(styles.icon)} fill="#000" onClick={handleToggleModal} />
      </div>
      <div className={cn(styles.contents)}>
        <div className={cn(styles.card)}>
          <IC_SEARCH className={cn(styles.icon)} fill=" #0080FF" />
          <div className={cn(styles.text_container)}>
            HS 과일주스(2023-01-14 15:00~18:00) 공고 지원이 <span>승인</span>되었어요.
          </div>
          <div className={cn(styles.date)}>3분 전 </div>
        </div>
        <div className={cn(styles.card)}>
          <IC_SEARCH className={cn(styles.icon)} fill=" #FF4040" />
          <div className={cn(styles.text_container)}>
            수리 에스프레소 샵(2023-01-14 15:00~18:00) 공고 지원이 <span>거절</span>되었어요.
          </div>
          <div className={cn(styles.date)}>3분 전 </div>
        </div>
      </div>
    </div>
  );
}
