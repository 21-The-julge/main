import PostSkeleton from "@/shared/components/Post/Skeleton/PostSkeleton";
import classNames from "classnames/bind";

import styles from "./NoticesSkeleton.module.scss";

const cn = classNames.bind(styles);

interface NoticesSkeletonProps {
  isAllNotice?: boolean;
}

export default function NoticesSkeleton({ isAllNotice }: NoticesSkeletonProps) {
  if (isAllNotice) {
    return (
      <div className={cn("container")}>
        <div className={cn("header")}>
          <div className={cn("heading")}>전체 공고</div>
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

  return (
    <div className={cn("slider")}>
      <PostSkeleton className={cn("post")} />
      <PostSkeleton className={cn("post")} />
      <PostSkeleton className={cn("post")} />
    </div>
  );
}
