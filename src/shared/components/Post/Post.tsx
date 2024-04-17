import Image from "next/image";
import classNames from "classnames/bind";
import styles from "@/shared/components/Post/Post.module.scss";
import getFullDate from "@/shared/utils/getDate";
import Clock from "@/images/ic_clock.svg";
import Location from "@/images/ic_location.svg";
import NoticeMessage from "./NoticeMessage/NoticeMessage";
import HighPriceRateBadge from "./HighPriceRateBadge/HighPriceRateBadge";

const cn = classNames.bind(styles);

interface PostProps {
  imageUrl: string;
  startsAt: string;
  workhour: number;
  hourlyPay: number;
  closed: boolean;
  name: string;
  address1: string;
  originalHourlyPay: number;
}

export default function Post({
  imageUrl,
  startsAt,
  workhour,
  hourlyPay,
  closed,
  name,
  address1,
  originalHourlyPay,
}: PostProps) {
  const currentDate = new Date();
  const endDate = new Date(startsAt);
  const isPast = currentDate > endDate;

  return (
    <div className={cn("postContainer", { closed, isPast })}>
      <div className={cn("imgContainer")}>
        <NoticeMessage isPast={isPast} closed={closed} />
        <Image style={{ objectFit: "cover" }} src={imageUrl} alt="식당 공고" fill />
      </div>
      <div className={cn("contentContainer")}>
        <div className={cn("restaurantContent")}>
          <p className={cn("restaurantName")}>{name}</p>
          <div className={cn("clockContainer")}>
            {closed || isPast ? (
              <Clock className={cn("clock")} fill="#cbc9cf" />
            ) : (
              <Clock className={cn("clock")} fill="orange" />
            )}
            <p>{getFullDate(endDate, workhour)}</p>
          </div>
          <div className={cn("locationContainer")}>
            {closed || isPast ? (
              <Location className={cn("location")} fill="#cbc9cf" />
            ) : (
              <Location className={cn("location")} fill="orange" />
            )}
            {address1}
          </div>
        </div>
        <div className={cn("priceContent")}>
          <p>{hourlyPay?.toLocaleString()}원</p>
          <HighPriceRateBadge
            closed={closed}
            isPast={isPast}
            hourlyPay={hourlyPay}
            originalHourlyPay={originalHourlyPay}
          />
        </div>
      </div>
    </div>
  );
}
