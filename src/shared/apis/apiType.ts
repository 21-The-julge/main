import { CATEGORIES, ADDRESSES } from "@/common/constants/index";

export interface GetAlertsDataParams {
  offset?: number;
  limit?: number;
}

export interface GetShopApplicationsDataParams {
  shopId: string;
  noticeId: string;
  offset?: number;
  limit?: number;
}

export interface PostApplicationDataParams {
  shopId: string;
  noticeId: string;
}

export interface PutApplicationDataParams {
  shopId: string;
  noticeId: string;
  applicationId: string;
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
  name: string;
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
  shopId: string;
  offset?: number;
  limit?: number;
}

export interface GetSpecificShopNoticeDataParams {
  shopId: string;
  noticeId: string;
}

export interface PostNoticeDataParams {
  shopId: string;
  bodyData: {
    hourlyPay: number;
    startsAt: string; // 양식: 2023-12-23T00:00:00Z
    workhour: number;
    description: string;
  };
}

export interface PutNoticeDataParams {
  shopId: string;
  noticeId: string;
  bodyData: {
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
  };
}

export interface PostShopDataParams {
  name: string;
  category: typeof CATEGORIES;
  address1: typeof ADDRESSES;
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
