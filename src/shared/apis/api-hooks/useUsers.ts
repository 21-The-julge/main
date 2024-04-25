import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import { PostSignUpProps, PutUserDataProps } from "../apiType";

// 1. 회원가입 POST 요청
export async function usePostSignUp(bodyData: PostSignUpProps) {
  return useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstance.post("/users", bodyData);
      return data;
    },
  });
}
// 2. 내 정보 조회 GET 요청
export async function useGetUserData() {
  return useQuery({
    queryKey: ["GetUserData"],
    queryFn: async () => {
      const userId = sessionStorage.getItem("userId");
      const { data } = await axiosInstanceToken.get(`/users/${userId}`);
      return data;
    },
  });
}
// 3. 내 정보 수정 PUT 요청
export async function usePutUserData(bodyData: PutUserDataProps) {
  return useMutation({
    mutationFn: async () => {
      const userId = sessionStorage.getItem("userId");
      const { data } = await axiosInstanceToken.put(`/users/${userId}`, bodyData);
      return data;
    },
  });
}
