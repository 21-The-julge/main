import { InputField } from "@/common/components";
import Dropdown from "@/common/components/FieldGroup/Dropdown/Dropdown";
import FieldGroup from "@/common/components/FieldGroup/FieldGroup";
import { BUSINESS_OPTIONS } from "@/common/constants";

export default function LoginPage() {
  return (
    <>
      <InputField unit="시급" size="md" className="30rem" />
      <Dropdown name="123" options={BUSINESS_OPTIONS} placeholder="입력" className="30rem" />
      <FieldGroup field="dropdown" options={BUSINESS_OPTIONS} placeholder={BUSINESS_OPTIONS[0]} />
    </>
  );
}
