import classNames from "classnames/bind";
import Link from "next/link";

import { ROUTE } from "@/common/constants";
import { SignInForm } from "@/page-layout/AuthLayout/component";
import ThejulgeLogo from "@/images/logo.svg";

import styles from "./SignInPage.module.scss";

const cn = classNames.bind(styles);

export default function SignInPage() {
  return (
    <main className={cn("signInPage")}>
      {/* route 경로 공고리스트 페이지로 수정 필요 */}
      <Link className={cn("logoBox")} href="/">
        <ThejulgeLogo width={248} height={45} />
      </Link>
      <SignInForm />
      <div className={cn("textBox")}>
        <span>회원이 아니신가요?</span>
        <Link className={cn("link")} href={ROUTE.SIGNUP}>
          회원가입하기
        </Link>
      </div>
    </main>
  );
}
