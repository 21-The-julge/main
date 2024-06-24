import { ApiData } from "@/page-layout/MyShopLayout/type";
import Link from "next/link";

import { Post } from "@/shared/components";
import PostSkeleton from "@/shared/components/Post/Skeleton/PostSkeleton";

import classNames from "classnames/bind";
import styles from "@/shared/components/Post/Skeleton/PostSkeleton.module.scss";

interface PostContainerProps {
  myShopData: ApiData;
  shopId: string;
}
const cn = classNames.bind(styles);

export default function PostContainer({ myShopData, shopId }: PostContainerProps) {
  if (myShopData?.item?.startsAt === undefined) {
    return <PostSkeleton className={cn("skeleton")} />;
  }

  return (
    <Link href={`shops/${shopId}/notices/${myShopData?.item?.id}`}>
      <Post
        startsAt={myShopData?.item?.startsAt}
        workhour={myShopData?.item?.workhour}
        hourlyPay={myShopData?.item?.hourlyPay}
        closed={myShopData?.item?.closed}
        imageUrl={myShopData?.item?.imageUrl}
      />
    </Link>
  );
}
