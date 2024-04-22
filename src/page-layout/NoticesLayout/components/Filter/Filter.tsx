import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { formatRFC3339 } from "date-fns/formatRFC3339";
import classNames from "classnames/bind";

import { Button } from "@/common/components";
import CloseIcon from "@/images/ic_close.svg";
import AddressSelector from "./AddressSelector";
import StartDatePicker from "./StartDatePicker";
import FieldSet from "./FieldSet";

import styles from "./Filter.module.scss";

const cn = classNames.bind(styles);

interface FieldValues {
  address: string[];
  startDate: string;
  pay: number | null;
}

export default function Filter() {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      address: [],
      startDate: formatRFC3339(new Date()),
      pay: null,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = () => {
    // TODO: API 호출
  };

  return (
    <div className={cn("container")}>
      <form onSubmit={handleSubmit(onSubmit)} className={cn("content")}>
        <div className={cn("header")}>
          <h2>상세 필터</h2>
          <CloseIcon width={24} height={24} className={cn("closeIcon")} />
        </div>

        <FieldSet label="위치">
          <Controller
            name="address"
            render={({ field: { value, onChange } }) => <AddressSelector value={value} setAddress={onChange} />}
            control={control}
          />
        </FieldSet>

        <div className={cn("divider")} />

        <FieldSet label="시작일">
          <Controller
            name="startDate"
            render={({ field: { value, onChange } }) => (
              <StartDatePicker startDate={new Date(value)} onChange={(date: Date) => onChange(formatRFC3339(date))} />
            )}
            control={control}
          />
        </FieldSet>

        <div className={cn("divider")} />

        <FieldSet label="금액">
          <div className={cn("pay")}>
            <div className={cn("payInput")}>
              <input
                placeholder="입력"
                {...register("pay", {
                  min: 0,
                  pattern: {
                    value: /^\d+$/,
                    message: "숫자만 입력해주세요",
                  },
                })}
              />
              <span>이상부터</span>
            </div>

            <p>{errors.pay?.message}</p>
          </div>
        </FieldSet>

        <div className={cn("buttons")}>
          <div>
            <Button type="button" size="medium" variant="outline" className="fullWidth" onClick={() => reset()}>
              초기화
            </Button>
          </div>
          <div>
            <Button type="submit" size="medium" variant="solid" className="fullWidth">
              적용하기
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
