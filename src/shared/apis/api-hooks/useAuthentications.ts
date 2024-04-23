import { axiosInstance } from "../axiosInstance";

interface PostSignInParams {
  email: string;
  password: string;
}

// 로그인 POST 요청 - 세션 스토리지에 token, userId 저장
export default async function PostSignIn(bodyData: PostSignInParams) {
  const { data } = await axiosInstance.post("/token", bodyData);

  if (!data) {
    return data;
  }

  const { token } = data.item;
  const { id } = data.item.user.item;
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("userId", id);

  return data;
}
