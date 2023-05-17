import Link from "next/link";
import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import styles from "./Categories.module.css";

function Categories() {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan" className={styles.item}>
        <div>
          <Sedan />
          <p>Sedan</p>
        </div>
      </Link>
      <Link href="/categories/suv" className={styles.item}>
        <div>
          <Suv />
          <p>Suv</p>
        </div>
      </Link>
      <Link href="/categories/hatchback" className={styles.item}>
        <div>
          <Hatchback />
          <p>Hatchback</p>
        </div>
      </Link>
      <Link href="/categories/sport" className={styles.item}>
        <div>
          <Sport />
          <p>Sport</p>
        </div>
      </Link>
    </div>
  );
}

export default Categories;
