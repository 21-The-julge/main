import { useRouter } from "next/router";
import MyShop from "@/page-layout/MyShopLayout/component/MyShop/MyShop";
import RegisterdMyShop from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisteredMyShop/RegisteredMyshop";
import RootLayout from "@/shared/components/RootLayout/RootLayout";
import { ROUTE } from "@/common/constants/";

import useGetId from "@/shared/hooks/useGetId";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useGetShopData } from "@/shared/apis/api-hooks";

export default function MyShopPage() {
  const router = useRouter();
  const { shopId } = useGetId();
  const { type } = useUserDataStore();
  const { data: shopDataList } = useGetShopData(shopId);
  const filterShopData = shopDataList?.item;

  if (type === "employee") {
    router.replace(ROUTE.HOME);
  }
  return (
    <RootLayout>
      <MyShop myShopData={filterShopData} />
      {filterShopData ? <RegisterdMyShop shopId={shopId} /> : null}
    </RootLayout>
  );
}
