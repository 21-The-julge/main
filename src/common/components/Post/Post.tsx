import Image from "next/image";
import styles from "@/common/components/Post/Post.module.scss";

type Props = {
  noticeId: string;
  startsAt: string;
  workhour: number;
  hourlyPay: number;
  closed?: boolean;
  isPast?: boolean;
  noticeShopId?: string | undefined;
  myShopId?: string;
  imageUrl: string;
  name: string;
  address1: string;
  originalHourlyPay: number;
};

export default function Post({
  noticeId,
  startsAt,
  workhour,
  hourlyPay,
  closed,
  noticeShopId,
  myShopId,
  imageUrl,
  name,
  address1,
  originalHourlyPay,
}: Props) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.imgContainer}>
        <Image src={imageUrl} alt="식당 공고" fill />
      </div>
    </div>
  );
}
