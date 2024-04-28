import { END_POINT } from "@/common/constants/index";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import { PostSignUpProps, PutUserDataProps } from "../apiType";

// 1. 회원가입 POST 요청
export function usePostSignUp() {
  return useMutation({
    mutationFn: async (bodyData: PostSignUpProps) => {
      const { data } = await axiosInstance.post(END_POINT.USERS, bodyData);
      return data;
    },
  });
}
// 2. 내 정보 조회 GET 요청
export function useGetUserData() {
  const { token, userId } = useUserDataStore();
  return useQuery({
    queryKey: ["GetUserData"],
    queryFn: async () => {
      const { data } = await axiosInstanceToken(token).get(`${END_POINT.USERS}/${userId}`);
      return data;
    },
    enabled: !!token && !!userId,
  });
}
// 3. 내 정보 수정 PUT 요청
export function usePutUserData(bodyData: PutUserDataProps) {
  const { token, userId } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken(token).put(`${END_POINT.USERS}/${userId}`, bodyData);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}
