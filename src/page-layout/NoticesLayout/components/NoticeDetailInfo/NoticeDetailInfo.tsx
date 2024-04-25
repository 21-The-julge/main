import classNames from "classnames/bind";
import styles from "./NoticeDetailInfo.module.scss";
import Image from "next/image";
import { data } from "./testData";
import HighPriceRateBadge from "@/shared/components/Post/HighPriceRateBadge/HighPriceRateBadge";
import LocationIcon from "@/images/ic_location.svg";
import ClockIcon from "@/images/ic_clock.svg";
import addComma from "@/shared/components/Post/utils/addComma";
import getFullDate from "@/shared/utils/getDate";

const cn = classNames.bind(styles);

export default function NoticeDetailInfo() {
  const noticeDetailData = data;
  const currentDate = new Date();
  const endDate = new Date(data.startsAt);
  const isPast = currentDate > endDate;

  return (
    <div className={cn("noticeDetailInfo")}>
      <div className={cn("content")}>
        <div className={cn("font")}>
          <h2>음식종류 데이터</h2>
          <h1>식당 이름</h1>
        </div>

        <div className={cn("Frame")}>
          <div className={cn("img")}>
            <Image
              fill
              src={noticeDetailData.shop.item.imageUrl}
              alt="내 가게"
              sizes="(max-width: 757px) 303px, (max-width: 1024px) 632px, 539px"
            />
          </div>
          <div className={cn("textFrame", "font")}>
            <h2>시급</h2>
            <div className={cn("money")}>
              <div>{addComma(data.hourlyPay)}원</div>
              <HighPriceRateBadge
                closed={closed}
                isPast={isPast}
                hourlyPay={data.hourlyPay}
                originalHourlyPay={data.shop.item.originalHourlyPay}
              />
            </div>

            <div className={cn("clock")}>
              <ClockIcon className={cn("icon")} fill={closed || isPast ? "#cbc9cf" : "orange"} />
              <p>{getFullDate(endDate, data.workhour)}</p>
            </div>
            <div className={cn("location")}>
              <LocationIcon className={cn("icon")} fill={closed || isPast ? "#cbc9cf" : "orange"} />
              {data.shop.item.address1}
            </div>
            <p>가게설명</p>
            <button>신청하기 </button>
          </div>
        </div>
      </div>

      <div className={cn("detail")}>
        <p>공고 설명</p>
      </div>
    </div>
  );
}

//
