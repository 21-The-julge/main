import classNames from "classnames/bind";
import IcCheck from "@/images/ic_check.svg";
import styles from "./RadioToggle.module.scss";

const cn = classNames.bind(styles);

interface RadioToggleProps {
  isChecked: boolean;
}

export default function RadioToggle({ isChecked }: RadioToggleProps) {
  const className = cn("radioToggle", { toggleChecked: isChecked });

  return (
    <div className={className}>
      <IcCheck width={14} height={14} />
    </div>
  );
}
