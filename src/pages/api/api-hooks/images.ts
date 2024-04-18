import { PostData } from "./apiUtills";

interface PostPresignedURLProps {
  name: string;
}

// 1. Presigned URL 생성 POST 요청
export default async function PostPresignedURL(data: PostPresignedURLProps) {
  const { response, error, isLoading } = await PostData("images/", true, data);
  return { response, error, isLoading };
}
