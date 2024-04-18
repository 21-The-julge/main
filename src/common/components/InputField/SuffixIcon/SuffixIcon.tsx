import styles from "./SuffixIcon.module.scss";

interface SuffixIconProps {
  suffix: string;
}

export default function SuffixIcon({ suffix }: SuffixIconProps) {
  return <div className={styles.suffixIcon}>{suffix}</div>;
}
