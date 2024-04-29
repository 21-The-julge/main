import { Metadata } from "next";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

import Notices from "@/page-layout/NoticesLayout/components/Notices";

export const metadata: Metadata = {
  title: "The-julge",
  description: "급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스입니다.",
};

export default function Home() {
  return (
    <RootLayout>
      <Notices />
    </RootLayout>
  );
}
