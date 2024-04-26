// import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ERROR_MESSAGE, PLACEHOLDERS } from "@/common/constants";
import { Button, FieldGroup } from "@/common/components";
import { PostSignInParams } from "@/shared/apis/apiType";

import classNames from "classnames/bind";
import styles from "./SignInForm.module.scss";

const cn = classNames.bind(styles);

// interface FieldValues {
//   email: string;
//   password: string;
// }

const schema = z.object({
  email: z.string().min(1, { message: ERROR_MESSAGE.EMAIL.EMPTY }).email({ message: ERROR_MESSAGE.EMAIL.INVALID }),

  password: z.string().min(8, { message: ERROR_MESSAGE.PASSWORD.SHORT }),
});

export default function SignInForm() {
  // const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostSignInParams>({
    mode: "onTouched",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<PostSignInParams> = async (data) => {
    // eslint-disable-next-line no-console
    console.log("로그인 data:", data);
  };

  const EMAIL = "email";
  const PASSWORD = "password";

  return (
    <form className={cn("formBox")} onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup
        field="input"
        {...register(EMAIL)}
        type={EMAIL}
        label="이메일"
        placeholder={PLACEHOLDERS.EMAIL}
        name={EMAIL}
        isError={!!errors.email}
        errorMessage={errors.email?.message}
      />
      <FieldGroup
        field="input"
        {...register(PASSWORD)}
        type={PASSWORD}
        label="비밀번호"
        placeholder={PLACEHOLDERS.PASSWORD}
        name={PASSWORD}
        isError={!!errors.password}
        errorMessage={errors.password?.message}
      />
      <Button type="submit" size="large">
        로그인하기
      </Button>
    </form>
  );
}