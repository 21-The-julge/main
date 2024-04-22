import { useState, useEffect } from "react";
import { AlertResponseData } from "@/common/components/NotificationModal/types";

const testResponse: AlertResponseData | null = {
  offset: 0,
  limit: 0,
  count: 0,
  hasNext: false,
  items: [
    {
      id: "",
      createdAt: "",
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
          name: "",
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
          startsAt: "",
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

export default function GetNotificationData() {
  const [alertCount, setAlertCount] = useState(0);
  const [iconColor, setIconColor] = useState("");
  const notificationData = testResponse;

  useEffect(() => {
    if (notificationData) {
      setAlertCount(notificationData.count);
      if (notificationData.count > 0) {
        setIconColor("#EA3C12");
      }
    } else {
      setAlertCount(0);
      setIconColor("none");
    }
  }, [notificationData]);
  return { iconColor, alertCount };
}
