import ShowMyShop from "@/page-layout/MyShopLayout/component/MyShop/MyShop";
import RegisterdShop from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisterdShop";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import useGetMessages from "@/page-layout/MyShopLayout/hooks/useGetShopData";
import { axiosInstance } from "@/shared/apis/axiosInstance";
import { Item, ShopData } from "@/page-layout/MyShopLayout/type";

interface DataItem {
  item: Item;
}

type DataArray = DataItem[];

interface ApiData {
  shopData: ShopData | null;
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

  useEffect(() => {
    setArray((prev) => [...prev, ...(data?.pages[data.pages.length - 1].result ?? [])]);
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <RootLayout>
      <ShowMyShop myShopData={shopData} />
      {shopData ? <RegisterdShop lastRef={ref} myShopData={array} /> : null}
    </RootLayout>
  );
}
