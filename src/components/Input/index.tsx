import styles from "./styles.module.css"
import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return (
    <input
      type="text"
      autoFocus
      maxLength={1}
      placeholder="?"
      className={styles.input}
      {...props}
    />
  )
}
