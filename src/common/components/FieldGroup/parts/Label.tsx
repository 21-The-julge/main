import classNames from "classnames/bind";
import styles from "./Label.module.scss";

const cn = classNames.bind(styles);

interface LabelProps {
  htmlFor?: string;
  label: string;
  required?: boolean;
}

export default function Label({ htmlFor, label, required }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={cn("label")}>
      {label}
      {required && "*"}
    </label>
  );
}
