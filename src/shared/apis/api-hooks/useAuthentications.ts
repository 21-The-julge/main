import { useMutation } from "@tanstack/react-query";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { axiosInstance } from "../axiosInstance";
import { PostSignInParams } from "../apiType";

// 로그인 POST 요청
export default function usePostSignIn() {
  const { setToken, setUserId, setType, setLoggedIn } = useUserDataStore();
  return useMutation({
    mutationFn: async (payload: PostSignInParams) => {
      const { data } = await axiosInstance.post("/token", payload);
      return data;
    },
    onSuccess: (data) => {
      setToken(data.item.token);
      setUserId(data.item.user.item.id);
      setType(data.item.user.item.type);
      setLoggedIn(Boolean(data.item.token));
    },
  });
}
