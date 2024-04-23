import { useMutation } from "@tanstack/react-query";
import { axiosInstanceToken } from "../axiosInstance";
import { PostPresignedURLParams } from "./apiType";

// 1. Presigned URL 생성 POST 요청
export default async function PostPresignedURL(bodyData: PostPresignedURLParams) {
  return useMutation({
    mutationKey: ["PostPresignedURL", bodyData],
    mutationFn: async () => {
      const { data } = await axiosInstanceToken.post("/images", bodyData);
      return data;
    },
  });
}
