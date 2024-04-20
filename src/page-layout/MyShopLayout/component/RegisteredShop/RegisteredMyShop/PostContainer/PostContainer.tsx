import axiosInstance from "@/pages/api/axiosInstance";
import { Post } from "@/shared/components";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

const cn = classNames;

interface PostContainerProps {
  className: string;
  key: string;
  myShopDataId: string;
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

export default function PostContainer({ className, key, myShopDataId }: PostContainerProps) {
  const [apiData, setApiData] = useState({} as ApiData);

  const getMyShopInfo = async () => {
    try {
      const response = await axiosInstance.get(`/shops/ae78c3af-a075-4586-bee2-21c8da59d6b2/notices/${myShopDataId}`);
      setApiData(response.data.item);
    } catch (error) {
      setApiData({} as ApiData);
    }
  };

  useEffect(() => {
    getMyShopInfo();
  }, []);

  return (
    <div key={key}>
      <Post
        className={className}
        imageUrl={apiData?.shop?.item?.imageUrl}
        startsAt={apiData?.startsAt}
        workhour={apiData?.workhour}
        hourlyPay={apiData?.hourlyPay}
        closed={apiData?.closed}
        name={apiData?.shop?.item?.name}
        address={apiData?.shop?.item?.address1}
        originalHourlyPay={apiData?.shop?.item?.originalHourlyPay}
      />
    </div>
  );
}
