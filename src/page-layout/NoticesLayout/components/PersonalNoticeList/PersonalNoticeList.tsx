import Link from "next/link";
import classNames from "classnames/bind";

import { Post } from "@/shared/components";

import useUserDataStore from "@/shared/hooks/useUserDataStore";
import useGetAllNotices from "@/shared/hooks/useGetAllNotices";

import styles from "./PersonalNoticeList.module.scss";

const cn = classNames.bind(styles);

export default function PersonalNoticeList() {
  const type = useUserDataStore((state) => state.type);

  const address = useUserDataStore((state) => state.address) ?? "";

  const { data } = useGetAllNotices({ limit: 9, sort: "shop", address: [address] });

  const items = data ? data.items.map((obj) => obj.item) : [];

  const notices = items.map((obj) => {
    const { id: noticeId, startsAt, workhour, shop, hourlyPay, closed } = obj;

    const { id: shopId, name, address1, imageUrl, originalHourlyPay } = shop.item;

    return { noticeId, shopId, startsAt, workhour, hourlyPay, closed, name, address1, imageUrl, originalHourlyPay };
  });

  const path = type === "employer" ? "my-notice-detail" : "/notice-detail";
  return (
    <div className={cn("slider")}>
      {notices.map((notice) => {
        const { noticeId, shopId, imageUrl, startsAt, workhour, hourlyPay, closed, name, address1, originalHourlyPay } =
          notice;

        return (
          <div key={noticeId}>
            <Link
              href={{
                pathname: path,
                query: { noticeId, shopId },
              }}
            >
              <Post
                imageUrl={imageUrl}
                startsAt={startsAt}
                workhour={workhour}
                hourlyPay={hourlyPay}
                closed={closed}
                name={name}
                address={address1}
                originalHourlyPay={originalHourlyPay}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
