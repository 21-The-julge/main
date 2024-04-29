import { ChangeEvent } from "react";
import classNames from "classnames/bind";
import Button from "@/common/components/Button/Button";
import InputField from "@/common/components/InputField/InputField";
import DropDownField from "@/common/components/Dropdown/Dropdown";
import Textarea from "@/common/components/Textarea/Textarea";
import { ADDRESSES } from "@/common/constants";

import ValidateInput from "../ValidateInput";
import styles from "./PostProfileForm.module.scss";

const cn = classNames.bind(styles);

interface PostNoticeFormProps {
  handleModalOpen: () => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onOptionClick: (option: string) => void;
  inputValue: {
    name: string;
    phone: string;
    address: string;
    bio: string;
  };
}

export default function PostNoticeForm({
  handleModalOpen,
  handleInputChange,
  onOptionClick,
  inputValue,
}: PostNoticeFormProps) {
  const disabled = ValidateInput({ inputValue });

  return (
    <form className={cn("container")}>
      <div className={cn("inputContainer")}>
        <InputField
          value={inputValue.name}
          className={cn("inputfield", "name")}
          name="name"
          type="text"
          label="이름"
          required
          onChange={handleInputChange}
        />
        <InputField
          value={inputValue.phone}
          className={cn("inputfield", "phone")}
          name="phone"
          type="text"
          label="연락처"
          required
          onChange={handleInputChange}
        />
        <DropDownField
          value={inputValue.address}
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
        <Textarea
          value={inputValue.bio}
          className={cn("textarea")}
          name="bio"
          label="소개"
          onChange={handleInputChange}
        />
      </div>
      <Button disabled={disabled} className={cn("submitButton")} onClick={handleModalOpen} size="large">
        등록하기
      </Button>
    </form>
  );
}
