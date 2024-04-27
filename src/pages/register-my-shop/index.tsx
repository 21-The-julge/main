import RegisterMyShop from "@/page-layout/RegisterMyShopLayout/component/RegisterMyShop/RegisterMyShop";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

export default function MyShop() {
  return (
    <RootLayout needFooter={false}>
      <RegisterMyShop />
    </RootLayout>
  );
}
