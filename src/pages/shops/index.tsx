import MyShop from "@/page-layout/MyShopLayout/component/MyShop/MyShop";
import RegisterdMyShop from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisteredMyShop/RegisteredMyshop";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

import useGetId from "@/shared/hooks/useGetId";
import { useGetShopData } from "@/shared/apis/api-hooks";

export default function MyShopPage() {
  const { shopId } = useGetId();
  const { data: shopDataList } = useGetShopData(shopId);
  const filterShopData = shopDataList?.item;

  return (
    <RootLayout>
      <MyShop myShopData={filterShopData} />
      {filterShopData ? <RegisterdMyShop shopId={shopId} /> : null}
    </RootLayout>
  );
}
