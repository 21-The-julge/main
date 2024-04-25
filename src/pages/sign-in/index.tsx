import { Button } from "@/common/components";
import FieldGroup from "@/common/components/FieldGroup/FieldGroup";

export default function SignInPage() {
  return (
    <form>
      <FieldGroup field="input" type="email" label="이메일" name="이메일" placeholder="입력" />
      <FieldGroup field="input" type="password" label="비밀번호" name="비밀번호" placeholder="입력" />
      <Button type="submit" size="large">
        로그인하기
      </Button>
    </form>
  );
}
