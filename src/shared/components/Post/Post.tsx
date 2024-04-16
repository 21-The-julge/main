import Image from "next/image";
import classNames from "classnames/bind";
import styles from "@/shared/components/Post/Post.module.scss";
import getFullDate from "@/shared/utils/getDate";
import Clock from "@/images/ic_clock.svg";
import Location from "@/images/ic_location.svg";
import NoticeMessage from "./NoticeMessage/NoticeMessage";
import HighPriceRateBadge from "./HighPriceRateBadge/HighPriceRateBadge";

const cn = classNames.bind(styles);

type Props = {
  imageUrl: string;
  startsAt: string;
  workhour: number;
  hourlyPay: number;
  closed: boolean;
  name: string;
  address1: string;
  originalHourlyPay: number;
};

export default function Post({
  imageUrl,
  startsAt,
  workhour,
  hourlyPay,
  closed,
  name,
  address1,
  originalHourlyPay,
}: Props) {
  const currentDate = new Date();
  const endDate = new Date(startsAt);
  const isPast = currentDate > endDate;

  return (
    <div className={cn("postContainer", { closed, isPast })}>
      <div className={styles.imgContainer}>
        <NoticeMessage isPast={isPast} closed={closed} />
        <Image style={{ objectFit: "cover" }} src={imageUrl} alt="식당 공고" fill />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.restaurantContent}>
          <p className={styles.restaurantName}>{name}</p>
          <div className={styles.clockContainer}>
            {closed || isPast ? (
              <Clock className={styles.clock} fill="#cbc9cf" />
            ) : (
              <Clock className={styles.clock} fill="orange" />
            )}
            <p>{getFullDate(endDate, workhour)}</p>
          </div>
          <div className={styles.locationContainer}>
            {closed || isPast ? (
              <Location className={styles.location} fill="#cbc9cf" />
            ) : (
              <Location className={styles.location} fill="orange" />
            )}
            {address1}
          </div>
        </div>
        <div className={styles.priceContent}>
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
