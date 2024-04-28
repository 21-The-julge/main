import { InputHTMLAttributes, forwardRef } from "react";
import RadioInput from "./RadioInput";

interface RadioFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  legend: string;
  name: string;
}

export default forwardRef<HTMLInputElement, RadioFieldProps>(function RadioField({ legend, name, ...rest }, ref) {
  // const [isSelected, setIsSelected] = useState("");

  return (
    <fieldset>
      <legend>{legend}</legend>
      <RadioInput ref={ref} id="employer" value="employer" name={name} label="사장님" {...rest} />
      <RadioInput ref={ref} id="employee" value="employee" name={name} label="알바님" {...rest} />
    </fieldset>
  );
});
