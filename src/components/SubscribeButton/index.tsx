import styles from "./button.module.scss";

export function SubscribeButton() {
  return (
    <button type="button" className={styles.buttonContainer}>
      Subscribe NOW!
    </button>
  );
}
