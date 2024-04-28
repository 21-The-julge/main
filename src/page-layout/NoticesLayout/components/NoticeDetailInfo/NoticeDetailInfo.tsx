import classNames from "classnames/bind";
import Image from "next/image";
import HighPriceRateBadge from "@/shared/components/Post/HighPriceRateBadge/HighPriceRateBadge";
import LocationIcon from "@/images/ic_location.svg";
import ClockIcon from "@/images/ic_clock.svg";
import addComma from "@/shared/components/Post/utils/addComma";
import formatDateTimeRange from "@/shared/utils/getFormatDateTimeRange";
import { useGetSpecificShopNoticeData } from "@/shared/apis/api-hooks";
import styles from "./NoticeDetailInfo.module.scss";
import NoticeDetailButtonAndModal from "./NoticeDetailButtonAndModal/NoticeDetailButtonAndModal";

interface NoticeDetailInfoProps {
  shopId: string;
  noticeId: string;
  myNotice: boolean;
}

const cn = classNames.bind(styles);

export default function NoticeDetailInfo({ shopId, noticeId, myNotice }: NoticeDetailInfoProps) {
  const { data: noticeData, isLoading, error } = useGetSpecificShopNoticeData({ shopId, noticeId });
  const noticeDetailData = noticeData?.item;
  const currentDate = new Date();
  const endDate = new Date(noticeDetailData?.startsAt);
  const isPast = currentDate > endDate;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div className={cn("noticeInfoContainer")}>
      <div className={cn("noticeInfoContent")}>
        <div className={cn("titleFont")}>
          <h2>{noticeDetailData?.shop?.item.category}</h2>
          <h1>{noticeDetailData?.shop?.item.name}</h1>
        </div>
        <div className={cn("detailFrame")}>
          <div className={cn("noticeImg")}>
            <Image fill src={noticeDetailData?.shop?.item.imageUrl} alt="내 가게" />
          </div>
          <div className={cn("noticeDetail", "titleFont")}>
            <h2>시급</h2>
            <div className={cn("wage")}>
              <h1>{addComma(noticeDetailData?.hourlyPay)}원</h1>
              <HighPriceRateBadge
                closed={noticeDetailData?.closed}
                isPast={isPast}
                hourlyPay={noticeDetailData?.hourlyPay}
                originalHourlyPay={noticeDetailData?.shop?.item.originalHourlyPay}
              />
            </div>
            <div className={cn("clock")}>
              <ClockIcon className={cn("icon")} fill={noticeDetailData?.closed || isPast ? "#cbc9cf" : "orange"} />
              <p>{formatDateTimeRange(noticeDetailData.startsAt, noticeDetailData.workhour)}</p>
            </div>
            <div className={cn("location")}>
              <LocationIcon className={cn("icon")} fill={noticeDetailData?.closed || isPast ? "#cbc9cf" : "orange"} />
              {noticeDetailData?.shop?.item.address1}
            </div>
            <p className={cn("shopDescription")}>{noticeDetailData?.shop?.item.description}</p>
            <NoticeDetailButtonAndModal shopId={shopId} noticeId={noticeId} myNotice={myNotice} />
          </div>
        </div>
        <div className={cn("noticeDescription")}>
          <h1>공고 설명</h1>
          <p>{noticeDetailData?.description}</p>
        </div>
      </div>
    </div>
  );
}
