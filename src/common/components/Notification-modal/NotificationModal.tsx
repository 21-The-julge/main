import { useState } from "react";
import classNames from "classnames/bind";
import IC_NOTIFICATION from "@/images/ic_notification.svg";
import GetNotificationData from "@/shared/hooks/getNotificationData";
import styles from "./NotificationModal.module.scss";

import AlertModal from "./NotificationModal-components/AlertCardModal";

const cn = classNames.bind(styles);

export default function NotificationModal() {
  const { iconColor, alertCount } = GetNotificationData();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <IC_NOTIFICATION className={cn("container")} fill={iconColor} onClick={handleToggleModal} />
      {isOpen && <AlertModal handleToggleModal={handleToggleModal} alertCount={alertCount} />}
    </>
  );
}
