import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisteredMyShop/RegisteredMyShop.module.scss";
import PostContainer from "./PostContainer/PostContainer";

const cn = classNames.bind(styles);

interface RegistseredMyShopProps {
  lastRef: (node?: Element | null | undefined) => void;
  myShopData: {
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
  }[];
}

export default function RegistseredMyShop({ lastRef, myShopData }: RegistseredMyShopProps) {
  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myRegisterdShop")}>내가 등록한 공고</p>
        <div className={cn("gridContainer")}>
          {myShopData?.map((item) => (
            <div key={item.item.id}>
              <PostContainer className={cn("size")} myShopData={item} />
            </div>
          ))}
        </div>
      </div>
      <div ref={lastRef} />
    </div>
  );
}
