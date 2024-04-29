import { ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import IcClose from "@/images/ic_close.svg";

import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";
import { useGetUserData, usePutUserData } from "@/shared/apis/api-hooks";
import PostProfileEditForm from "./components/PostProfileEditForm";

import styles from "./PostProfileEditLayout.module.scss";

const cn = classNames.bind(styles);

export default function PostNoticeLayout() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useGetUserData();

  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    address: "",
    bio: "",
  });

  const { mutate: putUSerData, error } = usePutUserData(inputValue);

  useEffect(() => {
    setInputValue({
      name: data?.item?.name,
      phone: data?.item?.phone,
      address: data?.item?.address,
      bio: data?.item?.bio,
    });
  }, [data]);

  const onClose = () => {
    router.push(`/users`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const onOptionClick = (option: string) => {
    setInputValue((prev) => ({ ...prev, address: option }));
  };

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
    putUSerData();
  };

  const handleConfirmButtonClick = () => {
    if (error) {
      setIsModalOpen(false);
      return;
    }
    router.push(`/users`);
  };

  return (
    <div className={cn("background")}>
      <div className={cn("container")}>
        <div className={cn("inputHeader")}>
          <div className={cn("text")}>내 프로필 수정</div>
          <IcClose className={cn("icon")} fill="#000" onClick={onClose} />
        </div>
        <PostProfileEditForm
          handleModalOpen={handleModalOpen}
          handleInputChange={handleInputChange}
          onOptionClick={onOptionClick}
          inputValue={inputValue}
        />
      </div>
      {isModalOpen && (
        <ConfirmModal
          className={cn("alertModal")}
          message={error?.message ? "잘못된 요청입니다." : "프로필 수정이 완료되었습니다."}
          onClick={handleConfirmButtonClick}
        />
      )}
    </div>
  );
}
