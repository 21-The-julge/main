import Modal from "@/common/components/Modal/Modal";
import styles from "@/pages/index.module.scss";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClickConfirm = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <button type="button" onClick={handleClickConfirm}>
        모달
      </button>
      {isModalOpen && (
        <div>
          <Modal>
            <Modal.Warn
              message="내 프로필을 먼저 등록해 주세요."
              onClick={handleClickConfirm}
              className={styles.test}
            />
          </Modal>
        </div>
      )}
    </>
  );
}
