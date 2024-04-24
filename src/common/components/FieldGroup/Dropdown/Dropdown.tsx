import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";

import { Input, SuffixElement } from "../parts";
import { ClassNameCSSProperties, DropdownProps } from "../type";

const cn = classNames.bind(styles);

export default function Dropdown({
  options,
  onClick,
  name,
  placeholder,
  size = "md",
  color = "white",
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen((prevIsOpen) => !prevIsOpen);

    if (onClick) {
      onClick(option);
    }
  };

  const combinedClassName = cn("dropdownBox", size, color);
  const style: ClassNameCSSProperties = {
    "--width": className || "100vw",
  };

  return (
    <div className={combinedClassName} style={style}>
      {/* {label && <Label htmlFor={name} label={label} required={required} />} */}
      <button aria-label={name} className={cn("dropdown")} onClick={handleDropdownClick} type="button">
        <Input
          name={name}
          type="text"
          value={selectedOption}
          required
          readOnly
          placeholder={placeholder}
          cursor="pointer"
          color={color}
        />
        <SuffixElement element="triangle" isOpen={isOpen} />
      </button>
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
    </div>
  );
}
