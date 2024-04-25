import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import { PostSignUpProps, PutUserDataProps } from "../apiType";

// 1. 회원가입 POST 요청
export async function usePostSignUp(bodyData: PostSignUpProps) {
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstance.post("/users", bodyData);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}
// 2. 내 정보 조회 GET 요청
export async function useGetUserData() {
  const { token, userId } = useUserDataStore();
  return useQuery({
    queryKey: ["GetUserData"],
    queryFn: async () => {
      const { data } = await axiosInstanceToken(token).get(`/users/${userId}`);
      return data;
    },
  });
}
// 3. 내 정보 수정 PUT 요청
export async function usePutUserData(bodyData: PutUserDataProps) {
  const { token, userId } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken(token).put(`/users/${userId}`, bodyData);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}
