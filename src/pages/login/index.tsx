import Dropdown from "@/common/components/Dropdown/Dropdown";
import { BUSINESS_OPTIONS } from "@/common/constants";

export default function LoginPage() {
  return <Dropdown options={BUSINESS_OPTIONS} />;
}
