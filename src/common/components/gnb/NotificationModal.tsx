import classNames from "classnames/bind";
import styles from "./NotificationModal.module.scss";

import IC_NOTIFICATION from "@/images/ic_notification.svg";

const cx = classNames.bind(styles);

export default function NotificationModal({ isAlert = false }) {
  return (
    <div>
      {isAlert ? (
        <IC_NOTIFICATION className={cx(styles.container)} fill="#EA3C12" />
      ) : (
        <IC_NOTIFICATION className={cx(styles.container)} />
      )}
    </div>
  );
}
