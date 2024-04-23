import classNames from "classnames/bind";
import styles from "./NoticeDetailInfo.module.scss";

const cn = classNames.bind(styles);

export default function NoticeDetailInfo() {
  return (
    <div className={cn("frame")}>
      <h2>음식종류 데이터</h2>
      <h1>식당 이름</h1>
      <div>post?</div>
      <div>description</div>
    </div>
  );
}
