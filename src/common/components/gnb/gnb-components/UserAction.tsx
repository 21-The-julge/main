import classNames from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./UserAction.module.scss";

import NotificationModal from "../../notification-modal/NotificationModal";

const cn = classNames.bind(styles);

interface GnbProps {
  isLoggedIn: boolean;
  emplyoer: boolean;
  isNotification: boolean;
  count: number;
}

export default function UserAction({ isLoggedIn, emplyoer, isNotification, count }: GnbProps) {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie.split(";").forEach((c) => {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, `=;expires=" + new Date().toUTCString() + ";path=/`);
    });
    router.push("/");
  };

  const loggedInSection = (
    <>
      {emplyoer ? (
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
      <NotificationModal isNotification={isNotification} count={count} />
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

  return (
    <div className={cn(styles.container, { isLoggedIn })}>{isLoggedIn ? loggedInSection : notLoggedInSection}</div>
  );
}
