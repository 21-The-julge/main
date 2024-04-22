import { GetData, PostData, PutData } from "./apiUtills";

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
export async function PostSignUp(data: PostSignUpProps) {
  const { response, error, isLoading } = await PostData({ url: "/users", requiredToken: false, bodyData: data });
  return { response, error, isLoading };
}
// 2. 내 정보 조회 GET 요청
export async function GetUserData() {
  const userId = sessionStorage.getItem("userId");
  const { response, error, isLoading } = await GetData({ url: `/user${userId}`, requiredToken: false });
  return { response, error, isLoading };
}
// 3. 내 정보 수정 PUT 요청
export async function PutUserData(data: PutUserDataProps) {
  const userId = sessionStorage.getItem("userId");
  const { response, error, isLoading } = await PutData({ url: `/user/${userId}`, requiredToken: true, bodyData: data });
  return { response, error, isLoading };
}
