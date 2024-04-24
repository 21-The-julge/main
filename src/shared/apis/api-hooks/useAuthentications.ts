import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance";
import { PostSignInParams } from "../apiType";

// 로그인 POST 요청 - 세션 스토리지에 token, userId 저장
export default async function usePostSignIn(bodyData: PostSignInParams) {
  return useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstance.post("/token", bodyData);
      if (!data) {
        return data;
      }
      sessionStorage.setItem("token", data.item.token);
      sessionStorage.setItem("userId", data.item.user.item.id);
      return data;
    },
  });
}
