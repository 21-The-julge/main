import RegisterMyShopLayout from "@/page-layout/RegisterMyShopLayout/component/RegisterMyShop/RegisterMyShop";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

export default function RegisterMyShop() {
  return (
    <RootLayout needFooter={false}>
      <RegisterMyShopLayout />
    </RootLayout>
  );
}
