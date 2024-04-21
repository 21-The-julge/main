import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";

const cn = classNames.bind(styles);

interface DropdownProps {
  options: string[];
}

export default function Dropdown({ options }: DropdownProps) {
  return (
    <select className={cn("dropdown")}>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
