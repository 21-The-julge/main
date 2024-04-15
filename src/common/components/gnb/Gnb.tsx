import classNames from "classnames/bind";

import styles from "./Gnb.module.scss";

import UserAction from "./UserAction";

const cx = classNames.bind(styles);
export default function Gnb() {
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.logo)}>
        <img alt="로고" />
      </div>
      <input className={cx(styles.input)} type="text" placeholder="검색어를 입력해주세요." />
      <UserAction />
    </div>
  );
}
