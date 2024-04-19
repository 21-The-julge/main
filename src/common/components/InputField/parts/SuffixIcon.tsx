import classNames from "classnames/bind";
import styles from "./SuffixIcon.module.scss";

const cn = classNames.bind(styles);
interface SuffixIconProps {
  suffix: string;
}

export default function SuffixIcon({ suffix }: SuffixIconProps) {
  return <div className={cn("suffixIcon")}>{suffix}</div>;
}
