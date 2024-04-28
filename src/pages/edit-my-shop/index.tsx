import RootLayout from "@/shared/components/RootLayout/RootLayout";
import EditMyShopLayout from "@/page-layout/EditMyShopLayout/component/EditMyShop/EditMyShop";

export default function EditMyShop() {
  return (
    <RootLayout needFooter={false}>
      <EditMyShopLayout />
    </RootLayout>
  );
}
