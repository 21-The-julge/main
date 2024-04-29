import { END_POINT } from "@/common/constants/index";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { useMutation } from "@tanstack/react-query";
import { axiosInstanceToken } from "../axiosInstance";
import { PostPresignedURLParams } from "../apiType";

// 1. Presigned URL 생성 POST 요청
export default function usePostPresignedURL() {
  const { token } = useUserDataStore();
  return useMutation({
    mutationFn: async (bodyData: PostPresignedURLParams) => {
      const { data } = await axiosInstanceToken(token).post(END_POINT.IMAGES, bodyData);
      return data;
    },
  });
}
