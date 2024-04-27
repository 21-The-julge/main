import { Button, InputField } from "@/common/components";

export default function SignUpForm() {
  return (
    <form>
      <InputField type="email" name="email" label="이메일" />
      <InputField type="password" name="password" label="비밀번호" />
      {/* <fieldset>
        <legend>회원 유형</legend>
        <InputField type="radio" name="사장님" value="employer" label="사장님" />
        <InputField type="radio" value="employee" />
      </fieldset> */}
      <Button type="submit" size="large">
        가입하기
      </Button>
    </form>
  );
}
