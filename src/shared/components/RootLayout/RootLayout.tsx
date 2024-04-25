import { ReactNode } from "react";
import Gnb from "@/common/components/Gnb/Gnb";
import Footer from "@/common/components/Footer/Footer";
import styles from "@/shared/components/RootLayout/RootLayout.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={cn("container")}>
      <Gnb />
      <main className={cn("children")}>{children}</main>
      <Footer />
    </div>
  );
}
