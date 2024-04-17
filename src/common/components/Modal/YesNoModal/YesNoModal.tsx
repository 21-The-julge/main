import classNames from "classnames/bind";
import styles from "@/common/components/Modal/YesNoModal/YesNoModal.module.scss";
import { useEffect, useRef } from "react";
import Check from "@/images/ic_check.svg";

const cn = classNames.bind(styles);

interface YesNoModalProps {
  message: string;
  className: string;
  leftButtononClick: () => void;
  rightButtononClick: () => void;
  leftButtonText: string;
  rightButtonText: string;
}

export default function YesNoModal({
  message,
  className,
  leftButtononClick,
  rightButtononClick,
  leftButtonText,
  rightButtonText,
}: YesNoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        leftButtononClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [leftButtononClick]);

  return (
    <div className={cn(className, "modalContainer")} ref={modalRef}>
      <div className={cn("messageContainer")}>
        <Check width={16} height={16} />
        <p className={cn("text")}>{message}</p>
      </div>
      <div className={cn("buttonContainer")}>
        <button onClick={leftButtononClick} type="button" className={cn("leftButton")}>
          {leftButtonText}
        </button>
        <button onClick={rightButtononClick} type="button" className={cn("rightButton")}>
          {rightButtonText}
        </button>
      </div>
    </div>
  );
}
