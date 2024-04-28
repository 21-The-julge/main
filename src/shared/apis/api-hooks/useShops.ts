import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import { PostShopDataParams, PutShopDataParams } from "../apiType";

// 1. 가게 등록 POST 요청
export function usePostShopData(bodyData: PostShopDataParams) {
  const { token } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken(token).post("/shops", bodyData);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}

// 2. 가게 정보 조회 GET 요청
export function useGetShopData(shopId: string | null) {
  return useQuery({
    queryKey: ["GetShopData", shopId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/shops/${shopId}`);
      return data;
    },
    enabled: !!shopId,
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
