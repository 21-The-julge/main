import { useState } from "react";
import { useRouter } from "next/router";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { addMinutes, formatRFC3339 } from "date-fns";
import classNames from "classnames/bind";
import { StartDatePicker } from "@/shared/components";
import Button from "@/common/components/Button/Button";
import { InputField, Textarea } from "@/common/components/index";
import GetUserData from "@/shared/hooks/getUserData";
import { usePostNoticeData } from "@/shared/apis/api-hooks/useNotices";
import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";
import styles from "./PostNoticeForm.module.scss";

const cn = classNames.bind(styles);

interface NoticeValues {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
}

export default function PostNoticeForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<NoticeValues>({
    mode: "all",
    defaultValues: {
      hourlyPay: 0,
      startsAt: formatRFC3339(addMinutes(new Date(), 2)),
      workhour: 0,
      description: "",
    },
  });
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { shopId, noticeId } = GetUserData();

  const { mutate: postNoticeData, error } = usePostNoticeData();

  const handleConfirmButtonClick = () => {
    if (error) {
      setIsModalOpen(false);
      return;
    }
    router.push(`/shops/${shopId}/notices/${noticeId}`);
  };

  const onSubmit: SubmitHandler<NoticeValues> = (data) => {
    setIsModalOpen((prev) => !prev);
    postNoticeData({ shopId, bodyData: data });
  };

  return (
    <div>
      <form className={cn("container")} onSubmit={handleSubmit(onSubmit)}>
        <div className={cn("inputContainer")}>
          <div className={cn("item")}>
            <InputField
              className={cn("inputfield", "hourlyPay")}
              type="text"
              label="시급"
              required
              unit="원"
              isError={!!errors.hourlyPay?.message}
              errorMessage={errors.hourlyPay?.message}
              {...register("hourlyPay", {
                required: "값을 입력해주세요.",
                min: {
                  value: 10000,
                  message: "10000원 이상 입력해주세요.",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "숫자만 입력해주세요",
                },
              })}
            />
          </div>

          <div className={cn("item")}>
            <div className={cn("label")}>시작일시*</div>
            <Controller
              name="startsAt"
              render={({ field: { value, onChange } }) => (
                <StartDatePicker
                  className={cn("inputfield")}
                  startDate={new Date(value)}
                  onChange={(date: Date) => onChange(formatRFC3339(addMinutes(date, 2)))}
                />
              )}
              control={control}
            />
          </div>
          <div className={cn("item")}>
            <InputField
              className={cn("inputfield", "workhour")}
              type="text"
              label="업무 시간"
              required
              unit="시간"
              isError={!!errors.workhour?.message}
              errorMessage={errors.workhour?.message}
              {...register("workhour", {
                required: "값을 입력해주세요.",
                min: {
                  value: 1,
                  message: "근무시간은 1시간 이상 24시간 이하여야 합니다",
                },
                max: {
                  value: 24,
                  message: "근무시간은 1시간 이상 24시간 이하여야 합니다",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "숫자만 입력해주세요",
                },
              })}
            />
          </div>
        </div>
        <div className={cn("textField")}>
          <Textarea className={cn("textarea")} label="공고 설명" {...register("workhour")} />
        </div>
        <Button type="submit" disabled={!isValid} className={cn("submitButton")} size="large">
          등록하기
        </Button>
      </form>
      {isModalOpen && (
        <ConfirmModal
          className={cn("alertModal")}
          message={error?.message ? "잘못된 요청입니다" : "등록이 완료되었습니다."}
          onClick={handleConfirmButtonClick}
        />
      )}
    </div>
  );
}
