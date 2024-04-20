import { GetData, PostData, PutData } from "./apiUtills";

interface GetShopApplicationsDataProps {
  shopId: string;
  noticeId: string;
  offset?: number;
  limit?: number;
}

interface PostApplicationDataProps {
  shopId: string;
  noticeId: string;
}

interface PutApplicationDataProps {
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
export async function GetShopApplicationsData({ shopId, noticeId, offset, limit }: GetShopApplicationsDataProps) {
  const queryParams = new URLSearchParams();
  const parameters = { offset, limit };

  Object.entries(parameters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  const url = `/shops/${shopId}/notices/${noticeId}/applications?${queryParams.toString()}/`;
  const { response, error, isLoading } = await GetData(url);
  return { response, error, isLoading };
}

// 2. 가게의 특정 공고의 지원 등록 POST 요청
export async function PostApplicationData({ shopId, noticeId }: PostApplicationDataProps) {
  const { response, error, isLoading } = await PostData(`/shops/${shopId}/notices/${noticeId}/applications/`, true);
  return { response, error, isLoading };
}

// 3. 가게의 특정 공고 지원 승인, 거절 또는 취소 PUT 요청
export async function PutApplicationData({ shopId, noticeId, applicationId, data }: PutApplicationDataProps) {
  const { response, error, isLoading } = await PutData(
    `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}/`,
    true,
    data,
  );
  return { response, error, isLoading };
}

// 4. 유저의 지원 목록 조회 GET 요청
export async function GetUserApplicationsData({ offset, limit }: GetUserApplicationsDataProps) {
  const userId = sessionStorage.getItem("userId");
  const queryParams = new URLSearchParams();
  const parameters = { offset, limit };

  Object.entries(parameters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  const url = `/users/${userId}/applications?${queryParams.toString()}/`;
  const { response, error, isLoading } = await GetData(url);
  return { response, error, isLoading };
}
