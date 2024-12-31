import styles from "./styles.module.css"

export function Input() {
  return (
    <input
      type="text"
      autoFocus
      maxLength={1}
      placeholder="?"
      className={styles.input}
    />
  )
}
