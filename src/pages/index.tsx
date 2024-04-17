import ToastText from "@/common/components/Toast/constants/ToastText";
import setToast from "@/common/components/Toast/utils/setToast";
import React from "react";

export default function Home() {
  return (
    <div>
      <button type="button" onClick={() => setToast(ToastText.success, "ㅇㅇㅇㅇ!")}>
        success
      </button>
      <hr />
      <button type="button" onClick={() => setToast(ToastText.error, "ㅇㅇㅇㅇ!")}>
        error
      </button>
      <hr />

      <button type="button" onClick={() => setToast(ToastText.info, "ㅇㅇㅇㅇ!")}>
        info
      </button>
      <hr />

      <button type="button" onClick={() => setToast(ToastText.warn, "ㅇㅇㅇㅇ!")}>
        warn
      </button>
    </div>
  );
}
