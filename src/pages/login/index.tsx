import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button, FieldGroup } from "@/common/components";
import { ERROR_MESSAGE, PLACEHOLDERS } from "@/common/constants";

import ThejulgeLogo from "@/images/logo.svg";

import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";

const cn = classNames.bind(styles);

interface FieldValues {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().min(1, { message: ERROR_MESSAGE.EMAIL.EMPTY }).email({ message: ERROR_MESSAGE.EMAIL.INVALID }),

  password: z.string().min(8, { message: ERROR_MESSAGE.PASSWORD.SHORT }),
});

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {};

  return (
    <main className={cn("signInPage")}>
      {/* route 경로 공고리스트 페이지로 수정 필요 */}
      <Link className={cn("logoBox")} href="/">
        <ThejulgeLogo width={248} height={45} />
      </Link>
      <form className={cn("formBox")} onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup
          field="input"
          {...register("email")}
          type="email"
          label="이메일"
          placeholder={PLACEHOLDERS.EMAIL}
          name="email"
          isError={!!errors.email}
          errorMessage={errors.email?.message}
        />
        <FieldGroup
          field="input"
          {...register("password")}
          type="password"
          label="비밀번호"
          placeholder={PLACEHOLDERS.PASSWORD}
          name="password"
          isError={!!errors.password}
          errorMessage={errors.password?.message}
        />
        <Button type="submit" size="large">
          로그인하기
        </Button>
      </form>
      <div className={cn("textBox")}>
        <span>회원이 아니신가요?</span>
        <Link className={cn("link")} href="/">
          회원가입하기
        </Link>
      </div>
    </main>
  );
}
