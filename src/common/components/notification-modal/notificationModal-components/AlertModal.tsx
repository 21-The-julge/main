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

function EmpoyerAlertCards({
  shopName = "HS 과일주스",
  workhour = "2023-01-14 15:00~18:00",
  alertCreatedAt = 3,
  canceled = false,
}) {
  const alertColor = canceled ? " #FF4040" : "#0080FF";
  const alertText = canceled ? "공고에 지원이 취소되었습니다." : "새로운 지원자가 나타났습니다.";
  return (
    <div className={cn("card")}>
      <IC_SEARCH className={cn("icon")} fill={alertColor} />
      <div className={cn("text-container")}>
        {shopName}({workhour})
        <br />
        {alertText}
      </div>
      <div className={cn("date")}>{alertCreatedAt}분 전 </div>
    </div>
  );
}

function EmployeeAlertCards({
  shopName = "수리 에스프레소 샵",
  workhour = "2023-01-14 15:00~18:00",
  alertCreatedAt = 3,
  rejected = false,
}) {
  const alertColor = rejected ? " #FF4040" : "#0080FF";
  const alertText = rejected ? "거절" : "승인";
  const alertTextColor = rejected ? "red" : "blue";
  return (
    <div className={cn("card")}>
      <IC_SEARCH className={cn("icon")} fill={alertColor} />
      <div className={cn("text-container")}>
        {shopName}({workhour})
        <br />
        공고 지원이 <span className={cn(alertTextColor)}>{alertText}</span>되었어요.
      </div>
      <div className={cn("date")}>{alertCreatedAt} </div>
    </div>
  );
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
        <EmpoyerAlertCards />
        <EmployeeAlertCards />
      </div>
    </div>
  );
}
