import IcTriangleDown from "@/images/ic_triangle_down.svg";

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
      <IcTriangleDown width={16} height={16} />
    </div>
  );
}
