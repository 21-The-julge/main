import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useMutation } from "@tanstack/react-query";
import { axiosInstanceToken } from "../axiosInstance";
import { PostPresignedURLParams } from "../apiType";

// 1. Presigned URL 생성 POST 요청
export default async function usePostPresignedURL(bodyData: PostPresignedURLParams) {
  const { token } = useUserDataStore();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken(token).post("/images", bodyData);
      return data;
    },
  });
  const { data, error, isIdle, isSuccess } = mutation;
  const isLoading = isIdle && !isSuccess;

  return { data, error, isLoading, mutate: mutation.mutate };
}
