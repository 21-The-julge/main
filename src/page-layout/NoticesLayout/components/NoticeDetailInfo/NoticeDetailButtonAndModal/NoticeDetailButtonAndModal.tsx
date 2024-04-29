import { ReactNode, useState } from "react";
import WarnModal from "@/common/components/Modal/WarnModal/WarnModal";
import { Button } from "@/common/components";
import classNames from "classnames/bind";
import AlertModal from "@/common/components/Modal/AlertModal/AlertModal";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { ApplicationListType } from "@/page-layout/NoticesLayout/type";
import {
  useGetShopApplicationsData,
  useGetUserData,
  usePostApplicationData,
  usePutApplicationData,
} from "@/shared/apis/api-hooks";
import { useRouter } from "next/router";
import { ROUTE } from "@/common/constants/index";
import styles from "./NoticeDetailButtonAndModal.module.scss";

interface NoticeDetailButtonAndModalProps {
  shopId: string;
  noticeId: string;
  myNotice: boolean;
  isPast: boolean;
  closed: boolean;
}

const cn = classNames.bind(styles);

export default function NoticeDetailButtonAndModal({
  shopId,
  noticeId,
  myNotice,
  isPast,
  closed,
}: NoticeDetailButtonAndModalProps) {
  const { userId, type, isLoggedIn } = useUserDataStore();
  const { data: getUserData } = useGetUserData();
  const { mutate: application } = usePostApplicationData({ shopId, noticeId });
  const { data: applicationList } = useGetShopApplicationsData({ shopId, noticeId }) as { data: ApplicationListType };
  const applicationId =
    applicationList?.items.find((item) => item.item.user.item.id === userId)?.item.id || "applicationId not found";
  const { mutate: applicationCancel } = usePutApplicationData({
    shopId,
    noticeId,
    applicationId,
    bodydata: { status: "canceled" },
  });
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState(myNotice ? "공고 편집하기" : "신청하기");
  const [currentModal, setCurrentModal] = useState<ReactNode>(null);
  const currentUserprofile = getUserData?.item?.name;

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const modalProduce = () => {
    if (!isLoggedIn) {
      setCurrentModal(<WarnModal message="로그인을 먼저 해주세요" className={cn("modal")} onClick={toggleModal} />);
    } else if (type === "employee") {
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
  };
  const handleClick = () => {
    if (buttonText === "공고 편집하기") {
      router.push(ROUTE.POSTNOTICE);
    }
    modalProduce();
    toggleModal();
  };
  return (
    <>
      {isPast || closed ? (
        <Button type="button" className={cn("button")} size="large" disabled>
          마감
        </Button>
      ) : (
        <Button
          type="button"
          size="large"
          variant="outline"
          color="primary"
          onClick={handleClick}
          className={cn("button")}
          disabled={isPast}
        >
          {buttonText}
        </Button>
      )}
      {isModalOpen && currentModal}
    </>
  );
}
