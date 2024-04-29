interface ValidateInputProps {
  inputValue: {
    name: string;
    phone: string;
    address: string;
    bio: string;
  };
}

export default function ValidateInput({ inputValue }: ValidateInputProps) {
  const disabled = Object.values(inputValue).some((value) => !value);
  return disabled;
}
