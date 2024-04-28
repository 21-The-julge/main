import { ChangeEvent } from "react";
import classNames from "classnames/bind";
import Button from "@/common/components/Button/Button";
import InputField from "@/common/components/InputField/InputField";
import DropDownField from "@/common/components/Dropdown/Dropdown";
import Textarea from "@/common/components/Textarea/Textarea";
import { ADDRESSES } from "@/common/constants";

import styles from "./PostProfileEditForm.module.scss";

const cn = classNames.bind(styles);

interface PostNoticeFormProps {
  handleModalOpen: () => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onOptionClick: (option: string) => void;
}

export default function PostNoticeForm({ handleModalOpen, handleInputChange, onOptionClick }: PostNoticeFormProps) {
  return (
    <form className={cn("container")}>
      <div className={cn("inputContainer")}>
        <InputField
          className={cn("inputfield", "name")}
          name="name"
          type="text"
          label="이름"
          required
          onChange={handleInputChange}
        />
        <InputField
          className={cn("inputfield", "phone")}
          name="phone"
          type="text"
          label="연락처"
          required
          onChange={handleInputChange}
        />
        <DropDownField
          className={cn("inputfield", "address")}
          name="address"
          type="text"
          label="선호 지역"
          options={ADDRESSES}
          onChange={handleInputChange}
          onOptionClick={onOptionClick}
        />
      </div>
      <div className={cn("textField")}>
        <Textarea className={cn("textarea")} name="bio" label="소개" onChange={handleInputChange} />
      </div>
      <Button className={cn("submitButton")} onClick={handleModalOpen} size="large">
        등록하기
      </Button>
    </form>
  );
}
