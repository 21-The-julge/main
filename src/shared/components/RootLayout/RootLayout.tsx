import { ReactNode } from "react";
import Gnb from "@/common/components/gnb/Gnb";
import Footer from "@/common/components/footer/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <Gnb />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
