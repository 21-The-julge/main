import classNames from "classnames/bind";
import styles from "./SuffixElement.module.scss";
import TriangleUpDown from "./TriangleUpDown";

const cn = classNames.bind(styles);
interface SuffixElementProps {
  element: "원" | "시급" | "triangle";
  isOpen?: boolean;
}

export default function SuffixElement({ element, isOpen }: SuffixElementProps) {
  const suffixElement = element === "triangle" ? <TriangleUpDown isOpen={isOpen} /> : element;

  return <div className={cn("suffixElement")}>{suffixElement}</div>;
}
