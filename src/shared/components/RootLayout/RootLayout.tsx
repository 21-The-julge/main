import { ReactNode } from "react";
import Gnb from "@/common/components/Gnb/Gnb";
import Footer from "@/common/components/Footer/Footer";

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
