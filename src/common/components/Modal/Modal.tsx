import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "@/common/components/Modal/Modal.module.scss";
import ModalPortal from "./ModalPortal";

const cn = classNames.bind(styles);

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <ModalPortal>
      <div className={cn("dimmed")}>{children}</div>
    </ModalPortal>
  );
}
