import { GetSpecificShopNoticeType } from "@/page-layout/NoticesLayout/type";

export function loadDataFromLocal(key = "noticesRecent") {
  if (typeof window === "undefined") {
    return undefined;
  }
  const loadData = localStorage.getItem(key);
  if (loadData === null) return undefined;
  return JSON.parse(loadData);
}

export function saveDataToLocal(data: GetSpecificShopNoticeType[], key = "noticesRecent") {
  const saveData = JSON.stringify(data);
  localStorage.setItem(key, saveData);
}
