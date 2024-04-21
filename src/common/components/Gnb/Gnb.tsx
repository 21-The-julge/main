import classNames from "classnames/bind";
import Link from "next/link";
import LOGO from "@/images/logo.svg";
import styles from "./Gnb.module.scss";

import UserAction from "./Gnb-components/UserAction";

const cn = classNames.bind(styles);

const Input = <input className={cn("input")} type="text" placeholder="가게 이름으로 찾아보세요." />;

export default function Gnb() {
  return (
    <div className={cn("container")}>
      <Link href="/">
        <LOGO className={cn("logo")} />
      </Link>
      {Input}
      <UserAction />
    </div>
  );
}
