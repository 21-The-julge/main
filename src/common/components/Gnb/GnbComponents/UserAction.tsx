import { ROUTE } from "@/common/constants/index";
import { useEffect } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import styles from "./UserAction.module.scss";

import NotificationModal from "../../NotificationModal/NotificationModal";

const cn = classNames.bind(styles);

export default function UserAction() {
  const { isLoggedIn, type, resetAll, setIsLoggedIn, setType } = useUserDataStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(Boolean(token));
    const userType = localStorage.getItem("type");
    if (userType === "employer" || userType === "employee") {
      setType(userType);
    }
  }, [setIsLoggedIn, setType]);

  const handleLogout = () => {
    resetAll();
    localStorage.clear();
  };

  const loggedInSection = (
    <>
      {type ? <Link href={ROUTE.MYSHOP}>내 가게</Link> : <Link href={ROUTE.MYPROFILE}>내 프로필</Link>}
      <Link href="/" onClick={handleLogout}>
        로그아웃
      </Link>
      <NotificationModal />
    </>
  );

  const notLoggedInSection = (
    <>
      <Link href={ROUTE.LOGIN}>로그인</Link>
      <Link href={ROUTE.SIGNUP}>회원가입</Link>
    </>
  );

  return <div className={cn("container")}>{isLoggedIn ? loggedInSection : notLoggedInSection}</div>;
}
