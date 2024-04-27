import { ChangeEvent } from "react";
import classNames from "classnames/bind";
import FieldGroup from "@/common/components/FieldGroup/FieldGroup";
import Button from "@/common/components/Button/Button";
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
        <FieldGroup
          className="30.8rem"
          name="hourlyPay"
          field="input"
          type="text"
          label="시급"
          required
          unit="원"
          onChange={handleInputChange}
        />
        <FieldGroup
          className="30.8rem"
          name="startsAt"
          field="input"
          type="text"
          label="시작 일시"
          required
          onChange={handleInputChange}
        />
        <FieldGroup
          className="30.8rem"
          name="workhour"
          field="input"
          type="text"
          label="업무 시간"
          required
          unit="시간"
          onChange={handleInputChange}
        />
      </div>
      <div className={cn("textField")}>
        <FieldGroup
          name="description"
          field="textarea"
          type="text"
          label="공고 설명"
          onTextareaChange={handleInputChange}
        />
      </div>
      <Button className={cn("submitButton")} onClick={handleModalOpen} size="large">
        등록하기
      </Button>
    </form>
  );
}
