import { ReactNode } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import LOGO from "@/images/logo.svg";
import styles from "./Gnb.module.scss";

import UserAction from "./gnb-components/UserAction";

const cn = classNames.bind(styles);

function GnbContainer({ children }: { children: ReactNode }) {
  return <div className={cn(styles.container)}>{children}</div>;
}

function GnbLogo() {
  return (
    <Link href="/">
      <LOGO className={cn(styles.logo)} />
    </Link>
  );
}

function GnbInput() {
  return <input className={cn(styles.input)} type="text" placeholder="가게 이름으로 찾아보세요." />;
}

export default function Gnb({ isLoggedIn = !false, emplyoer = false, isNotification = false, count = 0 }) {
  return (
    <GnbContainer>
      <GnbLogo />
      <GnbInput />
      <UserAction isLoggedIn={isLoggedIn} emplyoer={emplyoer} isNotification={isNotification} count={count} />
    </GnbContainer>
  );
}
