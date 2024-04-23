import ShowMyShop from "@/page-layout/MyShopLayout/component/MyShop/MyShop";
import styles from "@/pages/my-shop/myshop.module.scss";
import classNames from "classnames/bind";
import RegisterdShop from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisterdShop";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import useGetMessages from "@/page-layout/MyShopLayout/hooks/useGetShopData";
import { axiosInstance } from "@/shared/apis/axiosInstance";

const cn = classNames.bind(styles);

interface Item {
  address1: string;
  closed: boolean;
  description: string;
  hourlyPay: number;
  id: string;
  imageUrl: string;
  name: string;
  originalHourlyPay: number;
  startsAt: string;
  workhour: number;
}

interface DataItem {
  item: Item;
}

type DataArray = DataItem[];

interface ApiData {
  shopData: {
    name: string;
    category: string;
    address1: string;
    imageUrl: string;
    originalHourlyPay: number;
    description: string;
    id: string;
  } | null;
}

export async function getServerSideProps() {
  let shopData;

  try {
    const response = await axiosInstance.get("shops/ae78c3af-a075-4586-bee2-21c8da59d6b2");
    shopData = response?.data?.item ?? [];
  } catch (error) {
    shopData = null;
  }

  return {
    props: {
      shopData,
    },
  };
}

export default function MyShop({ shopData }: ApiData) {
  const [ref, inView] = useInView();
  const { data, fetchNextPage, hasNextPage } = useGetMessages();
  const registerdShopList = data?.pages;
  const [array, setArray] = useState<DataArray>([]);

  // eslint-disable-next-line no-restricted-syntax
  if (registerdShopList !== undefined) {
    for (let i = 0; i < registerdShopList?.length; i += 1) {
      // eslint-disable-next-line no-restricted-syntax
      for (const j of registerdShopList[i].result) {
        j.item.imageUrl = shopData?.imageUrl;
        j.item.name = shopData?.name;
        j.item.address1 = shopData?.address1;
        j.item.originalHourlyPay = shopData?.originalHourlyPay;
      }
    }
  }

  const height = shopData ? "" : "apply";

  useEffect(() => {
    setArray((prev) => [...prev, ...(data?.pages[data.pages.length - 1].result ?? [])]);
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  console.log(array);

  return (
    <div className={cn("container", height)}>
      <div style={{ height: 70, backgroundColor: "red" }} />
      <ShowMyShop myShopData={shopData} />
      {shopData ? <RegisterdShop lastRef={ref} myShopData={array} /> : null}
      <div style={{ height: 70, backgroundColor: "red" }} />
    </div>
  );
}
