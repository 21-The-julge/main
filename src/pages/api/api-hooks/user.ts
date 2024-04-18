import { GetData, PostData, PutData } from "./apiUtill";

// 회원가입 POST 요청 api
export async function PostSignUp(url: string, data: object) {
  const { response, error, isLoading } = await PostData(url, data);
  return { response, error, isLoading };
}
// 내 정보 조회 GET 요청 api
export async function GetUserData(url: string) {
  const { response, error, isLoading } = await GetData(url);
  return { response, error, isLoading };
}
// 내 정보 수정 PUT 요청 api
export async function PutUserData(url: string, data: object) {
  const { response, error, isLoading } = await PutData(url, data, true);
  return { response, error, isLoading };
}
