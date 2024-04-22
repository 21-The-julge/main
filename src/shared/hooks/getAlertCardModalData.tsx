import { useState, useEffect } from "react";
import { Item, AlertResponseData } from "@/common/components/NotificationModal/types";

const testResponse: AlertResponseData | null = {
  offset: 0,
  limit: 0,
  count: 0,
  hasNext: false,
  items: [
    {
      id: "",
      createdAt: "3",
      result: "accepted",
      read: false,
      application: {
        item: {
          id: "",
          status: "accepted",
        },
        href: "",
      },
      shop: {
        item: {
          id: "",
          name: "수리 에스프레소 샵",
          category: "",
          address1: "",
          address2: "",
          description: "",
          imageUrl: "",
          originalHourlyPay: 0,
        },
        href: "",
      },
      notice: {
        item: {
          id: "",
          hourlyPay: 0,
          description: "",
          startsAt: "2023-01-14 15:00~18:00",
          workhour: 0,
          closed: false,
        },
        href: "",
      },
      links: [],
    },
  ],
  links: [],
};

const notificationData = testResponse;
export default function GetAlertCardModalData() {
  const [hasNotification, setHasNotification] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (notificationData && notificationData.items.length > 0) {
      setHasNotification(true);
      setItems(notificationData.items);
    }
  }, []);
  return { hasNotification, items };
}
