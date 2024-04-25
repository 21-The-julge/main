import { Dropdown, InputField } from "@/common/components/FieldGroup";
import FieldGroup from "@/common/components/FieldGroup/FieldGroup";
import { CATEGORIES } from "@/common/constants";

export default function LoginPage() {
  return (
    <>
      <InputField unit="시급" size="md" className="30rem" />
      <Dropdown name="123" options={CATEGORIES} placeholder="입력" className="30rem" />
      <FieldGroup field="dropdown" options={CATEGORIES} placeholder={CATEGORIES[0]} />
    </>
  );
}
