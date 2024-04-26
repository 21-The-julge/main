import classNames from "classnames/bind";
import { Post } from "@/shared/components";

import Link from "next/link";
import styles from "./NoticeList.module.scss";

const cn = classNames.bind(styles);

interface Notice {
  noticeId: string;
  shopId: string;
  startsAt: string;
  workhour: number;
  hourlyPay: number;
  closed: boolean;
  name: string;
  address1: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface NoticesListProps {
  notices: Notice[];
}

function NoticeList({ notices }: NoticesListProps) {
  return (
    <div className={cn("list")}>
      {notices.map((notice) => {
        const { noticeId, shopId, imageUrl, startsAt, workhour, hourlyPay, closed, name, address1, originalHourlyPay } =
          notice;

        return (
          <div key={noticeId}>
            <Link
              href={{
                pathname: "/",
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

export default NoticeList;
