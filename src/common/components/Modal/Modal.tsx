import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import YesNoModal from "@/common/components/Modal/YesNoModal/YesNoModal";
import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";

import styles from "@/common/components/Modal/Modal.module.scss";
import Portal from "./ModalPortal";
import WarnModal from "./WarnModal/WarnModal";

const cn = classNames.bind(styles);

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <Portal>
      <div className={cn("background")}>{children}</div>
    </Portal>
  );
}

Modal.Confirm = ConfirmModal;
Modal.YesNo = YesNoModal;
Modal.Warn = WarnModal;
