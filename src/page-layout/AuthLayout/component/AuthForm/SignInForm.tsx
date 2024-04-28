import classNames from "classnames/bind";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AxiosError } from "axios";

import { ERROR_MESSAGE, PLACEHOLDERS, ROUTE } from "@/common/constants";
import { Button, InputField, Textarea } from "@/common/components";
import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";
import { PostSignInParams } from "@/shared/apis/apiType";
import { usePostSignIn } from "@/shared/apis/api-hooks";

import styles from "./SignInForm.module.scss";

const cn = classNames.bind(styles);

const schema = z.object({
  email: z.string().min(1, { message: ERROR_MESSAGE.EMAIL.EMPTY }).email({ message: ERROR_MESSAGE.EMAIL.INVALID }),

  password: z.string().min(8, { message: ERROR_MESSAGE.PASSWORD.SHORT }),
});

const EMAIL = "email";
const PASSWORD = "password";

export default function SignInForm() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { mutate: login, isPending } = usePostSignIn();

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

  const onSubmit: SubmitHandler<PostSignInParams> = (payload) => {
    login(payload, {
      onSuccess: () => {
        router.replace(ROUTE.HOME);
      },
      onError: (error: Error) => {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
          const errorMessage = (axiosError.response.data as { message?: string }).message;
          setAlertMessage(errorMessage || "");
        }

        setIsModalOpen((prevOpen) => !prevOpen);
      },
    });
  };

  const handleModalButtonClick = () => {
    setIsModalOpen(false);
    router.reload();
  };

  return (
    <>
      <form className={cn("formBox")} onSubmit={handleSubmit(onSubmit)}>
        <InputField
          {...register(EMAIL)}
          type={EMAIL}
          label="이메일"
          placeholder={PLACEHOLDERS.EMAIL}
          name={EMAIL}
          isError={!!errors.email}
          errorMessage={errors.email?.message}
          disabled={isPending}
        />
        <InputField
          {...register(PASSWORD)}
          type={PASSWORD}
          label="비밀번호"
          placeholder={PLACEHOLDERS.PASSWORD}
          name={PASSWORD}
          isError={!!errors.password}
          errorMessage={errors.password?.message}
          disabled={isPending}
        />

        <Textarea />

        <Button type="submit" size="large" disabled={isPending}>
          로그인하기
        </Button>
      </form>
      {isModalOpen && <ConfirmModal className={cn("modal")} message={alertMessage} onClick={handleModalButtonClick} />}
    </>
  );
}
