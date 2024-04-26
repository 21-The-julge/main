import classNames from "classnames/bind";
import styles from "./NoticeDetailInfo.module.scss";
import Image from "next/image";
import { data } from "./testData";
import HighPriceRateBadge from "@/shared/components/Post/HighPriceRateBadge/HighPriceRateBadge";
import LocationIcon from "@/images/ic_location.svg";
import ClockIcon from "@/images/ic_clock.svg";
import addComma from "@/shared/components/Post/utils/addComma";
import formatDateTimeRange from "@/shared/utils/getFormatDateTimeRange";
import { Button } from "@/common/components";

const cn = classNames.bind(styles);

export default function NoticeDetailInfo() {
  const noticeDetailData = data;
  const currentDate = new Date();
  const endDate = new Date(data.startsAt);
  const isPast = currentDate > endDate;
  return (
    <div className={cn("noticeInfoContainer")}>
      <div className={cn("noticeInfoContent")}>
        <div className={cn("titleFont")}>
          <h2>{data.shop.item.category}</h2>
          <h1>{data.shop.item.name}</h1>
        </div>
        <div className={cn("detailFrame")}>
          <div className={cn("noticeImg")}>
            <Image fill src={noticeDetailData.shop.item.imageUrl} alt="내 가게" />
          </div>
          <div className={cn("noticeDetail", "titleFont")}>
            <h2>시급</h2>
            <div className={cn("wage")}>
              <h1>{addComma(data.hourlyPay)}원</h1>
              <HighPriceRateBadge
                closed={data.closed}
                isPast={isPast}
                hourlyPay={data.hourlyPay}
                originalHourlyPay={data.shop.item.originalHourlyPay}
              />
            </div>
            <div className={cn("clock")}>
              <ClockIcon className={cn("icon")} fill={data.closed || isPast ? "#cbc9cf" : "orange"} />
              <p>{formatDateTimeRange(data.startsAt, data.workhour)}</p>
            </div>
            <div className={cn("location")}>
              <LocationIcon className={cn("icon")} fill={data.closed || isPast ? "#cbc9cf" : "orange"} />
              {data.shop.item.address1}
            </div>
            <p className={cn("shopDescription")}>{data.shop.item.description}</p>
            <Button type="button" size="large" variant="outline" color="primary" className={cn("applicationButton")}>
              신청하기
            </Button>
          </div>
        </div>
        <div className={cn("noticeDescription")}>
          <h1>공고 설명</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
