import { InputField, Textarea } from "@/common/components/FieldGroup";
import { ChangeEvent } from "react";

export default function LoginPage() {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <InputField unit="시간" size="md" className="test" placeholder="입력" onChange={handleChange} />
      <Textarea placeholder="입력" onChange={handleTextareaChange} label="테스트" name="테스트" required />
    </>
  );
}
