import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import IC_CLOSE from "@/images/ic_close.svg";

import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";
import { usePutUserData } from "@/shared/apis/api-hooks";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import PostProfileForm from "./components/PostProfileForm";

import styles from "./PostProfileLayout.module.scss";

const cn = classNames.bind(styles);

export default function PostNoticeLayout() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    address: "",
    bio: "",
  });

  const { userId } = useUserDataStore();
  const { mutate: putUserData, error } = usePutUserData(inputValue);

  const onClose = () => {
    router.push(`/users/${userId}`);
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
    putUserData();
  };

  const handleConfirmButtonClick = () => {
    if (error) {
      setIsModalOpen(false);
      return;
    }
    router.push(`/users/${userId}`);
  };

  return (
    <div className={cn("background")}>
      <div className={cn("container")}>
        <div className={cn("inputHeader")}>
          <div className={cn("text")}>내 프로필</div>
          <IC_CLOSE className={cn("icon")} fill="#000" onClick={onClose} />
        </div>
        <PostProfileForm
          handleModalOpen={handleModalOpen}
          handleInputChange={handleInputChange}
          onOptionClick={onOptionClick}
          inputValue={inputValue}
        />
      </div>
      {isModalOpen && (
        <ConfirmModal
          className={cn("alertModal")}
          message={error?.message ? "잘못된 요청입니다." : "프로필이 동록되었습니다."}
          onClick={handleConfirmButtonClick}
        />
      )}
    </div>
  );
}
