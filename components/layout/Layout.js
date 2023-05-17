import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <h2>sellCar</h2>
          <p>choose and buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <p> sellCar Next.js Project &copy;</p>
      </footer>
    </div>
  );
}

export default Layout;
