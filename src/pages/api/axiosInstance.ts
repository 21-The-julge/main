import axios, { AxiosInstance } from "axios";

const codeitApiInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});

export default codeitApiInstance;
