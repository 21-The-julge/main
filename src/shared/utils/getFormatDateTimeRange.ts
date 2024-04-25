import { format } from "date-fns/fp";

export default function formatDateTimeRange(dateTimeString: string, workhour: number) {
  const startDate = new Date(dateTimeString);
  const endDate = new Date(startDate.getTime() + workhour * 60 * 60 * 1000);

  const formattedStartDate = format("yyyy-MM-dd HH:mm", startDate);
  const formattedEndDate = format("HH:mm", endDate);
  const durationHour = workhour;

  return `${formattedStartDate}~${formattedEndDate} (${durationHour}시간)`;
}
