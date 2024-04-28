import { ReactNode, useState } from "react";
import WarnModal from "@/common/components/Modal/WarnModal/WarnModal";
import { Button } from "@/common/components";
import styles from "./NoticeDetailButtonAndModal.module.scss";
import classNames from "classnames/bind";
import AlertModal from "@/common/components/Modal/AlertModal/AlertModal";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useGetUserData, usePostApplicationData, usePutApplicationData } from "@/shared/apis/api-hooks";

interface NoticeDetailButtonAndModalProps {
  shopId: string;
  noticeId: string;
  myNotice: boolean;
}
interface PutApplicationDataStatus {
  status: "canceled" | "accepted" | "rejected";
}
const cn = classNames.bind(styles);

export default function NoticeDetailButtonAndModal({ shopId, noticeId, myNotice }: NoticeDetailButtonAndModalProps) {
  const { data: getUserData } = useGetUserData();
  const { userId: applicationId, type, isLoggedIn } = useUserDataStore();
  const { data: postApplicationData, mutate: application } = usePostApplicationData({ shopId, noticeId });
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태를 관리하는 state
  const bodydata: PutApplicationDataStatus = {
    status: "canceled",
  };
  const {
    data: putApplicationData,
    error,
    mutate: applicationCancel,
  } = usePutApplicationData({
    shopId,
    noticeId,
    applicationId,
    bodydata,
  });
  const [buttonText, setButtonText] = useState(myNotice ? "공고 편집하기" : "신청하기");
  const [currentModal, setCurrentModal] = useState<ReactNode>(null);
  const currentUserprofile = getUserData?.item?.name;

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleClick = () => {
    modalProduce();
    toggleModal();
    if (buttonText === "신청하기" && currentUserprofile) {
      console.log("신청하기", "put넣어야함");
    } else if (buttonText === "취소하기" && currentUserprofile) {
      //usePutApplicationData({ shopId, noticeId, applicationId, bodydata });
      console.log("취소하기", "put넣어야함");
    } else if (buttonText === "공고 편집하기") {
      //페이지 이동
      console.log("페이지 이동해야함");
    }
  };

  const modalProduce = () => {
    if (!isLoggedIn) {
      setCurrentModal(<WarnModal message="로그인을 먼저 해주세요" className={cn("modal")} onClick={toggleModal} />);
    } else {
      if (type === "employer") {
        if (currentUserprofile) {
          setCurrentModal(
            buttonText === "신청하기" ? (
              <AlertModal
                message="신청 하시겠어요?"
                className={cn("modal")}
                onCancelButtonClick={toggleModal}
                onConfirmButtonClick={() => {
                  application();
                  toggleModal();
                  setButtonText("취소하기");
                }}
                cancelButtonText="아니오"
                confirmButtonText="신청하기"
              />
            ) : (
              <AlertModal
                message="신청을 취소 하시겠어요?"
                className={cn("modal")}
                onCancelButtonClick={toggleModal}
                onConfirmButtonClick={() => {
                  applicationCancel();
                  toggleModal();
                  setButtonText("신청하기");
                }}
                cancelButtonText="아니오"
                confirmButtonText="취소하기"
              />
            ),
          );
        } else {
          setCurrentModal(
            <WarnModal message="내 프로필을 먼저 등록해 주세요" className={cn("modal")} onClick={toggleModal} />,
          );
        }
      } else {
        setCurrentModal(
          myNotice ? null : (
            <WarnModal message="사장님은 지원할 수 없습니다" className={cn("modal")} onClick={toggleModal} />
          ),
        );
      }
    }
  };
  return (
    <>
      <Button
        type="button"
        size="large"
        variant="outline"
        color="primary"
        onClick={handleClick}
        className={cn("button")}
      >
        {buttonText}
      </Button>
      {isModalOpen && currentModal}
    </>
  );
}
