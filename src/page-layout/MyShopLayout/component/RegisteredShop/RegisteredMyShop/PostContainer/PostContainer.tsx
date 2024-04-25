import { ApiData } from "@/page-layout/MyShopLayout/type";

import { Post } from "@/shared/components";
import PostSkeleton from "@/shared/components/Post/Skeleton/PostSkeleton";

interface PostContainerProps {
  myShopData: ApiData;
}

export default function PostContainer({ myShopData }: PostContainerProps) {
  if (myShopData?.item?.startsAt === undefined) {
    return <PostSkeleton />;
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
