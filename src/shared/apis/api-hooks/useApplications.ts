import { createQueryParams, GetData, PostData, PutData } from "./apiUtills";

interface GetShopApplicationsDataParams {
  shopId: string;
  noticeId: string;
  offset?: number;
  limit?: number;
}

interface PostApplicationDataParams {
  shopId: string;
  noticeId: string;
}

interface PutApplicationDataParams {
  shopId: string;
  noticeId: string;
  applicationId: string;
  data: {
    status: "accepted" | "rejected" | "canceled";
  };
}

interface GetUserApplicationsDataProps {
  offset?: number;
  limit?: number;
}

// 1. 가게의 특정 공고의 지원 목록 조회 GET 요청
export async function GetShopApplicationsData({ shopId, noticeId, offset, limit }: GetShopApplicationsDataParams) {
  const urlSring = `/shops/${shopId}/notices/${noticeId}/applications?${createQueryParams({ offset, limit })}`;

  const { response, error, isLoading } = await GetData({ url: urlSring });
  return { response, error, isLoading };
}

// 2. 가게의 특정 공고의 지원 등록 POST 요청
export async function PostApplicationData({ shopId, noticeId }: PostApplicationDataParams) {
  const urlString = `/shops/${shopId}/notices/${noticeId}/applications`;

  const { response, error, isLoading } = await PostData({ url: urlString, requiredToken: true });
  return { response, error, isLoading };
}

// 3. 가게의 특정 공고 지원 승인, 거절 또는 취소 PUT 요청
export async function PutApplicationData({ shopId, noticeId, applicationId, data }: PutApplicationDataParams) {
  const urlString = `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`;

  const { response, error, isLoading } = await PutData({ url: urlString, requiredToken: true, bodyData: data });
  return { response, error, isLoading };
}

// 4. 유저의 지원 목록 조회 GET 요청
export async function GetUserApplicationsData(params?: GetUserApplicationsDataProps) {
  const { offset, limit } = params || {};

  const userId = sessionStorage.getItem("userId");
  const urlString = `/users/${userId}/applications?${createQueryParams({ offset, limit })}`;

  const { response, error, isLoading } = await GetData({ url: urlString });
  return { response, error, isLoading };
}
