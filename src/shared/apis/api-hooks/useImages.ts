import { useMutation } from "@tanstack/react-query";
import { axiosInstanceToken } from "../axiosInstance";
import { PostPresignedURLParams } from "../apiType";

// 1. Presigned URL 생성 POST 요청
export default async function usePostPresignedURL(bodyData: PostPresignedURLParams) {
  return useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstanceToken.post("/images", bodyData);
      return data;
    },
  });
}
