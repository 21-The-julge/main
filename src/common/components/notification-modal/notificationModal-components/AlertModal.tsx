import { useRef, useEffect } from "react";
import classNames from "classnames/bind";
import IC_CLOSE from "@/images/ic_close.svg";
import IC_SEARCH from "@/images/ic_search.svg";
import { AlertResponseData } from "../types";
import styles from "./AlertModal.module.scss";

const cn = classNames.bind(styles);

export interface AlertModalProps {
  handleToggleModal: () => void;
  notificationData: AlertResponseData | null;
}

export default function AlertModal({ handleToggleModal, notificationData }: AlertModalProps) {
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
    <div className={cn("container")} ref={modalRef}>
      <div className={cn("notification")}>
        <div>알림 {notificationData ? notificationData.count : 0}개</div>{" "}
        <IC_CLOSE className={cn("icon")} fill="#000" onClick={handleToggleModal} />
      </div>
      <div className={cn("contents")}>
        <div className={cn("card")}>
          <IC_SEARCH className={cn("icon")} fill=" #0080FF" />
          <div className={cn("text-container")}>
            HS 과일주스(2023-01-14 15:00~18:00) 공고 지원이 <span>승인</span>되었어요.
          </div>
          <div className={cn("date")}>3분 전 </div>
        </div>
        <div className={cn("card")}>
          <IC_SEARCH className={cn("icon")} fill=" #FF4040" />
          <div className={cn("text-container")}>
            수리 에스프레소 샵(2023-01-14 15:00~18:00) 공고 지원이 <span>거절</span>되었어요.
          </div>
          <div className={cn("date")}>3분 전 </div>
        </div>
      </div>
    </div>
  );
}
