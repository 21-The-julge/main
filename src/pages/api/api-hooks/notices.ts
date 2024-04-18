import { GetData, PostData, PutData } from "./apiUtills";

interface GetNoticesDataProps {
  offset?: number;
  limit?: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: "time" | "pay" | "hour" | "shop";
}

interface GetShopNoticesDataProps {
  shopId: string;
  offset?: number;
  limit?: number;
}

interface PostNoticeDataProps {
  hourlyPay: number;
  startsAt: string; // 양식: 2023-12-23T00:00:00Z
  workhour: number;
  description: string;
}

interface GetSpecificShopNoticeDataProps {
  shopId: string;
  noticeId: string;
}

interface PutNoticeDataProps {
  shopId: string;
  noticeId: string;
  data: {
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
  };
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
}: GetNoticesDataProps) {
  const queryParams = new URLSearchParams();
  const parameters = { offset, limit, address, keyword, startsAtGte, hourlyPayGte, sort };

  Object.entries(parameters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  const url = `notices?${queryParams.toString()}/`;
  const { response, error, isLoading } = await GetData(url);
  return { response, error, isLoading };
}

// 2. 가게의 공고 목록 조회 Get 요청
export async function GetShopNoticesData({ shopId, offset, limit }: GetShopNoticesDataProps) {
  const queryParams = new URLSearchParams();
  const parameters = { offset, limit };

  Object.entries(parameters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  const url = `shops/${shopId}/notices?${queryParams.toString()}/`;
  const { response, error, isLoading } = await GetData(url);
  return { response, error, isLoading };
}

// 3. 가게 공고 등록 POST 요청
export async function PostNoticeData(shopId: string, data: PostNoticeDataProps) {
  const { response, error, isLoading } = await PostData(`shops/${shopId}/notices/`, true, data);
  return { response, error, isLoading };
}

// 4. 가게의 특정 공고 조회 GET 요청
export async function GetSpecificShopNoticeData({ shopId, noticeId }: GetSpecificShopNoticeDataProps) {
  const { response, error, isLoading } = await GetData(`shops/${shopId}/notices/${noticeId}/`, false);
  return { response, error, isLoading };
}

// 5. 가게의 특정 공고 수정 PUT 요청 api
export async function PutNoticeData({ shopId, noticeId, data }: PutNoticeDataProps) {
  const { response, error, isLoading } = await PutData(`shops/${shopId}/notices/${noticeId}/`, true, data);
  return { response, error, isLoading };
}
