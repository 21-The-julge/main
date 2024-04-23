import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});

const axiosInstanceToken = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
    Authorization:
      typeof window !== "undefined" && sessionStorage.getItem("token")
        ? `Bearer ${sessionStorage.getItem("token")}`
        : "",
  },
});

export { axiosInstance, axiosInstanceToken };
