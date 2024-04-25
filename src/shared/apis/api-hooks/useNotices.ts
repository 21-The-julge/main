import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import {
  GetNoticesDataParams,
  GetShopNoticesDataParams,
  GetSpecificShopNoticeDataParams,
  PostNoticeDataParams,
  PutNoticeDataParams,
} from "../apiType";

// 1. 공고 조회 GET 요청
export async function useGetNoticesData({
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
      const { data } = await axiosInstance.get("/notices", {
        params: { offset, limit, address, keyword, startsAtGte, hourlyPayGte },
      });
      return data;
    },
  });
}

// 2. 가게의 공고 목록 조회 Get 요청
export async function useGetShopNoticesData({ shopId, offset, limit }: GetShopNoticesDataParams) {
  return useQuery({
    queryKey: ["GetShopNoticesData", { shopId, offset, limit }],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/shops/${shopId}/notices`, { params: { offset, limit } });
      return data;
    },
  });
}

// 3. 가게 공고 등록 POST 요청
export async function usePostNoticeData({ shopId, bodyData }: PostNoticeDataParams) {
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken.post(`/shops/${shopId}/notices`, bodyData);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}

// 4. 가게의 특정 공고 조회 GET 요청
export async function useGetSpecificShopNoticeData({ shopId, noticeId }: GetSpecificShopNoticeDataParams) {
  return useQuery({
    queryKey: ["GetSpecificShopNoticeData", { shopId, noticeId }],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/shops/${shopId}/notices/${noticeId}`);
      return data;
    },
  });
}

// 5. 가게의 특정 공고 수정 PUT 요청 api
export async function usePutNoticeData({ shopId, noticeId, bodyData }: PutNoticeDataParams) {
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken.put(`/shops/${shopId}/notices/${noticeId}`, bodyData);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}
