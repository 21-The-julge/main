import { ChangeEvent } from "react";
import classNames from "classnames/bind";
import Button from "@/common/components/Button/Button";
import InputField from "@/common/components/InputField/InputField";
import Textarea from "@/common/components/Textarea/Textarea";

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
          className="30.8rem"
          name="hourlyPay"
          type="text"
          label="시급"
          required
          unit="원"
          onChange={handleInputChange}
        />
        <InputField
          className="30.8rem"
          name="startsAt"
          type="text"
          label="시작 일시"
          required
          onChange={handleInputChange}
        />
        <InputField
          className="30.8rem"
          name="workhour"
          type="text"
          label="업무 시간"
          required
          unit="시간"
          onChange={handleInputChange}
        />
      </div>
      <div className={cn("textField")}>
        <Textarea name="description" label="공고 설명" onChange={handleInputChange} />
      </div>
      <Button className={cn("submitButton")} onClick={handleModalOpen} size="large">
        등록하기
      </Button>
    </form>
  );
}
