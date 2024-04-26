import ThejulgeLogo from "@/images/logo.svg";
import { SignUpForm } from "@/page-layout/AuthLayout/component";

import Link from "next/link";

export default function SignUpPage() {
  return (
    <main>
      {/* route 경로 공고리스트 페이지로 수정 필요 */}
      <Link href="/">
        <ThejulgeLogo width={248} height={45} />
      </Link>
      <SignUpForm />
      <div>
        <span>이미 가입하셨나요?</span>
        <Link href="login">로그인하기</Link>
      </div>
    </main>
  );
}
