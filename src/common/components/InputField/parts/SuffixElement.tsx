import classNames from "classnames/bind";
import styles from "./SuffixElement.module.scss";

const cn = classNames.bind(styles);
interface SuffixElementProps {
  element: string;
}

export default function SuffixElement({ element }: SuffixElementProps) {
  return <div className={cn("suffixElement")}>{element}</div>;
}
