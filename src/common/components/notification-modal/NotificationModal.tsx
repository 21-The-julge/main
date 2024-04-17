import { useState } from "react";
import classNames from "classnames/bind";
import IC_NOTIFICATION from "@/images/ic_notification.svg";
import styles from "./NotificationModal.module.scss";

import AlertModal from "./components/AlertModal";

const cn = classNames.bind(styles);

interface NotificationModalProps {
  isNotification: boolean;
  count: number;
}

export default function NotificationModal({ isNotification, count }: NotificationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const alertColor = isNotification ? "#EA3C12" : "none";

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
      <IC_NOTIFICATION className={cn(styles.container)} fill={alertColor} onClick={handleToggleModal} />
      {isOpen && <AlertModal handleToggleModal={handleToggleModal} count={count} />}
    </>
  );
}
