import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";
import { SuffixElement } from "../parts";

const cn = classNames.bind(styles);

interface DropdownProps {
  options: string[];
}

export default function Dropdown({ options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0] || "");

  const handleDropdownButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  // // React.-event에서 React를 지우면 에러가 납니다
  // const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, option: string) => {
  //   if (e.key === "Enter" || e.key === "Space") {
  //     handleOptionSelect(option);
  //   }
  // };

  return (
    <div className={cn("dropdownBox")}>
      <button className={cn("dropdown")} type="button" onClick={handleDropdownButtonClick}>
        {selectedOption}
      </button>
      <SuffixElement element="triangle" isOpen={isOpen} />
      {isOpen && (
        <div className={cn("optionsBox")}>
          {options.map((option) => {
            return (
              <div
                className={cn("option")}
                key={option}
                onClick={() => handleOptionSelect(option)}
                role="button"
                tabIndex={0}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
