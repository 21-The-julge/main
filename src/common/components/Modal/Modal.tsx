import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";
import AlertModal from "@/common/components/Modal/AlertModal/AlertModal";

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
      <div className={cn("dimmed")}>{children}</div>
    </Portal>
  );
}

Modal.Confirm = ConfirmModal;
Modal.Alert = AlertModal;
Modal.Warn = WarnModal;
