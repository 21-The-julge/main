import { axiosInstance, axiosInstanceToken } from "../axiosInstance";

interface PostSignUpProps {
  eamil: string;
  password: string;
  type: "employee" | "employer";
}

interface PutUserDataProps {
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
}

// 1. 회원가입 POST 요청
export async function PostSignUp(bodyData: PostSignUpProps) {
  const { data } = await axiosInstance.post("/users", bodyData);
  return data;
}
// 2. 내 정보 조회 GET 요청
export async function GetUserData() {
  const userId = sessionStorage.getItem("userId");

  const { data } = await axiosInstance.get(`/users/${userId}`);
  return data;
}
// 3. 내 정보 수정 PUT 요청
export async function PutUserData(bodyData: PutUserDataProps) {
  const userId = sessionStorage.getItem("userId");

  const { data } = await axiosInstanceToken.put(`/users/${userId}`, bodyData);
  return data;
}
