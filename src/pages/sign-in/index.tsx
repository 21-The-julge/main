import { Button, FieldGroup } from "@/common/components";

import ThejulgeLogo from "@/images/logo.svg";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      <ThejulgeLogo width={248} height={45} />

      <form>
        <FieldGroup field="input" type="email" label="이메일" name="이메일" placeholder="입력" />
        <FieldGroup field="input" type="password" label="비밀번호" name="비밀번호" placeholder="입력" />
        <Button type="submit" size="large">
          로그인하기
        </Button>
      </form>
      <div>
        <span>회원이 아니신가요?</span>
        <Link href="/">회원가입하기</Link>
      </div>
    </>
  );
}
