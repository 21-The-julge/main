import { GetData, PutData } from "./apiUtills";

interface GetAlertsDataProps {
  offset?: number;
  limit?: number;
}
// 1. 유저의 알림 목록 조회 GET 요청
export async function GetAlertsData({ offset, limit }: GetAlertsDataProps) {
  const userId = sessionStorage.getItem("userId");
  const queryParams = new URLSearchParams();
  const parameters = { offset, limit };

  Object.entries(parameters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  const url = `/users/${userId}/alerts?${queryParams.toString()}/`;
  const { response, error, isLoading } = await GetData(url, true);
  return { response, error, isLoading };
}

// 2. 알림 읽음 처리
export async function PutReadAlertData(alertId: string) {
  const userId = sessionStorage.getItem("userId");
  const { response, error, isLoading } = await PutData(`users/${userId}/alerts/${alertId}/`, true);
  return { response, error, isLoading };
}
