import { useState } from "react";
import classNames from "classnames/bind";
import IcNotifitaion from "@/images/ic_notification.svg";
import { useGetAlertsData } from "@/shared/apis/api-hooks";
import styles from "./NotificationModal.module.scss";

import AlertCardModal from "./NotificationModalComponents/AlertCardModal";

const cn = classNames.bind(styles);

interface AlertData {
  count: number;
  items: object[];
}

export default function NotificationModal() {
  const { data: alertData } = useGetAlertsData({ offset: 10, limit: 10 }) as { data: AlertData };

  const [isOpen, setIsOpen] = useState(false);
  const iconColor = alertData?.count > 0 ? "#EA3C12" : "none";

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <IcNotifitaion className={cn("container")} fill={iconColor} onClick={onToggleModal} />
      {isOpen && <AlertCardModal onToggleModal={onToggleModal} alertData={alertData} />}
    </>
  );
}
