import Router from "next/router";
import RootLayout from "@/shared/components/RootLayout/RootLayout";
import EditMyShopLayout from "@/page-layout/EditMyShopLayout/component/EditMyShop/EditMyShop";
import { ROUTE } from "@/common/constants/";
import useUserDataStore from "@/shared/hooks/useUserDataStore";

export default function EditMyShop() {
  const { type } = useUserDataStore();
  if (type === "employee") {
    Router.replace(ROUTE.HOME);
  }

  return (
    <RootLayout needFooter={false}>
      <EditMyShopLayout />
    </RootLayout>
  );
}
