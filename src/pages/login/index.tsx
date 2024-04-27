// import { InputField } from "@/common/components";
import Dropdown from "@/common/components/FieldGroup/Dropdown/Dropdown";
// import FieldGroup from "@/common/components/FieldGroup/FieldGroup";
import { CATEGORIES } from "@/common/constants";

export default function LoginPage() {
  return (
    <>
      {/* <InputField unit="시급" size="md" className="30rem" /> */}
      {/* <FieldGroup field="dropdown" options={CATEGORIES} /> */}
      <Dropdown name="123" options={CATEGORIES} className="test" placeholder="입력" label="테스트" size="sm" />
    </>
  );
}
