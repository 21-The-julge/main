import Badge from "../components/Badge/Badge";

export default function getBadge(status: string): JSX.Element {
  switch (status) {
    case "accepted":
      return (
        <Badge color="blue" isResponsive={false}>
          승인 완료
        </Badge>
      );
    case "rejected":
      return (
        <Badge color="red" isResponsive={false}>
          거절
        </Badge>
      );
    default:
      return (
        <Badge color="green" isResponsive={false}>
          대기중
        </Badge>
      );
  }
}
