import { useRouter } from "next/router";
import RootLayout from "@/shared/components/RootLayout/RootLayout";
import EditMyShopLayout from "@/page-layout/EditMyShopLayout/component/EditMyShop/EditMyShop";
import { ROUTE } from "@/common/constants/";
import useUserDataStore from "@/shared/hooks/useUserDataStore";

export default function EditMyShop() {
  const router = useRouter();
  const { type } = useUserDataStore();
  if (type === "employee") {
    router.replace(ROUTE.HOME);
  }

  return (
    <RootLayout needFooter={false}>
      <EditMyShopLayout />
    </RootLayout>
  );
}
