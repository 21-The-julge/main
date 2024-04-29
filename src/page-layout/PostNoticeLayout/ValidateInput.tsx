interface ValidateInputProps {
  inputValue: {
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
  };
}

export default function ValidateInput({ inputValue }: ValidateInputProps) {
  const disabled = Object.values(inputValue).some((value) => !value);
  return disabled;
}
