import axiosInstance from "../axiosInstance.js";

export async function GetData(url: string) {
  const response = await axiosInstance.get(url);
  return response.data;
}

export async function PostData(url: string, data: object) {
  const response = await axiosInstance.post(url, data);
  return response.data;
}
