import classNames from "classnames/bind";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "../parts";

import styles from "./RadioInput.module.scss";

const cn = classNames.bind(styles);

interface RadioInputProps {
  value: string;
  name?: string;
  label?: string;
}

export default function RadioInput({ value, label, name }: RadioInputProps) {
  const [isChecked, setIsChecked] = useState(false);
  const radioRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (radioRef.current) {
      setIsChecked(radioRef.current.checked);
      return;
    }

    setIsChecked(false);
  }, [radioRef]);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const className = cn("radioBox", { checked: isChecked });

  return (
    <label htmlFor={name} className={className}>
      <Input
        className={cn("input")}
        type="radio"
        name={name}
        value={value}
        ref={radioRef}
        onChange={handleRadioChange}
      />
      {label}
    </label>
  );
}
