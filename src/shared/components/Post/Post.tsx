import Image from "next/image";
import classNames from "classnames/bind";
import styles from "@/shared/components/Post/Post.module.scss";
import getFullDate from "@/shared/utils/getDate";
import Clock from "@/images/ic_clock.svg";
import Location from "@/images/ic_location.svg";
import addComma from "@/shared/components/Post/utils/addComma";
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
  address: string;
  originalHourlyPay: number;
  className: string;
}

export default function Post({
  imageUrl,
  startsAt,
  workhour,
  hourlyPay,
  closed,
  name,
  address,
  originalHourlyPay,
  className,
}: PostProps) {
  const currentDate = new Date();
  const endDate = new Date(startsAt);
  const isPast = currentDate > endDate;

  return (
    <div className={cn("postContainer", className, { closed, isPast })}>
      <div className={cn("imgContainer")}>
        <NoticeMessage isPast={isPast} closed={closed} />
        <Image className={cn("img")} src={imageUrl} alt="식당 공고" fill />
      </div>
      <div className={cn("contentContainer")}>
        <div className={cn("restaurantContent")}>
          <p className={cn("restaurantName")}>{name}</p>
          <div className={cn("clockContainer")}>
            <Clock className={cn("clock")} fill={closed || isPast ? "#cbc9cf" : "orange"} />
            <p>{getFullDate(endDate, workhour)}</p>
          </div>
          <div className={cn("locationContainer")}>
            <Location className={cn("clock")} fill={closed || isPast ? "#cbc9cf" : "orange"} />
            {address}
          </div>
        </div>
        <div className={cn("priceContent")}>
          <p>{addComma(hourlyPay)}원</p>
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
