import classNames from "classnames/bind";
import styles from "./NoticesViewedRecent.module.scss";
import { data } from "./testData";
import { Post } from "@/shared/components";

const cn = classNames.bind(styles);

export default function NoticesViewedRecent() {
  const noticeData = data;
  return (
    <div className={cn("NoticesViewedRecent")}>
      <div className={cn("contextFrame")}>
        <h1>최근에 본 공고</h1>
        <div className={cn("postFrame")}>
          {noticeData.slice(0, 3).map((item) => (
            <Post
              imageUrl={item.shop?.item?.imageUrl}
              key={item.id}
              startsAt={item.startsAt}
              workhour={item.workhour}
              hourlyPay={item.hourlyPay}
              closed={item.closed}
              name={item.shop?.item?.name}
              address={item.shop?.item?.address1}
              originalHourlyPay={item.shop?.item?.originalHourlyPay}
              className={cn("post")}
            />
          ))}
        </div>
        <div>
          {noticeData.slice(3, 6).map((item) => (
            <Post
              imageUrl={item.shop?.item?.imageUrl}
              key={item.id}
              startsAt={item.startsAt}
              workhour={item.workhour}
              hourlyPay={item.hourlyPay}
              closed={item.closed}
              name={item.shop?.item?.name}
              address={item.shop?.item?.address1}
              originalHourlyPay={item.shop?.item?.originalHourlyPay}
              className={cn("post")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
//
/*
import { useState, useEffect } from "react";
import { GetSpecificShopNoticeData } from "@/shared/apis/api-hooks";
     const [noticeData, setNoticeData] = useState<any>();
  const shopId = "c3e8f2c9-fdf7-4f0c-bf4b-09b143e775d3";
  const noticeId = "f2ed78e9-3d83-4c99-b310-309fe0527c48";
  console.log(noticeData);
  useEffect(() => {
    async function fetchNotice() {
      const fetchedNotice = await GetSpecificShopNoticeData({ shopId, noticeId });
      setNoticeData(fetchedNotice.item);
    }

    fetchNotice();
  }, [shopId, noticeId]);
*/
