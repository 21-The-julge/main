import classNames from "classnames/bind";

import PersonalNoticeList from "../PersonalNoticeList/PersonalNoticeList";

import styles from "./PersonalNotices.module.scss";

const cn = classNames.bind(styles);

export default function PersonalNotices() {
  return (
    <div className={cn("container")}>
      <div className={cn("content")}>
        <h2 className={cn("heading")}>맞춤 공고</h2>
        <PersonalNoticeList />
      </div>
    </div>
  );
}
