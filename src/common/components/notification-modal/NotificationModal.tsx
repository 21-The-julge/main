import { useState } from "react";
import classNames from "classnames/bind";
import IC_NOTIFICATION from "@/images/ic_notification.svg";
import { AlertResponseData } from "./types";
import styles from "./NotificationModal.module.scss";

import AlertModal from "./notificationModal-components/AlertModal";

const cn = classNames.bind(styles);

interface NotificationModalProps {
  notificationData: AlertResponseData | null;
}

export default function NotificationModal({ notificationData }: NotificationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const alertColor = notificationData ? "#EA3C12" : "none";

  const handleToggleModal = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    if (!isOpen) {
      setIsOpen(true);
    }
  };
  return (
    <>
      <IC_NOTIFICATION className={cn("container")} fill={alertColor} onClick={handleToggleModal} />
      {isOpen && <AlertModal handleToggleModal={handleToggleModal} notificationData={notificationData} />}
    </>
  );
}
