import classNames from "classnames/bind";
import { Post } from "@/shared/components";
import { GetSpecificShopNoticeType } from "@/page-layout/NoticesLayout/type";
import { loadDataFromLocal } from "@/shared/utils/localData";
import styles from "./NoticesRecent.module.scss";

const cn = classNames.bind(styles);

export default function NoticesRecent() {
  const data: GetSpecificShopNoticeType[] = loadDataFromLocal();
  const noticeData = data;
  return (
    <div className={cn("NoticesRecentContainer")}>
      <div className={cn("contextFrame")}>
        <h1>최근에 본 공고</h1>
        <div className={cn("postFrame")}>
          {noticeData && noticeData.length > 0 ? (
            data.map((item) => (
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
              />
            ))
          ) : (
            <p>최근에 본 공고가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
