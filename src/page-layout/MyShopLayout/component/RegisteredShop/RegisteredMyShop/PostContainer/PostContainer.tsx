import { ApiData } from "@/page-layout/MyShopLayout/type";

import { Post } from "@/shared/components";
import PostSkeleton from "@/shared/components/Post/Skeleton/PostSkeleton";

import classNames from "classnames/bind";
import styles from "@/shared/components/Post/Skeleton/PostSkeleton.module.scss";

interface PostContainerProps {
  myShopData: ApiData;
}
const cn = classNames.bind(styles);

export default function PostContainer({ myShopData }: PostContainerProps) {
  if (myShopData?.item?.startsAt === undefined) {
    return <PostSkeleton className={cn("skeleton")} />;
  }

  return (
    <Post
      imageUrl={myShopData?.item?.imageUrl}
      startsAt={myShopData?.item?.startsAt}
      workhour={myShopData?.item?.workhour}
      hourlyPay={myShopData?.item?.hourlyPay}
      closed={myShopData?.item?.closed}
      name={myShopData?.item?.name}
      address={myShopData?.item?.address1}
      originalHourlyPay={myShopData?.item?.originalHourlyPay}
    />
  );
}
