import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";

const cn = classNames.bind(styles);

interface DropdownProps {
  options: string[];
}

export default function Dropdown({ options }: DropdownProps) {
  return (
    <div className={cn("selectBox")}>
      <select className={cn("select")}>
        {options.map((option) => {
          return (
            <option className={cn("option")} key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
