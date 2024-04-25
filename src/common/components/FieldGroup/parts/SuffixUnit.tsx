import classNames from "classnames/bind";
import styles from "./SuffixUnit.module.scss";

const cn = classNames.bind(styles);

interface SuffixUnitProps {
  unit: "원" | "시급";
}

export default function SuffixUnit({ unit }: SuffixUnitProps) {
  return <div className={cn("suffixUnit")}>{unit}</div>;
}
