import classNames from "classnames/bind";
import styles from "./Textarea.module.scss";

const cn = classNames.bind(styles);

interface TextareaProps {
  name?: string;
  value?: string;
  required?: boolean;
}

export default function Textarea({ name, value, required }: TextareaProps) {
  return (
    <textarea className={cn("textarea")} id={name} name={name} autoCorrect="off" required={required}>
      {value}
    </textarea>
  );
}
