import { InputField } from "@/common/components";
import Dropdown from "@/common/components/FieldGroup/Dropdown/Dropdown";
import { BUSINESS_OPTIONS } from "@/common/constants";

export default function LoginPage() {
  // const handleClick = (option: string) => {
  //   console.log(option);
  // };

  return (
    <>
      <InputField unit="시급" className="100" />
      <Dropdown label="분류" name="123" options={BUSINESS_OPTIONS} required placeholder="입력" />
    </>
  );
}

// 김모경 사랑해 ㅑ
