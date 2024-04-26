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
      // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZjk2OGFmOS0wM2IxLTQ0OGUtYjhmMy1mMzgyM2ZjN2Y2YTgiLCJpYXQiOjE3MTM5Mjg5MDl9.YcxhVmCY46wK3r7go2gUZDl8pdyfBW6eO3WvBfXYR3k",
      typeof window !== "undefined" && sessionStorage.getItem("token")
        ? `Bearer ${sessionStorage.getItem("token")}`
        : "",
  },
});

export { axiosInstance, axiosInstanceToken };
