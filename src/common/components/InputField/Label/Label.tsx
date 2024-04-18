import styles from "./Label.module.scss";

interface LabelProps {
  name: string;
  label: string;
}

export default function Label({ name, label }: LabelProps) {
  return (
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
  );
}
