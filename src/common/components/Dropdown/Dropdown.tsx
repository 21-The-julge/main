import classNames from "classnames/bind";

import { InputHTMLAttributes, forwardRef, useRef, useState } from "react";

import useOutsideClick from "@/common/hooks/useOutsideClick";
import { ErrorMessage, Input, Label, SuffixIcon } from "../parts";

import styles from "./Dropdown.module.scss";

const cn = classNames.bind(styles);

interface DropdownProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  options?: readonly string[];
  onOptionClick?: (option: string) => void; // option값이 필요하면 상단에서 onOptionClick Prop으로 함수 전달
  name?: string;
  size?: "sm" | "md";
  color?: "white" | "gray";
  className?: string;
  label?: string;
  required?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

export default forwardRef<HTMLInputElement, DropdownProps>(function Dropdown(
  {
    options,
    isError = false,
    errorMessage = "",
    onOptionClick,
    name,
    size = "md",
    color = "white",
    className,
    label,
    ...rest
  },
  ref,
) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);

    onOptionClick?.(option);
  };

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const combinedClassName = cn("dropdownBox", size, color);

  return (
    <div className={combinedClassName} ref={dropdownRef}>
      <div className={cn("field")}>
        {label && <Label label={label} htmlFor={name} required={rest.required} />}
        <button aria-label={name} className={cn("dropdown", className)} onClick={handleDropdownClick} type="button">
          <Input
            ref={ref}
            name={name}
            value={selectedOption}
            readOnly
            size={size}
            cursor="pointer"
            color={color}
            {...rest}
          />
          <SuffixIcon icon="triangle" isOpen={isOpen} />
        </button>
      </div>
      {isOpen && (
        <div className={cn("optionsBox")}>
          {options?.map((option) => {
            return (
              <button className={cn("option")} key={option} onClick={() => handleOptionSelect(option)} type="button">
                {option}
              </button>
            );
          })}
        </div>
      )}
      {isError && <ErrorMessage message={errorMessage} />}
    </div>
  );
});
