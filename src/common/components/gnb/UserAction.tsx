import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./UserAction.module.scss";

import NotificationModal from "./NotificationModal";

const cx = classNames.bind(styles);

export default function Button({ isSignIn = false, isBoss = false }) {
  return (
    <div className={cx(styles.container, { isSignIn })}>
      {isSignIn ? (
        <>
          {isBoss ? (
            <Link href="/my-shop">
              <div>내 가게</div>
            </Link>
          ) : (
            <Link href="/my-profile">
              <div>내 프로필</div>
            </Link>
          )}
          <div>로그아웃</div>
          <NotificationModal />
        </>
      ) : (
        <>
          <Link href="/signin">
            <div>로그인</div>
          </Link>
          <Link href="/signup">
            <div>회원가입</div>
          </Link>
        </>
      )}
    </div>
  );
}
