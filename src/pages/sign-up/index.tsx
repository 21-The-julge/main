import classNames from "classnames/bind";
import Link from "next/link";

import { Metadata } from "next";
import { ROUTE } from "@/common/constants";
import { SignUpForm } from "@/page-layout/AuthLayout/component";
import IcLogo from "@/images/ic_logo.svg";

import styles from "./SignUpPage.module.scss";

const cn = classNames.bind(styles);

export const metadata: Metadata = {
  title: "The-julge",
  description: "급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스입니다.",
};

export default function SignUpPage() {
  return (
    <main className={cn("signUpPage")}>
      <Link className={cn("logoBox")} href={ROUTE.HOME}>
        <IcLogo width={248} height={45} />
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
