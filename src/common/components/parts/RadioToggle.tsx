import classNames from "classnames/bind";
import Check from "@/images/ic_check.svg";
import styles from "./RadioToggle.module.scss";

const cn = classNames.bind(styles);

interface RadioToggleProps {
  isChecked: boolean;
}

export default function RadioToggle({ isChecked }: RadioToggleProps) {
  const className = cn("radioToggle", { toggleChecked: isChecked });

  return (
    <div className={className}>
      <Check width={14} height={14} />
    </div>
  );
}
