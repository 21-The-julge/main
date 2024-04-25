import Badge from "../components/Badge/Badge";

export default function getBadge(status: string): JSX.Element {
  if (status === "accepted") {
    return (
      <Badge color="blue" isResponsive={false}>
        승인 완료
      </Badge>
    );
  }
  if (status === "rejected") {
    return (
      <Badge color="red" isResponsive={false}>
        거절
      </Badge>
    );
  }
  return (
    <Badge color="green" isResponsive={false}>
      대기중
    </Badge>
  );
}
