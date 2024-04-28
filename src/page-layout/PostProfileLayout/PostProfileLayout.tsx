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
  const { mutate } = usePutUserData(inputValue);

  const handleClose = () => {
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
  };

  const handleConfirmButtonClick = () => {
    mutate();
    router.push(`/users/${userId}`);
  };

  return (
    <div className={cn("background")}>
      <div className={cn("container")}>
        <div className={cn("inputHeader")}>
          <div className={cn("text")}>내 프로필</div>
          <IC_CLOSE className={cn("icon")} fill="#000" onClick={handleClose} />
        </div>
        <PostProfileForm
          handleModalOpen={handleModalOpen}
          handleInputChange={handleInputChange}
          onOptionClick={onOptionClick}
        />
      </div>
      {isModalOpen && <ConfirmModal className={cn("alertModal")} message="모달창" onClick={handleConfirmButtonClick} />}
    </div>
  );
}
