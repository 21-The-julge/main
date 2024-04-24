// import TriangleUp from "@/images/ic_triangleUp.svg";
import TriangleDown from "@/images/ic_triangleDown.svg";

import classNames from "classnames/bind";
import styles from "./TriangleUpDown.module.scss";

const cn = classNames.bind(styles);

interface TriangleUpDownProps {
  isOpen?: boolean;
}

export default function TriangleUpDown({ isOpen }: TriangleUpDownProps) {
  const className = cn("triangleUpDown", { rotate: isOpen === true });

  return (
    <div className={className}>
      {/* {isOpen ? <TriangleDown width={16} height={16} /> : <TriangleUp width={16} height={16} />} */}
      <TriangleDown width={16} height={16} />
    </div>
  );
}
