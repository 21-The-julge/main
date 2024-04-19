import classNames from "classnames/bind";
import Link from "next/link";
import { AlertResponseData } from "../../notification-modal/types";
import styles from "./UserAction.module.scss";

import NotificationModal from "../../notification-modal/NotificationModal";

const cn = classNames.bind(styles);

interface UserActionProps {
  isLoggedIn: boolean;
  type: "employer" | "employee";
  notificationData: AlertResponseData | null;
}

export default function UserAction({ isLoggedIn, type, notificationData }: UserActionProps) {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  const isEmployer = type === "employer";

  const loggedInSection = (
    <>
      {isEmployer ? (
        <Link href="/my-shop">
          <div>내 가게</div>
        </Link>
      ) : (
        <Link href="/my-profile">
          <div>내 프로필</div>
        </Link>
      )}
      {/* eslint-disable-next-line */}
      <div onClick={handleLogout}>로그아웃</div>
      <NotificationModal notificationData={notificationData} />
    </>
  );

  const notLoggedInSection = (
    <>
      <Link href="/signin">
        <div>로그인</div>
      </Link>
      <Link href="/signup">
        <div>회원가입</div>
      </Link>
    </>
  );

  return <div className={cn("container", { isLoggedIn })}>{isLoggedIn ? loggedInSection : notLoggedInSection}</div>;
}
