import ShowMyShop from "@/page-layout/MyShopLayout/component/MyShop/MyShop";
import RegisterdShop from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisterdShop";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import useGetMessages from "@/page-layout/MyShopLayout/hooks/useGetShopData";
import { axiosInstance } from "@/shared/apis/axiosInstance";
import { Item, ShopData } from "@/page-layout/MyShopLayout/type";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import GetUserData from "@/shared/hooks/getUserData";
import { useGetUserData } from "@/shared/apis/api-hooks/useUsers";
import { useGetShopData } from "@/shared/apis/api-hooks";

interface DataItem {
  item: Item;
}

type DataArray = DataItem[];

interface ApiData {
  shopData: ShopData | null;
}

export default function MyShop() {
  const { setShopIdFromData } = GetUserData();
  setShopIdFromData();
  const { shopId } = useUserDataStore();
  const { data: shopDataList } = useGetShopData(shopId);
  console.log(shopDataList);
  const filterShopData = shopDataList?.data.item;

  const [ref, inView] = useInView();
  const { data, fetchNextPage, hasNextPage } = useGetMessages();
  const registerdShopList = data?.pages;
  const [array, setArray] = useState<DataArray>([]);

  if (registerdShopList !== undefined) {
    for (let i = 0; i < registerdShopList?.length; i += 1) {
      // eslint-disable-next-line no-restricted-syntax
      for (const j of registerdShopList[i].result) {
        j.item.imageUrl = filterShopData?.imageUrl;
        j.item.name = filterShopData?.name;
        j.item.address1 = filterShopData?.address1;
        j.item.originalHourlyPay = filterShopData?.originalHourlyPay;
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
      <ShowMyShop myShopData={filterShopData} />
      {filterShopData ? <RegisterdShop lastRef={ref} myShopData={array} /> : null}
    </RootLayout>
  );
}
