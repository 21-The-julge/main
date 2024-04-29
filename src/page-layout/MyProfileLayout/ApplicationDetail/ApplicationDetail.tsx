import RegisterNotice from "./RegisterNotice/RegisterNotice";
import ViewNotice from "./ViewNotice/ViewNotice";

interface RegisterNoticeProps {
  registerNoticeData: {
    name: string;
    startsAt: string;
    hourlyPay: string;
  }[];
}

export default function ApplicationDetail({ registerNoticeData }: RegisterNoticeProps) {
  return registerNoticeData && registerNoticeData.length > 0 ? (
    <RegisterNotice registerNoticeData={registerNoticeData} />
  ) : (
    <ViewNotice />
  );
}
