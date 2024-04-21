// import { InputField } from "@/common/components";
import Dropdown from "@/common/components/Dropdown/Dropdown";
import { BUSINESS_OPTIONS } from "@/common/constants";

export default function LoginPage() {
  return (
    <>
      {/* <InputField unit="시급" /> */}
      <Dropdown options={BUSINESS_OPTIONS} />
    </>
  );
}
