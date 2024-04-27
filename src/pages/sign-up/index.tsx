import classNames from "classnames/bind";
import Link from "next/link";

import { SignUpForm } from "@/page-layout/AuthLayout/component";
import ThejulgeLogo from "@/images/logo.svg";

import styles from "./SignUpPage.module.scss";

const cn = classNames.bind(styles);

export default function SignUpPage() {
  return (
    <main className={cn("signUpPage")}>
      {/* route 경로 공고리스트 페이지로 수정 필요 */}
      <Link className={cn("logoBox")} href="/">
        <ThejulgeLogo width={248} height={45} />
      </Link>
      <SignUpForm />
      <div className={cn("textBox")}>
        <span>이미 가입하셨나요?</span>
        <Link className={cn("link")} href="login">
          로그인하기
        </Link>
      </div>
    </main>
  );
}
