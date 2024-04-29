import MyShop from "@/page-layout/MyShopLayout/component/MyShop/MyShop";
import RegisterdMyShop from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisteredMyShop/RegisteredMyshop";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

import GetUserData from "@/shared/hooks/getUserData";
import { useGetShopData } from "@/shared/apis/api-hooks";

export default function MyShopPage() {
  const { shopId } = GetUserData();
  const { data: shopDataList } = useGetShopData(shopId);
  const filterShopData = shopDataList?.item;

  return (
    <RootLayout>
      <MyShop myShopData={filterShopData} />
      {filterShopData ? <RegisterdMyShop shopId={shopId} /> : null}
    </RootLayout>
  );
}
