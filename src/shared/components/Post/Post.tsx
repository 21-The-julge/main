import Image from "next/image";
import classNames from "classnames/bind";
import styles from "@/common/components/Post/Post.module.scss";
import Clock from "@/images/ic_clock.svg";
import Location from "@/images/ic_location.svg";

const cn = classNames.bind(styles);

type Props = {
  imageUrl: string;
  noticeId: string;
  startsAt: string;
  workhour: number;
  hourlyPay: number;
  closed?: boolean;
  isPast?: boolean;
  noticeShopId?: string | undefined;
  myShopId?: string;
  name: string;
  address1: string;
  originalHourlyPay: number;
};

export default function Post({
  imageUrl,
  noticeId,
  startsAt,
  workhour,
  hourlyPay,
  closed,
  noticeShopId,
  myShopId,
  name,
  address1,
  originalHourlyPay,
}: Props) {
  const currentDate = new Date();
  const endDate = new Date(startsAt);
  const isPast = currentDate > endDate;
  console.log(currentDate, endDate);
  console.log(isPast);
  return (
    <div className={cn("postContainer")}>
      <div className={styles.imgContainer}>
        {isPast && <div className={cn("imgOverlay")}>지난 공1고</div>}
        <Image src={imageUrl} alt="식당 공고" fill />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.restaurantContent}>
          <p className={styles.restaurantName}>{name}</p>
          <div className={styles.clockContainer}>
            <Clock />
            <p>시간</p>
          </div>
          <div className={styles.locationContainer}>
            <Location />
            {address1}
          </div>
        </div>
        <div className={styles.priceContent}>
          <p>{hourlyPay}원</p>
          <div>기존 시급보다 100% 더</div>
        </div>
      </div>
    </div>
  );
}
