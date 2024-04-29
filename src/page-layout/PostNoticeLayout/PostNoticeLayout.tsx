import { useRouter } from "next/router";
import classNames from "classnames/bind";
import IcClose from "@/images/ic_close.svg";


import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";
import { usePostNoticeData } from "@/shared/apis/api-hooks/useNotices";
import useGetId from "@/shared/hooks/useGetId";

import PostNoticeForm from "./components/PostNoticeForm";

import styles from "./PostNoticeLayout.module.scss";

const cn = classNames.bind(styles);

export default function PostNoticeLayout() {
  const router = useRouter();

  const { shopId, noticeId } = useGetId();
  const { mutate: postNoticeData, error } = usePostNoticeData({ shopId, bodyData: inputValue });


  const onClose = () => {
    router.push("/shops");
  };

  return (
    <div className={cn("background")}>
      <div className={cn("container")}>
        <div className={cn("inputHeader")}>
          <div className={cn("text")}>공고 등록</div>
          <IcClose className={cn("icon")} fill="#000" onClick={onClose} />
        </div>
        <PostNoticeForm />
      </div>
    </div>
  );
}
