import classNames from "classnames/bind";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { CATEGORIES, ERROR_MESSAGE, MESSAGES, PLACEHOLDERS, ROUTE } from "@/common/constants";
import { Button, Dropdown, InputField, RadioInput } from "@/common/components";
import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";
import { usePostSignUp } from "@/shared/apis/api-hooks";
import { PostSignUpProps } from "@/shared/apis/apiType";

import styles from "./SignInForm.module.scss";

const cn = classNames.bind(styles);

const schema = z
  .object({
    email: z.string().min(1, { message: ERROR_MESSAGE.EMAIL.EMPTY }).email({ message: ERROR_MESSAGE.EMAIL.INVALID }),
    password: z.string().min(8, { message: ERROR_MESSAGE.PASSWORD.SHORT }),
    passwordValid: z.string().min(8, { message: ERROR_MESSAGE.PASSWORD.SHORT }),
    type: z.enum(["employer", "employee"]),
  })
  .refine((payload) => payload.password === payload.passwordValid, {
    message: ERROR_MESSAGE.PASSWORD.INCORRECT,
    path: ["passwordValid"],
  });

type NewAccount = z.infer<typeof schema>;

export default function SignUpForm() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleModalButtonClick = () => {
    setIsModalOpen(false);

    if (alertMessage === MESSAGES.AUTH_ALERT_MESSAGE.SUCCESS) {
      router.push(ROUTE.LOGIN);
      return;
    }

    router.reload();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAccount>({
    mode: "onTouched",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      passwordValid: "",
      type: "employer",
    },
  });

  const { mutate: newAccount, isPending } = usePostSignUp();

  const onSubmit: SubmitHandler<PostSignUpProps> = (payload) => {
    newAccount(payload, {
      onSuccess: () => {
        // eslint-disable-next-line no-console
        console.log("회원가입 성공", payload);
        setAlertMessage(MESSAGES.AUTH_ALERT_MESSAGE.SUCCESS);
        setIsModalOpen(true);
      },
      onError: (error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        // eslint-disable-next-line no-console
        console.log("회원가입 실패");
      },
    });
  };

  return (
    <>
      <form className={cn("formBox")} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          {...register("email")}
          placeholder={PLACEHOLDERS.EMAIL}
          type="email"
          name="email"
          label="이메일"
          isError={!!errors.email}
          errorMessage={errors.email?.message}
          disabled={isPending}
        />
        <InputField
          {...register("password")}
          placeholder={PLACEHOLDERS.PASSWORD}
          type="password"
          name="password"
          label="비밀번호"
          isError={!!errors.password}
          errorMessage={errors.password?.message}
          disabled={isPending}
        />
        <InputField
          {...register("passwordValid")}
          placeholder={PLACEHOLDERS.PASSWORD}
          type="password"
          name="passwordValid"
          label="비밀번호 확인"
          isError={!!errors.passwordValid}
          errorMessage={errors.passwordValid?.message}
          disabled={isPending}
        />

        <fieldset {...register("type")}>
          <RadioInput value="employer" name="type" label="사장님" />
          <RadioInput value="employee" name="type" label="알바님" />
        </fieldset>

        <Dropdown options={CATEGORIES} />

        <Button type="submit" size="large" disabled={isPending}>
          가입하기
        </Button>
      </form>
      {isModalOpen && <ConfirmModal className={cn("modal")} message={alertMessage} onClick={handleModalButtonClick} />}
    </>
  );
}
