import { CATEGORIES, ADDRESSES } from "@/common/constants/index";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";

interface PostShopDataParams {
  name: string;
  category: typeof CATEGORIES;
  address1: typeof ADDRESSES;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

// 1. 가게 등록 POST 요청
export async function PostShopData(bodyData: PostShopDataParams) {
  const { data } = await axiosInstanceToken.post("/shops", bodyData);

  return data;
}

// 2. 가게 정보 조회 GET 요청
export async function GetShopData(shopId: string) {
  const { data } = await axiosInstance.get(`/shops/${shopId}`);

  return data;
}

interface PutShopDataParams {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

// 3. 가게 정보 수정 PUT 요청
export async function PutShopData(shopId: string, bodyData: PutShopDataParams) {
  const { data } = await axiosInstance.put(`/shops/${shopId}`, bodyData);

  return data;
}
