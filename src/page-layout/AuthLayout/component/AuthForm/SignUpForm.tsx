import { Button, FieldGroup } from "@/common/components";

export default function SignUpForm() {
  return (
    <form>
      <FieldGroup field="input" type="email" name="email" label="이메일" />
      <FieldGroup field="input" type="password" name="password" label="비밀번호" />
      <fieldset>
        <legend>회원 유형</legend>
        <FieldGroup field="input" type="radio" name="사장님" value="employer" label="사장님" />
        <FieldGroup field="input" type="radio" value="employee" />
      </fieldset>
      <Button type="submit" size="large">
        가입하기
      </Button>
    </form>
  );
}
