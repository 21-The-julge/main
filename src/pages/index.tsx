import Badge from "@/common/components/Badge/Badge";

export default function Home() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("Badge Clicked!");
  };
  return (
    <>
      <Badge onClick={handleClick}>안녕</Badge>
      <Badge close={true} onClick={handleClick}>
        하세요
      </Badge>
      ;
    </>
  );
}
//<div>메인페이지</div>;
