import { TOAST_TEXT } from "@/common/components/Toast/constants/ToastText";
import openToast from "@/common/components/Toast/utils/openToast";
import React from "react";

export default function Home() {
  return (
    <div>
      <button type="button" onClick={() => openToast(TOAST_TEXT.success, "ㅇㅇㅇㅇ!", 1000)}>
        success
      </button>
      <hr />
      <button type="button" onClick={() => openToast(TOAST_TEXT.error, "ㅇㅇㅇㅇ!")}>
        error
      </button>
      <hr />

      <button type="button" onClick={() => openToast(TOAST_TEXT.info, "ㅇㅇㅇㅇ!")}>
        info
      </button>
      <hr />

      <button type="button" onClick={() => openToast(TOAST_TEXT.warn, "ㅇㅇㅇㅇ!")}>
        warn
      </button>
    </div>
  );
}
