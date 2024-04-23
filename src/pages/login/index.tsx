import { InputField } from "@/common/components";
import Dropdown from "@/common/components/FieldGroup/Dropdown/Dropdown";
import FieldGroup from "@/common/components/FieldGroup/FieldGroup";
import { BUSINESS_OPTIONS } from "@/common/constants";

export default function LoginPage() {
  // const handleClick = (option: string) => {
  //   console.log(option);
  // };

  return (
    <>
      <InputField unit="시급" size="md" className="30rem" />
      <Dropdown name="123" options={BUSINESS_OPTIONS} placeholder="입력" className="30rem" />

      <FieldGroup field="input" type="search" label="김보경" name="김보경" />
      <FieldGroup field="dropdown" label="김가은" name="김가은" />
      <FieldGroup field="textarea" />
    </>
  );
}
