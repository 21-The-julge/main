import { useState, useEffect } from "react";
import { GetAlertsData } from "@/shared/apis/api-hooks";

export default function GetNotificationData() {
  const [alertCount, setAlertCount] = useState(0);
  const [iconColor, setIconColor] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAlertsData();
      setData(result);
      if (result) {
        setAlertCount(result.count);
        if (result.count > 0) {
          setIconColor("#EA3C12");
        }
      } else {
        setAlertCount(0);
        setIconColor("none");
      }
    };
    fetchData();
  }, []);
  return { data, iconColor, alertCount };
}
