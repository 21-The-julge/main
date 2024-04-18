import Badge from "@/shared/components/Badge/Badge";

export default function Home() {
  return (
    <>
      <Badge color="red" hasCloseIcon={true}>
        서울
      </Badge>
      <Badge color="red" hasCloseIcon={true}>
        서울시
      </Badge>
      <Badge color="blue" styleMode="responsive">
        승인 완료
      </Badge>
    </>
  );
}
