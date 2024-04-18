import { PostData } from "./apiUtills";

interface PostSignInProps {
  eamil: string;
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
export default async function PostSignIn(data: PostSignInProps) {
  const { response, error, isLoading } = await PostData("token/", false, data);
  if (response) {
    const responseData: PostSignInResponse = response;
    const { token } = responseData.item;
    const { id } = responseData.item.user.item;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", id);
  }

  return { response, error, isLoading };
}
