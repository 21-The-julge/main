import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  errorMessage?: string;
}

export default function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  return <div className={styles.errorMessage}>{errorMessage}</div>;
}
