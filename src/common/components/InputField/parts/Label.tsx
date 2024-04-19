import classNames from "classnames/bind";
import styles from "./Label.module.scss";

const cn = classNames.bind(styles);

interface LabelProps {
  name: string;
  label: string;
}

export default function Label({ name, label }: LabelProps) {
  return (
    <label htmlFor={name} className={cn("label")}>
      {label}
    </label>
  );
}
