import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./Gnb.module.scss";

import UserAction from "./UserAction";

import LOGO from "@/images/logo.svg";

const cx = classNames.bind(styles);
export default function Gnb() {
  return (
    <div className={cx(styles.container)}>
      <Link href="/">
        <LOGO className={cx(styles.logo)} />
      </Link>
      <input className={cx(styles.input)} type="text" placeholder="가게 이름으로 찾아보세요." />
      <UserAction />
    </div>
  );
}
