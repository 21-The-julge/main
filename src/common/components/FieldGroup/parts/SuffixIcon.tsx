import classNames from "classnames/bind";
import styles from "./SuffixIcon.module.scss";

import TriangleUpDown from "./TriangleUpDown";

const cn = classNames.bind(styles);

interface SuffixIconProps {
  icon: "triangle";
  isOpen?: boolean;
}

export default function SuffixIcon({ icon, isOpen }: SuffixIconProps) {
  const renderIcon = () => {
    switch (icon) {
      case "triangle":
        return <TriangleUpDown isOpen={isOpen} />;
      default:
        return null;
    }
  };

  return <div className={cn("suffixIcon")}>{renderIcon()}</div>;
}
