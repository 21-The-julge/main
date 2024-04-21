import { createQueryParams, GetData, PostData, PutData } from "./apiUtills";

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

  const { response, error, isLoading } = await GetData({ url: urlString });
  return { response, error, isLoading };
}

interface GetShopNoticesDataParams {
  shopId: string;
  offset?: number;
  limit?: number;
}

// 2. 가게의 공고 목록 조회 Get 요청
export async function GetShopNoticesData({ shopId, offset, limit }: GetShopNoticesDataParams) {
  const urlString = `shops/${shopId}/notices?${createQueryParams({ offset, limit })}/`;

  const { response, error, isLoading } = await GetData({ url: urlString });
  return { response, error, isLoading };
}

interface PostNoticeDataParams {
  hourlyPay: number;
  startsAt: string; // 양식: 2023-12-23T00:00:00Z
  workhour: number;
  description: string;
}

// 3. 가게 공고 등록 POST 요청
export async function PostNoticeData(shopId: string, data: PostNoticeDataParams) {
  const urlString = `/shops/${shopId}/notices`;

  const { response, error, isLoading } = await PostData({ url: urlString, requiredToken: true, bodyData: data });
  return { response, error, isLoading };
}

interface GetSpecificShopNoticeDataParams {
  shopId: string;
  noticeId: string;
}

// 4. 가게의 특정 공고 조회 GET 요청
export async function GetSpecificShopNoticeData({ shopId, noticeId }: GetSpecificShopNoticeDataParams) {
  const urlString = `/shops/${shopId}/notices/${noticeId}`;

  const { response, error, isLoading } = await GetData({ url: urlString, requiredToken: false });
  return { response, error, isLoading };
}

interface PutNoticeDataParams {
  shopId: string;
  noticeId: string;
  data: {
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
  };
}

// 5. 가게의 특정 공고 수정 PUT 요청 api
export async function PutNoticeData({ shopId, noticeId, data }: PutNoticeDataParams) {
  const urlString = `/shops/${shopId}/notices/${noticeId}`;

  const { response, error, isLoading } = await PutData({ url: urlString, requiredToken: true, bodyData: data });
  return { response, error, isLoading };
}
