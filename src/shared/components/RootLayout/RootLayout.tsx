import { ReactNode } from "react";
import Gnb from "@/common/components/Gnb/Gnb";
import Footer from "@/common/components/Footer/Footer";

interface RootLayoutProps {
  children: ReactNode;
  needFooter?: boolean;
}

export default function RootLayout({ children, needFooter = true }: RootLayoutProps) {
  return (
    <div>
      <Gnb />
      <main>{children}</main>
      {needFooter && <Footer />}
    </div>
  );
}
