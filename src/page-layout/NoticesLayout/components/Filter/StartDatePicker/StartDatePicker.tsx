// import classNames from "classnames/bind";
// import DatePicker, { registerLocale } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { ko } from "date-fns/locale/ko";

// import { InputField } from "@/common/components/FieldGroup";

// import styles from "./StartDatePicker.module.scss";

// const cn = classNames.bind(styles);

// registerLocale("ko", ko);

// interface StartDatePickerProps {
//   startDate: Date | null;
//   onChange: (date: Date) => void;
// }

// export default function StartDatePicker({ startDate, onChange }: StartDatePickerProps) {
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={onChange}
//       minDate={new Date()}
//       dateFormat="yyyy년 MM월 dd일"
//       locale="ko"
//       wrapperClassName={cn("datePicker")}
//       customInput={<InputField className={cn("customInput")} />}
//     />
//   );
// }
