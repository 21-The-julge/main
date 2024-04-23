import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";

import { Input, Label, SuffixElement } from "../parts";

const cn = classNames.bind(styles);

interface DropdownProps {
  options: string[];
  onClick?: (option: string) => void;
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  size?: "sm" | "md";
  color?: "white" | "gray";
}

export default function Dropdown({
  options,
  onClick,
  label,
  name,
  required,
  placeholder,
  size = "md",
  color = "white",
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

  const className = cn("dropdown", size, color);

  return (
    <div className={cn("dropdownBox")}>
      {label && <Label htmlFor={name} label={label} required={required} />}
      <button aria-label={name} className={className} onClick={handleDropdownClick} type="button">
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
          {options.map((option) => {
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
