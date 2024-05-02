import Router from "next/router";
import RegisterMyShopLayout from "@/page-layout/RegisterMyShopLayout/component/RegisterMyShop/RegisterMyShop";
import RootLayout from "@/shared/components/RootLayout/RootLayout";
import { ROUTE } from "@/common/constants/";
import useUserDataStore from "@/shared/hooks/useUserDataStore";

export default function RegisterMyShop() {
  const { type } = useUserDataStore();
  if (type === "employee") {
    Router.replace(ROUTE.HOME);
  }

  return (
    <RootLayout needFooter={false}>
      <RegisterMyShopLayout />
    </RootLayout>
  );
}
