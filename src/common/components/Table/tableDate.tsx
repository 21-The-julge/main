import React, { useState, useEffect } from "react";
import axios from "axios";

const NEXT_PUBLIC_API_BASE_URL = "https://bootcamp-api.codeit.kr/api/0-1/the-julge";

async function getUserApplications(userId: string, token: string) {
  try {
    const response = await axios.get(`${NEXT_PUBLIC_API_BASE_URL}/users/${userId}/applications`, {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰을 헤더에 포함시킴
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return null;
  }
}

interface ShopItem {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface NoticeItem {
  id: string;
  hourlyPay: number;
  description: string;
  startsAt: string;
  workhour: number;
  closed: boolean;
}

interface ApplicationItem {
  id: string;
  status: "pending" | "accepted" | "rejected" | "canceled";
  createdAt: string;
  shop: {
    item: ShopItem;
    href: string;
  };
  notice: {
    item: NoticeItem;
    href: string;
  };
}

interface Link {
  rel: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  href: string;
}

// API 응답 전체 구조를 정의하는 타입
interface ApiResponse {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Array<{ item: ApplicationItem; links: Link[] }>;
  links: Link[];
}
// 필요한 데이터를 정제
function EmployeeData(data: ApiResponse) {
  // ApiResponse의 items 배열을 순회하며 필요한 데이터 추출
  return data.items.map(({ item }) => {
    // item은 ApplicationItem 타입
    return {
      name: item.shop.item.name,
      startsAt: item.notice.item.startsAt,
      workhour: item.notice.item.workhour,
      originalHourlyPay: item.shop.item.originalHourlyPay,
      status: item.status,
    };
  });
}
// 이건 데이터 시각적으로 보기위해서 임의로 만든겁니다.(넘어가셔도되요)
export default function DataTest() {
  const [data, setData] = useState(null);
  const testUserId = "b86138e5-686d-4b12-a52e-1e5fdd442dea";
  const testToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiODYxMzhlNS02ODZkLTRiMTItYTUyZS0xZTVmZGQ0NDJkZWEiLCJpYXQiOjE3MTMyMjEwNTR9.GSbfEfJCXcIHEvn-3qE9BDCnSmTCfSZncNV7zDxOhfY";

  useEffect(() => {
    async function fetchData() {
      const ApiResult = await getUserApplications(testUserId, testToken);
      const userTableDate = await EmployeeData(ApiResult);
      setData(ApiResult);
      console.log(userTableDate);
    }
    fetchData();
  }, []); // 빈 배열을 넣어서 컴포넌트가 마운트될 때만 fetchData를 실행하도록 합니다.

  return <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "데이터를 불러오는 중..."}</div>;
}

/*
const testNoticeId: string = "7f79ef71-553d-4c50-a35c-7cb48e978b4c";
*/
