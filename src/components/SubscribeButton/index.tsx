import styles from "./button.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton(props: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.buttonContainer}>
      Subscribe NOW!
    </button>
  );
}
