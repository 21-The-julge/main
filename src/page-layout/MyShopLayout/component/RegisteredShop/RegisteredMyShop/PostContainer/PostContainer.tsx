import { Post } from "@/shared/components";
import PostSkeleton from "@/shared/components/Post/Skeleton/PostSkeleton";

interface PostContainerProps {
  className: string;
  myShopData: ApiData;
}

interface ApiData {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    // 추가
    imageUrl?: string;
    name?: string;
    address1?: string;
    originalHourlyPay?: number;
  };
}

export default function PostContainer({ className, myShopData }: PostContainerProps) {
  if (myShopData?.item?.startsAt === undefined) {
    return <PostSkeleton className={className} />;
  }
  return (
    <Post
      className={className}
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
