import { CATEGORIES, ADDRESSES } from "@/common/constants/index";

export interface GetAlertsDataParams {
  offset?: number;
  limit?: number;
}

export interface GetShopApplicationsDataParams {
  shopId: string | null;
  noticeId: string | null;
  offset?: number;
  limit?: number;
}

export interface PostApplicationDataParams {
  shopId: string | null;
  noticeId: string | null;
}

export interface PutApplicationDataParams {
  shopId: string | null;
  noticeId: string | null;
  applicationId: string | null;
  bodydata: {
    status: "accepted" | "rejected" | "canceled";
  };
}

export interface GetUserApplicationsDataProps {
  offset?: number;
  limit?: number;
}

export interface PostSignInParams {
  email: string;
  password: string;
}

export interface PostPresignedURLParams {
  name: string | ArrayBuffer;
}

export interface GetNoticesDataParams {
  offset?: number;
  limit?: number;
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: "time" | "pay" | "hour" | "shop";
}

export interface GetShopNoticesDataParams {
  shopId: string | null;
  offset?: number;
  limit?: number;
}

export interface GetSpecificShopNoticeDataParams {
  shopId: string | null;
  noticeId: string | null;
}

export interface PostNoticeDataParams {
  shopId: string | null;
  bodyData: {
    hourlyPay: number;
    startsAt: string; // 양식: 2023-12-23T00:00:00Z
    workhour: number;
    description: string;
  };
}

export interface PutNoticeDataParams {
  shopId: string | null;
  noticeId: string | null;
  bodyData: {
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
  };
}

export interface PostShopDataParams {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export interface PutShopDataParams {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export interface PostSignUpProps {
  eamil: string;
  password: string;
  type: "employee" | "employer";
}

export interface PutUserDataProps {
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
}
