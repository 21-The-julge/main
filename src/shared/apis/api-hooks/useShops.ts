import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance";
import { PostShopDataParams, PutShopDataParams } from "./apiType";

// 1. 가게 등록 POST 요청
export async function PostShopData(bodyData: PostShopDataParams) {
  return useMutation({
    mutationKey: ["PostShopData", bodyData],
    mutationFn: async () => {
      const { data } = await axiosInstanceToken.post("/shops", bodyData);
      return data;
    },
  });
}

// 2. 가게 정보 조회 GET 요청
export async function GetShopData(shopId: string) {
  return useQuery({
    queryKey: ["GetShopData", shopId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/shops/${shopId}`);
      return data;
    },
  });
}

// 3. 가게 정보 수정 PUT 요청
export async function PutShopData(shopId: string, bodyData: PutShopDataParams) {
  return useMutation({
    mutationKey: ["PutShopData", { shopId, bodyData }],
    mutationFn: async () => {
      const urlString = `/shops/${shopId}`;
      const { data } = await axiosInstanceToken.put(urlString, bodyData);
      return data;
    },
  });
}
