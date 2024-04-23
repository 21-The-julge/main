import { useState, useEffect } from "react";
import { GetAlertsData } from "@/shared/apis/api-hooks";

export default function GetNotificationData() {
  const [alertCount, setAlertCount] = useState(0);
  const [iconColor, setIconColor] = useState("");
  const [notificationData, setNotificationData] = useState(null);
  const { data, error, isLoading } = GetAlertsData({ offset: 0, limit: 10 });

  useEffect(() => {
    setNotificationData(data);
    if (data) {
      setAlertCount(data.count);
      if (data.count > 0) {
        setIconColor("#EA3C12");
      }
    } else {
      setAlertCount(0);
      setIconColor("none");
    }
  }, [data]);
  return { notificationData, error, isLoading, iconColor, alertCount };
}
