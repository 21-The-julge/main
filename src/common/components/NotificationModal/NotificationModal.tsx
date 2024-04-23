import { useState } from "react";
import classNames from "classnames/bind";
import IC_NOTIFICATION from "@/images/ic_notification.svg";
import GetNotificationData from "@/shared/hooks/getNotificationData";
import styles from "./NotificationModal.module.scss";

import AlertModal from "./NotificationModalComponents/AlertCardModal";

const cn = classNames.bind(styles);

export default function NotificationModal() {
  const { iconColor, alertCount } = GetNotificationData();
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <IC_NOTIFICATION className={cn("container")} fill={iconColor} onClick={onToggleModal} />
      {isOpen && <AlertModal onToggleModal={onToggleModal} alertCount={alertCount} />}
    </>
  );
}
