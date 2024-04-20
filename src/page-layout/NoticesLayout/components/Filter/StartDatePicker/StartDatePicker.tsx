import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";

registerLocale("ko", ko);

interface StartDatePickerProps {
  startDate: Date | null;
  onChange: (date: Date) => void;
}

export default function StartDatePicker({ startDate, onChange }: StartDatePickerProps) {
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      minDate={new Date()}
      dateFormat="yyyy년 MM월 dd일"
      locale="ko"
    />
  );
}
