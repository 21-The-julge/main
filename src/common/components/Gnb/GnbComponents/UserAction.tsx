import classNames from "classnames/bind";
import Link from "next/link";
import GetAuth from "@/shared/hooks/getAuth";
import styles from "./UserAction.module.scss";

import NotificationModal from "../../NotificationModal/NotificationModal";

const cn = classNames.bind(styles);

export default function UserAction() {
  const { isLoggedIn, type, handleLogout } = GetAuth();

  const isEmployer = type === "employer";

  const loggedInSection = (
    <>
      {isEmployer ? <Link href="/my-shop">내 가게</Link> : <Link href="/my-profile">내 프로필</Link>}
      <Link href="/" onClick={handleLogout}>
        로그아웃
      </Link>
      <NotificationModal />
    </>
  );

  const notLoggedInSection = (
    <>
      <Link href="/signin">로그인</Link>
      <Link href="/signup">회원가입</Link>
    </>
  );

  return <div className={cn("container")}>{isLoggedIn ? loggedInSection : notLoggedInSection}</div>;
}