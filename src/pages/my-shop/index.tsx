import ShowMyShop from "@/page-layout/MyShopLayout/component/MyShop/MyShop";
import styles from "@/pages/my-shop/myshop.module.scss";
import classNames from "classnames/bind";
import RegisterdShop from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisterdShop";
import axiosInstance from "../api/axiosInstance";

const cn = classNames.bind(styles);

interface ApiData {
  shopData: { name: string; category: string; address1: string; description: string; imageUrl: string } | null;
  myRegisterData:
    | {
        item: {
          id: string;
        };
      }[]
    | null;
}

export async function getServerSideProps() {
  let shopData;
  let myRegisterData;
  try {
    const response = await axiosInstance.get("shops/ae78c3af-a075-4586-bee2-21c8da59d6b2");
    shopData = response?.data?.item ?? [];
  } catch (error) {
    shopData = null;
  }

  try {
    const myRegisterResponse = await axiosInstance.get("shops/ae78c3af-a075-4586-bee2-21c8da59d6b2/notices");
    myRegisterData = myRegisterResponse?.data?.items ?? [];
  } catch (error) {
    myRegisterData = null;
  }

  return {
    props: {
      shopData,
      myRegisterData,
    },
  };
}

export default function MyShop({ shopData, myRegisterData }: ApiData) {
  const height = shopData ? "" : "apply";
  return (
    <div className={cn("container", height)}>
      <div style={{ height: 70, backgroundColor: "red" }} />
      <ShowMyShop myShopData={shopData} />
      {shopData ? <RegisterdShop myShopData={myRegisterData} /> : null}
      <div style={{ height: 70, backgroundColor: "red" }} />
    </div>
  );
}
