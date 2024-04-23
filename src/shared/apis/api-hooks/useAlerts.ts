import createQueryParams from "./apiUtills";
import { axiosInstanceToken } from "../axiosInstance";

interface GetAlertsDataParams {
  offset?: number;
  limit?: number;
}

// 1. 유저의 알림 목록 조회 GET 요청
export async function GetAlertsData(params?: GetAlertsDataParams) {
  const userId = sessionStorage.getItem("userId");
  const { offset, limit } = params || {};

  const urlString = `/users/${userId}/alerts?${createQueryParams({ offset, limit })}`;

  const { data } = await axiosInstanceToken.get(urlString);

  return data;
}

// 2. 알림 읽음 처리
export async function PutAlertData(alertId: string) {
  const userId = sessionStorage.getItem("userId");
  const urlString = `/users/${userId}/alerts/${alertId}`;

  const { data } = await axiosInstanceToken.put(urlString);
  return data;
}