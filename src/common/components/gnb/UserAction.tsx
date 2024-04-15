import classNames from "classnames/bind";
import styles from "./UserAction.module.scss";

import NotificationModal from "./NotificationModal";

const cx = classNames.bind(styles);

export default function Button({ isSignIn = false, isBoss = false }) {
  return (
    <div className={cx(styles.container, { isSignIn })}>
      {isSignIn ? (
        <>
          {isBoss ? <div>내 가게</div> : <div>내 프로필</div>}
          <div>로그아웃</div>
          <NotificationModal />
        </>
      ) : (
        <>
          <div>로그인</div>
          <div>회원가입</div>
        </>
      )}
    </div>
  );
}
