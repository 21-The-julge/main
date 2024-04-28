import classNames from "classnames/bind";
import { AllNotices } from "@/page-layout/NoticesLayout/components";

import styles from "./SearchLayout.module.scss";

const cn = classNames.bind(styles);

export default function SearchLayout() {
  return (
    <div className={cn("container")}>
      <AllNotices />
    </div>
  );
}
