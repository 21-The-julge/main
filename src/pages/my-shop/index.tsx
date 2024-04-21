import ShowMyShop from "@/page-layout/MyShopLayout/component/MyShop/MyShop";
import styles from "@/pages/my-shop/myshop.module.scss";
import classNames from "classnames/bind";
import RegisterdShop from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisterdShop";
import axiosInstance from "../api/axiosInstance";

const cn = classNames.bind(styles);

interface ApiData {
  shopData: { name: string; category: string; address1: string; description: string; imageUrl: string } | null;
  myRegisterDataList: PostContainerProps[];
}

interface MyRegisterResponse {
  item: {
    id: string;
  };
}

interface PostContainerProps {
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

export async function getServerSideProps() {
  let shopData;
  let myRegisterData;
  let myRegisterDataList: PostContainerProps[] | null = [];

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

  const promises = myRegisterData.map(async (i: MyRegisterResponse) => {
    try {
      const response = await axiosInstance.get(`/shops/ae78c3af-a075-4586-bee2-21c8da59d6b2/notices/${i?.item?.id}`);
      myRegisterDataList?.push(response.data);
    } catch (error) {
      myRegisterDataList = null;
    }
  });

  await Promise.all(promises);
  return {
    props: {
      shopData,
      myRegisterDataList,
    },
  };
}

export default function MyShop({ shopData, myRegisterDataList }: ApiData) {
  const height = shopData ? "" : "apply";
  return (
    <div className={cn("container", height)}>
      <div style={{ height: 70, backgroundColor: "red" }} />
      <ShowMyShop myShopData={shopData} />
      {shopData ? <RegisterdShop myShopData={myRegisterDataList} /> : null}
      <div style={{ height: 70, backgroundColor: "red" }} />
    </div>
  );
}
