import { axiosInstanceToken } from "../axiosInstance";

interface PostPresignedURLParams {
  name: string;
}

// 1. Presigned URL 생성 POST 요청
export default async function PostPresignedURL(bodyData: PostPresignedURLParams) {
  const { data } = await axiosInstanceToken.post("/images", bodyData);

  return data;
}
