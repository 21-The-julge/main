import classNames from "classnames/bind";

import { Button, InputField } from "@/common/components";

import styles from "./SignInForm.module.scss";

const cn = classNames.bind(styles);

export default function SignUpForm() {
  return (
    <form className={cn("formBox")}>
      <InputField type="email" name="email" label="이메일" />
      <InputField type="password" name="password" label="비밀번호" />
      <InputField type="password" name="passwordValid" label="비밀번호 확인" />
      <Button type="submit" size="large">
        가입하기
      </Button>
    </form>
  );
}
