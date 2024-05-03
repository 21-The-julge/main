import Link from "next/link";

import { Post } from "@/shared/components";

import useUserDataStore from "@/shared/hooks/useUserDataStore";
import useGetAllNotices from "@/shared/hooks/useGetAllNotices";

import DragSlider from "../DragSlider";
import Skeleton from "../NoticesSkeleton";

export default function PersonalNoticeList() {
  const address = useUserDataStore((state) => state.address) ?? "";

  const { data, error, isPending, isError } = useGetAllNotices({ limit: 9, sort: "shop", address: [address] });

  const items = data ? data.items.map((obj) => obj.item) : [];

  const notices = items.map((obj) => {
    const { id: noticeId, startsAt, workhour, shop, hourlyPay, closed } = obj;

    const { id: shopId, name, address1, imageUrl, originalHourlyPay } = shop.item;

    return { noticeId, shopId, startsAt, workhour, hourlyPay, closed, name, address1, imageUrl, originalHourlyPay };
  });

  if (isPending) {
    return <Skeleton />;
  }

  if (isError) {
    <div>Error: {error?.message}</div>;
  }

  return (
    <DragSlider>
      {notices.map((notice) => {
        const { noticeId, shopId, imageUrl, startsAt, workhour, hourlyPay, closed, name, address1, originalHourlyPay } =
          notice;

        return (
          <div key={noticeId}>
            <Link href={`shops/${shopId}/notices/${noticeId}`}>
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
    </DragSlider>
  );
}
