import { AllNotices } from "@/page-layout/NoticesLayout/components";
import PersonalNotices from "@/page-layout/NoticesLayout/components/PersonalNotices/PersonalNotices";
import classNames from "classnames/bind";
import styles from "./notices.module.scss";

const cn = classNames.bind(styles);

export default function NoticesPage() {
  return (
    <div className={cn("container")}>
      <div className={cn("content")}>
        <PersonalNotices />
        <div className={cn("allNotices")}>
          <AllNotices />
        </div>
      </div>
    </div>
  );
}
