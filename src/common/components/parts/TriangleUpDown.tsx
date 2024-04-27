import TriangleDown from "@/images/ic_triangleDown.svg";

import classNames from "classnames/bind";
import styles from "./TriangleUpDown.module.scss";

const cn = classNames.bind(styles);

interface TriangleUpDownProps {
  isOpen?: boolean;
}

export default function TriangleUpDown({ isOpen }: TriangleUpDownProps) {
  const className = cn("triangleUpDown", { rotate: isOpen });

  return (
    <div className={className}>
      <TriangleDown width={16} height={16} />
    </div>
  );
}
