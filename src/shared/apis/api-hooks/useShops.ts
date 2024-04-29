import { END_POINT } from "@/common/constants/index";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import { PostShopDataParams, PutShopDataParams } from "../apiType";

// 1. 가게 등록 POST 요청
export function usePostShopData() {
  const { token } = useUserDataStore();
  return useMutation({
    mutationFn: async (bodyData: PostShopDataParams) => {
      const { data } = await axiosInstanceToken(token).post(END_POINT.SHOPS, bodyData);
      return data;
    },
  });
}

// 2. 가게 정보 조회 GET 요청
export function useGetShopData(shopId: string | null) {
  return useQuery({
    queryKey: ["GetShopData", shopId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`${END_POINT.SHOPS}/${shopId}`);
      return data;
    },
    enabled: !!shopId,
  });
}

// 3. 가게 정보 수정 PUT 요청
export function usePutShopData(shopId: string | null, bodyData: PutShopDataParams) {
  const { token } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken(token).put(`${END_POINT.SHOPS}/${shopId}`, bodyData);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}
