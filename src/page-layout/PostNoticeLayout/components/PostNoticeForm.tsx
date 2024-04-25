import classNames from "classnames/bind";
import InputField from "@/common/components/InputField/InputField";
import Button from "@/common/components/Button/Button";
import styles from "./PostNoticeForm.module.scss";

const cn = classNames.bind(styles);

export default function PostNoticeForm() {
  const handleSubmit = () => {};
  return (
    <form className={cn("container")}>
      <div className={cn("inputContainer")}>
        <InputField type="text" label="시급*" unit="원" />
        <InputField type="text" label="시작 일시*" />
        <InputField type="text" label="업무 시간*" unit="시간" />
      </div>
      <div className={cn("textField")}>
        <InputField className="100%" type="text" label="공고 설명" />
      </div>

      <Button className={cn("submitButton")} onClick={handleSubmit} size="large">
        등록하기
      </Button>
    </form>
  );
}
