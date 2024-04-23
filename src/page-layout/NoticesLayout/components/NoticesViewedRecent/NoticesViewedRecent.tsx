import classNames from "classnames/bind";
import styles from "./NoticesViewedRecent.module.scss";
import { data, test } from "./testData";
import { Post } from "@/shared/components";
const cn = classNames.bind(styles);

export default function NoticesViewedRecent() {
  const noticeData = test;
  return (
    <div className={cn("NoticesViewedRecent")}>
      <div className={cn("contextFrame")}>
        <h1>최근에 본 공고</h1>
        <div>
          <Post
            imageUrl={noticeData.shop.item.imageUrl}
            key={noticeData.id}
            startsAt={noticeData.startsAt}
            workhour={noticeData.workhour}
            hourlyPay={noticeData.hourlyPay}
            closed={noticeData.closed}
            name={noticeData.shop?.item?.name}
            address={noticeData.shop?.item?.address1}
            originalHourlyPay={noticeData.shop?.item?.originalHourlyPay}
            className={cn("post")}
          />
        </div>
        S
      </div>
    </div>
  );
}
//{noticeData.map((item) => ( ))}
//
