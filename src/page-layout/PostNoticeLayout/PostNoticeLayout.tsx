import { useRouter } from "next/router";
import classNames from "classnames/bind";
import IC_CLOSE from "@/images/ic_close.svg";

import GetUserData from "@/shared/hooks/getUserData";
import PostNoticeForm from "./components/PostNoticeForm";

import styles from "./PostNoticeLayout.module.scss";

const cn = classNames.bind(styles);

export default function PostNoticeLayout() {
  const router = useRouter();

  const { shopId } = GetUserData();

  const onClose = () => {
    router.push("/shops");
  };

  return (
    <div className={cn("background")}>
      <div className={cn("container")}>
        <div className={cn("inputHeader")}>
          <div className={cn("text")}>공고 등록</div>
          <IC_CLOSE className={cn("icon")} fill="#000" onClick={onClose} />
        </div>
        <PostNoticeForm />
      </div>
    </div>
  );
}
