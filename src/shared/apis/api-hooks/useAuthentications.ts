import { useMutation } from "@tanstack/react-query";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { axiosInstance } from "../axiosInstance";
import { PostSignInParams } from "../apiType";

// 로그인 POST 요청
export default function usePostSignIn(bodyData: PostSignInParams) {
  const { setToken, setUserId, setType, setLoggedIn } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstance.post("/token", bodyData);
      return data;
    },
    onSuccess: (data) => {
      setToken(data.item.token);
      setUserId(data.item.user.item.id);
      setType(data.item.user.item.type);
      setLoggedIn(Boolean(data.item.token));
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}
