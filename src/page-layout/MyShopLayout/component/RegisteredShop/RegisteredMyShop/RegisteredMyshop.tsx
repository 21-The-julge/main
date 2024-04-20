import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisteredMyShop/RegisteredMyShop.module.scss";
import PostContainer from "./PostContainer/PostContainer";

const cn = classNames.bind(styles);

interface RegistseredMyShopProps {
  myShopData:
    | {
        item: {
          id: string;
        };
      }[]
    | null;
}

export default function RegistseredMyShop({ myShopData }: RegistseredMyShopProps) {
  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myRegisterdShop")}>내가 등록한 공고</p>
        <div className={cn("gridContainer")}>
          {myShopData?.map((item) => (
            <PostContainer className={cn("size")} key={item.item.id} myShopDataId={item.item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
