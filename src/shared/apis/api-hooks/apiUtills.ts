import { useState } from "react";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance.js";

interface ApiParams {
  url: string;
  requiredToken?: boolean;
  bodyData?: object;
}

interface ErrorResponse {
  message: string;
}

export async function GetData<T>({ url, requiredToken = false, bodyData }: ApiParams) {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  try {
    const axios = requiredToken ? axiosInstanceToken : axiosInstance;
    const { data } = await axios.get(url, bodyData);
    setResponse(data);
  } catch (err) {
    setError(err as ErrorResponse);
  } finally {
    setIsLoading(false);
  }

  return { response, error, isLoading };
}

export async function PostData<T>({ url, requiredToken = false, bodyData }: ApiParams) {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  try {
    const axios = requiredToken ? axiosInstanceToken : axiosInstance;
    const { data } = await axios.post(url, bodyData);
    setResponse(data);
  } catch (err) {
    setError(err as ErrorResponse);
  } finally {
    setIsLoading(false);
  }

  return { response, error, isLoading };
}

export async function PutData<T>({ url, requiredToken = false, bodyData }: ApiParams) {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  try {
    const axios = requiredToken ? axiosInstanceToken : axiosInstance;
    const { data } = await axios.put(url, bodyData);
    setResponse(data);
  } catch (err) {
    setError(err as ErrorResponse);
  } finally {
    setIsLoading(false);
  }

  return { response, error, isLoading };
}

export function createQueryParams(parameters: { [key: string]: string | number | undefined }) {
  const queryParams = new URLSearchParams();
  Object.entries(parameters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });
  return queryParams.toString();
}
