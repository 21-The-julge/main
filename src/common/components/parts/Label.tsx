import classNames from "classnames/bind";
import styles from "./Label.module.scss";

const cn = classNames.bind(styles);

interface LabelProps {
  htmlFor?: string;
  label?: string;
  required?: boolean;
}

export default function Label({ htmlFor, label, required }: LabelProps) {
  const className = cn("label");

  return (
    <label htmlFor={htmlFor} className={className}>
      {label}
      {required && "*"}
    </label>
  );
}
