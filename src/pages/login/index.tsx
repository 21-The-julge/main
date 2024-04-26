import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, FieldGroup } from "@/common/components";
import { InputField } from "@/common/components/FieldGroup";

import ThejulgeLogo from "@/images/logo.svg";

import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";

const cn = classNames.bind(styles);

interface FieldValues {
  email: string;
  password: string;
}

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {};

  return (
    <main className={cn("signInPage")}>
      <Link className={cn("logoBox")} href="/">
        <ThejulgeLogo width={248} height={45} />
      </Link>
      <form className={cn("formBox")} onSubmit={handleSubmit(onSubmit)}>
        {/* <Controller
          name="email"
          control={control}
          rules={{ required: "이메일을 입력해주세요" }}
          render={({ field, fieldState: { error } }) => (
            <FieldGroup
              group="input"
              type="email"
              placeholder="테스트"
              isError={error ? true : false}
              errorMessage={error ? error.message : ""}
              {...field}
              name="email"
            />
          )}
        /> */}
        <InputField
          {...register("email", { required: "이메일을 입력해 주세요" })}
          type="email"
          placeholder="입력"
          name="email"
          isError={!!errors.email}
          errorMessage={errors.email?.message}
        />
        <FieldGroup
          field="input"
          {...register("email", { required: "이메일을 입력해 주세요" })}
          type="email"
          label="이메일"
          placeholder="입력"
          name="email"
          isError={!!errors.email}
          errorMessage={errors.email?.message}
        />

        {/* <FieldGroup field="input" type="password" label="비밀번호" name="비밀번호" placeholder="입력" /> */}
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
