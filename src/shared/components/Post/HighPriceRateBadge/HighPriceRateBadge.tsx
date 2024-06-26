import classNames from "classnames/bind";
import styles from "@/shared/components/Post/HighPriceRateBadge/HighPriceRateBadge.module.scss";
import IcArrowUp from "@/images/ic_arrowUp.svg";

const cn = classNames.bind(styles);

interface HighPriceRateBadgeProps {
  closed: boolean;
  isPast: boolean;
  hourlyPay: number;
  originalHourlyPay?: number;
}

export default function HighPriceRateBadge({ closed, isPast, hourlyPay, originalHourlyPay }: HighPriceRateBadgeProps) {
  if (originalHourlyPay === undefined) {
    return null;
  }
  const percentage = Number((((hourlyPay - originalHourlyPay) / originalHourlyPay) * 100).toFixed());
  let color;
  if (percentage < 20) {
    color = "red20";
  } else if (percentage < 50) {
    color = "red30";
  } else {
    color = "red40";
  }
  if (percentage <= 0) return null;

  return (
    <div className={cn("badge", { closed, isPast }, isPast || color)}>
      <span className={cn("percentage")}>기존 시급보다 {percentage}%</span>
      <IcArrowUp className={cn("svg")} width="2rem" height="2rem" fill="white" />
    </div>
  );
}
