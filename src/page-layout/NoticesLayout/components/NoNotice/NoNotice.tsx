import classNames from "classnames/bind";
import styles from "./NoNotice.module.scss";

const cn = classNames.bind(styles);

export default function NoNotice() {
  return <div className={cn("container")}>공고 목록이 존재하지 않아요.</div>;
}
