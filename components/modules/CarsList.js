import React from "react";
import Back from "../icons/Back";
import CarCard from "./CarCard";
import styles from "./CarsList.module.css";
import { useRouter } from "next/router";

function CarsList({ data }) {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <span>back</span>
      </div>
      <div className={styles.carContainer}>
        {data.map((item) => (
          <CarCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
