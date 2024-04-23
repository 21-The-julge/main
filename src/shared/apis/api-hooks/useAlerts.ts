import { useQuery, useMutation } from "@tanstack/react-query";
import createQueryParams from "./apiUtills";
import { axiosInstanceToken } from "../axiosInstance";
import { GetAlertsDataParams } from "./apiType";

// 1. 유저의 알림 목록 조회 GET 요청
export function GetAlertsData(params?: GetAlertsDataParams) {
  const { offset, limit } = params || {};

  return useQuery({
    queryKey: ["GetAlertsData", { offset, limit }],
    queryFn: async () => {
      const userId = sessionStorage.getItem("userId");
      const urlString = `/users/${userId}/alerts?${createQueryParams({ offset, limit })}`;
      const { data } = await axiosInstanceToken.get(urlString);
      return data;
    },
  });
}

// 2. 알림 읽음 처리 PUT 요청
export function PutAlertData(alertId: string) {
  return useMutation({
    mutationKey: ["PutAlertData", alertId],
    mutationFn: async () => {
      const userId = sessionStorage.getItem("userId");
      const urlString = `/users/${userId}/alerts/${alertId}`;

      const { data } = await axiosInstanceToken.put(urlString);

      return data;
    },
  });
}
