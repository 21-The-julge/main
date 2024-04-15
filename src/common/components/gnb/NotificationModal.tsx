import classNames from "classnames/bind";
import styles from "./NotificationModal.module.scss";

const cx = classNames.bind(styles);

export default function NotificationModal({ isAlert = false }) {
  return <div className={cx(styles.container)}>{isAlert ? <img alt="알림 있음" /> : <img alt="알림 없음" />}</div>;
}
