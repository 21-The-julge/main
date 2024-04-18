import InputField from "@/common/components/InputField/InputField";

export default function LoginPage() {
  return (
    <InputField
      name="search"
      color="gray"
      placeholder="가게 이름으로 찾아보세요"
      prefix="search"
      size="sm"
      border="none"
    />
  );
}
