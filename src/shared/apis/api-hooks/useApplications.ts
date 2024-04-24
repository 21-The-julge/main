import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import {
  GetShopApplicationsDataParams,
  PostApplicationDataParams,
  PutApplicationDataParams,
  GetUserApplicationsDataProps,
} from "../apiType";

// 1. 가게의 특정 공고의 지원 목록 조회 GET 요청
export async function useGetShopApplicationsData({ shopId, noticeId, offset, limit }: GetShopApplicationsDataParams) {
  return useQuery({
    queryKey: ["GetShopApplicationsData", { shopId, noticeId, offset, limit }],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/shops/${shopId}/notices/${noticeId}/applications`, {
        params: { offset, limit },
      });
      return data;
    },
  });
}

// 2. 가게의 특정 공고의 지원 등록 POST 요청
export async function usePostApplicationData({ shopId, noticeId }: PostApplicationDataParams) {
  return useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken.post(`/shops/${shopId}/notices/${noticeId}/applications`);
      return data;
    },
  });
}

// 3. 가게의 특정 공고 지원 승인, 거절 또는 취소 PUT 요청
export async function usePutApplicationData({ shopId, noticeId, applicationId, bodydata }: PutApplicationDataParams) {
  return useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken.put(
        `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
        bodydata,
      );
      return data;
    },
  });
}

// 4. 유저의 지원 목록 조회 GET 요청
export async function useGetUserApplicationsData(params?: GetUserApplicationsDataProps) {
  const { offset, limit } = params || {};

  return useQuery({
    queryKey: ["GetUserApplicationsData", { offset, limit }],
    queryFn: async () => {
      const userId = sessionStorage.getItem("userId");
      const { data } = await axiosInstanceToken.get(`/users/${userId}/applications`, { params: { offset, limit } });
      return data;
    },
  });
}
