import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./FieldSet.module.scss";

const cn = classNames.bind(styles);

interface FieldSetProps {
  label: string;
  children: ReactNode;
}

export default function FieldSet({ label, children }: FieldSetProps) {
  return (
    <div>
      <div className={cn("label")}>{label}</div>
      {children}
    </div>
  );
}
