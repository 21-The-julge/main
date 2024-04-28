import { END_POINT } from "@/common/constants/index";
import { useMutation } from "@tanstack/react-query";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { axiosInstance } from "../axiosInstance";
import { PostSignInParams } from "../apiType";

// 로그인 POST 요청
export default function usePostSignIn() {
  const { setToken, setUserId, setType, setIsLoggedIn } = useUserDataStore();
  return useMutation({
    mutationFn: async (bodyData: PostSignInParams) => {
      const { data } = await axiosInstance.post(END_POINT.TOKEN, bodyData);
      return data;
    },
    onSuccess: (data) => {
      setToken(data.item.token);
      setUserId(data.item.user.item.id);
      setType(data.item.user.item.type);
      setIsLoggedIn(Boolean(data.item.token));

      localStorage.setItem("token", data.item.token);
      localStorage.setItem("type", data.item.user.item.type);
    },
  });
}
