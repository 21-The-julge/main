import { useState } from "react";
import classNames from "classnames/bind";
import IC_NOTIFICATION from "@/images/ic_notification.svg";
import { useGetAlertsData } from "@/shared/apis/api-hooks";
import styles from "./NotificationModal.module.scss";

import AlertCardModal from "./NotificationModalComponents/AlertCardModal";

const cn = classNames.bind(styles);

export default function NotificationModal() {
  const { data } = useGetAlertsData({ offset: 0, limit: 10 });
  const [isOpen, setIsOpen] = useState(false);
  const iconColor = data?.count > 0 ? "#EA3C12" : "none";

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <IC_NOTIFICATION className={cn("container")} fill={iconColor} onClick={onToggleModal} />
      {isOpen && <AlertCardModal onToggleModal={onToggleModal} alertCount={data.count} />}
    </>
  );
}
