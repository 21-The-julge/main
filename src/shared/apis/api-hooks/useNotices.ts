import createQueryParams from "./apiUtills";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";

interface GetNoticesDataParams {
  offset?: number;
  limit?: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: "time" | "pay" | "hour" | "shop";
}

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
  const urlString = `notices?${createQueryParams({ offset, limit, address, keyword, startsAtGte, hourlyPayGte, sort })}/`;

  const { data } = await axiosInstance.get(urlString);
  return data;
}

interface GetShopNoticesDataParams {
  shopId: string;
  offset?: number;
  limit?: number;
}

// 2. 가게의 공고 목록 조회 Get 요청
export async function GetShopNoticesData({ shopId, offset, limit }: GetShopNoticesDataParams) {
  const urlString = `shops/${shopId}/notices?${createQueryParams({ offset, limit })}/`;

  const { data } = await axiosInstance.get(urlString);
  return data;
}

interface PostNoticeDataParams {
  shopId: string;
  bodyData: {
    hourlyPay: number;
    startsAt: string; // 양식: 2023-12-23T00:00:00Z
    workhour: number;
    description: string;
  };
}

// 3. 가게 공고 등록 POST 요청
export async function PostNoticeData({ shopId, bodyData }: PostNoticeDataParams) {
  const urlString = `/shops/${shopId}/notices`;

  const { data } = await axiosInstanceToken.post(urlString, bodyData);
  return data;
}

interface GetSpecificShopNoticeDataParams {
  shopId: string;
  noticeId: string;
}

// 4. 가게의 특정 공고 조회 GET 요청
export async function GetSpecificShopNoticeData({ shopId, noticeId }: GetSpecificShopNoticeDataParams) {
  const urlString = `/shops/${shopId}/notices/${noticeId}`;

  const { data } = await axiosInstance.get(urlString);
  return data;
}

interface PutNoticeDataParams {
  shopId: string;
  noticeId: string;
  bodyData: {
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
  };
}

// 5. 가게의 특정 공고 수정 PUT 요청 api
export async function PutNoticeData({ shopId, noticeId, bodyData }: PutNoticeDataParams) {
  const urlString = `/shops/${shopId}/notices/${noticeId}`;

  const { data } = await axiosInstanceToken.put(urlString, bodyData);
  return data;
}
