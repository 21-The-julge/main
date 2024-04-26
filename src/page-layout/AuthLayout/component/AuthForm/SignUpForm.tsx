import { Button, FieldGroup } from "@/common/components";

export default function SignUpForm() {
  return (
    <form>
      <FieldGroup field="input" type="email" name="email" label="이메일" />
      <FieldGroup field="input" type="password" name="password" label="비밀번호" />
      <Button type="submit" size="large">
        가입하기
      </Button>
    </form>
  );
}
