import { useState } from "react";
import { axiosInstance, axiosInstanceToken } from "../axiosInstance.js";

interface Error {
  message: string;
}

export async function GetData(url: string, requiredToken = false) {
  const [response, setResponse] = useState();
  const [error, setError] = useState({ message: "" });
  const [isLoading, setIsLoading] = useState(true);

  try {
    const axios = requiredToken ? axiosInstanceToken : axiosInstance;
    const result = await axios.get(url);
    setResponse(result.data);
  } catch (err) {
    setError(err as Error);
  } finally {
    setIsLoading(false);
  }

  return { response, error, isLoading };
}

export async function PostData(url: string, data: object, requiredToken = false) {
  const [response, setResponse] = useState();
  const [error, setError] = useState({ message: "" });
  const [isLoading, setIsLoading] = useState(true);

  try {
    const axios = requiredToken ? axiosInstanceToken : axiosInstance;
    const result = await axios.post(url, data);
    setResponse(result.data);
  } catch (err) {
    setError(err as Error);
  } finally {
    setIsLoading(false);
  }

  return { response, error, isLoading };
}

export async function PutData(url: string, data: object, requiredToken = false) {
  const [response, setResponse] = useState();
  const [error, setError] = useState({ message: "" });
  const [isLoading, setIsLoading] = useState(true);

  try {
    const axios = requiredToken ? axiosInstanceToken : axiosInstance;
    const result = await axios.put(url, data);
    setResponse(result.data);
  } catch (err) {
    setError(err as Error);
  } finally {
    setIsLoading(false);
  }

  return { response, error, isLoading };
}
