import { CATEGORIES, ADDRESSES } from "@/common/constants/index";
import { GetData, PostData, PutData } from "./apiUtills";

interface PostShopDataProps {
  name: string;
  category: typeof CATEGORIES;
  address1: typeof ADDRESSES;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}
interface PutShopDataProps {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

// 1. 가게 등록 POST 요청
export async function PostShopData(data: PostShopDataProps) {
  const { response, error, isLoading } = await PostData("shops/", true, data);
  return { response, error, isLoading };
}

// 2. 가게 정보 조회 GET 요청
export async function GetShopData(shopId: string) {
  const { response, error, isLoading } = await GetData(`shops/${shopId}/`, false);
  return { response, error, isLoading };
}

// 3. 가게 정보 수정 PUT 요청
export async function PutShopData(shopId: string, data: PutShopDataProps) {
  const { response, error, isLoading } = await PutData(`shops/${shopId}/`, true, data);
  return { response, error, isLoading };
}
