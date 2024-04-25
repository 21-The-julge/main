import classNames from "classnames/bind";
import styles from "./Textarea.module.scss";
import { TextareaProps } from "../type";

const cn = classNames.bind(styles);

export default function Textarea({ name, value, required, placeholder, onTextareaChange, rows }: TextareaProps) {
  return (
    <div className={cn("textareaBox")}>
      <textarea
        rows={rows}
        className={cn("textarea")}
        id={name}
        name={name}
        autoCorrect="off"
        required={required}
        placeholder={placeholder}
        onChange={onTextareaChange}
      >
        {value}
      </textarea>
    </div>
  );
}
