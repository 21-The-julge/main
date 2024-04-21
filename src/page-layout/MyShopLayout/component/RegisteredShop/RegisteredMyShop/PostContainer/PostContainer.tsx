import { Post } from "@/shared/components";
import PostSkeleton from "@/shared/components/Post/Skeleton/PostSkeleton";

interface PostContainerProps {
  className: string;
  key: string;
  myShopData: ApiData;
}

interface ApiData {
  startsAt: string;
  workhour: number;
  hourlyPay: number;
  closed: boolean;
  shop: {
    item: {
      address1: string;
      imageUrl: string;
      name: string;
      originalHourlyPay: number;
    };
  };
}

export default function PostContainer({ className, key, myShopData }: PostContainerProps) {
  if (myShopData?.startsAt === undefined) {
    return (
      <div key={key}>
        <PostSkeleton className={className} />
      </div>
    );
  }
  return (
    <div key={key}>
      <Post
        className={className}
        imageUrl={myShopData?.shop?.item?.imageUrl}
        startsAt={myShopData?.startsAt}
        workhour={myShopData?.workhour}
        hourlyPay={myShopData?.hourlyPay}
        closed={myShopData?.closed}
        name={myShopData?.shop?.item?.name}
        address={myShopData?.shop?.item?.address1}
        originalHourlyPay={myShopData?.shop?.item?.originalHourlyPay}
      />
    </div>
  );
}
