import { InputField } from "@/common/components";
import Dropdown from "@/common/components/FieldGroup/Dropdown/Dropdown";
import { BUSINESS_OPTIONS } from "@/common/constants";

export default function LoginPage() {
  // const handleClick = (option: string) => {
  //   console.log(option);
  // };

  return (
    <>
      <InputField unit="시급" size="md" className="30rem" />
      <Dropdown label="분류" name="123" options={BUSINESS_OPTIONS} required placeholder="입력" className="30rem" />
    </>
  );
}

// 김모경 사랑해 ㅑ
