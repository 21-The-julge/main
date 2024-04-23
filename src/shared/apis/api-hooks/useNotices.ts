import { useQuery, useMutation } from "@tanstack/react-query";
import createQueryParams from "./apiUtills";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import {
  GetNoticesDataParams,
  GetShopNoticesDataParams,
  GetSpecificShopNoticeDataParams,
  PostNoticeDataParams,
  PutNoticeDataParams,
} from "./apiType";

// 1. 공고 조회 GET 요청
export async function GetNoticesData({
  offset,
  limit,
  address,
  keyword,
  startsAtGte,
  hourlyPayGte,
  sort,
}: GetNoticesDataParams) {
  return useQuery({
    queryKey: ["GetNoticesData", { offset, limit, address, keyword, startsAtGte, hourlyPayGte, sort }],
    queryFn: async () => {
      const urlString = `/notices?${createQueryParams({ offset, limit, address, keyword, startsAtGte, hourlyPayGte, sort })}`;
      const { data } = await axiosInstance.get(urlString);
      return data;
    },
  });
}

// 2. 가게의 공고 목록 조회 Get 요청
export async function GetShopNoticesData({ shopId, offset, limit }: GetShopNoticesDataParams) {
  return useQuery({
    queryKey: ["GetShopNoticesData", { shopId, offset, limit }],
    queryFn: async () => {
      const urlString = `/shops/${shopId}/notices?${createQueryParams({ offset, limit })}`;
      const { data } = await axiosInstance.get(urlString);
      return data;
    },
  });
}

// 3. 가게 공고 등록 POST 요청
export async function PostNoticeData({ shopId, bodyData }: PostNoticeDataParams) {
  return useMutation({
    mutationKey: ["PostNoticeData", { shopId, bodyData }],
    mutationFn: async () => {
      const urlString = `/shops/${shopId}/notices`;
      const { data } = await axiosInstanceToken.post(urlString, bodyData);
      return data;
    },
  });
}

// 4. 가게의 특정 공고 조회 GET 요청
export async function GetSpecificShopNoticeData({ shopId, noticeId }: GetSpecificShopNoticeDataParams) {
  return useQuery({
    queryKey: ["GetSpecificShopNoticeData", { shopId, noticeId }],
    queryFn: async () => {
      const urlString = `/shops/${shopId}/notices/${noticeId}`;
      const { data } = await axiosInstance.get(urlString);
      return data;
    },
  });
}

// 5. 가게의 특정 공고 수정 PUT 요청 api
export async function PutNoticeData({ shopId, noticeId, bodyData }: PutNoticeDataParams) {
  return useMutation({
    mutationKey: ["PutNoticeData", { shopId, noticeId, bodyData }],
    mutationFn: async () => {
      const urlString = `/shops/${shopId}/notices/${noticeId}`;
      const { data } = await axiosInstanceToken.put(urlString, bodyData);
      return data;
    },
  });
}
