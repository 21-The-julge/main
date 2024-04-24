import { AllNotices } from "@/page-layout/NoticesLayout/components";

import classNames from "classnames/bind";
import styles from "./notices.module.scss";

const cn = classNames.bind(styles);

export default function NoticesPage() {
  return (
    <div className={cn("container")}>
      <div>
        <div>Personalized Notices</div>

        <div className={cn("allNotices")}>
          <AllNotices />
        </div>
      </div>
    </div>
  );
}
