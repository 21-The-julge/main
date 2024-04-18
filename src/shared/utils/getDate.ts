function getDate(date: Date) {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDay().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getTime(date: Date, workhour: number) {
  let hour: string | number = date.getHours();
  const endHour =
    hour + workhour > 24
      ? (hour + workhour - 24).toString().padStart(2, "0")
      : (hour + workhour).toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  hour = hour.toString().padStart(2, "0");
  const startTime = `${hour}:${minute}`;
  const endTime = `${endHour}:${minute}`;

  return `${startTime}~${endTime}`;
}

export default function getFullDate(sourceDate: Date, workhour: number) {
  return `${getDate(sourceDate)} ${getTime(sourceDate, workhour)} (${workhour}시간)`;
}
