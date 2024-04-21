import classNames from "classnames/bind";
import Link from "next/link";
import GetAuth from "@/shared/hooks/getAuth";
import styles from "./UserAction.module.scss";

import NotificationModal from "../../NotificationModal/NotificationModal";

const cn = classNames.bind(styles);

export default function UserAction() {
  const { isLoggedIn, type, handleLogout } = GetAuth();

  const isEmployer = type === "employer";

  const EmployerSection = (
    <Link href="/my-shop">
      <button type="button">내 가게</button>
    </Link>
  );

  const UserSection = (
    <Link href="/my-profile">
      <button type="button">내 프로필</button>
    </Link>
  );

  const LogoutSection = (
    <Link href="/">
      <button type="button" onClick={handleLogout}>
        로그아웃
      </button>
    </Link>
  );

  const loggedInSection = (
    <>
      {isEmployer ? EmployerSection : UserSection}
      {LogoutSection}
      <NotificationModal />
    </>
  );

  const notLoggedInSection = (
    <>
      <Link href="/signin">
        <button type="button">로그인</button>
      </Link>
      <Link href="/signup">
        <button type="button">회원가입</button>
      </Link>
    </>
  );

  return <div className={cn("container")}>{isLoggedIn ? loggedInSection : notLoggedInSection}</div>;
}
