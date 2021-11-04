import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const isLogged = true;
  return isLogged ? (
    <button className={styles.signInButton}>
      {" "}
      <FaGithub color="#04d361" />
      Teto
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton}>
      {" "}
      <FaGithub color="#04d361" />
      Sign in with Github
    </button>
  );
}
