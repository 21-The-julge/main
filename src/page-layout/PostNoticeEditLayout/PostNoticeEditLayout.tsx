import { ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import IC_CLOSE from "@/images/ic_close.svg";

import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";
import { usePutNoticeData, useGetSpecificShopNoticeData } from "@/shared/apis/api-hooks/useNotices";
import GetUserData from "@/shared/hooks/getUserData";
import PostNoticeEditForm from "./components/PostNoticeEditForm";

import styles from "./PostNoticeEditLayout.module.scss";

const cn = classNames.bind(styles);

export default function PostNoticeLayout() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { shopId, noticeId } = GetUserData();

  const { data } = useGetSpecificShopNoticeData({ shopId, noticeId });

  const [inputValue, setInputValue] = useState({
    hourlyPay: 0,
    startsAt: "", // 양식: 2023-12-23T00:00:00Z
    workhour: 0,
    description: "",
  });

  const { mutate: putNoticeData, error } = usePutNoticeData({ shopId, noticeId, bodyData: inputValue });

  useEffect(() => {
    setInputValue({
      hourlyPay: data?.item?.hourlyPay,
      startsAt: data?.item?.startsAt,
      workhour: data?.item?.workhour,
      description: data?.item?.description,
    });
  }, [data]);

  const onClose = () => {
    router.push(`/shops/${shopId}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
    putNoticeData();
  };

  const handleConfirmButtonClick = () => {
    if (error) {
      setIsModalOpen(false);
      return;
    }
    router.push(`/shops/${shopId}/notices/${noticeId}`);
  };

  return (
    <div className={cn("background")}>
      <div className={cn("container")}>
        <div className={cn("inputHeader")}>
          <div className={cn("text")}>공고 수정</div>
          <IC_CLOSE className={cn("icon")} fill="#000" onClick={onClose} />
        </div>
        <PostNoticeEditForm
          handleModalOpen={handleModalOpen}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
        />
      </div>
      {isModalOpen && (
        <ConfirmModal
          className={cn("alertModal")}
          message={error?.message ? "잘못된 요청입니다." : "공고가 수정되었습니다."}
          onClick={handleConfirmButtonClick}
        />
      )}
    </div>
  );
}
