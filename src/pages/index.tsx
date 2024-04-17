import { TOAST_TEXT } from "@/common/components/Toast/constants/ToastText";
import setToast from "@/common/components/Toast/utils/setToast";
import React from "react";

export default function Home() {
  return (
    <div>
      <button type="button" onClick={() => setToast(TOAST_TEXT.success, "ㅇㅇㅇㅇ!")}>
        success
      </button>
      <hr />
      <button type="button" onClick={() => setToast(TOAST_TEXT.error, "ㅇㅇㅇㅇ!")}>
        error
      </button>
      <hr />

      <button type="button" onClick={() => setToast(TOAST_TEXT.info, "ㅇㅇㅇㅇ!")}>
        info
      </button>
      <hr />

      <button type="button" onClick={() => setToast(TOAST_TEXT.warn, "ㅇㅇㅇㅇ!")}>
        warn
      </button>
    </div>
  );
}
