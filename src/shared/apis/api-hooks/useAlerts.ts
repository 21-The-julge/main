import { createQueryParams, GetData, PutData } from "./apiUtills";

interface GetAlertsDataParams {
  offset?: number;
  limit?: number;
}
// 1. 유저의 알림 목록 조회 GET 요청
export async function GetAlertsData(params?: GetAlertsDataParams) {
  const userId = sessionStorage.getItem("userId");
  const { offset, limit } = params || {};

  const urlString = `/users/${userId}/alerts?${createQueryParams({ offset, limit })}`;

  const { response, error, isLoading } = await GetData({ url: urlString, requiredToken: true });
  return { response, error, isLoading };
}

// 2. 알림 읽음 처리
export async function PutReadAlertData(alertId: string) {
  const userId = sessionStorage.getItem("userId");

  const urlString = `/users/${userId}/alerts/${alertId}`;

  const { response, error, isLoading } = await PutData({ url: urlString, requiredToken: true });
  return { response, error, isLoading };
}
