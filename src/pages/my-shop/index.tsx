import ShowMyShop from "@/page-layout/MyShopLayout/component/MyShop/MyShop";
import styles from "@/pages/my-shop/myshop.module.scss";
import classNames from "classnames/bind";
import RegisterdShop from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisterdShop";
import axiosInstance from "../api/axiosInstance";

const cn = classNames.bind(styles);

interface ApiData {
  shopData: { name: string; category: string; address1: string; description: string; imageUrl: string };
}

export async function getServerSideProps() {
  const response = await axiosInstance.get("/shops/ae78c3af-a075-4586-bee2-21c8da59d6b2");
  const shopData = response.data.item ?? [];
  return {
    props: {
      shopData,
    },
  };
}

export default function MyShop({ shopData }: ApiData) {
  return (
    <div className={cn("container")}>
      <div style={{ height: 70, backgroundColor: "red" }} />
      <ShowMyShop myShopData={shopData} />
      {shopData ? <RegisterdShop /> : null}
      <div style={{ height: 70, backgroundColor: "red" }} />
    </div>
  );
}
