import classNames from "classnames/bind";
import styles from "@/shared/components/Post/Skeleton/PostSkeleton.module.scss";

const cn = classNames.bind(styles);

interface PostSkeletonProps {
  className: string;
}

export default function PostSkeleton({ className }: PostSkeletonProps) {
  return (
    <div className={cn("Container", className)}>
      <div className={cn("skeleton")} />
    </div>
  );
}
