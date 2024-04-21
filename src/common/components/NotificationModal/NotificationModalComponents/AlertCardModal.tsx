import { useRef, useEffect } from "react";
import classNames from "classnames/bind";
import IC_CLOSE from "@/images/ic_close.svg";
import GetAlertCardModalData from "@/shared/hooks/getAlertCardModalData";
import CreateCards from "./CreateCards";
import styles from "./AlertCardModal.module.scss";

const cn = classNames.bind(styles);

interface AlertModalProps {
  onToggleModal: () => void;
  alertCount: number;
}

export default function AlertCardModal({ onToggleModal, alertCount }: AlertModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { hasNotification, items } = GetAlertCardModalData();

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
  if (!hasNotification) {
    return null;
  }

  return (
    <div className={cn("container")} ref={modalRef}>
      <div className={cn("notification")}>
        <div>알림 {alertCount}개</div> <IC_CLOSE className={cn("icon")} fill="#000" onClick={onToggleModal} />
      </div>
      <div className={cn("contents")}>
        {items.map(({ id, shop, notice, createdAt, result }) => (
          <CreateCards
            key={id}
            name={shop.item.name}
            startsAt={notice.item.startsAt}
            createdAt={createdAt}
            result={result}
          />
        ))}
      </div>
    </div>
  );
}
