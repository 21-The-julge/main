import { PostData } from "./apiUtills";

interface PostPresignedURLParams {
  name: string;
}

// 1. Presigned URL 생성 POST 요청
export default async function PostPresignedURL(data: PostPresignedURLParams) {
  const { response, error, isLoading } = await PostData({ url: "/images", requiredToken: true, bodyData: data });

  return { response, error, isLoading };
}
