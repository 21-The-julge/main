import { PostData } from "./apiUtills";

interface PostSignInParams {
  email: string;
  password: string;
}

interface PostSignInResponse {
  item: {
    token: string;
    user: {
      item: {
        id: string;
        email: string;
        type: string;
      };
      href: string;
    };
  };
  links: [];
}

// 로그인 POST 요청 - 세션 스토리지에 token, userId 저장
export default async function PostSignIn(data: PostSignInParams) {
  const { response, error, isLoading } = await PostData<PostSignInResponse>({
    url: "/token",
    requiredToken: false,
    bodyData: data,
  });

  if (!response) {
    return { response, error, isLoading };
  }

  const { token } = response.item;
  const { id } = response.item.user.item;
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("userId", id);

  return { response, error, isLoading };
}
