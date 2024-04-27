import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import { PostShopDataParams, PutShopDataParams } from "../apiType";

// 1. 가게 등록 POST 요청
export function usePostShopData(bodyData: PostShopDataParams) {
  const { token } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMWEzMjJmNS1kMmFmLTRkNWYtOGZmMi0yNzY2MTlmMGJiZTAiLCJpYXQiOjE3MTMyNDc4NTh9.XVDHsrpOvq_yLJH0jh-m5lGZwIuTFj3XCwk1tsydoYw",
      ).post("/shops", bodyData);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}

// 2. 가게 정보 조회 GET 요청
export function useGetShopData(shopId: string) {
  return useQuery({
    queryKey: ["GetShopData", shopId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/shops/${shopId}`);
      return data;
    },
  });
}

// 3. 가게 정보 수정 PUT 요청
export function usePutShopData(shopId: string, bodyData: PutShopDataParams) {
  const { token } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken(token).put(`/shops/${shopId}`, bodyData);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}
