import PostSkeleton from "@/shared/components/Post/Skeleton/PostSkeleton";
import classNames from "classnames/bind";
import styles from "./AllNoticesSkeleton.module.scss";

const cn = classNames.bind(styles);

export default function AllNoticesSkeleton() {
  return (
    <div className={cn("container")}>
      <div className={cn("header")}>
        <PostSkeleton className={cn("heading")} />
        <PostSkeleton className={cn("filter")} />
      </div>

      <div className={cn("list")}>
        <PostSkeleton className={cn("post")} />
        <PostSkeleton className={cn("post")} />
        <PostSkeleton className={cn("post")} />
        <PostSkeleton className={cn("post")} />
        <PostSkeleton className={cn("post")} />
        <PostSkeleton className={cn("post")} />
      </div>
    </div>
  );
}
