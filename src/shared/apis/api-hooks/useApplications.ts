import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import {
  GetShopApplicationsDataParams,
  PostApplicationDataParams,
  PutApplicationDataParams,
  GetUserApplicationsDataProps,
} from "../apiType";

// 1. 가게의 특정 공고의 지원 목록 조회 GET 요청
export function useGetShopApplicationsData({ shopId, noticeId, offset, limit }: GetShopApplicationsDataParams) {
  return useQuery({
    queryKey: ["GetShopApplicationsData", { shopId, noticeId, offset, limit }],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/shops/${shopId}/notices/${noticeId}/applications`, {
        params: { offset, limit },
      });
      return data;
    },
    enabled: !!shopId && !!noticeId,
  });
}

// 2. 가게의 특정 공고의 지원 등록 POST 요청
export function usePostApplicationData({ shopId, noticeId }: PostApplicationDataParams) {
  const { token } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken(token).post(`/shops/${shopId}/notices/${noticeId}/applications`);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}

// 3. 가게의 특정 공고 지원 승인, 거절 또는 취소 PUT 요청
export function usePutApplicationData({ shopId, noticeId, applicationId, bodydata }: PutApplicationDataParams) {
  const { token } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken(token).put(
        `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
        bodydata,
      );
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}

// 4. 유저의 지원 목록 조회 GET 요청
export function useGetUserApplicationsData(params?: GetUserApplicationsDataProps) {
  const { token, userId } = useUserDataStore();
  const { offset, limit } = params || {};

  return useQuery({
    queryKey: ["GetUserApplicationsData", { offset, limit }],
    queryFn: async () => {
      const { data } = await axiosInstanceToken(token).get(`/users/${userId}/applications`, {
        params: { offset, limit },
      });
      return data;
    },
    enabled: !!token && !!userId,
  });
}
