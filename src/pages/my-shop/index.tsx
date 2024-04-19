import ShopRegister from "@/page-layout/MyShopLayout/component/ShopRegister/ShopRegister";
import styles from "@/pages/my-shop/myshop.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export default function MyShop() {
  return (
    <div className={cn("container")}>
      <div style={{ height: 70, backgroundColor: "red" }} />
      <ShopRegister />
      <div style={{ height: 70, backgroundColor: "red" }} />
    </div>
  );
}
