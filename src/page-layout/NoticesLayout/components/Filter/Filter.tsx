import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { addMinutes, formatRFC3339 } from "date-fns";
import classNames from "classnames/bind";

import { Button, InputField } from "@/common/components";
import CloseIcon from "@/images/ic_close.svg";
import AddressSelector from "./AddressSelector";
import StartDatePicker from "./StartDatePicker";
import FieldSet from "./FieldSet";

import styles from "./Filter.module.scss";

const cn = classNames.bind(styles);

interface FilterProps {
  className: string;
  onClose: () => void;
  onFilter: (filter: FieldValues) => void;
}

interface FieldValues {
  address: string[];
  startsAtGte: string;
  hourlyPayGte: string;
}

export default function Filter({ className, onClose, onFilter }: FilterProps) {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      address: [],
      startsAtGte: formatRFC3339(addMinutes(new Date(), 2)),
      hourlyPayGte: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    onFilter(data);
    onClose();
  };

  return (
    <div className={cn("container", className)}>
      <form onSubmit={handleSubmit(onSubmit)} className={cn("content")}>
        <div className={cn("header")}>
          <h2>상세 필터</h2>
          <CloseIcon width={24} height={24} className={cn("closeIcon")} onClick={onClose} />
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
            name="startsAtGte"
            render={({ field: { value, onChange } }) => (
              <StartDatePicker
                startDate={new Date(value)}
                onChange={(date: Date) => onChange(formatRFC3339(addMinutes(date, 2)))}
              />
            )}
            control={control}
          />
        </FieldSet>

        <div className={cn("divider")} />

        <FieldSet label="금액">
          <div className={cn("pay")}>
            {/* <div className={cn("payInput")}>
              <input
                placeholder="입력"
                {...register("hourlyPayGte", {
                  min: 0,
                  pattern: {
                    value: /^\d+$/,
                    message: "숫자만 입력해주세요",
                  },
                })}
              /> */}

            {/* <span>이상부터</span>
            </div>

            <p>{errors.hourlyPayGte?.message}</p> */}

            <InputField
              unit="원"
              size="sm"
              placeholder="입력"
              className={cn("payInput")}
              isError={!!errors.hourlyPayGte?.message}
              errorMessage={errors.hourlyPayGte?.message}
              {...register("hourlyPayGte", {
                min: 0,
                pattern: {
                  value: /^\d+$/,
                  message: "숫자만 입력해주세요",
                },
              })}
            />
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
