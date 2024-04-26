import { useRef, useState } from "react";

import useOutsideClick from "@/common/hooks/useOutsideClick";

import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";

import { Input, SuffixIcon } from "../parts";
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

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);

    onClick?.(option);
  };

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const combinedClassName = cn("dropdownBox", size, color);
  const style: ClassNameCSSProperties = {
    "--width": className || "100vw",
  };

  return (
    <div className={combinedClassName} ref={dropdownRef} style={style}>
      <button aria-label={name} className={cn("dropdown", className)} onClick={handleDropdownClick} type="button">
        <Input
          name={name}
          type="text"
          value={selectedOption}
          required
          readOnly
          placeholder={placeholder}
          size={size}
          cursor="pointer"
          color={color}
        />
        <SuffixIcon icon="triangle" isOpen={isOpen} />
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
