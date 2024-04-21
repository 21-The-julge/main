import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisteredMyShop/RegisteredMyShop.module.scss";
import { useState } from "react";
import PostContainer from "./PostContainer/PostContainer";

const cn = classNames.bind(styles);

interface RegistseredMyShopProps {
  myShopData: ApiData[];
}

interface ApiData {
  item: {
    startsAt: string;
    workhour: number;
    hourlyPay: number;
    closed: boolean;
    id: string;
    shop: {
      item: {
        address1: string;
        imageUrl: string;
        name: string;
        originalHourlyPay: number;
      };
    };
  };
}

export default function RegistseredMyShop({ myShopData }: RegistseredMyShopProps) {
  const [myShopDataList, setMyShopDataList] = useState<ApiData[]>(myShopData);

  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myRegisterdShop")}>내가 등록한 공고</p>
        <div className={cn("gridContainer")}>
          {myShopDataList?.map((item) => (
            <PostContainer className={cn("size")} key={item?.item?.id} myShopData={item.item} />
          ))}
        </div>
      </div>
    </div>
  );
}
