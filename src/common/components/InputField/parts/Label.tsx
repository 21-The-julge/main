import classNames from "classnames/bind";
import styles from "./Label.module.scss";

const cn = classNames.bind(styles);

interface LabelProps {
  htmlFor?: string;
  label: string;
}

export default function Label({ htmlFor, label }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={cn("label")}>
      {label}
    </label>
  );
}
