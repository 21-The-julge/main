import { useRef, useEffect } from "react";
import classNames from "classnames/bind";
import IcClose from "@/images/ic_close.svg";
import useGetAlertCardModalData from "@/shared/hooks/useGetAlertCardModalData";
import CreateCards from "./CreateCards";
import styles from "./AlertCardModal.module.scss";

const cn = classNames.bind(styles);

interface AlertModalProps {
  onToggleModal: () => void;
  alertData: {
    count: number;
    items: object[];
  };
}

export default function AlertCardModal({ onToggleModal, alertData }: AlertModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { items } = useGetAlertCardModalData();

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
        <div>알림 {alertData?.count}개</div> <IcClose className={cn("icon")} fill="#000" onClick={onToggleModal} />
      </div>
      <div className={cn("contents")}>
        {alertData?.count > 0 &&
          items.map(({ id, shop, notice, createdAt, result }) => (
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
