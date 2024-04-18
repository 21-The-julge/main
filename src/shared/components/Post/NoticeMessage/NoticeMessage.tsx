import classNames from "classnames/bind";
import styles from "@/shared/components/Post/NoticeMessage/NoticeMessage.module.scss";

const cn = classNames.bind(styles);

interface NoticeMessageProps {
  isPast: boolean;
  closed: boolean;
}

export default function NoticeMessage({ isPast, closed }: NoticeMessageProps) {
  const isClosed = (closed && isPast) || (closed && !isPast);
  const isPasted = isPast && !closed;
  return (
    <>
      {isClosed && <div className={cn("imgOverlay")}>마감 완료</div>}
      {isPasted && <div className={cn("imgOverlay")}>지난 공고</div>}
    </>
  );
}
