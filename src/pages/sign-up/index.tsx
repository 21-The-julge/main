import classNames from "classnames/bind";
import Link from "next/link";

import { ROUTE } from "@/common/constants";
import { SignUpForm } from "@/page-layout/AuthLayout/component";
import ThejulgeLogo from "@/images/logo.svg";

import styles from "./SignUpPage.module.scss";

const cn = classNames.bind(styles);

export default function SignUpPage() {
  return (
    <main className={cn("signUpPage")}>
      <Link className={cn("logoBox")} href={ROUTE.HOME}>
        <ThejulgeLogo width={248} height={45} />
      </Link>
      <SignUpForm />
      <div className={cn("textBox")}>
        <span>이미 가입하셨나요?</span>
        <Link className={cn("link")} href={ROUTE.LOGIN}>
          로그인하기
        </Link>
      </div>
    </main>
  );
}
