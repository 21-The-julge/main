import Image from "next/image";

import classNames from "classnames/bind";
import styles from "@/shared/components/Post/Post.module.scss";

import formatDateTimeRange from "@/shared/utils/getFormatDateTimeRange";
import addComma from "@/shared/components/Post/utils/addComma";

import Clock from "@/images/ic_clock.svg";
import Location from "@/images/ic_location.svg";
import DefaultImg from "@/images/defaultImg.svg";

import { PostProps } from "@/page-layout/MyShopLayout/type";
import NoticeMessage from "./NoticeMessage/NoticeMessage";
import HighPriceRateBadge from "./HighPriceRateBadge/HighPriceRateBadge";

const cn = classNames.bind(styles);

export default function Post({
  imageUrl,
  startsAt,
  workhour,
  hourlyPay,
  closed,
  name,
  address,
  originalHourlyPay,
}: PostProps) {
  const currentDate = new Date();
  const endDate = new Date(startsAt);
  const isPast = currentDate > endDate;

  return (
    <div className={cn("postContainer", { closed, isPast })}>
      <div className={cn("imgContainer")}>
        <NoticeMessage isPast={isPast} closed={closed} />
        <Image
          className={cn("img")}
          src={imageUrl || DefaultImg}
          alt="식당 공고"
          fill
          placeholder="blur"
          sizes="(max-width: 757px) 145px, (max-width: 1024px) 300px, 300px"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" // 추가
        />
      </div>
      <div className={cn("contentContainer")}>
        <div className={cn("restaurantContent")}>
          <p className={cn("restaurantName")}>{name}</p>
          <div className={cn("clockContainer")}>
            <Clock className={cn("clock")} fill={closed || isPast ? "#cbc9cf" : "orange"} />
            <p>{formatDateTimeRange(startsAt, workhour)}</p>
          </div>
          <div className={cn("locationContainer")}>
            <Location className={cn("location")} fill={closed || isPast ? "#cbc9cf" : "orange"} />
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
