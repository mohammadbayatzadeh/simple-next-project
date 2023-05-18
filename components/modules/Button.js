import styles from "./Button.module.css";
import { useRouter } from "next/router";

function Button() {
  const router = useRouter();
  return (
    <button className={styles.button} onClick={() => router.push("/cars")}>
      All Cars
    </button>
  );
}

export default Button;
