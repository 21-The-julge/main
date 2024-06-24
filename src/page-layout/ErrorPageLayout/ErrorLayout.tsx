import classNames from "classnames/bind";
import IcLogo from "@/images/ic_logo.svg";
import Link from "next/link";
import { ROUTE } from "@/common/constants/";
import styles from "./ErrorLayout.module.scss";

const cn = classNames.bind(styles);

export default function ErrorPage() {
  return (
    <div className={cn("background")}>
      <div className={cn("container")}>
        <div className={cn("content")}>
          <Link href={ROUTE.HOME}>
            <IcLogo className={cn("logo")} />
          </Link>
          <div className={cn("text")}>404 - Page Not Found</div>
        </div>
      </div>
    </div>
  );
}
