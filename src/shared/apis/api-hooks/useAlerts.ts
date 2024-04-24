import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstanceToken } from "../axiosInstance";
import { GetAlertsDataParams } from "./apiType";

// 1. 유저의 알림 목록 조회 GET 요청
export function useGetAlertsData(params?: GetAlertsDataParams) {
  const { offset, limit } = params || {};

  return useQuery({
    queryKey: ["getAlerts", { offset, limit }],
    queryFn: async () => {
      const userId = sessionStorage.getItem("userId");
      const { data } = await axiosInstanceToken.get(`/users/${userId}/alerts`, { params: { offset, limit } });
      return data;
    },
  });
}

// 2. 알림 읽음 처리 PUT 요청
export function usePutAlertData(alertId: string) {
  return useMutation({
    mutationFn: async () => {
      const userId = ["putAlert", alertId];
      const { data } = await axiosInstanceToken.put(`/users/${userId}/alerts/${alertId}`);

      return data;
    },
  });
}
