import { useQuery, useMutation } from "@tanstack/react-query";
import createQueryParams from "./apiUtills";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import {
  GetShopApplicationsDataParams,
  PostApplicationDataParams,
  PutApplicationDataParams,
  GetUserApplicationsDataProps,
} from "./apiType";

// 1. 가게의 특정 공고의 지원 목록 조회 GET 요청
export async function GetShopApplicationsData({ shopId, noticeId, offset, limit }: GetShopApplicationsDataParams) {
  return useQuery({
    queryKey: ["GetShopApplicationsData", { shopId, noticeId, offset, limit }],
    queryFn: async () => {
      const urlString = `/shops/${shopId}/notices/${noticeId}/applications?${createQueryParams({ offset, limit })}`;
      const { data } = await axiosInstance.get(urlString);
      return data;
    },
  });
}

// 2. 가게의 특정 공고의 지원 등록 POST 요청
export async function PostApplicationData({ shopId, noticeId }: PostApplicationDataParams) {
  return useMutation({
    mutationKey: ["PostApplicationData", { shopId, noticeId }],
    mutationFn: async () => {
      const urlString = `/shops/${shopId}/notices/${noticeId}/applications`;
      const { data } = await axiosInstanceToken.post(urlString);
      return data;
    },
  });
}

// 3. 가게의 특정 공고 지원 승인, 거절 또는 취소 PUT 요청
export async function PutApplicationData({ shopId, noticeId, applicationId, bodydata }: PutApplicationDataParams) {
  return useMutation({
    mutationKey: ["PutApplicationData", { shopId, noticeId, applicationId, bodydata }],
    mutationFn: async () => {
      const urlString = `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`;
      const { data } = await axiosInstanceToken.put(urlString, bodydata);
      return data;
    },
  });
}

// 4. 유저의 지원 목록 조회 GET 요청
export async function GetUserApplicationsData(params?: GetUserApplicationsDataProps) {
  const { offset, limit } = params || {};

  return useQuery({
    queryKey: ["GetUserApplicationsData", { offset, limit }],
    queryFn: async () => {
      const userId = sessionStorage.getItem("userId");
      const urlString = `/users/${userId}/applications?${createQueryParams({ offset, limit })}`;
      const { data } = await axiosInstanceToken.get(urlString);
      return data;
    },
  });
}
