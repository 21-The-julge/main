import { ChangeEvent } from "react";
import classNames from "classnames/bind";
import Button from "@/common/components/Button/Button";
import { InputField, Textarea } from "@/common/components/index";

import styles from "./PostNoticeForm.module.scss";

const cn = classNames.bind(styles);

interface PostNoticeFormProps {
  handleModalOpen: () => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function PostNoticeForm({ handleModalOpen, handleInputChange }: PostNoticeFormProps) {
  return (
    <form className={cn("container")}>
      <div className={cn("inputContainer")}>
        <InputField
          className={cn("inputfield", "hourlyPay")}
          name="hourlyPay"
          type="text"
          label="시급"
          required
          unit="원"
          onChange={handleInputChange}
        />
        <InputField
          className={cn("inputfield", "startsAt")}
          name="startsAt"
          type="text"
          label="시작 일시"
          required
          onChange={handleInputChange}
        />
        <InputField
          className={cn("inputfield", "workhour")}
          name="workhour"
          type="text"
          label="업무 시간"
          required
          unit="시간"
          onChange={handleInputChange}
        />
      </div>
      <div className={cn("textField")}>
        <Textarea className={cn("textarea")} name="description" label="공고 설명" onChange={handleInputChange} />
      </div>
      <Button className={cn("submitButton")} onClick={handleModalOpen} size="large">
        등록하기
      </Button>
    </form>
  );
}
