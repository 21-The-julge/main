import { useState } from "react";
import axiosInstance from "../axiosInstance.js";

interface Error {
  message: string;
}
export async function GetData(url: string) {
  const [response, setResponse] = useState();
  const [error, setError] = useState({ message: "" });
  const [isLoading, setIsLoading] = useState(true);

  try {
    const result = await axiosInstance.get(url);
    setResponse(result.data);
  } catch (err) {
    setError(err as Error);
  } finally {
    setIsLoading(false);
  }

  return { response, error, isLoading };
}

export async function PostData(url: string, data: object) {
  const [response, setResponse] = useState();
  const [error, setError] = useState({ message: "" });
  const [isLoading, setIsLoading] = useState(true);

  try {
    const result = await axiosInstance.post(url, data);
    setResponse(result.data);
  } catch (err) {
    setError(err as Error);
  } finally {
    setIsLoading(false);
  }

  return { response, error, isLoading };
}

export async function PutData(url: string, data: object) {
  const [response, setResponse] = useState();
  const [error, setError] = useState({ message: "" });
  const [isLoading, setIsLoading] = useState(true);

  try {
    const result = await axiosInstance.put(url, data);
    setResponse(result.data);
  } catch (err) {
    setError(err as Error);
  } finally {
    setIsLoading(false);
  }

  return { response, error, isLoading };
}
