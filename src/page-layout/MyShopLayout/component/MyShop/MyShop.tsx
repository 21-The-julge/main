import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/MyShop/MyShop.module.scss";

import RegisterMyShop from "@/page-layout/MyShopLayout/component/MyShop/ShopRegister/ShopRegister";
import ShowMyShop from "./ShowMyShop/ShowMyShop";
import { ShopData } from "../../type";

const cn = classNames.bind(styles);

interface MyShopProps {
  myShopData: ShopData | null;
}

export default function MyShop({ myShopData }: MyShopProps) {
  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myShop")}>내 가게</p>
        {myShopData ? <ShowMyShop myShopData={myShopData} /> : <RegisterMyShop />}
      </div>
    </div>
  );
}
