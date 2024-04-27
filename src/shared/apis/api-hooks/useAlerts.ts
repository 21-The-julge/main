import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstanceToken } from "../axiosInstance";
import { GetAlertsDataParams } from "../apiType";

// 1. 유저의 알림 목록 조회 GET 요청
export function useGetAlertsData(params?: GetAlertsDataParams) {
  const { token, userId } = useUserDataStore();
  const { offset, limit } = params || {};

  return useQuery({
    queryKey: ["alerts", { offset, limit }],
    queryFn: async () => {
      const { data } = await axiosInstanceToken(token).get(`/users/${userId}/alerts`, { params: { offset, limit } });
      return data;
    },
    enabled: !!token && !!userId,
  });
}

// 2. 알림 읽음 처리 PUT 요청
export function usePutAlertData(alertId: string) {
  const { token, userId } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken(token).put(`/users/${userId}/alerts/${alertId}`);

      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}
