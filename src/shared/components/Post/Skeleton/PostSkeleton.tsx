import classNames from "classnames/bind";
import styles from "@/shared/components/Post/Skeleton/PostSkeleton.module.scss";

const cn = classNames.bind(styles);

export default function PostSkeleton() {
  return (
    <div className={cn("Container")}>
      <div className={cn("skeleton")} />
    </div>
  );
}
