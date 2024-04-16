import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import ConfirmModal from "@/common/components/Modal/ConfirmModal/confirmModal";

import styles from "@/common/components/Modal/Modal.module.scss";

const cn = classNames.bind(styles);

type Props = {
  children: ReactNode;
};

export default function Modal({ children }: Props) {
  return <div className={cn("background")}>{children}</div>;
}

Modal.Confirm = ConfirmModal;
