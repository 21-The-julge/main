import React, { ReactNode, useEffect, useState } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import LOGO from "@/images/logo.svg";
import styles from "./Gnb.module.scss";

import UserAction from "./gnb-components/UserAction";

const cn = classNames.bind(styles);

function GnbContainer({ children }: { children: ReactNode }) {
  return <div className={cn("container")}>{children}</div>;
}

function GnbLogo() {
  return (
    <Link href="/">
      <LOGO className={cn("logo")} />
    </Link>
  );
}

function GnbInput() {
  return <input className={cn("input")} type="text" placeholder="가게 이름으로 찾아보세요." />;
}

export default function Gnb() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const type = "employer";
  const notificationData = null;

  useEffect(() => {
    setToken(window.sessionStorage.getItem("token"));
    const updateToken = () => {
      const newToken = window.sessionStorage.getItem("token");
      setToken(newToken);
    };
    window.addEventListener("storage", updateToken);
    const loginUpdate = Boolean(token);
    setIsLoggedIn(loginUpdate);
    return () => {
      window.removeEventListener("storage", updateToken);
    };
  }, [token]);

  return (
    <GnbContainer>
      <GnbLogo />
      <GnbInput />
      <UserAction isLoggedIn={isLoggedIn} type={type} notificationData={notificationData} />
    </GnbContainer>
  );
}
