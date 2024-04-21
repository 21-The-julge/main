import classNames from "classnames/bind";
import IC_SEARCH from "@/images/ic_search.svg";
import styles from "./CreateCards.module.scss";

const cn = classNames.bind(styles);

interface CreateCardsProps {
  name: string;
  startsAt: string;
  createdAt: string;
  result: "accepted" | "rejected";
}

export default function CreateCards({ name, startsAt, createdAt, result }: CreateCardsProps) {
  const alertColor = result === "accepted" ? "#0080FF" : " #FF4040";
  const alertText = result === "accepted" ? "승인" : "거절";
  const alertTextColor = result === "accepted" ? "blue" : "red";
  return (
    <div className={cn("card")}>
      <IC_SEARCH className={cn("icon")} fill={alertColor} />
      <div className={cn("text-container")}>
        {name}({startsAt})
        <br />
        공고 지원이 <span className={cn(alertTextColor)}>{alertText}</span>되었어요.
      </div>
      <div className={cn("date")}>{createdAt}분 전 </div>
    </div>
  );
}
